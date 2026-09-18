import React from 'react';
import { Brain, Wrench, MessageSquare, Users, Compass, Clock } from 'lucide-react';

const softSkills = [
  { name: 'Analytical Thinking', icon: <Brain size={24} /> },
  { name: 'Problem Solving', icon: <Wrench size={24} /> },
  { name: 'Communication Skills', icon: <MessageSquare size={24} /> },
  { name: 'Team Collaboration', icon: <Users size={24} /> },
  { name: 'Adaptability', icon: <Compass size={24} /> },
  { name: 'Time Management', icon: <Clock size={24} /> }
];

export default function SoftSkills() {
  return (
    <section className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Interpersonal Abilities</span>
          <h2 className="section-title">Soft <span>Skills</span></h2>
        </div>

        <div className="soft-skills-grid">
          {softSkills.map((skill, idx) => (
            <div key={idx} className="soft-skill-card glass-card reveal">
              <div className="soft-skill-icon">{skill.icon}</div>
              <h3 className="soft-skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
