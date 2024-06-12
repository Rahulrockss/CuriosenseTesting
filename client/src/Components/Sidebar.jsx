import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
 FaCubesStacked,
 FaUser,
 FaAddressBook,
 FaRegAddressBook,
 FaPowerOff,
 FaAddressCard,
} from 'react-icons/fa6'
import './Sidebars.css'
import { UserContext } from "../App"
import './Spinner.css'

const Sidebar = () => {
const {user} = useContext(UserContext) 
 const [activeLink,setActiveLink] = useState(1)
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <FaCubesStacked className="top-icon"/>
      </div>
      <div className={`sidebar-item ${activeLink===0 ?"active":""}`} onClick={()=>{setActiveLink(0)}}>
        <Link className="sidebar-link">
            <FaUser className="icon"/>{user?.name}</Link>
      </div>
      <div className={`sidebar-item ${activeLink===1 ?"active":""}`} onClick={()=>{setActiveLink(1)}}>
        <Link to="/dashboard/game-details"className="sidebar-link">
        <FaAddressCard className="icon"/>Game Details</Link>
      </div>
      <div className={`sidebar-item ${activeLink===2 ?"active":""}`} onClick={()=>{setActiveLink(2)}}>
        <Link to="/dashboard/add-contact"className="sidebar-link">
        <FaAddressCard className="icon"/>  Add Game</Link>
      </div>
      <div className={`sidebar-item ${activeLink===3 ?"active":""}`} onClick={()=>{setActiveLink(3)}}>
        <Link to ='/logout'className="sidebar-link">
        <FaPowerOff className="icon"/>Exit</Link>
      </div>
    </div>
  );
};
export default Sidebar;
