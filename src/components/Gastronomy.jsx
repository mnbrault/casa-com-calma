export default function Gastronomy({ t }) {
  const g = t.gastronomy

  return (
    <section id="gastronomy" className="section-padding" style={{ backgroundColor: '#d4e09b' }}>
      <div className="section-container">

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 11, fontWeight: 500,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: '#a08060',
            marginBottom: 20,
          }}>
            {g.sectionLabel}
          </p>
          <div className="header-grid-2col">
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 3.5vw, 52px)',
              fontWeight: 600,
              lineHeight: 1.15,
              color: '#a44a3f',
              marginBottom: 0,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}>
              {g.headline}
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16, fontWeight: 300, lineHeight: 1.85,
              color: '#7a6040',
              paddingBottom: 4,
            }}>
              {g.intro}
            </p>
          </div>
          <div style={{ width: 56, height: 1, backgroundColor: '#f19c79', marginTop: 40 }} />
        </div>

        {/* 2 piliers éditoriaux — image + titre + texte comme Nature */}
        <div className="pillars-grid-2" style={{ marginBottom: 64 }}>
          {g.pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              style={{
                backgroundColor: i === 0 ? '#cbdfbd' : '#a44a3f',
                overflow: 'hidden',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Texte en haut */}
              <div className="pillar-card" style={{
                color: i === 0 ? '#7a6040' : 'rgba(246,244,210,0.75)',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  color: i === 0 ? '#a44a3f' : '#f6f4d2',
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
                }}>
                  {pillar.desc}
                </p>
              </div>
              {/* Photo en dessous */}
              <div style={{ height: 'clamp(200px, 28vw, 260px)', overflow: 'hidden' }}>
                <img
                  src={
                    i === 0 ? '/Photo C3/Olhao-fish-market-hall.jpg'
                    : '/Photo C3/the-great-saturday-market-in-olhao-02.jpg'
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
            </div>
          ))}
        </div>

        {/* Marchés */}
        <div>
          <h3 style={{
            fontFamily: 'var(--font-body)',
            fontSize: 11, fontWeight: 500,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#a08060',
            marginBottom: 32,
            paddingBottom: 20,
            borderBottom: '1px solid #c8d888',
          }}>
            {g.marketsTitle}
          </h3>
          <div className="markets-grid">
            {g.markets.map((m) => (
              <div key={m.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    color: '#a44a3f',
                    lineHeight: 1.2,
                  }}>
                    {m.name}
                  </p>
                  {m.detail && (
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 11, fontWeight: 500,
                      letterSpacing: '0.08em',
                      color: '#a08060',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      paddingTop: 3,
                    }}>
                      {m.detail}
                    </span>
                  )}
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14, fontWeight: 300, lineHeight: 1.75,
                  color: '#7a6040',
                }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
