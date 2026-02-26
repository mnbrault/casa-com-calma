export default function Nature({ t }) {
  const n = t.nature

  return (
    <section id="nature" className="section-padding" style={{ backgroundColor: '#f6f4d2' }}>
      <div className="section-container">

        {/* Header */}
        <div style={{ maxWidth: 720, marginBottom: 'clamp(40px, 5vw, 72px)' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 11, fontWeight: 500,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: '#a08060',
            marginBottom: 20,
          }}>
            {n.sectionLabel}
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 4vw, 60px)',
            fontWeight: 600,
            lineHeight: 1.1,
            color: '#a44a3f',
            marginBottom: 16,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}>
            {n.headline}
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16, fontWeight: 300,
            color: '#a08060',
            letterSpacing: '0.02em',
            marginBottom: 28,
          }}>
            {n.subtitle}
          </p>
          <div style={{ width: 56, height: 1, backgroundColor: '#f19c79', marginBottom: 28 }} />
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 17, fontWeight: 300, lineHeight: 1.9,
            color: '#7a6040',
          }}>
            {n.intro}
          </p>
        </div>

        {/* 3 pillars */}
        <div className="grid-cols-1-2-3" style={{ gap: 2, marginBottom: 72 }}>
          {n.pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              style={{
                backgroundColor: i === 1 ? '#a44a3f' : '#d4e09b',
                overflow: 'hidden',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              {/* Photo pour chaque pilier */}
              <div style={{ height: 220, overflow: 'hidden' }}>
                <img
                  src={
                    i === 0 ? `${import.meta.env.BASE_URL}Photo C3/bird.webp`
                    : i === 1 ? `${import.meta.env.BASE_URL}Photo C3/oyster.jpg`
                    : `${import.meta.env.BASE_URL}Photo C3/bird2.webp`
                  }
                  alt={pillar.title}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </div>
              <div className="pillar-card" style={{ paddingBottom: 52 }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  color: i === 1 ? '#f6f4d2' : '#a44a3f',
                  marginBottom: 16,
                  lineHeight: 1.2,
                }}>
                  {pillar.title}
                </h3>
                <div style={{
                  width: 32, height: 1,
                  backgroundColor: '#f19c79',
                  marginBottom: 20,
                }} />
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14, fontWeight: 300, lineHeight: 1.85,
                  color: i === 1 ? 'rgba(246,244,210,0.75)' : '#7a6040',
                }}>
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="nature-cta-strip" style={{
          borderTop: '1px solid #c8d888',
          paddingTop: 48,
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(18px, 2vw, 24px)',
            fontWeight: 400,
            color: '#a44a3f',
            maxWidth: 600,
          }}>
            {n.cta}
          </p>
          <a
            href="#book"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13, fontWeight: 500,
              letterSpacing: '0.06em',
              padding: '14px 40px',
              backgroundColor: 'transparent',
              color: '#a44a3f',
              border: '1px solid #a44a3f',
              borderRadius: 'var(--radius-md)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#a44a3f'
              e.currentTarget.style.color = '#f6f4d2'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#a44a3f'
            }}
          >
            Réserver →
          </a>
        </div>

      </div>
    </section>
  )
}
