"use client"

import React, { useEffect, useState } from "react"
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
import { useLocation, useNavigate } from "react-router-dom"




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
// function Header() {

//   return (
//     <header className="bg-teal-950 text-white p-3 flex items-center space-x-4 overflow-x-auto">
//       <a href="/" className="flex items-center space-x-1 whitespace-nowrap">
//         <HomeIcon size={16} />
//         <span>Home</span>
//       </a>
//       <a href="/about" className="flex items-center space-x-1 whitespace-nowrap">
//         <InfoIcon size={16} />
//         <span>About</span>
//       </a>
//       <a href="/news" className="flex items-center space-x-1 whitespace-nowrap">
//         <NewspaperIcon size={16} />
//         <span>News</span>
//       </a>
//       <a href="/service" className="flex items-center space-x-1 whitespace-nowrap">
//         <WrenchIcon size={16} />
//         <span>Service</span>
//       </a>
//       <a href="/patient-portal" className="flex items-center space-x-1 whitespace-nowrap">
//         <UserIcon size={16} />
//         <span>Patient Portal</span>
//       </a>
//       <a href="/book-appointment" className="flex items-center space-x-1 whitespace-nowrap">
//         <CalendarIcon size={16} />
//         <span>Appointment</span>
//       </a>
//       <a href="/find-doctor" className="flex items-center space-x-1 whitespace-nowrap">
//         <StethoscopeIcon size={16} />
//         <span>Find Doctor</span>
//       </a>
//       <a href="/contact-us" className="flex items-center space-x-1 whitespace-nowrap">
//         <PhoneIcon size={16} />
//         <span>Contact us</span>
//       </a>
//       <a href="/rate-us" className="flex items-center space-x-1 whitespace-nowrap">
//         <StarIcon size={16} />
//         <span>Rate Us</span>
//       </a>
//     </header>
//   )
// }

// function Header() {
//   const handleNoAction = (e) => {
//     e.preventDefault(); // Prevent any action when the element is clicked
//   };

//   return (
//     <header className="bg-teal-950 text-white p-3 flex items-center space-x-4 overflow-x-auto">
//       <button onClick={handleNoAction} className="flex items-center space-x-1 whitespace-nowrap px-3 py-2 rounded-md hover:bg-teal-800 transition">
//         <HomeIcon size={16} />
//         <span>Home</span>
//       </button>
//       <button onClick={handleNoAction} className="flex items-center space-x-1 whitespace-nowrap px-3 py-2 rounded-md hover:bg-teal-800 transition">
//         <InfoIcon size={16} />
//         <span>About</span>
//       </button>
//       <button onClick={handleNoAction} className="flex items-center space-x-1 whitespace-nowrap px-3 py-2 rounded-md hover:bg-teal-800 transition">
//         <NewspaperIcon size={16} />
//         <span>News</span>
//       </button>
//       <button onClick={handleNoAction} className="flex items-center space-x-1 whitespace-nowrap px-3 py-2 rounded-md hover:bg-teal-800 transition">
//         <WrenchIcon size={16} />
//         <span>Service</span>
//       </button>
//       <button onClick={handleNoAction} className="flex items-center space-x-1 whitespace-nowrap px-3 py-2 rounded-md hover:bg-teal-800 transition">
//         <UserIcon size={16} />
//         <span>Patient Portal</span>
//       </button>
//       <button onClick={handleNoAction} className="flex items-center space-x-1 whitespace-nowrap px-3 py-2 rounded-md hover:bg-teal-800 transition">
//         <CalendarIcon size={16} />
//         <span>Appointment</span>
//       </button>
//       <button onClick={handleNoAction} className="flex items-center space-x-1 whitespace-nowrap px-3 py-2 rounded-md hover:bg-teal-800 transition">
//         <StethoscopeIcon size={16} />
//         <span>Find Doctor</span>
//       </button>
//       <button onClick={handleNoAction} className="flex items-center space-x-1 whitespace-nowrap px-3 py-2 rounded-md hover:bg-teal-800 transition">
//         <PhoneIcon size={16} />
//         <span>Contact us</span>
//       </button>
//       <button onClick={handleNoAction} className="flex items-center space-x-1 whitespace-nowrap px-3 py-2 rounded-md hover:bg-teal-800 transition">
//         <StarIcon size={16} />
//         <span>Rate Us</span>
//       </button>
//     </header>
//   );
// }


