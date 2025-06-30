import { Link } from 'react-router-dom';

function Home() {
  const posts = [
    { id: 1, title: 'Getting Started with React', summary: 'Learn how to build apps using React and Vite.' },
    { id: 2, title: 'JavaScript OOP for Beginners', summary: 'Explore the world of object-oriented programming in JS.' },
    { id: 3, title: 'CSS Tricks to Beautify Your Web', summary: 'Add modern UI magic with clean CSS tips.' }
  ];

  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to Ibrahim Khalili's Blog 🙌🍾🎆</h1>
        <p>Sharing tutorials, Stories, tips, and projects — one post at a time.</p>
      </div>

      <div className="card-grid">
        {posts.map(post => (
          <div className="card" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            <Link to={`/post/${post.id}`} style={{ color: '#3b82f6' }}>Read More →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
