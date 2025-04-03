'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronDown, X } from 'lucide-react';
import { GlobalStyles } from '@mui/material';
import { FlipCard } from '../flipCard';

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
  title: string;
  level: number;
  image: string;
  description: string;
  technologies: string[];
}

export function SkillSection() {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [visibleSkills, setVisibleSkills] = useState<number>(3);

  const skills: Skill[] = [
    {
      title: 'Frontend Development',
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
      title: 'Backend Development',
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
      title: 'DevOps',
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
            className="flex flex-wrap justify-center gap-8"
          >
            {skills.map((skill, idx) => <FlipCard {...skill} index={idx} key={skill.title} />)}
          </motion.div>

        </motion.div>
      </section>
    </>
  );
}
