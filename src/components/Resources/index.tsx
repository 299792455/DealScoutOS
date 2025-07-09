"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Resources() {
  const { language } = useLanguage();

  const texts = {
    fr: {
      title: "Ressources & Documentation",
      items: [
        {
          label: "📄 Documentation utilisateur : comment installer et utiliser",
          link: "#", //Later 
        },
      ],
    },
    en: {
      title: "Resources & Documentation",
      items: [
        {
          label: "📄 User documentation: how to install and use",
          link: "#",
        },
        
      ],
    },
    es: {
      title: "Recursos y Documentación",
      items: [
        {
          label: "📄 Documentación de usuario: cómo instalar y usar",
          link: "#",
        },
       
      ],
    },
  };

  const { title, items } = texts[language];

  return (
    <motion.section
    id="documentation" 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full  py-12 px-4 flex flex-col items-center"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 mb-4 text-center">
        {title}
      </h2>

      <ul className="space-y-4 text-lg text-gray-700 max-w-xl text-center">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="text-orange-500 hover:underline transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
