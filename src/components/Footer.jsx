// src/components/Footer.jsx
import './Footer.css'
export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Ibrahim's Blog. All rights reserved.</p>
      <p>My Email: ibrahimkhalili321@Gmail.com</p>
      <p>My Phone: 0791800581</p>
    </footer>
  );
}
