import { useState, useEffect } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: 'Liz',
    role: 'Customer',
    feedback: "Meticulous attention to detail. We use professional tools and techniques to ensure clean lines and a precise cut that creates a polished and well-groomed look. Whether it's a simple trim or a complete makeover, our stylists approach every haircut with meticulous attention to detail."
  },
  {
    name: 'Martha Wanjiku',
    feedback: "Whether it's a simple trim or a complete makeover, our stylists approach every haircut with meticulous attention to detail. We use professional tools and techniques to ensure clean lines and a precise cut that creates a polished and well-groomed look."
  },
  {
    name: 'Alice Wafula',
    role: 'Customer',
    feedback: "I've never felt more confident and beautiful. The team here truly understands how to bring out the best in their clients. I'll definitely be coming back!"
  },
  {
    name: 'Michelle Ouma',
    role: 'Customer',
    feedback: 'The level of skill and creativity here is unmatched. They listened to what I wanted and delivered beyond my expectations. Highly recommended!'
  },
  {
    name: 'Sophia Okonkwo',
    role: 'Customer',
    feedback: 'From the moment I walked in, I felt welcomed and cared for. The results speak for themselves - I love my new look!'
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('left');

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('left');
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">What Our Customers Say</h2>
      <div className={`testimonial-card ${direction}`}>
        <p className="testimonial-feedback">{testimonials[currentIndex].feedback}</p>
        <div className="testimonial-author-info">
          <p className="testimonial-author">{testimonials[currentIndex].name}</p>
          <p className="testimonial-role">{testimonials[currentIndex].role}</p>
        </div>
      </div>
      <div className="testimonial-navigation">
        <button className="testimonial-arrow" onClick={prevTestimonial}>←</button>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setDirection(index > currentIndex ? 'left' : 'right');
              setCurrentIndex(index);
            }}
          />
        ))}
        <button className="testimonial-arrow" onClick={nextTestimonial}>→</button>
      </div>
    </div>
  );
};

export default Testimonial;