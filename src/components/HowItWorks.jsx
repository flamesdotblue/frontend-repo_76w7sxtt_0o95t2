import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Set your goal',
    desc: 'Pick a subject like Python or Machine Learning, choose daily hours, proficiency, and outcomes.'
  },
  {
    title: 'Get your plan',
    desc: 'An AI-crafted schedule splits the subject into modules with realistic pacing and buffers.'
  },
  {
    title: 'Track & practice',
    desc: 'Log time, mark completion, and take weekly assessments tuned to what you covered.'
  },
  {
    title: 'Improve continuously',
    desc: 'Receive feedback on weak areas, adjusted schedules, and curated resources to stay on track.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative py-20 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white text-center"
        >
          How it works
        </motion.h2>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6"
            >
              <span className="absolute -top-4 left-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold shadow">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{step.desc}</p>
            </motion.li>
          ))}
        </ol>

        <div id="cta" className="mt-14 flex flex-col items-center justify-center gap-4">
          <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-orange-400 text-white px-6 py-3 font-semibold shadow-lg hover:opacity-95 transition">
            Create your plan
          </a>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">No credit card required</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
