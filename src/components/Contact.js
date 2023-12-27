import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/styles.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    message: ""
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === "phone") {
      if (!/^\d+$/.test(value)) {
        setPhoneError("Phone number must contain only numbers.");
      } else if (value.length !== 11) {
        setPhoneError("Phone number must be exactly 11 digits.");
      } else {
        setPhoneError("");
      }
    }
    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailPattern.test(value) ? "" : "Invalid email address.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneError || emailError) {
      return;
    }
    console.log("Form data submitted:", formData);
    setShowSuccessMessage(true);
  };

  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container">
          <h1 className="logo lg-heading text-light">WT</h1>
          <ul className="nav-items">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <section className="contact-form">
        <div className="container">
          <div className="form-wrapper">
            <div className="company-address">
              <div className="address-group">
                <i className="fas fa-map-marker-alt fa-3x text-red"></i>
                <h2 className="text-gray md-heading">Location</h2>
                <p>#2661 Janakpuri Colony, city name, town name</p>
              </div>
              <div className="address-group">
                <i className="far fa-envelope fa-3x text-red"></i>
                <h2 className="text-gray md-heading">Email</h2>
                <p>harshitvashisth@mycompany.com</p>
              </div>
              <div className="address-group">
                <i className=" fas fa-phone-square-alt fa-3x text-red"></i>
                <h2 className="text-gray md-heading">Call</h2>
                <p>+910101010101</p>
              </div>
              <img
                src={require("../img/company-img.jpg")}
                alt=""
              />
            </div>
            <form onSubmit={handleSubmit} className="form">
              <h1 className="lg-heading text-black">Contact Us</h1>
              <p className="text-gray">
                Let us know your questions, suggestions, and concerns by filling
                out the contact form below.
              </p>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {emailError && <p className="error-message">{emailError}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                {phoneError && <p className="error-message">{phoneError}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="form-btn">
                Submit
              </button>
            </form>

            {showSuccessMessage && (
              <div className="success-message">
                <p>Form submitted successfully!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="social-media-links">
          <i className="fab fa-facebook fa-4x"></i>
          <i className="fab fa-twitter fa-4x"></i>
          <i className="fab fa-instagram fa-4x"></i>
        </div>
        <p>World Travel &copy; 2020, All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Contact;