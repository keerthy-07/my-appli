import React from "react";
import "./form.css";
// import lets from "./lets.png";
import axios from "axios";
import { useState } from "react";


const Form = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });


const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  console.log(formData);

  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/contact/send/",
      formData
    );

    console(res.data);
  } catch (err) {
    console.log(err.response);
    console.log(err.response?.data);
    alert("Failed to send");
  }
};



  return (
    <section className="contact-section">
      <div className="heading">
        {/* <img src={lets} alt="png" /> */}

        <h2>Let's Connect!</h2>
        <p>
          I'm always open to discussing new oportunities or intresting projects!
        </p>
      </div>

      <div className="contact-container">
        <form className="form-box" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-group">
              <label>First Name</label>
              <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="eg. Jack" />
            </div>

            <div className="input-group">
              <label>Last Name</label>
              <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="eg. Sparrow" />
            </div>
          </div>

          <div className="input-group full-width">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="eg. jack123@mail.com" />
          </div>

          <div className="input-group full-width">
            <label>Your Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="5"></textarea>
          </div>

          <button type="submit" className="send-btn">SEND MESSAGE</button>
           </form>
        </div>
       

        <div className="info-box">
          <h2>Contact Information</h2>

          <p>
            Fill up the form and our team will get back to you within 24 hours.
          </p>

          <div className="info-item">
            <p>➣ +91 93XXXXXXXX</p>
          </div>

          <div className="info-item">
            <p>➣ mrjacksparrow003@mail.com</p>
          </div>

          <div className="info-item">
            <p>➣ @KeerthyOfficial</p>
          </div>
        
      </div>
    </section>
  );
};

export default Form;
