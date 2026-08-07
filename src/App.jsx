import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import TrustBar from './sections/TrustBar.jsx'
import About from './sections/About.jsx'
import VisionMission from './sections/VisionMission.jsx'
import Products from './sections/Products.jsx'
import Specifications from './sections/Specifications.jsx'
import Quality from './sections/Quality.jsx'
import Applications from './sections/Applications.jsx'
import Facility from './sections/Facility.jsx'
import Faq from './sections/Faq.jsx'
import Downloads from './sections/Downloads.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-emerald-500 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <About />
        <VisionMission />
        <Products />
        <Specifications />
        <Quality />
        <Applications />
        <Facility />
        <Faq />
        <Downloads />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
