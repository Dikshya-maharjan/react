import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Donate from './Donate';
import Donateform from './Donateform';
import Adopt from './Adopt';
import  Aboutus from './Aboutus';
import Contactus from './Contactus';
// import Donation from './Donation'; // Uncomment if you have it

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/donate" element={<Donate/>} />
      <Route path="/Donateform" element={<Donateform/>}/>
      <Route path="/adopt" element={<Adopt/>}/>
      <Route path="/about" element={<Aboutus/>}/>
      <Route path="/contact" element={<Contactus/>}/>

      {/* <Route path="/donation" element={<Donation />} /> */}
    </Routes>
  );
}

export default App;
