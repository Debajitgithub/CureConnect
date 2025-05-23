import { useState } from "react";
import { Bell, Calendar, User, } from "lucide-react";

const doctorData = {
  name: "Dr. Ananya Sharma",
  specialization: "Cardiologist",
  profilePic: "https://via.placeholder.com/150",
  appointments: [
    { id: 1, patient: "Rahul Sen", time: "10:30 AM" },
    { id: 2, patient: "Neha Gupta", time: "11:00 AM" },
  ],
};

export default function DoctorDashboard() {
  return (
    <div className="p-6 !bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center !bg-white p-4 shadow-md rounded-xl">
        <div className="flex items-center gap-4">
          <img src={doctorData.profilePic} alt="Doctor" className="w-16 h-16 rounded-full" />
          <div>
            <h1 className="text-xl font-bold">{doctorData.name}</h1>
            <p className="text-gray-600">{doctorData.specialization}</p>
          </div>
        </div>
        {/*<button><Bell className="w-5 h-5" /></button>*/}
      </div>
      
      {/* Dashboard Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Upcoming Appointments */}
        <div className="!bg-white p-4 shadow-md rounded-xl">
          <h2 className="text-lg font-semibold flex items-center gap-2"><Calendar className="w-5 h-5" /> Appointments</h2>
          {doctorData.appointments.map((appt) => (
            <div key={appt.id} className="mt-3 p-3 !bg-gray-50 rounded-lg flex justify-between">
              <span>{appt.patient}</span>
              <span className="text-gray-500">{appt.time}</span>
            </div>
          ))}
        </div>
        
        {/* Patient List */}
        <div className="!bg-white p-4 shadow-md rounded-xl">
          <h2 className="text-lg font-semibold flex items-center gap-2"><User className="w-5 h-5" /> Patients</h2>
          <p className="text-gray-500 mt-2">View and manage patient records.</p>
          <button className="mt-4 !bg-blue-500 text-white px-4 py-2 rounded-lg">View Patients</button>
        </div>

        
      </div>
    </div>
  );
}
