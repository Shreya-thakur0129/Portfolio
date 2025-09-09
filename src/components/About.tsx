import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  const waterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (waterRef.current) {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth) * 100;
        const y = (clientY / window.innerHeight) * 100;
        
        waterRef.current!.style.setProperty('--x', `${x}%`);
        waterRef.current!.style.setProperty('--y', `${y}%`);
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div 
        ref={waterRef}
        className="absolute inset-0 water-ripple opacity-10 z-0"
        style={{
          background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(100, 255, 218, 0.3), transparent 80%)',
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold section-heading">About Me</h2>
        </motion.div>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-black bg-opacity-80 p-6 rounded-lg border border-white/10">
                <p className="text-lg mb-6 text-gray-300">
                  I'm a beginner developer with a growing passion for building digital experiences. My journey in tech started
                  recently out of curiosity, and I’m now focused on learning and creating real-world projects.
                </p>
                <p className="text-lg mb-6 text-gray-300">
                  I specialize in front-end development using React, JavaScript, and modern CSS frameworks like Tailwind CSS. 
                  I'm also exploring back-end technologies such as Node.js, Express.js, and MongoDB to build full-stack
                  applications.
                </p>
                <p className="text-lg text-gray-300">
                  When I'm not coding, I enjoy learning new technologies, working on small personal projects, 
                  and gaining hands-on experience by contributing to beginner-friendly open-source repositories.
                </p>
              </div>
            </div>
          </motion.div>
          
          <div className="space-y-6">
            {[
              {
                icon: <Code size={24} />,
                title: "Developer Experience",
                description: " Building web applications with modern technologies including React, JavaScript, and Node.js, etc."
              },
              {
                icon: <Briefcase size={24} />,
                title: "Work History",
                description: "Built an ED Cell website and other small websites for outside startups and clients."
              },
              {
                icon: <GraduationCap size={24} />,
                title: "Education",
                description: "Bachelor's degree in Computer Science with continuous learning through courses and certifications."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
                className="flex items-start space-x-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;