import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Code, ArrowDown, Download, Briefcase, Mail } from 'lucide-react';

const roles = [
  "Python Full Stack Developer",
  "Django & React Developer",
  "Problem Solver"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(90);
        
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(45);
        
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background Animated Gradient Particles */}
      <div className="bg-particles">
        <div className="particle-dot" style={{ top: '15%', left: '10%', width: '8px', height: '8px', animation: 'float 4s ease-in-out infinite' }}></div>
        <div className="particle-dot" style={{ top: '65%', left: '25%', width: '12px', height: '12px', animation: 'float 6s ease-in-out infinite 1s' }}></div>
        <div className="particle-dot" style={{ top: '30%', right: '15%', width: '6px', height: '6px', animation: 'float 5s ease-in-out infinite 0.5s' }}></div>
        <div className="particle-dot" style={{ top: '75%', right: '30%', width: '10px', height: '10px', animation: 'float 7s ease-in-out infinite 2s' }}></div>
      </div>

      <div className="bg-ambient-orb orb-1"></div>
      <div className="bg-ambient-orb orb-2"></div>

      <div className="container hero-grid">
        <div className="hero-content reveal active">
          <span className="hero-greeting">Hello, I’m</span>
          <h1 className="hero-name">Derangula Shiva Prasad</h1>
          
          <div className="hero-role-wrapper">
            <span className="hero-role">{displayText}</span>
            <span className="typing-cursor"></span>
          </div>

          <p className="hero-bio">
            Motivated Python Full Stack Developer fresher passionate about building practical, user-friendly, and scalable web applications.
          </p>

          <div className="hero-actions">
            <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
              <Briefcase size={18} />
              <span>View My Projects</span>
            </button>

            <a href="/resume.pdf" download="Derangula_Shiva_Prasad_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Download size={18} />
              <span>Download Resume</span>
            </a>

            <button onClick={() => scrollToSection('contact')} className="btn btn-outline">
              <Mail size={18} />
              <span>Contact Me</span>
            </button>
          </div>

          <div className="hero-socials">
            <a
              href="https://linkedin.com/in/shiva-prasad-derangula-03a876292"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://github.com/shivaprasad90"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              href="https://leetcode.com/u/shiva77"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LeetCode Profile"
              title="LeetCode"
            >
              <Code size={20} />
            </a>
          </div>
        </div>

        {/* Hero Portrait Frame Right */}
        <div className="hero-image-wrapper reveal active">
          <div className="hero-image-glow"></div>
          <div className="hero-portrait-frame">
            <img
              src="/profile.jpg"
              alt="Derangula Shiva Prasad - Python Full Stack Developer"
            />
          </div>
        </div>
      </div>

      <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="scroll-down-indicator" aria-label="Scroll Down">
        <span>Scroll Down</span>
        <ArrowDown size={18} className="scroll-arrow" />
      </a>
    </section>
  );
}
