import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <button className="footer-logo" onClick={scrollToTop}>
              AS<span>.</span>
            </button>
            <p className="footer-copyright">
              © {currentYear} Abhinav Sunil. Built with React & Passion.
            </p>
          </div>

          <div className="footer-right">
            <div className="footer-socials">
              <a href="https://github.com/IamAbhinav01" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/abhinav-sunil-870184279/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        </button>
      )}

      <style jsx>{`
        .footer {
          padding: 60px 20px;
          border-top: 1px solid var(--color-border);
          background-color: var(--color-bg);
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }

        .footer-logo {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 800;
          color: var(--color-text-primary);
          margin-bottom: 8px;
          background: none;
          border: none;
          padding: 0;
          cursor: none;
          transition: var(--transition-base);
        }

        .footer-logo:hover {
          color: var(--color-accent);
          transform: translateY(-2px);
        }

        .footer-logo span {
          color: var(--color-accent);
        }

        .footer-copyright {
          font-size: 14px;
          color: var(--color-text-secondary);
        }

        .footer-socials {
          display: flex;
          gap: 16px;
        }

        .social-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          background-color: var(--color-surface);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-primary);
          transition: var(--transition-base);
          cursor: none;
        }

        .social-icon:hover {
          background-color: var(--color-accent);
          color: var(--color-bg);
          border-color: var(--color-accent);
          transform: translateY(-4px);
        }

        .scroll-top-btn {
          position: fixed;
          bottom: 40px;
          right: 40px;
          width: 56px;
          height: 56px;
          background-color: var(--color-text-primary);
          color: var(--color-bg);
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-lg);
          cursor: none;
          z-index: 998;
          transition: var(--transition-base);
          animation: slideUp 0.4s cubic-bezier(0.2, 0, 0.2, 1) forwards;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .scroll-top-btn:hover {
          transform: translateY(-5px);
          background-color: var(--color-accent);
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
          }
          
          .scroll-top-btn {
            bottom: 24px;
            right: 24px;
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
