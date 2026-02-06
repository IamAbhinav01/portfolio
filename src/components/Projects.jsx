import { useState, useRef, useEffect } from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'KitchenElite – AI Nutrition & Recipe Assistant',
      description:
        'Full-stack AI web application that analyzes food images to generate detailed nutritional breakdowns and recommends healthy Indian recipes using vision models and RAG.',
      technologies: ['React', 'FastAPI', 'Django', 'LangChain', 'Python'],
      link: 'https://github.com/IamAbhinav01/kitchenElite',
      video: '/assests/kitchenai.mkv',
    },
    {
      id: 2,
      title: 'Virtual Hospital – AI Medical Imaging & Doctor Assistant',
      description:
        'End-to-end AI system that analyzes medical scans using PyTorch models, generates structured clinical reports with LLMs, and enables context-aware virtual doctor consultations.',
      technologies: ['Python', 'FastAPI', 'PyTorch', 'LangChain'],
      link: 'https://github.com/IamAbhinav01/MediScanAI---virtualHospital',
      video: '/assests/virtualHospi.mp4',
    },
    {
      id: 3,
      title: 'SmartHR Assistant – Resume Analysis & ATS Scorer',
      description:
        'AI-powered tool that analyzes resumes against job descriptions, extracts key skills, and generates ATS-style scores with structured insights.',
      technologies: ['Python', 'FastAPI', 'React', 'NLP'],
      link: 'https://github.com/IamAbhinav01/Smart-HR-Assistant',
      video: '/assests/smarthr.mkv',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const videoRef = useRef(null);

  useEffect(() => {
    // when activeIndex changes reload and play the video preview
    const v = videoRef.current;
    if (!v) return;
    try {
      v.pause();
      v.load();
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    } catch (e) {
      // ignore autoplay errors
      console.log(e);
    }
  }, [activeIndex]);

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-container">
          <div className="project-main">
            <div className="project-media">
              <div className="video-wrapper">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  className="project-video"
                  poster={projects[activeIndex].thumbnail}
                  playsInline
                >
                  <source src={projects[activeIndex].video} type="video/mp4" />
                </video>
              </div>
              <div className="project-badge">
                {activeIndex + 1} / {projects.length}
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{projects[activeIndex].title}</h3>
              <p className="project-description">
                {projects[activeIndex].description}
              </p>

              <div className="tech-stack">
                <h4>Tech Stack</h4>
                <div className="tech-tags">
                  {projects[activeIndex].technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={projects[activeIndex].link}
                className="btn btn-primary project-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          </div>

          <aside className="projects-sidebar">
            <h4 className="projects-list-title">All Projects</h4>
            <div className="circular-vertical">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  className={`circle-thumb ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  title={project.title}
                  style={{ backgroundImage: `url(${project.thumbnail})` }}
                >
                  <span className="thumb-index">{index + 1}</span>
                </button>
              ))}
            </div>
            <div className="projects-list-preview">
              <div className="preview-title">{projects[activeIndex].title}</div>
              <div className="preview-sub">
                {projects[activeIndex].technologies.join(' • ')}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Projects;
