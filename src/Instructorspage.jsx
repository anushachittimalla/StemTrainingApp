import React from 'react'
import Aboutimage from './images/Aboutimage.svg';
import Aboutusarrow from './icons/aboutus-arrow.svg';
import Individualinstructor from './Individualinstructor';
import Footer from './Footer';

const Instructorspage = () => {
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
            </div>
        </div>
        </div>
        <div className='each-instructorpage'>
        <Individualinstructor />
        <Individualinstructor />
         <div className='buttons123'>
<button className='btn btn-primary num-button'> 1 </button>
<button className='btn btn-primary num-button'> 2 </button>
<button className='btn btn-primary num-button'> 3 </button>
<button className='btn btn-primary num-button'> ... </button>
<button className='btn btn-primary num-button'> 5 </button>
        </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Instructorspage
