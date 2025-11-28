import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  const particles = Array.from({ length: 6 }, (_, i) => i)
  
  return (
    <section id="home" className="hero">
      {/* Animated background particles */}
      <div className="particles-container">
        {particles.map(i => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.cos(i) * 20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`
            }}
          />
        ))}
      </div>

      <div className="hero-overlay" />
      <div className="container hero-inner">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="hero-title"
        >
          Hi, I'm <span className="accent">Abhinav Pratap</span>
        </motion.h2>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="hero-sub"
        >
          Aspiring Software Engineer and Tech Enthusiast.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="hero-tags"
        >
          <span className="hero-tag">💻 MERN Stack</span>
          <span className="hero-tag">🎨 Interactive UI</span>
          <span className="hero-tag">🚀 Problem Solver</span>
        </motion.div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          href="#projects"
          className="cta"
        >
          View My Work
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ marginLeft: '8px', display: 'inline-block' }}
          >
            →
          </motion.span>
        </motion.a>

        {/* Animated scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="scroll-indicator"
        >
          <svg className="scroll-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 5v14M5 12l7 7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
