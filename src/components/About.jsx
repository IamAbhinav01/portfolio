import { useEffect, useRef, useState } from 'react';

const StatCounter = ({ end, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isVisible, end]);

  return (
    <div className="stat-card" ref={countRef}>
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="image-container fade-up visible">
              <img src="/assests/profile.jpg" alt="Abhinav Sunil" />
              <div className="image-overlay"></div>
            </div>
            
            <div className="stats-grid">
              <StatCounter end={2} label="Years Experience" suffix="+" />
              <StatCounter end={15} label="Projects Built" suffix="+" />
              <StatCounter end={5} label="Tech Stacks" suffix="+" />
            </div>
          </div>

          <div className="about-content">
            <div className="section-tag fade-up visible">About Me</div>
            <h2 className="section-title fade-up visible" style={{ animationDelay: '0.1s' }}>
              Building the future <br /> with <span className="text-highlight">Artificial Intelligence.</span>
            </h2>
            
            <div className="about-text fade-up visible" style={{ animationDelay: '0.2s' }}>
              <p>
                I am an AI-focused full-stack developer with a passion for building 
                intelligent systems that solve real-world problems. My expertise lies 
                in Python-based backends, machine learning, and modern web technologies.
              </p>
              <p>
                I take pride in crafting clean code and robust architectures. 
                From RAG-powered chatbots like <strong>NyayaBot</strong> to 
                computer vision assistants like <strong>KitchenElite</strong>, 
                I focus on creating end-to-end solutions that are both functional 
                and high-performing.
              </p>
              <p>
                Currently, I'm exploring the intersection of Large Language Models 
                and scalable production systems, aiming to push the boundaries of 
                what's possible in the AI space.
              </p>
            </div>

            <div className="about-divider fade-up visible" style={{ animationDelay: '0.3s' }}></div>
            
            <div className="about-info-grid fade-up visible" style={{ animationDelay: '0.4s' }}>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">India</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">AbhinavSunil@hotmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Socials</span>
                <div className="info-value socials">
                   <a href="https://www.linkedin.com/in/abhinav-sunil-870184279/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                   <a href="https://github.com/IamAbhinav01" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 120px 20px;
          background-color: var(--color-bg);
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }

        .about-visual {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .image-container {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          aspect-ratio: 4/5;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-border);
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-slow);
        }

        .image-container:hover img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, transparent 50%);
          pointer-events: none;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .stat-card {
          padding: 24px 16px;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          text-align: center;
          transition: var(--transition-base);
        }

        .stat-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-accent);
          box-shadow: var(--shadow-md);
        }

        .stat-number {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 800;
          color: var(--color-text-primary);
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 12px;
          font-weight: 500;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
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
          font-size: clamp(2rem, 5vw, 3rem);
          margin-bottom: 32px;
          color: var(--color-text-primary);
        }

        .text-highlight {
          color: var(--color-accent);
          position: relative;
          display: inline-block;
        }

        .text-highlight::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 4px;
          background-color: var(--color-accent-soft);
          z-index: -1;
        }

        .about-text {
          margin-bottom: 40px;
        }

        .about-text p {
          margin-bottom: 20px;
          color: var(--color-text-secondary);
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .about-divider {
          height: 1px;
          background-color: var(--color-border);
          margin-bottom: 40px;
        }

        .about-info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .info-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-value {
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .socials {
          display: flex;
          gap: 12px;
        }

        .social-link {
          color: var(--color-accent);
          font-weight: 600;
          text-decoration: underline;
          text-decoration-color: var(--color-accent-soft);
          transition: var(--transition-base);
        }

        .social-link:hover {
          text-decoration-color: var(--color-accent);
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          
          .about-visual {
            order: 2;
          }
          
          .image-container {
            aspect-ratio: 16/9;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
