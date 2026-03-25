import { motion } from "framer-motion";
import { Code, Lightbulb, Target, GraduationCap } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "B.Tech CS Student", desc: "Strong academic foundation in computer science" },
  { icon: Code, title: "Full Stack Dev", desc: "Java Spring Boot + React expertise" },
  { icon: Lightbulb, title: "Problem Solver", desc: "Analytical thinking and clean code" },
  { icon: Target, title: "Growth Mindset", desc: "Continuously learning new technologies" },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-medium mb-2">ABOUT ME</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Designing Solutions, Not Just Code
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-muted-foreground"
        >
          <p>
            I'm a B.Tech Computer Science student with a deep passion for building scalable web applications.
            As an aspiring Full Stack Java Developer, I specialize in Spring Boot for backend and React for frontend development.
          </p>
          <p>
            Though I'm a fresher, I bring strong foundational knowledge in Java, database management, and web technologies.
            I'm driven by curiosity and a desire to create efficient, user-friendly solutions that solve real-world problems.
          </p>
          <p>
            My approach combines clean code practices with modern development patterns, ensuring applications are both maintainable and performant.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-lg p-5 hover:glow-box transition-shadow duration-300"
            >
              <h.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-sm mb-1">{h.title}</h3>
              <p className="text-xs text-muted-foreground">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
