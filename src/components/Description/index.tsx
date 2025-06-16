"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Description() {
  const { language } = useLanguage();

  const titles = {
    fr: "Projet OpenSource DealScout",
    en: "DealScout Open Source Project",
    es: "Proyecto OpenSource DealScout",
  };

  const texts = {
    fr: `L'extension DealScout est un projet libre d'accès développé bénévolement et totalement gratuit pour tous.

Le but de ce projet est simple : Développer un outil discret pour ne jamais manquer une bonne affaire.`,
    en: `DealScout is a free and open-source extension built by volunteers for everyone.

The goal is simple: Build a tool to never miss a good deal.`,
    es: `DealScout es una extensión totalmente gratuita y libro de acceso, desarrollada por voluntarios para todos.

El objetivo es simple: Desarrollar una herramienta para no perder nunca una buena oferta.`,
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
