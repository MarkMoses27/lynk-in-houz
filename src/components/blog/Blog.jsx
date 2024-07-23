import BlogImage1 from '../../assets/nail-service.svg';
import BlogImage2 from '../../assets/nail-art.jpg';
import BlogImage3 from '../../assets/gallery4.jpg';
import BlogImage4 from '../../assets/gallery5.jpg';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: "The Latest in Nail Art",
    description: "Explore the newest trends in nail art and find your next inspiration.",
    date: "June 1, 2024",
    image: BlogImage1,
    category: "Trends"
  },
  {
    id: 2,
    title: "Top 10 Nail Care Tips",
    description: "Learn how to keep your nails healthy and strong with these essential tips.",
    date: "May 20, 2024",
    image: BlogImage2,
    category: "Care"
  },
  {
    id: 3,
    title: "How to Choose the Right Nail Salon",
    description: "Find out what to look for when choosing a nail salon to ensure you get the best service.",
    date: "April 15, 2024",
    image: BlogImage3,
    category: "Advice"
  },
  {
    id: 4,
    title: "DIY Nail Art at Home",
    description: "Get creative and try these simple DIY nail art designs from the comfort of your home.",
    date: "March 10, 2024",
    image: BlogImage4,
    category: "DIY"
  },
];

export default function Blog() {
  return (
    <section className="blog">
      <nav className="breadcrumb">
        <a href="#home">Home</a> &gt; <span>Blog</span>
      </nav>
      <h3 className="blog-subtitle">Latest News</h3>
      <h1 className="blog-title">Our Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div className="blog-post" key={post.id}>
            <div className="blog-image-container">
              <img src={post.image} alt={post.title} className="blog-image" />
              <span className="blog-category">{post.category}</span>
            </div>
            <div className="blog-content">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-description">{post.description}</p>
              <div className="blog-footer">
                <span className="blog-date">{post.date}</span>
                <a href="#blog-detail" className="read-more">Read More <span>&rarr;</span></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}