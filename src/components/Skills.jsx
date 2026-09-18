import React, { useEffect, useRef, useState } from 'react';
import { Code2, Server, Layout, Database, BookOpen, Wrench, GitBranch } from 'lucide-react';

const skillBars = [
  { name: 'Python', percentage: 85 },
  { name: 'HTML / CSS', percentage: 85 },
  { name: 'Django / REST Framework', percentage: 78 },
  { name: 'JavaScript', percentage: 75 },
  { name: 'SQL / PostgreSQL', percentage: 75 },
  { name: 'React.js', percentage: 72 },
];

const categories = [
  {
    title: 'Programming',
    icon: <Code2 className="skill-category-icon" size={22} />,
    skills: ['Python', 'JavaScript', 'React']
  },
  {
    title: 'Frameworks',
    icon: <Server className="skill-category-icon" size={22} />,
    skills: ['Django', 'Django REST Framework']
  },
  {
    title: 'Frontend',
    icon: <Layout className="skill-category-icon" size={22} />,
    skills: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    title: 'Database',
    icon: <Database className="skill-category-icon" size={22} />,
    skills: ['SQL', 'PostgreSQL']
  },
  {
    title: 'Core Concepts',
    icon: <BookOpen className="skill-category-icon" size={22} />,
    skills: ['Object-Oriented Programming', 'Data Structures', 'Software Design Principles', 'Error Handling', 'Debugging', 'Clean Code']
  },
  {
    title: 'Tools & Version Control',
    icon: <Wrench className="skill-category-icon" size={22} />,
    skills: ['Git', 'GitHub', 'VS Code']
  },
  {
    title: 'Methodologies',
    icon: <GitBranch className="skill-category-icon" size={22} />,
    skills: ['Agile Software Development']
  }
];

export default function Skills() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Proficiency</span>
          <h2 className="section-title">Technical <span>Skills</span></h2>
        </div>

        <div className="skills-container">
          {/* Skill Progress Bars */}
          <div className="skill-bars-grid">
            {skillBars.map((skill, idx) => (
              <div key={idx} className="skill-bar-card glass-card reveal">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: animated ? `${skill.percentage}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Categorized Cards */}
          <div className="skill-cards-grid">
            {categories.map((cat, idx) => (
              <div key={idx} className="skill-category-card glass-card reveal">
                <div className="skill-category-title">
                  {cat.icon}
                  <span>{cat.title}</span>
                </div>
                <div className="skill-tag-list">
                  {cat.skills.map((s, sIdx) => (
                    <span key={sIdx} className="skill-badge">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
