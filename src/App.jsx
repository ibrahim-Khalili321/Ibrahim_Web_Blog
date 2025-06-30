import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import BlogPost from './pages/BlogPost';
import Footer from './components/Footer';
import Cv from './pages/Cv'



function App() {
  return (
    <>
      
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/cv" element={<Cv />} />
      </Routes>
      </Router>
      <Footer />
      </>
  );
}

export default App;
