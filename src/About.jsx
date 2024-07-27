import React from 'react';
import Aboutimage from './images/Aboutimage.svg';
import Aboutusarrow from './icons/aboutus-arrow.svg';
import Bestquality from './Bestquality';
import ourmissionimage from './images/ourmissionimage.svg';
import square from './images/square.svg';
import mission from './images/mission.svg';
import missionline from './images/missionline.svg';
import waveimage from './images/ourmissionwavesimage.svg';
import Instructors from './Instructors';
import Footer from './Footer';

const About = () => {
  return (
    <div className='main-about'>
        <div className='about'>
<div className='about-bgimage' style={{backgroundImage: `url(${Aboutimage})`}}>
  <div className='aboutus'> 
<h1 className='aboutus-text'> About Us</h1>
<div className='home-aboutus'>
  <p className='about-home'>Home  </p>
  <img src={Aboutusarrow} alt='' className='about-arrow' />
  <p className='about-aboutus' style={{color:" #558CDF"}}>About Us </p>
</div>
</div>
</div>

<Bestquality />

<div className='ourmission' style={{backgroundImage: `url(${ourmissionimage})`}}>
<img src={square} alt='' className='square' />
<div className='outmission-description'>
  <div className='ourmission-headingbox'>
  <h3 className='ourmission-heading'>Our <span style={{color:"#1261D7"}}>Mission<img src={mission} alt="" className="mission" /> 
</span> </h3>  </div>
<img src={missionline} alt="" className="mission-line" />
<div className='ourmission-is'>
  <p className='ourmission-text'>Our mission is to empower individuals worldwide by providing access to high-quality, affordable, and engaging online courses that foster lifelong learning and personal growth. We aim to inspire and equip learners to pursue their passions, achieve their goals, and positively impact their communities.</p>
</div>
</div>
<img src={waveimage} alt="" className="wave-image" />
</div>

<Instructors />
<Footer />
  </div>
  </div>
  )
}

export default About;
