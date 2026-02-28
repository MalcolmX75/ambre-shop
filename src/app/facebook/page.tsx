import Image from "next/image";
import { brand } from "@/config/brand";
import { products } from "@/data/products";

export const metadata = {
  title: `Facebook — ${brand.brandName}`,
};

const mockPosts = [
  {
    id: 1,
    text: "Nouvelle collection de sérums illuminateurs ! Votre peau mérite le meilleur. Commandez via WhatsApp.",
    likes: 47, comments: 12, shares: 5, time: "2 heures",
    image: products[0].image,
  },
  {
    id: 2,
    text: "Promo du week-end : -20% sur tous les soins visage ! Offre valable jusqu'à dimanche. Envoyez-nous un message pour en profiter.",
    likes: 89, comments: 23, shares: 15, time: "5 heures",
    image: products[1].image,
  },
  {
    id: 3,
    text: "Merci à toutes nos clientes fidèles ! Vos retours nous font chaud au cœur. Continuez à briller avec Ambre Shop.",
    likes: 124, comments: 31, shares: 8, time: "1 jour",
    image: null,
  },
  {
    id: 4,
    text: "Le beurre corporel à la noix de coco est de retour en stock ! Ne ratez pas cette pépite pour une peau douce et nourrie.",
    likes: 67, comments: 18, shares: 9, time: "2 jours",
    image: products[3].image,
  },
  {
    id: 5,
    text: "Comment bien hydrater sa peau en saison sèche ? Découvrez nos conseils et nos produits recommandés sur notre catalogue.",
    likes: 35, comments: 8, shares: 3, time: "3 jours",
    image: products[2].image,
  },
  {
    id: 6,
    text: "Eau de Parfum Nuit d'Ambre : des notes envoûtantes d'ambre, vanille et bois de santal. Craquez pour ce best-seller !",
    likes: 156, comments: 42, shares: 21, time: "4 jours",
    image: products[5].image,
  },
  {
    id: 7,
    text: "Livraison disponible dans tout Libreville ! Commandez aujourd'hui, recevez demain. Paiement à la livraison accepté.",
    likes: 78, comments: 15, shares: 11, time: "5 jours",
    image: null,
  },
  {
    id: 8,
    text: "Témoignage client : « Depuis que j'utilise le Sérum Éclat Doré, ma peau est transformée ! Merci Ambre Shop. » — Nadia K.",
    likes: 203, comments: 54, shares: 27, time: "1 semaine",
    image: products[4].image,
  },
];

