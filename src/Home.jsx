import React from 'react';
import image1 from "./images/image1.svg";
import icon1 from "./icons/icon1.svg";
import icon2 from "./icons/icon2.svg";
import icon3 from "./icons/icon3.svg";
import icon4 from "./icons/icon4.svg";
import icon5 from "./icons/icon5.svg";
import icon6 from "./icons/icon6.svg";
import icon7 from "./icons/icon7.svg";
import icon8 from "./icons/icon8.svg";
import iconarrow from "./icons/iconarrow.svg";
import skills from "./images/skills.svg";
import Trendingcourse from './trendingcourse';
import Bestquality from './Bestquality';
import Instructors from './Instructors';
import Ourtestimonials from './Ourtestimonials';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='mainhome'>
    <div className="home"> 
      <img src={icon1} alt="" className="icon1" />
      <div className="empower-container">
      <img src={icon2} alt="" className="icon2" /> 
        <div>
        <div className="empower">
          <p className="empower-text"> Empowering Tomorrow's Leaders, Today. </p>
        </div>
        <div className="levelup"> 
        <h1 className="levelup-text"> Level Up Your <span> Skills: <img src={skills} alt="" className="skills" /></span> Discover Flexible Online Courses</h1>
        </div>
        <div className="explore">
          <p className="explore-text">Explore our range of online courses designed to help you level up your skills at your own pace and convenience.</p>
        </div>
        <div className="button-ourcourse"> 
        <button className="btn btn-primary button-2"> Our Courses  
        <img src={iconarrow} alt="" className="iconarrow"/>
        </button>
        </div>
        <div className='d-flex'> 
        <img src={icon3} alt="" className="icon3"/>
        <img src={icon4} alt="" className="icon4"/>
        </div>
        </div>
</div>
    <div className="imagdiv-1 ">
    <img src={icon5} alt="" className="icon5"/>
    <img src={icon6} alt="" className="icon6"/>
    </div>
    <img src={image1} alt="" className="image-1"/>
      <img src={icon7} alt="" className="icon7"/>
    <img src={icon8} alt="" className="icon8"/>
    </div>
   <Trendingcourse />
   <Bestquality />
<Instructors />
<Ourtestimonials />
<Footer />
    </div>
  )
}

export default Home;
