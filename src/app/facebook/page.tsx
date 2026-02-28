import Image from "next/image";
import { brand } from "@/config/brand";

export const metadata = {
  title: `Facebook — ${brand.brandName}`,
};

const mockPosts = [
  {
    id: 1,
    text: "Nouvelle collection de sérums illuminateurs ! Votre peau mérite le meilleur. Commandez via WhatsApp.",
    likes: 47,
    comments: 12,
    shares: 5,
    time: "2 heures",
  },
  {
    id: 2,
    text: "Promo du week-end : -20% sur tous les soins visage ! Offre valable jusqu'à dimanche. Envoyez-nous un message pour en profiter.",
    likes: 89,
    comments: 23,
    shares: 15,
    time: "5 heures",
  },
  {
    id: 3,
    text: "Merci à toutes nos clientes fidèles ! Vos retours nous font chaud au cœur. Continuez à briller avec Ambre Shop.",
    likes: 124,
    comments: 31,
    shares: 8,
    time: "1 jour",
  },
  {
    id: 4,
    text: "Le beurre corporel à la noix de coco est de retour en stock ! Ne ratez pas cette pépite pour une peau douce et nourrie.",
    likes: 67,
    comments: 18,
    shares: 9,
    time: "2 jours",
  },
  {
    id: 5,
    text: "Comment bien hydrater sa peau en saison sèche ? Découvrez nos conseils et nos produits recommandés sur notre catalogue.",
    likes: 35,
    comments: 8,
    shares: 3,
    time: "3 jours",
  },
  {
    id: 6,
    text: "Eau de Parfum Nuit d'Ambre : des notes envoûtantes d'ambre, vanille et bois de santal. Craquez pour ce best-seller !",
    likes: 156,
    comments: 42,
    shares: 21,
    time: "4 jours",
  },
  {
    id: 7,
    text: "Livraison disponible dans tout Libreville ! Commandez aujourd'hui, recevez demain. Paiement à la livraison accepté.",
    likes: 78,
    comments: 15,
    shares: 11,
    time: "5 jours",
  },
  {
    id: 8,
    text: "Témoignage client : « Depuis que j'utilise le Sérum Éclat Doré, ma peau est transformée ! Merci Ambre Shop. » — Nadia K.",
    likes: 203,
    comments: 54,
    shares: 27,
    time: "1 semaine",
  },
];

export default function FacebookPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Cover */}
      <div className="relative">
        <div className="h-48 sm:h-64 md:h-80 bg-gradient-to-r from-bronze to-gold" />
        <div className="max-w-4xl mx-auto px-4 relative">
          <div className="absolute -bottom-16 left-4 flex items-end gap-4">
            <div className="w-32 h-32 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden">
              <Image
                src="/images/logo_ambre_shop.png"
                alt={brand.brandName}
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Page Info */}
      <div className="max-w-4xl mx-auto px-4 pt-20 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          {brand.brandName}
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Cosmétiques &middot; 2,4K abonnés &middot; 1,8K mentions J&apos;aime
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-2 mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
            J&apos;aime
          </button>
          <a
            href={brand.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
          >
            Envoyer un message
          </a>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors">
            Partager
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto px-4 border-b border-gray-300 bg-white">
        <div className="flex gap-1 overflow-x-auto">
          {[
            "Publications",
            "À propos",
            "Photos",
            "Vidéos",
            "Avis",
          ].map((tab, i) => (
            <button
              key={tab}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                i === 0
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Posts */}
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
        {mockPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200"
          >
            {/* Post header */}
            <div className="flex items-center gap-3 p-4 pb-2">
              <div className="w-10 h-10 rounded-full bg-blush overflow-hidden">
                <Image
                  src="/images/logo_ambre_shop.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {brand.brandName}
                </p>
                <p className="text-xs text-gray-500">
                  Il y a {post.time} &middot; 🌍
                </p>
              </div>
            </div>

            {/* Post content */}
            <div className="px-4 pb-3">
              <p className="text-gray-800 text-sm leading-relaxed">
                {post.text}
              </p>
            </div>

            {/* Post image placeholder */}
            <div className="h-48 bg-gradient-to-br from-blush/50 to-gold/20 flex items-center justify-center">
              <span className="text-bronze/40 font-serif text-lg">
                {brand.brandName}
              </span>
            </div>

            {/* Reactions */}
            <div className="px-4 py-2 flex items-center justify-between text-xs text-gray-500 border-b border-gray-100">
              <span>👍❤️ {post.likes}</span>
              <span>
                {post.comments} commentaires &middot; {post.shares} partages
              </span>
            </div>

            {/* Actions */}
            <div className="flex justify-around px-4 py-1">
              {["J'aime", "Commenter", "Partager"].map((action) => (
                <button
                  key={action}
                  className="flex-1 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-md transition-colors font-medium"
                >
                  {action}
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
