import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const frontendSkills = [
    "React",  "JavaScript", "HTML5", "CSS3", 
    "Tailwind CSS", "Framer Motion", "Redux", "Next.js"
  ];
  
  const backendSkills = [
    "Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase",
    "REST API", "GraphQL", "AWS", "Docker"
  ];
  
  const toolsSkills = [
    "Git", "GitHub", "VS Code", "Figma", "Webpack",
    "Jest", "Cypress", "CI/CD", "npm/yarn"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold section-heading">Skills & Tools</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-center">Frontend</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap justify-center gap-3"
            >
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="skill-rotate px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full text-white font-medium"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-center">Backend</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap justify-center gap-3"
            >
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="skill-rotate px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full text-white font-medium"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-center">Tools</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap justify-center gap-3"
            >
              {toolsSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="skill-rotate px-4 py-2 bg-gradient-to-r from-green-600 to-green-400 rounded-full text-white font-medium"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;