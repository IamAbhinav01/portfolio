import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo" onClick={scrollToTop}>
          AS<span className="logo-dot">.</span>
        </a>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-item">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="nav-cta">Let's Talk</a>
        </div>

        <button 
          className="mobile-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-item"
              style={{ transitionDelay: `${i * 0.1}s` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
           <a 
            href="#contact" 
            className="mobile-item mobile-cta"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 24px 0;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          padding: 14px 0;
          border-bottom: 1px solid var(--color-border);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 24px;
        }

        .nav-logo {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 800;
          color: var(--color-text-primary);
          letter-spacing: -0.05em;
        }

        .logo-dot {
          color: var(--color-accent);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-item {
          font-weight: 500;
          font-size: 14px;
          color: var(--color-text-primary);
          opacity: 0.7;
          transition: var(--transition-base);
        }

        .nav-item:hover {
          opacity: 1;
          color: var(--color-accent);
        }

        .nav-cta {
          padding: 8px 20px;
          background-color: var(--color-text-primary);
          color: var(--color-bg);
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          transition: var(--transition-base);
        }

        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          background-color: var(--color-accent);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          padding: 10px;
          z-index: 1001;
        }

        .hamburger {
          width: 24px;
          height: 2px;
          background-color: var(--color-text-primary);
          position: relative;
          transition: all 0.3s ease;
        }

        .hamburger::before, .hamburger::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 2px;
          background-color: var(--color-text-primary);
          transition: all 0.3s ease;
        }

        .hamburger::before { top: -8px; }
        .hamburger::after { bottom: -8px; }

        .hamburger.open {
          background-color: transparent;
        }

        .hamburger.open::before {
          top: 0;
          transform: rotate(45deg);
        }

        .hamburger.open::after {
          bottom: 0;
          transform: rotate(-45deg);
        }

        .mobile-menu {
          position: fixed;
          inset: 0;
          background-color: var(--color-bg);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: all 0.4s cubic-bezier(0.2, 0, 0.2, 1);
        }

        .mobile-menu.open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        .mobile-item {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 700;
          color: var(--color-text-primary);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s cubic-bezier(0.2, 0, 0.2, 1);
        }

        .mobile-menu.open .mobile-item {
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-cta {
          color: var(--color-accent);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
