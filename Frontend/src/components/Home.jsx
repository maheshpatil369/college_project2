import React, { useEffect, useState } from 'react';

function Home() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.name) {
      setUserName(user.name);
    }
  }, []);

  return (
    <div className="flex justify-between items-center p-6 bg-[#0a0f14] text-white">
      <h1 className="text-2xl font-bold">Welcome to RapiDoc</h1>
      {userName ? (
        <div className="text-lg">👋 Hi, {userName}</div>
      ) : (
        <a
          href="/"
          className="bg-teal-600 px-4 py-2 rounded hover:bg-teal-500 transition"
        >
          Sign Up
        </a>
      )}
    </div>
  );
}

export default Home;
