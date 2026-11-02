// src/components/DownloadButton.tsx
import React from 'react';
import { motion } from 'framer-motion';

export const DownloadButton: React.FC = () => (
  <motion.a
    href="/resume.pdf"
    download
    className="btn-secondary inline-flex items-center justify-center gap-2"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      animate={{ y: [0, 2, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </motion.svg>
    <span>Download Resume</span>
  </motion.a>
);
