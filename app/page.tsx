import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BrandIntro } from "@/components/brand-intro"
import { FeaturedProducts } from "@/components/featured-products"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BrandIntro />
        <FeaturedProducts />
      </main>
      <Footer />
    </>
  )
}
