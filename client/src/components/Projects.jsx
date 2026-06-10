const projects = [
  {
    title: 'Atlas Workforce System',
    description:
      'Engineered a polyglot microservices platform spanning workforce management, payroll operations, and real-time analytics. Architected distributed backend services with service-oriented designs enabling horizontal scalability to handle 3x traffic spikes across 4+ languages.',
    tags: ['Next.js', 'Node.js', 'Python', 'Java', 'Go', 'PostgreSQL', 'Microservices'],
    links: { github: 'https://github.com/Senthil455', live: '#' },
  },
  {
    title: 'Rupeezy AI Voice RM',
    description:
      'Developed and deployed a multilingual AI voice agent automating partner onboarding and lead conversion workflows across 3+ languages. Integrated speech-to-text processing with LLM-powered conversational pipelines handling 200+ daily onboarding interactions with 90% query resolution.',
    tags: ['Node.js', 'Conversational AI', 'Speech Processing', 'LLM APIs', 'AI Automation'],
    links: { github: 'https://github.com/Senthil455', live: '#' },
  },
  {
    title: 'VibeChats',
    description:
      'Built a production-ready real-time messaging platform supporting 1-on-1 chats, group conversations, and channel-based communication. Implemented interactive messaging features including live typing indicators, read receipts, and sub-100ms message delivery.',
    tags: ['React', 'TypeScript', 'Next.js', 'WebSockets', 'Node.js'],
    links: { github: 'https://github.com/Senthil455', live: '#' },
  },
  {
    title: 'AI Automation Workflows (n8n)',
    description:
      'Designed modular AI-assisted automation pipelines for business process execution using n8n, reducing task completion time significantly. Configured webhook integrations and cron-based scheduled executions to automate repetitive operational tasks with zero manual intervention.',
    tags: ['n8n', 'OpenAI', 'Google Cloud APIs', 'Webhooks', 'Node.js'],
    links: { github: 'https://github.com/Senthil455', live: '#' },
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio showcasing projects, skills, and professional profile. Features a contact form with email notifications, SEO optimization, and interactive resume sections.',
    tags: ['React', 'Express', 'MongoDB', 'Nodemailer'],
    links: { github: 'https://github.com/Senthil455', live: '#' },
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">A selection of my recent work</p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
          }}
        >
          {projects.map((project) => (
            <div key={project.title} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: 'rgba(37, 99, 235, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                  fontSize: '1.3rem',
                }}
              >
                📁
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 12 }}>
                {project.title}
              </h3>
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  marginBottom: 20,
                  flex: 1,
                }}
              >
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '4px 12px',
                      borderRadius: 12,
                      background: 'rgba(6, 182, 212, 0.1)',
                      color: 'var(--secondary)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 16 }}>
                <a href={project.links.github} className="btn btn-outline" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                  GitHub
                </a>
                <a href={project.links.live} className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
