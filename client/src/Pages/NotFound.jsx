import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import error from '../Images/Astronut.png'
const NotFound = () => {
  return (
    <>
    <div className="not-found-container">
      <div className="error-section">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! Page not found</p>
        <p className="error-description">
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link to="/" className="home-link">
          Go Back Home
        </Link>
      </div>
      {/* <div className="animation-section">
        <div className="planet"></div>
      </div> */}
    </div>
    </>
  );
};

export default NotFound;
