const BASE = import.meta.env.BASE_URL
const jardinPhotoTexte = `${BASE}Jardin/Piscine.png`

// Toutes les photos maison (Masonry — sans titres par espace)
// height : hauteur relative pour l’effet masonry (variations visuelles)
const MAISON_PHOTOS = [
  { rel: 'ALFARROBA/QUARTO_SALA/WhatsApp Image 2025-02-22 at 20.42.24.jpeg', height: 380 },
  { rel: 'ALFARROBA/QUARTO_SALA/WhatsApp Image 2025-02-22 at 20.42.25.jpeg', height: 320 },
  { rel: 'ALFARROBA/QUARTO_SALA/WhatsApp Image 2025-02-22 at 21.09.25 (8).jpeg', height: 420 },
  { rel: 'ALFARROBA/WC/WhatsApp Image 2025-02-22 at 20.42.27.jpeg', height: 360 },
  { rel: 'CCCALMA/COZINHA/WhatsApp Image 2025-02-22 at 20.42.29 (3).jpeg', height: 340 },
  { rel: 'CCCALMA/COZINHA/WhatsApp Image 2025-02-22 at 21.12.03 (3).jpeg', height: 400 },
  { rel: 'CCCALMA/QUARTO/WhatsApp Image 2025-02-22 at 21.09.23.jpeg', height: 300 },
  { rel: 'CCCALMA/WCS/WC_SOCIAL.jpeg', height: 360 },
  { rel: 'TANGERINA/QUARTO/WhatsApp Image 2025-02-22 at 21.12.04.jpeg', height: 380 },
  { rel: 'TANGERINA/QUARTO/WhatsApp Image 2025-02-22 at 21.12.06 (1).jpeg', height: 320 },
  { rel: 'TANGERINA/WC/WhatsApp Image 2025-02-22 at 21.12.05 (1).jpeg', height: 400 },
  { rel: 'EXTERIOR/WhatsApp Image 2025-02-22 at 21.09.24 (9).jpeg', height: 440 },
  { rel: 'EXTERIOR/WhatsApp Image 2025-02-22 at 21.15.37 (7).jpeg', height: 350 },
  { rel: 'EXTERIOR/WhatsApp Image 2025-02-22 at 21.12.02 (2).jpeg', height: 380 },
  { rel: 'EXTERIOR/WhatsApp Image 2025-02-22 at 20.42.28 (10).jpeg', height: 340 },
]
import Masonry from './Masonry'

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

      {/* ─── Galerie photos Masonry (sans titres) ─── */}
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
        <Masonry
          items={MAISON_PHOTOS.map((p, i) => ({
            id: `maison-${i}`,
            img: `${BASE}${p.rel.split('/').map(encodeURIComponent).join('/')}`,
            height: p.height,
          }))}
          stagger={0.04}
          scaleOnHover
          hoverScale={0.98}
          blurToFocus
          colorShiftOnHover={false}
          clickable={false}
        />
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
