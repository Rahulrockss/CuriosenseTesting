import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./Contact.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("https://curiosensetestingsserver.onrender.com/curiosense/contacts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          setContacts(res.data.contacts);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEdit = (id) => {
    // Handle edit action
  };

  const handleDelete = (id) => {
    // Handle delete action
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://curiosensetestingsserver.onrender.com/curiosense/contact/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            setContacts(res.data.contacts);
            MySwal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            MySwal.fire({
              title: "Error!",
              text: "Error Occured!",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <>
      <div className="title">My Games</div>
      <div className="contact-list">
        {contacts.map((contact) => (
          <CCard key={contact._id} className="contact-card">
            <CCardImage
              orientation="top"
              src={contact.image}
              alt={contact.gametitle}
              className="contact-image"
            />
            <CCardBody>
              <CCardTitle className="contact-title">
                {contact.gametitle}
              </CCardTitle>
              <CCardText className="contact-text">
                <span className="contact-category">Game Category:</span>{" "}
                {contact.category}
                <br />
                <span className="contact-howtoplay">How To Play:</span>{" "}
                {contact.howtoplay}
                <br />
                <a href={contact.url} className="contact-url">
                  Watch Video
                </a>
              </CCardText>
              <div className="contact-buttons">
                <Link to={`/dashboard/edit-contact/${contact._id}`}>
                  <CButton color="primary" className="contact-button">
                    Edit
                  </CButton>
                </Link>
                <CButton
                  color="danger"
                  className="contact-button"
                  onClick={() => handleDelete(contact._id)}
                >
                  Delete
                </CButton>
              </div>
            </CCardBody>
          </CCard>
        ))}
      </div>
    </>
  );
};

export default Contact;
