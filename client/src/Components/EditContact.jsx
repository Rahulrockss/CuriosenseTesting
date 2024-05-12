import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from "../App"
import "./Register.css"
import {toast}  from 'react-toastify'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import NavBar from '../Components/NavBar.jsx'
// import {FaAt,FaAddressBook,FaPhoneFlip,FaUserPlus} from 'react-icons/fa6'

const EditContact = () => {
  const {user} = useContext(UserContext)
  const [values,setValues] = useState({
    gametitle: "",
    age: "",
    gender: "",
    category: "",
    subcategory: "",
    howtoplay: "",
    benefitsofplaying: "",
    itemsrequied: "",
    url: "",
    score: "",
    level: "",
  })
  const navigate = useNavigate()
  const handleInput = (event)=>{
    setValues({...values, [event.target.name]:event.target.value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post("https://curiosensetestingserver.onrender.com/curiosense/add-contact",values,{
        headers:{
          Authorization:`Berear ${localStorage.getItem('token')}`
        }
      })
     .then(res=>{
      if(res.data.success){
        toast.success("Contact Created Succesfully",{
          position:"top-center",
          autoClose:3000
        })
        navigate('/dashboard')
      }
     }).catch(err=> {
       console.log(err)

     })
    
  }
  const {id} = useParams()
  useEffect(() => {
    
    axios.get("http://localhost:8000/curiosense/contacts/"+id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      if (res.data.success) {
      setValues({
        gametitle: res.data.gametitle,
        age: res.data.age,
        gender: res.data.gender,
        category: res.data.category,
        subcategory: res.data.subcategory,
        howtoplay: res.data.howtoplay,
        benefitsofplaying: res.data.benefitsofplaying,
        itemsrequied: res.data.itemsrequied,
        url: res.data.url,
        score: res.data.score,
        level: res.data.level,
      })
      }
    })
    .catch(err => {
      console.log(err);
    });
  }, []);
  return (
    <> 
      <div className="login-container signup-container">
        <div className="login-box signup-box">
          <form onSubmit={handleSubmit}>
            <h2>Edit a New Physical Game</h2>

            <div className="input-group">
              <input
                type="text"
                name="gametitle"
                // value={values.gametitle}
                onChange={handleInput}
                placeholder="Game Title*"
                value={values.gametitle}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="number"
                name="age"
                // value={values.age}
                onChange={handleInput}
                placeholder="Suitable Age Group*"
                value={values.age}
                required
              />
            </div>

            <div className="input-group">
              <select
                id="Gender"
                name="gender"
                value={values.gender}
                onChange={handleInput}
                required
              >
                <option disabled selected Value="default">
                  -- Suitable for Gender* --
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="input-group">
              <select
                id="category"
                name="category"
                // value={values.category}
                onChange={handleInput}
                required
              >
                <option disabled selected Value="default">
                  -- Category* --
                </option>
                <option value="Academic Lessons">Academic Lessons</option>
                <option value="Behavior Development">
                  Behavior Development
                </option>
                <option value="Cognition Development">
                  Cognition Development
                </option>
                <option value="Motor Skill Development">
                  Motor Skill Development
                </option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="input-group">
              <select
                id="subcategory"
                name="subcategory"
                // value={values.subcategory}
                onChange={handleInput}
                required
              >
                <option disabled selected Value="default">
                  -- Sub Category* --
                </option>
                <option value="Memory Enhancement">Memory Enhancement</option>
                <option value="Fine Motor Skill">Fine Motor Skill</option>
                <option value="Academic Lessons Title">
                  Academic Lessons Title
                </option>
              </select>
            </div>

            <div className="input-group">
              <textarea
                id="Howtoplay"
                name="howtoplay"
                // value={values.howtoplay}
                onChange={handleInput}
                required
                placeholder="How to Play the Game (in 100 words).*"
              ></textarea>
            </div>

            <div className="input-group">
              <textarea
                id="benefitsofplaying"
                name="benefitsofplaying"
                // value={values.benefitsofplaying}
                onChange={handleInput}
                required
                placeholder="Benefits of Playing this Game for holistic development (in 50 words)*"
              ></textarea>
            </div>

            <div className="input-group">
              <textarea
                id="itemsrequied"
                name="itemsrequied"
                // value={values.itemsrequied}
                onChange={handleInput}
                required
                placeholder="Items required to play this game.*"
              ></textarea>
            </div>

            <div className="input-group">
              <input
                type="text"
                name="url"
                // value={values.url}
                onChange={handleInput}
                placeholder="Video URL*"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="score"
                // value={values.score}
                onChange={handleInput}
                placeholder="Provide Scoring Pattern"
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="level"
                // value={values.level}
                onChange={handleInput}
                placeholder="Provide Number of levels"
              />
            </div>

           

            <button type="submit" className="login-btn">
              Update
            </button>

            <div className="input-group">
              <span>
                Note : Please upload your video on google drive and make sure
                your video is on public mode
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
)
 }
export default EditContact