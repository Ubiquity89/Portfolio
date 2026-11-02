// src/data/skills.ts
import { SkillCategory } from '@/types';

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'JWT Authentication'],
  },
  {
    category: 'Database',
    items: ['MongoDB', 'Firebase', 'MySQL'],
  },
  {
    category: 'State & Libraries',
    items: ['Redux', 'React Query', 'Axios', 'Chart.js'],
  },
  {
    category: 'AI',
    items: ['LLMs', 'RAG', 'LangChain', 'LangGraph', 'OpenAI API', 'Prompt Engineering'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'Vercel', 'Render', 'Netlify'],
  },
];
