import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout/Layout';
export function Settings() {
  return <Layout>
      <div className="pt-24 pb-16 bg-ivory">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-8" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            Settings
          </motion.h1>
          <motion.div className="bg-white rounded-xl shadow-lg p-8" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <p className="text-charcoal/70">Settings content coming soon...</p>
          </motion.div>
        </div>
      </div>
    </Layout>;
}