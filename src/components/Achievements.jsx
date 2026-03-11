function Achievements() {
  const items = [
    'Solved 200+ problems on LeetCode across algorithms, data structures and system design',
    'Built and deployed 6+ full-stack AI projects from concept to development',
    'Developed AI solutions that process real-world data with RAG and LLM pipelines',
    'Contributed to open-source projects and AI communities',
    'Published technical knowledge through project documentation and implementations',
  ];

  return (
    <section
      id="achievements"
      className="achievements-section"
      data-aos="fade-up"
    >
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <ul className="achievements-list">
          {items.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Achievements;
