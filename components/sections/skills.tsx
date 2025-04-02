'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronDown, X } from 'lucide-react';
import { GlobalStyles } from '@mui/material';

const scrollbarStyles = (
  <GlobalStyles
    styles={{
      '*::-webkit-scrollbar': {
        width: '8px',
      },
      '*::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '*::-webkit-scrollbar-thumb': {
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '20px',
      },
      '*::-webkit-scrollbar-thumb:hover': {
        background: 'rgba(255, 255, 255, 0.7)',
      },
    }}
  />
);

interface Skill {
  name: string;
  level: number;
  image: string;
  description: string;
  technologies: string[];
}

export function SkillSection() {
  const [showLevel, setShowLevel] = useState<boolean>(true);
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [visibleSkills, setVisibleSkills] = useState<number>(3);

  const skills: Skill[] = [
    {
      name: 'Frontend Development',
      level: 95,
      image: './frontend.png',
      description: 'Building interactive UIs with TypeScript',
      technologies: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Gatsby',
        'Tailwind CSS',
        'Material-UI',
        'Styled Components',
        'SASS',
      ],
    },
    {
      name: 'Backend Development',
      level: 80,
      image: './backend.png',
      description: 'Software architecture and restful APIs',
      technologies: [
        'Node.js',
        'Express',
        'Nest.js',
        'RESTful API',
        'GraphQL',
        'Python',
        'Django',
        'Ruby',
      ],
    },
    {
      name: 'DevOps',
      level: 80,
      image: './devops.png',
      description: 'Containerization and orchestration',
      technologies: [
        'Terraform',
        'Docker',
        'Kubernetes',
        'AWS',
        'Jenkins',
        'CI/CD',
        'Git',
        'GitHub Actions',
      ],
    },

  ];

  const toggleSkillExpansion = (skillName: string) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName);
  };

  const showMoreSkills = () => {
    setVisibleSkills((prevVisible) => Math.min(prevVisible + 3, skills.length));
  };

  const getSkillEmoji = (skillName: string) => {
    const emojiMap: { [key: string]: string } = {
      React: '⚛️',
      'Node.js': '🟢',
      CSS: '🎨',
      JavaScript: '🟨',
      TypeScript: '🔷',
      GraphQL: '🔺',
      Python: '🐍',
      Docker: '🐳',
    };
    return emojiMap[skillName] || '🔧';
  };

  return (
    <>
      {scrollbarStyles}
      <section
        id="skills"
        className="py-24 bg-gradient-to-br from-background to-secondary overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-6 text-primary"
            >
              My Skills
            </motion.h2>


          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {skills.slice(0, visibleSkills).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 100,
                      damping: 10,
                    },
                  }}
                  exit={{
                    scale: 0.8,
                    opacity: 0,
                    transition: { duration: 0.1 },
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                    transition: { duration: 0.3 },
                  }}
                  className="relative overflow-hidden rounded-lg shadow-xl transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, hsl(${(index * 50) % 360}, 70%, 50%), hsl(${(index * 50 + 180) % 360
                      }, 70%, 50%))`,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: 'easeInOut',
                    }}
                  />
                  <AnimatePresence>
                    {expandedSkill === skill.name ? (
                      <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent max-h-full grid grid-rows-[auto_1fr]"
                        style={{
                          backgroundColor: `hsla(${(index * 50) % 360}, 70%, 50%, 0.95)`,
                        }}
                      >
                        <Button
                          size="sm"
                          className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 transition-colors duration-300 z-10"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSkillExpansion(skill.name);
                          }}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        <div>
                          <h4 className="text-white font-semibold mb-2 text-2xl">
                            {skill.name}
                          </h4>
                          <p
                            className="text-white mb-4 text-lg"
                            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
                          >
                            {skill.description}
                          </p>
                        </div>
                        <div className="overflow-y-auto">
                          <h5 className="text-white font-semibold mb-2 text-xl">
                            Technologies used:
                          </h5>
                          <ul className="list-none text-white grid grid-cols-2 gap-x-6 gap-y-2">
                            {skill.technologies.map((tech, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className="flex items-center text-base"
                              >
                                {tech}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        className="p-6 relative z-10"
                        animate={{ y: [0, 5, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: 'easeInOut',
                        }}
                      >
                        <motion.div
                          className="flex items-center justify-center mb-4"
                          initial={{ opacity: 0, filter: 'blur(20px)' }}
                          animate={{ opacity: 1, filter: 'blur(0px)' }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          <img
                            src={skill.image}
                            alt={skill.name}
                            className="w-full h-full"
                          />
                        </motion.div>
                        <motion.h3
                          className="text-2xl font-semibold text-white mb-2"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.6, duration: 0.5 }}
                        >
                          {skill.name}
                        </motion.h3>
                        {(
                          <motion.div
                            className="w-full bg-white/30 rounded-full h-2.5 mb-4 overflow-hidden"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ delay: 0.7, duration: 1 }}
                          >
                            <motion.div
                              className="bg-primary h-2.5 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{
                                delay: 1,
                                duration: 1.5,
                                ease: 'easeOut',
                              }}
                            />
                          </motion.div>
                        )}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8, duration: 0.5 }}
                          className="mt-4"
                        >
                          <Button
                            size="sm"
                            className="group relative overflow-hidden transition-colors duration-300"
                            onClick={() => toggleSkillExpansion(skill.name)}
                            style={{
                              backgroundColor: `hsl(${(index * 50) % 360}, 70%, 50%)`,
                            }}
                          >
                            <span className="relative z-10">
                              {expandedSkill === skill.name
                                ? 'Less Details'
                                : 'More Details'}
                            </span>
                            <motion.span
                              className="absolute inset-0"
                              initial={{ x: '100%' }}
                              whileHover={{ x: 0 }}
                              transition={{ duration: 0.3 }}
                              style={{
                                backgroundColor: `hsl(${(index * 50 + 180) % 360}, 70%, 50%)`,
                              }}
                            />
                            {expandedSkill === skill.name ? (
                              <X className="ml-2 h-4 w-4 transition-transform group-hover:rotate-90 relative z-10" />
                            ) : (
                              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                            )}
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {visibleSkills < skills.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 text-center"
            >
              <Button
                onClick={showMoreSkills}
                size="lg"
                className="group transition-colors duration-300 hover:bg-green-600"
              >
                Show More
                <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      </section>
    </>
  );
}
