import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, AppWindow as Windows, Facebook, Linkedin } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const payload = isLogin ? { email: formData.email, password: formData.password } : formData;

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
    <div className="min-h-screen bg-[#0a0f14] flex items-center justify-center p-4">
      <div className="w-full max-w-[1000px] border border-gray-500 rounded-lg p-4 bg-[#1e8074] rounded-2xl overflow-hidden flex shadow-2xl">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-white mb-8">RAPIDOC</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <input type="text" name="name" placeholder="Full Name" required className="input-field" onChange={(e) => setFormData({...formData, name: e.target.value})} />
            )}
            <input type="email" name="email" placeholder="Email" required className="input-field" onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <input type="password" name="password" placeholder="Password" required className="input-field" onChange={(e) => setFormData({...formData, password: e.target.value})} />

            <button type="submit" className="w-full bg-teal-900 text-white py-3 rounded-lg hover:bg-teal-950 transition-colors" disabled={loading}>
              {loading ? 'Processing...' : isLogin ? 'Login' : 'Register'}
            </button>
          </form>

          <p className="text-white/60 text-center mt-6">
            {isLogin ? "Forgot password?" : "Already have an account?"}{' '}
            <button onClick={() => setIsLogin(!isLogin)} className="text-white underline hover:text-white/80">
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </div>

        <div className="border border-gray-700 rounded-lg p-16 hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1574631091989-67a56586dacc?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
          <div className="h-full w-full backdrop-blur-sm flex flex-col items-center justify-center text-white p-8">
            <h2 className="text-4xl font-bold mb-4">Hello, Friend!</h2>
            <p className="text-center mb-6">Enter your personal details and start your journey with us.</p>
            <button onClick={() => setIsLogin(!isLogin)} className="px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-teal-800 transition-colors">
              {isLogin ? 'Register' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;

