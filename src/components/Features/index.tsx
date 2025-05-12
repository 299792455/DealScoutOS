"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Features() {
  const { language } = useLanguage();

  const texts = {
    fr: {
      sectionTitle: "Les 3 informations essentielles en 1 clic",
      features: [
        {
          title: "Code Promo",
          description: "Récupère instantanément le code promotionnel utilisé dans la vidéo.",
        },
        {
          title: "% de Réduction",
          description: "Connais directement le pourcentage de remise sans chercher.",
        },
        {
          title: "Lien de l'Offre",
          description: "Accède au lien exact de l'offre commerciale en un clic.",
        },
      ],
      privacy: "💡 Respect de ta vie privée : DealScout ne collecte aucune donnée, il scanne uniquement ce qui est visible sur ta page YouTube.",
    },
    en: {
      sectionTitle: "The 3 key pieces of information in 1 click",
      features: [
        {
          title: "Promo Code",
          description: "Instantly retrieve the promotional code used in the video.",
        },
        {
          title: "Discount Percentage",
          description: "Directly know the discount percentage without searching.",
        },
        {
          title: "Offer Link",
          description: "Access the exact link to the promotional offer with one click.",
        },
      ],
      privacy: "💡 Privacy first: DealScout collects no data, it only scans the visible content on your YouTube page.",
    },
    es: {
      sectionTitle: "Las 3 informaciones clave en 1 clic",
      features: [
        {
          title: "Código Promocional",
          description: "Recupera instantáneamente el código promocional utilizado en el vídeo.",
        },
        {
          title: "% de Descuento",
          description: "Conoce directamente el porcentaje de descuento sin buscar.",
        },
        {
          title: "Enlace de la Oferta",
          description: "Accede al enlace exacto de la oferta comercial con un solo clic.",
        },
      ],
      privacy: "💡 Privacidad ante todo: DealScout no recoge ningún dato, sólo analiza el contenido visible en tu página de YouTube.",
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
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
        {texts[language].sectionTitle}
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
        {texts[language].features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-gray-700 max-w-2xl text-center">
        <p>{texts[language].privacy}</p>
      </div>
    </motion.section>
  );
}
