"use client";

import { useState } from "react";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react"; // ou Heroicons si tu préfères

export default function Header() {
  const { language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const labels = {
    fr: { home: "Home", apropos: "A propos", roadmap: "Roadmap", documentation: "Documentation", contribuer: "Contribuer" },
    en: { home: "Home", apropos: "About", roadmap: "Roadmap", documentation: "Documentation", contribuer: "Contribute" },
    es: { home: "Home", apropos: "Proyecto", roadmap: "Hoja de Ruta", documentation: "Documentación", contribuer: "Contribuir" },
  };

  const t = labels[language] || labels.fr;

  return (
    <header className="w-full bg-black/50 text-white shadow-md sticky top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <LanguageSelector />

        {/* Bouton burger visible uniquement en mobile */}
        <button
          className="sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu desktop */}
        <nav className="hidden sm:flex space-x-4 items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:underline">
            {t.home}
          </a>
          <a href="#apropos" className="hover:underline">{t.apropos}</a>
          <a href="#roadmap" className="hover:underline">{t.roadmap}</a>
          <a href="#contribuer" className="hover:underline">{t.contribuer}</a>
          <a href="#documentation" className="hover:underline">{t.documentation}</a>
        </nav>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <nav className="flex flex-col items-start space-y-2 mt-4 sm:hidden px-2">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }} className="hover:underline">
            {t.home}
          </a>
          <a href="#apropos" onClick={() => setMenuOpen(false)} className="hover:underline">{t.apropos}</a>
          <a href="#roadmap" onClick={() => setMenuOpen(false)} className="hover:underline">{t.roadmap}</a>
          <a href="#contribuer" onClick={() => setMenuOpen(false)} className="hover:underline">{t.contribuer}</a>
          <a href="#documentation" onClick={() => setMenuOpen(false)} className="hover:underline">{t.documentation}</a>
        </nav>
      )}
    </header>
  );
}
