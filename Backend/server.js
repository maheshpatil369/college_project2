
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

// Get __dirname in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ Connected to MongoDB");
}).catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// -----------------------
// 🔐 Register Route
// -----------------------
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({
      message: 'User registered successfully',
      user: { name: newUser.name, email: newUser.email },
    });
  } catch (error) {
    console.error("❌ Error registering user:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// -----------------------
// 🔐 Login Route
// -----------------------
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({
      message: 'Login successful',
      user: { name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("❌ Error logging in user:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

import bcrypt from 'bcrypt';

// Then replace:
const match = await bcrypt.compare(password, user.password);
if (!match) {
  return res.status(401).json({ error: 'Incorrect password' });
}


// -----------------------
// 🌐 Serve Frontend Files
// -----------------------
app.use(express.static(path.join(__dirname, 'public')));

// -----------------------
// 🚀 Start Server
// -----------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
