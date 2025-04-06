// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Auth from './components/Auth';
// import Home from './components/Home';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/auth" element={<Auth />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/auth" element={<Navigate to="/RapiDoc-HEALTHCARE-WEBSITE-production/index.html" replace />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Home from './components/Home';
import { BookAppointmentPage, FindDoctorPage, HomePage } from './components/Apointment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Auth />} />
        <Route path="/apo" element={< HomePage/>} />
        <Route path="/apoFind" element={< FindDoctorPage/>} />
        <Route path="/apoBook" element={< BookAppointmentPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
