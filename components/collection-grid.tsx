"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import { products, categories, type Product } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { ChevronDown } from "lucide-react"

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc"

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "default", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Alphabetical" },
]

export function CollectionGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [sortBy, setSortBy] = useState<SortOption>("default")
  const [sortOpen, setSortOpen] = useState(false)
  const sortRef = useRef<HTMLDivElement>(null)

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setSortOpen(false)
      }
    }
    if (sortOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [sortOpen])

  const filteredAndSorted = useMemo(() => {
    let filtered: Product[] =
      activeCategory === "all"
        ? [...products]
        : products.filter((p) => p.category === activeCategory)

    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    return filtered
  }, [activeCategory, sortBy])

  const currentSort = sortOptions.find((s) => s.value === sortBy)

  return (
    <div>
      {/* Filters and Sort */}
      <div className="flex flex-col gap-6 mb-12">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-300 border ${
                activeCategory === cat.value
                  ? "bg-foreground text-primary-foreground border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sort and Count */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground tracking-wider">
            {filteredAndSorted.length} {filteredAndSorted.length === 1 ? "piece" : "pieces"}
          </p>

          {/* Sort Dropdown */}
          <div className="relative" ref={sortRef}>
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {"Sort: "}{currentSort?.label}
              <ChevronDown
                className={`h-3 w-3 transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`}
              />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 z-20 min-w-[180px] bg-card border border-border shadow-lg">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value)
                      setSortOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2.5 text-xs tracking-wider transition-colors duration-200 ${
                      sortBy === option.value
                        ? "text-accent bg-secondary"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredAndSorted.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredAndSorted.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="font-serif text-xl text-foreground">No pieces found</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try selecting a different category.
          </p>
          <button
            onClick={() => setActiveCategory("all")}
            className="mt-6 border border-foreground px-6 py-2.5 text-xs tracking-[0.15em] uppercase text-foreground transition-all duration-300 hover:bg-foreground hover:text-primary-foreground"
          >
            View All
          </button>
        </div>
      )}
    </div>
  )
}
