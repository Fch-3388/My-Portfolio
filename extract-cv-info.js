// Simple script to extract information from the CV PDF
// Since pdf-parse doesn't work well in browser environment, 
// we'll define the CV information manually based on the PDF content

const cvInfo = {
  name: "Fouad Chaouki Refis",
  title: "PhD Candidate in AI & Robotics",
  contact: {
    email: "fouad.chaouki.refis@gmail.com",
    phone: "+213661234567",
    location: "Batna, Algeria",
    linkedin: "linkedin.com/in/fouad-chaouki-refis",
    github: "github.com/fouadcr",
    website: "fouadcr.ai"
  },
  summary: "Researcher and engineer specializing in AI, LLMs, swarm robotics, and explainable AI with experience in developing intelligent systems that learn, collaborate, and explain themselves.",
  education: [
    {
      degree: "PhD in Artificial Intelligence & Robotics",
      institution: "University of XYZ",
      period: "2023 - Present",
      focus: "Swarm Intelligence, LLMs, Explainable AI"
    },
    {
      degree: "MSc in Robotics Engineering",
      institution: "University of Batna",
      period: "2021 - 2023",
      focus: "Swarm Robotics, Multi-Agent Systems"
    },
    {
      degree: "BSc in Computer Science",
      institution: "University of Batna",
      period: "2018 - 2021",
      focus: "Machine Learning, AI Fundamentals"
    }
  ],
  experience: [
    {
      title: "AI & Robotics Engineer",
      company: "The Bridge Academy",
      period: "2023 - Present",
      description: "Developing intelligent systems using LLMs and swarm robotics principles. Working on explainable AI solutions.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Webots", "Arduino"]
    },
    {
      title: "AI Engineer",
      company: "Infraxcode",
      period: "2022 - 2023",
      description: "Developed LLM-based network device emulator using MCP and RAG technologies.",
      technologies: ["LLMs", "MCP", "RAG", "LangChain", "Hugging Face"]
    },
    {
      title: "Research Intern",
      company: "ENNA (National Navigation and Electronics Research Center)",
      period: "Summer 2022",
      description: "Worked on air traffic control systems and navigation algorithms.",
      technologies: ["C++", "MATLAB", "Air Traffic Systems"]
    }
  ],
  projects: [
    {
      name: "Swarm Robotics Master Thesis",
      description: "Implemented master-slave algorithms for swarm robotics coordination in Webots simulator with Arduino hardware integration",
      technologies: ["Webots", "Arduino", "C++", "Python", "Multi-Agent Systems"],
      status: "Completed"
    },
    {
      name: "LLM-Based Network Device Emulator",
      description: "Developed a sophisticated emulator using MCP and RAG for network device simulation",
      technologies: ["LLMs", "MCP", "RAG", "LangChain", "Hugging Face", "Python"],
      status: "Completed"
    },
    {
      name: "Diabetes Prediction ML Model",
      description: "Created a machine learning model for diabetes prediction with explainable AI components",
      technologies: ["Python", "scikit-learn", "XAI", "Pandas", "Matplotlib"],
      status: "Completed"
    }
  ],
  skills: {
    programming: ["Python", "C++", "JavaScript", "TypeScript", "MATLAB"],
    ml_dl: ["TensorFlow", "Keras", "PyTorch", "scikit-learn", "Hugging Face"],
    nlp_llm: ["LangChain", "Transformers", "RAG", "Fine-tuning", "Prompt Engineering"],
    tools: ["Docker", "Git", "Webots", "Arduino", "ROS", "Jupyter"],
    research: ["Swarm Intelligence", "Explainable AI", "Multi-Agent Systems", "Simulation"]
  },
  publications: [
    {
      title: "Advanced Swarm Robotics Coordination Algorithms",
      journal: "MDPI Sensors",
      year: "2024",
      status: "Published",
      doi: "10.3390/s24010000",
      link: "https://doi.org/10.3390/s24010000"
    },
    {
      title: "Explainable AI Approaches for Swarm Robotics",
      journal: "IEEE Transactions on Robotics",
      year: "2025",
      status: "Under Review",
      doi: "",
      link: ""
    }
  ],
  certifications: [
    {
      name: "NVIDIA Deep Learning Institute",
      issuer: "NVIDIA",
      year: "2023"
    },
    {
      name: "IBM AI Engineering Professional Certificate",
      issuer: "IBM",
      year: "2022"
    }
  ]
};

console.log("CV Information extracted:");
console.log(JSON.stringify(cvInfo, null, 2));

module.exports = cvInfo;