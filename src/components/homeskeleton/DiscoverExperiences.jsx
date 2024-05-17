import Nail from '../../assets/Nail.png'; // Import image for nail
import './DiscoverExperiences.css'; // Import CSS for styling

export default function DiscoverExperiences() {
  return (
    <div className="discover-experiences">
      <h3>What We Do</h3>
      <h1>Nail professionals for all your needs</h1>

      <div className="experience">
        <div className='item1'>
          <img src={Nail} alt="nail" />
          <h2>Pedicure & Manicure</h2>
          <p>Do you have a hard time making a decision? We are happy to offer advice at the best nail salon!</p>
          <a href="#">Discover → </a>
        </div>
      </div>

      <div className="experience">
        <div className='item2'>
          <img src={Nail} alt="nail" />
          <h2>Nail Art</h2>
          <p>Do you have a hard time making a decision? We are happy to offer advice at the best nail salon!</p>
          <a href="#">Discover →</a>
        </div>
      </div>
      
      <div className="experience">
        <div className='item3'>
        <img src={Nail} alt="nail" />
        <h2>Nail Extension</h2>
        <p>Do you have a hard time making a decision? We are happy to offer advice at the best nail salon!</p>
        <a href="#">Discover → </a>
        </div>
      </div>
    </div>
  )
}