function Header() {
  const handleNoAction = (e) => {
    e.preventDefault();
  };

  return (
    <header className="bg-teal-950 text-white p-2 flex items-center space-x-2 overflow-x-auto text-sm">
      <button onClick={handleNoAction} className="flex items-center space-x-1 whitespace-nowrap px-2 py-1 rounded-md hover:bg-teal-800 transition">
        <HomeIcon size={14} />
        <span>Home</span>
      </button>
      <button onClick={handleNoAction} className="flex items-center space-x-1 whitespace-nowrap px-2 py-1 rounded-md hover:bg-teal-800 transition">
        <InfoIcon size={14} />
        <span>About</span>
      </button>
      <button onClick={handleNoAction} className="flex items-center space-x-1 whitespace-nowrap px-2 py-1 rounded-md hover:bg-teal-800 transition">
        <NewspaperIcon size={14} />
        <span>News</span>
      </button>
      <button onClick={handleNoAction} className="flex items-center space-x-1 whitespace-nowrap px-2 py-1 rounded-md hover:bg-teal-800 transition">
        <WrenchIcon size={14} />
        <span>Service</span>
      </button>
      <button onClick={handleNoAction} className="flex items-center space-x-1 whitespace-nowrap px-2 py-1 rounded-md hover:bg-teal-800 transition">
        <UserIcon size={14} />
        <span>Patient Portal</span>
      </button>
      <button onClick={handleNoAction} className="flex items-center space-x-1 whitespace-nowrap px-2 py-1 rounded-md hover:bg-teal-800 transition">
        <CalendarIcon size={14} />
        <span>Appointment</span>
      </button>
      <button onClick={handleNoAction} className="flex items-center space-x-1 whitespace-nowrap px-2 py-1 rounded-md hover:bg-teal-800 transition">
        <StethoscopeIcon size={14} />
        <span>Find Doctor</span>
      </button>
      <button onClick={handleNoAction} className="flex items-center space-x-1 whitespace-nowrap px-2 py-1 rounded-md hover:bg-teal-800 transition">
        <PhoneIcon size={14} />
        <span>Contact us</span>
      </button>
      <button onClick={handleNoAction} className="flex items-center space-x-1 whitespace-nowrap px-2 py-1 rounded-md hover:bg-teal-800 transition">
        <StarIcon size={14} />
        <span>Rate Us</span>
      </button>
    </header>
  );
}


// Footer Component
// function Footer() {

//   return (
//     <footer className="bg-teal-950 text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-teal-300">
//               <li>
//                 <a href="/">Home</a>
//               </li>
//               <li>
//                 <a href="/about-us">About Us</a>
//               </li>
//               <li>
//                 <a href="/contact-us">Contact Us</a>
//               </li>
//               <li>
//                 <a href="/services">Services</a>
//               </li>
//               <li>
//                 <a href="/doctors">Doctors</a>
//               </li>
//               <li>
//                 <a href="/faq">FAQ</a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Explore</h3>
//             <ul className="space-y-2 text-teal-300">
//               <li>
//                 <a href="/book-appointment">Appointment</a>
//               </li>
//               <li>
//                 <a href="/patient-portal">Patient Portal</a>
//               </li>
//               <li>
//                 <a href="/login">Login account</a>
//               </li>
//               <li>
//                 <a href="/helplines">Helplines</a>
//               </li>
//               <li>
//                 <a href="/location">Location</a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Legal</h3>
//             <ul className="space-y-2 text-teal-300">
//               <li>
//                 <a href="/customer-agreement">Customer Agreement</a>
//               </li>
//               <li>
//                 <a href="/privacy-policy">Privacy Policy</a>
//               </li>
//               <li>
//                 <a href="/terms">Terms and Conditions</a>
//               </li>
//               <li>
//                 <a href="/gdpr">GDPR</a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">RAPIDOC Newsletter</h3>
//             <p className="text-sm mb-4">
//               Subscribe to our newsletter for a weekly dose of news, updates, helpful tips, and exclusive offers.
//             </p>
//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="bg-teal-800 text-white px-3 py-2 rounded-l-md focus:outline-none"
//               />
//               <button className="bg-white text-teal-900 px-3 py-2 rounded-r-md font-semibold">SUBSCRIBE</button>
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 pt-4 border-t border-teal-800 text-center text-sm">
//           <p></p>
//           <div className="flex justify-center space-x-4 mt-2">{/* Social media icons would go here */}</div>
//         </div>
//       </div>
//     </footer>
//   )
// }

