import { useRef, useEffect, useState } from 'react';

const AchievementItem = ({ text, index }) => {
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
      className={`achievement-card ${isVisible ? 'visible' : ''}`} 
      ref={ref} 
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="achievement-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <p className="achievement-text">{text}</p>
    </div>
  );
};

const Achievements = () => {
  const items = [
    'Solved 200+ problems on LeetCode across algorithms, data structures and system design',
    'Built and deployed 6+ full-stack AI projects from concept to development',
    'Developed AI solutions that process real-world data with RAG and LLM pipelines',
    'Contributed to open-source projects and AI communities',
    'Published technical knowledge through project documentation and implementations',
  ];

  return (
    <section id="achievements" className="achievements-section surface-alt">
      <div className="container">
        <div className="section-header">
           <div className="section-tag fade-up visible">Milestones</div>
           <h2 className="section-title fade-up visible" style={{ animationDelay: '0.1s' }}>
             Key <span className="text-highlight">Achievements.</span>
           </h2>
        </div>

        <div className="achievements-grid">
          {items.map((text, i) => (
            <AchievementItem key={i} text={text} index={i} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .achievements-section {
          padding: 100px 20px;
          background-color: var(--color-surface);
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
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
          color: var(--color-text-primary);
        }

        .text-highlight {
          color: var(--color-accent);
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .achievement-card {
          display: flex;
          gap: 20px;
          padding: 24px;
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          transition: var(--transition-base);
          opacity: 0;
          transform: translateY(20px);
        }

        .achievement-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .achievement-card:hover {
          border-color: var(--color-accent);
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }

        .achievement-icon {
          width: 32px;
          height: 32px;
          background-color: var(--color-accent-soft);
          color: var(--color-accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .achievement-text {
          font-size: 1.05rem;
          line-height: 1.5;
          color: var(--color-text-primary);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .achievement-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Achievements;
