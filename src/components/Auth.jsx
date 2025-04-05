
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, AppWindow as Windows, Facebook, Linkedin } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from 'framer-motion';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const navigate = useNavigate();

  const validateForm = () => {
    if (!formData.email || !formData.password || (!isLogin && !formData.name)) {
      toast.warn('Please fill in all required fields');
      return false;
    }
    if (!formData.email.includes('@')) {
      toast.error('Invalid email format');
      return false;
    }
    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const endpoint = isLogin ? '/login' : '/register';
    const payload = isLogin
      ? { email: formData.email, password: formData.password }
      : formData;

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      setLoading(false);
      if (response.ok) {
        toast.success(data.message);
        navigate('/home');
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error('Something went wrong');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f14] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row bg-white/5 backdrop-blur-lg border border-white/10"
      >

        {/* Left Panel - Form */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isLogin ? 'login' : 'register'}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 30, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full md:w-1/2 bg-[#105e56] p-8 flex flex-col justify-center"
          >
            <h1 className="text-3xl font-bold text-white mb-8">RAPIDOC</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />

              <button
                type="submit"
                className="w-full bg-white/10 text-white py-2 rounded-md hover:bg-white/20 transition-colors"
                disabled={loading}
              >
                {loading ? 'Processing...' : isLogin ? 'Login' : 'Register'}
              </button>
            </form>

            <div className="text-center mt-6">
              <p className="text-white/70">or continue with</p>
              <div className="flex justify-center gap-4 mt-4">
                {[Github, Windows, Facebook, Linkedin].map((Icon, i) => (
                  <button key={i} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <Icon className="w-5 h-5 text-white" />
                  </button>
                ))}
              </div>
            </div>

            <p className="text-white/70 text-center mt-6 text-sm">
              {isLogin ? "Forgot password?" : "Already have an account?"}{' '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-white underline hover:text-white/80"
              >
                {isLogin ? 'Register' : 'Login'}
              </button>
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Right Panel - Welcome */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-cyan-500 to-indigo-600 text-white flex flex-col items-center justify-center p-10">
          <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
          <p className="mb-6 text-center">Enter your personal details and start journey with us</p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="px-6 py-2 border-2 border-white rounded-md hover:bg-white hover:text-teal-900 transition-all"
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </div>

      </motion.div>
    </div>
  );
}

export default Auth;
