export default function Activities({ t }) {
  return (
    <section id="activities" className="section-padding" style={{ backgroundColor: '#f6f4d2' }}>
      <div className="section-container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 5vw, 72px)' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 11, fontWeight: 500,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: '#a08060',
            marginBottom: 20,
          }}>
            {t.activities.sectionLabel}
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
            {t.activities.headline}
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16, fontWeight: 300,
            color: '#7a6040',
          }}>
            {t.activities.subtitle}
          </p>
        </div>

        {/* 3 activity cards */}
        <div className="grid-cols-1-2-3" style={{ marginBottom: 56 }}>
          {t.activities.items.map((item) => (
            <div key={item.title} style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#cbdfbd', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              {/* Image */}
              <div style={{ height: 'clamp(200px, 30vw, 260px)', overflow: 'hidden' }}>
                <img
                  src={item.image ? `${import.meta.env.BASE_URL}${item.image.replace(/^\//, '')}` : ''}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s', display: 'block' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              {/* Content */}
              <div style={{ padding: 'clamp(20px, 3vw, 28px)' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  color: '#a44a3f',
                  marginBottom: 12,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14, fontWeight: 300, lineHeight: 1.75,
                  color: '#7a6040',
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
