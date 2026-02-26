import { useState, useEffect } from 'react'

export default function Navbar({ t }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: t.nav.villa, href: '#villa' },
    { label: t.nav.region, href: '#region' },
    { label: t.nav.activities, href: '#activities' },
    { label: t.nav.gastronomy, href: '#gastronomy' },
    { label: t.nav.towns, href: '#towns' },
  ]

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'background 0.4s, box-shadow 0.4s',
        backgroundColor: scrolled ? 'rgba(246,244,210,0.97)' : 'transparent',
        boxShadow: scrolled ? '0 1px 0 rgba(90,45,40,0.1)' : 'none',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <div className="section-container navbar-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            fontStyle: 'italic',
            fontWeight: 600,
            textDecoration: 'none',
            color: scrolled ? '#a44a3f' : '#f6f4d2',
            transition: 'color 0.3s',
          }}
        >
          Casa com Calma
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }} className="hidden md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.05em',
                textDecoration: 'none',
                color: scrolled ? '#a44a3f' : 'rgba(246,244,210,0.85)',
                transition: 'color 0.3s, opacity 0.3s',
              }}
              onMouseEnter={e => e.target.style.color = scrolled ? '#f19c79' : 'rgba(246,244,210,0.6)'}
              onMouseLeave={e => e.target.style.color = scrolled ? '#a44a3f' : 'rgba(246,244,210,0.85)'}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#book"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.05em',
              textDecoration: 'none',
              padding: '10px 28px',
              backgroundColor: '#a44a3f',
              color: '#f6f4d2',
              border: '1px solid #a44a3f',
              borderRadius: 'var(--radius-md)',
              transition: 'all 0.3s',
            }}
          >
            {t.nav.book}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, padding: 4 }}
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {[6, 4, 6].map((w, i) => (
            <span key={i} style={{ display: 'block', width: `${w * 4}px`, height: 1, backgroundColor: scrolled ? '#a44a3f' : '#f6f4d2', transition: 'background 0.3s' }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu" style={{ backgroundColor: '#f6f4d2', borderTop: '1px solid #c8d888', padding: '24px 16px' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '12px 0', fontSize: 14, fontWeight: 500, color: '#a44a3f', textDecoration: 'none', borderBottom: '1px solid #c8d888' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setMenuOpen(false)}
            style={{ display: 'block', marginTop: 20, padding: '12px 24px', backgroundColor: '#a44a3f', color: '#f6f4d2', textAlign: 'center', fontSize: 14, fontWeight: 500, textDecoration: 'none', borderRadius: 'var(--radius-md)' }}
          >
            {t.nav.book}
          </a>
        </div>
      )}
    </nav>
  )
}
