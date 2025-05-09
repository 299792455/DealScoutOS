"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Roadmap() {
  const { language } = useLanguage();

  const roadmapData = {
    fr: [
      { step: 1, title: "Version actuelle", description: "Scan YouTube + affichage code promo", icon: "🚀", color: "border-blue-500" },
      { step: 2, title: "Prochaine étape", description: "Ajout de notifications discrètes", icon: "🔔", color: "border-orange-500" },
      { step: 3, title: "Futur", description: "Support pour d’autres plateformes vidéo (Twitch ?)", icon: "🎯", color: "border-green-500" },
    ],
    en: [
      { step: 1, title: "Current version", description: "YouTube scan + promo code display", icon: "🚀", color: "border-blue-500" },
      { step: 2, title: "Next", description: "Add subtle notifications", icon: "🔔", color: "border-orange-500" },
      { step: 3, title: "Future", description: "Support for other video platforms (Twitch?)", icon: "🎯", color: "border-green-500" },
    ],
    es: [
      { step: 1, title: "Versión actual", description: "Escaneo de YouTube + visualización de códigos promocionales", icon: "🚀", color: "border-blue-500" },
      { step: 2, title: "Próximo", description: "Añadir notificaciones discretas", icon: "🔔", color: "border-orange-500" },
      { step: 3, title: "Futuro", description: "Soporte para otras plataformas de vídeo (¿Twitch?)", icon: "🎯", color: "border-green-500" },
    ],
  };

  const steps = roadmapData[language];
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-12 bg-gray-50 px-4 flex flex-col items-center"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
        {language === "fr"
          ? "Roadmap"
          : language === "en"
          ? "Roadmap"
          : "Hoja de ruta"}
      </h2>

      <div className="flex flex-col gap-6 max-w-2xl w-full">
        {steps.map((step) => (
          <div
            key={step.step}
            onClick={() =>
              setActiveStep(activeStep === step.step ? null : step.step)
            }
            className={`cursor-pointer border-2 rounded-xl p-4 shadow-md transition ${step.color} ${
              activeStep === step.step
                ? "bg-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl">{step.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">
                  {language === "fr"
                    ? `Étape ${step.step} – ${step.title}`
                    : language === "en"
                    ? `Step ${step.step} – ${step.title}`
                    : `Paso ${step.step} – ${step.title}`}
                </h3>
              </div>
            </div>
            {activeStep === step.step && (
              <p className="mt-3 text-gray-600">{step.description}</p>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
