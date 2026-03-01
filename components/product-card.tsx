import Link from "next/link"
import Image from "next/image"
import { type Product, formatPrice } from "@/lib/products"
import { ArrowRight } from "lucide-react"

interface ProductCardProps {
  product: Product
  featured?: boolean
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group flex flex-col"
    >
      <div
        className={`relative overflow-hidden bg-secondary ${
          featured ? "aspect-[3/4]" : "aspect-square"
        }`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes={
            featured
              ? "(max-width: 768px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          }
        />
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />

        {/* View Details overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
          <div className="flex items-center justify-center gap-2 bg-foreground/90 py-3 text-primary-foreground">
            <span className="text-xs tracking-[0.2em] uppercase">View Details</span>
            <ArrowRight className="h-3 w-3" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 pt-4 pb-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-base text-foreground transition-colors duration-300 group-hover:text-accent leading-snug">
            {product.name}
          </h3>
          <span className="text-sm text-accent font-medium whitespace-nowrap">
            {formatPrice(product.price)}
          </span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {product.shortDescription}
        </p>
      </div>
    </Link>
  )
}
