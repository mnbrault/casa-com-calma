export default function Region({ t }) {
  return (
    <section id="region" className="section-padding" style={{ backgroundColor: '#a44a3f' }}>
      <div className="section-container">

        {/* Header — centered */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 11, fontWeight: 500,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: '#f19c79',
            marginBottom: 20,
          }}>
            {t.region.sectionLabel}
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: 600,
            lineHeight: 1.1,
            color: '#f6f4d2',
            marginBottom: 16,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}>
            {t.region.headline}
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16, fontWeight: 300,
            color: 'rgba(246,244,210,0.75)',
            letterSpacing: '0.02em',
          }}>
            {t.region.subtitle}
          </p>
        </div>

        {/* 2-column: image left, text right */}
        <div className="region-split">
          {/* Image */}
          <div className="region-image-wrap" style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
            <img
              src={`${import.meta.env.BASE_URL}Photo C3/praia-cacela-velha.jpg`}
              alt="Ria Formosa"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Text */}
          <div>
            <div style={{
              width: 40,
              height: 1,
              backgroundColor: '#f19c79',
              marginBottom: 32,
            }} />
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16, fontWeight: 300, lineHeight: 1.85,
              color: 'rgba(246,244,210,0.75)',
              marginBottom: 24,
            }}>
              {t.region.description1}
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16, fontWeight: 300, lineHeight: 1.85,
              color: 'rgba(246,244,210,0.75)',
            }}>
              {t.region.description2}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
