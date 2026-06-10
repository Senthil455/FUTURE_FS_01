const skillData = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'C', 'C++', 'SQL', 'PHP'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Flask', 'REST APIs'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    category: 'AI & Automation',
    skills: ['n8n', 'OpenAI API', 'Gen AI', 'Zoho', 'LangChain'],
  },
  {
    category: 'Cybersecurity',
    skills: ['Metasploit', 'Nmap', 'Wireshark', 'Burp Suite'],
  },
  {
    category: 'DevOps & Platforms',
    skills: ['Docker', 'Linux', 'Postman', 'Git', 'GitHub'],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24,
          }}
        >
          {skillData.map((group) => (
            <div key={group.category} className="card">
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: 20,
                  color: 'var(--secondary)',
                }}
              >
                {group.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '6px 16px',
                      borderRadius: 20,
                      background: 'rgba(37, 99, 235, 0.1)',
                      color: 'var(--primary)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      border: '1px solid rgba(37, 99, 235, 0.2)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
