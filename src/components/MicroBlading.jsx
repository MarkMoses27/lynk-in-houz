import './MicroBlading.css';

const MicroBlading = () => {
  const services = [
    {
      name: "Ombre",
      price: "15,000",
      description: "Subtle shading technique for a soft, natural look."
    },
    {
      name: "Combo",
      price: "20,000",
      description: "Combination of microblading and shading for fuller brows."
    },
    {
      name: "Microblading",
      price: "25,000",
      description: "Precise hair-like strokes for a natural, fuller appearance."
    }
  ];

  return (
    <div className="microblading">
      <div className="breadcrumb">
        <p>Home / Microblading</p>
      </div>
      <h2 className="microblading-title">Microblading Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-name">{service.name}</h3>
            <p className="service-price">Ksh {service.price}</p>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MicroBlading;
