import React from 'react';

// Image Logo:
import healerLogo from '../../Image Assets/img/HealerLogo.png';
// Image Doctor Hind:
import doctorHind from '../../Image Assets/img/doctors/doctor-hind.png';
// Image Doctor Ceo:
import doctorCeo from '../../Image Assets/img/doctors/doctor-ceo.png';
import { Link } from 'react-router-dom';

// Out Team Box Component:
const OurTeamBox = ({ srcImage, headTitle, description }) => {
  return (
    <div className='our-team-box d-flex flex-column flex-md-row align-items-center gap-5 text-center text-md-start mb-5'>
      {/* # Image # */}
      <div className='our-team-img'>
        <img
          src={srcImage}
          alt={headTitle}
          style={{ height: '320px', width: "220px" }}
          className='rounded-3 object-fit-cover'
        />
      </div>
      {/* # Text # */}
      <div className='our-team-text'>
        <h4 className='mb-2 fw-bolder'>{headTitle}</h4>
        <p className='fw-medium'>{description}</p>
      </div>
    </div>
  )
}

const description =
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

export default function Team() {
  return (
    <div className='team-page'>
      <main>
        {/* # Our Team Section # */}
        <section className='our-team-sec py-5'>
          <div className='container'>
            {/* # Quote # */}
            <div
              style={{ background: "#f1f9f9" }}
              className='quote-box p-3 p-md-5 rounded-3 border mb-5'
            >
              {/* # Logo # */}
              <div className='Logo text-center'>
                <Link >
                  <img
                    src={healerLogo}
                    alt='Logo App'
                    style={{ width: "100px" }}
                  />
                </Link>
              </div>
              {/* # Icon # */}
              <div className='quote-icon fs-2' style={{ color: "#fe5311", marginTop: "-25px" }}>
                <i className="fa-solid fa-quote-left"></i>
              </div>
              {/* # Text # */}
              <p className='fw-medium text-center'>
                "Healer" is a cutting-edge healthcare platform revolutionizing medical appointments and clinic management across the Middle East and North Africa region. Our mission is to facilitate seamless, high-quality healthcare access for all individuals in the Arab world.With over 200,000 verified and reviewed evaluations, patients can effortlessly search, compare, and book appointments with top-tier healthcare professionals instantly. Simultaneously, healthcare providers can deliver a frictionless care experience through Healer's clinic management software.
                Currently operating in Egypt, Saudi Arabia, Levant, UAE, Healer aims to excel in all facets of the healthcare industry, continually launching products that positively impact people's lives.
              </p>
            </div>
            <h2 className='text-center fw-bold mb-4'>Our Team</h2>
            {/* ## Our Team Boxes ## */}
            <div className='our-team-boxes'>
              {/* Box 1 */}
              <OurTeamBox
                srcImage={doctorHind}
                headTitle={'Doctor Hind Co fonder Healer'}
                description={description}
              />
              {/* Box 2 */}
              <OurTeamBox
                srcImage={doctorCeo}
                headTitle={'Doctor Ceo operation Management at Healer'}
                description={description}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
};