import './App.css';
import React from 'react';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Courses from './Courses';
import Instructorspage from './Instructorspage';
import Faqpage from './Faqpage';
import Contactuspage from './Contactuspage';
import Instructordetailpage from './Instructordetailpage';
import Coursedetailpage from './Coursedetailpage';
import StemNavbar from './navbar';

const App = () => {
  return (
    <div className='App'>
       <div  className='header-cls'>
       <StemNavbar style={{backgroundColor:"#F5F7FC"}} />
       </div>
       <div style={{paddingTop: "100px"}}>
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
         <Route path='/courses' element={<Courses />} />
        <Route path='/instructorspage' element={<Instructorspage />} />
       <Route path='/faq' element={<Faqpage />} />
         <Route path='/contactus' element={<Contactuspage />} /> 
         <Route path='/instructor' element={<Instructordetailpage />} /> 
         <Route path='/Coursedetail' element={<Coursedetailpage />} /> 
       </Routes>
       </div>
    </div>
  )
}

export default App;
