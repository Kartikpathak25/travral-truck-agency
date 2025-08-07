import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PetrolFilled.css';

function Petrolpump({ onSubmit }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    truckNumber: '',
    dateTime: new Date().toISOString().slice(0, 16),
    petrolPump: '',
    receiptNumber: '',
    quantity: '',
    ratePerLiter: '',
    amount: '',
    driver: '',
    odometer: '',
    remarks: '',
    receiptImg: null,
  });

  // Automatically calculate amount if quantity & rate are filled
  const calculateAmount = () => {
    const q = parseFloat(form.quantity);
    const r = parseFloat(form.ratePerLiter);
    if (!isNaN(q) && !isNaN(r)) return (q * r).toFixed(2);
    return '';
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
      amount: name === 'quantity' || name === 'ratePerLiter'
        ? (form.ratePerLiter && form.quantity && name !== 'amount'
          ? calculateAmount() : prev.amount)
        : prev.amount,
    }));
  };

  const handleAmountBlur = () => {
    if (form.amount === '') {
      setForm((prev) => ({
        ...prev,
        amount: calculateAmount()
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!form.truckNumber || !form.dateTime || !form.petrolPump ||
      !form.receiptNumber || !form.quantity || !form.ratePerLiter ||
      !form.amount || !form.driver || !form.odometer) {
      alert('Please fill all required fields!');
      return;
    }
    // Forward data to parent/component/app state
    if (onSubmit) onSubmit(form);
    alert('Truck filling saved!');
    navigate('/');
  };

  return (
    <div className="petrol-container">
      <h2 className="petrol-title">  Truck Filled </h2>
      <form className="petrol-form" onSubmit={handleSubmit}>
        <div className="petrol-row">
          <label>Truck/Tanker Number<span>*</span></label>
          <input
            type="text"
            name="truckNumber"
            value={form.truckNumber}
            onChange={handleChange}
            placeholder="Enter Truck/Tanker Number"
            required
          />
        </div>
        <div className="petrol-row">
          <label>Date & Time<span>*</span></label>
          <input
            type="datetime-local"
            name="dateTime"
            value={form.dateTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="petrol-row">
          <label>Petrol Pump Name/Location<span>*</span></label>
          <input
            type="text"
            name="petrolPump"
            value={form.petrolPump}
            onChange={handleChange}
            placeholder="Enter Pump Name or Location"
            required
          />
        </div>
        <div className="petrol-row">
          <label>Receipt/Invoice Number<span>*</span></label>
          <input
            type="text"
            name="receiptNumber"
            value={form.receiptNumber}
            onChange={handleChange}
            placeholder="Bill/Invoice Number"
            required
          />
        </div>
        <div className="petrol-row">
          <label>Quantity (Liters)<span>*</span></label>
          <input
            type="number"
            name="quantity"
            min="0.1"
            step="0.01"
            value={form.quantity}
            onChange={handleChange}
            placeholder="Enter Quantity"
            required
          />
        </div>
        <div className="petrol-row">
          <label>Rate per Liter (₹)<span>*</span></label>
          <input
            type="number"
            name="ratePerLiter"
            min="0"
            step="0.01"
            value={form.ratePerLiter}
            onChange={handleChange}
            placeholder="Rate"
            required
          />
        </div>
        <div className="petrol-row">
          <label>Total Amount (₹)<span>*</span></label>
          <input
            type="number"
            name="amount"
            min="0"
            step="0.01"
            value={form.amount !== '' ? form.amount : calculateAmount()}
            onChange={handleChange}
            onBlur={handleAmountBlur}
            placeholder="Total Amount"
            required
          />
        </div>
        <div className="petrol-row">
          <label>Driver Name/ID<span>*</span></label>
          <input
            type="text"
            name="driver"
            value={form.driver}
            onChange={handleChange}
            placeholder="Driver Name/ID"
            required
          />
        </div>



        <button type="submit" className="petrol-submit">Submit</button>
        <button
          type="button"
          className="petrol-back"
          onClick={() => navigate('/service')}
        >
          Back to Dashboard
        </button>
      </form>
    </div>
  );
}

export default Petrolpump;
