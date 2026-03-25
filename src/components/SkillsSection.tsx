import { motion } from "framer-motion";

const skills = [
  { name: "Java", level: 85 },
  { name: "Spring Boot", level: 75 },
  { name: "React", level: 70 },
  { name: "JDBC", level: 80 },
  { name: "C Programming", level: 70 },
  { name: "Database Management", level: 75 },
];

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-medium mb-2">SKILLS</p>
        <h2 className="text-3xl md:text-4xl font-bold">Technologies I Work With</h2>
      </motion.div>

      <div className="space-y-6">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-heading font-medium text-sm">{s.name}</span>
              <span className="text-primary text-sm">{s.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-amber-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
