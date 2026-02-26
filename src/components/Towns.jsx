export default function Towns({ t }) {
  return (
    <section id="towns" className="section-padding" style={{ backgroundColor: '#f6f4d2' }}>
      <div className="section-container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 11, fontWeight: 500,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: '#a08060',
            marginBottom: 20,
          }}>
            {t.towns.sectionLabel}
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 3.5vw, 52px)',
            fontWeight: 600,
            lineHeight: 1.15,
            color: '#a44a3f',
            marginBottom: 12,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}>
            {t.towns.headline}
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16, fontWeight: 300,
            color: '#7a6040',
          }}>
            {t.towns.subtitle}
          </p>
        </div>

        {/* Cards grid: 3 top + 2 bottom */}
        <div className="grid-cols-1-3" style={{ marginBottom: 24 }}>
          {t.towns.items.slice(0, 3).map((town) => (
            <TownCard key={town.name} town={town} />
          ))}
        </div>
        <div className="grid-cols-1-2" style={{ gap: 24 }}>
          {t.towns.items.slice(3, 5).map((town) => (
            <TownCard key={town.name} town={town} />
          ))}
        </div>

      </div>
    </section>
  )
}

function TownCard({ town }) {
  return (
    <div style={{
      backgroundColor: '#cbdfbd',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
    }}>
      {town.image && (
        <div style={{ height: 'clamp(180px, 25vw, 220px)', overflow: 'hidden' }}>
          <img
            src={town.image}
            alt={town.name}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      )}
      <div style={{ padding: 32 }}>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        color: '#a44a3f',
        marginBottom: 12,
      }}>
        {town.name}
      </h3>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 14, fontWeight: 300, lineHeight: 1.75,
        color: '#7a6040',
      }}>
        {town.desc}
      </p>
      </div>
    </div>
  )
}
