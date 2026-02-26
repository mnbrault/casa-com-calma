export default function BookingCta({ t }) {
  return (
    <section id="book" style={{ position: 'relative', overflow: 'hidden', minHeight: 400, display: 'flex', alignItems: 'center' }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('/footer.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      }} />
      {/* Overlay brun-rouge léger */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(164,74,63,0.35) 0%, rgba(164,74,63,0.55) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        maxWidth: 1440, margin: '0 auto', width: '100%',
        padding: 'clamp(56px, 8vw, 100px) clamp(16px, 4vw, 48px)',
        textAlign: 'center',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 4vw, 48px)',
          fontWeight: 600,
          lineHeight: 1.1,
          color: '#f6f4d2',
          marginBottom: 20,
          textShadow: '0 2px 10px rgba(90,45,40,0.4)',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
        }}>
          {t.cta.headline}
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 17, fontWeight: 300, lineHeight: 1.75,
          color: 'rgba(246,244,210,0.92)',
          maxWidth: 540, width: '100%',
          marginBottom: 44,
        }}>
          {t.cta.subheadline}
        </p>
        <a
          href="mailto:contact@casacomcalma.com"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 14, fontWeight: 500,
            padding: '18px 56px',
            backgroundColor: '#a44a3f',
            color: '#f6f4d2',
            textDecoration: 'none',
            letterSpacing: '0.03em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            borderRadius: 'var(--radius-lg)',
            transition: 'opacity 0.3s',
          }}
        >
          {t.cta.button}
        </a>
      </div>
    </section>
  )
}
