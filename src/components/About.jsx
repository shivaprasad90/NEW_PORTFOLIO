import React from 'react';
import { Layers, Lightbulb, GraduationCap, Award, Cpu, CheckCircle } from 'lucide-react';

const highlights = [
  {
    icon: <Layers size={24} />,
    title: "Full Stack Development",
    desc: "Building frontend and backend applications using React, Python, Django, REST APIs, and databases."
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Problem Solving",
    desc: "Interested in debugging, clean code, data structures, and practical software solutions."
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Continuous Learning",
    desc: "Focused on improving technical skills and contributing to real-world development teams."
  }
];

const stats = [
  { icon: <GraduationCap size={24} />, value: "B.Com", label: "Computer Applications" },
  { icon: <Award size={24} />, value: "2", label: "Major Projects" },
  { icon: <Cpu size={24} />, value: "10+", label: "Technical Skills" },
  { icon: <CheckCircle size={24} />, value: "Open", label: "To Opportunities" }
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Overview</span>
          <h2 className="section-title">About <span>Me</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-bio-card glass-card reveal">
            <p className="about-bio-text">
              I am a motivated Python Full Stack Developer fresher with a strong interest in software development. I have hands-on knowledge of Python, Django, SQL, HTML, CSS, JavaScript, and React. I am looking for an opportunity to start my career, improve my technical skills, and contribute to real-world projects.
            </p>
          </div>

          <div className="about-highlights-grid">
            {highlights.map((item, idx) => (
              <div key={idx} className="highlight-card glass-card reveal">
                <div className="highlight-icon-box">{item.icon}</div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card glass-card reveal">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
