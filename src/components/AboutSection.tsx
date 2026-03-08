import { motion } from "framer-motion";
import { GraduationCap, MapPin, Globe } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-4 block">
            About
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
            Background<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="font-display text-2xl md:text-3xl font-medium leading-snug text-foreground mb-8">
              I am a Computer Science undergraduate passionate about software engineering, 
              quality assurance, and building scalable digital solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Currently interning at the Prime Minister's Office of Sri Lanka, I work across 
              full-stack development, web scraping, automation, and software testing. I build 
              reliable systems with React, .NET, Spring Boot, and Python — always focused on 
              quality, efficiency, and real-world impact.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" /> Kalubowila, Sri Lanka
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5" /> Sinhala · English
              </span>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Education</span>
            </div>
            <div className="space-y-8">
              <div className="border-l-2 border-primary/30 pl-6">
                <span className="text-[11px] uppercase tracking-wider text-primary">2024 – 2027</span>
                <h4 className="font-heading text-lg font-semibold text-foreground mt-1">BSc (Hons) Computer Science</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  IIT Sri Lanka — University of Westminster, UK
                </p>
              </div>
              <div className="border-l-2 border-border pl-6">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">2023</span>
                <h4 className="font-heading text-lg font-semibold text-foreground mt-1">Foundation Certificate in Computing</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Informatics Institute of Technology
                </p>
              </div>
              <div className="border-l-2 border-border pl-6">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">2014 – 2023</span>
                <h4 className="font-heading text-lg font-semibold text-foreground">Royal College Colombo</h4>
                <p className="text-sm text-muted-foreground mt-1">GCE O/L & A/L</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
