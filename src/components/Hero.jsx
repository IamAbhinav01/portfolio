import { useEffect, useState, useRef } from 'react';

const RotatingSubtitle = () => {
  const words = ["I build intelligent systems.", "I design scalable APIs.", "I ship AI solutions.", "I solve complex problems."];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, 50));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="subtitle-text">
      {`${words[index].substring(0, subIndex)}`}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

const Hero = () => {
  const name = "Abhinav Sunil";
  const words = name.split(" ");
  
  return (
    <section className="hero-section">
      <div className="bg-grid"></div>
      <div className="hero-spotlight"></div>
      
      <div className="hero-content">
        <div className="hero-top">
          <div className="badge-pill">
            <span className="badge-dot"></span>
            Available for new opportunities
          </div>
        </div>

        <h1 className="hero-title">
          {words.map((word, i) => (
            <span key={i} className="reveal-text">
              <span style={{ animationDelay: `${i * 0.1}s` }}>{word}</span>
              {i < words.length - 1 && "\u00A0"}
            </span>
          ))}
        </h1>

        <div className="hero-subtitle">
          <RotatingSubtitle />
        </div>

        <p className="hero-description fade-up visible">
          AI Engineer and Full-Stack Developer specializing in building 
          intelligent, scalable applications that solve real-world problems.
        </p>

        <div className="hero-cta fade-up visible" style={{ animationDelay: '0.4s' }}>
          <a href="#projects" className="btn btn-primary">View Work</a>
          <a href="/assests/CV_202602171351518715_12316570.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Download CV</a>
        </div>

        <div className="hero-badges fade-up visible" style={{ animationDelay: '0.6s' }}>
          {['React', 'FastAPI', 'PyTorch', 'Docker', 'NLP'].map((tech) => (
            <div key={tech} className="tech-badge">
              {tech}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          background-color: var(--color-bg);
        }

        .hero-spotlight {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at 50% -20%,
            var(--color-accent-soft) 0%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 1;
        }

        .hero-content {
          z-index: 2;
          max-width: 900px;
          padding: 0 20px;
        }

        .hero-top {
          margin-bottom: 24px;
        }

        .badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 999px;
          font-size: 13px;
          font-weight: 500;
          color: var(--color-text-secondary);
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background-color: #10b981;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .hero-title {
          font-size: clamp(3.5rem, 8vw, 6rem);
          margin-bottom: 16px;
          color: var(--color-text-primary);
          display: block;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          font-family: var(--font-mono);
          color: var(--color-accent);
          margin-bottom: 24px;
          height: 2.2rem;
        }

        .blinking-cursor {
          animation: blink 1s step-end infinite;
          margin-left: 4px;
        }

        @keyframes blink {
          from, to { color: transparent; }
          50% { color: var(--color-accent); }
        }

        .hero-description {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: var(--color-text-secondary);
          max-width: 600px;
          margin: 0 auto 40px;
        }

        .hero-cta {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-bottom: 60px;
        }

        .hero-badges {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .tech-badge {
          padding: 8px 16px;
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 500;
          color: var(--color-text-primary);
          box-shadow: var(--shadow-sm);
          transition: var(--transition-base);
        }

        .tech-badge:hover {
          transform: translateY(-5px);
          border-color: var(--color-accent);
          color: var(--color-accent);
          box-shadow: var(--shadow-md);
        }

        .reveal-text {
          display: inline-block;
          overflow: hidden;
          vertical-align: bottom;
        }

        .reveal-text span {
          display: inline-block;
          transform: translateY(100%);
          animation: slideUp 0.8s cubic-bezier(0.2, 0, 0.2, 1) forwards;
        }

        @keyframes slideUp {
          to { transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: clamp(2.5rem, 10vw, 4rem);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
