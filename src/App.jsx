import { useState } from 'react'
import { translations } from './i18n/translations'
import Navbar from './components/Navbar'
import StaggeredMenu from './components/StaggeredMenu'
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

  const menuItems = [
    { label: t.nav.villa, ariaLabel: t.nav.villa, link: '#villa' },
    { label: t.nav.region, ariaLabel: t.nav.region, link: '#region' },
    { label: t.nav.activities, ariaLabel: t.nav.activities, link: '#activities' },
    { label: t.nav.gastronomy, ariaLabel: t.nav.gastronomy, link: '#gastronomy' },
    { label: t.nav.towns, ariaLabel: t.nav.towns, link: '#towns' },
    { label: t.nav.book, ariaLabel: t.nav.book, link: '#book' },
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f6f4d2' }}>
      <Navbar t={t} lang={lang} setLang={setLang} />
      <div className="staggered-menu-mobile-only">
        <StaggeredMenu
          position="right"
          items={menuItems}
          menuLabel={t.nav.menu}
          closeLabel={t.nav.close}
          displaySocials={false}
          displayItemNumbering={true}
          colors={['#cbdfbd', '#f6f4d2', '#a44a3f']}
          logoText="Casa com Calma"
          menuButtonColor="#a44a3f"
          accentColor="#a44a3f"
          isFixed={true}
          closeOnClickAway={true}
          langItems={[['fr', 'FR'], ['en', 'EN'], ['pt', 'PT']]}
          lang={lang}
          setLang={setLang}
        />
      </div>
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
