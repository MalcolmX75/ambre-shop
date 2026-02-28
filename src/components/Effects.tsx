"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

/* ─── Parallax wrapper ─── */
export function Parallax({
  children,
  speed = 0.3,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const offset = (rect.top - window.innerHeight / 2) * speed;
        el.style.transform = `translateY(${offset}px)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

/* ─── Sparkles (particules dorées scintillantes) — client-only ─── */
export function Sparkles({ count = 20, className = "" }: { count?: number; className?: string }) {
  const [particles, setParticles] = useState<
    { id: number; left: string; top: string; size: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 3 + Math.random() * 6,
        delay: Math.random() * 4,
        duration: 1.5 + Math.random() * 2.5,
      }))
    );
  }, [count]);

  if (particles.length === 0) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-sparkle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, rgba(225,196,142,1) 0%, rgba(225,196,142,0.4) 50%, transparent 70%)`,
            boxShadow: `0 0 ${p.size * 2}px rgba(225,196,142,0.6)`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Floating glow orbs (animated blur circles) ─── */
export function GlowOrbs() {
  return (
    <>
      <div
        className="absolute rounded-full pointer-events-none animate-glow"
        style={{
          width: 500, height: 500, top: "-15%", left: "-12%",
          background: "radial-gradient(circle, rgba(225,196,142,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none animate-glow delay-200"
        style={{
          width: 450, height: 450, bottom: "-10%", right: "-15%",
          background: "radial-gradient(circle, rgba(212,160,176,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none animate-glow delay-400"
        style={{
          width: 300, height: 300, top: "35%", right: "15%",
          background: "radial-gradient(circle, rgba(246,226,221,0.3) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
    </>
  );
}

/* ─── Fade-in on scroll ─── */
export function FadeInSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in-up");
          el.style.opacity = "1";
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
}

/* ─── Install Modal (invitation plein écran à installer l'app) ─── */
export function InstallModal() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const mobile = /iPhone|iPad|iPod|Android/i.test(ua);
    const ios = /iPhone|iPad|iPod/i.test(ua);
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      ("standalone" in navigator && (navigator as unknown as { standalone: boolean }).standalone);

    setIsMobile(mobile);
    setIsIOS(ios);
    setIsStandalone(standalone);

    if (standalone) return;

    // Show modal after 4s of browsing
    const timer = setTimeout(() => setShowModal(true), 4000);

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
    }
    setShowModal(false);
  };

  const dismissModal = () => {
    setShowModal(false);
  };

  const dismissButton = () => {
    setHideButton(true);
  };

  if (isStandalone) return null;

  return (
    <>
      {/* ── Modal overlay ── */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={dismissModal}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal card */}
          <div
            className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient header */}
            <div className="relative bg-gradient-to-br from-rosewood via-rosewood-light to-gold px-6 pt-8 pb-12 text-center overflow-hidden">
              {/* Decorative sparkles in header */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-white/30 animate-sparkle"
                    style={{
                      width: 4 + (i % 3) * 3,
                      height: 4 + (i % 3) * 3,
                      left: `${12 + i * 11}%`,
                      top: `${15 + (i % 4) * 20}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${2 + (i % 3)}s`,
                    }}
                  />
                ))}
              </div>

              {/* Close button */}
              <button
                onClick={dismissModal}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                aria-label="Fermer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>

              {/* App icon */}
              <div className="mx-auto w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>

              <h2 className="text-white font-serif text-2xl font-bold mb-1">AMBRE SHOP</h2>
              <p className="text-white/80 text-sm">Cosmétiques Premium</p>
            </div>

            {/* Body */}
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-rosewood font-serif text-lg font-semibold mb-2">
                Installe l&apos;application
              </h3>
              <p className="text-rosewood/60 text-sm mb-5 leading-relaxed">
                Accède à tes produits préférés en un tap, directement depuis ton écran d&apos;accueil.
              </p>

              {/* Features */}
              <div className="flex justify-center gap-6 mb-6">
                {[
                  { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Rapide" },
                  { icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", label: "Hors-ligne" },
                  { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: "Gratuit" },
                ].map((f) => (
                  <div key={f.label} className="flex flex-col items-center gap-1.5">
                    <div className="w-10 h-10 rounded-xl bg-rosewood-pale flex items-center justify-center">
                      <svg className="w-5 h-5 text-rosewood" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d={f.icon} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-xs text-rosewood/70 font-medium">{f.label}</span>
                  </div>
                ))}
              </div>

              {/* iOS instructions */}
              {isIOS && (
                <div className="mb-5 p-3 rounded-xl bg-rosewood-pale/50 text-left">
                  <p className="text-xs text-rosewood font-semibold mb-2">Sur Safari :</p>
                  <div className="space-y-1.5">
                    {[
                      "Appuie sur le bouton Partager",
                      "Choisis « Sur l'écran d'accueil »",
                      "Confirme avec « Ajouter »",
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-rosewood text-white text-xs flex items-center justify-center font-bold">
                          {i + 1}
                        </span>
                        <span className="text-xs text-rosewood/80">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <button
                onClick={handleInstall}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rosewood to-rosewood-light text-white font-semibold text-sm shadow-lg shadow-rosewood/25 hover:shadow-rosewood/40 hover:-translate-y-0.5 transition-all active:scale-[0.98]"
              >
                {isIOS ? "J'ai compris !" : "Installer maintenant"}
              </button>

              <button
                onClick={dismissModal}
                className="mt-3 text-sm text-rosewood/40 hover:text-rosewood/60 transition-colors"
              >
                Plus tard
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Floating install button (always visible unless dismissed) ── */}
      {!hideButton && !showModal && (
        <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-5 right-5 z-50 group flex items-center gap-2.5 bg-gradient-to-r from-rosewood to-rosewood-light text-white pl-4 pr-5 py-3.5 rounded-2xl shadow-2xl shadow-rosewood/30 hover:shadow-rosewood/40 hover:-translate-y-1 transition-all animate-fade-in-up"
        >
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="text-left">
            <span className="text-sm font-semibold block leading-tight">Installer l&apos;app</span>
            <span className="text-[10px] text-white/60 font-normal">
              {isMobile ? "Ajouter à l'écran" : "Accès rapide"}
            </span>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); dismissButton(); }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center text-rosewood/60 hover:text-rosewood text-xs"
            aria-label="Fermer"
          >
            ✕
          </button>
        </button>
      )}
    </>
  );
}

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}
