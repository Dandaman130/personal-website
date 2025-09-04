import { personalInfo } from '@/data/siteData';

export function Contact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Let's Connect
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Interested in collaborating or discussing data analysis opportunities? 
            I'd love to hear from you.
          </p>
          
          <div className="inline-flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300 group">
            <svg 
              className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
