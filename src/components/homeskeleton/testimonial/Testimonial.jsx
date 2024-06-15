import { useState, useEffect } from 'react';
import './Testimonial.css';
import BEAUTICIAN from '../../../assets/beautician.png';
const testimonials = [
  {
    name: 'Jenifer Lopez',
    role: 'Customer',
    feedback: "Meticulous attention to detail. We use professional tools and techniques to ensure clean lines and a precise cut that creates a polished and well-groomed look. Whether it's a simple trim or a complete makeover, our stylists approach every haircut with meticulous attention to detail.",
    image: BEAUTICIAN
  },
  {
    name: 'Senjuti das',
    role: 'Customer',
    feedback: "Whether it's a simple trim or a complete makeover, our stylists approach every haircut with meticulous attention to detail. We use professional tools and techniques to ensure clean lines and a precise cut that creates a polished and well-groomed look.",
    image: BEAUTICIAN
  },
  {
    name: 'Customer 2',
    role: 'Customer',
    feedback: 'Feedback from customer 2.',
    image: BEAUTICIAN
  },
  {
    name: 'Customer 3',
    role: 'Customer',
    feedback: 'Feedback from customer 3.',
    image: BEAUTICIAN
  },
  {
    name: 'Customer 4',
    role: 'Customer',
    feedback: 'Feedback from customer 4.',
    image: BEAUTICIAN
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-container">
      <div className="testimonial-image">
        <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
        <blockquote>“</blockquote>
      </div>
      <div className="testimonial-content">
        <h2 className="testimonial-title">Testimonials</h2>
        <h3 className="testimonial-heading">Our Customer Feedback</h3>
        <p className="testimonial-feedback">{testimonials[currentIndex].feedback}</p>
        <p className="testimonial-author">{testimonials[currentIndex].name}</p>
        <p className="testimonial-role">{testimonials[currentIndex].role}</p>
        <div className="testimonial-thumbnails">
          {testimonials.map((testimonial, index) => (
            <img
              key={index}
              src={testimonial.image}
              alt={testimonial.name}
              className={`testimonial-thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
          <button className="testimonial-arrow" onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}>➜</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
