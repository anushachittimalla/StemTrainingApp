import React from 'react'
import { Instructorimages } from './Instructorimages';
import { useNavigate } from "react-router-dom";



const Individualinstructor = () => {
  
  const navigate = useNavigate()

  const goToNewPage=()=>{
    navigate("/instructor");
  }
  return (
    <div className='each-instructor'> 
      { 
        Instructorimages.map(each => {
          return (

              <div className='individualinstructor' onClick={() => goToNewPage()} >
                  <img src={each.image} alt='' className='image-instructor' />
                  <div className='instructor-name'>
                      <h1 className='instructor-nametext'>Olivia Mia</h1>
                  </div>
                  <p className='graphic'>Graphic Designer </p>
                  <div className='text-instructorbox'> 
                  <p className='text-instructor'>Lorem ipsum dolarorit more ametion consectetur elit. Vesti bulum a nec odio aea theawr dumm </p>
                  </div>
              </div>)
          })
      }
    </div>
    
  )
}
export default Individualinstructor;
