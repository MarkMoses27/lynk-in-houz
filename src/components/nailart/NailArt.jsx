import './NailArt.css';

const NailArt = () => {
  const nailArtInfo = {
    name: "Nail Art",
    price: 300,
    description: "Express your style with our creative nail art service. Our skilled technicians will transform your nails into miniature works of art.",
    duration: "30 mins",
    note: "This service needs to be coupled with another service such as acrylic overlay or gel manicure."
  };

  return (
    <div className="nail-art">
      <header className="nail-art-header">
        <div className="header-content">
          <h1>Nail Art Services</h1>
          <p>Home / Nail Art</p>
        </div>
      </header>

      <main className="nail-art-content">
        <h2>Nail Art Service</h2>
        <p className="intro">{nailArtInfo.description}</p>

        <div className="nail-art-card">
          <h3>{nailArtInfo.name}</h3>
          <p><strong>Price:</strong> Ksh {nailArtInfo.price.toLocaleString()}</p>
          <p><strong>Duration:</strong> {nailArtInfo.duration}</p>
          <p className="note">{nailArtInfo.note}</p>
        </div>
      </main>
    </div>
  );
};

export default NailArt;
