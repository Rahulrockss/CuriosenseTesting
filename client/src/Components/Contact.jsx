import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
 // Provide the path to your React image
import '@coreui/coreui/dist/css/coreui.min.css';
import './Contact.css'
import Product1 from '../Images/Products/Product1.jpeg';
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
        <CCard key={contact.id} style={{ width: '18rem', marginBottom: '20px' }}>
          <CCardImage orientation="top" src={Product1} />
          <CCardBody>
            <CCardTitle>{contact.gametitle}</CCardTitle>
            <CCardText>
              Game Category: {contact.category}
              <br/>
              How To Play: {contact.howtoplay}
              <br/>
              <a href={contact.url}>Watch Video</a>
            </CCardText>
            <Link to={`/edit-contact/${contact._id}`}>
            <CButton color="primary" href="#"> 
              Edit Game
            </CButton>
            </Link>
          </CCardBody>
        </CCard>
      ))}
    </div>
    </>
  );
};

export default Contact;
