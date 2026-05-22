import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Benefits from "@/components/Benefits"
import Pricing from "@/components/Pricing"
import Differentials from "@/components/Differentials"
import Process from "@/components/Process"
import BeforeAfter from "@/components/BeforeAfter"
import Testimonials from "@/components/Testimonials"
import QuoteForm from "@/components/QuoteForm"
import Regions from "@/components/Regions"
import FAQ from "@/components/FAQ"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import MobileCtaBar from "@/components/MobileCtaBar"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Benefits />
      <Pricing />
      <Differentials />
      <Process />
      <BeforeAfter />
      <Testimonials />
      <QuoteForm />
      <Regions />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
      <MobileCtaBar />
    </main>
  )
}
