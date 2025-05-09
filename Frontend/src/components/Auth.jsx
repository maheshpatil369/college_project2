import React, { useState } from 'react';
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!validateForm()) return;

  //   setLoading(true);
  //   const endpoint = isLogin ? '/login' : '/register';
  //   const payload = isLogin
  //     ? { email: formData.email, password: formData.password }
  //     : formData;

  //   try {
  //     const response = await fetch(`http://localhost:5000${endpoint}`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(payload),
  //     });

  //     const data = await response.json();
  //     setLoading(false);
  //     if (response.ok) {
  //       toast.success(data.message);
      
  //       const token = JSON.stringify(data.user)
  //       // Save user data in localStorage (React app)
  //       localStorage.setItem('user', token);
      
      
  //       // ✅ Redirect to static HTML page with token in query
  //       window.location.href = `http://127.0.0.1:5500/RapiDoc-HEALTHCARE-WEBSITE-production/index.html?token=${token}`;
  //     }
  //      else {
  //       toast.error(data.error);
  //     }
  //   } catch (error) {
  //     toast.error('Something went wrong');
  //     setLoading(false);
  //   }
  // };










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
  
        // If login, redirect
        if (isLogin) {
          const token = JSON.stringify(data.user);
          localStorage.setItem('user', token);
  
          window.location.href = `http://127.0.0.1:5500/RapiDoc-HEALTHCARE-WEBSITE-production/index.html?token=${token}`;
        } else {
          toast.success("Registered successfully!");
          setIsLogin(true); // Switch to login after register
        }
      } else {
        // Show proper login error if login failed
        if (isLogin) {
          toast.error(data.error || "Wrong email or password");
        } else {
          toast.error(data.error || "Registration failed. Try again.");
        }
      }
    } catch (error) {
      toast.error("Something went wrong");
      setLoading(false);
    }
  };
  

  // return (


  //   <div className="min-h-screen bg-[#0a0f14] flex items-center justify-center px-4">
  //     <motion.div
  //       initial={{ opacity: 0, y: 40 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       transition={{ duration: 0.6 }}
  //       className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row bg-white/5 backdrop-blur-lg border border-white/10"
  //     >
  //       <AnimatePresence mode="wait">
  //         <motion.div
  //           key={isLogin ? 'login' : 'register'}
  //           initial={{ x: -30, opacity: 0 }}
  //           animate={{ x: 0, opacity: 1 }}
  //           exit={{ x: 30, opacity: 0 }}
  //           transition={{ duration: 0.4 }}
  //           className="w-full md:w-1/2 bg-[#105e56] p-8 flex flex-col justify-center"
  //         >
  //           <h1 className="text-3xl font-bold text-white mb-8">RAPIDOC</h1>

  //           <form onSubmit={handleSubmit} className="space-y-4">
  //             {!isLogin && (
  //               <input
  //                 type="text"
  //                 name="name"
  //                 placeholder="Full Name"
  //                 required
  //                 className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
  //                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
  //               />
  //             )}
  //             <input
  //               type="email"
  //               name="email"
  //               placeholder="Email"
  //               required
  //               className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
  //               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
  //             />
  //             <input
  //               type="password"
  //               name="password"
  //               placeholder="Password"
  //               required
  //               className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
  //               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
  //             />

  //             <button
  //               type="submit"
  //               className="w-full bg-white/10 text-white py-2 rounded-md hover:bg-white/20 transition-colors"
  //               disabled={loading}
  //             >
  //               {loading ? 'Processing...' : isLogin ? 'Login' : 'Register'}
  //             </button>
  //           </form>

  //           <div className="text-center mt-6">
  //             <p className="text-white/70">or continue with</p>
  //             <div className="flex justify-center gap-4 mt-4">
  //               {[Github, Windows, Facebook, Linkedin].map((Icon, i) => (
  //                 <button key={i} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
  //                   <Icon className="w-5 h-5 text-white" />
  //                 </button>
  //               ))}
  //             </div>
  //           </div>

  //           <p className="text-white/70 text-center mt-6 text-sm">
  //             {isLogin ? "Forgot password?" : "Already have an account?"}{' '}
  //             <button
  //               onClick={() => setIsLogin(!isLogin)}
  //               className="text-white underline hover:text-white/80"
  //             >
  //               {isLogin ? 'Register' : 'Login'}
  //             </button>
  //           </p>
  //         </motion.div>
  //       </AnimatePresence>

  //       {/* Right Panel */}
  //       <div className="w-full md:w-1/2 bg-gradient-to-br from-cyan-500 to-indigo-600 text-white flex flex-col items-center justify-center p-10">
  //         <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
  //         <p className="mb-6 text-center">Enter your personal details and start journey with us</p>
  //         <button
  //           onClick={() => setIsLogin(!isLogin)}
  //           className="px-6 py-2 border-2 border-white rounded-md hover:bg-white hover:text-teal-900 transition-all"
  //         >
  //           {isLogin ? 'Register' : 'Login'}
  //         </button>
  //       </div>
  //     </motion.div>
  //   </div>
  // );

  return (
    <div className="min-h-screen bg-[#0a0f14] flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white/5 rounded-xl shadow-lg flex overflow-hidden">
        
        {/* Left Panel - Form */}
        <div className="w-1/2 bg-[#105e56] p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-8">RAPIDOC</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Show name field in Register mode */}
              {!isLogin && (
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-2 rounded-md bg-[#0c4f49] border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              )}
  
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 rounded-md bg-[#0c4f49] border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full px-4 py-2 rounded-md bg-[#0c4f49] border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
  
              <button
                type="submit"
                className="w-full bg-[#0c4f49] text-white py-2 rounded-md hover:bg-[#0b4742] transition-all"
                disabled={loading}
              >
                {loading ? 'Processing...' : isLogin ? 'Login' : 'Register'}
              </button>
            </form>
  
            <div className="text-center mt-6">
              <p className="text-white/70 mb-2">or continue with</p>
              <div className="flex justify-center gap-4">
                {[Github, Windows, Facebook, Linkedin].map((Icon, i) => (
                  <button key={i} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <Icon className="w-5 h-5 text-white" />
                  </button>
                ))}
              </div>
            </div>
          </div>
  
          <p className="text-white/70 text-center mt-6 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-white underline hover:text-white/80"
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
  
        {/* Right Panel - Opposite Action */}
        <div className="w-1/2 bg-gradient-to-br from-cyan-500 to-indigo-600 p-10 flex flex-col items-center justify-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {isLogin ? "Hello, Friend!" : "Welcome Back!"}
          </h2>
          <p className="text-center mb-6">
            {isLogin
              ? "Enter your personal details and start your journey with us"
              : "To keep connected with us, please login with your personal info"}
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="px-6 py-2 border-2 border-white rounded-md hover:bg-white hover:text-indigo-700 transition"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
  
  
}

export default Auth;
