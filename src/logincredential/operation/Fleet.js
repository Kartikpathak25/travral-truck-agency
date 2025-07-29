import React, { useState } from 'react';

export default function Fleet() {
  const [showForm, setShowForm] = useState(false);

  const styles = {
    container: {
      padding: '2.5rem 1.5rem',
      backgroundColor: '#f9fafb',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      fontSize: '3rem',
      fontWeight: '800',
      color: '#1F2937',
      textAlign: 'center',
      marginBottom: '1.5rem',
    },
    paragraph: {
      fontSize: '1.5rem',
      fontWeight: '500',
      lineHeight: '2.25rem',
      color: '#374151',
      maxWidth: '800px',
      margin: '0 auto 2rem',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#2563eb',
      color: '#ffffff',
      fontSize: '1.5rem',
      fontWeight: '600',
      padding: '1rem 2.5rem',
      borderRadius: '0.75rem',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      margin: '0 auto 3rem',
      display: 'block',
    },
    formContainer: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '2rem',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    formTitle: {
      textAlign: 'center',
      marginBottom: '1.5rem',
      color: '#1f2937',
      fontSize: '1.75rem',
      fontWeight: '700',
    },
    formGroup: {
      marginBottom: '1.2rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: '600',
      color: '#374151',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '1rem',
      boxSizing: 'border-box',
    },
    submitButton: {
      width: '100%',
      padding: '0.9rem',
      backgroundColor: '#2563eb',
      color: 'white',
      fontSize: '1.1rem',
      fontWeight: '600',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    backButton: {
      marginTop: '1.5rem',
      backgroundColor: '#6b7280',
    },
  };

  return (
    <div style={styles.container}>
      {!showForm ? (
        <>
          <h1 style={styles.heading}>Fleet Management System</h1>

          <p style={styles.paragraph}>
            Our truck agency system is designed to optimize the management of oil tanker trucks, ensuring efficient operations and maximizing profitability.
            With a user-friendly interface and robust features, we empower agencies to handle their fleets with ease and precision.
            From real-time tracking to fuel management and maintenance scheduling, our platform streamlines every aspect of fleet operations.
          </p>

          <button style={styles.button} onClick={() => setShowForm(true)}>
            Add Truck
          </button>

          <div style={{ marginTop: '3rem' }}>
          
          </div>
        </>
      ) : (
        <>
          <div style={styles.formContainer}>
           <h2 style={styles.formTitle}>Add Truck/Tanker</h2> 
            <form>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="Truck Number">Truck Number</label>
                <input style={styles.input} type="text" id="Truck Number" placeholder="Enter Truck Number" />
              </div>

           
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="license-plate">License Plate</label>
                <input style={styles.input} type="text" id="license-plate" placeholder="Enter License Plate" />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="fuel-type">Fuel Type</label>
                <select style={styles.input} id="fuel-type">
                  <option value="">Select Fuel Type</option>
                  <option value="diesel">Diesel</option>
                  <option value="petrol">Petrol</option>
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="capacity">USER NAME</label>
                <input style={styles.input} type="text" id="capacity" placeholder="Enter Username" />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="assign-driver">Assign Driver</label>
                <select style={styles.input} id="assign-driver">
                  <option value="">Select Driver</option>
                  <option value="driver1">Driver 1</option>
                  <option value="driver2">Driver 2</option>
                </select>
              </div>

              <button type="submit" style={styles.submitButton}>Submit</button>
              <button
                type="button"
                style={{ ...styles.submitButton, ...styles.backButton }}
                onClick={() => setShowForm(false)}
              >
                Back to Dashboard
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
