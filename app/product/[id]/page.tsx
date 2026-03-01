import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getProductById, formatPrice, products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { ArrowLeft, Diamond, Gem, Scale, Hammer } from "lucide-react"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)
  if (!product) {
    return { title: "Product Not Found | AURELIE" }
  }
  return {
    title: `${product.name} | AURELIE Fine Jewellery`,
    description: product.shortDescription,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3)

  // If no same-category items, show other featured items
  const relatedItems =
    related.length > 0
      ? related
      : products.filter((p) => p.id !== product.id && p.featured).slice(0, 3)

  const specs = [
    { icon: Diamond, label: "Material", value: product.material },
    { icon: Gem, label: "Stone", value: product.stone },
    { icon: Scale, label: "Weight", value: product.weight },
    { icon: Hammer, label: "Craftsmanship", value: product.craftsmanship },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to Collections
          </Link>
        </div>

        {/* Product Hero */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center py-4 lg:py-8">
              <p className="text-xs tracking-[0.25em] uppercase text-accent mb-3">
                {product.category}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
                {product.name}
              </h1>
              <p className="mt-4 font-serif text-2xl text-accent">
                {formatPrice(product.price)}
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-border" />

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-border" />

              {/* Specifications */}
              <h2 className="text-xs tracking-[0.25em] uppercase text-foreground mb-6">
                Specifications
              </h2>
              <div className="flex flex-col gap-6">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex gap-4">
                    <div className="flex-shrink-0 flex items-start justify-center w-8 pt-0.5">
                      <spec.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs tracking-[0.15em] uppercase text-foreground">
                        {spec.label}
                      </span>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {spec.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <button className="flex-1 bg-foreground text-primary-foreground px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-opacity duration-300 hover:opacity-90 cursor-pointer">
                  Inquire About This Piece
                </button>
                <button className="flex-1 border border-foreground text-foreground px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-foreground hover:text-primary-foreground cursor-pointer">
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedItems.length > 0 && (
          <section className="bg-secondary py-24 px-6">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col items-center text-center mb-12">
                <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">
                  You May Also Admire
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                  Related Pieces
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {relatedItems.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
