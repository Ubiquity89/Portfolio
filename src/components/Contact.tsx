// src/components/Contact.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ContactInfo } from '@/types';
import { contact } from '@/data/contact';

const Contact: React.FC = () => {
  const { email, phone, linkedin, github } = contact;

  return (
    <section className="section-padding bg-white dark:bg-gray-900" id="contact">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Get In <span className="gradient-text">Touch</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <motion.div
            className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 shadow-card-lg border border-gray-100 dark:border-gray-700"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I'm open to internship and entry‑level opportunities. Feel free to reach out!
            </motion.p>

            <div className="grid grid-cols-1 gap-4">
              <motion.a
                href={`mailto:${email}`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="flex flex-col items-center gap-3 px-6 py-4 bg-white dark:bg-gray-900 rounded-xl shadow-card hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-500 group"
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary-500/25 transition-shadow"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">{email}</div>
                </div>
              </motion.a>

              {phone && (
                <motion.a
                  href={`tel:${phone}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="flex flex-col items-center gap-3 px-6 py-4 bg-white dark:bg-gray-900 rounded-xl shadow-card hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-500 group"
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-500/25 transition-shadow"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </motion.div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Phone</div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">{phone}</div>
                  </div>
                </motion.a>
              )}

           
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
