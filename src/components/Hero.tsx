import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Bot } from 'lucide-react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const robotRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (robotRef.current && textRef.current) {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      
      tl.fromTo(
  textRef.current.querySelectorAll('.gsap-text'),
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, stagger: 0.2, duration: 1 }
);
      
      gsap.to(robotRef.current, {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-90"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div ref={textRef} className="md:w-1/2 mb-12 md:mb-0">
            <motion.h2 
              className="text-xl md:text-2xl mb-4 text-gray-400 gsap-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              //exit={{}} // Prevents disappearance
            >
              Hello, I'm <span className="text-white">Shreya Singh Thakur</span>
            </motion.h2>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gsap-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
             // exit={{}} // Prevents disappearance
            >
              <span className="text-gradient">Creative</span> Developer
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg gsap-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              //exit={{}} // Prevents disappearance
            >
              I build exceptional digital experiences that combine creativity with technical expertise.
            </motion.p>
            
            <motion.div 
              className="flex space-x-4 gsap-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a 
                href="#projects" 
                className="magnetic-button hover-effect bg-white text-black px-6 py-3 rounded-full font-medium"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="magnetic-button hover-effect border border-white px-6 py-3 rounded-full font-medium"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
          
          <div ref={robotRef} className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
                <Bot size={300} className="text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-sm text-gray-400 mb-2">Scroll Down</p>
          <ArrowDown className="animate-bounce" size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;