import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaRoad, FaInfoCircle, FaCube, FaBars, FaTimes } from 'react-icons/fa';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="fixed w-full bg-black/30 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl md:text-2xl font-bold text-white flex items-center gap-2"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <img 
                  src="/logo.png"
                  alt="Trench Sniffer Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <span className="hidden sm:inline">TrenchSniffer</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <NavLink href="#features">
                <FaCube className="text-[#86e5ff]" /> Features
              </NavLink>
              <NavLink href="#roadmap">
                <FaRoad className="text-[#86e5ff]" /> Roadmap
              </NavLink>
             
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#86e5ff] text-black px-4 md:px-6 py-2 rounded-full hover:bg-[#6bd4ff] transition-colors flex items-center gap-2 text-sm md:text-base"
              >
                <FaRobot className="text-sm md:text-base" />
                <a href="https://t.me/trenchsnifferbot" target="_blank" rel="noopener noreferrer">
                  <span className="hidden sm:inline">Launch Bot</span>
                </a>
              </motion.button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white p-2"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black/95 z-40 md:hidden pt-20"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6">
                <MobileNavLink 
                  href="#features" 
                  icon={<FaCube />}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </MobileNavLink>
                <MobileNavLink 
                  href="#roadmap" 
                  icon={<FaRoad />}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Roadmap
                </MobileNavLink>
               
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>
    </div>
  );
};

const NavLink = ({ href, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.querySelector(href);
    const navbarHeight = 80; // Adjust this value based on your navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className="text-white/70 hover:text-white transition-colors flex items-center gap-2 text-sm lg:text-base"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

const MobileNavLink = ({ href, children, icon, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.querySelector(href);
    const navbarHeight = 80; // Adjust this value based on your navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    onClick(); // Close mobile menu
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className="text-white/70 hover:text-white transition-colors flex items-center gap-4 text-xl px-4 py-2"
      whileHover={{ x: 10 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-[#86e5ff]">{icon}</span>
      {children}
    </motion.a>
  );
};

export default Layout; 