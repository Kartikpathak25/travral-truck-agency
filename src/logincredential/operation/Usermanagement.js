import React, { useState } from 'react';
import './Usermanagement.css'; 

function Usermanagement({ onSubmit }) {
  const [form, setForm] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    status: '',
    password: '',
    confirmPassword: '',
    driverLicenseNumber: '', // only for Drivers
  });

  const roles = ['Driver', 'Manager', 'Dispatcher', 'Admin'];
  const statuses = ['Active', 'Inactive', 'Suspended'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      username,
      firstName,
      lastName,
      email,
      phone,
      role,
      status,
      password,
      confirmPassword,
      driverLicenseNumber,
    } = form;

    if (
      !username ||
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !role ||
      !status ||
      !password ||
      !confirmPassword
    ) {
      alert('Please fill all required fields!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (role === 'Driver' && !driverLicenseNumber) {
      alert('Please enter Driver License Number for role Driver!');
      return;
    }

    if (onSubmit) {
      onSubmit(form);
    }

    alert('User saved successfully!');
  };

  return (
    <div className="userform-container">
      <h2 className="userform-title">User Management</h2>
      <form onSubmit={handleSubmit} className="userform-form" noValidate>
        <div className="userform-row">
          <label>
            Username<span>*</span>
          </label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter username"
            required
          />
        </div>

        <div className="userform-row">
          <label>
            First Name<span>*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            required
          />
        </div>

        <div className="userform-row">
          <label>
            Last Name<span>*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            required
          />
        </div>

        <div className="userform-row">
          <label>
            Email<span>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="userform-row">
          <label>
            Phone Number<span>*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </div>

        <div className="userform-row">
          <label>
            Role<span>*</span>
          </label>
          <select name="role" value={form.role} onChange={handleChange} required>
            <option value="" disabled>
              Select role
            </option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {form.role === 'Driver' && (
          <div className="userform-row">
            <label>
              Driver License Number<span>*</span>
            </label>
            <input
              type="text"
              name="driverLicenseNumber"
              value={form.driverLicenseNumber}
              onChange={handleChange}
              placeholder="Enter Driver License Number"
              required={form.role === 'Driver'}
            />
          </div>
        )}

        <div className="userform-row">
          <label>
            Status<span>*</span>
          </label>
          <select name="status" value={form.status} onChange={handleChange} required>
            <option value="" disabled>
              Select status
            </option>
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="userform-row">
          <label>
            Password<span>*</span>
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </div>

        <div className="userform-row">
          <label>
            Confirm Password<span>*</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
            required
          />
        </div>

        <button type="submit" className="userform-submit">
          Save User
        </button>
      </form>
    </div>
  );
}

export default Usermanagement;
