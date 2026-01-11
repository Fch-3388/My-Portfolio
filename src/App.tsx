import { useState } from 'react';
import './App.css';

// CV Data
const cvInfo = {
  name: "Fouad Chaouki Refis",
  title: "PhD Candidate in AI & Robotics",
  contact: {
    email: "fouad.refis@etu.univ-batna2.dz | fouadrefis763@gmail.com",
    phone: "+213671170050",
    location: "Batna, Algeria",
    linkedin: "www.linkedin.com/in/fouad-chaouki-refis-a8baa3301",
    github: "github.com/Fch-3388?tab=repositories",
    orcid: "https://orcid.org/0009-0008-2922-3562",
    googleScholar: "https://scholar.google.com/citations?user=y48raD0AAAAJ&hl=fr",
    researchGate: "https://www.researchgate.net/profile/Fouad-Chaouki-Refis"
  },
  summary: "Researcher and engineer specializing in AI, LLMs, swarm robotics, and explainable AI with experience in developing intelligent systems that learn, collaborate, and explain themselves.",
  education: [
   
    {
      degree: "Master’s Degree in Artificial Intelligence And Multimedia",
      institution: "University of Batna 2, Algeria",
      period: "2022 - 2024",
      thesis: "Design & Creation of A Swarm Robot",
      Modules: "Signal Processing, Fundamentals Of Image Processing, Methods For Artificial\n" +
        "Intelligence, Distributed Database, Advanced OOP, Parallel Computing, Classification And Data Analysis, Machine\n" +
        "Learning, Multimedia Applications Design, multimedia information retrieving, image processing and GPU, programming, form recognition."
    },
    {
      degree: "Bachelor’s Degree in Computer Science",
      institution: "University of Batna 2, Algeria",
      period: "2019 - 2022",
      Modules: "Algebra (1 & 2), mathematical analysis (1 & 2), Computer Structure (1 & 2), Algorithm,\n" +
        "and Data Structure (1 & 2), probability and statistics. Computer Architecture, Algorithm and Data Structure,\n" +
        "Mathematical Logic, OOP, Operating System, Network, Graph theory. Compilation, Operating System 2, Human\n" +
        "Computer Interaction, Software Engineer, Cyber-Security, Mobile Application, Artificial Intelligence, Project."

    }
  ],
  experience: [
    {
      title: "AI Engineer & Robotics Instructor",
      company: "The Bridge Academy (Robot Educatif Algérie)",
      period: "Oct 2025 - Present",
      description: "◦ Instructing students (9-17) in core AI & Robotics principles, including programming and sensor integration.\n" +
            "◦ Design and development of interactive AI applications to create an immersive and effective learning environment\n" +
            "for robotics.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Arduino", "LLMs", "RAG"]
    },
    {
      title: "AI Engineer",
      company: "Infraxcode",
      period: "1 Feb 2025 - 30 apr 2025",
      description: "◦ development of an LLM-based emulator for network devices, designed to help engineers prototype and validate\n" +
        "network topologies in a simulated environment, reducing setup time and infrastructure cost.\n" +       
        "◦ Implemente RAG and MCP(ModelContext Protocol) to dynamically integrate real-time network queries and\n" +
        "metadata into the emulation process. Fine-tune language model to make it task specific.\n" +
        "◦ Integrated Hugging Face Transformers, LangChain, LangGraph, and various python libraries.\n" +
        "◦ Conducte benchmarking for emulation outputs across various models",

      technologies: ["LLMs", "MCP", "RAG", "LangChain", "Hugging Face"]
    },
    {
      title: "Internship",
      company: "ENNA ",
      period: "December 2021- January 2022",
      description: " learned about the technical framework that underpins air traffic control systems, such as radar communication systems.",
      technologies: ["Air Traffic Systems"]
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
      description: "Created a machine learning model for diabetes prediction",
      technologies: ["Python", "scikit-learn", "XAI", "Pandas", "Matplotlib"],
      status: "Completed"
    },
     {
      name: "AI powered Educational platform",
      description: "An intelligent platform that conducts AI-driven interviews to generate personalized learning roadmaps",
      technologies: ["Python", "RAG", "LangChain", "Hugging Face"],
      status: "Work in Progress"
    },
    {
      name: "XAI Lab",
      description: "An interactive Dashboard that aims to boost the transparency and the interpretability of the AI models",
      technologies: ["Python", "RAG", "LangChain", "Hugging Face", "Streamlit","shap", "lime"],
      status: "Work in Progress"
    }
  ],
  skills: {
    programming: ["Python", "C++"],
    ml_dl: ["TensorFlow", "Keras", "PyTorch", "scikit-learn", "Hugging Face"],
    nlp_llm: ["LangChain", "Transformers", "RAG", "Fine-tuning", "Prompt Engineering"],
    tools: ["Docker", "Git", "Webots", "Arduino", "ROS", "Jupyter"],
    research: ["Swarm Robotics/Intelligence", "Explainable AI", "Multi-Agent Systems", "LLMs"]
  },
  publications: [
    {
      title: "From Network Sensors to intelligent System: A decade-long review of swarm robotics technologies",
      journal: "MDPI Sensors",
      authors: " Refis, F. C., Mahammedi, N. A., Kerrache, C. A., & Dhelim, S.",
      year: "2025",
      status: "Published",
      doi: "https://doi.org/10.3390/s25196115",
      link: "https://www.mdpi.com/1424-8220/25/19/6115"
    },
    {
      title: "Intellectual Population Inversion Under The Influence Of Artificial Intelligence.",
      journal: "",
      year: "",
      status: "Research in progress (Manuscript in preparation)",
      doi: "",
      link: ""
    }
  ],
  certifications: [
    {
      name: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      year: "Oct 2022",
      link:"https://courses.nvidia.com/certificates/1tO0Ys3ITkGJkXM3sgBKrQ"
    },
    {
      name: "Machine Learning with Python",
      issuer: "IBM",
      year: "2024",
      link: "https://coursera.org/verify/X395JLX5MNVW"
    },
    {
      name: "Introduction to Deep Learning and Neural Networks with Keras",
      issuer: "IBM",
      year: "2024",
      link: "https://coursera.org/verify/HBPAF6VTOKZC"
    },
    {
      name: "Generative AI and LLMs: Architecture and Data Preparation",
      issuer: "IBM",
      year: "2025",
      link: "https://coursera.org/verify/MAEOOJRB1KM7"
    }
  ]
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // In a real application, you would send the form data to a backend service
      // For now, we'll just simulate the submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setFormStatus('success');
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <div className="logo">Fouad Chaouki Refis</div>
          <ul className="nav-links">
            <li><a href="#" className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#" className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#" className={activeSection === 'research' ? 'active' : ''} onClick={() => scrollToSection('research')}>Research</a></li>
            <li><a href="#" className={activeSection === 'experience' ? 'active' : ''} onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a href="#" className={activeSection === 'projects' ? 'active' : ''} onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href="#" className={activeSection === 'publications' ? 'active' : ''} onClick={() => scrollToSection('publications')}>Publications</a></li>
            <li><a href="#" className={activeSection === 'skills' ? 'active' : ''} onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a href="#" className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>AI Engineer | Research-Focused Master's Graduate in Artificial Intelligence and Multimedia</h1>
          <p>seeking PhD opportunities at the intersection of foundation models/LLMs, XAI and Swarm Robotics or robotics. My goal is to develop adaptive multi-agent systems that are not only intelligent and scalable, but also interpretable and human-aligned.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection('research')}>View My Research</button>
            <a href="./Fch_Refis_CV_ENG_PhD.pdf" download className="btn-secondary">Download CV</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>{cvInfo.summary}</p>
              <p>I believe the future of AI lies in systems that are not only smart, but also understandable, collaborative, and scalable.</p>
            </div>
            <div className="education">
              <h3>Education</h3>
              {cvInfo.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h4>{edu.degree}</h4>
                  <p className="institution">{edu.institution}</p>
                  <p className="period">{edu.period}</p>
                  <p className="modules">Modules: {edu.Modules}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Section */}
      <section id="research" className="research">
        <div className="container">
          <h2>Where My Research Lives</h2>
          <div className="research-cards">
            <div className="research-card">
              <h3>LLMs & Foundation Models</h3>
              <p>RAG, MCP, fine-tuning, LangChain, Hugging Face</p>
            </div>
            <div className="research-card">
              <h3>Swarm Robotics & Multi-Agent Systems</h3>
              <p>Webots, Arduino, swarm intelligence, scalability, Foundation-models enabled Swarm Intelligence</p>
            </div>
            <div className="research-card">
              <h3>Explainable & Interpretable AI</h3>
              <p>Model transparency, human-AI collaboration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2>Experience</h2>
          <div className="timeline">
            {cvInfo.experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <h3>{exp.title} <span className="company">@ {exp.company}</span></h3>
                  <p className="period">{exp.period}</p>
                  <p>{exp.description}</p>
                  <div className="tech-stack">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {cvInfo.projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech">{tech}</span>
                  ))}
                </div>
                <div className="status">{project.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="publications">
        <div className="container">
          <h2>Publications</h2>
          <div className="publications-list">
            {cvInfo.publications.map((pub, index) => (
              <div key={index} className="publication">
                <h3>{pub.title}</h3>
                <p className="journal">{pub.journal} | {pub.year} | {pub.status}</p>
                {pub.doi && (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="doi-link">
                    DOI: {pub.doi}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming</h3>
              <div className="skills-list">
                {cvInfo.skills.programming.map((skill, index) => (
                  <span key={index} className="skill">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>ML/DL</h3>
              <div className="skills-list">
                {cvInfo.skills.ml_dl.map((skill, index) => (
                  <span key={index} className="skill">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>NLP/LLM</h3>
              <div className="skills-list">
                {cvInfo.skills.nlp_llm.map((skill, index) => (
                  <span key={index} className="skill">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools</h3>
              <div className="skills-list">
                {cvInfo.skills.tools.map((skill, index) => (
                  <span key={index} className="skill">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Research</h3>
              <div className="skills-list">
                {cvInfo.skills.research.map((skill, index) => (
                  <span key={index} className="skill">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get in touch</h3>
              <p><strong>Email:</strong> <a href={`mailto:${cvInfo.contact.email}`}>{cvInfo.contact.email}</a></p>
              <p><strong>Phone:</strong> {cvInfo.contact.phone}</p>
              <p><strong>Location:</strong> {cvInfo.contact.location}</p>
              <div className="social-links">
                <a href={`https://${cvInfo.contact.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={`https://${cvInfo.contact.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={cvInfo.contact.orcid} target="_blank" rel="noopener noreferrer">ORCID</a>
                <a href={cvInfo.contact.googleScholar} target="_blank" rel="noopener noreferrer">Google Scholar</a>
                <a href={cvInfo.contact.researchGate} target="_blank" rel="noopener noreferrer">ResearchGate</a>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send a message</h3>
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleInputChange}
                  required>
                </textarea>
                <button type="submit" className="btn-primary" disabled={formStatus === 'submitting'}>
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                {formStatus === 'success' && (
                  <p className="form-success">Message sent successfully!</p>
                )}
                {formStatus === 'error' && (
                  <p className="form-error">Error sending message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Fouad Chaouki Refis. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;