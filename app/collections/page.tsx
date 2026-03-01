import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CollectionGrid } from "@/components/collection-grid"

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Page Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">
              Explore
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
              Our Collections
            </h1>
            <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
              Browse our complete catalogue of fine jewellery, from statement pieces to everyday elegance.
            </p>
          </div>

          <CollectionGrid />
        </div>
      </main>
      <Footer />
    </>
  )
}
