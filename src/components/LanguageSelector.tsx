"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSelector() {
  const { setLanguage, language } = useLanguage();

  return (
    <div className="flex space-x-4 justify-center mb-8">
      <button
        onClick={() => setLanguage("fr")}
        className={language === "fr" ? "opacity-100" : "opacity-50 hover:opacity-100 transition"}
      >
        🇫🇷
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={language === "en" ? "opacity-100" : "opacity-50 hover:opacity-100 transition"}
      >
        🇬🇧
      </button>
      <button
        onClick={() => setLanguage("es")}
        className={language === "es" ? "opacity-100" : "opacity-50 hover:opacity-100 transition"}
      >
        🇪🇸
      </button>
    </div>
  );
}
