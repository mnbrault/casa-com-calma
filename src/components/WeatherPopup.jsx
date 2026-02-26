import { useState, useEffect } from 'react'

const FUSETA_LAT = 37.05
const FUSETA_LON = -7.74
const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${FUSETA_LAT}&longitude=${FUSETA_LON}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Europe/Lisbon&forecast_days=7`

const WEATHER_LABELS = {
  0: { fr: 'Magnifique', en: 'Beautiful', pt: 'Magnífico' },
  1: { fr: 'Beau temps', en: 'Lovely', pt: 'Bom tempo' },
  2: { fr: 'Agréable', en: 'Pleasant', pt: 'Agradável' },
  3: { fr: 'Doucement nuageux', en: 'Mild', pt: 'Suave' },
  45: { fr: 'Brume douce', en: 'Soft mist', pt: 'Neblina suave' },
  48: { fr: 'Atmosphère douce', en: 'Soft atmosphere', pt: 'Atmosfera suave' },
  51: { fr: 'Rafraîchissant', en: 'Refreshing', pt: 'Refrescante' },
  53: { fr: 'Léger rafraîchissement', en: 'Light refresh', pt: 'Refresco leve' },
  55: { fr: 'Bien arrosé', en: 'Well-watered', pt: 'Bem regado' },
  61: { fr: 'Quelques gouttes', en: 'A few drops', pt: 'Algumas gotas' },
  63: { fr: 'Pluie bienfaisante', en: 'Nourishing rain', pt: 'Chuva benéfica' },
  65: { fr: 'Temps arrosé', en: 'Watered', pt: 'Tempo regado' },
  80: { fr: 'Petites averses', en: 'Brief showers', pt: 'Pancadas breves' },
  81: { fr: 'Averses rafraîchissantes', en: 'Refreshing showers', pt: 'Pancadas refrescantes' },
  82: { fr: 'Bonne pluie', en: 'Good rain', pt: 'Boa chuva' },
}

const getWeatherLabel = (code, lang) => {
  const labels = WEATHER_LABELS[code] || WEATHER_LABELS[3]
  return labels[lang] || labels.fr
}

const formatDay = (dateStr, lang) => {
  const d = new Date(dateStr)
  const options = { weekday: 'short', day: 'numeric', month: 'short' }
  return d.toLocaleDateString(lang === 'fr' ? 'fr-FR' : lang === 'pt' ? 'pt-PT' : 'en-GB', options)
}

export default function WeatherPopup({ t, lang, isOpen, onClose }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!isOpen) return
    const onKey = e => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) return
    setLoading(true)
    setError(null)
    fetch(API_URL)
      .then(res => res.json())
      .then(json => {
        setData(json)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div
        className="weather-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="weather-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="weather-title"
      >
        <div className="weather-popup-header">
          <h2 id="weather-title" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 20,
            fontWeight: 600,
            color: '#a44a3f',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}>
            {t?.weather?.title ?? 'Météo'}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="weather-close"
            aria-label={t?.weather?.close ?? 'Fermer'}
          >
            ×
          </button>
        </div>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 13,
          color: '#7a6040',
          marginBottom: 20,
        }}>
          {t?.weather?.location ?? 'Fuseta — Ria Formosa'}
        </p>

        {loading && (
          <p style={{ fontFamily: 'var(--font-body)', color: '#7a6040', fontSize: 14 }}>
            {t?.weather?.loading ?? 'Chargement...'}
          </p>
        )}

        {error && (
          <p style={{ fontFamily: 'var(--font-body)', color: '#a44a3f', fontSize: 14 }}>
            {t?.weather?.error ?? 'Impossible de charger la météo'}
          </p>
        )}

        {data?.daily && (
          <ul className="weather-list">
            {data.daily.time.map((date, i) => (
              <li key={date} className="weather-day">
                <span className="weather-dayname">{formatDay(date, lang)}</span>
                <span className="weather-desc">
                  {getWeatherLabel(data.daily.weathercode[i], lang)}
                </span>
                <span className="weather-temps">
                  {Math.round(data.daily.temperature_2m_max[i])}° / {Math.round(data.daily.temperature_2m_min[i])}°
                </span>
              </li>
            ))}
          </ul>
        )}

        <p className="weather-attribution">
          <a
            href="https://open-meteo.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 10, color: 'rgba(122,96,64,0.5)', textDecoration: 'none' }}
          >
            open-meteo.com
          </a>
        </p>
      </div>
    </>
  )
}
