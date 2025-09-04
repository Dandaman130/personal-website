'use client';

import dynamic from 'next/dynamic';
import { personalInfo } from '@/data/siteData';

// Dynamically import ThemeToggle to avoid SSR issues
const ThemeToggle = dynamic(() => import('./ThemeToggle').then(mod => ({ default: mod.ThemeToggle })), {
  ssr: false,
  loading: () => (
    <div className="fixed top-6 right-6 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg w-11 h-11" />
  )
});

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <ThemeToggle />
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading with subtle animation */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block text-gray-900 dark:text-gray-100">
              {personalInfo.name}
            </span>
            <span className="block text-gray-600 dark:text-gray-400 text-2xl sm:text-3xl lg:text-4xl font-normal mt-2">
              {personalInfo.title}
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-12">
            <button 
              onClick={scrollToProjects}
              className="animate-bounce hover:animate-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full p-2"
              aria-label="Scroll to projects section"
            >
              <svg 
                className="w-6 h-6 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
