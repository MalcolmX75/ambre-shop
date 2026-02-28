import { brand } from "@/config/brand";
import { Sparkles, FadeInSection } from "@/components/Effects";

export const metadata = {
  title: `Notre Offre — ${brand.brandName}`,
};

export default function BesoinPage() {
  return (
    <>
      {/* Hero fun */}
      <section className="relative py-12 sm:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rosewood-pale via-blush/60 to-off-white" />
        <div className="blur-orb w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gold/10 top-[-10%] right-[-10%] animate-glow" />
        <Sparkles count={15} />

        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInSection>
            <span className="text-3xl sm:text-5xl mb-2 sm:mb-4 block">Hey</span>
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-6xl text-rosewood mb-3 sm:mb-6">
              Salut Ambre !
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-rosewood-light leading-relaxed max-w-2xl mx-auto">
              Installe-toi, prends un thé (ou un verre de rosé, on juge pas)
              et laisse-moi te montrer ce qu&apos;on a préparé pour toi.
            </p>
          </FadeInSection>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-5 sm:space-y-8">

        {/* Intro perso */}
        <FadeInSection>
          <div className="glass-gold rounded-2xl sm:rounded-3xl p-5 sm:p-8 relative overflow-hidden">
            <Sparkles count={8} />
            <div className="relative">
              <p className="text-rosewood text-sm sm:text-lg leading-relaxed">
                Tu veux vendre tes cosmétiques en ligne mais sans te prendre la tête
                avec un site e-commerce compliqué ? <strong className="text-gradient-gold">T&apos;es au bon endroit.</strong>
              </p>
              <p className="text-rosewood/70 mt-4 leading-relaxed">
                Ce que tu vois là, c&apos;est une <strong>démo de ce que je sais faire</strong>.
                Ton site vitrine, ta page Facebook, ton chat WhatsApp... tout y est.
                Et le meilleur ? C&apos;est que c&apos;est <em>juste le début</em>.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Le concept */}
        <FadeInSection>
          <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 glow-gold">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-bronze flex items-center justify-center text-white text-lg">
                1
              </div>
              <h2 className="font-serif text-lg sm:text-2xl text-rosewood">Le concept, en mode simple</h2>
            </div>
            <p className="text-rosewood/70 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              Imagine : une cliente tombe sur ton site (magnifique, évidemment).
              Elle voit tes produits, elle craque, et <strong>BAM</strong> — elle te contacte
              direct sur WhatsApp pour commander. Pas de panier compliqué,
              pas de &laquo; votre session a expiré &raquo;. Juste un message et c&apos;est parti.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {[
                { emoji: "👀", title: "Elle découvre", desc: "Ton site ou ta page Facebook" },
                { emoji: "😍", title: "Elle craque", desc: "Ton catalogue fait son effet" },
                { emoji: "📱", title: "Elle commande", desc: "Un message WhatsApp et c'est réglé" },
              ].map((step) => (
                <div key={step.title} className="card-hover glass rounded-2xl p-5 text-center">
                  <span className="text-3xl block mb-2">{step.emoji}</span>
                  <h3 className="font-serif text-rosewood font-bold mb-1">{step.title}</h3>
                  <p className="text-rosewood/50 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Pas de paiement */}
        <FadeInSection>
          <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 glow-gold">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-bronze flex items-center justify-center text-white text-lg">
                2
              </div>
              <h2 className="font-serif text-lg sm:text-2xl text-rosewood">Zéro prise de tête paiement</h2>
            </div>
            <p className="text-rosewood/70 text-sm sm:text-base leading-relaxed">
              On ne met <strong>aucun paiement en ligne</strong> sur cette version.
              Pourquoi ? Parce que tes clientes préfèrent payer cash ou par mobile money
              à la livraison. Et toi, tu préfères garder le contrôle. On se comprend.
            </p>
            <div className="mt-4 p-4 bg-green-50 rounded-2xl border border-green-200/50">
              <p className="text-green-800/70 text-sm flex items-start gap-2">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                Ta cliente commande par WhatsApp, tu confirmes, tu livres, elle paye.
                Simple, efficace, pas de commission Stripe à 2.9%.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Logistique */}
        <FadeInSection>
          <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 glow-gold">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-bronze flex items-center justify-center text-white text-lg">
                3
              </div>
              <h2 className="font-serif text-lg sm:text-2xl text-rosewood">La logistique, c&apos;est toi la boss</h2>
            </div>
            <p className="text-rosewood/70 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              Toi tu gères ton stock, tes livraisons, tes encaissements.
              Moi je te donne les outils pour briller en ligne. Deal ?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: "📩", text: "Réception des commandes WhatsApp" },
                { icon: "📦", text: "Préparation & emballage des colis" },
                { icon: "🛵", text: "Organisation de la livraison" },
                { icon: "💰", text: "Encaissement (cash ou mobile money)" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="card-hover glass rounded-2xl p-4 flex items-center gap-3"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-rosewood/70 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Ce que tu obtiens */}
        <FadeInSection>
          <div className="relative glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 glow-gold overflow-hidden">
            <Sparkles count={10} />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-bronze flex items-center justify-center text-white text-lg">
                  4
                </div>
                <h2 className="font-serif text-lg sm:text-2xl text-rosewood">Ce que tu obtiens (spoiler : c&apos;est lourd)</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Site vitrine responsive qui claque",
                  "Identité visuelle premium (tes couleurs, ton logo)",
                  "Page catalogue produits",
                  "Simulation page Facebook réaliste",
                  "Simulation chat WhatsApp",
                  "Lien WhatsApp direct intégré partout",
                  "Design mobile-first (80% de tes clientes sont sur tel)",
                  "Code source complet (c'est à toi)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-rosewood/80">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Et après ? */}
        <FadeInSection>
          <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 glow-gold">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-bronze flex items-center justify-center text-white text-lg">
                5
              </div>
              <h2 className="font-serif text-lg sm:text-2xl text-rosewood">Et après ? Sky is the limit</h2>
            </div>
            <p className="text-rosewood/70 leading-relaxed mb-5">
              Là c&apos;est la version démo. Mais quand t&apos;es prête à passer au niveau supérieur,
              on peut ajouter :
            </p>
            <div className="space-y-3">
              {[
                { icon: "🛒", text: "Panier + paiement en ligne (Stripe, Mobile Money)", tag: "E-commerce" },
                { icon: "📊", text: "Dashboard admin pour gérer tes commandes", tag: "Gestion" },
                { icon: "🤖", text: "Notifications auto WhatsApp (API Business)", tag: "Automation" },
                { icon: "🌐", text: "Ton propre nom de domaine (ambreshop.com)", tag: "Branding" },
                { icon: "📝", text: "Blog / section actualités pour ton SEO", tag: "Contenu" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="card-hover glass rounded-2xl p-4 flex items-center gap-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <p className="text-rosewood/80 text-sm">{item.text}</p>
                  </div>
                  <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full shrink-0">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* CTA final fun */}
        <FadeInSection>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-rosewood via-rosewood to-rosewood" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(225,196,142,0.15)_0%,_transparent_60%)]" />
            <Sparkles count={15} />

            <div className="relative p-6 sm:p-10 text-center">
              <p className="text-off-white/90 text-lg sm:text-2xl font-serif mb-2 sm:mb-3">
                Alors, ça te plaît ?
              </p>
              <p className="text-off-white/60 text-sm sm:text-base mb-5 sm:mb-8 max-w-lg mx-auto">
                Si t&apos;es convaincue (et tu devrais l&apos;être, regarde-moi ce site),
                envoie-moi un petit message. On en parle autour d&apos;un café virtuel.
              </p>
              <a
                href={brand.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-medium transition-all shadow-lg shadow-green-500/20 hover:shadow-xl hover:-translate-y-1"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                On en discute ?
              </a>
            </div>
          </div>
        </FadeInSection>

      </div>
    </>
  );
}
