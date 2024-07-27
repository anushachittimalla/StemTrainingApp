import React from 'react';
import stemlogo2 from "./logos/stemlogo2.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitterSquare, faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer-main'> 
    <div className='footer'>
      <div className='stemlogo-div'> 
      <img src={stemlogo2} alt='' className='stemlogo-2' />
      <p className='callus'>Call us </p>
      <p className='contactnum'>1234 5678 987 </p>
      <div className='address'> 
      <p className='address-text'> 329 Queensberry Street, North Melbourne VIC3051, Australia.</p>
      </div>
      <p className='website'>support@studentopt.com</p>
      </div>
      <div className='home-footer'>
<p className='footer-home'>Home </p>
<p className='footer-home'>About</p>
<p className='footer-home'>Courses</p>
<p className='footer-home'>Instructors</p>
<p className='footer-home'>FAQ</p>
      </div>
      <div className='followus-div'>
      <p className='footer-home'>Contact Us</p>
      <p className='footer-home'>Terms of Service</p>
<p className='footer-home'>Privacy Policy</p>
<p className='followus'>Follow Us</p>
<div className='icons-footer'>
<FontAwesomeIcon icon={faFacebook} style={{height:"30px", width:"40px"}} />
<FontAwesomeIcon icon={faInstagram} style={{height:"30px", width:"40px"}} />
<FontAwesomeIcon icon={faTwitterSquare} style={{height:"30px", width:"40px"}}  />
<FontAwesomeIcon icon={faLinkedin} style={{height:"30px", width:"40px"}} />
</div>
      </div>
      </div>
    <hr className='footer-hr'/>  
    <p className='copyright'>Copyright © 2024 All Rights Reserved </p>
    </div>
  )
}

export default Footer
