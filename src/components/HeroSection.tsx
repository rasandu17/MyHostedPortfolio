import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ravindu Sandumith portrait"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
            npx ravindu
          </span>
        </motion.div>

        {/* Main name */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-display text-[clamp(2.5rem,8vw,9rem)] font-800 leading-[0.9] tracking-tight"
          >
            RAVINDU
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="font-display text-[clamp(2.5rem,8vw,9rem)] font-800 leading-[0.9] tracking-tight"
          >
            SAND<span className="text-primary">UM</span>ITH
          </motion.h1>
        </div>

        {/* Subtitle row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-lg">
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Computer Science Undergraduate with prior industry experience in software 
              development. Building scalable full-stack solutions with React, .NET, 
              Spring Boot — focused on quality engineering & automation.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#work"
              className="group flex items-center gap-3 text-sm uppercase tracking-[0.15em] text-foreground hover:text-primary transition-colors"
            >
              <span>Explore Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
