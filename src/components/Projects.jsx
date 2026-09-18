import React from 'react';
import { ExternalLink, Github, CheckCircle2, Sprout, GraduationCap, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'AgriSmart.AI',
    badge: 'AI Agricultural Platform',
    icon: <Sprout size={36} />,
    description: 'An AI-powered agriculture platform that helps farmers make smarter farming decisions through crop recommendations, real-time agricultural information, intelligent insights, and an AI assistant.',
    features: [
      'AI-based crop recommendations',
      'Farming insights',
      'Real-time agricultural information',
      'AI chatbot for farmers',
      'Scalable backend API',
      'User-friendly web experience'
    ],
    technologies: ['React', 'Python', 'Django', 'REST API', 'PostgreSQL', 'AI integration'],
    demoUrl: 'https://github.com/shivaprasad90',
    codeUrl: 'https://github.com/shivaprasad90/Hack4Bengal-VirtualHacks---AgriSmart.Ai'
  },
  {
    id: 2,
    name: 'Scholarship Management System',
    badge: 'Web Application & AI',
    icon: <GraduationCap size={36} />,
    description: 'A web-based scholarship management platform that simplifies scholarship applications, tracking, grievance management, and administrative review.',
    features: [
      'Student registration',
      'Scholarship applications',
      'Application status tracking',
      'Grievance submission & tracking',
      'Admin dashboard',
      'AI grievance categorization & summarization',
      'AI chatbot for scholarship questions'
    ],
    technologies: ['React.js', 'Django REST Framework', 'Python', 'PostgreSQL', 'AI integration'],
    demoUrl: 'https://github.com/shivaprasad90',
    codeUrl: 'https://github.com/shivaprasad90'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured <span>Projects</span></h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass-card reveal">
              <div className="project-details">
                <div className="project-badge">
                  <Sparkles size={14} />
                  <span>{project.badge}</span>
                </div>

                <h3 className="project-title">{project.name}</h3>
                <p className="project-desc">{project.description}</p>

                <h4 className="project-features-title">Key Features:</h4>
                <ul className="project-features-list">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="project-feature-item">
                      <CheckCircle2 size={16} className="project-feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <ExternalLink size={18} />
                    <span>View Project</span>
                  </a>

                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>

              {/* Project Visual Icon Container */}
              <div className="project-visual">
                <div className="project-visual-icon">
                  {project.icon}
                </div>
                <div className="project-visual-tag">{project.name}</div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>
                  Interactive Full Stack Application
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
