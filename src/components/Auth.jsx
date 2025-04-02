// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { Github, AppWindow as Windows, Facebook, Linkedin } from 'lucide-react';

// // function Auth() {
// //   const [isLogin, setIsLogin] = useState(true);
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: '',
// //     name: ''
// //   });

// //   const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Form submitted:', formData);
// //     // In a real app, you would handle authentication here
// //     navigate('/RapiDoc-HEALTHCARE-WEBSITE-production/index.html');
// //   }; 

// //   const handleInputChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#0a0f14] flex items-center justify-center p-4">
// //       <div className="w-full max-w-[1000px] bg-[#0d3b36] rounded-2xl overflow-hidden flex shadow-2xl">
// //         {/* Left Panel */}
// //         <div className="w-full md:w-1/2 p-8">
// //           <h1 className="text-3xl font-bold text-white mb-8">RAPIDOC</h1>
          
// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             {!isLogin && (
// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Full Name"
// //                 value={formData.name}
// //                 onChange={handleInputChange}
// //                 className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 bg-[#155e54] text-white placeholder-white/60 focus:outline-none focus:border-white/40"
// //               />
// //             )}
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Email"
// //               value={formData.email}
// //               onChange={handleInputChange}
// //               className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
// //             />
// //             <input
// //               type="password"
// //               name="password"
// //               placeholder="Password"
// //               value={formData.password}
// //               onChange={handleInputChange}
// //               className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
// //             />
            
// //             <button
// //               type="submit"
// //               className="w-full bg-teal-900 text-white py-3 rounded-lg hover:bg-teal-950 transition-colors"
// //             >
// //               {isLogin ? 'Login' : 'Register'}
// //             </button>
// //           </form>

// //           <div className="mt-6 text-center">
// //             <p className="text-white/60">or continue with</p>
// //             <div className="flex justify-center gap-4 mt-4">
// //               <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
// //                 <Github className="w-6 h-6 text-white" />
// //               </button>
// //               <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
// //                 <Windows className="w-6 h-6 text-white" />
// //               </button>
// //               <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
// //                 <Facebook className="w-6 h-6 text-white" />
// //               </button>
// //               <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
// //                 <Linkedin className="w-6 h-6 text-white" />
// //               </button>
// //             </div>
// //           </div>

// //           <p className="text-white/60 text-center mt-6">
// //             {isLogin ? "Forgot password?" : "Already have an account?"}{' '}
// //             <button
// //               onClick={() => setIsLogin(!isLogin)}
// //               className="text-white underline hover:text-white/80"
// //             >
// //               {isLogin ? 'Register' : 'Login'}
// //             </button>
// //           </p>
// //         </div>

// //         {/* Right Panel */}
// //         <div 
// //           className="hidden md:block w-1/2 bg-cover bg-center"
// //           style={{
// //             backgroundImage: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop")'
// //           }}
// //         >
// //           <div className="h-full w-full bg-teal-400/20 backdrop-blur-sm flex flex-col items-center justify-center text-white p-8">
// //             <h2 className="text-4xl font-bold mb-4">Hello, Friend!</h2>
// //             <p className="text-center mb-6">
// //               Enter your personal details and start journey with us
// //             </p>
// //             <button
// //               onClick={() => setIsLogin(!isLogin)}
// //               className="px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-teal-800 transition-colors"
// //             >
// //               {isLogin ? 'Register' : 'Login'}
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Auth;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Github, AppWindow as Windows, Facebook, Linkedin } from 'lucide-react';

// function Auth() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     name: ''
//   });

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     navigate('/RapiDoc-HEALTHCARE-WEBSITE-production/index.html');
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="min-h-screen bg-[#0a0f14] flex items-center justify-center p-4">
//       <div className="w-full max-w-[1000px] bg-[#0d3b36] rounded-2xl overflow-hidden flex shadow-2xl">
//         <div className="w-full md:w-1/2 p-8">
//           <h1 className="text-3xl font-bold text-white mb-8">RAPIDOC</h1>
          
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {!isLogin && (
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 bg-[#155e54] text-white placeholder-white/60 focus:outline-none focus:border-white/40"
//               />
//             )}
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
//             />
            
//             <button
//               type="submit"
//               className="w-full bg-teal-900 text-white py-3 rounded-lg hover:bg-teal-950 transition-colors"
//             >
//               {isLogin ? 'Login' : 'Register'}
//             </button>
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-white/60">or continue with</p>
//             <div className="flex justify-center gap-4 mt-4">
//               <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
//                 <Github className="w-6 h-6 text-white" />
//               </button>
//               <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
//                 <Windows className="w-6 h-6 text-white" />
//               </button>
//               <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
//                 <Facebook className="w-6 h-6 text-white" />
//               </button>
//               <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
//                 <Linkedin className="w-6 h-6 text-white" />
//               </button>
//             </div>
//           </div>

//           <p className="text-white/60 text-center mt-6">
//             {isLogin ? "Forgot password?" : "Already have an account?"}{' '}
//             <button
//               onClick={() => setIsLogin(!isLogin)}
//               className="text-white underline hover:text-white/80"
//             >
//               {isLogin ? 'Register' : 'Login'}
//             </button>
//           </p>
//         </div>

//         <div 
//           className="hidden md:block w-1/2 bg-cover bg-center"
//           style={{
//             backgroundImage: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop")'
//           }}
//         >
//           <div className="h-full w-full bg-teal-400/20 backdrop-blur-sm flex flex-col items-center justify-center text-white p-8">
//             <h2 className="text-4xl font-bold mb-4">Hello, Friend!</h2>
//             <p className="text-center mb-6">
//               Enter your personal details and start journey with us
//             </p>
//             <button
//               onClick={() => setIsLogin(!isLogin)}
//               className="px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-teal-800 transition-colors"
//             >
//               {isLogin ? 'Register' : 'Login'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Auth;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, AppWindow as Windows, Facebook, Linkedin } from 'lucide-react';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    if (formData.email && formData.password) {
      // Redirecting to the homepage only if the user enters details
      window.location.href = "/RapiDoc-HEALTHCARE-WEBSITE-production/index.html";
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0f14] flex items-center justify-center p-4">
      <div className="w-full max-w-[1000px] bg-[#0d3b36] rounded-2xl overflow-hidden flex shadow-2xl">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-white mb-8">RAPIDOC</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 bg-[#155e54] text-white placeholder-white/60 focus:outline-none focus:border-white/40"
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
            />

            <button
              type="submit"
              className="w-full bg-teal-900 text-white py-3 rounded-lg hover:bg-teal-950 transition-colors"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/60">or continue with</p>
            <div className="flex justify-center gap-4 mt-4">
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Github className="w-6 h-6 text-white" />
              </button>
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Windows className="w-6 h-6 text-white" />
              </button>
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Facebook className="w-6 h-6 text-white" />
              </button>
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Linkedin className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          <p className="text-white/60 text-center mt-6">
            {isLogin ? "Forgot password?" : "Already have an account?"}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-white underline hover:text-white/80"
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </div>

        <div 
          className="hidden md:block w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop")'
          }}
        >
          <div className="h-full w-full bg-teal-400/20 backdrop-blur-sm flex flex-col items-center justify-center text-white p-8">
            <h2 className="text-4xl font-bold mb-4">Hello, Friend!</h2>
            <p className="text-center mb-6">
              Enter your personal details and start your journey with us.
            </p>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-teal-800 transition-colors"
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
