import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

// Initialize EmailJS (replace with your public key)
emailjs.init('jmk7_CBDxWlTOtDOS')

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      await emailjs.send(
        'service_en7rc5o',
        'template_7dska4j',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'pratapabhinav88@gmail.com'
        }
      )
      setStatus('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    } catch (error) {
      setStatus('Failed to send message. Please try again.')
      console.error('EmailJS error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="contact-form"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="form-input"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="form-input"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        required
        className="form-input"
      />
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="form-submit"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </motion.button>
      {status && <p className={`form-status ${status.includes('success') ? 'success' : 'error'}`}>{status}</p>}
    </motion.form>
  )
}
