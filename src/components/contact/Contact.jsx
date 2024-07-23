import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import './Contact.css';

const ContactInfo = ({ icon, text }) => (
  <div className="contact-info-item">
    <FontAwesomeIcon icon={icon} className="contact-icon" />
    <p>{text}</p>
  </div>
);

const ServiceCheckbox = ({ service, isChecked, onToggle }) => (
  <label className="service-checkbox">
    <input
      type="checkbox"
      value={service}
      checked={isChecked}
      onChange={onToggle}
    />
    <span className="checkmark"></span>
    {service}
  </label>
);

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [error, setError] = useState('');

  const services = [
    'Manicure', 
    'Pedicure', 
    'Massage', 
    'Nail Art', 
    'Nail Extensions',
    'Microblading'
  ];

  const toggleService = (service) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(service)
        ? prevSelected.filter((s) => s !== service)
        : [...prevSelected, service]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      setError('Please select at least one service.');
    } else {
      setError('');
      console.log('Form submitted');
    }
  };

  return (
    <div className='contact-container'>
      <div className='contact-header'>
        <p>Home &gt; Contact Us</p>
        <h1>Contact Us</h1>
      </div>

      <div className='contact-content'>
        <div className='contact-form'>
          <h2>Send Your Message</h2>
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Your Name' required />
            <input type='email' placeholder='Your Email' required />
            <input type='text' placeholder='Subject' required />
            <textarea placeholder='Your Message' rows='5' required></textarea>
            <div className='services-section'>
              <h3>Select Services</h3>
              <div className='services-options'>
                {services.map((service) => (
                  <ServiceCheckbox
                    key={service}
                    service={service}
                    isChecked={selectedServices.includes(service)}
                    onToggle={() => toggleService(service)}
                  />
                ))}
              </div>
              {error && <p className='error-message'>{error}</p>}
            </div>
            <button type='submit'>Send Message</button>
          </form>
        </div>

        <div className='contact-info'>
          <h2>Get In Touch</h2>
          <ContactInfo icon={faPhone} text="+254 701 636 709" />
          <ContactInfo icon={faEnvelope} text="kendido95@gmail.com" />
          <ContactInfo icon={faLocationDot} text="00100, Kimathi street, Nairobi" />
          <ContactInfo icon={faClock} text="Mon - Sat: 09:00 - 18:00, Sun: Closed" />
        </div>
      </div>

      <div className='map'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8034959739156!2d36.82194631475797!3d-1.2920658990619976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1123456789ab%3A0x1234567890abcdef!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1621234567890!5m2!1sen!2s" 
          width="100%" 
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