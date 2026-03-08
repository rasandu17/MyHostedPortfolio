import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Ceilão.Grid — AR Farming App",
    description: "Mobile app using AR to measure garden space, recommend plants by location, provide weather and market insights, and offer chatbot support.",
    tech: ["Kotlin", "Java", "ARCore", "Firebase", "Gemini API"],
    featured: true,
  },
  {
    number: "02",
    title: "Leave Application System — Parliament",
    description: "System to submit, track, and manage overseas travel requests for parliament members and officers.",
    tech: ["React", "Bootstrap", "Laravel", "MySQL"],
    featured: true,
  },
  {
    number: "03",
    title: "Gate Pass Management — PM's Office",
    description: "Secure digital gate pass system managing visitor approvals, OTP authentication, and QR code scanning for controlled access.",
    tech: ["React", "Bootstrap", ".NET", "MySQL"],
    featured: true,
  },
  {
    number: "04",
    title: "Grandpa's Hug — AI Voice Assistant",
    description: "Voice-powered AI that provides children with a caring, supportive, and age-appropriate companion.",
    tech: ["React", "Next.js", "Python", "ElevenLabs"],
    featured: false,
  },
  {
    number: "05",
    title: "Sri Lankan News Aggregation API",
    description: "Web scraping project that collects and structures news from major Sri Lankan media, providing a REST API with filters and search.",
    tech: ["Python", "BeautifulSoup", "FastAPI", "JSON"],
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-4 block">
              Selected Work
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
              Projects<span className="text-primary">.</span>
            </h2>
          </div>
          <span className="hidden md:block text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            ({projects.length} Projects)
          </span>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <div className="group py-8 md:py-10 border-t border-border hover:border-primary/30 transition-colors duration-500 cursor-pointer">
                <div className="flex items-start gap-6 md:gap-12">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground pt-2 hidden md:block">
                    {project.number}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-500 mb-3">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-500" />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[11px] uppercase tracking-wider rounded-full border border-border text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
