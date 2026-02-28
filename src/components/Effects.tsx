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

/* ─── PWA Install Button ─── */
export function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    setIsStandalone(
      window.matchMedia("(display-mode: standalone)").matches ||
      ("standalone" in navigator && (navigator as unknown as { standalone: boolean }).standalone)
    );

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      setDismissed(true);
      return;
    }
    // iOS/Safari: show instructions
    alert(
      "Pour installer l'app :\n\n" +
      "1. Appuie sur le bouton Partager (📤)\n" +
      "2. Choisis « Sur l'écran d'accueil »\n" +
      "3. Confirme avec « Ajouter »"
    );
  };

  if (isStandalone || dismissed) return null;

  return (
    <button
      onClick={handleInstall}
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
        onClick={(e) => { e.stopPropagation(); setDismissed(true); }}
        className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center text-rosewood/60 hover:text-rosewood text-xs"
        aria-label="Fermer"
      >
        ✕
      </button>
    </button>
  );
}

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}
