import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
            >
              AI-Powered Personalized Learning
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400"> for everyone</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-neutral-600 dark:text-neutral-300"
            >
              Seekhoroz builds your study plan, tracks your progress, and adapts with smart feedback—so you can master any subject with clarity and confidence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-3 font-semibold shadow-lg shadow-neutral-900/10 dark:shadow-white/10 hover:opacity-90 transition">Start learning</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-neutral-300 dark:border-neutral-700 px-6 py-3 font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">Explore features</a>
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/90 dark:from-neutral-950/60 dark:via-neutral-950/30 dark:to-neutral-950/95" />
      </div>
    </section>
  );
};

export default Hero;
