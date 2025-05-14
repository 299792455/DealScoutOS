"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorks() {
  const { language } = useLanguage();

  const texts = {
    fr: {
      sectionTitle: "Comment ça marche ?",
      steps: [
        {
          title: "Regarde une vidéo YouTube",
          description: "Lance n’importe quelle vidéo sur YouTube comme tu le fais d'habitude.",
        },
        {
          title: "DealScout détecte l'offre",
          description: "Si la vidéos est sponsorisée, l’extension extrait en 1 seconde les codes et promos liés.",
        },
        {
          title: "Récupère ton bon plan",
          description: "Clique et profite directement du code promo ou de la réduction trouvée.",
        },
      ],
    },
    en: {
      sectionTitle: "How does it work?",
      steps: [
        {
          title: "Watch a YouTube video",
          description: "Launch any YouTube video as you normally would.",
        },
        {
          title: "DealScout detects the offer",
          description: "The extension extracts all related promo codes in one second, if the video is sponsored.",
        },
        {
          title: "Grab your deal",
          description: "Click and directly access the promo code or discount found.",
        },
      ],
    },
    es: {
      sectionTitle: "¿Cómo funciona?",
      steps: [
        {
          title: "Mira un vídeo de YouTube",
          description: "Lanza cualquier vídeo en YouTube como de costumbre.",
        },
        {
          title: "DealScout detecta la oferta",
          description: "Si el video es patrocinado, la extensión extrae todos los códigos promocionales en un segundo.",
        },
        {
          title: "Consigue tu oferta",
          description: "Haz clic y accede directamente al código promocional o descuento encontrado.",
        },
      ],
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-16  flex flex-col items-center px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white  mb-12 text-center">
        {texts[language].sectionTitle}
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
        {texts[language].steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-white mb-4">{step.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
