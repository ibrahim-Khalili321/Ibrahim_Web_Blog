// src/pages/About.jsx
import profilePic from '../assets/ibrahim.jpg'; 
import '../components/About.css'
export default function About() {
  return (
<div className="about">
  <img src={profilePic} alt="Profile" className="profilePic" />
  <div>
      <h1 className="text-3xl font-bold mb-2">About Me</h1>
      <p className="text-center max-w-xl text-gray-700">
          Hello! I'm Ibrahim. A passionate writer and software enthusiast. I love writing about web development, tech trends, and more.<br>
          </br> In this Web Blog You can find my CV along some information about mine.
          Feel Free to check out my projects i post here.
      </p>
  </div>
</div>
  );
}

