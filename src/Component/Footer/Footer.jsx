import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-column">
        <img src="/footerImg.png" alt='' width={60} height={55} className="img-footer" style={{borderRadius:"5px"}}/>
        <a href='/'>Header</a>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Terms </a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Search by</h4>
        <ul>
          <li><a href="#">Speciality</a></li>
          <li><a href="#">Area</a></li>
          <li><a href="#">Insurance</a></li>
          <li><a href="#">Hospital</a></li>
          <li><a href="#">Center</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Are You A Doctor ?</h4>
        <ul>
          <li><a href="/">Join Healer Doctors</a></li>
          <li>
            <a href="https://store.google.com/regionpicker?pli=1">
             <img src="/google-play-badge.png" alt="Google Play" width={150} height={50}/>
            </a>
          </li>
          <li>
            <a href="https://www.apple.com/eg-ar/app-store/">
             <img src="/app-store-badge.png" alt="App Store" width={150} height={50} />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Countries</h4>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}> 
          <p>Egypt</p>
          <p>KSA</p>
          <p>UAE</p>
          <p>Qatar</p>
          <p>Oman</p>
        </div>
      </div>
    </div>
  );
}
