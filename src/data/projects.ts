
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  createdAt: string;
  category: string;
  features: string[];
  challenges: string[];
  learnings: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive admin dashboard for managing e-commerce operations with real-time analytics.',
    longDescription: 'A full-featured e-commerce dashboard built with React and TypeScript, featuring real-time analytics, inventory management, order processing, and customer insights. The dashboard provides a clean, intuitive interface for managing all aspects of an online store.',
    image: '/placeholder.svg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/ecommerce-dashboard',
    createdAt: '2024-01-15',
    category: 'Web Application',
    features: [
      'Real-time sales analytics',
      'Inventory management',
      'Order processing system',
      'Customer relationship management',
      'Responsive design',
      'Dark/Light mode'
    ],
    challenges: [
      'Implementing real-time data updates',
      'Optimizing performance for large datasets',
      'Creating an intuitive user interface'
    ],
    learnings: [
      'Advanced React patterns',
      'State management with Context API',
      'Chart.js integration for data visualization'
    ]
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with team features and project tracking.',
    longDescription: 'A modern task management application designed for teams, featuring project organization, task assignment, deadline tracking, and real-time collaboration. Built with a focus on user experience and productivity.',
    image: '/placeholder.svg',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Zustand'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/task-manager',
    createdAt: '2024-02-20',
    category: 'Productivity',
    features: [
      'Project organization',
      'Task assignment and tracking',
      'Team collaboration',
      'Deadline notifications',
      'File attachments',
      'Activity timeline'
    ],
    challenges: [
      'Real-time collaboration features',
      'Notification system implementation',
      'Offline functionality'
    ],
    learnings: [
      'Firebase real-time database',
      'Zustand for state management',
      'Progressive Web App features'
    ]
  },
  {
    id: '3',
    title: 'Weather Forecast App',
    description: 'A beautiful weather application with detailed forecasts and location-based services.',
    longDescription: 'A comprehensive weather application providing detailed forecasts, weather maps, and location-based services. Features a clean, modern interface with smooth animations and responsive design.',
    image: '/placeholder.svg',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'CSS Animations', 'Geolocation API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/weather-app',
    createdAt: '2024-03-10',
    category: 'Utility',
    features: [
      '7-day weather forecast',
      'Hourly weather updates',
      'Location-based services',
      'Weather maps',
      'Favorite locations',
      'Weather alerts'
    ],
    challenges: [
      'API integration and error handling',
      'Geolocation implementation',
      'Responsive design for mobile'
    ],
    learnings: [
      'REST API integration',
      'Geolocation API usage',
      'CSS animations and transitions'
    ]
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects and skills with modern design.',
    longDescription: 'A personal portfolio website built to showcase development projects and skills. Features a modern design, smooth animations, and responsive layout. Includes project galleries, skill demonstrations, and contact forms.',
    image: '/placeholder.svg',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Netlify'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/portfolio',
    createdAt: '2024-04-05',
    category: 'Portfolio',
    features: [
      'Project showcase',
      'Skill demonstrations',
      'Contact form',
      'Smooth animations',
      'SEO optimization',
      'Performance optimized'
    ],
    challenges: [
      'Animation performance optimization',
      'SEO implementation',
      'Cross-browser compatibility'
    ],
    learnings: [
      'Framer Motion for animations',
      'SEO best practices',
      'Performance optimization techniques'
    ]
  },
  {
    id: '5',
    title: 'Recipe Finder',
    description: 'A recipe discovery application with search, filters, and meal planning features.',
    longDescription: 'A comprehensive recipe discovery application that helps users find, save, and organize their favorite recipes. Features advanced search, dietary filters, meal planning, and shopping list generation.',
    image: '/placeholder.svg',
    technologies: ['React', 'TypeScript', 'Recipe API', 'Local Storage', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/recipe-finder',
    createdAt: '2024-05-12',
    category: 'Lifestyle',
    features: [
      'Recipe search and discovery',
      'Dietary filters and preferences',
      'Meal planning calendar',
      'Shopping list generation',
      'Recipe saving and favoriting',
      'Nutritional information'
    ],
    challenges: [
      'Complex filtering system',
      'Local storage management',
      'API rate limiting handling'
    ],
    learnings: [
      'Advanced filtering algorithms',
      'Local storage best practices',
      'API optimization techniques'
    ]
  },
  {
    id: '6',
    title: 'Expense Tracker',
    description: 'A personal finance application for tracking expenses and managing budgets.',
    longDescription: 'A comprehensive personal finance application for tracking expenses, managing budgets, and visualizing spending patterns. Features category management, budget alerts, and detailed financial reports.',
    image: '/placeholder.svg',
    technologies: ['React', 'TypeScript', 'Chart.js', 'IndexedDB', 'PWA'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/expense-tracker',
    createdAt: '2024-06-18',
    category: 'Finance',
    features: [
      'Expense tracking and categorization',
      'Budget management',
      'Financial reports and charts',
      'Recurring transactions',
      'Data export functionality',
      'Offline functionality'
    ],
    challenges: [
      'Offline data synchronization',
      'Complex data visualization',
      'Budget calculation algorithms'
    ],
    learnings: [
      'IndexedDB for offline storage',
      'PWA implementation',
      'Advanced chart customization'
    ]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getCategories = (): string[] => {
  return [...new Set(projects.map(project => project.category))];
};

export const getTechnologies = (): string[] => {
  const allTechs = projects.flatMap(project => project.technologies);
  return [...new Set(allTechs)].sort();
};
