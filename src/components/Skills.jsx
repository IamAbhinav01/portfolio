import { useRef, useEffect, useState } from 'react';

const SkillCategory = ({ title, skills, index }) => {
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
    <div className={`skill-category ${isVisible ? 'visible' : ''}`} ref={ref} style={{ transitionDelay: `${index * 0.1}s` }}>
      <h3 className="category-title">{title}</h3>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div 
            key={skill} 
            className="skill-pill" 
            style={{ transitionDelay: `${(index * 0.1) + (i * 0.05)}s` }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const categories = [
    {
      title: "AI & Machine Learning",
      skills: ["Python", "PyTorch", "TensorFlow", "NLP", "LangChain", "LLMs", "Mistral AI", "Computer Vision"]
    },
    {
      title: "Backend Development",
      skills: ["FastAPI", "Django", "Node.js", "Express", "SQL", "PostgreSQL", "AstraDB", "RESTful APIs"]
    },
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Vite", "Streamlit"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Docker", "Git", "GitHub", "Linux", "Postman", "OpenCV", "NumPy", "C++"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Teamwork", "Communication", "Time Management", "Adaptability", "Critical Thinking"]
    }
  ];

  return (
    <section id="skills" className="skills-section surface-alt">
      <div className="container">
        <div className="skills-header">
          <div className="section-tag fade-up visible">Expertise</div>
          <h2 className="section-title fade-up visible" style={{ animationDelay: '0.1s' }}>
            Technical <span className="text-highlight">Toolbelt.</span>
          </h2>
          <p className="skills-subtitle fade-up visible" style={{ animationDelay: '0.2s' }}>
            A collection of technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((cat, i) => (
            <SkillCategory key={cat.title} title={cat.title} skills={cat.skills} index={i} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          padding: 120px 20px;
          background-color: var(--color-surface);
        }

        .skills-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 80px;
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
          margin-bottom: 16px;
          color: var(--color-text-primary);
        }

        .text-highlight {
          color: var(--color-accent);
        }

        .skills-subtitle {
          color: var(--color-text-secondary);
          font-size: 1.1rem;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
        }

        .skill-category {
          background-color: var(--color-bg);
          padding: 32px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          transition: var(--transition-slow);
          opacity: 0;
          transform: translateY(30px);
        }

        .skill-category.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .skill-category:hover {
          border-color: var(--color-accent);
          box-shadow: var(--shadow-md);
        }

        .category-title {
          font-size: 1.25rem;
          margin-bottom: 24px;
          color: var(--color-text-primary);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .category-title::before {
          content: '';
          width: 4px;
          height: 20px;
          background-color: var(--color-accent);
          border-radius: 2px;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .skill-pill {
          padding: 8px 16px;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 999px;
          font-size: 13px;
          font-weight: 500;
          color: var(--color-text-primary);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: none;
        }

        .skill-pill:hover {
          background-color: var(--color-accent-soft);
          border-color: var(--color-accent);
          color: var(--color-accent);
          transform: scale(1.05);
          box-shadow: 0 0 15px var(--color-accent-soft);
        }

        @media (max-width: 768px) {
          .skill-category {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
