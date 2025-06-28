// src/pages/Features.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

function Service() {
  const navigate = useNavigate();

  const operations = [
    {
      title: 'Fleet Management',
      description: 'Manage trucks and tankers with real-time tracking.',
      path: '/fleet-management',
      icon: 'fa-solid fa-truck-moving',
    },
    {
      title: 'Oil Fill Management',
      description: 'Track oil deliveries and fill records.',
      path: '/oil-fill-management',
      icon: 'fa-solid fa-gas-pump',
    },
    {
      title: 'Analytics & Reports',
      description: 'Generate insights and performance reports.',
      path: '/analytics-reports',
      icon: 'fa-solid fa-chart-line',
    },
    {
      title: 'City Operations',
      description: 'Manage operations across multiple cities.',
      path: '/city-operations',
      icon: 'fa-solid fa-city',
    },
    {
      title: 'User Management',
      description: 'Control access for admins and operators.',
      path: '/user-management',
      icon: 'fa-solid fa-users-cog',
    },
  ];

  return (
    <div className="features-page">
      <h1>Services We Provide</h1>
      <div className="features-grid">
        {operations.map((op, index) => (
          <div
            key={index}
            className="feature-card"
            onClick={() => navigate(op.path)}
          >
            <i className={`feature-icon ${op.icon}`}></i>
            <h3>{op.title}</h3>
            <p>{op.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
