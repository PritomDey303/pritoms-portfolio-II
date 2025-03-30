const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "A responsive personal portfolio showcasing my skills and projects with dark/light mode.",
    role: "Full Stack Developer",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    frontend: "https://github.com/yourusername/portfolio-frontend",
    backend: null,
    liveDemo: "https://yourportfolio.com",
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&auto=format", // Optimized thumbnail
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&auto=format", // Full-size
        alt: "Portfolio homepage in light mode",
        caption: "Homepage Design"
      },
      {
        url: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&auto=format",
        alt: "Portfolio dark mode view",
        caption: "Dark Mode Implementation"
      }
    ],
    keyFeatures: [
      "⚡ Fully responsive design",
      "🎨 Dark/light mode toggle",
      "✨ Smooth page transitions"
    ],
    year: 2023
  },
  {
    id: 2,
    name: "E-commerce Platform",
    description: "Full-featured online store with product catalog and payment processing.",
    role: "Frontend Developer",
    technologies: ["React", "Redux", "Stripe API"],
    frontend: "https://github.com/yourusername/ecom-frontend",
    backend: "https://github.com/yourusername/ecom-backend",
    liveDemo: "https://store.example.com",
    thumbnail: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&auto=format",
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&auto=format",
        alt: "E-commerce product listing",
        caption: "Product Catalog"
      },
      {
        url: "https://images.unsplash.com/photo-1555529669-a9d202d9966a?w=1200&auto=format",
        alt: "Shopping cart interface",
        caption: "Checkout Process"
      }
    ],
    keyFeatures: [
      "🛒 Shopping cart system",
      "💳 Stripe payment integration",
      "🔍 Advanced product search"
    ],
    year: 2022
  },
  // More projects with thumbnails and screenshots...
  {
    id: 3,
    name: "Task Management App",
    description: "Kanban-style task manager with drag-and-drop functionality.",
    role: "Full Stack Developer",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    frontend: "https://github.com/yourusername/task-manager",
    liveDemo: "https://tasks.example.com",
    thumbnail: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&auto=format",
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&auto=format",
        alt: "Task board interface",
        caption: "Kanban Board"
      },
      {
        url: "https://images.unsplash.com/photo-1543286386-2e3f0972ee93?w=1200&auto=format",
        alt: "Task detail view",
        caption: "Task Details Modal"
      }
    ],
    keyFeatures: [
      "👆 Drag-and-drop interface",
      "👥 Team collaboration",
      "📅 Deadline tracking"
    ],
    year: 2023
  },
  {
    id: 4,
    name: "Weather Forecast App",
    description: "Real-time weather application with 5-day forecasts.",
    role: "Frontend Developer",
    technologies: ["React", "OpenWeather API"],
    frontend: "https://github.com/yourusername/weather-app",
    liveDemo: "https://weather.example.com",
    thumbnail: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=400&auto=format",
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=1200&auto=format",
        alt: "Weather dashboard",
        caption: "Main Forecast View"
      },
      {
        url: "https://images.unsplash.com/photo-1601134467661-5d775b999c8b?w=1200&auto=format",
        alt: "Weather radar map",
        caption: "Interactive Radar"
      }
    ],
    keyFeatures: [
      "📍 Location-based forecasts",
      "⛈️ Severe weather alerts",
      "🌤️ Interactive maps"
    ],
    year: 2022
  },
  // Additional projects...
  {
    id: 5,
    name: "Recipe Finder",
    description: "Discover recipes based on ingredients you have.",
    role: "Mobile Developer",
    technologies: ["React Native", "Firebase"],
    frontend: "https://github.com/yourusername/recipe-app",
    appStore: "https://apps.apple.com/app/id12345",
    playStore: "https://play.google.com/store/apps/details?id=com.recipeapp",
    thumbnail: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format",
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format",
        alt: "Recipe search screen",
        caption: "Ingredient Search"
      },
      {
        url: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=1200&auto=format",
        alt: "Recipe detail view",
        caption: "Cooking Instructions"
      }
    ],
    keyFeatures: [
      "🥕 Ingredient-based search",
      "📷 Step-by-step photos",
      "⏱️ Cooking timer"
    ],
    year: 2023
  }
];

export default projects;