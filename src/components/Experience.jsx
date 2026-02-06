function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'Vodafone-Idea VOIS (AICTE)',
      position: 'Machine Learning Intern',
      period: 'Oct 2023 - Nov 2024',
      description:
        'Architected and developed multiple full-stack AI applications using Python, FastAPI, and React.js. Designed and deployed NLP and computer vision models exposed through RESTful APIs. Implemented model inference pipelines and optimized API response performance.',
    },
    {
      id: 2,
      company: 'Personal AI Projects',
      position: 'AI Engineer / Developer',
      period: '2024 - Present',
      description:
        'Building advanced AI systems including NyayaBot (legal RAG chatbot), VoiceVerse AI, LexAI, and a real-time speech transcription system using Whisper, LangChain, vector databases, and LLMs. Focused on scalable deployment and system integration.',
    },
    {
      id: 3,
      company: 'Open Source & Self Learning',
      position: 'AI & Full Stack Developer',
      period: '2023 - Present',
      description:
        'Practicing data structures, algorithms, and building end-to-end projects in React, FastAPI, and Python. Exploring LLM agents, retrieval systems, and voice-based assistants.',
    },
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          <div className="timeline-line"></div>
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="timeline-dot"></div>
              <div className="experience-content">
                <h3>{exp.position}</h3>
                <p className="company">{exp.company}</p>
                <p className="period">{exp.period}</p>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
