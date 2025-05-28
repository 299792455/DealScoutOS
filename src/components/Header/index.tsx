"use client";

import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";  

export default function Header() {
  const { language } = useLanguage();  

  const labels = {
    fr: { home: "Home", apropos: "A propos", roadmap: "Roadmap", documentation: "Documentation", contribuer: "Contribuer" },
    en: { home: "Home", apropos: "About", roadmap: "Roadmap", documentation: "Documentation", contribuer: "Contribute" },
    es: { home: "Home", apropos: "Proyecto", roadmap: "Hoja de Ruta", documentation: "Documentación", contribuer: "Contribuir" },
  };

  const t = labels[language] || labels.fr;  

  return (
    <header className="w-full flex items-center justify-between p-4 bg-black/50 text-white shadow-md sticky top-0 z-50">
      <LanguageSelector />
      <nav className="flex space-x-4 items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:underline">
          {t.home}
        </a>
        <a href="#apropos" className="hover:underline">{t.apropos}</a>
        <a href="#roadmap" className="hover:underline">{t.roadmap}</a>
        <a href="#contribuer" className="hover:underline">{t.contribuer}</a>
        <a href="#documentation" className="hover:underline">{t.documentation}</a>
      </nav>
    </header>
  );
}