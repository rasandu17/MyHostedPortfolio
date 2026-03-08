import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-4 block">
            Contact
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight max-w-3xl">
            Let's work<br />together<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-2 block">
                Email
              </span>
              <a
                href="mailto:ravindusandumith171@gmail.com"
                className="font-heading text-xl md:text-2xl font-medium text-foreground hover:text-primary transition-colors link-underline inline-flex items-center gap-2"
              >
                ravindusandumith171@gmail.com
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-2 block">
                Phone
              </span>
              <span className="font-heading text-xl md:text-2xl font-medium text-foreground">
                +94 776 082 132
              </span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-2 block">
                Location
              </span>
              <span className="font-heading text-xl md:text-2xl font-medium text-foreground">
                Kalubowila, Sri Lanka
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
              Socials
            </span>
            <div className="space-y-0">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="group flex items-center justify-between py-5 border-b border-border hover:border-primary/30 transition-colors"
                >
                  <span className="font-heading text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {s.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[12px] text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} Ravindu Sandumith. All rights reserved.
          </span>
          <span className="text-[12px] text-muted-foreground tracking-wide">
            Designed & Built by <span className="text-foreground">Ravindu Sandumith</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
