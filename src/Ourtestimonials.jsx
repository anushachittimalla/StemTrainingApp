import React from 'react';
import skills from "./images/skills.svg";
import worldmap from "./images/worldmap.svg";
import testmnl1 from "./images/testmnl1.svg";
import testmnl2 from "./images/testmnl2.svg";
import testmnl3 from "./images/testmnl3.svg";
import testmnl4 from "./images/testmnl4.svg";
import testmnl5 from "./images/testmnl5.svg";
import testmnl6 from "./images/testmnl6.svg";
import arrow1 from "./images/arrow1.svg";
import arrow2 from "./images/arrow2.svg";
import quotes from "./icons/quotes.svg";
import stars from "./icons/stars.svg";

const Ourtestimonials = () => {
  return (
    <div className='Ourtestimonials-div'>
      <div className='Ourtestimonials'>
        <p className='Ourtestimonials-text'> Our Testimonials</p>
      </div>
      <div className='learnnew'>
        <h1 className='learnnew-text'> Learn New <span>Skills <img src={skills} alt='' className='skills' /></span> to Go Ahead for Your Career</h1>
      </div>
      <div className='worldmap-div' style={{backgroundImage: `url(${worldmap})`}}>
        <div className='testmnl-part1'>
        <img src={testmnl1} alt='' className='testmnl-1' />
        <img src={testmnl2} alt='' className='testmnl-2' />
        <img src={testmnl3} alt='' className='testmnl-3' />
        </div>
        <div className='testmnl-part2'>
        <img src={arrow1} alt='' className='arrow1' style={{marginTop:"160px",marginLeft:"-30px"}}/>
        <div className=''>
        <img src={quotes} alt='' className='quotes'  /> <br />
        <img src={stars} alt='' className='stars'  />
 <div className='ihavetaken'>
    <p className='ihavetaken-text'>I've taken online courses from various platforms, but none compare to the quality provided by this one. The instructors are experts in their fields, and the course content is both engaging and informative. I've truly expanded my skill set and knowledge thanks to these exceptional courses. </p>
    </div>
    <p className='sarah'> Sarah M.</p>
            </div> 
        <img src={arrow2} alt='' className='arrow2'  style={{marginTop:"160px"}} />
        </div>
        <div className='testmnl-part3'>
        <img src={testmnl4} alt='' className='testmnl-4' />
        <img src={testmnl5} alt='' className='testmnl-5' />
        <img src={testmnl6} alt='' className='testmnl-6' />
        </div>
      </div>
    </div>
  )
}

export default Ourtestimonials;
