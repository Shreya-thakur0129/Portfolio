import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.5 },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-80 backdrop-blur-md py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold hover-effect"
        >
          <a href="#" className="text-gradient">Portfolio</a>
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {['About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link hover-effect text-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex space-x-4">
          {[
            { icon: <Github size={20} />, url: 'https://github.com/', hoverColor: 'hover:bg-[#333333]' },
            { icon: <Linkedin size={20} />, url: 'https://linkedin.com/', hoverColor: 'hover:bg-[#0077B5]' },
            { icon: <Mail size={20} />, url: 'mailto:shreyathakur9294@gmail.com', hoverColor: 'hover:bg-[#EA4335]' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover-effect p-2 rounded-full border border-white/20 hover:border-white/0 transition-all ${social.hoverColor} hover:text-white`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <motion.button
          className="md:hidden hover-effect"
          onClick={() => setIsOpen(!isOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <motion.nav
        className={`fixed top-0 right-0 h-screen w-full md:w-80 bg-black bg-opacity-95 z-50 flex flex-col justify-center items-center md:items-start md:pl-12 ${
          isOpen ? 'block' : 'hidden'
        }`}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={navVariants}
      >
        <motion.button
          className="absolute top-6 right-6 hover-effect"
          onClick={() => setIsOpen(false)}
          whileTap={{ scale: 0.9 }}
        >
          <X size={24} />
        </motion.button>

        <div className="flex flex-col space-y-8 mb-12">
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-2xl font-medium hover-effect"
              onClick={() => setIsOpen(false)}
              variants={itemVariants}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="flex space-x-6 mt-8">
          {[
            { icon: <Github size={24} />, url: 'https://github.com/', hoverColor: 'hover:bg-[#333333]' },
            { icon: <Linkedin size={24} />, url: 'https://linkedin.com/', hoverColor: 'hover:bg-[#0077B5]' },
            { icon: <Mail size={24} />, url: 'mailto:shreyathakur9294@gmail.com', hoverColor: 'hover:bg-[#EA4335]' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover-effect p-2 rounded-full ${social.hoverColor} hover:text-white transition-all duration-300`}
              variants={itemVariants}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;