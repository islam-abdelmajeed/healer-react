import React, { useState } from 'react';
import './DoctorSearch.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function DoctorSearch({ doctors, setFilteredDoctors }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('');

  const handleSearch = () => {
    let filteredDoctors = doctors;

    if (searchTerm) {
      filteredDoctors = filteredDoctors.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (specialtyFilter !== 'all') {
      filteredDoctors = filteredDoctors.filter(doctor => doctor.specialty.toLowerCase() === specialtyFilter.toLowerCase());
    }

    if (locationFilter) {
      filteredDoctors = filteredDoctors.filter(doctor =>
        doctor.address?.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    setFilteredDoctors(filteredDoctors);
  };

  return (
    <div className="doctor-search-container">
      <div className="search-filters">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={specialtyFilter} onChange={(e) => setSpecialtyFilter(e.target.value)}>
          <option value="all">All Specialties</option>
          <option value="cardiology">Cardiology</option>
          <option value="dermatology">Dermatology</option>
          <option value="neurology">Neurology</option>
          <option value="pediatrics">Pediatrics</option>
        </select>
        <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
          <option value="all">All Locations</option>
          <option value="cairo">Cairo</option>
          <option value="mansoura">Mansoura</option>
          <option value="alexandria">Alexandria</option>
        </select>

        <button onClick={handleSearch}>
          <SearchOutlinedIcon fontSize='large' />
        </button>
      </div>
    </div>
  );
}
