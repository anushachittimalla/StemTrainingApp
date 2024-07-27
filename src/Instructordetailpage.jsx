import React from 'react';
import Robertimage from './images/Robertimage.svg';
import Footer from './Footer';
import Aboutimage from './images/Aboutimage.svg';
import Aboutusarrow from './icons/aboutus-arrow.svg';
import roberthrline from './images/roberthrline.svg';

const Instructordetailpage = () => {
  return (
    <div className='main-instructors'>
    <div className=''>
    <div className='about-bgimage' style={{backgroundImage: `url(${Aboutimage})`}}>
      <div className='aboutus'> 
          <h1 className='aboutus-text'> Instructors</h1>
          <div className='home-aboutus'>
          <p className='about-home'>Home  </p>
          <img src={Aboutusarrow} alt='' className='about-arrow' />
          <p className='about-aboutus' style={{color:" #558CDF"}}>Instructors </p>
          <img src={Aboutusarrow} alt='' className='about-arrow' />
          <p className='about-aboutus' style={{color:" #558CDF"}}>Instructor Details </p>
          </div>
      </div>
      </div>

      <div className='instructor-robert'>
      <img src={Robertimage} alt='' className='robert-image' />
<div className='robert-details'>
    <h1 className='robert-name'>Robert Smith </h1>
    <p className='robert-grdesignr'>Graphic Design</p>
    <img src={roberthrline} alt='' className='robert-Hrline' />

    <p className='robert-bio'>Short Bio:</p>
    <div className='bio-lorem'> 
    <p className='bio-loremtext'>Lorem ipsum dolarorit more ametion consectetur elit. Vesti bulum a nec odio aea theawr dumm Lorem ipsum dolarorit more ametion consectetur elit. Vesti bulum a nec odio aea theawr dumm Lorem ipsum dolarorit more ametion consectetur elit. Vesti bulum a nec odio aea theawr dumm Lorem ipsum dolarorit more ametion consectetur elit. Vesti bulum a nec odio aea theawr dumm</p>
    </div>
</div>
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default Instructordetailpage
