import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./Home.css"

import img1 from "../Images/Assets/assets6.jpeg"
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
const Home = () => {

  const headerCnt = "Curiosense Innovations prioritizes a play-centric, curiosity-driven approach for resilient minds. Emphasizing holistic development and mental well-being, we collaborate with parents, teachers, experts and schools to form a comprehensive learning ecosystem. With innovative tools, we prepare children not just for today but also for future opportunities, focusing on skill development and lifelong success."

  useEffect(() => {
    AOS.init({});
  }, []);
  
  return (
    <>
    <NavBar/>
      <div className="home-sec">
        <div className="home-cnt">
          <h2>Welcome To <br /> <span className='subHeading'>Curiosense Innovations</span></h2>
          <p>{headerCnt}</p>
        
          <button className="buy-button home-btn"> Explore More →</button>
          
        </div>
        <div className="home-img" data-aos="fade-up"  data-aos-duration="1000" data-aos-offset="200">
        
          <img className="animation" src={img1} alt='HeaderImage' 
           />
         
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home