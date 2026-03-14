import { useState, useRef, useEffect } from 'react';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = ((y - centerY) / centerY) * -8;
    const tiltY = ((x - centerX) / centerX) * 8;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Video play interrupted", err));
    }
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="project-card fade-up visible"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <div className="project-image">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className={isHovered && project.video ? 'dimmed' : ''}
        />
        
        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            className={`project-video ${isHovered ? 'visible' : ''}`}
          />
        )}

        <div className="project-links">
           <a href={project.link} target="_blank" rel="noopener noreferrer" className="icon-btn" title="View Code">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path></svg>
           </a>
        </div>
        <div className="project-badge">{project.category}</div>
      </div>
      
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        
        <div className="project-tech">
          {project.technologies.slice(0, 4).map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .project-card {
          background-color: var(--color-bg);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          overflow: hidden;
          transition: transform 0.1s ease-out, box-shadow 0.3s ease;
          cursor: none;
          position: relative;
        }

        .project-card:hover {
          box-shadow: var(--shadow-lg);
          border-color: var(--color-accent);
        }

        .project-image {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
          background-color: var(--color-surface);
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-slow);
        }

        .project-image img.dimmed {
          opacity: 0.3;
        }

        .project-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 2;
        }

        .project-video.visible {
          opacity: 1;
        }

        .project-card:hover .project-image img:not(.dimmed) {
          transform: scale(1.05);
        }

        .project-links {
          position: absolute;
          top: 16px;
          right: 16px;
          display: flex;
          gap: 8px;
          opacity: 0;
          transform: translateY(-10px);
          transition: var(--transition-base);
          z-index: 5;
        }

        .project-card:hover .project-links {
          opacity: 1;
          transform: translateY(0);
        }

        .icon-btn {
          width: 40px;
          height: 40px;
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-primary);
          transition: var(--transition-base);
        }

        .icon-btn:hover {
          background-color: var(--color-accent);
          color: var(--color-bg);
          border-color: var(--color-accent);
        }

        .project-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          padding: 4px 12px;
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(4px);
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          color: var(--color-accent);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border: 1px solid var(--color-accent-soft);
        }

        .project-info {
          padding: 24px;
        }

        .project-title {
          font-size: 1.5rem;
          margin-bottom: 8px;
          color: var(--color-text-primary);
        }

        .project-subtitle {
          font-size: 1rem;
          color: var(--color-text-secondary);
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-secondary);
        }
      `}</style>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projectsData = [
    {
      title: 'KitchenElite',
      subtitle: 'AI-powered nutrition and recipe assistant using computer vision and RAG pipelines.',
      category: 'AI / Fullstack',
      technologies: ['React', 'FastAPI', 'PyTorch', 'LangChain'],
      thumbnail: '/assests/kitchenAI.png',
      video: '/assests/kitchenai.mkv',
      link: 'https://github.com/IamAbhinav01/kitchenElite',
      type: ['AI', 'Fullstack']
    },
    {
      title: 'Virtual Hospital',
      subtitle: 'Medical imaging and doctor assistant with automated clinical report generation.',
      category: 'AI / Backend',
      technologies: ['FastAPI', 'PyTorch', 'Mistral AI', 'Python'],
      thumbnail: '/assests/virtualHspital.png',
      video: '/assests/virtualHospi.mp4',
      link: 'https://github.com/IamAbhinav01/MediScanAI---virtualHospital',
      type: ['AI', 'Backend']
    },
    {
      title: 'LexAI Justice',
      subtitle: 'Legal AI assistant for Indian Law using RAG and voice interaction.',
      category: 'AI / Backend',
      technologies: ['Streamlit', 'LangChain', 'Whisper', 'AstraDB'],
      thumbnail: '/assests/lexAI.png',
      video: '/assests/LexAI - Made with Clipchamp.mp4',
      link: 'https://github.com/IamAbhinav01/-LexAI-Justice-AI-Legal-Assistant-for-Indian-Law',
      type: ['AI', 'Backend']
    },
    {
      title: 'AI Mock Interviewer',
      subtitle: 'Dynamic technical interview platform with skill extraction and personalized evaluation.',
      category: 'AI / Fullstack',
      technologies: ['React', 'FastAPI', 'Mistral AI', 'Docker'],
      thumbnail: '/assests/aimocki.png',
      video: '/assests/ai-mock-interviewer.mp4',
      link: 'https://github.com/IamAbhinav01/ai-mock-interviewer',
      type: ['AI', 'Fullstack']
    },
    {
      title: 'PicSage AI',
      subtitle: 'Image recognition system with contextual knowledge retrieval from web APIs.',
      category: 'AI / Backend',
      technologies: ['Python', 'OpenCV', 'FastAPI', 'Transformers'],
      thumbnail: '/assests/picssageai.png',
      video: '/assests/picsage.mp4',
      link: 'https://github.com/IamAbhinav01/picssage-ai',
      type: ['AI', 'Backend']
    },
    {
      title: 'SmartHR Assistant',
      subtitle: 'ATS scorer and resume analysis system with semantic matching technology.',
      category: 'AI / Backend',
      technologies: ['Python', 'NLP', 'FastAPI', 'React'],
      thumbnail: '/assests/smarthr.png',
      video: '/assests/smarthr.mkv',
      link: 'https://github.com/IamAbhinav01/Smart-HR-Assistant',
      type: ['AI', 'Backend']
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.type.includes(filter));

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <div className="section-tag fade-up visible">Portfolio</div>
          <h2 className="section-title fade-up visible" style={{ animationDelay: '0.1s' }}>
            Featured <span className="text-highlight">Projects.</span>
          </h2>
          
          <div className="filter-bar fade-up visible" style={{ animationDelay: '0.2s' }}>
            {['All', 'AI', 'Fullstack', 'Backend'].map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          padding: 120px 20px;
          background-color: var(--color-bg);
          position: relative;
        }

        .projects-header {
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
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          margin-bottom: 40px;
          color: var(--color-text-primary);
        }

        .text-highlight {
          color: var(--color-accent);
        }

        .filter-bar {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 8px 24px;
          border-radius: 999px;
          border: 1px solid var(--color-border);
          background-color: var(--color-bg);
          font-size: 14px;
          font-weight: 600;
          color: var(--color-text-secondary);
          transition: var(--transition-base);
          cursor: none;
        }

        .filter-btn:hover {
          border-color: var(--color-text-primary);
          color: var(--color-text-primary);
        }

        .filter-btn.active {
          background-color: var(--color-text-primary);
          border-color: var(--color-text-primary);
          color: var(--color-bg);
          box-shadow: var(--shadow-md);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
