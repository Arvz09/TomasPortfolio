import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, Zap, Target, Heart, Brain } from "lucide-react";

export default function SkillsSection() {
  const technicalSkills = [
    {
      title: "Frontend Development",
      skills: ["JavaScript (ES6+)", "TypeScript", "React.js", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST API", "GraphQL", "OAuth", "JWT", "WebSockets", "Polling"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub Actions", "Vercel", "Render"]
    }
  ];

  const softSkills = [
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills and experience in cross-functional teams"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analytical thinker with a knack for finding efficient solutions to complex challenges"
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and methodologies, always eager to expand my knowledge"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality results while meeting project deadlines"
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Deeply committed to creating impactful solutions and continuously improving my craft"
    },
    {
      icon: Brain,
      title: "Critical Thinking",
      description: "Ability to analyze situations from multiple perspectives and make informed decisions"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section-container">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            A combination of technical expertise and professional attributes that I bring to every project.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Expertise</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {technicalSkills.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full animated-border card-hover">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                      <motion.ul
                        className="space-y-2"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        {category.skills.map((skill) => (
                          <motion.li key={skill} variants={item} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            <span>{skill}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Professional Attributes</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full animated-border card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <skill.icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-bold">{skill.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
