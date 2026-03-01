# AURELIE — Luxury Fine Jewellery

A frontend-only product showcase website for **AURELIE**, a fictional luxury fine jewellery house rooted in Parisian haute joaillerie tradition. Built as a demonstration of premium UI craftsmanship, responsive design fluency, and clean component architecture.

**Live Preview:** Run locally (see [Setup](#setup-instructions) below)

---

## Brand Concept

AURELIE is a heritage jewellery maison founded in 1897 on Place Vendome, Paris. The brand identity draws from the visual language of real luxury houses — Cartier, Van Cleef & Arpels, Boucheron — distilled into a restrained, editorial aesthetic.

The brand copy is intentionally specific: "We do not manufacture jewellery. We compose it." Every detail, from the tracked uppercase labels to the serif headlines, reinforces the idea of jewellery as art, not commerce. The tone is quiet confidence — no exclamation marks, no aggressive CTAs, no visual clutter.

---

## Tech Stack

| Technology | Version | Role |
|---|---|---|
| **Next.js** | 16.1.6 | App Router, SSG, image optimization, file-based routing |
| **React** | 19.2.4 | Component UI library |
| **TypeScript** | 5.7.3 | Type safety across all components and data |
| **Tailwind CSS** | 4.2.0 | Utility-first styling with CSS variable theming |
| **shadcn/ui** | — | Pre-built accessible UI primitives (Radix UI base) |
| **Lucide React** | 0.564.0 | Consistent icon set |

### Why This Stack

- **Next.js App Router** — Enables static generation (`generateStaticParams`) for product pages, meaning every product URL is pre-rendered at build time. Zero client-side data fetching, instant page loads.
- **Tailwind CSS 4** — CSS variables defined once in `globals.css`, consumed everywhere via Tailwind utilities. No scattered hex values, no CSS file sprawl.
- **TypeScript** — Every product field, every component prop is typed. The `Product` interface enforces data shape at compile time — missing a `craftsmanship` field on a new product triggers an error before it ever reaches the browser.
- **No state library** — The app has two pieces of interactive state (category filter, sort order), both local to `CollectionGrid`. Adding Redux or Zustand for this would be over-engineering.

---

## Setup Instructions

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 9+ (ships with Node.js)

### Install and Run

```bash
# Clone the repository
git clone <repository-url>
cd TulsiAssignment

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at **http://localhost:3000**.

### Production Build

```bash
# Build for production
npm run build

# Start the production server
npm start
```

### Lint

```bash
npm run lint
```

---

## Pages & Features

### 1. Landing Page (`/`)

| Section | Implementation |
|---|---|
| **Hero** | Full-viewport background image with dark overlay, serif headline, tracked uppercase subtitle, single CTA linking to `/collections`. Scroll indicator pulses at bottom on desktop. |
| **Brand Intro** | Centered editorial block with brand history. Three statistics (127 years, 48 artisans, 1 atelier) displayed with vertical dividers. |
| **Featured Products** | 4 hand-picked pieces in an asymmetric grid — first item spans two rows on desktop for visual hierarchy. Uses the same `ProductCard` component as the listing page, with a `featured` prop that switches to a taller `3:4` aspect ratio. |

### 2. Product Listing (`/collections`)

- **Responsive grid:** 4 columns on xl, 3 on lg, 2 on sm, 1 on mobile
- **Category filters:** Pill-style buttons for 8 categories + "All Collections". Active state uses inverted colors (dark fill, light text)
- **Sort dropdown:** Custom-built (no library) with click-outside detection via `useRef`. Options: Featured, Price Low/High, Alphabetical
- **Result count:** Dynamic "X pieces" label updates with filter/sort
- **Empty state:** Graceful message with a "View All" reset button when no products match the selected category
- **Memoization:** `useMemo` on the filtered/sorted product array prevents unnecessary re-computation on unrelated re-renders

### 3. Product Detail (`/product/[id]`)

- **Layout:** Large image (3:4 aspect) on the left, product info on the right. Stacks vertically on mobile.
- **Content blocks:** Category label, product name (serif), price (gold accent), full description, and a complete specifications panel
- **Specifications:** Four rows with Lucide icons — Material, Stone, Weight, Craftsmanship — each with a label and value
- **CTAs:** "Inquire About This Piece" (filled) and "Book an Appointment" (outlined) — side-by-side on desktop, stacked on mobile
- **Related products:** Shows items from the same category; falls back to featured items if no same-category matches exist
- **SEO:** `generateMetadata()` creates unique `<title>` and `<meta description>` for each product
- **SSG:** `generateStaticParams()` pre-renders all 8 product pages at build time

### 4. 404 — Invalid Product ID (`/product/invalid-id`)

- Triggers Next.js `notFound()` which renders a custom `not-found.tsx`
- On-brand messaging: "This jewel eludes us" with navigation back to collections or home
- Full layout preserved (navbar + footer) — not a blank page or generic error

---

## Design Decisions

### Typography

| Role | Font | Rationale |
|---|---|---|
| **Headings** | Playfair Display (serif) | High-contrast serif with elegant ball terminals. Widely used in luxury editorial design. Communicates heritage and refinement without being decorative. |
| **Body / UI** | DM Sans (sans-serif) | Geometric sans-serif with open apertures. Clean and modern, pairs well with Playfair's traditional character. Highly legible at small sizes for descriptions and UI labels. |

**Type scale discipline:**
- Hero headline: `text-4xl` → `text-6xl` → `text-7xl` (responsive)
- Section headings: `text-3xl` → `text-4xl`
- Product names: `text-base` (cards), `text-3xl` → `text-5xl` (detail)
- Body text: `text-sm` → `text-base`
- Labels/captions: `text-xs` with `tracking-[0.15em]` to `tracking-[0.35em]` uppercase
- Fonts loaded via `next/font/google` with `display: 'swap'` — no layout shift, no FOUT

### Color Palette

Four colors, defined as CSS variables in `globals.css`, referenced everywhere via Tailwind:

| Token | Hex | Usage |
|---|---|---|
| **Background** | `#FAF8F5` | Warm off-white. Softer than pure white — avoids the clinical feel of `#FFFFFF` on large surfaces. |
| **Foreground** | `#1A1A1A` | Near-black. Used for text, inverted buttons, and the footer. Slightly warmer than pure black for better readability. |
| **Accent** | `#C9A96E` | Muted gold. The singular brand color — used for active states, price text, spec icons, category labels, focus rings, and text selection. Restrained usage keeps it impactful. |
| **Muted** | `#6B6561` | Warm taupe. Secondary text color for descriptions, captions, and inactive navigation. |

Supporting tokens:
- `--border: #E5E0D8` — Subtle warm border, used for dividers and card edges
- `--secondary: #F0EDE8` — Light beige, used as section backgrounds (featured products, related items) to create visual rhythm without harsh contrast
- `--destructive: #B91C1C` — Reserved for error states only

**No new colors are introduced anywhere in the codebase.** Every color references a CSS variable.

Text selection is styled gold-on-dark (`::selection`) for brand consistency even in incidental interactions.

### Spacing System

Tailwind's default spacing scale (multiples of 4px) is used consistently:

- **Section padding:** `py-24 md:py-32` (96px → 128px) — generous vertical breathing room between sections
- **Container:** `max-w-7xl` with `px-6 lg:px-8` horizontal padding
- **Grid gaps:** `gap-6 lg:gap-8` (24px → 32px)
- **Card internal:** `pt-4 pb-2` with `gap-1.5` between elements
- **Typography spacing:** `mb-4`, `mb-6`, `mt-4`, `mt-8` follow a consistent rhythm

No arbitrary pixel values. No `margin-top: 13px` situations.

### Layout Logic

**Landing page** uses a three-act structure:
1. **Hero** — Full viewport, dark, immersive. Establishes mood.
2. **Brand Intro** — White background, centered text. Breathing room after the visual intensity of the hero.
3. **Featured Products** — Light beige (`bg-secondary`) background. The color shift signals a new section without needing a border or divider.

**Collections page** uses a single-column layout with a centered header → filters → grid flow. The grid switches from 4 → 3 → 2 → 1 columns as the viewport narrows, using Tailwind's responsive prefixes (`xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2`).

**Product detail** follows the standard luxury e-commerce pattern: large image left, info right (`lg:grid-cols-2`). On mobile, the image takes full width and the info stacks below — no horizontal scrolling, no cramped layouts.

### Motion & Interaction

All transitions use `duration-300` or `duration-500` with `ease-out` — no bounce, no spring, no overshoot.

| Element | Behavior |
|---|---|
| **Product card image** | `scale-105` on hover over 700ms — slow, cinematic zoom |
| **Product card overlay** | "View Details" bar slides up from bottom (`translate-y-full` → `translate-y-0`) on hover |
| **Product card name** | Color shifts from foreground to gold accent on hover |
| **Navigation links** | Color transition on hover, gold highlight on active route |
| **Navbar** | Gains `shadow-sm` and increased background opacity on scroll (detected via `useEffect` with passive scroll listener) |
| **CTA buttons** | Border-to-fill inversion on hover (outlined → filled, filled → slight opacity reduction) |
| **Mobile menu** | Height and opacity transition (`max-h-0 opacity-0` → `max-h-60 opacity-100`) — no abrupt show/hide |
| **Sort dropdown chevron** | 180-degree rotation when open |
| **Filter pills** | Background/text color inversion on active state |
| **Images** | Global `opacity 0.3s ease` transition for smooth loading |

### Imagery

All product images are stored locally in `/public/images/` as JPGs. Consistent warm-toned, studio-lit aesthetic — no mixed styles or jarring color temperatures. Images use `object-cover` with fixed aspect ratios (`aspect-square` for grid cards, `aspect-[3/4]` for featured cards and product detail) to prevent stretching regardless of source dimensions.

Next.js `<Image>` component handles:
- Lazy loading (all images except the hero, which has `priority`)
- Responsive `sizes` attribute for correct image selection
- `fill` mode with parent aspect ratio control

---

## Component Architecture

```
app/
├── layout.tsx          ← Root layout (fonts, metadata, analytics)
├── page.tsx            ← Landing: composes Hero + BrandIntro + Featured
├── collections/
│   └── page.tsx        ← Collections: composes header + CollectionGrid
└── product/[id]/
    ├── page.tsx        ← Detail: image + info + specs + related
    └── not-found.tsx   ← 404 for invalid product IDs

components/
├── navbar.tsx          ← Fixed header, scroll-aware, responsive mobile menu
├── hero-section.tsx    ← Full-viewport hero with CTA
├── brand-intro.tsx     ← Heritage text block with statistics
├── featured-products.tsx ← Asymmetric grid of featured items
├── collection-grid.tsx ← Filter + sort + product grid (client component)
├── product-card.tsx    ← Reusable card (used in 3 contexts)
└── footer.tsx          ← Dark footer with brand info and contact

lib/
├── products.ts         ← Product data, types, utility functions
└── utils.ts            ← cn() class merge utility
```

### Reusability

`ProductCard` is the only product display component. It renders in three contexts:
1. **Featured grid** (landing page) — with `featured` prop for taller aspect ratio
2. **Collection grid** (listing page) — standard square aspect ratio
3. **Related products** (detail page) — same as collection grid

No copy-pasted card markup anywhere. One component, one source of truth.

### Server vs Client Components

| Component | Rendering | Why |
|---|---|---|
| `page.tsx` (all pages) | Server | No interactivity needed at page level. Static content. |
| `Navbar` | Client | Needs `useState` for mobile menu and `useEffect` for scroll detection |
| `CollectionGrid` | Client | Manages filter/sort state with `useState` and `useMemo` |
| `ProductCard` | Server | Pure presentational — receives props, renders markup |
| `HeroSection`, `BrandIntro`, `FeaturedProducts`, `Footer` | Server | No client-side interactivity |

### Data Layer

All product data lives in `lib/products.ts` as a typed array. The `Product` interface enforces every required field:

```typescript
interface Product {
  id: string
  name: string
  price: number
  shortDescription: string
  fullDescription: string
  category: "rings" | "necklaces" | "bracelets" | "earrings" | "brooches" | "watches" | "anklets" | "tiaras"
  image: string
  material: string       // Metal type and purity
  stone: string          // Gemstone details with carats
  weight: string         // Weight in grams
  craftsmanship: string  // Artisan technique details
  featured?: boolean
}
```

Three utility functions keep data access clean:
- `getProductById(id)` — used by the product detail page
- `getFeaturedProducts()` — used by the landing page
- `formatPrice(price)` — `Intl.NumberFormat` for consistent USD formatting

8 products across 8 categories, each with realistic specs (materials, carat weights, artisan details).

---

## Responsive Behavior

| Breakpoint | Viewport | Key Changes |
|---|---|---|
| **Base** | < 640px | Single-column grid, stacked product detail, hamburger menu, full-width images, stacked CTAs |
| **sm** (640px) | Tablets (portrait) | 2-column product grid, side-by-side CTAs |
| **md** (768px) | Tablets (landscape) | Desktop navigation visible, larger typography, 2-column featured grid |
| **lg** (1024px) | Laptops | 3-column product grid, side-by-side product detail layout |
| **xl** (1280px) | Desktops | 4-column product grid, maximum content width (`max-w-7xl`) |

The navbar transitions between a hamburger menu (mobile) and horizontal link bar (desktop) at `md`. The mobile menu animates open/closed with height and opacity transitions rather than an abrupt toggle.

Product detail layout shifts from a vertical stack (image above, info below) on mobile to a horizontal split (`lg:grid-cols-2`) on desktop.

---

## Product Data

| # | Name | Price | Category | Material |
|---|---|---|---|---|
| 1 | Eternal Diamond Ring | $12,500 | Rings | 18K Yellow Gold |
| 2 | Celestial Pendant Necklace | $8,900 | Necklaces | 18K Rose Gold |
| 3 | Serpentine Cuff Bracelet | $15,800 | Bracelets | 18K White Gold |
| 4 | Sapphire Drop Earrings | $9,400 | Earrings | 18K White Gold |
| 5 | Lumiere Pearl Tiara | $28,500 | Tiaras | Platinum 950 |
| 6 | Verdana Emerald Brooch | $19,200 | Brooches | 18K Yellow Gold |
| 7 | Aurelie Diamant Timepiece | $42,000 | Watches | 18K Rose Gold |
| 8 | Riviera Gold Anklet | $3,200 | Anklets | 14K Yellow Gold |

Each product includes complete jewellery-specific specifications: material purity, gemstone details with carat weights and grading, weight in grams, and a detailed craftsmanship note describing the artisan techniques used.

---

## Known Limitations & Trade-offs

| Area | Details |
|---|---|
| **No dark mode** | CSS variables for a dark theme exist in the system but are not toggled. A luxury jewellery site reads best on warm, light backgrounds — dark mode was deprioritized in favor of getting the light theme right. |
| **No add-to-cart** | Intentional. Luxury jewellery at this price point is inquiry-based, not transactional. The CTAs reflect this ("Inquire About This Piece", "Book an Appointment"). |
| **Static data only** | All product data is hardcoded in `lib/products.ts`. No API, no CMS, no database. This is a frontend showcase — the data layer is deliberately simple. |
| **Image optimization disabled** | `next.config.mjs` sets `images.unoptimized: true` for simplified local/static deployment. In production, Next.js image optimization would be re-enabled. |
| **shadcn/ui component count** | The `components/ui/` directory contains ~60 pre-generated shadcn components, many of which are unused by the current pages. In a production codebase, unused components would be pruned. They were scaffolded during initial setup and left in place as they have zero runtime cost (tree-shaken by the bundler). |
| **No animations library** | All motion is CSS-only (Tailwind transitions). Framer Motion or GSAP would enable more sophisticated page transitions and scroll-triggered animations, but were not added to keep the dependency footprint minimal. |

---

## Project Structure Summary

```
TulsiAssignment/
├── app/                        # Next.js App Router
│   ├── globals.css             # CSS variables, base styles
│   ├── layout.tsx              # Root layout (fonts, meta)
│   ├── page.tsx                # Landing page
│   ├── collections/page.tsx    # Product listing
│   └── product/[id]/
│       ├── page.tsx            # Product detail
│       └── not-found.tsx       # 404 for invalid IDs
├── components/
│   ├── navbar.tsx              # Navigation
│   ├── hero-section.tsx        # Hero banner
│   ├── brand-intro.tsx         # Brand heritage
│   ├── featured-products.tsx   # Featured grid
│   ├── collection-grid.tsx     # Filter + sort + grid
│   ├── product-card.tsx        # Reusable product card
│   ├── footer.tsx              # Footer
│   └── ui/                     # shadcn/ui components
├── lib/
│   ├── products.ts             # Data + types + utilities
│   └── utils.ts                # cn() helper
├── public/images/              # Product imagery
├── package.json
├── tsconfig.json
├── next.config.mjs
└── postcss.config.mjs
```

---

Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.
