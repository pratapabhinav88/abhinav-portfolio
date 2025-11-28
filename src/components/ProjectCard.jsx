import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }){
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setRotateY((x - centerX) / 10)
    setRotateX((centerY - y) / 10)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.article
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      whileHover={{ scale: 1.05 }}
      layout
    >
      <div className="card-media" style={{ backgroundImage: `linear-gradient(135deg, ${project.gradient.join(',')})` }} />
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.description}</p>
        <div className="card-tags">
          {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="card-actions">
          {project.demo && <a className="btn-flat" href={project.demo} target="_blank" rel="noreferrer">Live</a>}
          {project.repo && <a className="btn-flat" href={project.repo} target="_blank" rel="noreferrer">Code</a>}
        </div>
      </div>
    </motion.article>
  )
}
