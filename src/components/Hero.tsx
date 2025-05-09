"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();

  const texts = {
    fr: {
      title: "DealScout – Déniche les bons plans sur YouTube",
      description: "En un seul clic, récupère automatiquement le code promo, le pourcentage de réduction et le lien de l’offre mentionnée dans la vidéo YouTube.",
      button: "Ajouter l’extension Chrome",
    },
    en: {
      title: "DealScout – Find the best YouTube deals",
      description: "In one click, automatically retrieve the promo code, the discount percentage, and the offer link mentioned in the YouTube video.",
      button: "Add Chrome Extension",
    },
    es: {
      title: "DealScout – Encuentra las mejores ofertas de YouTube",
      description: "Con un solo clic, recupera automáticamente el código promocional, el porcentaje de descuento y el enlace de la oferta mencionada en el vídeo de YouTube.",
      button: "Añadir extensión Chrome",
    },
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white flex flex-col items-center justify-center px-4"
    >
      <Image
        src="/icon.png"
        alt="Logo DealScout"
        width={120}
        height={120}
        className="mb-6"
      />
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
        {texts[language].title}
      </h1>
      <p className="text-lg text-center text-gray-600 max-w-xl mb-8">
        {texts[language].description}
      </p>
      <a
        href="#"
        className="bg-black text-white px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-gray-800 transition"
      >
        {texts[language].button}
      </a>
    </motion.main>
  );
}
