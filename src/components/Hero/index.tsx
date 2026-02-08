"use client";

import { motion, type Variants } from "framer-motion";
import { Circle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import DiscountShape from "@/components/DiscountShape";
import CarouselMessage from "@/components/CarouselMessage";

export default function HeroGeometricDealScout() {
  const { language } = useLanguage();

  const texts = {
    fr: {
      badge: "Projet bénévole",
      title1: "Extension",
      title2: "DealScout",
      description:
        "Détection automatique des offres commerciales des vidéos YT Sponsorisées.",
      cta: "Télécharger l'extension Chrome",
    },
    en: {
      badge: "Volunteer-based project",
      title1: "Extension",
      title2: "DealScout",
      description:
        "Automatic detection of commercial offers in sponsored YouTube videos",
      cta: "Download the Chrome extension",
    },
    es: {
      badge: "Proyecto voluntario",
      title1: "Extensión",
      title2: "DealScout",
      description:
        "Detección automática de ofertas comerciales en vídeos patrocinados de YouTube.",
      cta: "Descargar la extensión de Chrome",
    },
  } as const;

  const { badge, title1, title2, description, cta } = texts[language];

  const fadeUpVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full z-20">
        <CarouselMessage />
      </div>

      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        <DiscountShape value="-10%" delay={0.3} x="left-[10%]" y="top-[15%]" color="from-indigo-400" />
        <DiscountShape value="-20%" delay={0.5} x="right-[15%]" y="top-[30%]" color="from-indigo-400" />
        <DiscountShape value="-30%" delay={0.4} x="left-[5%]" y="bottom-[10%]" color="from-yellow-400" />
        <DiscountShape value="-40%" delay={0.6} x="right-[10%]" y="bottom-[15%]" color="from-cyan-400" />
        <DiscountShape value="-50%" delay={0.7} x="left-[20%]" y="top-[5%]" color="from-lime-400" />
        <DiscountShape value="-60%" delay={0.8} x="right-[25%]" y="top-[55%]" color="from-orange-400" />
        <DiscountShape value="-70%" delay={0.9} x="left-[30%]" y="bottom-[25%]" color="from-fuchsia-400" />
        <DiscountShape value="-80%" delay={1.0} x="left-[35%]" y="top-[20%]" color="from-pink-400" />
        <DiscountShape value="-20%" delay={1.1} x="left-[25%]" y="top-[40%]" color="from-blue-400" />
        <DiscountShape value="-30%" delay={1.2} x="right-[40%]" y="top-[10%]" color="from-teal-400" />
        <DiscountShape value="-60%" delay={1.3} x="left-[15%]" y="top-[60%]" color="from-red-400" />
        <DiscountShape value="-70%" delay={1.4} x="right-[10%]" y="top-[15%]" color="from-emerald-400" />
        <DiscountShape value="-50%" delay={1.5} x="right-[25%]" y="bottom-[25%]" color="from-sky-400" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
        >
          <Circle className="h-2 w-2 fill-rose-500/80" />
          <span className="text-sm text-white/80 tracking-wide">{badge}</span>
        </motion.div>

        <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight break-words">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
              {title1}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-white/90 to-rose-400 block">
              {title2}
            </span>
          </h1>
        </motion.div>

        <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
            {description}
          </p>
        </motion.div>

        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="relative inline-block"
        >
          <a
            href="https://github.com/299792455/dealScootXtension"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition"
          >
            {cta}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
