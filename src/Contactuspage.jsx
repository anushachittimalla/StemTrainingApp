import React, {useState} from 'react';
import Aboutimage from './images/Aboutimage.svg';
import Aboutusarrow from './icons/aboutus-arrow.svg';
import Ellipseblue from './icons/Ellipseblue.svg';
import Locationicon from './icons/Locationicon.svg';
import mobileicon from './icons/mobileicon.svg';
import Emailicon from './icons/Emailicon.svg';
import sendmsgarrow from './icons/sendmsgarrow.svg';
import googlemap from './images/googlemapsimage.svg';
import Footer from './Footer';
import { Modal } from 'antd';
import enrollicon from './icons/enrollicon.svg';

const Contactuspage = () => {
  const [modal3Open, setModal3Open] = useState(false);

  const[queryDetails,setQuerydetails] = useState({
    fullName:"",
    phoneNum:"",
    email:"",
    msg:""
  });
  const changeHandler= e => {
    setQuerydetails({...queryDetails, [e.target.name] : e.target.value})
  }
  const sendQueryHandler = (e) => {
    e.preventDefault();

    if(queryDetails.fullName !== "" && queryDetails.phoneNum !== "" && queryDetails.email !== "" && queryDetails.msg !== ""){
  setModal3Open(true)
    }
  }
  return (
        <div className='main-contact'>
            <div className='contactus'>
            <div className='about-bgimage' style={{backgroundImage: `url(${Aboutimage})`}}>
            <div className='aboutus'> 
                <h1 className='aboutus-text'> Contact Us</h1>
                <div className='home-aboutus'>
                <p className='about-home'>Home  </p>
                <img src={Aboutusarrow} alt='' className='about-arrow' />
                <p className='about-aboutus' style={{color:" #558CDF"}}>Contact Us </p>
                </div>
            </div>
            </div>
            <div className='contactus-information'>
                <div className='contactinf-div'>
<h3 className='contactinf-text'>Contact Information</h3>
<div className='queensberry'>
<img src={Ellipseblue} alt='' className='ellipse-blue' />
<img src={Locationicon} alt='' className='location-icon' />
<div className='qeensberry-textdiv'>
  <p className='qeensberry-text'>329 Queensberry Street, North Melbourne VIC3051, Australia.</p>
</div>
</div>
<div className='queensberry'>
<img src={Ellipseblue} alt='' className='ellipse-blue' />
<img src={mobileicon} alt='' className='location-icon' />
<div className='qeensberry-textdiv'>
  <p className='qeensberry-text'>+1 55578 69090</p>
  <p className='qeensberry-text' style={{color:"#1261D7"}}>available from 9 am to 6 pm EST</p>
</div>
</div>
<div className='queensberry'>
<img src={Ellipseblue} alt='' className='ellipse-blue' />
<img src={Emailicon} alt='' className='location-icon' />
<div className='qeensberry-textdiv'>
  <p className='qeensberry-text' style={{marginTop:"10px"}}>info@gmail.com</p>
</div>
</div>
  </div>
<div className='getintouch-div'>
   <h3 className='getintouch-text'>Get in Touch</h3>   
   <input type="text" className="fullname" placeholder="Full name" name="fullName" onChange={(e) => changeHandler(e)} />    
   <input type="text" className="phone-num" placeholder="+1 Phone Number" name="phoneNum" onChange={(e) => changeHandler(e)}  />  
   <input type="text" className="email-address" placeholder="Email Address" name="email"  onChange={(e) => changeHandler(e)}  style={{marginLeft:"20px"}} />  
   <input type="text-area" className="message" placeholder="Message maximum of 250 characters" name="msg" onChange={(e) => changeHandler(e)}  />   
   <div className='button-div'> 
   <button className='sendmsg-button'  onClick={sendQueryHandler}>Send Message   <img src={sendmsgarrow} alt='' style={{marginLeft:"25px"}} />
</button>
   </div>
   {modal3Open&&
   <Modal footer={false}
   title=""
   centered
   open={modal3Open}
   onCancel={() => setModal3Open(false)}
   width={809}
 >
   <div className="enroll-modal" style={{height:"400px"}}>
   <img src={enrollicon} alt='' className='enrollmodal-icon' />
   <h4 className="enrollmodal-text">Query Submitted Successfully</h4>
   <div className="thankyou-div"> 
   <p className="thankyou-text">Thank you for contacting STEM Training Solutions! Your query has</p>
<p className="thankyou-text">been successfully submitted. Our dedicated support team will review your query and</p>
<p className="thankyou-text">get back to you as soon as possible. Please make sure to check your email for our
response. </p>
   </div>
   <div style={{marginTop:"40px", marginLeft:"-40px"}}>
   <button className="confirm-button-class" onClick={() => setModal3Open(false)}>Close</button>
   </div>
   </div>
 </Modal>} 
     </div>
      </div>
 <div className='googlemap' style={{backgroundImage: `url(${googlemap})`}}>
 </div>
  <Footer />
 </div> 
</div>
  )
}

export default Contactuspage;
