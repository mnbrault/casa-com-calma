// Renamed to Maison section to match Pencil design
export default function Maison({ t }) {
  return (
    <section id="villa" style={{ backgroundColor: '#f6f4d2', padding: '100px 0' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px', display: 'flex', alignItems: 'center', gap: 80 }}>
        {/* Left: text */}
        <div style={{ flex: 1 }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 12, fontWeight: 500,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: '#a08060',
            marginBottom: 24,
          }}>
            {t.maison.sectionLabel}
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 3vw, 52px)',
            fontStyle: 'italic',
            fontWeight: 600,
            lineHeight: 1.2,
            color: '#a44a3f',
            marginBottom: 32,
          }}>
            {t.maison.headline}
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16, fontWeight: 300, lineHeight: 1.8,
            color: '#7a6040',
            marginBottom: 20,
          }}>
            {t.maison.description1}
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16, fontWeight: 300, lineHeight: 1.8,
            color: '#7a6040',
          }}>
            {t.maison.description2}
          </p>
        </div>

        {/* Right: image */}
        <div style={{
          flex: 1,
          height: 500,
          overflow: 'hidden',
          flexShrink: 0,
        }}>
          <img
            src="/IMG_2650.jpeg"
            alt="Casa com Calma"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  )
}
