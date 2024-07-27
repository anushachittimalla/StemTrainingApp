import React from 'react'
import image2 from "./images/image2.svg";
import Ellipse from "./icons/Ellipse.svg";
import iconarrow from "./icons/iconarrow.svg";

const Information = () => {
  return (
    <div className='information-box'>
      <img src={image2} alt='' className='image2' />
      <div className='price'>
        <p className='price-text'> $0</p>
      </div>
      <div className='information-textbox'>
        <p className='informationtext'>Information About UI/UX Design Degree</p>
      </div>
      <div className='lorem'>
        <p className='lorem-text'>Lorem ipsum dolor sit amet, consectetur adipisicin gelit</p>
      </div>
      <hr />
      <div className='ellipse-lessons'>
      <img src={Ellipse} alt='' className='ellipse' />
      <p className='lessons'>20 Lessons</p>
      <div className='enroll'>
        <div className='enroll-textbox'> 
        <p className='enroll-text'>Enroll Now <img src={iconarrow} alt='' className='iconarrow' style={{marginLeft:"100px", marginTop:"-40px"}} />
</p>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Information
