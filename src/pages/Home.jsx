import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaChartLine, FaWallet, FaRobot, FaBrain, FaTwitter, FaDiscord } from 'react-icons/fa';

const SocialButton = ({ icon, href = "#" }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-10 h-10 rounded-lg flex items-center justify-center text-[#86e5ff] hover:text-white transition-colors duration-200 bg-white/5 hover:bg-white/10"
  >
    {icon}
  </motion.a>
);

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 2;
      const y = (clientY / height - 0.5) * 2;
      containerRef.current.style.setProperty('--mouse-x', x);
      containerRef.current.style.setProperty('--mouse-y', y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0A0A0B] text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Gradient Spheres */}
          <div className="absolute top-[-50%] left-[-25%] w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(134,229,255,0.1)_0%,transparent_70%)] animate-slow-spin"></div>
          <div className="absolute bottom-[-50%] right-[-25%] w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_70%)] animate-reverse-slow-spin"></div>

          {/* Enhanced 3D Grid */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-[linear-gradient(rgba(134,229,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(134,229,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"
              style={{
                transform: `perspective(1000px) rotateX(60deg) translateZ(0) translateY(-100px) scale(${2 + Number(containerRef.current?.style.getPropertyValue('--mouse-y') || 0) * 0.1})`,
                transformOrigin: '50% 0%',
                opacity: 0.25
              }}
            ></div>
          </div>

          {/* Dynamic Scan Lines */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] w-full"
              style={{
                background: `linear-gradient(90deg, 
                  transparent 0%, 
                  rgba(134,229,255,${0.1 + i * 0.02}) 50%,
                  transparent 100%
                )`
              }}
              animate={{
                y: ['100vh', '-100vh'],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.5
              }}
            />
          ))}

          {/* Floating Data Points */}
          <AnimatePresence>
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ 
                  opacity: 0,
                  x: Math.random() * window.innerWidth,
                  y: -20
                }}
                animate={{ 
                  opacity: [0, 1, 0],
                  y: window.innerHeight + 20,
                  x: `${Math.random() * 100}vw`
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 5
                }}
              >
                <div className="text-[#86e5ff]/30 font-mono text-sm">
                  {Math.random().toString(16).substr(2, 8)}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Main Content */}
        <div className="relative container mx-auto px-4 pt-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-6xl mx-auto"
          >
            {/* Hero Content */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Left Side - Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                    <motion.span 
                      className="inline-block bg-gradient-to-r from-[#86e5ff] via-blue-400 to-[#86e5ff] bg-clip-text text-transparent bg-[size:200%]"
                      animate={{ 
                        backgroundPosition: ['0% center', '200% center']
                      }}
                      transition={{ 
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      AI-Powered
                    </motion.span>
                    <br />
                    <span className="relative">
                      Wallet Analysis
                      <motion.span
                        className="absolute -inset-1 bg-gradient-to-r from-[#86e5ff]/20 to-blue-500/20 blur-xl"
                        animate={{
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </span>
                  </h1>

                  <motion.p 
                    className="text-lg text-gray-400 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Advanced blockchain analytics powered by artificial intelligence.
                    Track smart money movements and gain real-time market insights.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <LaunchButton />
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Side - Enhanced 3D Visual */}
              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <TechSphere />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <Features />

      {/* Roadmap Section */}
      <Roadmap />

      {/* Footer */}
      <Footer />
    </div>
  );
};

// New Enhanced Components
const LaunchButton = () => (
  <motion.a
    href="https://t.me/+FkA5vAAt6UQwNzFk"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="relative group inline-block"
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-[#86e5ff] to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    <div className="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center">
      <span className="text-[#86e5ff] group-hover:text-white transition duration-200">
        Launch Bot
      </span>
      <motion.span
        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
        animate={{ x: [0, 5, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        →
      </motion.span>
    </div>
  </motion.a>
);

const TechSphere = () => {
  return (
    <div className="relative aspect-square max-w-[500px] mx-auto">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#86e5ff]/20 to-blue-500/20 rounded-full blur-[100px]" />

      {/* Main sphere container */}
      <motion.div
        className="relative z-10 w-full h-full rounded-full border border-[#86e5ff]/20 bg-gradient-to-br from-[#86e5ff]/10 to-transparent backdrop-blur-sm p-6"
        animate={{
          boxShadow: [
            "0 0 20px rgba(134, 229, 255, 0.2)",
            "0 0 40px rgba(134, 229, 255, 0.4)",
            "0 0 20px rgba(134, 229, 255, 0.2)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Rotating rings */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-[#86e5ff]/20"
              style={{
                transformOrigin: 'center',
                rotate: i * 30
              }}
              animate={{
                rotate: [i * 30, i * 30 + 360]
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Center content */}
        <div className="relative z-10 w-full h-full rounded-full bg-black/50 flex items-center justify-center">
          {/* Orbiting particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#86e5ff] rounded-full"
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: i * (8 / 12)
              }}
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 30}deg) translateX(${120}px)`
              }}
            >
              <motion.div
                className="w-full h-full bg-[#86e5ff] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}

          {/* Center logo */}
          <motion.div
            className="relative"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360]
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            <img 
              src="/src/assets/logo.png"
              alt="Trench Sniffer Logo"
              className="w-32 h-32 object-contain"
            />
            <motion.div
              className="absolute inset-0"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(134, 229, 255, 0.3)",
                  "0 0 40px rgba(134, 229, 255, 0.5)",
                  "0 0 20px rgba(134, 229, 255, 0.3)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating numbers around sphere */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-[#86e5ff]/30 font-mono text-sm"
          initial={{ 
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            opacity: 0 
          }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          style={{
            left: `${50 + Math.cos(i * Math.PI / 4) * 80}%`,
            top: `${50 + Math.sin(i * Math.PI / 4) * 80}%`,
          }}
        >
          {Math.random().toString(16).substr(2, 6)}
        </motion.div>
      ))}
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <FaRobot />,
      title: "AI Analysis",
      description: "Advanced pattern recognition and market predictions powered by artificial intelligence"
    },
    {
      icon: <FaWallet />,
      title: "Smart Tracking",
      description: "Monitor whale wallets and smart money movements in real-time"
    },
    {
      icon: <FaBrain />,
      title: "Neural Networks",
      description: "Deep learning models for precise market analysis and predictions"
    },
    {
      icon: <FaChartLine />,
      title: "Live Monitoring",
      description: "Real-time blockchain transaction monitoring and alerts"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-[#86e5ff]/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#86e5ff05_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86e5ff] to-blue-500">
              Advanced Features
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    whileHover={{ y: -5 }}
    className="relative group"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#86e5ff] to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 transition duration-500 blur" />
    <div className="relative p-6 rounded-lg border border-[#86e5ff]/20 bg-black/50 backdrop-blur-sm">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-gradient-to-r from-[#86e5ff]/10 to-blue-500/10 text-[#86e5ff]">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Roadmap = () => {
  const milestones = [
    {
      phase: "Phase 1",
      title: "Launch",
      items: ["AI Model Development", "Wallet Tracking System", "Beta Testing"],
      status: "completed"
    },
    {
      phase: "Phase 2",
      title: "Growth",
      items: ["Advanced Analytics", "Real-time Monitoring", "Community Features"],
      status: "current"
    },
    {
      phase: "Phase 3",
      title: "Expansion",
      items: ["Multi-chain Support", "Mobile App", "API Integration"],
      status: "upcoming"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86e5ff] to-blue-500">
              Roadmap
            </span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-[#86e5ff]/30 via-[#86e5ff]/10 to-transparent" />
            
            {milestones.map((milestone, index) => (
              <RoadmapItem key={index} {...milestone} index={index} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const RoadmapItem = ({ phase, title, items, status, index, isLeft }) => (
  <motion.div
    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className={`flex items-center gap-8 mb-16 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
  >
    <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative group"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#86e5ff]/20 to-blue-500/20 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500" />
        <div className="relative p-6 rounded-lg border border-[#86e5ff]/20 bg-black/50 backdrop-blur-sm">
          <div className="text-sm font-semibold text-[#86e5ff] mb-2">{phase}</div>
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <ul className={`space-y-2 ${isLeft ? 'text-right' : 'text-left'}`}>
            {items.map((item, i) => (
              <li key={i} className="text-gray-400 flex items-center gap-2">
                <motion.div
                  animate={{
                    scale: status === 'completed' ? [1, 1.2, 1] : 1
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                  className={`w-1.5 h-1.5 rounded-full ${
                    status === 'completed' ? 'bg-[#86e5ff]' :
                    status === 'current' ? 'bg-blue-500' :
                    'bg-gray-500'
                  }`}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>

    <div className="relative">
      <motion.div
        animate={{
          boxShadow: [
            '0 0 20px rgba(134,229,255,0.2)',
            '0 0 40px rgba(134,229,255,0.4)',
            '0 0 20px rgba(134,229,255,0.2)'
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 
          ${status === 'completed' ? 'border-[#86e5ff] bg-[#86e5ff]/20' :
            status === 'current' ? 'border-blue-500 bg-blue-500/20' :
            'border-gray-500 bg-gray-500/20'}`}
      >
        {status === 'completed' ? '✓' : index + 1}
      </motion.div>
    </div>

    <div className="flex-1" />
  </motion.div>
);

const Footer = () => (
  <footer className="relative py-12 border-t border-[#86e5ff]/10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <motion.img 
            src="/src/assets/logo.png"
            alt="Logo"
            className="w-8 h-8"
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <span className="text-xl font-bold bg-gradient-to-r from-[#86e5ff] to-blue-500 bg-clip-text text-transparent">
            TrenchSniffer
          </span>
        </motion.div>

        <div className="flex gap-4">
          <SocialButton 
            icon={<FaTwitter />} 
            href="https://twitter.com/TrenchSniffer" 
          />
          <SocialButton 
            icon={<FaDiscord />} 
            href="https://discord.gg/trenchsniffer" 
          />
        </div>

        <div className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-[#86e5ff]/20 to-transparent" />

        <p className="text-gray-400 text-sm">
          © 2024 TrenchSniffer. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Home;