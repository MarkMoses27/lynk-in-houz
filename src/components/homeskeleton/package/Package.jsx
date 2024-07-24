import { Link } from 'react-router-dom';
import './Package.css';

const packages = [
  {
    title: 'Kids Spa Day Package',
    price: 'Ksh 4000',
    duration: '1hr 30mins',
    services: 'Swedish massage + Regular polish mani-pedi',
    description: 'Perfect for a birthday party (girls ~ 7 -12 years)',
    discount: 'Ksh 1000'
  },
  {
    title: 'Feel Nice Package',
    price: 'Ksh 5000',
    duration: '1hr 15mins',
    services: 'Eyebrow thread + Shoulder massage + Express facial',
    description: 'Perfect for a feel-good effect',
    discount: 'Ksh 800'
  },
  {
    title: 'Feel Fantastic Package',
    price: 'Ksh 9000',
    duration: '1hr 45mins',
    services: 'Shoulder massage + Deep Cleanse Facial',
    description: 'Perfect for a home-spa day',
    discount: 'Ksh 1000'
  },
  {
    title: 'Feel Amazing Package',
    price: 'Ksh 7800',
    duration: '2hrs',
    services: 'Swedish massage + Eyebrow shaping + Deep Cleanse Facial',
    description: 'Perfect for a sparkly & refreshed feeling',
    discount: 'Ksh 1000'
  },
  {
    title: 'Feel Awesome Package',
    price: 'Ksh 6800',
    duration: '1hr 45mins',
    services: 'Swedish massage + Standard body scrub + Under-arms',
    description: 'Perfect for a bride-to-be',
    discount: 'Ksh 1000'
  },
  {
    title: 'Feel Fabulous Package',
    price: 'Ksh 5500',
    duration: '2hrs 15mins',
    services: 'Express facial + Gel polish manicure-pedicure',
    description: 'Perfect for mum-to-be, your mum, mum-in-law, bachelorette/girls party',
    discount: 'Ksh 1000'
  },
  {
    title: 'Feel Tonic Package',
    price: 'Ksh 9000',
    duration: '1hr 30mins',
    services: 'Express facial + Swedish massage + Standard body scrub',
    description: 'Perfect treatment to stay in top shape both mentally & physically',
    discount: 'Ksh 1500'
  }
];

const Package = () => {
  return (
    <div className="package-container">
      <h1 className="main-title">Our Packages</h1>
      <div className="package-grid">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <h2 className="package-title">{pkg.title}</h2>
            <p className="package-price-duration">
              <span className="price">{pkg.price}</span>
              <span className="duration">{pkg.duration}</span>
            </p>
            <p className="package-services">{pkg.services}</p>
            <p className="package-description">{pkg.description}</p>
            <p className="package-discount">Save {pkg.discount}</p>
            <Link to="/contact" className="book-now-button">
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Package;
