import './About.css';
import Team from '../homeskeleton/team/Team.jsx';



export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Lynk in Houz</h1>
        <p>Home / About</p>
      </div>
      <div className="mt-10">
        <h2>About Us</h2>
        <p>Lynk in Houz is a spa that specializes in nail treatments, massages, pedicures, and nail art.</p>
        <p>We offer a wide range of nail treatments, massages, pedicures, and nail art. We also offer a wide range of nail treatments, massages, pedicures, and nail art. We also offer a wide range of nail treatments, massages, pedicures, and nail art. We also offer a wide range of nail treatments, massages, pedicures, and nail art.</p>
      </div>
      <div className="about-team">
        <Team/>
      </div>
      
    </div>
  );
}
