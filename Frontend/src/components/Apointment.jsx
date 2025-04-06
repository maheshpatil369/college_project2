"use client"

import React, { useState } from "react"
import { createRoot } from "react-dom/client"
import {
  HomeIcon,
  InfoIcon,
  NewspaperIcon,
  WrenchIcon,
  UserIcon,
  StethoscopeIcon,
  PhoneIcon,
  StarIcon,
  CalendarIcon,
  SearchIcon,
} from "lucide-react"




// Doctor data
const doctors = [
  {
    id: 1,
    name: "Dr. Ram",
    specialization: "Specialization: Cardiologist",
    experience: "Experience: 15 years",
    fee: "Fee: ₹500",
  },
  {
    id: 2,
    name: "Dr. Rina",
    specialization: "Specialization: Gynaecologist",
    experience: "Experience: 8 years",
    fee: "Fee: ₹450",
  },
  {
    id: 3,
    name: "Dr. Ganesh",
    specialization: "Specialization: Dermatologist",
    experience: "Experience: 10 years",
    fee: "Fee: ₹600",
  },
  {
    id: 4,
    name: "Dr. Arpa",
    specialization: "Specialization: ENT",
    experience: "Experience: 9 years",
    fee: "Fee: ₹400",
  },
  {
    id: 5,
    name: "Dr. Sanket",
    specialization: "Specialization: Pediatrics",
    experience: "Experience: 7 years",
    fee: "Fee: ₹350",
  },
  {
    id: 6,
    name: "Dr. Ashwin",
    specialization: "Specialization: Cardiologist",
    experience: "Experience: 7 years",
    fee: "Fee: ₹500",
  },
  {
    id: 7,
    name: "Dr. Tushar",
    specialization: "Specialization: Dermatologist",
    experience: "Experience: 12 years",
    fee: "Fee: ₹550",
  },
  {
    id: 8,
    name: "Dr. Shivani",
    specialization: "Specialization: Endocrinologist",
    experience: "Experience: 6 years",
    fee: "Fee: ₹1000",
  },
  {
    id: 9,
    name: "Dr. Piyush",
    specialization: "Specialization: ENT",
    experience: "Experience: 10 years",
    fee: "Fee: ₹450",
  },
  {
    id: 10,
    name: "Dr. Dhanraj",
    specialization: "Specialization: Pediatrics",
    experience: "Experience: 11 years",
    fee: "Fee: ₹350",
  },
 
  {
    id: 12,
    name: "Dr. Dhanshree",
    specialization: "Specialization: Pediatrics",
    experience: "Experience: 5 years",
    fee: "Fee: ₹350",
  },
  {
    id: 13,
    name: "Dr. Radheshyam",
    specialization: "Specialization: Neurologist",
    experience: "Experience: 7 years",
    fee: "Fee: ₹650",
  },
  {
    id: 14,
    name: "Dr. Abhishek",
    specialization: "Specialization: Dermatologist",
    experience: "Experience: 8 years",
    fee: "Fee: ₹550",
  },
  {
    id: 15,
    name: "Dr. Kalyani",
    specialization: "Specialization: ENT",
    experience: "Experience: 9 years",
    fee: "Fee: ₹400",
  },
  {
    id: 16,
    name: "Dr. Priya",
    specialization: "Specialization: Pediatrics",
    experience: "Experience: 10 years",
    fee: "Fee: ₹350",
  },
]

// Header Component
function Header() {

  return (
    <header className="bg-teal-950 text-white p-3 flex items-center space-x-4 overflow-x-auto">
      <a href="/" className="flex items-center space-x-1 whitespace-nowrap">
        <HomeIcon size={16} />
        <span>Home</span>
      </a>
      <a href="/about" className="flex items-center space-x-1 whitespace-nowrap">
        <InfoIcon size={16} />
        <span>About</span>
      </a>
      <a href="/news" className="flex items-center space-x-1 whitespace-nowrap">
        <NewspaperIcon size={16} />
        <span>News</span>
      </a>
      <a href="/service" className="flex items-center space-x-1 whitespace-nowrap">
        <WrenchIcon size={16} />
        <span>Service</span>
      </a>
      <a href="/patient-portal" className="flex items-center space-x-1 whitespace-nowrap">
        <UserIcon size={16} />
        <span>Patient Portal</span>
      </a>
      <a href="/book-appointment" className="flex items-center space-x-1 whitespace-nowrap">
        <CalendarIcon size={16} />
        <span>Appointment</span>
      </a>
      <a href="/find-doctor" className="flex items-center space-x-1 whitespace-nowrap">
        <StethoscopeIcon size={16} />
        <span>Find Doctor</span>
      </a>
      <a href="/contact-us" className="flex items-center space-x-1 whitespace-nowrap">
        <PhoneIcon size={16} />
        <span>Contact us</span>
      </a>
      <a href="/rate-us" className="flex items-center space-x-1 whitespace-nowrap">
        <StarIcon size={16} />
        <span>Rate Us</span>
      </a>
    </header>
  )
}

