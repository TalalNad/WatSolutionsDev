import { 
  FaCloud, 
  FaRobot,
  FaChartLine, 
  FaCode,
  FaMobile,
  FaDatabase,
  FaCogs,
  FaRocket,
  FaBrain,
  FaStore,
  FaChartBar,
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws
} from 'react-icons/fa';
import {
  SiKubernetes,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiTensorflow,
  SiPytorch,
  SiGithubactions,
  SiGraphql
} from 'react-icons/si';

export const servicesData = [
  {
    icon: FaCloud,
    title: 'SaaS Development',
    description: 'Build scalable, cloud-native SaaS applications from concept to production with modern architecture.',
    color: '#38bdf8'
  },
  {
    icon: FaRobot,
    title: 'AI & Machine Learning',
    description: 'Implement intelligent solutions with cutting-edge AI/ML models, NLP, and computer vision capabilities.',
    color: '#22c55e'
  },
  {
    icon: SiKubernetes,
    title: 'DevOps & MLOps',
    description: 'Streamline deployment pipelines, automate workflows, and scale ML models in production environments.',
    color: '#8b5cf6'
  },
  {
    icon: FaChartLine,
    title: 'Data Science & Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics, visualization, and predictive modeling.',
    color: '#f59e0b'
  },
  {
    icon: FaCode,
    title: 'Full Stack Development',
    description: 'End-to-end web application development with modern frameworks, responsive design, and robust backends.',
    color: '#ec4899'
  },
  {
    icon: FaMobile,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    color: '#06b6d4'
  },
  {
    icon: FaDatabase,
    title: 'Database Architecture',
    description: 'Design and optimize scalable database solutions with PostgreSQL, MongoDB, and modern data warehouses.',
    color: '#10b981'
  },
  {
    icon: FaCogs,
    title: 'API Development',
    description: 'Build robust, scalable REST and GraphQL APIs with comprehensive documentation and security.',
    color: '#6366f1'
  }
];

export const caseStudiesData = [
  {
    icon: FaRocket,
    category: 'SaaS Platform',
    title: 'Enterprise Task Management',
    description: 'Built a scalable task management SaaS platform serving 10,000+ users with real-time collaboration, AI-powered prioritization, and advanced analytics.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    color: '#38bdf8'
  },
  {
    icon: FaBrain,
    category: 'AI/ML Solution',
    title: 'Predictive Analytics Engine',
    description: 'Developed an ML-powered analytics platform that increased forecast accuracy by 40% using TensorFlow and custom algorithms.',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
    color: '#22c55e'
  },
  {
    icon: FaStore,
    category: 'E-commerce',
    title: 'Modern Marketplace Platform',
    description: 'Created a full-featured marketplace with payment integration, inventory management, and automated seller onboarding.',
    tags: ['Next.js', 'Stripe', 'MongoDB', 'AWS'],
    color: '#f59e0b'
  },
  {
    icon: FaChartBar,
    category: 'Data Platform',
    title: 'Business Intelligence Dashboard',
    description: 'Designed and deployed a real-time BI dashboard processing millions of data points with custom visualizations and alerts.',
    tags: ['React', 'D3.js', 'Python', 'Kubernetes'],
    color: '#8b5cf6'
  }
];

export const techStackData = [
  { name: 'React', icon: FaReact, category: 'Frontend', color: '#61dafb' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend', color: '#ffffff' },
  { name: 'Angular', icon: FaAngular, category: 'Frontend', color: '#dd0031' },
  { name: 'Vue.js', icon: FaVuejs, category: 'Frontend', color: '#42b883' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Frontend', color: '#3178c6' },
  { name: 'Tailwind', icon: SiTailwindcss, category: 'Frontend', color: '#06b6d4' },
  
  { name: 'Node.js', icon: FaNodeJs, category: 'Backend', color: '#339933' },
  { name: 'Python', icon: FaPython, category: 'Backend', color: '#3776ab' },
  { name: 'Express', icon: SiExpress, category: 'Backend', color: '#ffffff' },
  { name: 'Django', icon: SiDjango, category: 'Backend', color: '#092e20' },
  { name: 'FastAPI', icon: SiFastapi, category: 'Backend', color: '#009688' },
  { name: 'Flask', icon: SiFlask, category: 'Backend', color: '#ffffff' },
  { name: 'GraphQL', icon: SiGraphql, category: 'Backend', color: '#e10098' },
  
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database', color: '#4169e1' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Database', color: '#47a248' },
  { name: 'Redis', icon: SiRedis, category: 'Database', color: '#dc382d' },
  { name: 'SQL', icon: FaDatabase, category: 'Database', color: '#00758f' },
  
  { name: 'TensorFlow', icon: SiTensorflow, category: 'AI/ML', color: '#ff6f00' },
  { name: 'PyTorch', icon: SiPytorch, category: 'AI/ML', color: '#ee4c2c' },
  
  { name: 'Docker', icon: FaDocker, category: 'DevOps', color: '#2496ed' },
  { name: 'Kubernetes', icon: SiKubernetes, category: 'DevOps', color: '#326ce5' },
  { name: 'AWS', icon: FaAws, category: 'DevOps', color: '#ff9900' },
  { name: 'GitHub Actions', icon: SiGithubactions, category: 'DevOps', color: '#2088ff' }
];

export const techCategories = ['All', 'Frontend', 'Backend', 'Database', 'AI/ML', 'DevOps'];
