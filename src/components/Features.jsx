import React from 'react';
import { Target, Calendar, BarChart3, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Target,
    title: 'AI-Generated Study Plans',
    desc: 'Get a tailored roadmap split into modules and topics aligned to your time and goals.'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    desc: 'Daily and weekly allocation with buffers for revisions and real-life delays.'
  },
  {
    icon: BarChart3,
    title: 'Progress Tracking',
    desc: 'Log study hours, mark topics as done/partial/skipped, and visualize momentum.'
  },
  {
    icon: CheckCircle2,
    title: 'Adaptive Assessments',
    desc: 'Weekly quizzes and feedback that adjust the upcoming plan to your strengths.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white text-center"
        >
          Everything you need to learn better, faster
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-orange-400 text-white">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
