import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <a href="#hero" className="font-display text-2xl font-bold tracking-tight text-foreground">
            R<span className="text-primary">.</span>S
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-8 h-8 flex flex-col items-end justify-center gap-1.5"
            aria-label="Menu"
          >
            <span className={`h-[1.5px] bg-foreground transition-all duration-300 ${mobileOpen ? "w-8 rotate-45 translate-y-[4.5px]" : "w-8"}`} />
            <span className={`h-[1.5px] bg-foreground transition-all duration-300 ${mobileOpen ? "w-8 -rotate-45 -translate-y-[4.5px]" : "w-5"}`} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileOpen(false)}
                className="font-display text-4xl font-bold text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
