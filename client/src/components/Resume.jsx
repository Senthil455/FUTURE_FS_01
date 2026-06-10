const experience = [
  {
    role: 'AI Automation Intern',
    company: 'Dnyx — Chennai, India',
    period: 'Jan 2026 – Present',
    description:
      'Architected AI-powered automation workflows using n8n and OpenAI API, reducing manual processing time by 40% by streamlining multi-step workflows. Built end-to-end automation pipelines integrating 10+ third-party APIs and AI-driven task execution, accelerating operational throughput by 35%. Engineered automated systems for data processing and workflow orchestration, improving process reliability by 99% uptime across scheduled pipelines.',
  },
  {
    role: 'Ethical Hacking Intern',
    company: 'Eduskills Virtual Internship',
    period: 'Apr 2026 – Present',
    description:
      'Conducted vulnerability assessments and penetration testing across simulated network environments using Metasploit, Nmap, Wireshark, and Burp Suite. Performed threat analysis and reconnaissance exercises, identifying and documenting critical security weaknesses in test environments. Practiced secure system design principles through structured red-team exercises covering threat modeling and exploit mitigation strategies.',
  },
];

const education = [
  {
    degree: 'B.Tech in Information Science and Technology',
    school: 'College of Engineering Guindy (CEG), Anna University — Chennai',
    period: '2024 – 2028',
    description: 'CGPA: 7.8 / 10. Relevant Coursework: Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks.',
  },
];

export default function Resume() {
  return (
    <section id="resume" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        <h2 className="section-title">
          My <span className="gradient-text">Resume</span>
        </h2>
        <p className="section-subtitle">Experience & education</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48 }}>
          <h3
            style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: 'var(--secondary)',
              marginBottom: 8,
            }}
          >
            💼 Experience
          </h3>
          {experience.map((item) => (
            <div key={item.role} className="card">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 8,
                  flexWrap: 'wrap',
                  gap: 8,
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{item.role}</h4>
                  <p style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.95rem' }}>
                    {item.company}
                  </p>
                </div>
                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: 12,
                    background: 'rgba(37, 99, 235, 0.1)',
                    color: 'var(--primary)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.period}
                </span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h3
            style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: 'var(--secondary)',
              marginBottom: 8,
            }}
          >
            🎓 Education
          </h3>
          {education.map((item) => (
            <div key={item.degree} className="card">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 8,
                  flexWrap: 'wrap',
                  gap: 8,
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{item.degree}</h4>
                  <p style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.95rem' }}>
                    {item.school}
                  </p>
                </div>
                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: 12,
                    background: 'rgba(37, 99, 235, 0.1)',
                    color: 'var(--primary)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.period}
                </span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="#" className="btn btn-primary">
            Download Full Resume (PDF) ↓
          </a>
        </div>
      </div>
    </section>
  );
}
