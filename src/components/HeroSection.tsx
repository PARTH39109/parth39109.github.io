import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-primary font-medium mb-2">Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Parth <span className="text-gradient">Mandhare</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-heading">
          Full Stack Developer
        </p>
        <p className="text-muted-foreground mb-2 font-heading text-lg">
          Java | Spring Boot | React
        </p>
        <p className="text-muted-foreground/80 mb-8 max-w-md">
          Building scalable and efficient web applications with modern technologies.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="gap-2" asChild>
            <a href="#projects">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="#contact">
              <Mail className="w-4 h-4" /> Contact Me
            </a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow-box-strong">
            <img
              src="https://i.postimg.cc/66SYRZ2X/My-Photo-2.jpg"
              alt="Parth Mandhare"
              width={512}
              height={512}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg px-4 py-2 glow-box animate-float">
            <p className="text-primary font-bold text-lg">B.Tech </p>
            <p className="text-xs text-muted-foreground">Computer Engineer</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
