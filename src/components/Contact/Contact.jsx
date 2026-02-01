import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_KEY
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Something went wrong ❌");
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt='' /> </h3>
        <p>Feel free to reach out through the contact form.</p>

        <ul>
          <li><img src={mail_icon} alt='' /> rambiharipatel175@gmail.com</li>
          <li><img src={phone_icon} alt='' /> +91 963013XXXX</li>
          <li><img src={location_icon} alt='' /> Bhopal M.P</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>

          <label>Your name</label>
          <input type='text' name='name' required />

          <label>Email</label>
          <input type='email' name='email' required />

          <label>Phone</label>
          <input type='tel' name='phone' required />

          <label>Message</label>
          <textarea name='message' rows="6" required />

          <button type='submit' className='submit-btn'>
            Submit now <img src={white_arrow} alt='' />
          </button>

        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
