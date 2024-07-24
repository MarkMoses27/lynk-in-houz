import { useState } from 'react';
import './Massage.css';

const Massage = () => {
  const [selectedMassage, setSelectedMassage] = useState(null);

  const massageTypes = [
    {
      name: "Swedish Massage",
      duration: "60 mins",
      price: 4000,
      description: "A gentle full body massage technique that relaxes muscle tension and promotes overall wellness."
    },
    {
      name: "Reflexology Massage",
      duration: "40 mins",
      price: 2500,
      description: "Focused pressure on specific points of the feet to promote healing throughout the body."
    },
    {
      name: "Prenatal & Post Natal Massage",
      duration: "60 mins",
      price: 4000,
      description: "Specialized massage techniques to relieve discomfort and promote relaxation for expecting and new mothers."
    },
    {
      name: "Deep Tissue Massage",
      duration: "60 mins",
      price: 4000,
      description: "Intense massage that targets the deep layers of muscle to release chronic tension and pain."
    },
    {
      name: "Foot/Head and Back Massage",
      duration: "60 mins",
      price: 4000,
      description: "A combination massage focusing on key stress areas to promote full-body relaxation."
    },
    {
      name: "Express Massage",
      duration: "30 mins",
      price: 2000,
      description: "A quick, targeted massage perfect for those short on time but in need of relaxation."
    },
  ];

  return (
    <div className="massage">
      <div className="massage-header">
        <div className="header-content">
          <h1>Massage Services</h1>
          <p>Home / Massage</p>
        </div>
      </div>
      <div className="massage-content">
        <h2>Our Massage Services</h2>
        <p className="intro">Experience ultimate relaxation with our range of professional massage services. Each massage is tailored to your needs, promoting wellness and rejuvenation.</p>
        <div className="massage-types">
          {massageTypes.map((massage, index) => (
            <div 
              key={index} 
              className={`massage-card ${selectedMassage === massage ? 'selected' : ''}`}
              onClick={() => setSelectedMassage(massage)}
            >
              <h3>{massage.name}</h3>
              <p className="duration">Duration: {massage.duration}</p>
              <p className="price">Price: Ksh {massage.price.toLocaleString()}</p>
              <p className="description">{massage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Massage;
