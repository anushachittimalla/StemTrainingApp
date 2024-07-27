import React from 'react'
import { Courseimages } from './Courseimages';
import Ellipse from "./icons/Ellipse.svg";
import iconarrow from "./icons/iconarrow.svg";
import { useNavigate } from "react-router-dom";

const Eachcourse = () => {
  const navigate = useNavigate()

  const goToCoursedetailPage=()=>{
    navigate("/Coursedetail");
  }
  return (
    <div className='courses-display'>
      {Courseimages.map( each => {
        return(
<div className='eachcourse-box' onClick={() => goToCoursedetailPage()}>
      <img src={each.image} alt='' className='courseimage' />
      <div className='course-price'>
        <p className='courseprice-text'> $0</p>
      </div>
      <div className='course-textbox'>
        <p className='coursetext'>Information About UI/UX Design Degree</p>
      </div>
      <div className='course-lorem'>
        <p className='courselorem-text'>Lorem ipsum dolor sit amet, consectetur adipisicin gelit</p>
      </div>
      <hr className='course-hr' />
      <div className='courseellipse-lessons'>
      <img src={Ellipse} alt='' className='course-ellipse' />
      <p className='course-lessons'>20 Lessons</p>
      <div className='course-enroll'>
        <div className='courseenroll-textbox'> 
        <p className='courseenroll-text'>Enroll Now <img src={iconarrow} alt='' className='iconarrow' style={{marginLeft:"70px", marginTop:"-40px"}} />
</p>
        </div>
      </div>
      </div>

    </div>
        )
      })}
    </div>
  )
}

export default Eachcourse
