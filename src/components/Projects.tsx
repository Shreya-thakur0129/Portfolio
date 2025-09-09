import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with product management, cart functionality, and payment processing.",
      image: "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/Shreya-thakur0129/E-commerce-website"
    },
    {
      title: "Job Tracker",
      description: "Built a platform to manage job applications with CRUD features. Integrated MongoDB, Express.js, and Node.js for backend, and React + Tailwind for a responsive UI.",
      image: "https://media.istockphoto.com/id/1355612139/photo/job-search-headhunting-and-recruitment-process-concept-icons-for-skills-education.jpg?s=1024x1024&w=is&k=20&c=3s89bHnYrhYB8h-rU3AJBh3k4UgTNpu0TRPqnko8A-E=",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/Shreya-thakur0129/JobTracker_project"
    },
    {
      title: "Restaurant Menu Order System",
      description: "eveloped a food ordering web app with live menu updates, dynamic cart, and secure order storage using MongoDB and Node.js APIs.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["React", "TypeScript", "Firebase"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/Shreya-thakur0129/ResturantMenu"
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-black bg-opacity-80">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold section-heading">Projects</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="project-card group rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-white/30 transition-all duration-700"
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"></div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-10 group-hover:translate-y-0">
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-black hover:bg-blue-500 hover:text-white transition-all duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-black hover:bg-purple-500 hover:text-white transition-all duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 text-sm bg-white/10 rounded-full transition-all duration-300 group-hover:bg-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover-effect text-white/80 hover:text-white group-hover:text-blue-400 transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover-effect text-white/80 hover:text-white group-hover:text-purple-400 transition-all duration-300"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;