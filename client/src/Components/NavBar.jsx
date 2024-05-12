// import React, { useContext } from "react";
// import "../Components/NavBar.css";
// import Logo from "../Images/Logo.jpeg";
// import { Link } from "react-router-dom";
// import { UserContext } from "../App"
// const NavBar = () => {

// const {user} = useContext(UserContext)
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-logo">
        
//             <img src={Logo} />{" "} 
//         </div>
//         <div className="navbar-links">
//       <Link to ="/">
//             Home
//       </Link>
//       {/* <Link to="/login">
            
//       </Link> */}
//       {
//         user ?<>
//         <Link to='/dashboard' >Dashboard</Link>
//         <Link to ='/register'>{user?.name}</Link>
//         <Link to ='/logout'>Logout</Link>
//         </>
//         :<>
//         <Link to='/product' >Product</Link>
//         <Link to ='/about'>About</Link>
//         <Link to ='/team'>Team</Link>
//         <Link to ='/awards'>Awards</Link>
//         <Link to ='/login'>Login</Link>
//         <Link to ='/register'>Register</Link>
//         </>
//       }
//       {/* <Link to="/register">
//             Register
//       </Link>   */}
//         </div>
//         <div className="navbar-toggle">
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;


import React from "react";
import { useContext } from "react";
import "../Components/NavBar.css";
import Logo from "../Images/Logo.jpeg";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../App"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const {user} = useContext(UserContext)
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to={`/`}>
            {" "}
            <img src={Logo} />{" "}
          </NavLink>
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link to='/' onClick={toggleNavbar}>
            Home
          </Link>
          <Link to='/about' onClick={toggleNavbar}>
            About
          </Link>
          <Link to='/product' onClick={toggleNavbar}>
            Products
          </Link>
          <Link to='/team' onClick={toggleNavbar}>
            Team
          </Link>
          <Link to='/awards' onClick={toggleNavbar}>
            Awards
          </Link>      
          {!user ? (
            <>
              <Link to='/login' onClick={toggleNavbar}>
                LogIn
              </Link>
            </>
          ) : (
            <>
              <Link to='/dashboard' onClick={toggleNavbar}>
                Dashboard
              </Link>
              <Link to='/logout'>
                LogOut
              </Link>
            </>
          )}
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
