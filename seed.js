// Dummy Jobs Data (predefined jobs for testing)
const jobs = [
  { 
    id: 1, 
    title: "Backend Developer", 
    company: "TechPro", 
    location: "Remote", 
    description: "Work with Node.js, Express.js & MongoDB. Build scalable backend services." 
  },
  { 
    id: 2, 
    title: "Frontend Developer", 
    company: "WebSoft", 
    location: "Bangalore", 
    description: "React.js, JavaScript, and UI/UX design for modern web apps." 
  },
  { 
    id: 3, 
    title: "Data Scientist", 
    company: "AI Labs", 
    location: "Delhi", 
    description: "Work with Machine Learning models, Python, and data pipelines." 
  },
  { 
    id: 4, 
    title: "System Administrator", 
    company: "CloudNet", 
    location: "Hyderabad", 
    description: "Manage cloud servers, security, and IT infrastructure." 
  },
  { 
    id: 5, 
    title: "UI/UX Designer", 
    company: "Creative Studios", 
    location: "Mumbai", 
    description: "Design wireframes, prototypes, and user-friendly interfaces." 
  }
];

// Dummy Applications (will be filled dynamically when user applies)
let applications = [];

export { jobs, applications };
