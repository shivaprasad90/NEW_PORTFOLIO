import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Building2, Calendar, Award } from 'lucide-react';

export default function Education() {
  const [lineActive, setLineActive] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineActive(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">My <span>Education</span></h2>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div
            className="timeline-line-active"
            style={{ height: lineActive ? '100%' : '0%' }}
          ></div>

          <div className="timeline-item">
            <div className="timeline-node"></div>
            <div className="education-card glass-card reveal">
              <div className="education-header">
                <div>
                  <h3 className="degree-title">Bachelor of Commerce — Computer Applications</h3>
                  <div className="institution-name">
                    <Building2 size={18} />
                    <span>Nagarjuna Government College</span>
                  </div>
                </div>
                <div className="education-year-badge">
                  <Calendar size={14} style={{ display: 'inline', marginRight: '4px' }} />
                  <span>2025</span>
                </div>
              </div>

              <div className="education-details">
                <div className="cgpa-pill">
                  <Award size={18} style={{ color: 'var(--accent-orange)' }} />
                  <span>CGPA: 6.8 / 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
