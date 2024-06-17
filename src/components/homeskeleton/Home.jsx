
import { useSpring, animated } from 'react-spring';
import HomeImage from "../../assets/home.svg";
import "./Home.css";

export default function Home() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const slideInFromLeft = useSpring({ transform: 'translateX(0)', from: { transform: 'translateX(-50%)' }, delay: 400 });
  const slideInFromRight = useSpring({ transform: 'translateX(0)', from: { transform: 'translateX(50%)' }, delay: 600 });

  return (
    <section className="home-section">
      <div className="home-container">
        <animated.div style={slideInFromLeft} className="home-content">
          <h3>Welcome to Lynk Beauty Spa</h3>
          <h1>Your Perfect Nail Solution</h1>
          <p>
            Enjoy a spa treatment in the comfort of your home or hotel in Nairobi or an adjacent town.
          </p>
          <button className="book-now-btn">
            <a href="https://api.whatsapp.com/send?phone=+254701636709" target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </button>
        </animated.div>
        <animated.div style={slideInFromRight} className="home-image">
          <img src={HomeImage} alt="home" />
        </animated.div>
      </div>
    </section>
  );
}
