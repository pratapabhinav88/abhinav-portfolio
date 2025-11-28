import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import ContactForm from './components/ContactForm'
import ThemeSwitcher from './components/ThemeSwitcher'
import projects from './data/projects'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function App(){
  return (
    <div className="app-root">
      <header className="site-header">
        <div className="container header-content">
          <div className="logo-wrap">
            <div className="logo-mark">A</div>
            <div className="logo-text">Abhinav</div>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeSwitcher />
        </div>
      </header>

      <Hero />

      <main className="container">
        <section id="about" className="about-section">
          <h2 className="section-title">About</h2>
          <div className="about-grid">
            <div className="about-photo-wrap">
              <img className="about-photo" src="https://github.com/pratapabhinav88.png" alt="Abhinav Pratap" />
            </div>
            <div>
              <p className="muted">Hey! I am <strong>Abhinav Pratap</strong>, A Tech enthusiast with a proven track record of excellence. My achievements as a finalist in the Dark Pattern Buster Hackathon (DPBH 2024), certification in IoT, and participation in Computing Olympiad and Smart India Hackathon reflect my strong problem-solving skills, innovation mindset, and dedication to mastering new technologies.</p>
              <p className="muted">Skills: Python, Java, SQL, MERN, AI & Cloud</p>
              <div className="socials">
                <a href="https://github.com/pratapabhinav88" target="_blank" rel="noreferrer" title="GitHub">
                  <FiGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/abhinav-pratap-455106231/" target="_blank" rel="noreferrer" title="LinkedIn">
                  <FiLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <h2 className="section-title">Projects</h2>
          <motion.div layout className="projects-grid">
            {projects.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </motion.div>
        </section>

        <section id="skills" className="skills-section">
          <h2 className="section-title">Skills</h2>
          <motion.div layout className="skills-grid">
            <motion.div className="skill-card" whileHover={{ scale: 1.08, rotate: 5 }} whileTap={{ scale: 0.95 }}>
              <div className="skill-icon">🐍</div>
              <div className="skill-label">Python</div>
            </motion.div>
            <motion.div className="skill-card" whileHover={{ scale: 1.08, rotate: 5 }} whileTap={{ scale: 0.95 }}>
              <div className="skill-icon">🗄️</div>
              <div className="skill-label">SQL</div>
            </motion.div>
            <motion.div className="skill-card" whileHover={{ scale: 1.08, rotate: 5 }} whileTap={{ scale: 0.95 }}>
              <div className="skill-icon">⚛️</div>
              <div className="skill-label">React</div>
            </motion.div>
            <motion.div className="skill-card" whileHover={{ scale: 1.08, rotate: 5 }} whileTap={{ scale: 0.95 }}>
              <div className="skill-icon">🟢</div>
              <div className="skill-label">Node.js</div>
            </motion.div>
            <motion.div className="skill-card" whileHover={{ scale: 1.08, rotate: 5 }} whileTap={{ scale: 0.95 }}>
              <div className="skill-icon">💾</div>
              <div className="skill-label">MongoDB</div>
            </motion.div>
            <motion.div className="skill-card" whileHover={{ scale: 1.08, rotate: 5 }} whileTap={{ scale: 0.95 }}>
              <div className="skill-icon">🛠️</div>
              <div className="skill-label">JAVA</div>
            </motion.div>
          </motion.div>
        </section>

        <section id="contact" className="contact-section">
          <h2 className="section-title">Contact</h2>
          <ContactForm />
          <p className="muted" style={{ marginTop: '24px', textAlign: 'center' }}>Or connect with me:</p>
          <div className="contact-socials">
            <a href="https://github.com/pratapabhinav88" target="_blank" rel="noreferrer" title="GitHub">
              <FiGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/abhinav-pratap-455106231/" target="_blank" rel="noreferrer" title="LinkedIn">
              <FiLinkedin size={32} />
            </a>
            <a href="mailto:pratapabhinav88@gmail.com" title="Email">
              📧
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} Abhinav Pratap — Built with React + Framer Motion</div>
      </footer>
    </div>
  )
}
