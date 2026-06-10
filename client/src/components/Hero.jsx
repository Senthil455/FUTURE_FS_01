import { useEffect, useState } from 'react';

const roles = ['AI Automation Engineer', 'Backend Developer', 'Cybersecurity Enthusiast'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(37, 99, 235, 0.15) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <p
          style={{
            color: 'var(--secondary)',
            fontWeight: 600,
            fontSize: '1.1rem',
            marginBottom: 16,
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          Welcome to my portfolio
        </p>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: 20,
          }}
        >
          Hi, I'm <span className="gradient-text">Senthil Raja R</span>
        </h1>
        <p
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            color: 'var(--text-muted)',
            marginBottom: 12,
            minHeight: '2.4rem',
          }}
        >
          {roles[roleIndex]}
        </p>
        <p
          style={{
            color: 'var(--text-muted)',
            maxWidth: 560,
            margin: '0 auto 40px',
            fontSize: '1.05rem',
          }}
        >
          AI Automation Engineer and Backend Developer with hands-on experience building AI-powered automation workflows, conversational AI applications, and scalable backend systems. Passionate about AI, automation, distributed systems, and cybersecurity.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">
            View My Work ↓
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
