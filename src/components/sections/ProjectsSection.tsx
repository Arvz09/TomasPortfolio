
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string[];
  demoUrl: string;
  githubUrl: string;
};

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Appointment Scheduling System",
      description:
        "Developed a custom appointment scheduling system for Pet Crossing Animal Clinic to streamline client bookings and manage veterinary appointments efficiently. The system allows pet owners to select available dates and times, input pet details, and receive confirmation notifications. Admins can view, update, or cancel appointments through a secure dashboard. This project improved the clinic's workflow, reduced scheduling conflicts, and enhanced the overall client experience.",
      image: "Petcrossing.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Polling", "Tailwind CSS", "OAuth"],
      category: ["fullstack", "frontend", "backend"],
      demoUrl: "https://pet-crossing-clinic.vercel.app/",
      githubUrl: "https://github.com/Arvz09/PetCrossing",
    },
    {
      id: 2,
      title: "B1G Corporation Official Website",
      description:
        "Developed the official website for B1G Corporation, a distribution company based in the Philippines. The site offers a streamlined user experience, featuring product showcases, company information, and partner opportunities. It includes an age verification gateway to comply with regulatory standards and integrates contact and support channels to enhance customer engagement. This project helped strengthen B1G’s digital presence and support its growth in both local and international markets.",
      image: "B1gcorp.png",
      technologies: ["Javascript", "Express", "Google APIs", "Node.js"],
      category: ["fullstack", "frontend"],
      demoUrl: "https://www.b1gcorporation.com/",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Banking API",
      description:
        "A secure RESTful API for banking operations with comprehensive documentation and test coverage.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["Node.js", "Express", "MySQL", "JWT", "Jest"],
      category: ["backend"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Blog Platform",
      description:
        "A modern blog platform with a rich text editor, tagging system, and user engagement features.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      technologies: ["React", "Next.js", "Tailwind CSS", "MongoDB"],
      category: ["fullstack", "frontend"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="section-container bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work, showcasing my skills and expertise in
            full-stack development.
          </p>
        </motion.div>

        <motion.div layout className="grid gap-8 md:grid-cols-2">
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                layout
                className="animated-border card-hover"
              >
                <Card className="h-full overflow-hidden border-0">
                  <div className="h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex justify-between">
                    {/* <Button asChild variant="outline" size="sm">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <Github className="h-4 w-4" /> Code
                      </a>
                    </Button> */}
                    <Button asChild size="sm">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" /> View Project
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
