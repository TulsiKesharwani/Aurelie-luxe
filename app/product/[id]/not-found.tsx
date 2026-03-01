import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function ProductNotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen flex items-center justify-center px-6">
        <div className="flex flex-col items-center text-center max-w-md">
          <p className="text-xs tracking-[0.35em] uppercase text-accent mb-6">
            Piece Not Found
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            This jewel eludes us
          </h1>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            The piece you are looking for does not exist in our collection, or may have been moved. Please explore our full catalogue to discover something equally extraordinary.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/collections"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-primary-foreground px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-opacity duration-300 hover:opacity-90"
            >
              Browse Collections
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border border-foreground text-foreground px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-foreground hover:text-primary-foreground"
            >
              <ArrowLeft className="h-3 w-3" />
              Return Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
