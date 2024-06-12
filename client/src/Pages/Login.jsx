// Login.jsx
import React, { useContext, useState } from 'react';
import "./Register.css"; // Ensure correct path to CSS file
import Validation from "../Components/Validations.jsx";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { UserContext } from '../App';
import NavBar from '../Components/NavBar.jsx';
import Spinner from '../Components/Spinner.jsx';
import Footer from '../Components/Footer.jsx';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const { user, setUser } = useContext(UserContext);
  const [errors, setErrors] = useState({});
  const [serverErrors, setServerErrors] = useState([]);
  const navigate = useNavigate();
  const [loggedInState, setLoggedInState] = useState(false); // Changed to boolean

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedInState(true); // Set to true to show spinner
    axios.post("https://curiosensetestingsserver.onrender.com/curiosense/login", values)
      .then(res => {
        if (res.data.success) {
          toast.success("Login Successfully", {
            position: "top-center",
            autoClose: 3000
          });
          localStorage.setItem("token", res.data.token);
          setUser(res.data.user);
          navigate('/dashboard');
        }
      }).catch(err => {
        setLoggedInState(false); // Hide spinner on error
        if (err.response.data.errors) {
          setServerErrors(err.response.data.errors);
        } else {
          console.log(err);
        }
      });
  };

  return (
    <>
      <NavBar />
    
      {loggedInState && <Spinner />} {/* Show spinner only when logging in */}
      <div className="login-container">
        <div className="login-box">
          <form className='form' onSubmit={handleSubmit}>
            <h2>Login Form</h2>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleInput}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="input-group">
              <input
                type="password" /* Corrected type for password */
                name="password"
                placeholder="Password"
                required
                onChange={handleInput}
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            {serverErrors.length > 0 && (
              serverErrors.map((error, index) => (
                <p className='error' key={index}>{error.msg}</p>
              ))
            )}
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          <p className="login-footer">Not Registered? <Link to='/register' className="signupLink">Register</Link></p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
