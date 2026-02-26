import { useState } from 'react'
import { translations } from './i18n/translations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Maison from './components/Maison'
import Region from './components/Region'
import Activities from './components/Activities'
import Nature from './components/Nature'
import Gastronomy from './components/Gastronomy'
import Towns from './components/Towns'
import Ferry from './components/Ferry'
import BookingCta from './components/BookingCta'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('fr')
  const t = translations[lang]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f6f4d2' }}>
      <Navbar t={t} />
      <Hero t={t} />
      <Maison t={t} />
      <Region t={t} />
      <Activities t={t} />
      <Nature t={t} />
      <Gastronomy t={t} />
      <Towns t={t} />
      <Ferry t={t} />
      <BookingCta t={t} />
      <Footer t={t} lang={lang} setLang={setLang} />
    </div>
  )
}
