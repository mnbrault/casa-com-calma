const BASE = import.meta.env.BASE_URL
const jardinPhotoTexte = `${BASE}Jardin/Piscine.png`
const MONDRIAN_PHOTOS = [
  { src: `${BASE}Jardin/maison%20globale.png`, area: '1 / 1 / 3 / 3' },
  { src: `${BASE}Jardin/IMG_0041.jpg`, area: '1 / 3 / 2 / 4' },
  { src: `${BASE}Jardin/1jardin.jpg`, area: '1 / 4 / 3 / 5' },
  { src: `${BASE}Jardin/IMG_0035.jpg`, area: '2 / 3 / 3 / 4' },
  { src: `${BASE}Jardin/2jardin.jpg`, area: '1 / 5 / 3 / 6' },
  { src: `${BASE}Jardin/f6fb3cd0-582d-48af-81cb-e84ce79e64a5.png`, area: '3 / 1 / 4 / 4' },
  { src: `${BASE}Jardin/157949AC-2F06-4A32-ACCE-4DD9D0248797%202.JPG`, area: '3 / 4 / 4 / 6' },
]

function JardinGallery() {
  return (
    <div className="mondrian-gallery" style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
      {MONDRIAN_PHOTOS.map((photo, i) => (
        <div
          key={photo.src}
          style={{
            gridArea: photo.area,
            overflow: 'hidden',
            minHeight: 0,
            borderRadius: 'var(--radius-sm)',
          }}
        >
          <img
            src={photo.src}
            alt={`Jardin Casa com Calma ${i + 1}`}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default function Maison({ t }) {
  const m = t.maison

  return (
    <section id="villa" style={{ backgroundColor: '#f6f4d2' }}>

      {/* ─── Intro: texte + image ─── */}
      <div className="section-container maison-section-pad maison-intro-grid">
        {/* Texte */}
        <div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#a08060',
            marginBottom: 24,
          }}>
            {m.sectionLabel}
          </p>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 3vw, 46px)',
            fontWeight: 600,
            lineHeight: 1.2,
            color: '#a44a3f',
            marginBottom: 32,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}>
            {m.headline}
          </h2>

          <div style={{
            width: 48,
            height: 1,
            backgroundColor: '#f19c79',
            marginBottom: 32,
          }} />

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            fontWeight: 300,
            lineHeight: 1.85,
            color: '#7a6040',
            marginBottom: 24,
          }}>
            {m.description1}
          </p>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            fontWeight: 300,
            lineHeight: 1.85,
            color: '#7a6040',
          }}>
            {m.description2}
          </p>
        </div>

        {/* Image */}
        <div className="maison-intro-image" style={{ minHeight: 280, overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
          <img
            src={`${BASE}IMG_2650.jpeg`}
            alt="Casa com Calma — La maison"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      </div>

      {/* ─── Galerie photos ─── */}
      <div className="section-container maison-gallery-margin">
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#a08060',
          marginBottom: 32,
        }}>
          {m.galleryLabel}
        </p>
        <div className="gallery-placeholder-grid">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="gallery-placeholder-cell"
              style={{
                backgroundColor: 'rgba(164,74,63,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px dashed rgba(164,74,63,0.18)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(122,96,64,0.4)',
              }}>
                {m.galleryPlaceholder}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Jardin, piscine & verger ─── */}
      <div className="maison-garden-section" style={{ backgroundColor: '#cbdfbd', borderRadius: 'var(--radius-xl)' }}>
        <div className="section-container">

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#7a6040',
            marginBottom: 48,
          }}>
            {m.gardenSectionLabel}
          </p>

          <div className="maison-garden-grid">
            {/* Colonne gauche : titre + texte 1 */}
            <div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 3vw, 46px)',
                fontWeight: 600,
                lineHeight: 1.2,
                color: '#a44a3f',
                marginBottom: 32,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}>
                {m.gardenHeadline}
              </h2>

              <div style={{
                width: 48,
                height: 1,
                backgroundColor: '#f19c79',
                marginBottom: 32,
              }} />

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.85,
                color: '#5a4030',
              }}>
                {m.gardenDescription1}
              </p>
            </div>

            {/* Colonne droite : piscine, puis texte 2 */}
            <div className="garden-right-col">
              <div className="garden-photo-wrap" style={{ marginBottom: 32, overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
                <img
                  src={jardinPhotoTexte}
                  alt="Casa com Calma — La piscine"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.85,
                color: '#5a4030',
              }}>
                {m.gardenDescription2}
              </p>
            </div>
          </div>

          <JardinGallery />

        </div>
      </div>

    </section>
  )
}
