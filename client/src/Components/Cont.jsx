import React, { useState, useContext } from 'react'
import { UserContext } from "../App"
import "./Register.css"
import {toast}  from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import NavBar from '../Components/NavBar.jsx'
// import {FaAt,FaAddressBook,FaPhoneFlip,FaUserPlus} from 'react-icons/fa6'
// dmfxfh66l
const AddContact = () => {
  const {user} = useContext(UserContext)
  const [formFields,setFormFields] = useState({
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
  const { 
  gametitle,
  age,
  gender,
  category,
  subcategory,
  howtoplay,
  benefitsofplaying,
  itemsrequied,
  url,
  score,
  level,} = formFields;
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageLoad, setImageLoad] = useState(false);
  const navigate = useNavigate()
  // const handleInput = (event)=>{

  //   setFormFields({...formFields, [event.target.name]:event.target.formFields})
  // }

  const handleInput =  (e) => {
    setFormFields((prevValue) => ({
      ...prevValue,
      [e.target.name] : e.target.value
    }))
  }
  const imageChange = (e) => {
    const file = e.target.files[0];
    setImagePreview(URL.createObjectURL(file));
    setImage(file);
  }

  const uploadImage = async () => {
    const data = new FormData();
    data.append('file',image);
    data.append('upload_preset', 'images_preset');
    try {
      setImageLoad(true);
      let response = await fetch('https://api.cloudinary.com/v1_1/dmfxfh66l/image/upload', {
        method:'POST',
        body: data,
      })
      let urlData = response.json();
      setImageLoad(false);      
      return urlData;
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const url =  await uploadImage(image)
    const userData = {
      gametitle,
      image:url.url,
      age,
      gender,
      category,
      subcategory,
      howtoplay,
      benefitsofplaying,
      itemsrequied,
      url,
      score,
      level,
    }
    // axios.post("https://curiosensetestingsserver.onrender.com/curiosense/add-contact",{
    const data = await  fetch("http://localhost:8000/curiosense/add-contact",{
        method: 'POST',
        headers:{
          Authorization:`Berear ${localStorage.getItem('token')}`
        },
          body: JSON.stringify(userData)
      })
      let response = await data.json();
      console.log(response)
      return response.data;
    }
      
    //  .then(res=>{
    //   if(res.data.success){
    //     toast.success("Contact Created Succesfully",{
    //       position:"top-center",
    //       autoClose:3000
    //     })
    //     navigate('/dashboard')
    //   }
    //  }).catch(err=> {
    //    console.log(err)

    //  })
    
  
  // const uplloadFile = async (type) =>{
  //   const data = new FormData();
  //   data.append("file",type==='image'? img:video)
  //   data.append("upload_preset",type==='image'?'images_preset':'videoes_preset')
  // }

  // try{

  //   let cloudName = process.env.CLOUDINARY_NAME;
  //   let resourceType = type === 'image' ? 'images_preset':'videos_preseet'
  //   let api = `https://appi.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`

  // } catch(error){
  //   console.log(error);
  // }
  // const imageUrl = await uplloadFile('image')

  return (
    <> 
      <div className="login-container signup-container">
        <div className="login-box signup-box">
          <form onSubmit={handleSubmit}>
            <h2>Create a New Physical Game</h2>

            <div className="input-group">
              <input
                type="text"
                name="gametitle"
                value={formFields.gametitle}
                onChange={handleInput}
                placeholder="Game Title"
                required
              />
            </div>
            <img style={{width:'100%'}} src={imagePreview && imagePreview} alt="" />
            <div className="input-group">
              <input
                type="file"
                name="image"
                onChange={imageChange}
                placeholder="Uplaod Image"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="number"
                name="age"
                value={formFields.age}
                onChange={handleInput}
                placeholder="Suitable Age Group*"
                required
              />
            </div>

            <div className="input-group">
              <select
                id="Gender"
                name="gender"
                value={formFields.gender}
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
                value={formFields.category}
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
                value={formFields.subcategory}
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
                value={formFields.howtoplay}
                onChange={handleInput}
                required
                placeholder="How to Play the Game (in 100 words).*"
              ></textarea>
            </div>

            <div className="input-group">
              <textarea
                id="benefitsofplaying"
                name="benefitsofplaying"
                value={formFields.benefitsofplaying}
                onChange={handleInput}
                required
                placeholder="Benefits of Playing this Game for holistic development (in 50 words)*"
              ></textarea>
            </div>

            <div className="input-group">
              <textarea
                id="itemsrequied"
                name="itemsrequied"
                value={formFields.itemsrequied}
                onChange={handleInput}
                required
                placeholder="Items required to play this game.*"
              ></textarea>
            </div>

            <div className="input-group">
              <input
                type="text"
                name="url"
                value={formFields.url}
                onChange={handleInput}
                placeholder="Video URL*"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="score"
                value={formFields.score}
                onChange={handleInput}
                placeholder="Provide Scoring Pattern"
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="level"
                value={formFields.level}
                onChange={handleInput}
                placeholder="Provide Number of levels"
              />
            </div>

           

            <button type="submit" className="login-btn">
              Submit
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
export default AddContact;