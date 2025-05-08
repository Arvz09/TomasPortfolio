
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="section-container bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate developer with an enthusiasm for learning and creating exceptional web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative overflow-hidden rounded-xl"
          >
            <div className="aspect-[4/3] bg-muted rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Developer working on laptop"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">Who Am I</h3>
            <p className="text-muted-foreground">
              I'm Arbie Tomas, a recent graduate with a Bachelor of Science in Information Technology. 
              My passion lies in building web applications and exploring new technologies in the 
              ever-evolving field of web development.
            </p>
            <p className="text-muted-foreground">
              As a graduate with intermediate programming knowledge, I'm eager to apply my skills 
              in real-world projects and continuously learn and grow as a developer.
            </p>
            <p className="text-muted-foreground">
              I specialize in building applications with{" "}
              <span className="highlight-text">JavaScript</span>,{" "}
              <span className="highlight-text">TypeScript</span>, and{" "}
              <span className="highlight-text">React</span>. My experience includes 
              working with both SQL and NoSQL databases, and implementing 
              responsive designs with Tailwind CSS.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, I enjoy staying updated with the latest tech
              trends and expanding my knowledge through online courses and tutorials.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors"
              >
                Let's work together
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
