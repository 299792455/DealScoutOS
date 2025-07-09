"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Description() {
  const { language } = useLanguage();

  const titles = {
    fr: "Projet DealScout",
    en: "DealScout Project",
    es: "Proyecto DealScout",
  };

  const texts = {
    fr: `L'extension DealScout est un projet développé bénévolement et totalement gratuit. 
    Le but de ce projet est simple : Développer un outil discret pour ne jamais manquer une bonne affaire.`,
    en: `DealScout is a completely free and volunteer-driven project built for everyone.
The goal is simple: to create a discreet tool that ensures you never miss a great deal.`,
    es: `DealScout es una extensión totalmente gratuita, desarrollada de forma voluntaria.
El objetivo es simple: crear una herramienta discreta para no perder nunca una buena oferta.`,
  };

  return (
    <motion.section
  id="apropos"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full py-12 flex flex-col items-center px-4"
>
  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-center leading-tight break-words">
    {titles[language]}
  </h2>
  <p className="text-lg sm:text-xl text-center text-white mb-4 max-w-3xl leading-relaxed whitespace-pre-line break-words px-2 sm:px-0">
    {texts[language]}
  </p>
</motion.section>
  );
}
