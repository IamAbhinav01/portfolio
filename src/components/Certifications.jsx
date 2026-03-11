function Certifications() {
  const certifications = [
    {
      id: 1,
      title:
        'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      issuer: '',
      date: 'Sep’25',
      description: '',
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=35D02FDF7EEAA8DEDE64788853B9E94C9FEBD914754EBFC533274F1A5DC0AD2D',
      icon: '🏅',
    },
    {
      id: 2,
      title: 'Introduction to Programming in C',
      issuer: '',
      date: 'Apr’23',
      description: '',
      link: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs02/Course/NPTEL24CS02S45240011530029107.pdf',
      icon: '💻',
    },
    {
      id: 3,
      title: 'Introduction to Generative AI – Grow with Google',
      issuer: '',
      date: 'Mar’23',
      description: '',
      link: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~YO1MENLEIZOK/CERTIFICATE_LANDING_PAGE~YO1MENLEIZOK.jpeg',
      icon: '🤖',
    },
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'Lovely Professional University, Phagwara, Punjab',
      year: 'Aug’23 – Present',
      gpa: 'CGPA: 7.93',
      icon: '🎓',
    },
    {
      id: 2,
      degree: 'Intermediate',
      field: '',
      institution: 'Amrita Vidyalayam, Pathanamthitta, Kerala',
      year: 'May’22 – May’23',
      gpa: 'Percentage: 86.6',
      icon: '🎓',
    },
    {
      id: 3,
      degree: 'Matriculation',
      field: '',
      institution: 'Amrita Vidyalayam, Pathanamthitta, Kerala',
      year: 'Mar’20 – May’21',
      gpa: 'Percentage: 88.8',
      icon: '🎓',
    },
  ];

  return (
    <section id="certifications">
      <div className="container">
        <h2 className="section-title">Certifications & Education</h2>

        <div className="cert-edu-container">
          {/* Certifications */}
          <div className="cert-section">
            <h3 className="subsection-title">Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, idx) => (
                <div
                  key={cert.id}
                  className="cert-card"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="cert-icon">{cert.icon}</div>
                  <h4 className="cert-title">{cert.title}</h4>
                  {cert.issuer && <p className="cert-issuer">{cert.issuer}</p>}
                  <p className="cert-date">{cert.date}</p>
                  {cert.description && (
                    <p className="cert-description">{cert.description}</p>
                  )}
                  {cert.link && (
                    <p className="cert-link">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View certificate &#8599;
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="edu-section">
            <h3 className="subsection-title">Education</h3>
            <div className="education-timeline">
              {education.map((edu, idx) => (
                <div
                  key={edu.id}
                  className="education-item"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="edu-icon">{edu.icon}</div>
                  <div className="edu-content">
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <p className="edu-field">{edu.field}</p>
                    <p className="edu-institution">{edu.institution}</p>
                    <div className="edu-meta">
                      <span className="edu-year">{edu.year}</span>
                      <span className="edu-gpa">{edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
