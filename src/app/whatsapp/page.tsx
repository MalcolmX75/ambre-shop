"use client";

import Image from "next/image";
import { brand } from "@/config/brand";

const sidebarChats = [
  { name: "Ambre Shop", lastMsg: "Bonjour ! Comment puis-je vous aider ?", time: "14:32", unread: 1 },
  { name: "Nadia K.", lastMsg: "Merci pour ma commande !", time: "12:15", unread: 0 },
  { name: "Marie L.", lastMsg: "Le sérum est incroyable", time: "Hier", unread: 0 },
  { name: "Sophie M.", lastMsg: "Vous livrez à Port-Gentil ?", time: "Hier", unread: 0 },
  { name: "Aya B.", lastMsg: "Photo du colis reçu 📦", time: "Lun.", unread: 0 },
  { name: "Groupe Beauté", lastMsg: "Linda : Quelqu'un a essayé...", time: "Lun.", unread: 3 },
];

const conversation = [
  { from: "client", text: "Bonjour Ambre Shop !", time: "14:30" },
  { from: "shop", text: "Bonjour ! Bienvenue chez Ambre Shop 😊 Comment puis-je vous aider ?", time: "14:31" },
  { from: "client", text: "Je cherche un bon sérum pour le visage", time: "14:31" },
  { from: "shop", text: "Je vous recommande notre Sérum Éclat Doré ! Il est enrichi en vitamine C pour un teint radieux. Il est à 18 500 FCFA.", time: "14:32" },
  { from: "client", text: "Il est bien pour les peaux mixtes ?", time: "14:33" },
  { from: "shop", text: "Oui absolument ! Il convient à tous les types de peau. Beaucoup de nos clientes à peau mixte l'adorent.", time: "14:33" },
  { from: "client", text: "Super ! Je le prends. Comment je fais pour commander ?", time: "14:34" },
  { from: "shop", text: "C'est très simple :\n1. Confirmez votre choix (Sérum Éclat Doré)\n2. Envoyez-moi votre adresse de livraison\n3. On vous livre et vous payez à la réception !\n\nPas besoin de payer en avance 😊", time: "14:35" },
  { from: "client", text: "Parfait ! J'habite à Libreville, quartier Louis. Envoyez-moi le sérum s'il vous plaît !", time: "14:36" },
  { from: "shop", text: "Commande confirmée ! ✅\n\nSérum Éclat Doré — 18 500 FCFA\nLivraison : Libreville, quartier Louis\nDélai : demain avant 18h\n\nMerci pour votre confiance ! 💛", time: "14:37" },
];

export default function WhatsAppPage() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex h-[calc(100vh-4rem)] bg-white shadow-lg">
          {/* Sidebar */}
          <aside className="hidden md:flex flex-col w-80 border-r border-gray-200 bg-white">
            {/* Sidebar header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
              <div className="w-10 h-10 rounded-full bg-gray-300" />
              <div className="flex gap-3 text-gray-500">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="12" r="2"/></svg>
              </div>
            </div>

            {/* Search */}
            <div className="px-3 py-2">
              <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-500">
                Rechercher ou démarrer une discussion
              </div>
            </div>

            {/* Chat list */}
            <div className="flex-1 overflow-y-auto">
              {sidebarChats.map((chat, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 ${
                    i === 0 ? "bg-gray-100" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-blush/50 flex items-center justify-center text-bronze font-serif font-bold shrink-0">
                    {chat.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm font-medium text-gray-900 truncate">
                        {chat.name}
                      </span>
                      <span className="text-xs text-gray-500 shrink-0 ml-2">
                        {chat.time}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">
                      {chat.lastMsg}
                    </p>
                  </div>
                  {chat.unread > 0 && (
                    <span className="w-5 h-5 bg-green-500 rounded-full text-white text-xs flex items-center justify-center shrink-0">
                      {chat.unread}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </aside>

          {/* Chat area */}
          <div className="flex-1 flex flex-col">
            {/* Chat header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border-b border-gray-200">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-blush">
                <Image
                  src="/images/logo_ambre_shop.png"
                  alt={brand.brandName}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {brand.brandName}
                </p>
                <p className="text-xs text-green-600">En ligne</p>
              </div>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-4 sm:px-12 py-6 space-y-2"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5ddd5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                backgroundColor: "#e5ddd5",
              }}
            >
              <div className="text-center mb-4">
                <span className="bg-white/80 text-gray-500 text-xs px-3 py-1 rounded-full shadow-sm">
                  Aujourd&apos;hui
                </span>
              </div>

              {conversation.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs sm:max-w-sm rounded-lg px-3 py-2 shadow-sm text-sm ${
                      msg.from === "client"
                        ? "bg-green-100 text-gray-800"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <p
                      className={`text-xs mt-1 text-right ${
                        msg.from === "client"
                          ? "text-green-600/60"
                          : "text-gray-400"
                      }`}
                    >
                      {msg.time}
                      {msg.from === "client" && " ✓✓"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-t border-gray-200">
              <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-400 border border-gray-200">
                Tapez un message...
              </div>
              <a
                href={brand.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors shadow-md"
              >
                Ouvrir WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
