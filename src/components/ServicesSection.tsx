import { motion } from "framer-motion";
import { Globe, Server, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full Stack Web Development",
    desc: "End-to-end web applications using React for dynamic frontends and Spring Boot for robust backends.",
  },
  {
    icon: Server,
    title: "Backend API Development",
    desc: "RESTful APIs with Spring Boot, featuring secure authentication, database integration, and clean architecture.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Applications",
    desc: "Scalable, mobile-first web apps with modern UI/UX, optimized for performance across all devices.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-medium mb-2">SERVICES</p>
        <h2 className="text-3xl md:text-4xl font-bold">What I Can Build For You</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass rounded-xl p-8 text-center hover:glow-box transition-all duration-300 group"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
