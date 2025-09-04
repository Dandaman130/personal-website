import { skillCategories } from '@/data/siteData';
import { SkillCategory, Skill } from '@/types';

interface SkillBadgeProps {
  skill: Skill;
}

function SkillBadge({ skill }: SkillBadgeProps) {
  const getProficiencyColor = (proficiency?: string) => {
    switch (proficiency) {
      case 'Expert':
        return 'bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900';
      case 'Advanced':
        return 'bg-gray-600 dark:bg-gray-400 text-white dark:text-gray-900';
      case 'Intermediate':
        return 'bg-gray-400 dark:bg-gray-600 text-white';
      case 'Beginner':
        return 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${getProficiencyColor(skill.proficiency)}`}>
        {skill.name}
      </span>
      {skill.proficiency && (
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {skill.proficiency}
        </span>
      )}
    </div>
  );
}

interface SkillCategoryProps {
  category: SkillCategory;
}

function SkillCategoryCard({ category }: SkillCategoryProps) {
  return (
    <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        {category.name}
      </h3>
      <div className="space-y-3">
        {category.skills.map((skill, index) => (
          <SkillBadge key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technical expertise developed through hands-on experience and continuous learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={`${category.name}-${index}`} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
