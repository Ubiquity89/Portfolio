// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { DownloadButton } from '@/components/DownloadButton';
import { contact } from '@/data/contact';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" id="hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400/20 dark:bg-primary-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-400/20 dark:bg-accent-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-400 mb-4 tracking-wide"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Hello, I'm
          </motion.h2>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Ubiquity Sinha Ray
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl gradient-text font-semibold mb-8"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% auto"
            }}
          >
            Full‑Stack Developer
          </motion.p>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
        Final-year Computer Science student with hands-on MERN Stack experience, building full-stack applications with React, REST APIs, authentication, and databases. Strong in problem-solving with 300+ DSA problems solved and familiar with LLMs, RAG, and AI development tools.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="btn-primary inline-flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Projects</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.a>
          <DownloadButton />
          <motion.a
            href="#contact"
            className="btn-secondary inline-flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {[
            { href: contact.github, icon: <path d="M12 .5C5.7 .5 .5 5.7 .5 12c0 5.1 3.3 9.5 7.9 11 .6 .1 .8-.3 .8-.6v-2c-3.2 .7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7 .1-.7 .1-.7 1.1 .1 1.7 1.2 1.7 1.2 1 .1 .9 .6 .9 .6 .1 .6 .6 .9 .9 .8 .9-.5 .8-.9 .5-1.1-2.6-.3-5.3-1.3-5.3-5.9 0-1.2 .4-2.3 1.2-3.1-.1-.3-.5-1.5 .1-3.1 0 0 1-.3 3.3 1.2 .9-.2 2-.4 3-.4s2 .2 3 .4c2.3-1.5 3.3-1.7 3.3-1.7.6 1.6.2 3.1.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.9 7.9-11C23.5 5.7 18.3.5 12 .5z"/>, label: "GitHub" },
            { href: contact.linkedin, icon: <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.7-.8-1.7-1.7s.7-1.7 1.7-1.7 1.7 .8 1.7 1.7-.8 1.7-1.7 1.7zm13.5 11.3h-3v-5.5c0-1.3-.5-2.2-1.6-2.2-.9 0-1.5 .6-1.7 1.2-.1 .2-.1 .5-.1 .8v5.7h-3s.04-9.3 0-10h3v1.4c.4-.6 1-1.5 2.6-1.5 1.9 0 3.4 1.2 3.4 3.8v6.3z"/>, label: "LinkedIn" },
            { href: contact.leetcode, icon: <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>, label: "LeetCode" },
            { href: contact.gfg, icon: <g><text x="12" y="16" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor">ƏG</text></g>, label: "GeeksforGeeks" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener"
              aria-label={social.label}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
            >
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                {social.icon}
              </svg>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.a
          href="#about"
          className="text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          whileHover={{ scale: 1.2 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
