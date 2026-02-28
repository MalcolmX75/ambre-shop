import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/brand";
import { products, categories } from "@/data/products";
import { ButterflyWatermark } from "@/components/Decorative";
import GoldenRose from "@/components/GoldenRose";
import { Parallax, Sparkles, GlowOrbs, FadeInSection } from "@/components/Effects";

export default function Home() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-clip">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-rosewood-pale via-blush/60 to-off-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(225,196,142,0.2)_0%,_transparent_50%)]" />

        {/* Parallax glow orbs — visible parallax effect */}
        <Parallax speed={-0.2} className="absolute inset-0">
          <GlowOrbs />
        </Parallax>

        {/* Sparkles — dense in hero */}
        <Sparkles count={50} />

        {/* Parallax golden roses */}
        <Parallax speed={0.25} className="absolute top-[8%] right-[6%]">
          <GoldenRose className="w-28 h-32 opacity-20 -rotate-12" />
        </Parallax>
        <Parallax speed={-0.2} className="absolute bottom-[12%] left-[3%]">
          <GoldenRose className="w-24 h-28 opacity-15 rotate-12 scale-x-[-1]" />
        </Parallax>
        <Parallax speed={0.15} className="absolute top-[35%] left-[8%]">
          <GoldenRose className="w-20 h-24 opacity-10 -rotate-6" />
        </Parallax>
        <Parallax speed={-0.12} className="absolute top-[25%] right-[18%]">
          <GoldenRose className="w-16 h-20 opacity-[0.08] rotate-[20deg]" />
        </Parallax>
        <Parallax speed={0.18} className="absolute bottom-[25%] right-[10%]">
          <ButterflyWatermark className="w-32 h-32 opacity-[0.06]" />
        </Parallax>

        {/* Hero content with slight parallax */}
        <Parallax speed={0.05} className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="animate-scale-in">
            <div className="relative inline-block mb-8">
              <Image
                src="/images/logo_ambre_shop.png"
                alt={brand.brandName}
                width={140}
                height={140}
                className="rounded-full shadow-2xl shadow-rosewood/10 ring-4 ring-white/50"
                priority
              />
              <div className="absolute -inset-3 rounded-full border border-gold/20 animate-pulse-gold" />
              <div className="absolute -inset-6 rounded-full border border-gold/10 animate-pulse-gold delay-300" />
            </div>
          </div>

          <h1 className="animate-fade-in-up font-serif text-5xl sm:text-6xl lg:text-7xl text-rosewood mb-4 tracking-tight">
            {brand.brandName}
          </h1>

          <div className="animate-fade-in-up delay-100">
            <p className="text-lg sm:text-xl text-rosewood-light mb-2 max-w-xl mx-auto font-light">
              {brand.tagline}
            </p>
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50 animate-shimmer" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
                Cosmétiques Premium
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50 animate-shimmer" />
            </div>
          </div>

          <div className="animate-fade-in-up delay-200 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={brand.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-1"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Commander via WhatsApp
            </a>
            <Link
              href="/facebook"
              className="group inline-flex items-center justify-center gap-2.5 glass hover:bg-white/80 text-rosewood px-8 py-3.5 rounded-full text-base font-medium transition-all hover:shadow-md hover:-translate-y-1"
            >
              <svg className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Notre page Facebook
            </Link>
          </div>
        </Parallax>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up delay-500">
          <div className="w-6 h-10 border-2 border-rosewood-light/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gold/50 rounded-full animate-float" />
          </div>
        </div>
      </section>

      {/* ═══════ WHY AMBRE SHOP ═══════ */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-off-white via-white to-off-white" />
        <div className="blur-orb w-[400px] h-[400px] bg-gold/5 top-0 left-[-10%]" />

        <div className="relative max-w-6xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Nos engagements</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-rosewood mt-3">
              Pourquoi <span className="text-gradient-gold">Ambre Shop</span> ?
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 16l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: "Qualité Premium",
                desc: "Des produits soigneusement sélectionnés pour leur qualité et leur efficacité prouvée.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <path d="M16 4C16 4 6 10 6 18c0 5 4.5 10 10 10s10-5 10-10C26 10 16 4 16 4z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M16 14v8M12 18h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                title: "Ingrédients Naturels",
                desc: "Des formules enrichies en ingrédients naturels pour respecter et sublimer ta peau.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <path d="M16 28c6-4 12-8 12-14a6 6 0 00-12-2 6 6 0 00-12 2c0 6 6 10 12 14z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                ),
                title: "Service Personnalisé",
                desc: "Un accompagnement sur mesure via WhatsApp pour chaque commande.",
              },
            ].map((item, i) => (
              <FadeInSection key={item.title} className={`delay-${(i + 1) * 100}`}>
                <div className="card-hover glass rounded-3xl p-8 text-center glow-gold h-full">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-gold/20 to-rosewood-light/10 flex items-center justify-center text-gold">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl text-rosewood mb-3">{item.title}</h3>
                  <p className="text-rosewood/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CATEGORIES ═══════ */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rosewood-pale via-blush/40 to-rosewood-pale" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <Sparkles count={15} />

        <div className="relative max-w-6xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Explorer</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-rosewood mt-3">
              Nos Catégories
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {categories.map((cat, i) => (
              <FadeInSection key={cat.name} className={`delay-${(i + 1) * 100}`}>
                <div className="card-hover group glass rounded-3xl overflow-hidden">
                  <div className="aspect-square flex items-center justify-center p-3 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rosewood-pale/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      width={180}
                      height={180}
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BEST SELLERS ═══════ */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-off-white to-white" />
        <div className="blur-orb w-[500px] h-[500px] bg-rosewood-light/5 bottom-0 right-[-15%]" />

        <div className="relative max-w-6xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Sélection</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-rosewood mt-3">
              Nos Best-Sellers
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, i) => (
              <FadeInSection key={product.id} className={`delay-${(i % 3 + 1) * 100}`}>
                <div className="card-hover group bg-white rounded-3xl overflow-hidden shadow-sm border border-rosewood-light/10 h-full flex flex-col">
                  <div className="aspect-square bg-gradient-to-br from-rosewood-pale to-blush/30 flex items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute top-3 right-3 glass px-3 py-1 rounded-full text-xs font-medium text-gold">
                      Best-seller
                    </div>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={260}
                      height={260}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs text-gold font-semibold uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="font-serif text-lg text-rosewood mt-1.5 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-rosewood/40 text-sm mb-4 leading-relaxed line-clamp-2 flex-1">
                      {product.shortDescription}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-rosewood-light/10">
                      <span className="text-gradient-gold font-bold text-lg font-serif">
                        {product.price.toLocaleString("fr-FR")} <span className="text-xs font-sans text-rosewood/40">FCFA</span>
                      </span>
                      <a
                        href={`${brand.whatsappLink}&text=${encodeURIComponent(`Bonjour, je suis intéressé(e) par ${product.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-4 py-2 rounded-full text-xs font-medium transition-all shadow-sm hover:shadow-md hover:shadow-green-500/20"
                      >
                        Commander
                      </a>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ HOW TO ORDER ═══════ */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rosewood-pale via-blush/30 to-rosewood-pale" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="blur-orb w-[400px] h-[400px] bg-gold/5 top-[20%] left-[-10%] animate-glow" />
        <Sparkles count={12} />

        <div className="relative max-w-5xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Simple & rapide</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-rosewood mt-3">
              Comment Commander ?
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-gold/10 via-gold/30 to-gold/10" />

            {[
              {
                step: "1", title: "Choisissez",
                desc: "Parcourez notre catalogue et trouvez les produits qui subliment votre beauté.",
                icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" /></svg>,
              },
              {
                step: "2", title: "Contactez-nous",
                desc: "Envoyez un message WhatsApp avec votre sélection. On répond vite !",
                icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              },
              {
                step: "3", title: "Recevez",
                desc: "Livraison rapide chez vous. Payez à la réception, en toute confiance.",
                icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              },
            ].map((item, i) => (
              <FadeInSection key={item.step} className={`delay-${(i + 1) * 100}`}>
                <div className="text-center relative">
                  <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-3xl glass shadow-lg border-gold/10 flex flex-col items-center justify-center gap-1 card-hover">
                    <div className="text-gold">{item.icon}</div>
                    <span className="text-gradient-gold font-serif text-lg font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-serif text-xl text-rosewood mb-2">{item.title}</h3>
                  <p className="text-rosewood/50 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection className="text-center mt-14">
            <a
              href={brand.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-10 py-4 rounded-full text-lg font-medium transition-all shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-1"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Passer commande maintenant
            </a>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════ TESTIMONIAL ═══════ */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rosewood via-rosewood to-rosewood" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(225,196,142,0.1)_0%,_transparent_60%)]" />
        <Sparkles count={10} className="opacity-50" />

        <FadeInSection className="relative max-w-3xl mx-auto text-center">
          <svg className="w-10 h-10 text-gold/30 mx-auto mb-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
          </svg>
          <p className="text-off-white/90 text-lg sm:text-xl font-light leading-relaxed italic mb-6">
            &laquo; Depuis que j&apos;utilise les produits Ambre Shop, ma peau est transformée.
            Le service client est exceptionnel et la livraison toujours rapide ! &raquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-serif font-bold">N</div>
            <div className="text-left">
              <p className="text-off-white/90 text-sm font-medium">Nadia K.</p>
              <p className="text-off-white/40 text-xs">Cliente fidèle</p>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
