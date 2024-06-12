import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../App";
import "./Register.css";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import NavBar from '../Components/NavBar.jsx';
import Footer from './Footer.jsx';

const EditContact = () => {
  const { user } = useContext(UserContext);
  const [formFields, setFormFields] = useState({
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
  });
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
    level
  } = formFields;

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageLoad, setImageLoad] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams()
  const handleInput = (e) => {
    setFormFields((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value
    }));
  };

  const imageChange = (e) => {
    const file = e.target.files[0];
    setImagePreview(URL.createObjectURL(file));
    setImage(file);
  };
  
  const uploadImage = async () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'images_preset');
    try {
      setImageLoad(true);
      let response = await fetch('https://api.cloudinary.com/v1_1/dmfxfh66l/image/upload', {
        method: 'POST',
        body: data,
      });
      let urlData = await response.json();
      setImageLoad(false);
      return urlData;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadedImage = await uploadImage();
    const userData = {
      gametitle,
      image: uploadedImage ? uploadedImage.url : imagePreview,
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
    };
    try {
      const response = await axios.put("https://curiosensetestingsserver.onrender.com/curiosense/update-contact/"+id, userData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (response.data.success) {
        toast.success("Game Updated Successfully", {
          position: "top-center",
          autoClose: 3000
        });
        navigate('/dashboard/game-details');
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  console.log(id);
  useEffect(()=>{
    axios.get("https://curiosensetestingsserver.onrender.com/curiosense/contact/"+id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then(res => {
      if (res.data.success) {
        setFormFields({
          gametitle: res.data.gametitle,
          image:res.data.image,
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
  },[])

  return (
    <>
      <div className="register-container">
        <div className="register-box">
          <form onSubmit={handleSubmit}>
            <h2>Edit Physical Game</h2>

            <div className="input-group">
              <input
                type="text"
                name="gametitle"
                onChange={handleInput}
                placeholder="Game Title"
                value={formFields.gametitle}
                required
              />
            </div>
            {imagePreview && <img className="image-preview" src={imagePreview} alt="Preview" />}
            <h5 style={{color:'black',justifyContent:'left'}}>Upload Image</h5>
            <div className="input-group">
              <input 
                type="file"
                name="image"
                onChange={imageChange}
                placeholder="Image"
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
                <option disabled value="">
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
                <option disabled value="">
                  -- Category* --
                </option>
                <option value="Academic Lessons">Academic Lessons</option>
                <option value="Behavior Development">Behavior Development</option>
                <option value="Cognition Development">Cognition Development</option>
                <option value="Motor Skill Development">Motor Skill Development</option>
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
                <option disabled value="">
                  -- Sub Category* --
                </option>
                <option value="Memory Enhancement">Memory Enhancement</option>
                <option value="Fine Motor Skill">Fine Motor Skill</option>
                <option value="Academic Lessons Title">Academic Lessons Title</option>
              </select>
            </div>

            <div className="input-group">
              <textarea
                id="howtoplay"
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

            <button type="submit" className="submit-btn">
              Update
            </button>

            <div className="note">
              <span>
                Note: Please upload your video on google drive and make sure
                your video is on public mode
              </span>
            </div>
          </form>
        </div>
      </div>
    
    </>
  );
}

export default EditContact;