import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>If you have any questions or need further information about our programs, admissions, or campus life, please don’t hesitate to reach out. Our team is here to assist you with any inquiries and provide you with the information you need. Fill out the form below, and we will get back to you promptly. We look forward to hearing from you!</p>
            <ul>
                <li> <img src={mail_icon} alt="" />contact@university.edu</li>
                <li><img src={phone_icon} alt="" /> +1 (555) 123-4567</li>
                <li><img src={location_icon} alt="" />123 Academic Lane, Knowledge City, CA 98765, USA</li>
            </ul>


        </div>
        <div className="contact-col">
            <form >
                <label> Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label> Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile Number' required />
                <label >Write your message here</label>
                <textarea name="message"  rows='6' placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span></span>
        </div>
    </div>
  )
}

export default Contact