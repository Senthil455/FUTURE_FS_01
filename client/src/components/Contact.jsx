import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', text: 'Message sent successfully! I\'ll get back to you soon.' });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', text: data.error || 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', text: 'Network error. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="container" style={{ maxWidth: 700 }}>
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle">
          Have a project in mind? Let's work together.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 20,
            }}
            className="contact-grid"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            required
            style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
          />
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{
              alignSelf: 'flex-start',
              opacity: loading ? 0.7 : 1,
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Sending...' : 'Send Message →'}
          </button>
        </form>

        {status.text && (
          <div
            style={{
              marginTop: 20,
              padding: '12px 20px',
              borderRadius: 8,
              background:
                status.type === 'success'
                  ? 'rgba(34, 197, 94, 0.1)'
                  : 'rgba(239, 68, 68, 0.1)',
              color:
                status.type === 'success'
                  ? 'rgb(34, 197, 94)'
                  : 'rgb(239, 68, 68)',
              border: `1px solid ${
                status.type === 'success'
                  ? 'rgba(34, 197, 94, 0.3)'
                  : 'rgba(239, 68, 68, 0.3)'
              }`,
            }}
          >
            {status.text}
          </div>
        )}

        <div
          style={{
            marginTop: 48,
            display: 'flex',
            justifyContent: 'center',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'Email', value: 'senthilrajar1116@gmail.com', href: 'mailto:senthilrajar1116@gmail.com' },
            { label: 'Phone', value: '+91 9994931201', href: 'tel:+919994931201' },
            { label: 'GitHub', value: 'github.com/Senthil455', href: 'https://github.com/Senthil455' },
            { label: 'LinkedIn', value: 'linkedin.com/in/senthil-raja-r', href: 'https://linkedin.com/in/senthil-raja-r' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textAlign: 'center',
                color: 'var(--text-muted)',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              <div style={{ fontWeight: 600, color: 'var(--primary)', marginBottom: 4 }}>
                {link.label}
              </div>
              <div style={{ fontSize: '0.9rem' }}>{link.value}</div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '14px 18px',
  borderRadius: 8,
  border: '1px solid var(--border)',
  background: 'var(--bg-card)',
  color: 'var(--text)',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.3s',
};
