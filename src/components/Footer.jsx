export default function Footer({ t, lang, setLang }) {
  return (
    <footer style={{ backgroundColor: '#a44a3f', borderTopLeftRadius: 'var(--radius-xl)', borderTopRightRadius: 'var(--radius-xl)' }}>
      {/* Main */}
      <div className="footer-inner">
        {/* Top row: brand + 2 nav columns */}
        <div className="footer-top-row" style={{
          display: 'flex', justifyContent: 'space-between',
          paddingBottom: 48, marginBottom: 32,
          borderBottom: '1px solid rgba(246,244,210,0.12)',
        }}>

          {/* Brand */}
          <div style={{ flex: 2 }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 22, fontStyle: 'italic', fontWeight: 600,
              color: '#f6f4d2',
              marginBottom: 16,
            }}>
              Casa com Calma
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14, fontWeight: 300, lineHeight: 1.75,
              color: 'rgba(246,244,210,0.55)',
              maxWidth: 280,
            }}>
              {t.footer.tagline}
            </p>
          </div>

          {/* Discover nav */}
          <div style={{ flex: 1 }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11, fontWeight: 500,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#f19c79',
              marginBottom: 20,
            }}>
              {t.footer.discoverTitle}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {t.footer.discoverLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14, fontWeight: 300,
                      color: 'rgba(246,244,210,0.65)',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={e => e.target.style.color = '#f6f4d2'}
                    onMouseLeave={e => e.target.style.color = 'rgba(246,244,210,0.65)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practical nav */}
          <div style={{ flex: 1 }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11, fontWeight: 500,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#f19c79',
              marginBottom: 20,
            }}>
              {t.footer.infoTitle}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {t.footer.infoLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14, fontWeight: 300,
                      color: 'rgba(246,244,210,0.65)',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={e => e.target.style.color = '#f6f4d2'}
                    onMouseLeave={e => e.target.style.color = 'rgba(246,244,210,0.65)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 12, fontWeight: 300,
            color: 'rgba(246,244,210,0.4)',
          }}>
            {t.footer.legal}
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            {[['fr', 'FR'], ['en', 'EN'], ['pt', 'PT']].map(([code, label]) => (
              <span
                key={code}
                onClick={() => setLang(code)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11, fontWeight: 500,
                  color: lang === code ? 'rgba(246,244,210,0.85)' : 'rgba(246,244,210,0.35)',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