// Footer Component
function Footer() {

  return (
    <footer className="bg-teal-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-teal-300">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/doctors">Doctors</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-teal-300">
              <li>
                <a href="/book-appointment">Appointment</a>
              </li>
              <li>
                <a href="/patient-portal">Patient Portal</a>
              </li>
              <li>
                <a href="/login">Login account</a>
              </li>
              <li>
                <a href="/helplines">Helplines</a>
              </li>
              <li>
                <a href="/location">Location</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-teal-300">
              <li>
                <a href="/customer-agreement">Customer Agreement</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms and Conditions</a>
              </li>
              <li>
                <a href="/gdpr">GDPR</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">RAPIDOC Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for a weekly dose of news, updates, helpful tips, and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-teal-800 text-white px-3 py-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-white text-teal-900 px-3 py-2 rounded-r-md font-semibold">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-teal-800 text-center text-sm">
          <p></p>
          <div className="flex justify-center space-x-4 mt-2">{/* Social media icons would go here */}</div>
        </div>
      </div>
    </footer>
  )
}

// Home Page Component
export function HomePage() {

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main className="container mx-auto p-4">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <h1 className="text-4xl font-bold text-white mb-6">Welcome to RAPIDOC</h1>
          <div className="flex space-x-4">
            <a
              href="/apoBook"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-md"
            >
              Book an Appointment
            </a>
            <a
              href="/apoFind"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-md"
            >
              Find a Doctor
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

// Book Appointment Page Component
export function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    doctor: "",
    appointmentDate: "",
    appointmentTime: "",
    reason: "",
    isExistingPatient: false,
  })

  const [showPreview, setShowPreview] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handlePreview = (e) => {
    e.preventDefault()
    setShowPreview(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Submit logic would go here
    alert("Appointment submitted successfully!")
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main className="container mx-auto p-4 py-8">
        <div className="max-w-2xl mx-auto bg-teal-900 rounded-lg p-8">
          <h1 className="text-3xl font-bold text-white mb-2">Book an Appointment</h1>
          <p className="text-teal-100 mb-6">Conveniently Connect with the Healthcare Experts!</p>

          <form onSubmit={handlePreview} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-white mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-teal-800 text-white border border-teal-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label htmlFor="dateOfBirth" className="block text-white mb-1">
                Date of Birth:
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full bg-teal-800 text-white border border-teal-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
                <CalendarIcon className="absolute right-3 top-2.5 text-teal-400" size={20} />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
                className="w-full bg-teal-800 text-white border border-teal-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full bg-teal-800 text-white border border-teal-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label htmlFor="doctor" className="block text-white mb-1">
                Select a Doctor
              </label>
              <select
                id="doctor"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="w-full bg-teal-800 text-white border border-teal-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              >
                <option value="">Select a Doctor</option>
                <option value="Dr. Ram">Dr. Ram</option>
                <option value="Dr. Rina">Dr. Rina</option>
                <option value="Dr. Rina">Dr. God</option>
                <option value="Dr. Rina">Dr. Gayatri</option>
                <option value="Dr. Rina">Dr. Yash</option>
                <option value="Dr. Rina">Dr. Priyanka</option>
                <option value="Dr. Ganesh">Dr. Ganesh</option>
                <option value="Dr. Arpa">Dr. Arpa</option>
              </select>
            </div>

            <div>
              <label htmlFor="appointmentDate" className="block text-white mb-1">
                Appointment:
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="appointmentDate"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  className="w-full bg-teal-800 text-white border border-teal-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
                <CalendarIcon className="absolute right-3 top-2.5 text-teal-400" size={20} />
              </div>
            </div>

            <div>
              <label htmlFor="appointmentTime" className="block text-white mb-1">
                Select a Time
              </label>
              <select
                id="appointmentTime"
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleChange}
                className="w-full bg-teal-800 text-white border border-teal-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              >
                <option value="">Select Time</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
              </select>
            </div>

            <div>
              <label htmlFor="reason" className="block text-white mb-1">
                Reason for Visit
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Enter your reason for visit..."
                className="w-full bg-teal-800 text-white border border-teal-700 rounded p-2 h-24 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="isExistingPatient"
                name="isExistingPatient"
                checked={formData.isExistingPatient}
                onChange={handleChange}
                className="mr-2 h-4 w-4"
              />
              <label htmlFor="isExistingPatient" className="text-white">
                Existing Patient?
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
              Preview Appointment
            </button>
          </form>

          {showPreview && (
            <div className="mt-8 bg-teal-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Appointment Details</h2>
              <div className="space-y-2 text-teal-100">
                <p>
                  <span className="font-semibold">Name:</span> {formData.fullName}
                </p>
                <p>
                  <span className="font-semibold">DOB:</span> {formData.dateOfBirth}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {formData.email}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> {formData.phone}
                </p>
                <p>
                  <span className="font-semibold">Doctor:</span> {formData.doctor}
                </p>
                <p>
                  <span className="font-semibold">Date:</span> {formData.appointmentDate}
                </p>
                <p>
                  <span className="font-semibold">Time:</span> {formData.appointmentTime}
                </p>
                <p>
                  <span className="font-semibold">Reason:</span> {formData.reason}
                </p>
              </div>

              <div className="mt-6 flex space-x-4">
                <button
                  onClick={handleSubmit}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition duration-200"
                >
                  Submit
                </button>
                <button
                  onClick={() => setShowPreview(false)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded transition duration-200"
                >
                  Edit
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

// Find Doctor Page Component
export function FindDoctorPage() {
  const [experience, setExperience] = useState(0)
  const [fee, setFee] = useState(1000)

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main className="container mx-auto p-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-6">Find a Doctor</h1>

          <div className="flex flex-wrap items-center justify-between gap-4 bg-teal-950 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <div>
                <label htmlFor="experience" className="block text-teal-300 mb-1">
                  Experience:
                </label>
                <input
                  type="range"
                  id="experience"
                  min="0"
                  max="15"
                  value={experience}
                  onChange={(e) => setExperience(Number.parseInt(e.target.value))}
                  className="w-32 accent-teal-500"
                />
                <span className="ml-2 text-white">{experience}+ years</span>
              </div>

              <div>
                <label htmlFor="fee" className="block text-teal-300 mb-1">
                  Maximum Fee:
                </label>
                <div className="flex items-center">
                  <input
                    type="range"
                    id="fee"
                    min="300"
                    max="1000"
                    step="50"
                    value={fee}
                    onChange={(e) => setFee(Number.parseInt(e.target.value))}
                    className="w-32 accent-teal-500"
                  />
                  <span className="ml-2 text-white">₹{fee}</span>
                </div>
              </div>
            </div>

            <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md flex items-center">
              <SearchIcon size={18} className="mr-2" />
              Filter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {doctors
            .filter((doctor) => {
              const doctorExp = Number.parseInt(doctor.experience.split(" ")[1])
              const doctorFee = Number.parseInt(doctor.fee.split("₹")[1])
              return doctorExp >= experience && doctorFee <= fee
            })
            .map((doctor, index) => (
              <div
                key={doctor.id}
                className={`${index % 4 === 1 || index % 4 === 2 ? "bg-teal-600" : "bg-teal-900"} rounded-lg p-4 flex justify-between items-center`}
              >
                <div>
                  <h2 className="text-xl font-bold text-white">{doctor.name}</h2>
                  <p className="text-teal-100">{doctor.specialization}</p>
                  <p className="text-teal-100">{doctor.experience}</p>
                  <p className="text-teal-100">{doctor.fee}</p>
                </div>
                <div className="h-16 w-16 rounded-full bg-teal-700 flex items-center justify-center">
                  {/* Placeholder for doctor image */}
                  <div className="text-white text-xl font-bold">{doctor.name.split(" ")[1][0]}</div>
                </div>
              </div>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

// Not Found Page Component
export function NotFoundPage() {

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
        <p className="text-teal-300 mb-8">The page you are looking for does not exist.</p>
        <a href="/" className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-md">
          Go Home
        </a>
      </main>
      <Footer />
    </div>
  )
}


{/* <HomePage /> */}
{/* <BookAppointmentPage /> */}
{/* <FindDoctorPage /> */}
{/* <NotFoundPage /> */}

// Add Tailwind CSS
const style = document.createElement("style")
style.textContent = `
/* Tailwind CSS utility classes */
.min-h-screen { min-height: 100vh; }
.bg-gray-950 { background-color: #030712; }
.bg-teal-950 { background-color: #042f2e; }
.bg-teal-900 { background-color: #134e4a; }
.bg-teal-800 { background-color: #115e59; }
.bg-teal-700 { background-color: #0f766e; }
.bg-teal-600 { background-color: #0d9488; }
.bg-teal-500 { background-color: #14b8a6; }
.bg-teal-400 { background-color: #2dd4bf; }
.bg-teal-300 { background-color: #5eead4; }
.bg-teal-100 { background-color: #ccfbf1; }
.bg-green-500 { background-color: #22c55e; }
.bg-green-600 { background-color: #16a34a; }
.bg-red-500 { background-color: #ef4444; }
.bg-red-600 { background-color: #dc2626; }
.bg-white { background-color: #ffffff; }
.text-white { color: #ffffff; }
.text-teal-900 { color: #134e4a; }
.text-teal-400 { color: #2dd4bf; }
.text-teal-300 { color: #5eead4; }
.text-teal-100 { color: #ccfbf1; }
.border-teal-800 { border-color: #115e59; }
.border-teal-700 { border-color: #0f766e; }
.container { width: 100%; margin-left: auto; margin-right: auto; }
.mx-auto { margin-left: auto; margin-right: auto; }
.p-3 { padding: 0.75rem; }
.p-4 { padding: 1rem; }
.p-6 { padding: 1.5rem; }
.p-8 { padding: 2rem; }
.px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
.py-8 { padding-top: 2rem; padding-bottom: 2rem; }
.pt-4 { padding-top: 1rem; }
.mb-1 { margin-bottom: 0.25rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-8 { margin-bottom: 2rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-6 { margin-top: 1.5rem; }
.mt-8 { margin-top: 2rem; }
.ml-2 { margin-left: 0.5rem; }
.mr-2 { margin-right: 0.5rem; }
.space-x-1 > * + * { margin-left: 0.25rem; }
.space-x-4 > * + * { margin-left: 1rem; }
.space-y-2 > * + * { margin-top: 0.5rem; }
.space-y-4 > * + * { margin-top: 1rem; }
.flex { display: flex; }
.grid { display: grid; }
.hidden { display: none; }
.h-4 { height: 1rem; }
.h-16 { height: 4rem; }
.h-24 { height: 6rem; }
.w-16 { width: 4rem; }
.w-32 { width: 8rem; }
.w-full { width: 100%; }
.max-w-2xl { max-width: 42rem; }
.min-h-\\[80vh\\] { min-height: 80vh; }
.shrink-0 { flex-shrink: 0; }
.flex-1 { flex: 1 1 0%; }
.flex-col { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-2 { gap: 0.5rem; }
.gap-4 { gap: 1rem; }
.gap-6 { gap: 1.5rem; }
.gap-8 { gap: 2rem; }
.overflow-x-auto { overflow-x: auto; }
.rounded { border-radius: 0.25rem; }
.rounded-md { border-radius: 0.375rem; }
.rounded-lg { border-radius: 0.5rem; }
.rounded-full { border-radius: 9999px; }
.rounded-l-md { border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem; }
.rounded-r-md { border-top-right-radius: 0.375rem; border-bottom-right-radius: 0.375rem; }
.border { border-width: 1px; }
.border-t { border-top-width: 1px; }
.text-center { text-align: center; }
.text-sm { font-size: 0.875rem; line-height: 1.25rem; }
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }
.text-2xl { font-size: 1.5rem; line-height: 2rem; }
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
.font-bold { font-weight: 700; }
.font-semibold { font-weight: 600; }
.font-medium { font-weight: 500; }
.whitespace-nowrap { white-space: nowrap; }
.focus\\:outline-none:focus { outline: 2px solid transparent; outline-offset: 2px; }
.focus\\:ring-2:focus { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); }
.focus\\:ring-teal-500:focus { --tw-ring-color: #14b8a6; }
.hover\\:bg-teal-600:hover { background-color: #0d9488; }
.hover\\:bg-teal-700:hover { background-color: #0f766e; }
.hover\\:bg-green-600:hover { background-color: #16a34a; }
.hover\\:bg-red-600:hover { background-color: #dc2626; }
.accent-teal-500 { accent-color: #14b8a6; }
.transition { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
.duration-200 { transition-duration: 200ms; }
.relative { position: relative; }
.absolute { position: absolute; }
.top-2\\.5 { top: 0.625rem; }
.right-3 { right: 0.75rem; }
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
@media (min-width: 768px) {
  .md\\:block { display: block; }
  .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .md\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
`
document.head.appendChild(style)


