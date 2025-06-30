import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll create this CSS file next

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">🌟 MyBlog</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/cv" className="hover:text-blue-500">CV</Link>
        <Link to="/post/1">Ibrahim's Story</Link>
      </div>
    </nav>
  );
}

export default Navbar;
