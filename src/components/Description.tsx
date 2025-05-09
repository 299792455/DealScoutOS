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
    fr: `L'extension DealScout est un projet libre d'accès développé bénévolement par la communauté et totalement gratuit pour tous.

Le but de ce projet est simple : Payer toujours moins, sans jamais nous vendre.`,
    en: `DealScout is a free and open-source extension built by volunteers for everyone.

The goal is simple: always pay less—without selling ourselves out.`,
    es: `DealScout es una extensión gratuita y de código abierto, desarrollada por voluntarios para todos.

El objetivo es simple: pagar siempre menos, sin vendernos nunca.`,
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-12 flex flex-col items-center px-4 bg-white"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
        {titles[language]}
      </h2>
      <p className="text-lg text-center text-gray-700 max-w-3xl whitespace-pre-line">
        {texts[language]}
      </p>
    </motion.section>
  );
}
