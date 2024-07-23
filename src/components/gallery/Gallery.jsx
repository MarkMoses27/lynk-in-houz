import './Gallery.css';

// Import your images here
import image1 from '../../assets/gallery1.jpg';
import image2 from '../../assets/gallery2.jpg';
import image3 from '../../assets/gallery3.jpg';
import image4 from '../../assets/gallery4.jpg';
import image5 from '../../assets/gallery5.jpg';
import image6 from '../../assets/gallery6.jpg';
import image7 from '../../assets/gallery7.jpg';
import image9 from '../../assets/gallery9.jpg';
// ... import more images as needed

const Gallery = () => {
  const images = [
    { src: image1, alt: 'Nail art design 1' },
    { src: image2, alt: 'Nail art design 2' },
    { src: image3, alt: 'Nail art design 3' },
    { src: image4, alt: 'Nail art design 4' },
    { src: image5, alt: 'Nail art design 5' },
    { src: image6, alt: 'Nail art design 6' },
    { src: image7, alt: 'Nail art design 7' },
    { src: image9, alt: 'Nail art design 9' },
    // ... add more images as needed
  ];

  return (
    <div className="gallery">
      <h2 className="gallery-title">Our Work</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;