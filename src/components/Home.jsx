import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Phone, Mail, Menu, X, LogOut } from 'lucide-react';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold">RAPIDOC</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <a href="#services" className="hover:text-teal-200">Services</a>
                <a href="#doctors" className="hover:text-teal-200">Doctors</a>
                <a href="#contact" className="hover:text-teal-200">Contact</a>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-teal-700 px-4 py-2 rounded-lg hover:bg-teal-600"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-teal-700"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 hover:bg-teal-700 rounded-md">Services</a>
              <a href="#doctors" className="block px-3 py-2 hover:bg-teal-700 rounded-md">Doctors</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-teal-700 rounded-md">Contact</a>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 w-full px-3 py-2 hover:bg-teal-700 rounded-md"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000&auto=format&fit=crop"
          alt="Hospital"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to RAPIDOC</h1>
            <p className="text-xl md:text-2xl mb-8">Your Health is Our Priority</p>
            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-teal-700">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Calendar className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
              <p className="text-gray-600">Book appointments online at your convenience</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Clock className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Round-the-clock medical assistance</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Phone className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emergency Care</h3>
              <p className="text-gray-600">Immediate response to urgent medical needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-teal-600" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-teal-600" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>contact@rapidoc.com</p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">RAPIDOC</h2>
            <p className="mb-4">Your trusted healthcare partner</p>
            <p className="text-sm text-teal-200">© 2024 RAPIDOC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;