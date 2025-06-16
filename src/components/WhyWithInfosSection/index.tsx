"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyWithInfosSection() {
  const { language } = useLanguage();

  const texts = {
    fr: `
Viewer — 
Récupérer le code promo, le % de réduction et le lien de l’offre en un clic, sans subir le bullshit commercial. 

Sponsor/Createur — 
Simplifier l'accès aux offres commerciales.

Conclusion — 
Une extension Chrome gratuite, maline et utile pour tout le monde. Sans aucune collecte de données.`,
    en: `
👀 For viewers:
Get the promo code, discount %, and deal link in one click—no commercial BS.

💼 For creators/sponsors:
Simplify access to their commercial deals.

🔒 For all:
A free chrome extension, smart, and useful for everyone. With absolutely no data collection.`,
    es: `
👀 Para los espectadores:
Recuperar el código promo, el % de descuento y el enlace de la oferta con un solo clic, sin el rollo comercial.

💼 Para creadores/patrocinadores:
Simplificar el acceso a sus ofertas comerciales.

🔒 Conclusión:
Una extensión Chrome gratuita, inteligente y útil para todos. Sin ninguna recopilación de datos.`,

  };

  return (
    <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full py-16 px-4"
>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-y-12 md:gap-x-8 items-start md:items-center">
    {/* Bloc texte (50%) */}
    <div className="w-full md:w-1/2 text-center md:text-left px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight break-words">
        {language === "fr"
          ? "Le but"
          : language === "en"
          ? "Main goal"
          : "El objectivo principal"}
      </h2>
      <p className="text-base md:text-lg text-white mb-4 leading-relaxed whitespace-pre-line">
        {texts[language]}
      </p>
    </div>

    {/* Bloc 3 cartes (50%) */}
    <div className="w-full md:w-1/2 flex flex-col gap-6 items-center">
      <h3 className="text-xl md:text-3xl font-bold text-white mb-2 text-center">
        {language === "fr"
          ? "Les 3 infos essentielles"
          : language === "en"
          ? "The 3 essential pieces of info"
          : "Las 3 informaciones clave"}
      </h3>
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center w-full max-w-sm">
          <h4 className="font-bold text-lg mb-2">
            {language === "fr"
              ? "Code Promo"
              : language === "en"
              ? "Promo Code"
              : "Código Promocional"}
          </h4>
          <p className="text-sm text-gray-600 leading-snug">
            {language === "fr"
              ? "Récupère instantanément le code promotionnel utilisé dans la vidéo."
              : language === "en"
              ? "Instantly retrieve the promo code used in the video."
              : "Recupera al instante el código promocional usado en el vídeo."}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center w-full max-w-sm">
          <h4 className="font-bold text-lg mb-2">% de Réduction</h4>
          <p className="text-sm text-gray-600 leading-snug">
            {language === "fr"
              ? "Connais directement le pourcentage de remise sans chercher."
              : language === "en"
              ? "Know the discount percentage instantly without searching."
              : "Conoce el porcentaje de descuento directamente sin buscar."}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center w-full max-w-sm">
          <h4 className="font-bold text-lg mb-2">Lien de l’Offre</h4>
          <p className="text-sm text-gray-600 leading-snug">
            {language === "fr"
              ? "Accède au lien exact de l’offre commerciale en un clic."
              : language === "en"
              ? "Access the exact deal link in one click."
              : "Accede al enlace exacto de la oferta comercial con un solo clic."}
          </p>
        </div>
      </div>
    </div>
  </div>
</motion.section>

  );
}
