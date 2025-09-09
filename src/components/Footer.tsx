import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400 mb-6">
              Creating exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Github size={20} />, url: 'https://github.com/', hoverColor: 'hover:bg-[#333333]' },
                { icon: <Linkedin size={20} />, url: 'https://linkedin.com/', hoverColor: 'hover:bg-[#0077B5]' },
                { icon: <Twitter size={20} />, url: 'https://twitter.com/', hoverColor: 'hover:bg-[#1DA1F2]' },
                { icon: <Mail size={20} />, url: 'mailto:contact@example.com', hoverColor: 'hover:bg-[#EA4335]' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover-effect p-2 rounded-full border border-white/20 hover:border-white/0 transition-all ${social.hoverColor} hover:text-white`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', url: '#' },
                { name: 'About', url: '#about' },
                { name: 'Projects', url: '#projects' },
                { name: 'Skills', url: '#skills' },
                { name: 'Contact', url: '#contact' },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-white transition-colors hover-effect"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates and news about my latest projects.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-white w-full"
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 py-2 rounded-r-lg font-medium hover-effect"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;