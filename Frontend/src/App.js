import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from './logincredential/Loginpage';
import Home from './logincredential/Home';
import Signuppage from './logincredential/signuppage';
import Service from './logincredential/Service';
import Contact from './logincredential/Contact';
import AdminPage from './logincredential/AdminPage';
import Fleet from './logincredential/operation/Fleet';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path='/fleet' element={<Fleet/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
