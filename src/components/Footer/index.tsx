"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const texts = {
    fr: {
      openSource: "🚀 Développé bénévolement –",
      viewOnGitHub: "Voir sur GitHub",
      copyright: "Tous droits réservés.",
    },
    en: {
      openSource: "🚀 Volunteer-based project –",
      viewOnGitHub: "View on GitHub",
      copyright: "All rights reserved.",
    },
    es: {
      openSource: "🚀 Desarrollado de forma voluntaria –",
      viewOnGitHub: "Ver en GitHub",
      copyright: "Todos los derechos reservados.",
    },
  };

  return (
    <footer className="w-full bg-black/50 text-white py-6 flex flex-col items-center text-center">
      <p className="mb-2">
        {texts[language].openSource}{" "}
        <a
          href="https://github.com/299792455/dealScootXtension" 
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-400 transition"
        >
          {texts[language].viewOnGitHub}
        </a>
      </p>
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} DealScout. {texts[language].copyright}
      </p>
    </footer>
  );
}
