import BlogImage from '../../assets/nail-service.svg';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: "The Latest in Nail Art",
    description: "Explore the newest trends in nail art and find your next inspiration.",
    date: "June 1, 2024"
  },
  {
    id: 2,
    title: "Top 10 Nail Care Tips",
    description: "Learn how to keep your nails healthy and strong with these essential tips.",
    date: "May 20, 2024"
  },
  {
    id: 3,
    title: "How to Choose the Right Nail Salon",
    description: "Find out what to look for when choosing a nail salon to ensure you get the best service.",
    date: "April 15, 2024"
  },
  {
    id: 4,
    title: "DIY Nail Art at Home",
    description: "Get creative and try these simple DIY nail art designs from the comfort of your home.",
    date: "March 10, 2024"
  },
];

export default function Blog() {
  return (
    <section className="blog">
      <h3>Latest News</h3>
      <h1>Our Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div className="blog-post" key={post.id}>
            <img src={BlogImage} alt="blog" className="blog-image" />
            <div className="blog-content">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <span>{post.date}</span>
              <a href="#">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
