import React from 'react';
import EndSection from "../Home/EndSection";
import "./Search.css";
import Button from '@mui/material/Button';
export default function Search() {
  return (
    <>
      <div className="section-background">
        
      </div>
      <h2 style={{ textAlign: "center", color: "#FE4E15" }}>Our Working Process</h2>
      <div className="three-columns-section">
        <div className="column">
          <div className="circle">01</div>
          <img src="/photo1.png" alt="" className="column-image" />
          <h3 className="column-title">Select Expert Doctor</h3>
          <p className="column-description">Choosing an Expert Doctor is crucial for ensuring quality care</p>
        </div>
        <div className="column">
          <div className="circle">02</div>
          <img src="/photo2.png" alt="" className="column-image"/>
          <h3 className="column-title">Make Appointment</h3>
          <p className="column-description">We are here to assist you scheduling your appointment</p>
        </div>
        <div className="column">
          <div className="circle">03</div>
          <img src="/photo3.png" alt="" className="column-image" />
          <h3 className="column-title">Online Consultation</h3>
          <p className="column-description">Highly specialized healthcare consultants for your needs</p>
        </div>
      </div>
      <div className='last-section' style={{ backgroundColor: "#F1F9F9", borderRadius: "10px", margin: "10px", padding: "10px", marginBottom: "50px" }}>
        <h3 style={{ textAlign: "center" }}>Discover <span className='colored-word'>our programs</span> for disabled </h3>
        <div  className='last-section' style={{ display: "flex", alignItems: "center", justifyContent: "space-around", backgroundColor: "#ffffff", margin: "30px", borderRadius: "10px", padding: "20px" }}>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h4>Disabled Health care</h4>
            <h5>Save up to 90% on all medical services</h5>
            <p>This program for disabled need medical insurance</p>
          </div>
          <Button variant="contained" sx={{backgroundColor:"#FE4E15",borderRadius:"10px"}}>Learn more</Button>
        </div>
        <div className='last-section' style={{ display: "flex", alignItems: "center", justifyContent: "space-around", backgroundColor: "#ffffff", margin: "30px", borderRadius: "10px", padding: "20px" }}>
          <div  style={{ textAlign: "center", marginBottom: "20px" }}>
            <h4>Freelance Workers</h4>
            <h5>Save up to 70% on all medical services</h5>
            <p>This program for disabled need Statement of social status </p>
          </div>
          <Button variant="contained" sx={{backgroundColor:"#FE4E15",borderRadius:"10px"}}>Learn more</Button>
        </div>
      </div>
      <EndSection />
    </>
  );
}
