import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import HomeImage from "../../assets/mark1.png";
import BookingForm from '../booking/BookingForm';
import "./Home.css";

export default function Home() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const slideInFromLeft = useSpring({ transform: 'translateX(0)', from: { transform: 'translateX(-50%)' }, delay: 400 });
  const slideInFromRight = useSpring({ transform: 'translateX(0)', from: { transform: 'translateX(50%)' }, delay: 600 });

  const toggleBookingForm = () => {
    setShowBookingForm(!showBookingForm);
  };

  return (
    <section className="home-section">
      <div className="home-container">
        <animated.div style={slideInFromLeft} className="home-content">
          <h3>Welcome to Beauty Lynk Spa</h3>
          <h1>Your Perfect Nail Solution</h1>
          <p>
            Enjoy a spa treatment in the comfort of your home or hotel in Nairobi or an adjacent town.
          </p>
          <button className="book-now-btn" onClick={toggleBookingForm}>
            Book Now
          </button>
        </animated.div>
        <animated.div style={slideInFromRight} className="home-image">
          <img src={HomeImage} alt="home" />
        </animated.div>
      </div>
      {showBookingForm && (
        <animated.div style={fadeIn} className="booking-form-overlay">
          <div className="booking-form-container">
            <button className="close-form" onClick={toggleBookingForm}>×</button>
            <BookingForm />
          </div>
        </animated.div>
      )}
    </section>
  );
}