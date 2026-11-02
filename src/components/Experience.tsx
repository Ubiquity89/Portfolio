// src/components/Experience.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '@/data/experience';

const Experience: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800" id="experience">
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
              Work <span className="gradient-text">Experience</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-600 to-accent-600"></div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />

                  <div className="md:w-1/2"></div>

                  <div className="md:w-1/2">
                    <motion.div
                      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-card-lg card-hover border border-gray-100 dark:border-gray-700 ml-8 md:ml-0"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full">
                          {exp.startDate} – {exp.endDate}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                            <motion.span
                              className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                            />
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                      {exp.projectLinks && exp.projectLinks.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Project Links:</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.projectLinks.map((link, i) => (
                              <motion.a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener"
                                className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 underline"
                                whileHover={{ scale: 1.05 }}
                              >
                                {link.name}
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
