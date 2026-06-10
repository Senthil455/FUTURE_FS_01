export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '32px 24px',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.9rem',
      }}
    >
      <div className="container">
        <p>
          &copy; {year} Senthil Raja R. Built with React & Node.js. All rights reserved.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 20,
            marginTop: 12,
          }}
        >
          <a
            href="https://github.com/Senthil455"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--text)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/senthil-raja-r"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--text)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
          >
            LinkedIn
          </a>
          <a
            href="mailto:senthilrajar1116@gmail.com"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--text)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
          >
            Email
          </a>
          <a
            href="https://leetcode.com/senthilrajar"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--text)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
          >
            LeetCode
          </a>
          <a
            href="https://hackerrank.com/senthilrajasen61"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--text)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
          >
            HackerRank
          </a>
        </div>
      </div>
    </footer>
  );
}