function Footer() {
  return (
    <footer className="bg-teal-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-teal-300">
              <li><a href="/" onClick={(e) => e.preventDefault()}>Home</a></li>
              <li><a href="/about-us" onClick={(e) => e.preventDefault()}>About Us</a></li>
              <li><a href="/contact-us" onClick={(e) => e.preventDefault()}>Contact Us</a></li>
              <li><a href="/services" onClick={(e) => e.preventDefault()}>Services</a></li>
              <li><a href="/doctors" onClick={(e) => e.preventDefault()}>Doctors</a></li>
              <li><a href="/faq" onClick={(e) => e.preventDefault()}>FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-teal-300">
              <li><a href="/book-appointment" onClick={(e) => e.preventDefault()}>Appointment</a></li>
              <li><a href="/patient-portal" onClick={(e) => e.preventDefault()}>Patient Portal</a></li>
              <li><a href="/login" onClick={(e) => e.preventDefault()}>Login account</a></li>
              <li><a href="/helplines" onClick={(e) => e.preventDefault()}>Helplines</a></li>
              <li><a href="/location" onClick={(e) => e.preventDefault()}>Location</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-teal-300">
              <li><a href="/customer-agreement" onClick={(e) => e.preventDefault()}>Customer Agreement</a></li>
              <li><a href="/privacy-policy" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
              <li><a href="/terms" onClick={(e) => e.preventDefault()}>Terms and Conditions</a></li>
              <li><a href="/gdpr" onClick={(e) => e.preventDefault()}>GDPR</a></li>
            </ul>
          </div>

        {/*  <div>
            <h3 className="text-lg font-semibold mb-4">RAPIDOC Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for a weekly dose of news, updates, helpful tips, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Your email"
                className="bg-teal-800 text-white px-3 py-2 rounded-l-md focus:outline-none w-full sm:w-auto"
                disabled
              />
              <button
                onClick={(e) => e.preventDefault()}
                className="bg-white text-teal-900 px-3 py-2 rounded-r-md font-semibold"
              >
                SUBSCRIBE
              </button>
            </div>
          </div> */}
         <div>
  <h3 className="text-2xl font-semibold mb-4">RAPIDOC Newsletter</h3>
  <p className="text-sm mb-4 max-w-xs mx-auto">
    Subscribe to our newsletter for a weekly dose of news, updates, helpful tips, and exclusive offers.
  </p>
  <div className="flex">
    <input
      type="email"
      placeholder="Your email"
      className="bg-teal-800 text-white px-3 py-2 rounded-l-md focus:outline-none text-base w-full sm:w-auto"
    />
    <button className="bg-white text-teal-900 px-3 py-2 rounded-r-md font-semibold text-lg">
      SUBSCRIBE
    </button>
  </div>
</div>


        </div>

        <div className="mt-8 pt-4 border-t border-teal-800 text-center text-sm">
          <p>© 2025 RAPIDOC. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            {/* Social media icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}









// Find Doctor Page Component
// export function FindDoctorPage() {
//   const [experience, setExperience] = useState(0);
//   const [fee, setFee] = useState(1000);
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gray-950">
//       <Header />
//       <main className="container mx-auto p-4 py-8">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-white mb-6">Find a Doctor</h1>

//           <div className="flex flex-wrap items-center justify-between gap-4 bg-teal-950 p-4 rounded-lg">
//             <div className="flex items-center gap-4">
//               <div>
//                 <label htmlFor="experience" className="block text-teal-300 mb-1">Experience:</label>
//                 <input type="range" id="experience" min="0" max="15" value={experience} onChange={(e) => setExperience(parseInt(e.target.value))} className="w-32 accent-teal-500" />
//                 <span className="ml-2 text-white">{experience}+ years</span>
//               </div>
//               <div>
//                 <label htmlFor="fee" className="block text-teal-300 mb-1">Maximum Fee:</label>
//                 <div className="flex items-center">
//                   <input type="range" id="fee" min="300" max="1000" step="50" value={fee} onChange={(e) => setFee(parseInt(e.target.value))} className="w-32 accent-teal-500" />
//                   <span className="ml-2 text-white">₹{fee}</span>
//                 </div>
//               </div>
//             </div>
//             <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md flex items-center">
//               <SearchIcon size={18} className="mr-2" /> Filter
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {doctors
//             .filter((doctor) => {
//               const doctorExp = parseInt(doctor.experience.split(" ")[1]);
//               const doctorFee = parseInt(doctor.fee.split("₹")[1]);
//               return doctorExp >= experience && doctorFee <= fee;
//             })
//             .map((doctor, index) => (
//               <div
//                 key={doctor.id}
//                 onClick={() => navigate("/apoBook", { state: { doctorName: doctor.name } })}
//                 className={`cursor-pointer ${index % 4 === 1 || index % 4 === 2 ? "bg-teal-600" : "bg-teal-900"} rounded-lg p-4 flex justify-between items-center`}
//               >
//                 <div>
//                   <h2 className="text-xl font-bold text-white">{doctor.name}</h2>
//                   <p className="text-teal-100">{doctor.specialization}</p>
//                   <p className="text-teal-100">{doctor.experience}</p>
//                   <p className="text-teal-100">{doctor.fee}</p>
//                 </div>
//                 <div className="h-16 w-16 rounded-full bg-teal-700 flex items-center justify-center">
//                   <div className="text-white text-xl font-bold">{doctor.name.split(" ")[1][0]}</div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }


// export function FindDoctorPage() {
//   const [experience, setExperience] = useState(0);
//   const [fee, setFee] = useState(1000);
//   const [specialization, setSpecialization] = useState("");
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gray-950">
//       <Header />
//       <main className="container mx-auto p-4 py-8">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-white mb-6">Find a Doctor</h1>

//           <div className="flex flex-wrap items-center justify-between gap-4 bg-teal-950 p-4 rounded-lg">
//             <div className="flex items-center gap-4 flex-wrap">
//               <div>
//                 <label htmlFor="experience" className="block text-teal-300 mb-1">Experience:</label>
//                 <input
//                   type="range"
//                   id="experience"
//                   min="0"
//                   max="15"
//                   value={experience}
//                   onChange={(e) => setExperience(parseInt(e.target.value))}
//                   className="w-32 accent-teal-500"
//                 />
//                 <span className="ml-2 text-white">{experience}+ years</span>
//               </div>
//               <div>
//                 <label htmlFor="fee" className="block text-teal-300 mb-1">Maximum Fee:</label>
//                 <div className="flex items-center">
//                   <input
//                     type="range"
//                     id="fee"
//                     min="300"
//                     max="1000"
//                     step="50"
//                     value={fee}
//                     onChange={(e) => setFee(parseInt(e.target.value))}
//                     className="w-32 accent-teal-500"
//                   />
//                   <span className="ml-2 text-white">₹{fee}</span>
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="specialization" className="block text-teal-300 mb-1">Specialization:</label>
//                 <select
//                   id="specialization"
//                   value={specialization}
//                   onChange={(e) => setSpecialization(e.target.value)}
//                   className="bg-white text-black px-2 py-1 rounded-md"
//                 >
//                   <option value="">All</option>
//                   <option value="Cardiologist">Cardiologist</option>
//                   <option value="Dermatologist">Dermatologist</option>
//                   <option value="ENT">ENT</option>
//                   <option value="Gynaecologist">Gynaecologist</option>
//                   <option value="Pediatrics">Pediatrics</option>
//                   <option value="Endocrinologist">Endocrinologist</option>
//                   <option value="Neurologist">Neurologist</option>
//                 </select>
//               </div>
//             </div>
//             <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md flex items-center">
//               <SearchIcon size={18} className="mr-2" /> Filter
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {doctors
//             .filter((doctor) => {
//               const doctorExp = parseInt(doctor.experience.split(" ")[1]);
//               const doctorFee = parseInt(doctor.fee.split("₹")[1]);
//               const specializationMatch =
//                 specialization === "" || doctor.specialization === specialization;

//               return doctorExp >= experience && doctorFee <= fee && specializationMatch;
//             })
//             .map((doctor, index) => (
//               <div
//                 key={doctor.id}
//                 onClick={() => navigate("/apoBook", { state: { doctorName: doctor.name } })}
//                 className={`cursor-pointer ${
//                   index % 4 === 1 || index % 4 === 2 ? "bg-teal-600" : "bg-teal-900"
//                 } rounded-lg p-4 flex justify-between items-center`}
//               >
//                 <div>
//                   <h2 className="text-xl font-bold text-white">{doctor.name}</h2>
//                   <p className="text-teal-100">{doctor.specialization}</p>
//                   <p className="text-teal-100">{doctor.experience}</p>
//                   <p className="text-teal-100">{doctor.fee}</p>
//                 </div>
//                 <div className="h-16 w-16 rounded-full bg-teal-700 flex items-center justify-center">
//                   <div className="text-white text-xl font-bold">
//                     {doctor.name.split(" ")[1][0]}
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }


export function FindDoctorPage() {
  const [experience, setExperience] = useState(0);
  const [fee, setFee] = useState(1000);
  const [specialization, setSpecialization] = useState("");
  const navigate = useNavigate();

  const specializations = Array.from(new Set(doctors.map((d) => d.specialization)));

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main className="container mx-auto p-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-6">Find a Doctor</h1>

          {/* Filter Section */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-teal-950 p-4 rounded-lg">
            <div className="flex items-center gap-8">
              {/* Experience Filter */}
              <div>
                <label htmlFor="experience" className="block text-teal-300 text-sm font-medium mb-1">
                  Experience:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    id="experience"
                    min="0"
                    max="15"
                    value={experience}
                    onChange={(e) => setExperience(parseInt(e.target.value))}
                    className="w-32 accent-teal-500"
                  />
                  <span className="text-white">{experience}+ yrs</span>
                </div>
              </div>

              {/* Fee Filter */}
              <div>
                <label htmlFor="fee" className="block text-teal-300 text-sm font-medium mb-1">
                  Maximum Fee:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    id="fee"
                    min="300"
                    max="1000"
                    step="50"
                    value={fee}
                    onChange={(e) => setFee(parseInt(e.target.value))}
                    className="w-32 accent-teal-500"
                  />
                  <span className="text-white">₹{fee}</span>
                </div>
              </div>

              {/* Specialization Filter */}
              <div>
                <label htmlFor="specialization" className="block text-teal-300 text-sm font-medium mb-1">
                  Specialization:
                </label>
                <select
                  id="specialization"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  className="bg-teal-800 text-white px-3 py-2 rounded-md"
                >
                  <option value="">All</option>
                  {specializations.map((spec) => (
                    <option key={spec} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Filter Reset Button */}
            <button
              onClick={() => {
                setExperience(0);
                setFee(1000);
                setSpecialization("");
              }}
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md flex items-center"
            >
              <SearchIcon size={18} className="mr-2" />
              Reset Filters
            </button>
          </div>
        </div>

        {/* Filtered Doctors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {doctors
            .filter((doctor) => {
              const doctorExp = parseInt(doctor.experience.split(" ")[1]);
              const doctorFee = parseInt(doctor.fee.split("₹")[1]);
              const specMatch = specialization === "" || doctor.specialization === specialization;
              return doctorExp >= experience && doctorFee <= fee && specMatch;
            })
            .map((doctor, index) => (
              <div
                key={doctor.id}
                onClick={() => navigate("/apoBook", { state: { doctorName: doctor.name } })}
                className={`cursor-pointer ${
                  index % 4 === 1 || index % 4 === 2 ? "bg-teal-600" : "bg-teal-900"
                } rounded-lg p-4 flex justify-between items-center`}
              >
                <div>
                  <h2 className="text-xl font-bold text-white">{doctor.name}</h2>
                  <p className="text-teal-100">{doctor.specialization}</p>
                  <p className="text-teal-100">{doctor.experience}</p>
                  <p className="text-teal-100">{doctor.fee}</p>
                </div>
                <div className="h-16 w-16 rounded-full bg-teal-700 flex items-center justify-center">
                  <div className="text-white text-xl font-bold">
                    {doctor.name.split(" ")[1][0]}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}



// Book Appointment Page Component
export function BookAppointmentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const doctorFromFindPage = location.state?.doctorName || "";

  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    doctor: doctorFromFindPage,
    appointmentDate: "",
    appointmentTime: "",
    reason: "",
    is: false,
  });

  const [showPreview, setShowPreview] = useState(false);

  const fixedTimeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handlePreview = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Appointment submitted successfully!");
        setFormData({
          fullName: "",
          dateOfBirth: "",
          email: "",
          phone: "",
          doctor: "",
          appointmentDate: "",
          appointmentTime: "",
          reason: "",
          isExistingPatient: false,
        });
        setShowPreview(false);
      } else alert("Error: " + data.error);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main className="container mx-auto p-4 py-8">
        <div className="max-w-2xl mx-auto bg-teal-900 rounded-lg p-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-white">Book an Appointment</h1>
            <button
              onClick={() => navigate("/apoHistory")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              View History
            </button>
          </div>
          <p className="text-teal-100 mb-6">
            Conveniently Connect with the Healthcare Experts!
          </p>

          <form onSubmit={handlePreview} className="space-y-4">
            <div>
              <label htmlFor="doctor" className="block text-white mb-1">Select a Doctor</label>
              <input
                type="text"
                id="doctor"
                name="doctor"
                value={formData.doctor}
                readOnly
                className="w-full bg-teal-800 text-white border border-teal-700 rounded p-2"
              />
            </div>

            <div>
              <label htmlFor="fullName" className="block text-white mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full bg-teal-800 text-white border border-teal-700 rounded p-2"
              />
            </div>

            <div>
              <label htmlFor="dateOfBirth" className="block text-white mb-1">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="w-full bg-teal-800 text-white border border-teal-700 rounded p-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-teal-800 text-white border border-teal-700 rounded p-2"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-teal-800 text-white border border-teal-700 rounded p-2"
              />
            </div>

            <div>
              <label htmlFor="appointmentDate" className="block text-white mb-1">Appointment Date</label>
              <input
                type="date"
                id="appointmentDate"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                required
                className="w-full bg-teal-800 text-white border border-teal-700 rounded p-2"
              />
            </div>

            <div>
              <label htmlFor="appointmentTime" className="block text-white mb-1">Appointment Time</label>
              <select
                id="appointmentTime"
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleChange}
                required
                className="w-full bg-teal-800 text-white border border-teal-700 rounded p-2"
              >
                <option value="">Select a time</option>
                {fixedTimeSlots.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="reason" className="block text-white mb-1">Reason</label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full bg-teal-800 text-white border border-teal-700 rounded p-2"
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
              >
                Preview
              </button>
            </div>
          </form>

          {showPreview && (
            <div className="mt-8 bg-teal-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Appointment Details</h2>
              <div className="space-y-2 text-teal-100">
                <p><strong>Name:</strong> {formData.fullName}</p>
                <p><strong>Doctor:</strong> {formData.doctor}</p>
                <p><strong>DOB:</strong> {formData.dateOfBirth}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Date:</strong> {formData.appointmentDate}</p>
                <p><strong>Time:</strong> {formData.appointmentTime}</p>
                <p><strong>Reason:</strong> {formData.reason}</p>
                <p><strong>Existing Patient:</strong> {formData.isExistingPatient ? "Yes" : "No"}</p>
              </div>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={handleSubmit}
                  className="bg-green-500 text-white py-2 px-4 rounded"
                >
                  Submit
                </button>
                <button
                  onClick={() => setShowPreview(false)}
                  className="bg-red-500 text-white py-2 px-4 rounded"
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
  );
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


export const History = () => {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch("http://localhost:5000/appointments")
        const data = await res.json()
        setAppointments(data)
      } catch (error) {
        console.error("Failed to fetch appointment history:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAppointments()
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Appointment History</h1>
      {loading ? (
        <p>Loading...</p>
      ) : appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-700 rounded-lg">
            <thead className="bg-teal-800 text-white">
              <tr>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Phone</th>
                <th className="py-2 px-4">Doctor</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Time</th>
                <th className="py-2 px-4">Reason</th>
                <th className="py-2 px-4">Patient</th>
              </tr>
            </thead>
            <tbody className="bg-teal-900 text-teal-100">
              {appointments.map((appt, index) => (
                <tr key={index} className="border-t border-teal-700">
                  <td className="py-2 px-4">{appt.fullName}</td>
                  <td className="py-2 px-4">{appt.email}</td>
                  <td className="py-2 px-4">{appt.phone}</td>
                  <td className="py-2 px-4">{appt.doctor}</td>
                  <td className="py-2 px-4">{appt.appointmentDate}</td>
                  <td className="py-2 px-4">{appt.appointmentTime}</td>
                  <td className="py-2 px-4">{appt.reason}</td>
                  <td className="py-2 px-4">{appt.isExistingPatient ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
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


