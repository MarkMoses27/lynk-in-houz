import Slider from 'react-slick';
import Nail from '../../assets/nail-art.jpg';
import Nail1 from '../../assets/nail-service.svg'; 
import Nail2 from '../../assets/home-nail1.jpg';
import Nail3 from '../../assets/hero.png';
import './DiscoverExperiences.css'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const experiences = [
  {
    id: 1,
    title: "Pedicure & Manicure",
    description: "Do you have a hard time making a decision? We are happy to offer advice at the best nail salon!",
    image: Nail
  
  },
  {
    id: 2,
    title: "Nail Art",
    description: "Do you have a hard time making a decision? We are happy to offer advice at the best nail salon!",
    image: Nail1
  },
  {
    id: 3,
    title: "Nail Extension",
    description: "Do you have a hard time making a decision? We are happy to offer advice at the best nail salon!",
    image: Nail2
  },
  {
    id: 4,
    title: "Massage",
    description: "Do you have a hard time making a decision? We are happy to offer advice at the best nail salon!",
    image: Nail3
  },
];

export default function DiscoverExperiences() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="discover-experiences">
      <h3>What We Do</h3>
      <h1>Nail professionals for all your needs</h1>
      <Slider {...settings}>
        {experiences.map((exp) => (
          <div className="experience-item" key={exp.id}>
            <img src={exp.image} alt="experience" />
            <h2>{exp.title}</h2>
            <p>{exp.description}</p>
            <a href="/services">Discover →</a>
          </div>
        ))}
      </Slider>
    </section>    
  );
}