export default function FacebookPage() {
  return (
    <div className="bg-[#f0f2f5] min-h-screen">
      {/* ═══ COVER BANNER ═══ */}
      <div className="relative">
        <div className="max-w-[940px] mx-auto">
          {/* Cover photo */}
          <div className="relative h-[200px] sm:h-[280px] md:h-[350px] rounded-b-lg overflow-hidden">
            {/* Rich gradient cover with pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-rosewood via-rosewood-light to-gold" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(225,196,142,0.3)_0%,_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,249,247,0.15)_0%,_transparent_50%)]" />

            {/* Decorative elements on cover */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Rose silhouettes */}
              <svg className="absolute top-4 right-8 w-24 h-24 text-white/10" viewBox="0 0 120 140" fill="currentColor">
                <path d="M60 30 C45 35 30 50 35 65 C40 75 55 72 60 55 C65 72 80 75 85 65 C90 50 75 35 60 30Z" />
                <path d="M60 35 C50 40 40 52 45 62 C48 68 56 66 60 55 C64 66 72 68 75 62 C80 52 70 40 60 35Z" opacity="0.5" />
              </svg>
              <svg className="absolute bottom-6 left-12 w-16 h-16 text-white/[0.07] rotate-45" viewBox="0 0 120 140" fill="currentColor">
                <path d="M60 30 C45 35 30 50 35 65 C40 75 55 72 60 55 C65 72 80 75 85 65 C90 50 75 35 60 30Z" />
              </svg>

              {/* Subtle grid lines */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }} />

              {/* Brand name watermark */}
              <div className="absolute bottom-4 right-6 sm:bottom-6 sm:right-10">
                <span className="font-serif text-white/20 text-3xl sm:text-5xl md:text-6xl tracking-wider">
                  {brand.brandName}
                </span>
              </div>

              {/* Sparkle dots */}
              <div className="absolute top-[20%] left-[30%] w-2 h-2 rounded-full bg-gold/30" />
              <div className="absolute top-[40%] right-[25%] w-1.5 h-1.5 rounded-full bg-white/20" />
              <div className="absolute bottom-[30%] left-[60%] w-2.5 h-2.5 rounded-full bg-gold/20" />
              <div className="absolute top-[60%] left-[20%] w-1.5 h-1.5 rounded-full bg-white/15" />
            </div>

            {/* Edit cover button (fake) */}
            <button className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-gray-700 px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 shadow-sm transition-colors">
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
              Modifier la couverture
            </button>
          </div>

          {/* Profile section */}
          <div className="relative px-3 sm:px-4 pb-3 sm:pb-4">
            <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4">
              {/* Profile picture */}
              <div className="relative -mt-[50px] sm:-mt-[68px] md:-mt-[84px] z-10">
                <div className="w-[100px] h-[100px] sm:w-[136px] sm:h-[136px] md:w-[168px] md:h-[168px] rounded-full border-[3px] sm:border-4 border-white bg-white shadow-lg overflow-hidden">
                  <Image
                    src="/images/logo_ambre_shop.png"
                    alt={brand.brandName}
                    width={168}
                    height={168}
                    className="object-cover"
                  />
                </div>
                {/* Online indicator */}
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-4 h-4 sm:w-6 sm:h-6 bg-green-500 border-2 sm:border-[3px] border-white rounded-full" />
              </div>

              {/* Page name & stats */}
              <div className="flex-1 pb-1 sm:pb-2">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                  {brand.brandName}
                </h1>
                <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                  2,4K abonnés &middot; 1,8K mentions J&apos;aime
                </p>
                {/* Follower avatars */}
                <div className="flex items-center mt-1.5 sm:mt-2">
                  <div className="flex -space-x-1.5 sm:-space-x-2">
                    {["N", "S", "A", "M", "L", "K"].map((letter, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] sm:text-xs font-bold text-white"
                        style={{
                          background: [
                            "#E1C48E", "#D4A0B0", "#8B5E6B",
                            "#B78A58", "#C9A96E", "#A88A66"
                          ][i],
                        }}
                      >
                        {letter}
                      </div>
                    ))}
                  </div>
                  <span className="ml-1.5 sm:ml-2 text-[10px] sm:text-xs text-gray-500 line-clamp-1">
                    Nadia, Sophie et 2 398 autres aiment ça
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pb-1 sm:pb-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 sm:gap-2 shadow-sm">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  J&apos;aime
                </button>
                <a
                  href={brand.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 sm:gap-2 shadow-sm hover:shadow-md"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  Message
                </a>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 sm:gap-2">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  <span className="hidden sm:inline">Partager</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ TABS ═══ */}
      <div className="border-t border-gray-200 bg-white shadow-sm sticky top-16 z-30">
        <div className="max-w-[940px] mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {[
              { name: "Publications", active: true },
              { name: "À propos", active: false },
              { name: "Mentions", active: false },
              { name: "Photos", active: false },
              { name: "Vidéos", active: false },
              { name: "Avis", active: false },
            ].map((tab) => (
              <button
                key={tab.name}
                className={`px-4 py-3.5 text-sm font-medium whitespace-nowrap border-b-[3px] transition-colors ${
                  tab.active
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ CONTENT ═══ */}
      <div className="max-w-[940px] mx-auto px-4 py-5">
        <div className="flex gap-5">
          {/* Left sidebar — About */}
          <aside className="hidden lg:block w-[360px] shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-32">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Intro</h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                {brand.description}
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16z" clipRule="evenodd" />
                  </svg>
                  Cosmétiques &middot; Beauté &middot; Soins
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Libreville, Gabon
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  WhatsApp : +241 00 00 00 00
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Répond en général en 1h
                </div>
              </div>

              {/* Photo grid */}
              <h3 className="font-bold text-lg text-gray-900 mt-6 mb-3">
                Photos
                <span className="text-blue-600 font-normal text-sm ml-2">Tout voir</span>
              </h3>
              <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden">
                {products.slice(0, 6).map((p) => (
                  <div key={p.id} className="aspect-square bg-rosewood-pale flex items-center justify-center">
                    <Image src={p.image} alt={p.name} width={100} height={100} />
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Posts */}
          <div className="flex-1 space-y-4">
            {/* Create post */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-bold">V</div>
                <div className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-sm text-gray-500 hover:bg-gray-200 transition-colors cursor-pointer">
                  Écrire quelque chose...
                </div>
              </div>
              <div className="flex justify-around mt-3 pt-3 border-t border-gray-100">
                {[
                  { icon: "🎥", label: "Vidéo en direct", color: "text-red-500" },
                  { icon: "📷", label: "Photo/Vidéo", color: "text-green-500" },
                  { icon: "😊", label: "Humeur/Activité", color: "text-yellow-500" },
                ].map((item) => (
                  <button key={item.label} className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors text-sm text-gray-600 font-medium">
                    <span className={item.color}>{item.icon}</span>
                    <span className="hidden sm:inline">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {mockPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
              >
                {/* Post header */}
                <div className="flex items-center gap-3 p-4 pb-2">
                  <div className="w-10 h-10 rounded-full bg-blush overflow-hidden ring-1 ring-gray-200">
                    <Image
                      src="/images/logo_ambre_shop.png"
                      alt=""
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 hover:underline cursor-pointer">
                      {brand.brandName}
                    </p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      Il y a {post.time} &middot;
                      <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" />
                      </svg>
                    </p>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                </div>

                {/* Post content */}
                <div className="px-4 pb-3">
                  <p className="text-gray-800 text-[15px] leading-relaxed">
                    {post.text}
                  </p>
                </div>

                {/* Post image */}
                {post.image ? (
                  <div className="bg-gradient-to-br from-rosewood-pale to-blush/40 flex items-center justify-center py-8 border-t border-b border-gray-100">
                    <Image
                      src={post.image}
                      alt=""
                      width={260}
                      height={260}
                      className="hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-40 bg-gradient-to-br from-rosewood/80 to-gold/60 flex items-center justify-center border-t border-b border-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
                    <span className="text-white/80 font-serif text-xl tracking-wide relative">
                      {brand.brandName}
                    </span>
                  </div>
                )}

                {/* Reactions */}
                <div className="px-4 py-2 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <div className="flex -space-x-1">
                      <span className="w-[18px] h-[18px] rounded-full bg-blue-500 flex items-center justify-center text-[10px]">👍</span>
                      <span className="w-[18px] h-[18px] rounded-full bg-red-500 flex items-center justify-center text-[10px]">❤️</span>
                    </div>
                    <span className="ml-1">{post.likes}</span>
                  </div>
                  <span>
                    {post.comments} commentaires &middot; {post.shares} partages
                  </span>
                </div>

                {/* Actions */}
                <div className="flex justify-around px-4 py-1 border-t border-gray-100">
                  {[
                    { label: "J'aime", icon: <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" strokeLinecap="round" strokeLinejoin="round" /></svg> },
                    { label: "Commenter", icon: <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" strokeLinecap="round" strokeLinejoin="round" /></svg> },
                    { label: "Partager", icon: <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" strokeLinecap="round" strokeLinejoin="round" /></svg> },
                  ].map((action) => (
                    <button
                      key={action.label}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm text-gray-500 hover:bg-gray-50 rounded-md transition-colors font-medium"
                    >
                      {action.icon}
                      {action.label}
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
