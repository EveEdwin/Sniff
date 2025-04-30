import React, { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    reason: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleRebook = () => {
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      reason: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <h2>Book an Appointment</h2>

          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />

          <label>Time:</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />

          <label>Reason:</label>
          <textarea name="reason" value={formData.reason} onChange={handleChange} required />

          <button type="submit">Schedule Appointment</button>
        </form>
      ) : (
        <div>
          <h2>Thank you! Your appointment is booked.</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Time:</strong> {formData.time}</p>
          <p><strong>Reason:</strong> {formData.reason}</p>
          <br />
          <button onClick={handleRebook}>Book Another Appointment</button>
        </div>
      )}
    </div>
  );
};

export default AppointmentForm;
