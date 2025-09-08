import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPaw, FaCalendarAlt, FaClock, FaUser, FaDog, FaPhoneAlt, FaEnvelope, FaNotesMedical } from 'react-icons/fa';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';



const REGION = import.meta.env.VITE_AWS_REGION 
const ACCESSKEYID = import.meta.env.VITE_AWS_ACCESS_KEY_ID
const SECRETACCESSKEY = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY

const BookApointment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    petName: '',
    petType: 'dog',
    ownerName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: 'checkup',
    notes: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validation functions
  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateDate = (date) => {
    if (!date) return false;
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  };

  const formatDateToDisplay = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = type === 'checkbox' ? checked : value;

    // Phone number validation - only allow digits and limit to 10
    if (name === 'phone') {
      newValue = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData({
      ...formData,
      [name]: newValue
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = {};

    if (!formData.petName.trim()) {
      newErrors.petName = 'Pet name is required';
    }

    if (!formData.ownerName.trim()) {
      newErrors.ownerName = 'Your name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else if (!validateDate(formData.date)) {
      newErrors.date = 'Please select a future date';
    }

    if (!formData.time) {
      newErrors.time = 'Time slot is required';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Create the S3 client
    const s3Client = new S3Client({
      region: REGION, // Replace with your region
      credentials: {
        accessKeyId: ACCESSKEYID, // Replace with your AWS Access Key
        secretAccessKey: SECRETACCESSKEY // Replace with your AWS Secret Key
      }
    });

    // Prepare the form data as a JSON object with formatted date
    const formattedData = {
      ...formData,
      date: formatDateToDisplay(formData.date)
    };
    
    const jsonData = JSON.stringify(formattedData);
    
    const uploadParams = {
      Bucket: 'sniffi-pet-appointments-data' , // Replace with your bucket name
      Key:  `appointments/${Date.now()}.json`, // File name in the S3 bucket
      Body: jsonData ,
      ContentType: 'application/json'
    };

    try {
      // Upload the JSON data to S3
      const data = await s3Client.send(new PutObjectCommand(uploadParams));
      console.log('Successfully uploaded data to S3', data);

      // Store data locally
      localStorage.setItem('appointmentData', jsonData);

      // Show success message
      setSubmitted(true);

      // Navigate to the Thank You page after a delay
      setTimeout(() => {
        navigate('/thank-you');
      }, 2000);
    } catch (err) {
      console.error('Error uploading data to S3', err);
      alert('There was an error scheduling your appointment. Please try again.');
    }
  };

  const services = [
    { value: 'checkup', label: 'Regular Checkup' },
    { value: 'vaccination', label: 'Vaccination' },
    { value: 'grooming', label: 'Grooming Services' },
    { value: 'dental', label: 'Dental Care' },
    { value: 'emergency', label: 'Emergency Care' }
  ];

  const petTypes = [
    { value: 'dog', label: 'Dog' },
    { value: 'cat', label: 'Cat' },
    { value: 'bird', label: 'Bird' },
    { value: 'rabbit', label: 'Rabbit' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Header Banner */}
      <div className="bg-red-100/50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#3F3D56]">Book Your </span>
            <span className="text-[#FE5F62]">Pet Appointment</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Schedule a visit with our expert veterinarians for your furry friend.
            We provide compassionate care and convenient booking options.
          </p>
        </div>
      </div>

      {/* Appointment Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-16">
              <div className="text-[#FE5F62] text-5xl mb-4">
                <FaPaw className="mx-auto" />
              </div>
              <h2 className="text-2xl font-semibold text-[#3F3D56] mb-4">Thank You!</h2>
              <p className="text-gray-700 mb-6">Your appointment has been successfully scheduled. We'll contact you shortly to confirm the details.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-[#3F3D56] mb-6 flex items-center">
                  <FaDog className="mr-3 text-[#FE5F62]" />
                  Pet Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="petName">
                      Pet's Name*
                    </label>
                    <input
                      type="text"
                      id="petName"
                      name="petName"
                      value={formData.petName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FE5F62] focus:border-transparent ${
                        errors.petName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your pet's name"
                      required
                    />
                    {errors.petName && (
                      <p className="text-red-500 text-sm mt-1">{errors.petName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="petType">
                      Pet Type*
                    </label>
                    <select
                      id="petType"
                      name="petType"
                      value={formData.petType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FE5F62] focus:border-transparent"
                      required
                    >
                      {petTypes.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-[#3F3D56] mb-6 flex items-center">
                  <FaUser className="mr-3 text-[#FE5F62]" />
                  Personal Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="ownerName">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="ownerName"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FE5F62] focus:border-transparent ${
                        errors.ownerName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.ownerName && (
                      <p className="text-red-500 text-sm mt-1">{errors.ownerName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                      Email Address*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FE5F62] focus:border-transparent ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                      Phone Number*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaPhoneAlt className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength="10"
                        className={`w-full pl-10 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FE5F62] focus:border-transparent ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="1234567890"
                        required
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                    <p className="text-gray-500 text-sm mt-1">Enter exactly 10 digits</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-[#3F3D56] mb-6 flex items-center">
                  <FaCalendarAlt className="mr-3 text-[#FE5F62]" />
                  Appointment Details
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
                      Preferred Date*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaCalendarAlt className="text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full pl-10 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FE5F62] focus:border-transparent ${
                          errors.date ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                      />
                    </div>
                    {errors.date && (
                      <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                    )}
                    {formData.date && (
                      <p className="text-gray-500 text-sm mt-1">
                        Selected: {formatDateToDisplay(formData.date)}
                      </p>
                    )}
                  </div>
                 <div>
  <label className="block text-gray-700 font-medium mb-2" htmlFor="time">
    Preferred Time*
  </label>
  <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <FaClock className="text-gray-400" />
    </div>
    <select
      id="time"
      name="time"
      value={formData.time}
      onChange={handleChange}
      className={`w-full pl-10 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FE5F62] focus:border-transparent ${
        errors.time ? 'border-red-500' : 'border-gray-300'
      }`}
      required
    >
      <option value="" disabled>Select a time slot</option>
      <option value="9AM-12PM">9AM - 12PM</option>
      <option value="12PM-3PM">12PM - 3PM</option>
      <option value="3PM-6PM">3PM - 6PM</option>
      <option value="6PM-9PM">6PM - 9PM</option>
    </select>
  </div>
  {errors.time && (
    <p className="text-red-500 text-sm mt-1">{errors.time}</p>
  )}
</div>

                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="service">
                      Service Type*
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FE5F62] focus:border-transparent"
                      required
                    >
                      {services.map(service => (
                        <option key={service.value} value={service.value}>{service.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="notes">
                      Additional Notes
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <FaNotesMedical className="text-gray-400" />
                      </div>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows="4"
                        className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FE5F62] focus:border-transparent"
                        placeholder="Please share any relevant information about your pet's condition"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className={`w-4 h-4 text-[#FE5F62] focus:ring-[#FE5F62] border-gray-300 rounded mt-1 ${
                      errors.agreeToTerms ? 'border-red-500' : ''
                    }`}
                    required
                  />
                  <label htmlFor="agreeToTerms" className="ml-2 block text-gray-700">
                    I agree to the <a href="/terms" className="text-[#FE5F62] hover:underline">Terms & Conditions*</a>
                  </label>
                </div>
                {errors.agreeToTerms && (
                  <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#FE5F62] text-white rounded-md hover:bg-[#e45457] transition-colors text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#FE5F62] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!formData.agreeToTerms}
                >
                  Schedule Appointment
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Other content like Information Cards and Newsletter Section... */}
    </div>
  );
};

export default BookApointment;