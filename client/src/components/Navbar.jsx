import { useState, useEffect } from 'react';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        background: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a
          href="#hero"
          style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: 'var(--text)',
            letterSpacing: -1,
          }}
        >
          <span className="gradient-text">Senthil.R</span>
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text)',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
          className="menu-toggle"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul
          style={{
            display: 'flex',
            gap: 32,
            listStyle: 'none',
            alignItems: 'center',
          }}
          className="nav-links"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--text)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <div
          style={{
            background: 'var(--bg-light)',
            borderBottom: '1px solid var(--border)',
            padding: '16px 24px',
          }}
          className="mobile-menu"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '10px 0',
                color: 'var(--text-muted)',
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .menu-toggle {
          display: none !important;
        }
        @media (max-width: 768px) {
          .menu-toggle {
            display: block !important;
          }
          .nav-links {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
