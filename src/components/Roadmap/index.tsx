"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Roadmap() {
  const { language } = useLanguage();

  const roadmapData = {
    fr: [
      {
        step: 1,
        title: "Version actuelle (2025)",
        icon: "🚀",
        color: "border-blue-500",
        content: {
          realised: [
            "Dev script de base de l'extension",
            "Dev Popup affichage Promotion commerciale",
            "Site Web"
          ],
          inDev: [
            "Fine Tuning des patterns de détection",
            "Rendre l'extension accessible à tous les navigateurs",
            "Ajout de notification discrète",
          ],
          study: [],
        },
      },
      {
        step: 2,
        title: "2026 – Prochains développements",
        icon: "🔔",
        color: "border-orange-500",
        content: {
          realised: [],
          inDev: [],
          study: [
            "Cross Platform ?",
            "Sauvegarde en local des bons deals ?",
          ],
        },
      },
      {
        step: 3,
        title: "Et après ?",
        icon: "🎯",
        color: "border-green-500",
        content: {
          realised: [],
          inDev: [],
          study: [
            "Base de données OS ?",
            "Intégration IA ?",
          ],
        },
      },
    ],
    en: [
      {
        step: 1,
        title: "Current version (2025)",
        icon: "🚀",
        color: "border-blue-500",
        content: {
          realised: [
            "Script Scan YouTube video",
            "Popup with commercial offer display",
            "WebSite"
          ],
          inDev: [
            "Detection pattern fine tuning",
            "Multi-browser compatibility",
            "Notification system",
          ],
          study: [],
        },
      },
      {
        step: 2,
        title: "2026 – Upcoming Features",
        icon: "🔔",
        color: "border-orange-500",
        content: {
          realised: [],
          inDev: [],
          study: [
            "Cross-platform support ?",
            "Save deals locally ?",
          ],
        },
      },
      {
        step: 3,
        title: "And after?",
        icon: "🎯",
        color: "border-green-500",
        content: {
          realised: [],
          inDev: [],
          study: [
            "OS Database?",
            "AI-powered enhancements ?",
          ],
        },
      },
    ],
    es: [
      {
        step: 1,
        title: "Versión actual (2025)",
        icon: "🚀",
        color: "border-blue-500",
        content: {
          realised: [
            "Desarrollo del script basico de la extension",
            "Desarrollo del popup de ofertas comerciales",
            "Sitio Web"
          ],
          inDev: [
            "Ajustando los modelos de detección",
            "Compatibilidad con todos los navegadores",
            "Integración de notificaciones discretas",
          ],
          study: [],
        },
      },
      {
        step: 2,
        title: "2026 – Próximas funciones",
        icon: "🔔",
        color: "border-orange-500",
        content: {
          realised: [],
          inDev: [],
          study: [
            "Soporte multiplataforma ?",
            "Sistema de guardado en local de ofertas ?",
          ],
        },
      },
      {
        step: 3,
        title: "¿Y después?",
        icon: "🎯",
        color: "border-green-500",
        content: {
          realised: [],
          inDev: [],
          study: [
            "Integración de base de datos ?",
            "Integración de inteligencia artificial ?",
          ],
        },
      },
    ],
  };

  const steps = roadmapData[language];
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const Section = ({
    title,
    items,
    color,
  }: {
    title: string;
    items: string[];
    color: string;
  }) =>
    items.length > 0 && (
      <div className="mt-4">
        <h4
          className={`
            font-semibold mb-1
            ${
              color === "green"
                ? "text-green-600"
                : color === "gray"
                ? "text-gray-600"
                : "text-black"
            }
          `}
        >
          {title}
        </h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );

  return (
    <motion.section
    id="roadmap" 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-12  px-4 flex flex-col items-center"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 mb-8 text-center">
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
              <div className="mt-4">
                <Section
                  title={
                    language === "fr"
                      ? "Réalisé"
                      : language === "en"
                      ? "Completed"
                      : "Realizado"
                  }
                  items={step.content.realised}
                  color="green"
                />
                <Section
                  title={
                    language === "fr"
                      ? "En développement"
                      : language === "en"
                      ? "In development"
                      : "En desarrollo"
                  }
                  items={step.content.inDev}
                  color="gray"
                />
                <Section
                  title={
                    language === "fr"
                      ? "À l’étude"
                      : language === "en"
                      ? "In study"
                      : "En estudio"
                  }
                  items={step.content.study}
                  color="black"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
