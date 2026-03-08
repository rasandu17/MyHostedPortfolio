import { motion } from "framer-motion";

const skills = [
  { category: "Programming", items: ["Java", "Python", "JavaScript", "TypeScript", "Kotlin", "PHP", "C#"] },
  { category: "Web & Frameworks", items: ["React", "Next.js", "Node.js", "Express.js", "Spring Boot", ".NET", "TailwindCSS"] },
  { category: "Databases", items: ["MySQL", "MongoDB", "MSSQL"] },
  { category: "Testing & QA", items: ["Manual Testing", "Selenium", "Postman", "Test Case Design"] },
  { category: "Scraping & Automation", items: ["BeautifulSoup", "RSS Feeds", "Automation Bots"] },
  { category: "Tools & Platforms", items: ["Git", "GitHub", "Docker", "VS Code", "XAMPP", "Firebase", "Figma"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-4 block">
            Capabilities
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
            Skills<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-editorial rounded-lg p-6 group"
            >
              <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-muted-foreground mb-5">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 text-sm font-heading font-medium text-foreground bg-muted rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
