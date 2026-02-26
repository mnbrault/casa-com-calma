export default function Hero({ t }) {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('/IMG_2659.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />

      {/* Overlay brun-rouge léger — laisse la photo respirer */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(90,45,40,0.35) 0%, rgba(90,45,40,0.35) 40%, rgba(90,45,40,0.65) 100%)',
      }} />

      {/* Content */}
      <div className="section-container" style={{
        position: 'relative', zIndex: 10, width: '100%',
        paddingBottom: 'clamp(48px, 8vw, 100px)',
      }}>
        {/* Location tag */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 12, fontWeight: 500,
          letterSpacing: '0.3em', textTransform: 'uppercase',
          color: '#ffffff',
          marginBottom: 24,
          textShadow: '0 1px 8px rgba(0,0,0,0.8)',
        }}>
          {t.hero.tagline}
        </p>

        {/* Main title */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(52px, 5vw, 72px)',
          fontWeight: 600,
          lineHeight: 1.05,
          color: '#f6f4d2',
          marginBottom: 20,
          textShadow: '0 2px 12px rgba(90,45,40,0.4)',
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.35em',
          flexWrap: 'wrap',
        }}>
          <span style={{ letterSpacing: '0.22em' }}>CASA</span>
          <span style={{ fontWeight: 300, fontSize: '0.72em', letterSpacing: '0.05em' }}>com</span>
          <span style={{ letterSpacing: '0.22em' }}>CALMA</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 18, fontWeight: 300, lineHeight: 1.75,
          color: 'rgba(246,244,210,0.92)',
          marginBottom: 28,
          maxWidth: 500,
          textShadow: '0 1px 6px rgba(90,45,40,0.35)',
        }}>
          {t.hero.subheadline}
        </p>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 0, marginBottom: 44, flexWrap: 'wrap', alignItems: 'center' }}>
          {t.hero.stats.map((stat, i) => (
            <span key={stat} style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13, fontWeight: 400,
                color: 'rgba(246,244,210,0.85)',
                letterSpacing: '0.02em',
              }}>
                {stat}
              </span>
              {i < t.hero.stats.length - 1 && (
                <span style={{ width: 1, height: 14, backgroundColor: 'rgba(246,244,210,0.4)', display: 'inline-block', margin: '0 20px' }} />
              )}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a
            href="#villa"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14, fontWeight: 500,
              padding: '16px 48px',
              backgroundColor: '#f6f4d2',
              color: '#a44a3f',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              display: 'inline-block',
              borderRadius: 'var(--radius-md)',
              transition: 'background 0.3s',
            }}
          >
            {t.hero.cta}
          </a>
          <a
            href="#book"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14, fontWeight: 300,
              padding: '16px 48px',
              backgroundColor: 'transparent',
              color: '#f6f4d2',
              border: '1px solid rgba(246,244,210,0.6)',
              borderRadius: 'var(--radius-md)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              display: 'inline-block',
              transition: 'all 0.3s',
            }}
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}
