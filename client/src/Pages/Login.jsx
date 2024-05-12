import React, { useContext, useState } from 'react'
import "./Register.css"
import Validation from "../Components/Validations.jsx"
import {toast}  from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { UserContext } from '../App'
import NavBar from '../Components/NavBar.jsx'
import Spinner from '../Components/Spinner.jsx'


const Login = () => {
  const [values,setValues] = useState({
    email:'',
    password:''
  })
  const {user,setUser} = useContext(UserContext)
  const [errors,setErrors] =useState({})
  const [serverErrors,setServerErrors] = useState([])
  const navigate = useNavigate()
  const [loggedInState,setLoggedInState] = useState()
  const handleInput = (event)=>{
    setValues({...values, [event.target.name]:event.target.value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setLoggedInState("logging in")
    console.log(values)
    axios.post("https://curiosensetestingserver.onrender.com/curiosense/login",values)
     .then(res=>{
     
      if(res.data.success){
        toast.success("Login Succesfully",{
          position:"top-center",
          autoClose:3000
        })
        localStorage.setItem("token",res.data.token)
        setUser(res.data.user)
        navigate('/dashboard')
      }
     }).catch(err=> {
 
      if(err.response.data.errors){
          setServerErrors(err.response.data.errors)
      }else{
        console.log(err)
      }
     })  
  }
  return (
    <>
   
    <NavBar/>
    <br />
    <br />
    {loggedInState==="logging in"?<Spinner/>:""}
    <div className="login-container signup-container">
    <div className="login-box signup-box">
      <form  className='form'onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleInput}
          />
           {
          errors.password && <span className="error">{errors.password}</span>
          }
        </div>
        <div className="input-group">
          <input
            type="text"
            name="password"
            placeholder="Password"
            required
            onChange={handleInput}
          />
           {
          errors.email && <span className="error">{errors.email}</span>
          }
        </div>
        {
          serverErrors.length >0 && (
            serverErrors.map((errors,index)=>(
              <p className='error' key={index}>{errors.msg}</p>
            ))
          )
        }


        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      <p>Not  Registerd <Link to='/register'>Register</Link></p>
    </div>
  </div>
  </>

)
 }

export default Login