import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import CEO from '../../assets/ceo.png';
import Monica from '../../assets/monica.png';




export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Lynk in Houz</h1>
        <p>Home / About</p>
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>Lynk in Houz is a spa that specializes in nail treatments, massages, pedicures, and nail art.</p>
        <p>We offer a wide range of nail treatments, massages, pedicures, and nail art. We also offer a wide range of nail treatments, massages, pedicures, and nail art. We also offer a wide range of nail treatments, massages, pedicures, and nail art. We also offer a wide range of nail treatments, massages, pedicures, and nail art.</p>
      </div>
      <div className="our-team">
        <h2>Our Professional</h2>
        <p>Ut tincidunt sapien ipsum, sed efficitur erat eleifend ut. In venenatis mauris vel est vehicula, nec aliquet dui pellentesque. Proin porta arcu eget nunc laoreet, vel vehicula tellus iaculis. Donec convallis dui a justo mollis sodales. In viverra, neque tempus porttitor ornare, justo sapien pretium lorem, vitae imperdiet velit elit vel quam. Vestibulum et enim.</p>
        <button className="view-team-button">View All Team</button>
        <div className="team-members">
          <div className="team-member">
            <img src={CEO} alt="Kimberly Ride" />
            <h3>Ken Ngugi</h3>
            <p>CEO Lynk in Houz</p>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
          <div className="team-member">
            <img src={Monica} alt="Monica James" />
            <h3>Monica James</h3>
            <p>Massage Specialist</p>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
