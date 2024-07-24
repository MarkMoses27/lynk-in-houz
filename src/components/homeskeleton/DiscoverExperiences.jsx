import Slider from 'react-slick';
import { Helmet } from 'react-helmet';
import './DiscoverExperiences.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Nail from '../../assets/nail-art.jpg';
import Nail1 from '../../assets/nail-service.svg';
import Nail2 from '../../assets/gallery1.jpg';
import Nail3 from '../../assets/hero.png';
import Microblading from '../../assets/gallery8.jpg'; // Importing the Microblading image

const experiences = [
  {
    id: 1,
    title: "Pedicure & Manicure",
    description: "Experience top-notch pedicure and manicure services tailored to your needs.",
    image: Nail,
    link: "/pedicure-manicure"
  },
  {
    id: 2,
    title: "Nail Art",
    description: "Get creative and express yourself with stunning nail art designs.",
    image: Nail1,
    link: "/nail-art"
  },
  {
    id: 3,
    title: "Nail Extension",
    description: "Enhance the length and beauty of your nails with professional extensions.",
    image: Nail2,
    link: "/nail-extension"
  },
  {
    id: 4,
    title: "Massage",
    description: "Relax and unwind with a soothing massage from our skilled therapists.",
    image: Nail3,
    link: "/massage"
  },
  {
    id: 5,
    title: "Microblading",
    description: "Achieve perfect, natural-looking brows with our expert microblading services.",
    image: Microblading, // Using the imported image
    link: "/microblading"
  }
];

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

export default function DiscoverExperiences() {
  return (
    <>
      <Helmet>
        <title>Discover Our Nail Services | Beauty Lynk Spa</title>
        <meta name="description" content="Explore our range of nail services including pedicure, manicure, nail art, nail extension, and more. Book your appointment today with Beauty Lynk Spa." />
        <meta name="keywords" content="pedicure, manicure, nail art, nail extension, massage, microblading, spa services" />
      </Helmet>
      <section className="discover-experiences">
        <h3>What We Do</h3>
        <h1>Nail Professionals for All Your Needs</h1>
        <Slider {...settings}>
          {experiences.map(exp => (
            <div className="experience-item" key={exp.id}>
              <img src={exp.image} alt={exp.title} />
              <div className="experience-content">
                <h2>{exp.title}</h2>
                <p>{exp.description}</p>
                <a href={exp.link}>Discover →</a>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
}
