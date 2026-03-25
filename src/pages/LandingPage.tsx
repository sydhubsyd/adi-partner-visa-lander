import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import TrustBar from '../components/TrustBar'
import Benefits from '../components/Benefits'
import ProcessSteps from '../components/ProcessSteps'
import EliSection from '../components/EliSection'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import MobileStickyBar from '../components/MobileStickyBar'

export default function LandingPage() {
  return (
    <div className="min-h-screen pb-16 lg:pb-0">
      <Header />
      <HeroSection />
      <TrustBar />
      <Benefits />
      <ProcessSteps />
      <EliSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <MobileStickyBar />
    </div>
  )
}
