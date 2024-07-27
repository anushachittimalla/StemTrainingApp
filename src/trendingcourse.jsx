import React from 'react';
import featured from "./images/featured.svg";
import Information from './Information';

const Trendingcourse = () => {
  return (
    <div className='trending-div'> 
    <div className='trendingcourse'>
      <div className='trending'>
        <p className='trending-text'>Trending Courses</p>
      </div>
      <div className='ourfeatured'>
        <h1 className='ourfeatured-text'> Our <span>Featured  <img src={featured} alt="" className="skills" />
 </span>  Courses </h1>
      </div>
      <div className='information3'>
      <Information />
      <Information />
      <Information />
      </div>
    </div>
    </div>
  )
}

export default Trendingcourse
