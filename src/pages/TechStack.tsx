import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function TechStack() {
  const techStack = {
    Frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    Backend: ["Node.js", "Express.js", "REST API", "GraphQL", "JWT", "OAuth", "WebSockets"],
    Database: ["MongoDB", "MySQL", "PostgreSQL", "Supabase"],
    "DevOps & Cloud": ["Git", "GitHub Actions", "Vercel", "Render", "Docker", "AWS"],
    Tools: ["VS Code", "Postman", "Figma", "npm", "Vite"],
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-xl font-bold">All Technologies</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-8">
        <motion.div
          className="space-y-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {Object.entries(techStack).map(([category, skills]) => (
            <motion.div key={category} variants={item}>
              <h2 className="text-lg font-semibold mb-4">{category}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="p-4 rounded-xl border border-border bg-card hover:bg-secondary/30 transition-colors"
                  >
                    <p className="font-medium text-foreground">{skill}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

