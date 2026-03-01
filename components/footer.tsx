import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-serif text-2xl tracking-[0.2em]">
              AURELIE
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/60 max-w-xs">
              Handcrafted fine jewellery from our atelier in Paris. Each piece is a testament to timeless elegance and masterful artistry.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs tracking-[0.2em] uppercase text-primary-foreground/40">
              Explore
            </h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/collections"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                Collections
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs tracking-[0.2em] uppercase text-primary-foreground/40">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <p>12 Place Vendome, Paris 75001</p>
              <p>contact@aurelie.com</p>
              <p>+33 1 42 60 00 00</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-primary-foreground/10 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-primary-foreground/40 tracking-wider">
            &copy; {new Date().getFullYear()} AURELIE. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40 tracking-wider">
            Crafted with devotion in Paris
          </p>
        </div>
      </div>
    </footer>
  )
}
