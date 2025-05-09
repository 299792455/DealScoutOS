"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const texts = {
    fr: {
      openSource: "🚀 Développé en Open Source –",
      viewOnGitHub: "Voir sur GitHub",
      copyright: "Tous droits réservés.",
    },
    en: {
      openSource: "🚀 Developed Open Source –",
      viewOnGitHub: "View on GitHub",
      copyright: "All rights reserved.",
    },
    es: {
      openSource: "🚀 Desarrollado en Open Source –",
      viewOnGitHub: "Ver en GitHub",
      copyright: "Todos los derechos reservados.",
    },
  };

  return (
    <footer className="w-full bg-black text-white py-6 flex flex-col items-center text-center">
      <p className="mb-2">
        {texts[language].openSource}{" "}
        <a
          href="https://github.com/ton-repo" // <-- change ce lien par ton vrai GitHub
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
