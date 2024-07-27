import React from 'react'
import featured from "./images/featured.svg";
import arrow1 from "./images/arrow1.svg";
import arrow2 from "./images/arrow2.svg";
import Individualinstructor from './Individualinstructor';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Instructors = () => {
  return (
    <div className='instructors-main'>
      <div className='our-qualified'>
        <p className='our-qualifiedtext'> Our Qualified People Matter</p>
      </div>
      <div className='top-class'>
        <h1 className='topclass-text'>Top <span> Class <img src={featured} alt="" className="skills"/></span> Instructor</h1>
      </div>
      <div className='instructorsdetails'>
<img src={arrow1} alt='' className='arrow1' />

<Individualinstructor />

<img src={arrow2} alt='' className='arrow2' />

      </div>
    </div>
  )
}

export default Instructors
