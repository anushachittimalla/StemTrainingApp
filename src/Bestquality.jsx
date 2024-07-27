import React from 'react'
import square from "./images/square.svg";
import girlimage from "./images/girlimage.svg";
import boyimage from "./images/boyimage.svg";
import featured from "./images/featured.svg";
import iconarrow from "./icons/iconarrow.svg";

const Bestquality = () => {
  return (
    <div className='home-bestquality'>
        <div> 
            <img src={square} alt="" className="square" />
            <div className='image-container'>
            <img src={girlimage} alt="" className="girlimage" />
            <img src={boyimage} alt="" className="boyimage" />
            </div>
            </div>

            <div className='get-toknow-main'>
<div className='gettoknow'>
    <p className='gettoknow-text'>Get To Know About Us </p>
</div> 
            <div className='we-are'>
                <h1 className='we-are-text'>We Are Providing The <span >Best<img src={featured} alt="" className="skills" style={{marginLeft:"-85px"}} />Quality </span>Online Courses</h1>
            </div>
  <div className='embark'>
    <p className='embark-text'>Embark on a journey of excellence with our top-tier online courses. We meticulously curate each offering to ensure the highest quality, empowering learners to excel in their fields. From expert-led instruction to cutting-edge content, our platform provides the resources you need to succeed in today's dynamic world.</p>
  </div>
<div className='discover'>
    <p className='discover-text'>DISCOVER MORE 
    <img src={iconarrow} alt="" className="iconarrow" style={{marginLeft:"140px", marginTop:"-45px"}} />  </p>
</div>
            </div>
    </div>
  )
}

export default Bestquality
