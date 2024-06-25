import React from 'react';
import './EndSection.css';

export default function EndSection() {
  return (
    <div className="end-section-container">
      <div className="content">
        <div className="text-section">
          <h3>Download <span className="highlight">Our Best Health Care</span> in Mena</h3>
          <p>Search, compare and book doctor consultations with ease. Order your medicines & get them delivered within 60 minutes. Track your steps count & earn points on hitting the daily goal</p>
          <div className="store-badges">
            <img src='/app-store-badge.png' alt='App Store' />
            <img src='/google-play-badge.png' alt='Google Play' />
          </div>
        </div>
        
      </div>
    </div>
  );
}
