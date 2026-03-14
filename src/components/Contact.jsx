import { useState, useEffect } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Dynamically choose API endpoint
    const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
      ? 'http://localhost:5000' 
      : 'https://contactform-backend-p5d5.onrender.com';

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Server unreachable. Please try again later.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="section-tag fade-up visible">Contact</div>
            <h2 className="section-title fade-up visible" style={{ animationDelay: '0.1s' }}>
              Let's build something <br /> <span className="text-highlight">extraordinary.</span>
            </h2>
            <p className="contact-desc fade-up visible" style={{ animationDelay: '0.2s' }}>
              I'm always open to new opportunities, collaborations, or just a friendly chat 
              about the future of AI. Drop me a message!
            </p>

            <div className="contact-methods fade-up visible" style={{ animationDelay: '0.3s' }}>
              <div className="method-item">
                <div className="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div className="method-label">Email</div>
                  <div className="method-value">AbhinavSunil@hotmail.com</div>
                </div>
              </div>
              
              <div className="method-item">
                <div className="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
                <div>
                  <div className="method-label">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/abhinav-sunil-870184279/" target="_blank" rel="noopener noreferrer" className="method-link">abhinav-sunil</a>
                </div>
              </div>
              
              <div className="method-item">
                <div className="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path></svg>
                </div>
                <div>
                  <div className="method-label">GitHub</div>
                  <a href="https://github.com/IamAbhinav01" target="_blank" rel="noopener noreferrer" className="method-link">IamAbhinav01</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container fade-up visible" style={{ animationDelay: '0.4s' }}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  className="form-input" 
                  placeholder=" " 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor="name" className="form-label">Full Name</label>
              </div>

              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  className="form-input" 
                  placeholder=" " 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor="email" className="form-label">Email Address</label>
              </div>

              <div className="form-group">
                <textarea 
                  name="message" 
                  id="message" 
                  className="form-input" 
                  placeholder=" " 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label htmlFor="message" className="form-label">Your Message</label>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${status === 'loading' ? 'loading' : ''}`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {status === 'success' && (
              <div className="toast success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Message sent successfully!
              </div>
            )}

            {status === 'error' && (
              <div className="toast error">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 120px 20px;
          background-color: var(--color-bg);
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: flex-start;
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
          margin-bottom: 24px;
          color: var(--color-text-primary);
        }

        .text-highlight {
          color: var(--color-accent);
        }

        .contact-desc {
          font-size: 1.1rem;
          color: var(--color-text-secondary);
          max-width: 500px;
          margin-bottom: 48px;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .method-item {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .method-icon {
          width: 48px;
          height: 48px;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-accent);
        }

        .method-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .method-value, .method-link {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .method-link {
          text-decoration: underline;
          text-decoration-color: var(--color-border);
          transition: var(--transition-base);
        }

        .method-link:hover {
          color: var(--color-accent);
          text-decoration-color: var(--color-accent);
        }

        .contact-form-container {
          background-color: var(--color-bg);
          padding: 40px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-lg);
          position: relative;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-group {
          position: relative;
        }

        .form-input {
          width: 100%;
          padding: 16px;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-text-primary);
          transition: var(--transition-base);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--color-accent);
          background-color: var(--color-bg);
          box-shadow: 0 0 0 4px var(--color-accent-soft);
        }

        .form-label {
          position: absolute;
          left: 16px;
          top: 16px;
          color: var(--color-text-secondary);
          pointer-events: none;
          transition: var(--transition-base);
          font-size: 1rem;
        }

        .form-input:focus ~ .form-label,
        .form-input:not(:placeholder-shown) ~ .form-label {
          top: -10px;
          left: 12px;
          font-size: 12px;
          font-weight: 700;
          color: var(--color-accent);
          background-color: var(--color-bg);
          padding: 0 6px;
        }

        .submit-btn {
          width: 100%;
          padding: 16px;
          font-size: 1rem;
          margin-top: 8px;
        }

        .submit-btn.loading {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .toast {
          position: absolute;
          bottom: -70px;
          left: 0;
          right: 0;
          padding: 16px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 600;
          animation: slideUpToast 0.4s cubic-bezier(0.2, 0, 0.2, 1) forwards;
        }

        @keyframes slideUpToast {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .toast.success {
          background-color: #ecfdf5;
          color: #065f46;
          border: 1px solid #10b981;
        }

        .toast.error {
          background-color: #fef2f2;
          color: #991b1b;
          border: 1px solid #ef4444;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          
          .contact-form-container {
            padding: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
