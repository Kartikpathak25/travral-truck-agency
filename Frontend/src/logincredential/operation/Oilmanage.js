import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Oilmanage.css';  // Import the CSS file

function Oilmanage() {
  const navigate = useNavigate();

  const handlePetrolClick = () => {
        
   navigate('/petrolpumpfilled');
  };

  const handleTruckClick = () => {
    navigate('/truck-filled');
  };

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1 className="title">Oil Management Dashboard</h1>
        <p className="infoText">
          Manage and monitor your fleet’s fuel filling activities through this centralized dashboard.
          Easily log fuel filled directly from petrol stations or by your trucks.
        </p>
      </header>

      {/* Metrics/Info Panel */}
      <section className="overviewPanel" aria-label="Overview of fuel records">
        <h2 className="overviewTitle">Overview</h2>
        <ul className="overviewList">
          <li>Total Fuel Records: <strong>120</strong></li>
          <li>Fuel Filled from Petrol: <strong>80</strong></li>
          <li>Fuel Filled by Trucks: <strong>40</strong></li>
          <li>Last Update: <strong>Today, 3:30 PM</strong></li>
        </ul>
      </section>

      {/* Action Buttons */}
      <div className="buttonGroup">
        <button
          className="button buttonPetrol"
          onClick={handlePetrolClick}
          aria-label="Filled from Petrol"
          type="button"
        >
          Filled from PetrolPump 
        </button>

        <button
          className="button buttonTruck"
          onClick={handleTruckClick}
          aria-label="Truck Filled"
          type="button"
        >
          Truck Filled
        </button>
      </div>
    </div>
  );
}

export default Oilmanage;
