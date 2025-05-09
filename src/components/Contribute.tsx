"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Contribute() {
  const { language } = useLanguage();

  const texts = {
    fr: {
      title: "Contribuer",
      description:
        "DealScout est open source ! Vous pouvez contribuer via GitHub ou suggérer des améliorations.",
      button: "Voir sur GitHub",
    },
    en: {
      title: "Contribute",
      description:
        "DealScout is open source! You can contribute via GitHub or suggest improvements.",
      button: "View on GitHub",
    },
    es: {
      title: "Contribuir",
      description:
        "¡DealScout es de código abierto! Puedes contribuir a través de GitHub o sugerir mejoras.",
      button: "Ver en GitHub",
    },
  };

  const { title, description, button } = texts[language];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-12 bg-gray-50 px-4 flex flex-col items-center"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
        {title}
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-6">
        {description}
      </p>
      <a
        href="https://github.com/ton-repo" // <-- remplace par ton vrai GitHub
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-gray-800 transition"
      >
        {button}
      </a>
    </motion.section>
  );
}
