function Resume() {
  const pdfUrl = '/assests/CV_202602171351518715_12316570.pdf';

  return (
    <section id="resume" className="resume-section" data-aos="fade-up">
      <h2 className="section-title">Resume</h2>
      <div className="resume-container">
        <iframe src={pdfUrl} title="Resume PDF" className="resume-frame" />
      </div>
      <p>
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
          Open resume in new tab &#8599;
        </a>
      </p>
    </section>
  );
}

export default Resume;
