import { PersonalInfo, Project, SkillCategory } from '@/types';

// Personal Information - Single source of truth
export const personalInfo: PersonalInfo = {
  name: "Dan Dunleavy",
  title: "Data Analyst",
  tagline: "Full-stack developer and data analyst building innovative solutions from game economics to cloud applications",
  email: "dandun914@gmail.com"
};

// Projects - Easily replaceable data structure
export const projects: Project[] = [
  {
    id: "skyrim-gdp",
    title: "Skyrim GDP Analysis",
    description: "Designed and populated a MySQL database containing all Skyrim items and their crafting recipes. Developed Python applications for both automated inventory parsing and manual item entry into the database. Analyzed Skyrim's in-game economy to estimate GDP and compared it to real-world economic models.",
    technologies: ["Python", "MySQL", "Data Analysis", "Economic Modeling"],
    githubUrl: "https://github.com/dandun914/skyrim-gdp-analysis",
    isHighlight: true,
    year: "2025"
  },
  {
    id: "blackjack-aws",
    title: "Online Blackjack Game",
    description: "Developed an online game with real-time gameplay, leveraging AWS for scalable hosting and cloud services. Implemented game logic using AWS Lambda, S3, and DynamoDB for seamless performance. Utilized GitHub for version control and collaboration through regular pushes, pulls, and branch management.",
    technologies: ["AWS Lambda", "DynamoDB", "S3", "JavaScript", "GitHub"],
    githubUrl: "https://github.com/dandun914/blackjack-aws",
    year: "2024"
  },
  {
    id: "basketball-simulator",
    title: "Basketball Career Simulator",
    description: "Developed a dynamic career simulation system with player statistics, career choices, skill growth and progression. Implemented contract negotiations, intuitive stat upgrades, career decision-making, and a streamlined user interface for clear and engaging gameplay.",
    technologies: ["Java", "Game Development", "UI/UX Design", "Simulation"],
    githubUrl: "https://github.com/dandun914/basketball-simulator",
    year: "2023"
  },
  {
    id: "khanquest-board-game",
    title: "KhanQuest Board Game",
    description: "Designed a strategy board game with army control, territorial battles, faction abilities and resource management. Conducted extensive playtesting to refine balance and improve gameplay mechanics. Created comprehensive game rules and balanced faction systems.",
    technologies: ["Game Design", "Strategy Development", "Playtesting", "Balance Design"],
    year: "2018-2025"
  }
];

// Skills - Organized by category for easy maintenance
export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Java", proficiency: "Advanced" },
      { name: "Python", proficiency: "Advanced" },
      { name: "JavaScript", proficiency: "Intermediate" },
      { name: "HTML", proficiency: "Intermediate" },
      { name: "C#", proficiency: "Intermediate" },
      { name: "SQL", proficiency: "Intermediate" }
    ]
  },
  {
    name: "Software & Tools",
    skills: [
      { name: "AWS", proficiency: "Intermediate" },
      { name: "GitHub", proficiency: "Advanced" },
      { name: "VS Code", proficiency: "Advanced" },
      { name: "Eclipse", proficiency: "Intermediate" },
      { name: "IntelliJ", proficiency: "Intermediate" },
      { name: "Rider", proficiency: "Intermediate" },
      { name: "PyCharm", proficiency: "Intermediate" }
    ]
  },
  {
    name: "Cloud & Database",
    skills: [
      { name: "MySQL", proficiency: "Advanced" },
      { name: "AWS Lambda", proficiency: "Intermediate" },
      { name: "DynamoDB", proficiency: "Intermediate" },
      { name: "S3", proficiency: "Intermediate" },
      { name: "Microsoft Suite", proficiency: "Advanced" }
    ]
  },
  {
    name: "Technical & Interpersonal",
    skills: [
      { name: "PC Building", proficiency: "Advanced" },
      { name: "Hardware Troubleshooting", proficiency: "Advanced" },
      { name: "Network Configuration", proficiency: "Intermediate" },
      { name: "Public Speaking", proficiency: "Advanced" },
      { name: "Team Collaboration", proficiency: "Advanced" },
      { name: "Analytical Thinking", proficiency: "Advanced" }
    ]
  }
];
