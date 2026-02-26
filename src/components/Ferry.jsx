export default function Ferry({ t }) {
  const b = t.beaches

  return (
    <section id="ferry" className="section-padding" style={{ backgroundColor: '#a44a3f' }}>
      <div className="section-container">

        {/* Header */}
        <div style={{ marginBottom: 72 }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 11, fontWeight: 500,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: '#f19c79',
            marginBottom: 20,
          }}>
            {b.sectionLabel}
          </p>
          <div className="header-grid-2col">
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 3.5vw, 52px)',
              fontWeight: 600,
              lineHeight: 1.1,
              color: '#f6f4d2',
              marginBottom: 0,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}>
              {b.headline}
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16, fontWeight: 300, lineHeight: 1.85,
              color: 'rgba(246,244,210,0.65)',
              paddingBottom: 4,
            }}>
              {b.intro}
            </p>
          </div>
          <div style={{ width: 56, height: 1, backgroundColor: '#f19c79', marginTop: 40 }} />
        </div>

        {/* 4 destinations — grille 2×2 */}
        <div className="destinations-grid">
          {b.items.map((item, i) => (
            <div
              key={item.name}
              style={{
                backgroundColor: i % 2 === 0
                  ? 'rgba(246,244,210,0.06)'
                  : 'rgba(246,244,210,0.03)',
                borderTop: '1px solid rgba(246,244,210,0.1)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
              }}
            >
              {item.image && (
                <div style={{ height: 'clamp(180px, 25vw, 220px)', overflow: 'hidden' }}>
                  <img
                    src={item.image ? `${import.meta.env.BASE_URL}${item.image.replace(/^\//, '')}` : ''}
                    alt={item.name}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              )}
              <div className="pillar-card">
              {/* Tag distance */}
              <span style={{
                display: 'inline-block',
                fontFamily: 'var(--font-body)',
                fontSize: 11, fontWeight: 500,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#f19c79',
                marginBottom: 16,
              }}>
                {item.tag}
              </span>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                color: '#f6f4d2',
                marginBottom: 16,
                lineHeight: 1.15,
              }}>
                {item.name}
              </h3>

              <div style={{ width: 28, height: 1, backgroundColor: '#f19c79', marginBottom: 20 }} />

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14, fontWeight: 300, lineHeight: 1.85,
                color: 'rgba(246,244,210,0.65)',
              }}>
                {item.desc}
              </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note bas de section */}
        <div style={{
          marginTop: 48,
          paddingTop: 28,
          borderTop: '1px solid rgba(246,244,210,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>
          
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 13, fontWeight: 300,
            color: 'rgba(246,244,210,0.45)',
            letterSpacing: '0.01em',
          }}>
            {b.note}
          </p>
        </div>

      </div>
    </section>
  )
}
