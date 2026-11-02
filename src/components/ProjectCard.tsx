// src/components/ProjectCard.tsx
import React from 'react';
import { Project } from '@/types';
import { motion } from 'framer-motion';

interface Props {
  project: Project;
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-card-lg card-hover border border-gray-100 dark:border-gray-700 group"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative overflow-hidden">
        <motion.div
          className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-6xl font-bold text-primary-300/50 dark:text-primary-500/30">{project.title.charAt(0)}</div>
          )}
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </div>

      <div className="p-6">
        <motion.h3
          className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {project.title}
        </motion.h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-700 dark:to-gray-600 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-lg border border-primary-100 dark:border-gray-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
          {project.liveDemo && (
            <motion.a
              href={project.liveDemo}
              target="_blank"
              rel="noopener"
              className="flex-1 text-center px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </motion.a>
          )}
          {project.repo && (
            <motion.a
              href={project.repo}
              target="_blank"
              rel="noopener"
              className="flex-1 text-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
