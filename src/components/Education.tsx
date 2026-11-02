// src/components/Education.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { education } from '@/data/education';

const Education: React.FC = () => {
  return (
    <section className="section-padding bg-white dark:bg-gray-900" id="education">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="gradient-text">Education</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-card border border-gray-100 dark:border-gray-700 card-hover"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <motion.h3
                      className="text-xl font-bold text-gray-900 dark:text-white mb-1"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      {edu.institution}
                    </motion.h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{edu.degree}</p>
                    {edu.location && <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.location}</p>}
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {edu.startDate} – {edu.endDate}
                    </p>
                  </div>
                  {edu.cgpa && (
                    <motion.div
                      className="bg-white dark:bg-gray-900 rounded-lg px-4 py-2 shadow-sm border border-gray-200 dark:border-gray-600"
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <p className="text-sm text-gray-500 dark:text-gray-400">CGPA</p>
                      <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">{edu.cgpa}</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
