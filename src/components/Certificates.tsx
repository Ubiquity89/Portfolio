// src/components/Certificates.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { certificates } from '@/data/certificates';

const Certificates: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800" id="certificates">
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
              <span className="gradient-text">Certificates</span>
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
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-card border border-gray-100 dark:border-gray-700 card-hover"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-300 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <motion.h3
                    className="text-lg font-bold text-gray-900 dark:text-white mb-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {cert.title}
                  </motion.h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-1">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
