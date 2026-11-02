// src/components/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => (
  <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
    <div className="container-custom">
      <div className="text-center">
        <motion.h3
          className="text-2xl font-bold mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Ubiquity Sinha Ray
        </motion.h3>
        <p className="text-gray-400 mb-6">Full‑Stack Developer</p>
        <div className="flex justify-center gap-6 mb-8">
          <motion.a
            href="https://github.com/Ubiquity89"
            target="_blank"
            rel="noopener"
            className="text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.7 .5 .5 5.7 .5 12c0 5.1 3.3 9.5 7.9 11 .6 .1 .8-.3 .8-.6v-2c-3.2 .7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7 .1-.7 .1-.7 1.1 .1 1.7 1.2 1.7 1.2 1 .1 .9 .6 .9 .6 .1 .6 .6 .9 .9 .8 .9-.5 .8-.9 .5-1.1-2.6-.3-5.3-1.3-5.3-5.9 0-1.2 .4-2.3 1.2-3.1-.1-.3-.5-1.5 .1-3.1 0 0 1-.3 3.3 1.2 .9-.2 2-.4 3-.4s2 .2 3 .4c2.3-1.5 3.3-1.7 3.3-1.7.6 1.6.2 3.1.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.9 7.9-11C23.5 5.7 18.3.5 12 .5z"/>
            </svg>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ubiquity-sinha-ray-09434227b/"
            target="_blank"
            rel="noopener"
            className="text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.7-.8-1.7-1.7s.7-1.7 1.7-1.7 1.7 .8 1.7 1.7-.8 1.7-1.7 1.7zm13.5 11.3h-3v-5.5c0-1.3-.5-2.2-1.6-2.2-.9 0-1.5 .6-1.7 1.2-.1 .2-.1 .5-.1 .8v5.7h-3s.04-9.3 0-10h3v1.4c.4-.6 1-1.5 2.6-1.5 1.9 0 3.4 1.2 3.4 3.8v6.3z"/>
            </svg>
          </motion.a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Ubiquity Sinha Ray. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
