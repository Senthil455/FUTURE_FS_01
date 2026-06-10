export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">A brief introduction to who I am</p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'center',
          }}
          className="about-grid"
        >
          <div>
            <div
              style={{
                width: '100%',
                aspectRatio: '1',
                borderRadius: 'var(--radius)',
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '6rem',
                color: '#fff',
                fontWeight: 800,
              }}
            >
              SR
            </div>
          </div>

          <div>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              AI Automation Engineer & Backend Developer
            </h3>
            <p style={{ color: 'var(--secondary)', fontWeight: 500, fontSize: '0.95rem', marginBottom: 16 }}>
              📍 Chennai, Tamil Nadu
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: 16, lineHeight: 1.8 }}>
              AI Automation Engineer and Backend Developer with hands-on experience building AI-powered automation workflows, conversational AI applications, and scalable backend systems. Passionate about AI, automation, distributed systems, and cybersecurity, with expertise in Python, OpenAI APIs, and PostgreSQL.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: 24, lineHeight: 1.8 }}>
              B.Tech in Information Science and Technology at College of Engineering Guindy (CEG), Anna University. Finalist at AI HyperAutomation Hackathon 1.0 and active NCC Cadet.
            </p>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {[
                { label: 'Experience', value: '1+ Year' },
                { label: 'Projects', value: '5+' },
                { label: 'Hackathons', value: '2+' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      color: 'var(--primary)',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
