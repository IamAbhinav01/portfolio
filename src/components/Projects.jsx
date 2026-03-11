import { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'KitchenElite – AI Nutrition & Recipe Assistant',
      description: [
        'Built a full-stack AI web application that analyzes food images to detect ingredients and generate nutritional breakdowns.',
        'Integrated computer vision models with a RAG pipeline to recommend healthy Indian recipes based on detected ingredients.',
        'Developed scalable backend APIs using FastAPI and Django with a responsive React frontend.',
      ],
      technologies: ['React', 'FastAPI', 'Django', 'LangChain', 'Python'],
      link: 'https://github.com/IamAbhinav01/kitchenElite',
      video: '/assests/kitchenai.mkv',
      thumbnail: '/assests/kitchenAI.png',
    },

    {
      id: 2,
      title: 'Virtual Hospital – AI Medical Imaging & Doctor Assistant',
      description: [
        'Developed an AI-powered medical imaging system capable of analyzing scans using PyTorch deep learning models.',
        'Generated structured clinical reports automatically using LLM-based medical report generation pipelines.',
        'Implemented a virtual doctor assistant that performs context-aware consultations using LangChain agents.',
      ],
      technologies: ['Python', 'FastAPI', 'PyTorch', 'LangChain'],
      link: 'https://github.com/IamAbhinav01/MediScanAI---virtualHospital',
      video: '/assests/virtualHospi.mp4',
      thumbnail: '/assests/virtualHspital.png',
    },

    {
      id: 3,
      title: 'SmartHR Assistant – Resume Analysis & ATS Scorer',
      description: [
        'Developed an AI-powered resume analysis system that compares resumes with job descriptions and identifies relevant keywords, skills, and experience to measure candidate-job alignment.',
        'Implemented automated skill extraction and semantic matching to detect technical and soft skills from resumes and compare them with employer expectations.',
        'Generated ATS-style scoring and structured insights that highlight resume strengths, missing skills, and improvement suggestions.',
      ],
      technologies: ['Python', 'FastAPI', 'React', 'NLP'],
      link: 'https://github.com/IamAbhinav01/Smart-HR-Assistant',
      video: '/assests/smarthr.mkv',
      thumbnail: '/assests/smarthr.png',
    },
    {
      id: 4,
      title: 'LexAI Justice – Advanced Legal AI Assistant',
      description: [
        'Built a Streamlit-based legal AI assistant capable of answering Indian legal queries using Retrieval-Augmented Generation (RAG) with structured legal documents.',
        'Integrated voice interaction using Whisper for speech-to-text and TTS for audio responses, enabling a fully voice-driven legal consultation experience.',
        'Implemented intelligent model caching, response caching, and concurrent request handling to improve performance and reduce response latency.',
      ],
      technologies: ['Python', 'Streamlit', 'LangChain', 'Whisper', 'AstraDB'],
      link: 'https://github.com/IamAbhinav01/-LexAI-Justice-AI-Legal-Assistant-for-Indian-Law',
      video: '/assests/LexAI - Made with Clipchamp.mp4',
      thumbnail: '/assests/lexAI.png',
    },

    {
      id: 5,
      title: 'PicSage AI – Image Recognition & Knowledge Retrieval System',
      description: [
        'Developed a web-based AI system that analyzes uploaded images and provides contextual information using computer vision and NLP models.',
        'Integrated real-time knowledge retrieval using DuckDuckGo API to answer questions related to detected objects, celebrities, anime, and landmarks.',
        'Built a scalable FastAPI backend with OpenCV, NumPy, and transformer models to enable image recognition and question-answering capabilities.',
      ],
      technologies: [
        'Python',
        'FastAPI',
        'OpenCV',
        'Transformers',
        'TensorFlow',
      ],
      link: 'https://github.com/IamAbhinav01/picssage-ai',
      video: '/assests/picsage.mp4',
      thumbnail: '/assests/picssageai.png',
    },

    {
      id: 6,
      title: 'AI Mock Interviewer – Intelligent Technical Interview Platform',
      description: [
        'Designed an AI-powered technical interview platform that automatically extracts skills from resumes and generates personalized interview questions.',
        'Implemented dynamic question generation and real-time answer evaluation using Mistral AI and LangChain for intelligent feedback.',
        'Built a scalable FastAPI backend with a responsive Tailwind CSS frontend and Docker deployment for fast and portable application setup.',
      ],
      technologies: ['Python', 'FastAPI', 'LangChain', 'Mistral AI', 'Docker'],
      link: 'https://github.com/IamAbhinav01/ai-mock-interviewer',
      video: '/assests/ai-mock-interviewer.mp4',
      thumbnail: '/assests/aimocki.png',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.refresh();
    // play preview video of active project
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.load();
      v.play().catch(() => {});
    }
  }, [activeIndex]);

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title" data-aos="fade-down">
          Featured Projects
        </h2>
        <div className="projects-container" data-aos="fade-up">
          <div className="project-main" key={activeIndex}>
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
              <ul className="project-description">
                {projects[activeIndex].description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

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
