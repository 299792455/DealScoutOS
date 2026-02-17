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
  fr: `Extension temporairement désactivée.

Je travaille actuellement sur une V2 beaucoup plus solide.

• Nouveau moteur de détection
• Logique plus stricte (moins de faux positifs)
• Architecture optimisée
• Meilleure stabilité sur la navigation YouTube (SPA)
• Base plus évolutive pour les prochaines fonctionnalités

DealScout revient bientôt.
Plus propre. Plus fiable. Plus puissant.

Merci pour votre soutien. o7`,

  en: `Extension temporarily disabled.

I'm currently rebuilding DealScout from scratch for a much stronger V2.

• New detection engine
• Stricter logic (fewer false positives)
• Optimized architecture
• Better YouTube (SPA) stability
• More scalable foundation

DealScout will be back soon.
Cleaner. More reliable. More powerful.

Thanks for your support. o7`,

  es: `Extensión temporalmente desactivada.

Estoy reconstruyendo DealScout desde cero para una V2 mucho más sólida.

• Nuevo motor de detección
• Lógica más estricta (menos falsos positivos)
• Arquitectura optimizada
• Mayor estabilidad en la navegación YouTube (SPA)
• Base más escalable para futuras funciones

DealScout vuelve pronto.
Más limpio. Más fiable. Más potente.

Gracias por el apoyo. o7`,
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
