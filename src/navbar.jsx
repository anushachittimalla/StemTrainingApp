import React, { useState } from "react";
import stemlogo1 from "./logos/stemlogo1.svg";
import {NavLink} from "react-router-dom"; 
import { Button, Modal } from 'antd';

function StemNavbar() {
  const [modal1Open, setModal1Open] = useState(false);

  const navItemStyles = (isActive) => {
    return {
      color: isActive ? 'blue' : '#5A5D61E0',      
    }
  }

  return (
    <div className="nav-section fixed-top">
      <div className="stem-logo">
      <img src={stemlogo1} alt="" className="stemlogo-image" />
      </div>
      <div className="nav-elements">
      <NavLink  to = "/" className="main-nav"  style={({ isActive}) => navItemStyles(isActive)}> 
        <div className="nav-item">
        <p className="">  Home  </p>  
        </div>
        </NavLink >
        <NavLink  to = "/about" className="main-nav"  style={({ isActive }) => navItemStyles(isActive)}> 
      <div className="nav-item">
        <p className="" >About Us</p>
        </div>
        </NavLink >
        <NavLink  to = "/courses" className="main-nav"  style={({ isActive }) => navItemStyles(isActive)}>
      <div className="nav-item">
        <p className="">Courses</p>
        </div>
        </NavLink >
        <NavLink  to = "/instructorspage" className="main-nav"  style={({ isActive }) => navItemStyles(isActive)}>
      <div className="nav-item">
        <p className="" style={{width: "70px"}}>Instructors</p>
        </div>
        </NavLink >
        <NavLink  to = "/faq"  className="main-nav" style={({ isActive }) => navItemStyles(isActive)}>
      <div className="nav-item">
        <p className="" style={{width: "70px", marginRight:"-200px"}}>FAQ</p>
        </div>
        </NavLink >
        <NavLink  to = "/contactus"  className="main-nav"  style={({ isActive }) => navItemStyles(isActive)}>
      <div className="nav-item" >
        <p className="" style={{width: "110px", marginLeft:"-40px"}}>Contact Us</p>
        </div>
        </NavLink >
      <div className="button-elm">
        <button className="btn btn-primary button-1">LOGIN  </button>
        &nbsp;&nbsp;&nbsp;
        <button  className="btn btn-outline-primary button-1" onClick={ () => setModal1Open(true)}>SIGN UP</button>
        </div> 
       </div> 
       <Modal footer={false}
        title=""
        centered
        open={modal1Open}
        onCancel={() => setModal1Open(false)}
        width={500}
      >
        <div className="signup-modal">
        <h4 className="signup">Sign Up to Student OPT</h4>
        <div className="onclickon"> 
        <p className="onclickon-text">On click on Sign up  you will  be redirected to<span> Student OPT </span>portal.</p>
        </div>
        <button className="confirm-button-class-ok" onClick={() => setModal1Open(false)}>Ok</button>
        <Button className="cancel-button-class" onClick={() => setModal1Open(false)}>Cancel</Button>
        </div>
      </Modal>
    </div>
  );
}

export default StemNavbar;
