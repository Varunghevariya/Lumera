import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { motion } from 'framer-motion';
export function Layout({
  children
}) {
  return <div className="flex flex-col min-h-screen bg-ivory text-charcoal">
      <Header />
      <motion.main className="flex-grow" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} transition={{
      duration: 0.5
    }}>
        {children}
      </motion.main>
      <Footer />
    </div>;
}