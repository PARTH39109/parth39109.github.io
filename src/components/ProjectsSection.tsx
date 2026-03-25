import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Hotel Management System",
    desc: "A complete system for managing hotel bookings, room availability, and customer data with an intuitive interface.",
    tech: ["Java", "Spring Boot", "JDBC"],
  },
  {
    title: "Bank Transfer System",
    desc: "Simulates secure banking transactions including transfers, balance checks, and transaction history.",
    tech: ["Java", "JDBC", "MySQL"],
  },
  {
    title: "Hospital Management System",
    desc: "Basic system for managing patient records, doctor assignments, and hospital resource tracking.",
    tech: ["C", "File Handling"],
  },
  {
    title: "Java Quiz Application",
    desc: "An interactive quiz system with multiple categories, scoring, and timed question delivery.",
    tech: ["Java", "Swing"],
  },
  {
    title: "JDBC Project",
    desc: "Database connectivity and CRUD operations demonstrating advanced Java database integration patterns.",
    tech: ["Java", "JDBC", "SQL"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-medium mb-2">PORTFOLIO</p>
        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 flex flex-col hover:glow-box transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <h3 className="font-heading font-semibold">{p.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="w-fit gap-2 text-muted-foreground hover:text-primary">
              <Github className="w-4 h-4" /> View Code <ExternalLink className="w-3 h-3" />
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
