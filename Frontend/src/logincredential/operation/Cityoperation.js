import React, { useState } from 'react';
import './Cityoperation.css'; // Use the CSS from your previous CityOperation.css

function CityOperationDashboard() {
  const [records, setRecords] = useState([]);

  // onSubmit handler for the form
  const handleAddRecord = (record) => {
    setRecords((prev) => [record, ...prev]);
  };

  return (
    <div className="cityop-container" style={{ maxWidth: '800px', margin: '40px auto' }}>
      <h1 className="cityop-title" style={{ marginBottom: '30px' }}>City Operation</h1>
      
      {/* City Operation Form */}
      <CityOperationForm onSubmit={handleAddRecord} />

      {/* Dashboard Table */}
      <section style={{ marginTop: '40px' }}>
        <h2 style={{ marginBottom: '20px', color: '#2563eb' }}>Submitted Records</h2>
        
        {records.length === 0 ? (
          <p style={{ fontStyle: 'italic', color: '#64748b' }}>
            No records submitted yet.
          </p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className="records-table" style={{
              width: '100%',
              borderCollapse: 'collapse',
              boxShadow: '0 8px 26px rgba(50,50,93,.1), 0 4px 12px rgba(0,0,0,.07)'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#e0e7ff', color: '#1e293b' }}>
                  <th style={thStyle}>City</th>
                  <th style={thStyle}>Date & Time</th>
                  <th style={thStyle}>Truck Number</th>
                  <th style={thStyle}>Operation Type</th>
                  <th style={thStyle}>Driver</th>
                  <th style={thStyle}>Status</th>
                  <th style={thStyle}>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {records.map((r, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#f9fafb' : '#ffffff' }}>
                    <td style={tdStyle}>{r.cityName}</td>
                    <td style={tdStyle}>{formatDateTime(r.dateTime)}</td>
                    <td style={tdStyle}>{r.truckNumber}</td>
                    <td style={tdStyle}>{r.operationType}</td>
                    <td style={tdStyle}>{r.driverName}</td>
                    <td style={tdStyle}>{r.status}</td>
                    <td style={tdStyle}>{r.remarks || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

// Helper to format datetime-local string to readable format
function formatDateTime(dateTimeStr) {
  if (!dateTimeStr) return '-';
  const dt = new Date(dateTimeStr);
  // Format: dd-mm-yyyy | hh:mm
  return dt.toLocaleString([], { day: '2-digit', month: '2-digit', year: 'numeric', hour:'2-digit', minute:'2-digit' });
}

// City Operation Form component (same as before)
function CityOperationForm({ onSubmit }) {
  const [form, setForm] = useState({
    cityName: '',
    dateTime: new Date().toISOString().slice(0, 16),
    truckNumber: '',
    operationType: '',
    driverName: '',
    status: '',
    remarks: '',
  });

  const operationTypes = ['Loading', 'Unloading', 'Delivery', 'Maintenance', 'Refueling', 'Other'];
  const statusOptions = ['Completed', 'Pending', 'In Progress'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { cityName, dateTime, truckNumber, operationType, driverName, status } = form;

    if (!cityName || !dateTime || !truckNumber || !operationType || !driverName || !status) {
      alert('Please fill all required fields!');
      return;
    }

    onSubmit(form);
    setForm({
      cityName: '',
      dateTime: new Date().toISOString().slice(0, 16),
      truckNumber: '',
      operationType: '',
      driverName: '',
      status: '',
      remarks: '',
    });
  };

  return (
    <form className="cityop-form" onSubmit={handleSubmit}>
      <div className="cityop-row">
        <label>
          City Name<span>*</span>
        </label>
        <input
          type="text"
          name="cityName"
          value={form.cityName}
          onChange={handleChange}
          placeholder="Enter City Name"
          required
        />
      </div>

      <div className="cityop-row">
        <label>
          Date & Time<span>*</span>
        </label>
        <input
          type="datetime-local"
          name="dateTime"
          value={form.dateTime}
          onChange={handleChange}
          required
        />
      </div>

      <div className="cityop-row">
        <label>
          Truck/Tanker Number<span>*</span>
        </label>
        <input
          type="text"
          name="truckNumber"
          value={form.truckNumber}
          onChange={handleChange}
          placeholder="Enter Truck/Tanker Number"
          required
        />
      </div>

      <div className="cityop-row">
        <label>
          Type of Operation<span>*</span>
        </label>
        <select name="operationType" value={form.operationType} onChange={handleChange} required>
          <option value="" disabled>
            Select Operation Type
          </option>
          {operationTypes.map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>
      </div>

      <div className="cityop-row">
        <label>
          Driver Name<span>*</span>
        </label>
        <input
          type="text"
          name="driverName"
          value={form.driverName}
          onChange={handleChange}
          placeholder="Enter Driver Name"
          required
        />
      </div>

      <div className="cityop-row">
        <label>
          Operation Status<span>*</span>
        </label>
        <select name="status" value={form.status} onChange={handleChange} required>
          <option value="" disabled>
            Select Status
          </option>
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div className="cityop-row">
        <label>Remarks (Optional)</label>
        <textarea
          name="remarks"
          value={form.remarks}
          onChange={handleChange}
          placeholder="Add any notes here"
          rows={3}
        />
      </div>

      <button type="submit" className="cityop-submit">
        Submit
      </button>
    </form>
  );
}

// Styles for table cells
const thStyle = {
  padding: '12px 15px',
  borderBottom: '2px solid #cbd5e1',
  textAlign: 'left',
  fontWeight: 'bold',
  fontSize: '0.95rem',
};

const tdStyle = {
  padding: '12px 15px',
  borderBottom: '1px solid #e2e8f0',
  fontSize: '0.9rem',
  color: '#475569',
};

export default CityOperationDashboard;
