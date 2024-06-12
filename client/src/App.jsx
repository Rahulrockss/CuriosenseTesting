import React, { createContext, useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import AddContact from './Components/AddContact'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login  from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios'
import Contact from './Components/Contact'
import Awards from './Pages/Awards'
import { FaTeamspeak } from 'react-icons/fa6'
import Teams from './Pages/Teams'
import AboutUs from './Pages/AboutUs'
import Product from './Pages/Product'
import EditContact from './Components/EditContact'
import Logout from './Components/Logout'



export const UserContext = createContext(null)

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
  path:'/register',
  element:<Register/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/logout',
    element:<Logout/>
  },
  {
    path:'/team',
    element:<Teams/>
  },
  {
    path:'/about',
    element:<AboutUs/>
  },
  {
    path:'/awards',
    element:<Awards/>
  },
  {
    path:'/product',
    element:<Product/>
  },
  {
    path:"/edit-contact/:id",
    element:<EditContact/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>,
    children:[
      {
        index:true,
        element:<Contact/>
      },
      {
        path: 'add-contact',
        index:true,
        element:<AddContact/>
      }
    ]
  }
])
const App = () => {
  const [user,setUser] = useState()
  useEffect(()=>{
    axios.get("http://localhost:8000/curiosense/verify",{
      headers:{
        Authorization:`Berear ${localStorage.getItem('token')}`
      }
    })
    .then(res=> {
      if(res.data.success){
        setUser(res.data.user)
      }
    }).catch(err=>{
      console.log(err)
    })
  },[])
  return (
<>
<ToastContainer/>
<UserContext.Provider value={{user,setUser}}>
<RouterProvider router={router}/>
</UserContext.Provider>
</>
  )
}

export default App