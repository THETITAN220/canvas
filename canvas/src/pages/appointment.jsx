import React, { useState } from 'react';
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import Nav from "../components/nav"
import './Appointment.css';

const Appointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  
  const specialties = [
    "Cardiology",
    "Dermatology",
    "Orthopedics",
    "Pediatrics",
    "Neurology",
    "General Medicine"
  ];

  const doctors = {
    Cardiology: [
      {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialty: "Cardiology",
        experience: "15 years",
        education: "MD - Cardiology, MBBS",
        description: "Dr. Johnson is a renowned cardiologist specializing in interventional cardiology and heart failure management. She has performed over 1000 successful cardiac procedures.",
        availability: "Mon-Fri, 9:00 AM - 5:00 PM",
        image: "C:/Users/Lenovo/vscode/canvas/canvas/src/assets/Johnson.webp"
      },
      {
        id: 2,
        name: "Dr. Michael Chen",
        specialty: " Dermatology",
        experience: "12 years",
        education: "MD - Cardiology, MBBS",
        description: "Dr. Chen specializes in preventive cardiology and cardiac rehabilitation. He is known for his patient-centered approach to heart health.",
        availability: "Mon-Thu, 10:00 AM - 6:00 PM",
        image: "/api/placeholder/150/150"
      },
    ],
    Dermatology: [
      {
        id: 3,
        name: "Dr. Emily Taylor",
        specialty: "Dermatology",
        experience: "10 years",
        education: "MD - Dermatology, MBBS",
        description: "Dr. Taylor is an expert in cosmetic dermatology and skin cancer treatment. She has pioneered several innovative treatment protocols.",
        availability: "Tue-Sat, 9:00 AM - 5:00 PM",
        image: "/api/placeholder/150/150"
      },
      {
        id: 4,
        name: "Dr. James Wilson",
        specialty: "Dermatology",
        experience: "8 years",
        education: "MD - Dermatology, MBBS",
        description: "Dr. Wilson specializes in pediatric dermatology and complex skin conditions. He is known for his gentle approach with young patients.",
        availability: "Mon-Fri, 11:00 AM - 7:00 PM",
        image: "/api/placeholder/150/150"
      }
    ],
    // Add more specialties as needed
  };
  const booked =() =>
  {
        alert("Appointment booked!!");
  };

  const [selectedSpecialty, setSelectedSpecialty] = useState(specialties[0]);

  return (
        <>
        <Nav />

    <div className="appointment-container mx-3">
      {/* Left Sidebar - 1/3 width */}
      <div className="specialty-sidebar">
        <h2>Select Specialist</h2>
        <div className="specialty-search">
          <input 
            type="text" 
            placeholder="Search Specialist" 
            className="search-input"
          />
        </div>
        
        <div className="specialty-list">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              className={`specialty-btn ${selectedSpecialty === specialty ? 'active' : ''}`}
              onClick={() => setSelectedSpecialty(specialty)}
            >
              {specialty}
            </button>
          ))}
        </div>

        <div className="doctors-list">
          <h3>Available Doctors</h3>
          {doctors[selectedSpecialty]?.map((doctor) => (
            <button
              key={doctor.id}
              className={`doctor-btn ${selectedDoctor?.id === doctor.id ? 'active' : ''}`}
              onClick={() => setSelectedDoctor(doctor)}
            >
              {doctor.name}
            </button>
          ))}
        </div>
      </div>

      {/* Right Content Area - 2/3 width */}
      <div className="doctor-details">
        {selectedDoctor ? (
          <div className="doctor-profile">
            <div className="doctor-header">
              
              <div className="doctor-basic-info">
                <h2>{selectedDoctor.name}</h2>
                <p className="specialty-tag">{selectedDoctor.specialty}</p>
                <p>{selectedDoctor.experience} Experience</p>
              </div>
            </div>

            <div className="doctor-info-grid">
              <div className="info-card">
                <h3>Education</h3>
                <p>{selectedDoctor.education}</p>
              </div>
              <div className="info-card">
                <h3>Availability</h3>
                <p>{selectedDoctor.availability}</p>
              </div>
              <div className="info-card full-width">
                <h3>About</h3>
                <p>{selectedDoctor.description}</p>
              </div>
            </div>

            <button className="book-appointment-btn" onClick={booked}>
              Book Appointment
            </button>
          </div>
        ) : (
          <div className="no-selection">
            <h2>Select a doctor to view their details</h2>
            <p>Choose from the list of available doctors on the left</p>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
};
export default Appointment;