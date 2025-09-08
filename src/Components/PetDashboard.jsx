import React, { useState } from 'react';
import { Calendar, Clock, Dog, Phone, User, FileText, Edit3, Trash2, Plus } from 'lucide-react';

const PetDashboard = () => {
  // Mock data based on the form structure
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      petName: "Buddy",
      petType: "Dog",
      ownerName: "John Smith",
      phoneNumber: "+91 98765 43210",
      preferredDate: "06/09/2025",
      preferredTime: "10:00 AM",
      serviceType: "Regular Checkup",
      additionalNotes: "Buddy seems a bit lethargic lately. Please check for any health issues.",
      status: "Confirmed"
    },
    {
      id: 2,
      petName: "Whiskers",
      petType: "Cat",
      ownerName: "Sarah Johnson",
      phoneNumber: "+91 87654 32109",
      preferredDate: "07/09/2025",
      preferredTime: "2:30 PM",
      serviceType: "Vaccination",
      additionalNotes: "Due for annual vaccinations. Cat is very shy around strangers.",
      status: "Pending"
    },
    {
      id: 3,
      petName: "Max",
      petType: "Dog",
      ownerName: "Mike Wilson",
      phoneNumber: "+91 76543 21098",
      preferredDate: "08/09/2025",
      preferredTime: "11:15 AM",
      serviceType: "Grooming",
      additionalNotes: "Golden Retriever needs full grooming service including nail trimming.",
      status: "Confirmed"
    },
    {
      id: 4,
      petName: "Luna",
      petType: "Rabbit",
      ownerName: "Emily Davis",
      phoneNumber: "+91 65432 10987",
      preferredDate: "09/09/2025",
      preferredTime: "9:00 AM",
      serviceType: "Health Consultation",
      additionalNotes: "Rabbit has been eating less than usual. Needs dietary consultation.",
      status: "Completed"
    }
  ]);

  const [filter, setFilter] = useState('all');

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPetIcon = (petType) => {
    return <Dog className="w-5 h-5 text-red-500" />;
  };

  const filteredAppointments = appointments.filter(appointment => {
    if (filter === 'all') return true;
    return appointment.status.toLowerCase() === filter.toLowerCase();
  });

  const handleDelete = (id) => {
    setAppointments(appointments.filter(apt => apt.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Pet Dashboard</h1>
              <p className="text-gray-600">Manage your pet appointments and services</p>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
              <Plus className="w-5 h-5" />
              New Appointment
            </button>
          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-8 h-8 text-red-500" />
              <div>
                <p className="text-gray-600 text-sm">Total Appointments</p>
                <p className="text-2xl font-bold text-gray-900">{appointments.length}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-gray-600 text-sm">Confirmed</p>
                <p className="text-2xl font-bold text-green-600">
                  {appointments.filter(a => a.status === 'Confirmed').length}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-yellow-500" />
              <div>
                <p className="text-gray-600 text-sm">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {appointments.filter(a => a.status === 'Pending').length}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Dog className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-gray-600 text-sm">Completed</p>
                <p className="text-2xl font-bold text-blue-600">
                  {appointments.filter(a => a.status === 'Completed').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6">
          <div className="flex space-x-1 bg-gray-200 p-1 rounded-lg w-fit">
            {['all', 'pending', 'confirmed', 'completed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
                  filter === status
                    ? 'bg-white text-red-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Appointments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredAppointments.map((appointment) => (
            <div key={appointment.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getPetIcon(appointment.petType)}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{appointment.petName}</h3>
                      <p className="text-sm text-gray-600">{appointment.petType}</p>
                    </div>
                  </div>
                  <span className={px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(appointment.status)}}>
                    {appointment.status}
                  </span>
                </div>

                {/* Pet Owner Information */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">{appointment.ownerName}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">{appointment.phoneNumber}</span>
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-red-500" />
                      <div>
                        <p className="text-xs text-gray-500">Date</p>
                        <p className="text-sm font-medium text-gray-900">{appointment.preferredDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-red-500" />
                      <div>
                        <p className="text-xs text-gray-500">Time</p>
                        <p className="text-sm font-medium text-gray-900">{appointment.preferredTime}</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-1">Service Type</p>
                    <p className="text-sm font-medium text-red-600">{appointment.serviceType}</p>
                  </div>
                </div>

                {/* Additional Notes */}
                {appointment.additionalNotes && (
                  <div className="mb-4">
                    <div className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-gray-500 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Additional Notes</p>
                        <p className="text-sm text-gray-700 line-clamp-3">{appointment.additionalNotes}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

                {/* Card Actions */}
              <div className="px-6 py-4 bg-gray-50 border-t flex justify-end gap-2">
                <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Edit3 className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDelete(appointment.id)}
                  className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredAppointments.length === 0 && (
          <div className="text-center py-12">
            <Dog className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No appointments found</h3>
            <p className="text-gray-600 mb-6">No appointments match your current filter.</p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors">
              Schedule New Appointment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetDashboard;