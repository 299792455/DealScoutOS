"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function DiscountShape({
  value,
  delay = 0,
  x,
  y,
  rotate = 0,
  color = "from-white/[0.12]",
}: {
  value: string;
  delay?: number;
  x: string;
  y: string;
  rotate?: number;
  color?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100, rotate: rotate - 10 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.5,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.5 },
      }}
      className={cn("absolute", x, y)}
    >
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-white font-bold text-xl md:text-3xl px-5 py-3 rounded-full border-2 border-white/20 backdrop-blur-md bg-gradient-to-br to-transparent"
      >
        <span className={cn("bg-clip-text text-transparent bg-gradient-to-br", color)}>
          {value}
        </span>
      </motion.div>
    </motion.div>
  );
}
