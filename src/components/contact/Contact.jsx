import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-header'>
        <h1>Contact Us</h1>
        <p>Home / Contact Us</p>
      </div>

      <div className='contact-content'>
        <div className='contact-form'>
          <h2>Send Your Message</h2>
          <form>
            <div className='form-group'>
              <input type='text' placeholder='Your Name' required />
            </div>
            <div className='form-group'>
              <input type='email' placeholder='Your Email' required />
            </div>
            <div className='form-group'>
              <input type='text' placeholder='Subject' required />
            </div>
            <div className='form-group'>
              <textarea placeholder='Your Message' rows='5' required></textarea>
            </div>
            <button type='submit'>Send Message</button>
          </form>
        </div>

        <div className='contact-info'>
          <h2>Get In Touch</h2>
          <p><FontAwesomeIcon icon={faPhone} className='contact-icon' /> +123-234-1234</p>
          <p><FontAwesomeIcon icon={faEnvelope} className='contact-icon' /> hello@awesomesite.com</p>
          <p><FontAwesomeIcon icon={faLocationDot} className='contact-icon' /> 99 Roving St., Big City, PKU 2546</p>
          <p><FontAwesomeIcon icon={faClock} className='contact-icon' /> Mon - Fri: 09:00 - 17:00, Sat - Sun: 09:00 - 12:00</p>
          
          <h2>Follow Us On</h2>
          <div className='social-icons'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className='social-icon' /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className='social-icon' /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className='social-icon' /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className='social-icon' /></a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPinterest} className='social-icon' /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} className='social-icon' /></a>
          </div>
        </div>
      </div>

      <div className='map'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8034959739156!2d36.82194631475797!3d-1.2920658990619976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1123456789ab%3A0x1234567890abcdef!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1621234567890!5m2!1sen!2s" 
          width="600" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
}
