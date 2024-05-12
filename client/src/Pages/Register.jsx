import React, { useState } from 'react'
import "./Register.css"
import Validation from "../Components/Validations.jsx"
import {toast}  from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import NavBar from '../Components/NavBar.jsx'
const Register = () => {
  const [values,setValues] = useState({
    name:'',
    email:'',
    password:''
  })
  const [errors,setErrors] =useState({})
  const [serverErrors,setServerErrors] = useState([])
  const navigate = useNavigate()
  // const [name,setName]= useState()
  // const [email,setEmail]= useState()
  // const [password,setPassword]= useState()

  const handleInput = (event)=>{
    setValues({...values, [event.target.name]:event.target.value})
  }
  const handleSubmit = (e)=>{

    e.preventDefault()
    console.log(values)
    // const errs = Validation(values)
    // setErrors(errs)
    // if(errs.name===""&& errs.email===""&& errs.password===""){
    axios.post("http://localhost:8000/curiosense/register",values)
     .then(res=>{
      if(res.data.success){
        toast.success("Account Created Succesfully",{
          position:"top-center",
          autoClose:3000
        })
        navigate('/login')
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
    <div className="login-container">
    <div className="login-box ">
      <form  className='form'onSubmit={handleSubmit}>
        <h2>Creator's Account Registration</h2>
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Username"
            required
            onChange={handleInput}
          />
          {
          errors.name && <span className="error">{errors.name}</span>
          }
        </div>

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
          Register
        </button>
        <p>Already Registerd <Link to='/login'>Login</Link></p>
      </form>
    </div>
  </div>
  </>
)
 }

export default Register