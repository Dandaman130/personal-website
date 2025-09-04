import { projects } from '@/data/siteData';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={`group relative p-6 rounded-lg border transition-all duration-300 hover:shadow-lg ${
      project.isHighlight 
        ? 'border-gray-400 dark:border-gray-500 bg-gray-50 dark:bg-gray-800' 
        : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'
    }`}>
      {project.isHighlight && (
        <div className="absolute -top-3 left-6">
          <span className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </span>
        </div>
      )}
      
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {project.year}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {(project.githubUrl || project.liveUrl) && (
          <div className="flex gap-4 pt-2">
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my data analysis and technical skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
