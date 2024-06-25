import React from 'react';
import './SignUpForm.css';

export default function SignUpForm() {
  return (
    <div className="signup-container">
      <div className="left-side">
        <img src="/form-image.png" alt="" />
      </div>
      <div className="right-side">
        <h2>Join our <span className='colored-word'>Team</span></h2>
        <p> By clicking below, you will join to our doctors team .</p>
          <button type="submit" className="signup-button">Sign Up</button>
        
      </div>
    </div>
  );
}
