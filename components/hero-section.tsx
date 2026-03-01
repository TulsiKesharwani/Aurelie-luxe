import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-jewelry.jpg"
          alt="Luxury jewelry showcase"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.35em] uppercase text-primary-foreground/70 mb-6">
          Haute Joaillerie Since 1897
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight text-balance">
          Where Timeless Elegance Meets Exquisite Design
        </h1>
        <p className="mt-6 text-sm md:text-base text-primary-foreground/70 leading-relaxed max-w-lg">
          Discover handcrafted fine jewellery born from over a century of Parisian artistry and uncompromising dedication to beauty.
        </p>
        <Link
          href="/collections"
          className="mt-10 inline-flex items-center gap-3 border border-primary-foreground/30 px-8 py-3.5 text-xs tracking-[0.2em] uppercase text-primary-foreground transition-all duration-300 hover:bg-primary-foreground hover:text-foreground"
        >
          Explore the Collection
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/40">
          Scroll
        </span>
        <div className="h-8 w-px bg-primary-foreground/30 animate-pulse" />
      </div>
    </section>
  )
}
