function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-photo">
            <img
              src="/assests/profile.jpg"
              alt="Abhinav Sunil"
              className="about-profile-img"
            />
          </div>
          <div className="about-text">
            <p>
              I'm an AI-focused full-stack developer and aspiring AI scientist
              with a strong foundation in building intelligent, scalable
              applications. I specialize in Python-based backend systems,
              machine learning, and modern web technologies to create real-world
              AI solutions.
            </p>

            <p>
              I've worked on diverse projects such as legal AI chatbots
              (NyayaBot, LexAI), daily-use products (KitechAI, SmartHR
              Assistant), voice assistants, music generation systems, AI mock
              interviewers, and intelligent shopping agents. I enjoy designing
              end-to-end systems that combine machine learning models, APIs,
              databases, and clean user interfaces.
            </p>

            <p>
              I'm passionate about writing clean, maintainable code and
              continuously learning emerging AI technologies. My goal is to
              build impactful AI-powered products that solve meaningful problems
              and improve everyday experiences.
            </p>

            <div className="highlight-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
