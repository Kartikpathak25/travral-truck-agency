import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from './logincredential/Loginpage';
import Home from './logincredential/Home';
import Signuppage from './logincredential/signuppage';
import Service from './logincredential/Service';
import Contact from './logincredential/Contact';
import AdminPage from './logincredential/AdminPage';
import Fleet from './logincredential/operation/Fleet';
import Oilmanage from './logincredential/operation/Oilmanage';

import Petrolpump from './logincredential/operation/Petrolpump';
import Truckfilled from './logincredential/operation/Truckfilled';
import CityOperation from './logincredential/operation/Cityoperation';
import Usermanagement from './logincredential/operation/Usermanagement';

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
        <Route path='/oilmanagement' element={<Oilmanage/>}/>
        <Route path='petrolpumpfilled' element={<Petrolpump/>}/>
        <Route path='truck-filled' element={<Truckfilled/>}/>
        <Route path='cityoperation' element={<CityOperation/>}/>
        <Route path='usermanagement' element={<Usermanagement/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
