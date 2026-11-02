// src/components/Skills.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/skills';

const Skills: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800" id="skills">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Technical <span className="gradient-text">Skills</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-card-lg card-hover border border-gray-100 dark:border-gray-700"
                whileHover={{ scale: 1.02 }}
              >
                <motion.h3
                  className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <motion.span
                    className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {category.category}
                </motion.h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-700 dark:to-gray-600 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium hover:from-primary-100 hover:to-accent-100 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-200 border border-primary-100 dark:border-gray-600 cursor-default"
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
