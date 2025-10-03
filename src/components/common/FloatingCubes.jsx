import React from "react";
import { motion } from "framer-motion";

const letters = ["I", "E", "L", "T", "S"];

const FloatingCubes = () => {
  return (
    <div className="relative w-full flex items-center justify-center py-12 md:py-16">
      {/* Responsive gap between cubes */}
      <div className="flex gap-3 sm:gap-6 md:gap-10">
        {letters.map((letter, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, scale: 1 }}
            animate={{ y: [-12, 12, -12], scale: [1, 1.05, 1] }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            // Responsive cube size
            className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-2xl
                       bg-white/10 backdrop-blur-lg 
                       border border-white/20 shadow-[8px_8px_20px_rgba(0,0,0,0.6),-8px_-8px_20px_rgba(255,255,255,0.05)]
                       flex items-center justify-center overflow-hidden
                       transform perspective-1000 rotate-x-6 rotate-y-6"
          >
            {/* Inner 3D shine overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br 
                             from-white/20 via-transparent to-black/30 opacity-70" />

            {/* Neon glow edges */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr 
                             from-blue-500/30 via-blue-400/30 to-blue-300/30 
                             blur-xl opacity-60" />

            {/* Letter with responsive font size */}
            <span className="relative text-xl sm:text-2xl md:text-4xl font-extrabold 
                             text-white drop-shadow-[0_0_8px_rgba(0,162,255,0.8)] z-10">
              {letter}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FloatingCubes;