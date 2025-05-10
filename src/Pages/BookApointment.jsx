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

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the S3 client
    const s3Client = new S3Client({
      region: REGION, // Replace with your region
      credentials: {
        accessKeyId: ACCESSKEYID, // Replace with your AWS Access Key
        secretAccessKey: SECRETACCESSKEY // Replace with your AWS Secret Key
      }
    });

    // Prepare the form data as a JSON object
    const jsonData = JSON.stringify(formData);
    
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

      // Navigate to the Thank You page
      navigate('/thank-you');
    } catch (err) {
      console.error('Error uploading data to S3', err);
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FE5F62] focus:border-transparent"
                      required
                    />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FE5F62] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
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
                        className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FE5F62] focus:border-transparent"
                        required
                      />
                    </div>
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
                        className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FE5F62] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="time">
                      Preferred Time*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaClock className="text-gray-400" />
                      </div>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FE5F62] focus:border-transparent"
                        required
                      />
                    </div>
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
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#FE5F62] focus:ring-[#FE5F62] border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="agreeToTerms" className="ml-2 block text-gray-700">
                    I agree to the <a href="/terms" className="text-[#FE5F62] hover:underline">Terms & Conditions</a>
                  </label>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#FE5F62] text-white rounded-md hover:bg-[#e45457] transition-colors text-lg font-medium"
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