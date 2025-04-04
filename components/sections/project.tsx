'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  textColor: string;
  details: string;
  technologies: string[];
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'CLEAR Verified',
    description:
      'CLEAR Verified is an identity verification platform that allows users to verify their identity in a browser.',
    image: './CLEAR_Verified.png',
    color: 'from-blue-500 to-purple-600',
    textColor: 'text-blue-100',
    details: 'Developed and scaled CLEAR’s flagship identity verification platform, serving 2M+ users across LinkedIn, Avis, Home Depot, and healthcare organizations—generating over 50% of new user enrollments.',
    technologies: [
      'React',
      'Next.js',
      'Typscript',
      'Terraform',
      'NestJS',
      'Python',
      'Technical Writing',
      'Incident Management',
    ],
    live: 'https://identity.clearme.com/',
  },
  {
    id: 2,
    title: 'Unified Enrollment Flow',
    description:
      'Unified multiple enrollment flow handling all new user signups, simplifying user data models in databases',
    image: './enrollment.png',
    color: 'from-green-500 to-yellow-500',
    textColor: 'text-green-100',
    details:
      'Engineered highly configurable, CMS-driven reusable React components across the company’s site, leading to measurable conversion rate improvements via targeted A/B tests.',
    technologies: ['React', 'Gatsby', 'Typescript', 'Styled Components', 'Technical Writing'],
    live: 'https://clearme.com/enroll',
  },
  {
    id: 3,
    title: 'VectorSurv Maps',
    description:
      'Led development of responsive, high-performance data visualization tools (Mapbox SDK, D3.js) mapping thousands of data points, delivering real-time interaction and dynamic charting.',
    image: './vectorsurv.png',
    color: 'from-red-500 to-pink-600',
    textColor: 'text-red-100',
    details: 'Integrated frontend visualizations seamlessly with REST APIs (Express.js) and PostgreSQL, greatly enhancing user experience and analytical capabilities.',
    technologies: [
      'React',
      'PostgreSQL',
      'Node.js',
      'D3.js',
      'HTML/CSS',
      'Styled Components',
    ],
    live: 'https://maps.vectorsurv.org',
  },
];

export function ProjectSection() {
  // Define selectedProject state to accept Project type or null
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-background to-secondary/30 transition-colors duration-300 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen flex flex-col items-center justify-center"
      >
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-secondary/20 to-background animate-pulse" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              Featured Projects
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Explore my recent full-stack adventures—each crafted to deliver seamless experiences and powerful solutions
            </motion.p>
          </div>

          {/* Project Cards */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`bg-gradient-to-br ${project.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                />
                <motion.h3
                  className={`text-2xl font-semibold mt-4 ${project.textColor}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className={`mt-2 ${project.textColor} opacity-90`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="mt-4"
                >
                  <Button
                    size="lg"
                    className={`group bg-white/20 hover:bg-white/30 ${project.textColor}`}
                    onClick={() => setSelectedProject(project)} // now works fine
                  >
                    View Details
                    <FaChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog
            open={!!selectedProject}
            onOpenChange={() => setSelectedProject(null)}
          >
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="mb-4">{selectedProject.details}</p>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="group bg-blue-600 text-white hover:bg-blue-500">
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}
