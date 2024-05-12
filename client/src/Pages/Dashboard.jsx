import React from 'react'
import NavBar from '../Components/NavBar'
import './Dashboard.css'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
<>
      <NavBar/>
      <div className="dashboard">
        <div className="sidebar-container">
             <Sidebar/>
        </div>
        <div className="contact-container">
             <Outlet/>
        </div>
      </div>
</>
  )
}
export default Dashboard
