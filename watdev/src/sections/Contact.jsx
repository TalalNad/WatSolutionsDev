import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaBriefcase } from 'react-icons/fa';
import { SiUpwork, SiFreelancer } from 'react-icons/si';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="contact-hero"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-content">
            <p className="section-kicker">Get In Touch</p>
            <h2 className="contact-title">
              Let's Build Something <span style={{ color: 'var(--accent-secondary)' }}>Amazing</span> Together
            </h2>
            <p className="contact-subtitle">
              Ready to transform your ideas into reality? We're here to help you build scalable, 
              innovative solutions that drive real business value.
            </p>

            <div className="contact-options">
              <motion.div
                className="contact-option"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -4 }}
              >
                <div className="contact-option-icon" style={{ background: 'rgba(56, 189, 248, 0.1)', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
                  <FaEnvelope size={24} style={{ color: '#38bdf8' }} />
                </div>
                <h3>Email Us</h3>
                <p>Drop us a message and we'll respond within 24 hours</p>
                <a href="mailto:hello@watsolutions.dev" className="contact-link">hello@watsolutions.dev</a>
              </motion.div>

              <motion.div
                className="contact-option"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -4 }}
              >
                <div className="contact-option-icon" style={{ background: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgba(34, 197, 94, 0.3)' }}>
                  <FaLinkedin size={24} style={{ color: '#22c55e' }} />
                </div>
                <h3>LinkedIn</h3>
                <p>Connect with us on LinkedIn for updates and insights</p>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">Visit Our Profile</a>
              </motion.div>

              <motion.div
                className="contact-option"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <div className="contact-option-icon" style={{ background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.3)' }}>
                  <SiUpwork size={24} style={{ color: '#8b5cf6' }} />
                </div>
                <h3>Upwork</h3>
                <p>Hire us on Upwork for your next project</p>
                <a href="https://upwork.com" target="_blank" rel="noopener noreferrer" className="contact-link">View Upwork Profile</a>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="contact-cta-final"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Ready to get started?</h3>
            <p>Reach out via email or connect with us on your preferred platform.</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <a href="mailto:hello@watsolutions.dev" className="btn btn-primary">Send us an Email</a>
              <button className="btn btn-ghost">View Our Services</button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
