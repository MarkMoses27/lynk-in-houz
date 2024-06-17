import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomeSkeleton from './components/homeskeleton/HomeSkeleton';
import About from './components/about/About';
import Services from './components/services/Services';
import Pages from './components/pages/Pages';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes className="content">
       <Route path="/" element={<HomeSkeleton />} />
       <Route path="/about" element={<About />} />
       <Route path="/services" element={<Services />} />
       <Route path="/pages" element={<Pages />} />
       <Route path='/blog' element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

