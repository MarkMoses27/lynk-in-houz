import './About.css';
import Team from '../homeskeleton/team/Team.jsx';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Lynk in Houz</h1>
        <p>Home / About</p>
      </div>
      <div className="about-content">
        <div className="about-description">
          <h2>About Us</h2>
          <p>
            Lynk in Houz is a spa that specializes in a variety of services including nail treatments, massages, pedicures, and nail art. Our professional team is dedicated to providing exceptional services to ensure you leave feeling pampered and rejuvenated.
          </p>
          <p>
            We take pride in our ability to offer personalized treatments tailored to your unique needs. Whether you're looking for a relaxing massage, a refreshing pedicure, or a creative nail art design, we have something for everyone.
          </p>
        </div>
        <div className="about-team">
          <h2>Meet Our Team</h2>
          <Team/>
        </div>
      </div>
    </div>
  );
}
