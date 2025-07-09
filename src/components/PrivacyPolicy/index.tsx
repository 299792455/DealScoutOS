"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  const texts = {
    fr: {
      title: "Vie privée",
      description:
        "DealScout ne collecte aucune donnée personnelle et l'analyse est effectuée localement sur la page YouTube visitée.",
    },
    en: {
      title: "Privacy Policy",
      description:
        "DealScout collects no personal data. Analysis is performed locally on the visited YouTube page.",
    },
    es: {
      title: "Política de privacidad",
      description:
        "DealScout no recoge ningún dato personal. El análisis se realiza localmente en la página de YouTube visitada.",
    },
  };

  const { title, description } = texts[language];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-12 h-[236px]  px-4 flex flex-col items-center"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 mb-4 text-center">
        {title}
      </h2>
      <p className="text-lg text-white mb-4 max-w-2xl  text-center">
        {description}
      </p>
    </motion.section>
  );
}
