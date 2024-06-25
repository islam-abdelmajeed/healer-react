import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DoctorsInfo.css';
import Rating from '@mui/material/Rating';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import DoctorSearch from './DoctorSearch';

export default function DoctorsInfo() {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjdiYjE4ZjRhMzY5Y2I1YTNkYjljZSIsInJvbGUiOiJwYXRpZW50IiwiaWF0IjoxNzE4MzQxNDIwLCJleHAiOjE3MTk1NTEwMjB9.BGBc0XX8kbAXDmbFQ85385NS_9MrHntqfAjcokJr_yo";
      try {
        const response = await axios.get('https://uber-health-system.onrender.com/api/patient/search/doctors', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data && Array.isArray(response.data.doctors)) {
          setDoctors(response.data.doctors);
          setFilteredDoctors(response.data.doctors); // Initialize filteredDoctors with all doctors
        } else {
          console.error('Expected array but received:', response.data);
        }

        console.log('Doctors fetched successfully:', response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div>
      <DoctorSearch doctors={doctors} setFilteredDoctors={setFilteredDoctors} />
      <div className="doctor-details-container">
        {filteredDoctors.map((doctor) => (
          <div key={doctor._id} className="doctor-card">
            <div className="doctor-card-header">
              <img src="/doctorsPhoto.png" alt="" width={30} height={40} />
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <Rating value={doctor.rate} readOnly />
              </div>
            </div>
            <div className="doctor-details">
              <div className="doctor-detail">
                <MedicalServicesIcon fontSize="small" />
                <span>{doctor.specialty}</span>
              </div>
              <div className="doctor-detail">
                <LocationOnIcon />
                <span>{doctor.address}</span>
              </div>
              <div className="doctor-detail">
                <AttachMoneyIcon />
                <span>{doctor.price}</span>
              </div>
              <div className="doctor-detail">
                <PhoneInTalkOutlinedIcon />
                <span>{doctor.phone}</span>
              </div>
              <p>Available Times: {doctor.availableTimes.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
