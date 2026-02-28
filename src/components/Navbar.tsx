"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { brand } from "@/config/brand";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/facebook", label: "Facebook" },
  { href: "/whatsapp", label: "WhatsApp" },
  { href: "/besoin", label: "Notre offre" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-rosewood/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/images/logo_ambre_shop.png"
                alt={brand.brandName}
                width={42}
                height={42}
                className="rounded-full ring-2 ring-gold/30 group-hover:ring-gold transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors" />
            </div>
            <span className="font-serif text-rosewood text-lg font-bold tracking-wider group-hover:text-gradient-gold transition-all">
              {brand.brandName}
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-rosewood/70 hover:text-rosewood text-sm font-medium transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gold to-rosewood-light group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </Link>
            ))}
            <a
              href={brand.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-0.5"
            >
              Commander
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-rosewood p-2 hover:bg-rosewood/5 rounded-lg transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass mx-4 mb-3 rounded-2xl px-4 py-3 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-rosewood/70 hover:text-rosewood hover:pl-2 transition-all text-sm font-medium border-b border-gold/5 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={brand.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 bg-gradient-to-r from-green-600 to-green-500 text-white text-center px-4 py-2.5 rounded-full text-sm font-medium shadow-md"
          >
            Commander via WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
