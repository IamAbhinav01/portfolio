function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 92 },
        { name: 'JavaScript', level: 86 },
        { name: 'SQL', level: 80 },
        { name: 'C++', level: 70 },
        { name: 'C', level: 65 },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'HTML5', level: 92 },
        { name: 'CSS3', level: 88 },
        { name: 'Tailwind CSS', level: 82 },
        { name: 'Vite', level: 78 },
      ],
    },
    {
      category: 'Backend & APIs',
      skills: [
        { name: 'FastAPI', level: 88 },
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 78 },
        { name: 'REST APIs', level: 86 },
      ],
    },
    {
      category: 'AI & Machine Learning',
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'Deep Learning', level: 80 },
        { name: 'NLP', level: 82 },
        { name: 'Computer Vision', level: 78 },
        { name: 'PyTorch', level: 80 },
      ],
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 78 },
        { name: 'Linux', level: 82 },
        { name: 'Postman', level: 84 },
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid card-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-card">
              <h3 className="skill-card-title">{category.category}</h3>
              <div className="skill-list-rows">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-row">
                    <div className="skill-label">{skill.name}</div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                      <div className="skill-level">{skill.level}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
