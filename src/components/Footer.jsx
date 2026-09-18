import React from 'react';
import { Linkedin, Github, Code, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-copy">
          © 2025 Derangula Shiva Prasad. Built with passion and code.
        </div>

        <div className="hero-socials" style={{ margin: 0 }}>
          <a
            href="https://linkedin.com/in/shiva-prasad-derangula-03a876292"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/shivaprasad90"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://leetcode.com/u/shiva77"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LeetCode"
          >
            <Code size={18} />
          </a>
        </div>

        <button onClick={scrollToTop} className="back-to-top" aria-label="Back to Top">
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
