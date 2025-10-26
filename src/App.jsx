import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 selection:bg-fuchsia-500/20 selection:text-fuchsia-700 dark:selection:text-fuchsia-300">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
      </main>
      <footer className="border-t border-neutral-200/70 dark:border-neutral-800/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-600 dark:text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} seekhoroz. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-neutral-900 dark:hover:text-white">Features</a>
            <a href="#how" className="hover:text-neutral-900 dark:hover:text-white">How it works</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
