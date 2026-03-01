export function BrandIntro() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs tracking-[0.35em] uppercase text-accent mb-6">
          The Aurelie Legacy
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
          A Heritage of Radiance
        </h2>
        <div className="mt-8 flex flex-col gap-4">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Founded in 1897 on Place Vendome, Aurelie has spent over a century perfecting the dialogue between precious metals and rare gemstones. Our master artisans draw upon techniques passed down through five generations, creating pieces that transcend fashion and become heirlooms.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Every stone is hand-selected, every setting meticulously calibrated. We do not manufacture jewellery. We compose it.
          </p>
        </div>
        <div className="mt-12 flex items-center justify-center gap-12 md:gap-16">
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-3xl md:text-4xl text-foreground">127</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Years of Heritage</span>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-3xl md:text-4xl text-foreground">48</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Master Artisans</span>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-3xl md:text-4xl text-foreground">1</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Paris Atelier</span>
          </div>
        </div>
      </div>
    </section>
  )
}
