import React, { useContext } from "react";
import "../Components/NavBar.css";
import Logo from "../Images/Logo.jpeg";
import { Link } from "react-router-dom";
import { UserContext } from "../App"
const NavBar = () => {

const {user} = useContext(UserContext)
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
        
            <img src={Logo} />{" "}
       
        </div>
        <div className="navbar-links">
      <Link to ="/">
            Home
      </Link>
      {/* <Link to="/login">
            
      </Link> */}
      {
        user ?<>
        <Link to='/dashboard' >Dashboard</Link>
        <Link to ='/register'>{user?.name}</Link>
        <Link to ='/logout'>Logout</Link>
        </>
        :<>
        <Link to='/product' >Product</Link>
        <Link to ='/about'>About</Link>
        <Link to ='/team'>Team</Link>
        <Link to ='/awards'>Awards</Link>
        <Link to ='/login'>Login</Link>
        <Link to ='/register'>Register</Link>
        </>
      }
      {/* <Link to="/register">
            Register
      </Link>   */}
        </div>
        <div className="navbar-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
