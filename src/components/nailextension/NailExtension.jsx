import './NailExtension.css';

const NailExtension = () => {
  const nailExtensionInfo = {
    name: "Nail Extension",
    price: 1500,
    description: "Enhance your natural nails with our professional nail extension service. Choose from acrylic, gel, or fiberglass extensions.",
    duration: "90 mins",
    options: ["Acrylic", "Gel", "Fiberglass"]
  };

  return (
    <div className="nail-extension">
      <header className="nail-extension-header">
        <div className="header-content">
          <h1>Nail Extension Services</h1>
          <p>Home / Nail Extension</p>
        </div>
      </header>

      <main className="nail-extension-content">
        <h2>Nail Extension Service</h2>
        <p className="intro">{nailExtensionInfo.description}</p>

        <div className="nail-extension-card">
          <h3>{nailExtensionInfo.name}</h3>
          <p><strong>Price:</strong> Ksh {nailExtensionInfo.price.toLocaleString()}</p>
          <p><strong>Duration:</strong> {nailExtensionInfo.duration}</p>
          <div className="options">
            <p><strong>Options:</strong></p>
            <ul>
              {nailExtensionInfo.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NailExtension;