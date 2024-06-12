import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("https://curiosensetestingsserver.onrender.com/curiosense/contacts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      if (res.data.success) {
        setContacts(res.data.contacts);
      }
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  const handleEdit = (id) => {
    // Handle edit action
  };

  const handleDelete = (id) => {
    // Handle delete action
  };

  return (
    <>
      <div className="title">My Games</div>
      <div className="contact-list">
        {contacts.map(contact => (
          <CCard key={contact._id} className="contact-card">
            <CCardImage orientation="top" src={contact.image} alt={contact.gametitle} className="contact-image" />
            <CCardBody>
              <CCardTitle className="contact-title">{contact.gametitle}</CCardTitle>
              <CCardText className="contact-text">
                <span className="contact-category">Game Category:</span> {contact.category}
                <br/>
                <span className="contact-howtoplay">How To Play:</span> {contact.howtoplay}
                <br/>
                <a href={contact.url} className="contact-url">Watch Video</a>
              </CCardText>
              <div className="contact-buttons">
                <Link to={`/edit-contact/${contact._id}`}>
                  <CButton color="primary" className="contact-button">Edit</CButton>
                </Link>
                <CButton color="danger" className="contact-button" onClick={() => handleDelete(contact._id)}>Delete</CButton>
              </div>
            </CCardBody>
          </CCard>
        ))}
      </div>
    </>
  );
};

export default Contact;
