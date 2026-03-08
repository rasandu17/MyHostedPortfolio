import { motion } from "framer-motion";
import { Trophy, Zap, Users, Heart } from "lucide-react";

const items = [
  {
    icon: Trophy,
    label: "Competition",
    title: "Cutting Edge Vision Quest — 1st Place",
    subtitle: "Project Ceilão.Grid — Organized by IIT",
  },
  {
    icon: Trophy,
    label: "Competition",
    title: "NBQSA Selection",
    subtitle: "Team Ceilão.Grid selected to the NBQSA",
  },
  {
    icon: Zap,
    label: "Hackathon",
    title: "Google Cloud Hackathon 2025",
    subtitle: "Organized by Google Cloud, Datadog, Confluent & ElevenLabs",
  },
  {
    icon: Zap,
    label: "Hackathon",
    title: "Cypher 2.0 — Top 10",
    subtitle: "Team Codestrom — IEEE WIE Student Branch, KDU",
  },
  {
    icon: Users,
    label: "Open Source",
    title: "Hacktoberfest 2025 — Completed",
    subtitle: "Organized by DigitalOcean, GitHub & Twilio",
  },
  {
    icon: Heart,
    label: "Achievement",
    title: "Class Prize Winner — Mathematics",
    subtitle: "Royal College Colombo",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-4 block">
            Recognition
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
            Achievements<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-editorial rounded-lg p-6 group"
            >
              <div className="flex items-center gap-2 mb-4">
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {item.label}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
