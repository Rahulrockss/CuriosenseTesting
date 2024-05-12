import React from "react";
import Certifiacti1 from "../Images/Certification/certificate-1.jpeg";
import Certifiacti2 from "../Images/Certification/certificate-2.jpeg";
import "./Awards.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";


const Awards = () => {
  return (
    <>
    <NavBar/>
      <div className="aboutMainSec">
      <div className="title">About Us</div>
        <div className="certification-sec">
          <img src={Certifiacti1} alt="Award Certificate" loading="lazy" />
          <img src={Certifiacti2} alt="Award Certificate" loading="lazy" />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Awards;
