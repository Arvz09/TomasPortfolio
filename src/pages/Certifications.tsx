import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

type Certification = {
  title: string;
  issuer: string;
};

export default function Certifications() {
  const certifications: Certification[] = [
    { title: "To Follow", issuer: "To Follow" },
   
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
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
            <h1 className="text-xl font-bold">All Certifications</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-4 rounded-xl border border-border bg-card hover:bg-secondary/30 transition-colors"
            >
              <h3 className="font-semibold text-foreground">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

