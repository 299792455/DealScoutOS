'use client';
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Wrench } from "lucide-react";

export default function MessageOfTheDay() {
  const { language } = useLanguage();

  const titles = {
    fr: "Update au 11/08",
    en: "Update 08-11",
    es: "Update del 11/08",
  };

  const texts = {
  fr: `Extension publié!

• Taux de faux positifs inférieur à 10%.
• Version ENG dispo (mais incomplete).
• Nouvelle classification : Offre valide / expirée / absente.
• Les offres > 21j sont marquées expirées, mais codes toujours accessibles.
• Navigation YouTube (SPA) entièrement prise en charge.

Un dernier bug de refresh est encore en cours (Rafraichir le navigateur pour les offres expirées).

Merci pour vos retours. o7`,

  en: `Extension published!

• False positive rate is now below 10%.
• ENG version is available (still incomplete though).
• New classification: Valid / Expired / Missing.
• Deals older than 21 days are marked as expired, but codes remain accessible.
• Full YouTube (SPA) navigation supported.

One last refresh bug still being fixed (U'll need to refresh navigator for Expired deals's state).

Thanks for your feedbacks. o7`,

  es: `¡Extension publicada!

• Menos del 10% de falsos positivos actualmente.
• Versión ENG disponible (aun incompleta).
• Nueva clasificación: Oferta válida / expirada / ausente.
• Las ofertas con más de 21 días se marcan como expiradas, pero los códigos siguen accesibles.
• Soporte completo para la navegación YouTube (SPA).

Último bug de refresco todavía en revisión (Tendrás que refrescar el navegador para las ofertas expiradas).

Gracias por su colaboración. o7`,
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
