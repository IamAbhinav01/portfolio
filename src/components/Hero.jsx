function Hero() {
  return (
    <section className="hero" data-aos="fade-up">
      <video autoPlay muted loop className="hero-video">
        <source
          src="/assests/Abstract_Particle_Network_Animation_Generated.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div
          className="hero-content"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h1 className="hero-title">Hi, I'm Abhinav Sunil</h1>
          <p className="hero-subtitle">
            AI-Focused Full Stack Developer | Problem Solver
          </p>

          <p className="hero-description">
            I build intelligent, scalable applications that solve real-world
            problems using AI and modern web technologies. Passionate about
            clean code, performance, and continuous learning.
          </p>

          <div className="hero-cta">
            <a
              href="#projects"
              className="btn btn-primary"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-photo" data-aos="fade-left" data-aos-delay="300">
          <img
            src="/assests/profile.jpg"
            alt="Abhinav Sunil"
            className="profile-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
