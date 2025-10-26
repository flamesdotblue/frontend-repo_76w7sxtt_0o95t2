import React from 'react';
import { Rocket, Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 dark:bg-neutral-900/50 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-orange-400 text-white shadow-sm">
              <Rocket size={18} />
            </div>
            <span className="text-lg tracking-tight">seekhoroz</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
            <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Features</a>
            <a href="#how" className="hover:text-neutral-900 dark:hover:text-white transition-colors">How it works</a>
            <a href="#cta" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Get started</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="relative inline-flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
              <Bell size={16} />
              <span className="hidden sm:inline">Notifications</span>
            </button>
            <button className="inline-flex items-center rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
