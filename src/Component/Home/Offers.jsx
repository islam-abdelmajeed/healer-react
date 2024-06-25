import React from 'react'
import "./Offers.css"
export default function Offers() {
  return (
    <>
    <h2 style={{textAlign:"start",margin:"50px"}}>Choose from <span className='colored-word'>top offers</span></h2>
     <div className="offers-container">
      <div className="offer-item">
        <img src="/Rectangle 105.png" alt="" width={100} height={100}/>
        <div className="ticket">50% off</div>
        <h3>Teeth Cleaning</h3>
        <p><del>500 EGP</del> 150 EGP</p>
        <p style={{color:"#000"}}>236 Offers</p>
      </div>
      <div className="offer-item">
      <img src="/offer2.png" alt="" width={100} height={100}/>        
      <div className="ticket">50% off</div>
        <h3>Facial  Cleansing</h3>
        <p><del>500 EGP</del> 250 EGP</p>
        <p style={{color:"#000"}}>122 Offers</p>
      </div>
      <div className="offer-item">
      <img src="/offer3.png" alt="" width={100} height={100}/>      
      <div className="ticket">50% off</div>
        <h3>Weight Loss</h3>
        <p><del>650 EGP </del> 400 EGP</p>
        <p style={{color:"#000"}}>36 Offers</p>
      </div>
      <div className="offer-item">
        <img src="/Rectangle2.png" alt="" width={100} height={100}/>
        <div className="ticket">50% off</div>
        <h3>Vision Correction</h3>
        <p><del>1500 EGP </del> 750 EGP</p>
        <p style={{color:"#000"}}>26 Offers</p>
      </div>
    </div>
    </>
  )
}
