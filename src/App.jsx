import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // 1. Preloader logic
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.style.width = '100%';
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }, 500);
    }

    // 2. Custom Cursor logic
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      
      // Direct cursor
      if (cursor) {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
      }
      
      // Delayed follower
      if (follower) {
        follower.animate({
          left: `${x}px`,
          top: `${y}px`
        }, { duration: 500, fill: "forwards" });
      }

      // Check for hoverable elements
      const target = e.target;
      const isHoverable = target.closest('a, button, .project-card, .skill-pill, .filter-btn');
      
      if (isHoverable) {
        cursor?.classList.add('active');
        follower?.classList.add('active');
        
        // Magnetic Button Effect
        const magnetic = target.closest('.btn-primary, .btn-ghost');
        if (magnetic) {
          const rect = magnetic.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const distanceX = x - centerX;
          const distanceY = y - centerY;
          
          magnetic.style.transform = `translate(${distanceX * 0.2}px, ${distanceY * 0.2}px)`;
        }
      } else {
        cursor?.classList.remove('active');
        follower?.classList.remove('active');
        
        // Reset all magnetic buttons
        document.querySelectorAll('.btn-primary, .btn-ghost').forEach(btn => {
           btn.style.transform = '';
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);

    // 3. Scroll Reveal logic
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <main className="app-root">
      <Navbar />
      <Hero />
      
      <div className="scroll-reveal">
         <About />
      </div>
      
      <div className="scroll-reveal">
         <Skills />
      </div>
      
      <div className="scroll-reveal">
         <Projects />
      </div>
      
      <div className="scroll-reveal">
         <Experience />
      </div>

      <div className="scroll-reveal">
         <Education />
      </div>

      <div className="scroll-reveal">
         <Achievements />
      </div>

      <div className="scroll-reveal">
         <Resume />
      </div>
      
      <div className="scroll-reveal">
         <Contact />
      </div>
      
      <Footer />
    </main>
  );
}

export default App;
