// src/components/About.tsx
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="section-padding bg-white dark:bg-gray-900" id="about">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <motion.div
            className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 shadow-card-lg border border-gray-100 dark:border-gray-700"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Final-year Computer Science student with hands-on experience in MERN Stack development and building full-stack web applications. Experienced in developing responsive React interfaces, REST APIs, authentication systems, database-driven applications, and integrating third-party APIs.
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Strong problem-solving foundation with <span className="font-semibold text-primary-600 dark:text-primary-400">300+ DSA problems solved</span> and working knowledge of LLMs, RAG, and modern AI development tools.
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              I specialize in full‑stack development, building end‑to‑end web applications using React, TypeScript, Node.js, and MongoDB. I enjoy turning ideas into functional, responsive products, integrating APIs, implementing authentication, and ensuring a great user experience.
            </motion.p>

            <motion.div
              className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {[
                { value: "9.10", label: "CGPA" },
                { value: "10+", label: "Projects" },
                { value: "300+", label: "DSA Problems" },
                { value: "2027", label: "Graduation" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-card dark:shadow-glow"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                >
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
