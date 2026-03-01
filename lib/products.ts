export interface Product {
  id: string
  name: string
  price: number
  shortDescription: string
  fullDescription: string
  category: "rings" | "necklaces" | "bracelets" | "earrings" | "brooches" | "watches" | "anklets" | "tiaras"
  image: string
  material: string
  stone: string
  weight: string
  craftsmanship: string
  featured?: boolean
}

export const products: Product[] = [
  {
    id: "eternal-diamond-ring",
    name: "Eternal Diamond Ring",
    price: 12500,
    shortDescription: "An 18K gold solitaire ring with a brilliant-cut diamond centerpiece.",
    fullDescription: "The Eternal Diamond Ring is a testament to timeless love and enduring elegance. Crafted from solid 18-karat yellow gold, its band is polished to a mirror finish that catches the light with every movement. At its heart sits a GIA-certified 1.5-carat brilliant-cut diamond, hand-selected for its exceptional clarity and fire. The prong setting lifts the stone above the band, allowing light to enter from every angle and unleash a mesmerizing display of brilliance. Each ring is individually numbered and comes with a certificate of authenticity from our master jewellers in Paris.",
    category: "rings",
    image: "/images/eternal-diamond-ring.jpg",
    material: "18K Yellow Gold",
    stone: "1.5ct GIA Brilliant-Cut Diamond (VS1, F Color)",
    weight: "5.2g",
    craftsmanship: "Hand-set by our master artisans in the Aurelie Paris atelier. The prong setting is individually calibrated to maximize light performance, with each facet of the diamond aligned to our exacting standards.",
    featured: true,
  },
  {
    id: "celestial-pendant",
    name: "Celestial Pendant Necklace",
    price: 8900,
    shortDescription: "A delicate gold chain bearing a star-inspired pendant with pavé diamonds.",
    fullDescription: "Inspired by the night sky over the French Riviera, the Celestial Pendant is a piece that captures the wonder of starlight in precious metal and stone. The pendant itself is a sculptural interpretation of a six-pointed star, rendered in 18-karat rose gold and encrusted with 42 pavé-set round diamonds totaling 0.8 carats. Suspended from an adjustable 16-to-18-inch cable chain, it sits gracefully at the collarbone. The reverse of the pendant features our signature Aurelie hallmark, a discreet mark of authenticity and artistry.",
    category: "necklaces",
    image: "/images/celestial-pendant.jpg",
    material: "18K Rose Gold",
    stone: "0.8ct Total Pavé Diamonds (VS2, G Color)",
    weight: "8.1g",
    craftsmanship: "Each of the 42 diamonds is set by hand under 10x magnification. The star form is cast using the lost-wax method, then hand-finished with a satin-brushed texture for a soft, luminous glow.",
    featured: true,
  },
  {
    id: "serpentine-bracelet",
    name: "Serpentine Cuff Bracelet",
    price: 15800,
    shortDescription: "A sculptural gold cuff inspired by Art Deco serpent motifs.",
    fullDescription: "The Serpentine Cuff is where bold design meets uncompromising luxury. Drawing on the sinuous forms of Art Deco jewellery, this bracelet wraps the wrist in a fluid, scale-textured band of 18-karat white gold. The serpent's head is adorned with two cabochon rubies for eyes and a micro-pavé diamond crown of 28 stones. The interior is lined with a comfort-fit curve, ensuring the piece sits securely without any sharp edges. This is a statement piece, designed for those who lead, not follow.",
    category: "bracelets",
    image: "/images/serpentine-bracelet.jpg",
    material: "18K White Gold",
    stone: "2 Cabochon Rubies, 28 Micro-Pavé Diamonds (0.6ct Total)",
    weight: "34.7g",
    craftsmanship: "The scale texture is hand-engraved over 40 hours by a single artisan. Each scale is individually shaped and polished, creating a tactile surface that shimmers with organic movement.",
    featured: true,
  },
  {
    id: "sapphire-earrings",
    name: "Sapphire Drop Earrings",
    price: 9400,
    shortDescription: "Elegant drop earrings featuring pear-cut Ceylon sapphires and diamond halos.",
    fullDescription: "These exquisite drop earrings are a celebration of colour and light. Each earring features a 2-carat pear-shaped Ceylon sapphire, prized for its vivid cornflower blue saturation, encircled by a halo of 18 round brilliant diamonds. The drops are suspended from a diamond-studded post and lever-back closure, creating a graceful 1.5-inch cascade of brilliance. The sapphires are sourced from our exclusive partnership with a heritage mine in Sri Lanka, where gemstones have been extracted with care for over two centuries.",
    category: "earrings",
    image: "/images/sapphire-earrings.jpg",
    material: "18K White Gold",
    stone: "2x 2ct Pear-Cut Ceylon Sapphires, 36 Round Diamonds (1.2ct Total)",
    weight: "7.6g (pair)",
    craftsmanship: "The halo setting requires precision placement of each diamond at a calculated angle to reflect maximum light toward the central sapphire, amplifying its natural colour.",
    featured: true,
  },
  {
    id: "pearl-tiara",
    name: "Lumière Pearl Tiara",
    price: 28500,
    shortDescription: "A bridal tiara woven with South Sea pearls and diamond flourishes.",
    fullDescription: "The Lumière Tiara is the crown jewel of the Aurelie bridal collection. Composed of eleven South Sea pearls ranging from 8mm to 12mm, each selected for its lustrous orient and perfectly round shape, the tiara is set into a platinum wireframe adorned with 96 round-brilliant diamonds. The design evokes a garland of light, with pearls nestled among diamond-set leaves and tendrils. It is presented in a bespoke velvet-lined mahogany case and includes a complimentary fitting session at our Paris salon.",
    category: "tiaras",
    image: "/images/pearl-tiara.jpg",
    material: "Platinum 950",
    stone: "11 South Sea Pearls (8-12mm), 96 Round Diamonds (3.4ct Total)",
    weight: "42.3g",
    craftsmanship: "The wireframe is shaped entirely by hand, bent and soldered in over 120 individual connections. Each pearl is drilled and mounted on a custom pin, allowing subtle movement that mimics the natural sway of flowers.",
  },
  {
    id: "emerald-brooch",
    name: "Verdana Emerald Brooch",
    price: 19200,
    shortDescription: "A vintage-inspired brooch featuring a Colombian emerald and filigree gold work.",
    fullDescription: "The Verdana Brooch is a masterwork of old-world jewellery craft, reimagined for today. At its centre rests a 3.8-carat Colombian emerald, selected for its deep, saturated green hue and exceptional transparency. Surrounding the emerald is an intricate openwork frame of 18-karat yellow gold filigree, set with 54 round diamonds and 8 marquise-cut diamonds. The pin mechanism is crafted with a dual-lock safety clasp, ensuring the piece stays securely in place. This brooch was designed as a tribute to the gilded age of European jewellery houses.",
    category: "brooches",
    image: "/images/emerald-brooch.jpg",
    material: "18K Yellow Gold",
    stone: "3.8ct Colombian Emerald, 54 Round + 8 Marquise Diamonds (2.1ct Total)",
    weight: "18.9g",
    craftsmanship: "The filigree is made from drawn gold wire, twisted and soldered into over 200 individual scroll and leaf forms. This technique, nearly extinct in modern jewellery, is preserved by only a handful of artisans worldwide.",
  },
  {
    id: "diamond-watch",
    name: "Aurelie Diamant Timepiece",
    price: 42000,
    shortDescription: "A Swiss-made gold watch with diamond-set bezel and mother-of-pearl dial.",
    fullDescription: "The Aurelie Diamant Timepiece is where haute horlogerie meets haute joaillerie. Powered by a Swiss automatic movement with 42 hours of power reserve, the watch is housed in a 36mm case of 18-karat rose gold. The bezel is set with 48 round-cut diamonds in a channel setting, while the mother-of-pearl dial features hand-applied rose gold indices and dauphine hands. The crown is set with a single cabochon sapphire. Water-resistant to 30 metres, it comes on an alligator strap with a gold deployant clasp.",
    category: "watches",
    image: "/images/diamond-watch.jpg",
    material: "18K Rose Gold Case, Alligator Strap",
    stone: "48 Channel-Set Diamonds (1.8ct Total), Cabochon Sapphire Crown",
    weight: "62g (with strap)",
    craftsmanship: "The mother-of-pearl dial is hand-selected and individually cut to ensure each timepiece has a unique play of iridescent colour. The diamond bezel is set using a proprietary channel technique that eliminates visible metal between stones.",
  },
  {
    id: "gold-anklet",
    name: "Riviera Gold Anklet",
    price: 3200,
    shortDescription: "A delicate gold chain anklet with miniature charm pendants.",
    fullDescription: "The Riviera Anklet captures the effortless elegance of a Mediterranean summer. Crafted from a fine 14-karat yellow gold cable chain, it features five miniature charms: a crescent moon, a starfish, a shell, an evil eye, and the Aurelie monogram. Each charm is no more than 6mm in size, cast in solid gold and finished with a high polish. The lobster clasp includes a 2-inch extension chain for an adjustable fit from 9 to 11 inches. Lightweight and refined, it is designed to be worn every day without ever being taken off.",
    category: "anklets",
    image: "/images/gold-anklet.jpg",
    material: "14K Yellow Gold",
    stone: "None",
    weight: "3.1g",
    craftsmanship: "Each charm is individually cast using micro-casting technology, then hand-polished and soldered to the chain at precise intervals. The chain links are calibrated to 1.2mm for an ultra-delicate drape.",
  },
]

export const categories = [
  { value: "all", label: "All Collections" },
  { value: "rings", label: "Rings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "bracelets", label: "Bracelets" },
  { value: "earrings", label: "Earrings" },
  { value: "brooches", label: "Brooches" },
  { value: "watches", label: "Watches" },
  { value: "anklets", label: "Anklets" },
  { value: "tiaras", label: "Tiaras" },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price)
}
