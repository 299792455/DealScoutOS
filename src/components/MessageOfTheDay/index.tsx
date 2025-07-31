'use client';
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Wrench } from "lucide-react";

export default function MessageOfTheDay() {
  const { language } = useLanguage();

  const titles = {
    fr: "Update au 31/07",
    en: "Update 07-31",
    es: "Update del 31/07",
  };

  const texts = {
  fr: `Le développement avance !

• Taux de faux positifs inférieur à 10%.
• Version ENG dispo (ESP toujours en cours...).
• Nouvelle classification : Offre valide / expirée / absente.
• Les offres > 21j sont marquées expirées, mais codes toujours accessibles.
• Navigation YouTube (SPA) entièrement prise en charge.

Je vise une republication d'ici 72h. Un dernier bug de refresh est encore en cours.

Merci pour votre patience. o7`,

  en: `Development is moving forward!

• False positive rate is now below 10%.
• ENG version is available (ESP still in progress...).
• New classification: Valid / Expired / Missing.
• Deals older than 21 days are marked as expired, but codes remain accessible.
• Full YouTube (SPA) navigation supported.

Targeting a new release within ~72h. One last refresh bug still being fixed.

Thanks for your patience. o7`,

  es: `¡El desarrollo sigue avanzando!

• Menos del 10% de falsos positivos actualmente.
• Versión ENG disponible (ESP aún en desarrollo...).
• Nueva clasificación: Oferta válida / expirada / ausente.
• Las ofertas con más de 21 días se marcan como expiradas, pero los códigos siguen accesibles.
• Soporte completo para la navegación YouTube (SPA).

Se prevé una nueva versión en ~72h. Último bug de refresco todavía en revisión.

Gracias por su paciencia. o7`,
};


  return (
    <motion.section
      id="ZeMessage"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full flex justify-center px-4 pb-12"
    >
      <div className="w-fit max-w-full mx-auto py-4 px-4 text-white text-sm sm:text-base leading-snug text-center space-y-4 bg-black/50">

        <div className="flex justify-center items-center space-x-2 text-indigo-300 font-semibold text-base sm:text-lg">
          <Wrench className="w-5 h-5" />
          <span>{titles[language]}</span>
        </div>
        <p className="whitespace-pre-line text-white/90">{texts[language]}</p>
      </div>
    </motion.section>
  );
}
