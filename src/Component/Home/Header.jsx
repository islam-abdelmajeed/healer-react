import React from 'react';
import './Header.css'; // Import your CSS file

export default function Header() {
  return (
    <div className="header-container">
      <div className="content">
        <div className="text-section">
          <h1>Make Your <span className="colored-word">Appointment easy</span> than before</h1>
          <p style={{color:"#585757"}}>We believe that healthcare should be more than just a service.
            It should be a compassionate and collaborative journey towards wellness.</p>
          <div className="stats">
            <div>
              <h2 className="colored-word">2400+</h2>
              <p style={{color:"#585757"}}>Active Doctors</p>
            </div>
            <div>
              <h2 className="colored-word">400k</h2>
              <p style={{color:"#585757"}}>Active users</p>
            </div>
            <div>
              <h2 className="colored-word">600+ </h2>
              <p style={{color:"#585757"}}>Pharmacy</p>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img src='/Rectangle.png' alt='' width={"400px"} height={"400px"} />
        </div>
        
      </div>
    </div>
  );
}
