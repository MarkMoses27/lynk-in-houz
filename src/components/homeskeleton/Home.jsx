
import Home__Image from "../../assets/home.svg"
import "./Home.css"
export default function Home() {
  return (
    <div className="home-container">
        <div className="home__content">
        <h3>Welcome to Lynk Beauty Spa
</h3>
        <h1>Your Perfect Nail Solution</h1>
        <p>Enjoy A Spa Treatment In The Comfort Of Your Home Or Hotel In Nairobi Or An Adjacent Town.
</p>
  <button className="book-now-btn">
    <a href="https://api.whatsapp.com/send?phone=+254701636709" target="_blank">Book Now</a>
  </button>
</div>
  <div className="home__image">
    <img src={Home__Image} alt="home" />
  </div>
    </div>
  )
}
