"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import DiscountShape from "@/components/DiscountShape";
import Link from "next/link";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  transparent = false,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  transparent?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HeroGeometricDealScout() {
  const { language } = useLanguage();

  const texts = {
    fr: {
      badge: "Projet OpenSource",
      title1: "Extension",
      title2: "DealScout OS",
      description:
        "Détection automatique des offres commerciales des vidéos YT Sponsorisées.",
      cta: "Télécharger l'extension Chrome",
    },
    en: {
      badge: "OpenSource Project",
      title1: "Extension",
      title2: "DealScout OS",
      description:
        "Automatic detection of commercial offers in sponsored YouTube videos",
      cta: "Download the Chrome extension",
    },
    es: {
      badge: "Proyecto Libro de Aceso",
      title1: "Extensión",
      title2: "DealScout OS",
      description:
        "Detección automática de ofertas comerciales en vídeos patrocinados de YouTube.",
      cta: "Descargar la extensión de Chrome",
    },
  };

  const { badge, title1, title2, description, cta } = texts[language];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
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

        <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
          <Link
            href="https://chrome.google.com/webstore/detail/your-extension-id"
            target="_blank"
            className="inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-full"
          >
            {cta}
          </Link>
        </motion.div>
      </div>

    </div>
  );
}