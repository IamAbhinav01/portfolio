import { useRef, useEffect, useState } from 'react';

const Resume = () => {
  const pdfUrl = '/assests/CV_202602171351518715_12316570.pdf';
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
    <section id="resume" className="resume-section">
      <div className="container" ref={ref}>
        <div className={`resume-content ${isVisible ? 'visible' : ''}`}>
          <div className="section-header">
            <div className="section-tag">Professional</div>
            <h2 className="section-title">Resume / <span className="text-highlight">CV.</span></h2>
            <p className="resume-desc">
              A detailed overview of my technical skills, professional experience, and academic background.
            </p>
          </div>

          <div className="resume-viewer-container">
            <div className="resume-frame-wrapper">
              <iframe 
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`} 
                title="Resume Preview" 
                className="resume-frame"
              />
              <div className="frame-overlay">
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                   Open Full Resume
                </a>
              </div>
            </div>
            
            <div className="resume-actions">
               <div className="action-card">
                 <div className="action-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                 </div>
                 <div className="action-info">
                    <h4>Direct Download</h4>
                    <p>Get a PDF copy for your records.</p>
                 </div>
                 <a href={pdfUrl} download className="btn btn-ghost action-btn">Download</a>
               </div>

               <div className="action-card">
                 <div className="action-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                 </div>
                 <div className="action-info">
                    <h4>LinkedIn Profile</h4>
                    <p>Connect and view endorsement skills.</p>
                 </div>
                 <a href="https://www.linkedin.com/in/abhinav-sunil-870184279/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost action-btn">View Profile</a>
               </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .resume-section {
          padding: 120px 20px;
          background-color: var(--color-bg);
          position: relative;
        }

        .resume-content {
          opacity: 0;
          transform: translateY(30px);
          transition: var(--transition-slow);
        }

        .resume-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 60px;
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
          margin-bottom: 16px;
          color: var(--color-text-primary);
        }

        .text-highlight {
          color: var(--color-accent);
        }

        .resume-desc {
          color: var(--color-text-secondary);
          font-size: 1.1rem;
        }

        .resume-viewer-container {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .resume-frame-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1.4;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .resume-frame {
          width: 100%;
          height: 100%;
          border: none;
        }

        .frame-overlay {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition-base);
        }

        .resume-frame-wrapper:hover .frame-overlay {
          opacity: 1;
        }

        .resume-actions {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .action-card {
          padding: 30px;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          gap: 20px;
          transition: var(--transition-base);
        }

        .action-card:hover {
          border-color: var(--color-accent);
          box-shadow: var(--shadow-md);
          transform: translateX(10px);
        }

        .action-icon {
          width: 56px;
          height: 56px;
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-accent);
          flex-shrink: 0;
        }

        .action-info {
          flex-grow: 1;
        }

        .action-info h4 {
          font-size: 1.25rem;
          margin-bottom: 4px;
          color: var(--color-text-primary);
        }

        .action-info p {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
        }

        .action-btn {
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .resume-viewer-container {
            grid-template-columns: 1fr;
          }
          
          .resume-frame-wrapper {
            order: 2;
          }
        }
      `}</style>
    </section>
  );
};

export default Resume;
