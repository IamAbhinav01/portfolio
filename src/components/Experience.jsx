import { useEffect, useRef, useState } from 'react';

const ExperienceItem = ({ exp, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className={`experience-item ${isVisible ? 'visible' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
      ref={ref}
    >
      <div className="experience-dot"></div>
      <div className="experience-content">
        <div className="experience-date">{exp.period}</div>
        <h3 className="experience-role">{exp.position}</h3>
        <div className="experience-company">{exp.company}</div>
        <p className="experience-desc">{exp.description}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Vodafone-Idea VOIS (AICTE)',
      position: 'Machine Learning Intern',
      period: 'Oct 2023 - Dec 2023',
      description: 'Architected and developed full-stack AI applications using Python, FastAPI, and React.js. Designed NLP and computer vision models exposed through RESTful APIs, optimizing for real-time inference performance.'
    },
    {
      id: 2,
      company: 'Personal AI Projects',
      position: 'AI Engineer / Developer',
      period: '2024 - Present',
      description: 'Building advanced AI systems like NyayaBot (Legal RAG), VoiceVerse AI, and real-time speech transcription systems using Whisper, LangChain, and vector databases like AstraDB.'
    }
  ];

  const timelineRef = useRef(null);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startTrigger = windowHeight * 0.8;
      const progress = Math.max(0, Math.min(1, (startTrigger - rect.top) / rect.height));
      setLineWidth(progress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Journey</div>
          <h2 className="section-title">
            Experience <span className="text-highlight">Timeline.</span>
          </h2>
        </div>

        <div className="timeline-container" ref={timelineRef}>
          <div className="timeline-line">
            <div className="timeline-line-progress" style={{ height: `${lineWidth}%` }}></div>
          </div>
          
          <div className="experience-list">
            {experiences.map((exp, i) => (
              <ExperienceItem key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-section {
          padding: 120px 20px;
          background-color: var(--color-bg);
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
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
          font-size: 3rem;
          color: var(--color-text-primary);
        }

        .text-highlight {
          color: var(--color-accent);
        }

        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background-color: var(--color-border);
          transform: translateX(-50%);
          z-index: 1;
        }

        .timeline-line-progress {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(180deg, var(--color-accent), #818cf8);
          transition: height 0.1s ease-out;
        }

        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 100px;
        }

        .experience-item {
          position: relative;
          width: 50%;
          z-index: 2;
          opacity: 0;
          filter: blur(10px);
          transform: translateY(40px) scale(0.95);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .experience-item.visible {
          opacity: 1;
          filter: blur(0);
          transform: translateY(0) scale(1);
        }

        .experience-item.left {
          left: 0;
          padding-right: 60px;
          text-align: right;
        }

        .experience-item.right {
          left: 50%;
          padding-left: 60px;
          text-align: left;
        }

        .experience-dot {
          position: absolute;
          top: 0;
          width: 12px;
          height: 12px;
          background-color: var(--color-accent);
          border: 4px solid var(--color-bg);
          border-radius: 50%;
          z-index: 3;
          transition: var(--transition-base);
          box-shadow: 0 0 0 1px var(--color-border);
        }

        .experience-item.left .experience-dot {
          right: -6px;
        }

        .experience-item.right .experience-dot {
          left: -6px;
        }

        .experience-item:hover .experience-dot {
          transform: scale(1.5);
          box-shadow: 0 0 20px var(--color-accent-soft);
        }

        .experience-content {
          padding: 40px;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          transition: var(--transition-base);
          position: relative;
        }

        .experience-item:hover .experience-content {
          border-color: var(--color-accent);
          background-color: var(--color-bg);
          box-shadow: var(--shadow-lg);
          transform: translateY(-8px);
        }

        .experience-date {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          color: var(--color-text-secondary);
          margin-bottom: 12px;
          background-color: var(--color-bg);
          display: inline-block;
          padding: 4px 12px;
          border-radius: 999px;
          border: 1px solid var(--color-border);
        }

        .experience-role {
          font-size: 1.75rem;
          margin-bottom: 4px;
          color: var(--color-text-primary);
        }

        .experience-company {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-accent);
          margin-bottom: 20px;
        }

        .experience-desc {
          color: var(--color-text-secondary);
          line-height: 1.8;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
          }
          
          .experience-item {
            width: 100%;
            padding-left: 50px !important;
            padding-right: 0 !important;
            text-align: left !important;
            left: 0 !important;
          }
          
          .experience-dot {
            left: 14px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
