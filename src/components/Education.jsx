import { useRef, useEffect, useState } from 'react';

const EducationItem = ({ edu, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className={`edu-card ${isVisible ? 'visible' : ''}`} 
      ref={ref} 
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="edu-icon">{edu.icon}</div>
      <div className="edu-details">
        <h4 className="edu-degree">{edu.degree}</h4>
        <p className="edu-field">{edu.field}</p>
        <p className="edu-institution">{edu.institution}</p>
        <div className="edu-meta">
          <span className="edu-year">{edu.year}</span>
          <span className="edu-gpa">{edu.gpa}</span>
        </div>
      </div>
    </div>
  );
};

const CertificationCard = ({ cert, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className={`cert-card ${isVisible ? 'visible' : ''}`} 
      ref={ref} 
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="cert-header">
         <span className="cert-icon">{cert.icon}</span>
         <span className="cert-date">{cert.date}</span>
      </div>
      <h4 className="cert-title">{cert.title}</h4>
      <div className="cert-footer">
        {cert.link && (
          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
            View Certificate 
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
        )}
      </div>
    </div>
  );
};

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'Lovely Professional University',
      year: 'Aug’23 – Present',
      gpa: 'CGPA: 7.93',
      icon: '🎓',
    },
    {
      id: 2,
      degree: 'Intermediate',
      field: 'Science',
      institution: 'Amrita Vidyalayam, Pathanamthitta',
      year: 'May’22 – May’23',
      gpa: 'Percentage: 86.6',
      icon: '🏛️',
    },
    {
      id: 3,
      degree: 'Matriculation',
      field: '',
      institution: 'Amrita Vidyalayam, Pathanamthitta',
      year: 'Mar’20 – May’21',
      gpa: 'Percentage: 88.8',
      icon: '🏫',
    },
  ];

  const certificationsData = [
    {
      id: 1,
      title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      date: 'Sep’25',
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=35D02FDF7EEAA8DEDE64788853B9E94C9FEBD914754EBFC533274F1A5DC0AD2D',
      icon: '☁️',
    },
    {
      id: 2,
      title: 'Introduction to Programming in C',
      date: 'Apr’23',
      link: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs02/Course/NPTEL24CS02S45240011530029107.pdf',
      icon: '💻',
    },
    {
      id: 3,
      title: 'Introduction to Generative AI – Grow with Google',
      date: 'Mar’23',
      link: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~YO1MENLEIZOK/CERTIFICATE_LANDING_PAGE~YO1MENLEIZOK.jpeg',
      icon: '🤖',
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="edu-grid">
          {/* Education Side */}
          <div className="edu-side">
            <div className="section-tag fade-up visible">Education</div>
            <h2 className="section-title fade-up visible" style={{ animationDelay: '0.1s' }}>
              Academic <span className="text-highlight">Journey.</span>
            </h2>
            <div className="edu-list">
              {educationData.map((edu, i) => (
                <EducationItem key={edu.id} edu={edu} index={i} />
              ))}
            </div>
          </div>

          {/* Certifications Side */}
          <div className="cert-side">
             <div className="section-tag fade-up visible">Professional</div>
              <h2 className="section-title fade-up visible" style={{ animationDelay: '0.1s' }}>
                Certifications<span className="text-highlight">.</span>
              </h2>
              <div className="cert-grid">
                {certificationsData.map((cert, i) => (
                  <CertificationCard key={cert.id} cert={cert} index={i} />
                ))}
              </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .education-section {
          padding: 120px 20px;
          background-color: var(--color-bg);
          position: relative;
        }

        .edu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        }

        .section-tag {
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 600;
          color: var(--color-accent);
          text-transform: uppercase;
          margin-bottom: 16px;
          letter-spacing: 0.1em;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 48px;
          color: var(--color-text-primary);
        }

        .text-highlight {
          color: var(--color-accent);
        }

        .edu-list, .cert-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .edu-card, .cert-card {
          padding: 30px;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          transition: var(--transition-base);
          opacity: 0;
          transform: translateY(20px);
        }

        .edu-card.visible, .cert-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .edu-card:hover, .cert-card:hover {
          border-color: var(--color-accent);
          box-shadow: var(--shadow-md);
          transform: translateY(-5px);
        }

        .edu-card {
          display: flex;
          gap: 20px;
        }

        .edu-icon {
          width: 48px;
          height: 48px;
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
        }

        .edu-degree {
          font-size: 1.25rem;
          margin-bottom: 4px;
          color: var(--color-text-primary);
        }

        .edu-field {
          font-weight: 600;
          color: var(--color-accent);
          font-size: 0.9rem;
          margin-bottom: 2px;
        }

        .edu-institution {
          font-size: 1rem;
          color: var(--color-text-secondary);
          margin-bottom: 12px;
        }

        .edu-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          font-family: var(--font-mono);
        }

        .cert-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .cert-icon {
          font-size: 24px;
        }

        .cert-date {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--color-text-secondary);
          background-color: var(--color-bg);
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid var(--color-border);
        }

        .cert-title {
          font-size: 1.1rem;
          margin-bottom: 20px;
          line-height: 1.4;
          color: var(--color-text-primary);
        }

        .cert-footer {
          margin-top: auto;
        }

        .cert-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 700;
          color: var(--color-accent);
          transition: var(--transition-base);
        }

        .cert-link:hover {
          color: var(--color-text-primary);
          gap: 8px;
        }

        @media (max-width: 1024px) {
          .edu-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
