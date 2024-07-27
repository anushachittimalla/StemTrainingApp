import React,{useState} from 'react';
import course1image from './images/course1image.svg';
import backarrow from './icons/backarrow.svg';
import personicon from './icons/personicon.svg'
import iconarrow from "./icons/iconarrow.svg";
import filterline from './images/Filterline.svg';
import Ellipsegrey from './icons/Ellipsegrey.svg';
import tickmarkicon from './icons/tickmarkicon.svg';
import Robertsmith from './images/Robertsmith.svg';
import Kettyolive from './images/Kettyolive.svg';
import Footer from './Footer' ;
import {Modal } from 'antd';
import enrollicon from './icons/enrollicon.svg';

const Coursedetailpage = () => {
  const [modal2Open, setModal2Open] = useState(false);

  return (
        <div className='coursedetail'>
        <div className='coursepage-part1'>
        <div className='course-back'>
        <img src={backarrow} alt='' className='' />
<p className='back'> Back</p>
        </div>
        <div className='graphic'>
          <p className='graphic-text'>Graphic Design</p>
        </div>
        <div className='essential'>
          <h3 className='essential-text'>Essential Beginners UX/UI Core Course For You 2023 </h3>
        </div>
        <div className='lorem-coursedetail'>
          <p className='lorem-coursedetailtext'>Lorem ipsum dolor sit amet, consectetur adipisicin gelit Lorem ipsum dolor sit amet, consectetur adipisicin gelit</p>
        </div>
        <div className='person-interesteddiv'> 
        <img src={personicon} alt='' className='' />
        <p className='students340'>340 Students Enrolled</p>
        </div>
<div className='thiscoursediv'>
<img src={course1image} alt='' className='Course1-image' />
<div className='course1-div'>
  <p className='coursedetails-cost'>Costs: <span className='cost-0'>$0 </span></p>
  <div className='coursedetail-enroll'>
        <div className='coursedetailenroll-textbox'> 
        <p className='coursedetailenroll-text' onClick={ () => setModal2Open(true)}>Enroll Now <img src={iconarrow} alt='' className='iconarrow' style={{marginLeft:"100px", marginTop:"-50px"}} />
</p>
<Modal footer={false}
        title=""
        centered
        open={modal2Open}
        onCancel={() => setModal2Open(false)}
        width={800}
      >
        <div className="enroll-modal">
        <img src={enrollicon} alt='' className='enrollmodal-icon' />
        <h4 className="enrollmodal-text">Enrollment Successful</h4>
        <div className="enroll-onclickon"> 
        <p className="enrollonclickon-text">Congratulations! You have successfully enrolled for the 
<span className='onclickonspan'> [Course Name] </span></p>
<p className="enrollonclickon-text">course/training. We're excited to have you on board. Below are the details of your registration:</p>
<span className='enroll-onclickonspan'>Course Name:  [Course Name] </span>  <br/>
<span className='enroll-onclickonspan'>Course Start Date: [Start Date] </span> <br/>
<span className='enroll-onclickonspan'>Course Duration: [Duration] </span> <br/>
<span className='enroll-onclickonspan'>Batch Schedule: [Schedule] </span> <br/>
<p className="enrollonclickon-text">Please check your email for further instructions and resources related to your</p>
<p className="enrollonclickon-text">registered course. If you have any questions or need assistance, don't hesitate to</p>
<p className="enrollonclickon-text">reach out to our support team.</p>
<p className="enrollonclickon-text">Best of luck with your learning journey! </p>
        </div>
        <div style={{marginTop:"70px", marginLeft:"-40px"}}>
        <button className="confirm-button-class" onClick={() => setModal2Open(false)}>Close</button>
        </div>
        </div>
      </Modal>
        </div>
      </div>
      <p className='thiscoursetext'>This Course Includes</p>
      <img src={filterline} alt='' style={{marginLeft:"-190px", marginTop:"-25px"}} />
<div className='courseincludes'>
<img src={Ellipsegrey} alt=''  />
<p className='durationtext'>Duration </p>
<p className='duration-value'>2 hours </p>
</div>
<div className='courseincludes'>
<img src={Ellipsegrey} alt='' />
<div className='seats' >
<p className='Estimated-Seat' >Estimated Seat </p>
</div>
<p className='seat-value'>250 </p>
</div>
<div className='courseincludes'>
<img src={Ellipsegrey} alt=''/>
<p className='durationtext'>Joined </p>
<p className='duration-value' style={{marginLeft:"125px"}}>200 </p>
</div>
<div className='courseincludes'>
<img src={Ellipsegrey} alt=''/>
<p className='durationtext'>Category </p>
<p className='duration-value'>Design </p>
</div>
</div>
</div>
</div>
<div className='description-div'>
  <p className='descrptn-text'>Description</p>
  <img src={filterline} alt='' style={{marginLeft:"-1050px", marginTop:"-25px"}} />
<div className='this-tutorialdiv'>
  <p className='this-tutorialtext'>This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, iaws dumm text used in laying out print, graphic or web designs. Lorem ipsum dolor sit amet, consectetuer adipiscingawr elit onec odio. Quisque volutpat mattis eros.
</p> </div>
<div className='this-tutorialdiv'>
  <p className='this-tutorialtext'>
You’ll be exposed to principles and strategies, but, more importantly, you’ll learn how to actually apply these abstract concepts by coding three different websites for three very different audiences. Lorem ipsum is dummy text used in laying out print, graphic or web designs Lorem ipsum</p>
</div>
<div className='whatwill-div'>
<p className='whatwill-text'>What Will You Learn</p>
<img src={filterline} alt='' style={{marginLeft:"-600px", marginTop:"-25px"}} />
<div className='learnings'>
  <div className='learnings1'>
    <div className='become'>
    <img src={tickmarkicon} alt='' className='tick-mark' />
<p className='become-text'>Become a UX designer.</p>
    </div>
    <div className='become'>
    <img src={tickmarkicon} alt='' className='tick-mark' />
<p className='become-text'>Create quick wireframes.</p>
    </div>
    <div className='become'>
    <img src={tickmarkicon} alt='' className='tick-mark' />
<p className='become-text'>You will be able to add UX designee</p>
    </div>
    <div className='become'>
    <img src={tickmarkicon} alt='' className='tick-mark' />
<p className='become-text'>Downloadable exercise files</p>
    </div>
  </div>
  <div className='learnings1' style={{marginLeft:"50px"}}>
    <div className='become'>
    <img src={tickmarkicon} alt='' className='tick-mark' />
<p className='become-text'>Become a UX designer.</p>
    </div>
    <div className='become'>
    <img src={tickmarkicon} alt='' className='tick-mark' />
<p className='become-text'>Create quick wireframes.</p>
    </div>
    <div className='become'>
    <img src={tickmarkicon} alt='' className='tick-mark' />
<p className='become-text'>You will be able to add UX designee</p>
    </div>
    <div className='become'>
    <img src={tickmarkicon} alt='' className='tick-mark' />
<p className='become-text'>Downloadable exercise files</p>
    </div>
  </div>
</div>
</div>
<div className='whatwill-div'>
<p className='whatwill-text'>Your Instructors</p>
<img src={filterline} alt='' style={{marginLeft:"-600px", marginTop:"-25px"}} />
<div className='yourinstructors-1'>
<img src={Robertsmith} alt='' className='Robertsmith-img' />
<div className='yourinstrctor-details'>
  <h1 className='Robertsmith-text'>Robert Smith</h1>
  <p className='graphic-designer'>Graphic Design</p>
  <div className='loremipsum2-div'>
  <p className='loremipsum2'>Lorem ipsum dolarorit more ametion consectetur elit. Vesti bulum a nec odio aea theawr dumm Lorem ipsum dolarorit more ametion consectetur elit. Vesti bulum a nec odio aea theawr dumm</p>
  </div>
  <div className='seeprofile-div'>
    <button className='seeprofile'>See Profile <img src={iconarrow} alt='' className='iconarrow' style={{marginLeft:"70px", marginTop:"-40px"}} /> </button>
  </div>
</div>
</div>
<div className='yourinstructors-1'>
<img src={Kettyolive} alt='' className='Robertsmith-img' />
<div className='yourinstrctor-details'>
  <h1 className='Robertsmith-text'>Ketty Olive</h1>
  <p className='graphic-designer'>Graphic Design</p>
  <div className='loremipsum2-div'>
  <p className='loremipsum2'>Lorem ipsum dolarorit more ametion consectetur elit. Vesti bulum a nec odio aea theawr dumm Lorem ipsum dolarorit more ametion consectetur elit. Vesti bulum a nec odio aea theawr dumm</p>
  </div>
  <div className='seeprofile-div'>
    <button className='seeprofile'>See Profile <img src={iconarrow} alt='' className='iconarrow' style={{marginLeft:"70px", marginTop:"-40px"}} /> </button>
  </div>
</div>
</div>
</div>
</div>
    <Footer />
</div>
  )
}

export default Coursedetailpage
