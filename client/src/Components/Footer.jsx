import React from "react";
import "./Footer.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { CONTACT } from "../Routes/Routes";

const Footer = () => {
  return (
    <footer>
      <div className="address-sec">
        <h3>Curiosense Innovations PVT LTD</h3>
        <address>
          #2nd Floor, AES Block.
          <br />
          Acharya Institute Of Technology
          <br />
          Soldevanahalli, Bangalore - 560107
        </address>
      </div>
      <div className="social-media-sec">
        <div className="social-icons">
          <a href="tel:+918861470883">
            {/* <FontAwesomeIcon icon={faPhone} size="2xl" className="icons" /> */}
          </a>
          <a href="mailto:curiosense.co.in@gmail.com">
            {/* <FontAwesomeIcon icon={faEnvelope} size="2xl" className="icons" /> */}
          </a>
          <a
            href="https://www.linkedin.com/company/curiosense-innovations-private-limited/"
            target="_blank"
          >
            {/* <FontAwesomeIcon icon={faLinkedinIn} size="2xl" className="icons" /> */}
          </a>
          {/* <FontAwesomeIcon icon={faInstagram} size="2xl" /> */}
        </div>
        <span>Terms Of Use</span>
        <span> | </span>
        <Link className="span" to='/contact'>
          <span>Contact Us</span>
        </Link>
        <span> | </span>
        <Link className="span" to="https://www.linkedin.com/in/rakesh-kumar18/">
          <span>Developer</span>
        </Link>

        <p>
          Copyright &copy; 2023, Curiosense Innovations, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
