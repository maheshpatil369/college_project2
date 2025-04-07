import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url'; // Import the fileURLToPath utility

// Load environment variables
dotenv.config();

// Get the current directory name equivalent to __dirname in CommonJS
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Initialize the app
const app = express();

// Middleware to parse incoming JSON data and enable CORS
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

// User Schema and Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

const appointmentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  doctor: { type: String, required: true },
  appointmentDate: { type: String, required: true },
  appointmentTime: { type: String, required: true },
  reason: { type: String, required: true },
  isExistingPatient: { type: Boolean, required: true },
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);


// Register route (POST)
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login route (POST)
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST: Create new appointment
app.post('/appointments', async (req, res) => {
  try {
    const { doctor, appointmentDate, appointmentTime } = req.body;

    // Check if the doctor is already booked at this date and time
    const existingAppointment = await Appointment.findOne({
      doctor,
      appointmentDate,
      appointmentTime,
    });

    if (existingAppointment) {
      return res.status(400).json({ error: "This slot is already booked with the selected doctor." });
    }

    const newAppointment = new Appointment(req.body);
    await newAppointment.save();

    res.status(201).json({ message: "Appointment booked successfully", appointment: newAppointment });
  } catch (err) {
    console.error("Error creating appointment:", err);
    res.status(500).json({ error: "Failed to book appointment" });
  }
});


// GET: Fetch all appointments
app.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    console.error("Error fetching appointments:", err);
    res.status(500).json({ error: "Failed to fetch appointments" });
  }
});


// Serve the static index.html file (Frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Start server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log( `Server is running on port ${PORT}`);
});


console.log(process.env.MONGO_URI);  // This will print the MongoDB URI to the console