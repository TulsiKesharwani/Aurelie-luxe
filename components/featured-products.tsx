import Link from "next/link"
import { getFeaturedProducts } from "@/lib/products"
import { ProductCard } from "./product-card"
import { ArrowRight } from "lucide-react"

export function FeaturedProducts() {
  const featured = getFeaturedProducts()

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">
            Curated Selection
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
            Featured Pieces
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            A hand-picked selection of our most distinguished creations, each embodying the pinnacle of Aurelie craftsmanship.
          </p>
        </div>

        {/* Featured Grid - 2 cols on tablet+ with first item spanning full height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Large featured item */}
          {featured[0] && (
            <div className="md:row-span-2">
              <ProductCard product={featured[0]} featured />
            </div>
          )}

          {/* Smaller featured items stacked */}
          {featured.slice(1).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/collections"
            className="inline-flex items-center gap-3 border border-foreground px-8 py-3.5 text-xs tracking-[0.2em] uppercase text-foreground transition-all duration-300 hover:bg-foreground hover:text-primary-foreground"
          >
            View All Collections
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
