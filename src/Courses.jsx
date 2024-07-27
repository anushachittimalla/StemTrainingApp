import React from 'react';
import Aboutimage from './images/Aboutimage.svg';
import Aboutusarrow from './icons/aboutus-arrow.svg';
import Filterline from './images/Filterline.svg';
import Eachcourse from './Eachcourse';
import Footer from './Footer';

const Courses = () => {
  return (
    <div className='main-course'>
        <div className='course'>
        <div className='about-bgimage' style={{backgroundImage: `url(${Aboutimage})`}}>
        <div className='aboutus'> 
            <h1 className='aboutus-text'> Courses</h1>
            <div className='home-aboutus'>
            <p className='about-home'>Home  </p>
            <img src={Aboutusarrow} alt='' className='about-arrow' />
            <p className='about-aboutus' style={{color:" #558CDF"}}>Courses </p>
            </div>
        </div>
        </div>

        <div className='courses-page'> 
        <div className='filterby-div'>
            <div className='bycategory'>
                <p className='bycategory-head'>Filter By Category </p>
                <img src={Filterline} alt='' className='filter-line' />
                <div className='programng'> 
                <input type="checkbox" />
                <p className='programng-text'> Programing Languages </p>
                </div>
                <div className='programng'> 
                <input type="checkbox" />
                <p className='programng-text'> Programing Languages </p>
                </div>
                <div className='programng'> 
                <input type="checkbox" />
                <p className='programng-text'> Programing Languages </p>
                </div>
                <div className='programng'> 
                <input type="checkbox" />
                <p className='programng-text'> Programing Languages </p>
                </div>
                <div className='programng'> 
                <input type="checkbox" />
                <p className='programng-text'> Programing Languages </p>
                </div>
                <div className='programng'> 
                <input type="checkbox" />
                <p className='programng-text'> Programing Languages </p>
                </div>
                <div className='programng'> 
                <input type="checkbox" />
                <p className='programng-text'> Programing Languages </p>
                </div>
                <div className='programng'> 
                <input type="checkbox" />
                <p className='programng-text'> Programing Languages </p>
                </div>
            </div>
            <div className='bycategory' style={{marginTop:"40px", height:"235px"}}>
            <p className='bycategory-head'>Filter By Instructor </p>
                <img src={Filterline} alt='' className='filter-line' />
                <div className='programng'> 
                <input type="checkbox" />
                <p className='programng-text'> Olivia Mia </p>
                </div>
                <div className='programng'> 
                <input type="checkbox" />
                <p className='programng-text'>Kiran Molly  </p>
                </div>
                <div className='programng'> 
                <input type="checkbox" />
                <p className='programng-text'>Jackson olive </p>
                </div>
                <div className='programng'> 
                <input type="checkbox" />
                <p className='programng-text'> Foley Patrik</p>
                </div>

            </div>

             </div>
        <div className='wefound-div'>
            <p className='wefound-text'> We found <span className='span100'> 100 </span>  courses for you</p>
        
        <Eachcourse />
        
             </div>
        </div>

        <Footer />
        </div>
    </div>
  )
}

export default Courses
