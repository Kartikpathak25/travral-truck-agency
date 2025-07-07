// src/logincredential/AdminPage.js
import React from 'react';
import Service from './Service';
// import 'Admin.css';

export default function AdminPage() {
  return (
    <div className="admin-panel">
      <h1>Admin Dashboard</h1>
      <Service />
    </div>
  );
}
