import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">About Us</p>
          <h2 className="section-title">
            Building the <span style={{ color: 'var(--accent-secondary)' }}>Future</span> of Software
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3>Your Strategic Technology Partner</h3>
            <p>
              We're a team of passionate engineers, data scientists, and DevOps specialists dedicated to 
              transforming innovative ideas into production-ready solutions. Our expertise spans the entire 
              development lifecycle—from initial concept to scalable deployment.
            </p>
            <p>
              Whether you need a cutting-edge SaaS platform, intelligent AI/ML integration, robust data 
              pipelines, or streamlined DevOps workflows, we bring the technical excellence and strategic 
              thinking required to make your vision a reality.
            </p>
            <p>
              We don't just write code—we architect solutions that scale, perform, and deliver exceptional 
              value to your users and stakeholders.
            </p>

            <div className="about-stats">
              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Delivered</div>
              </motion.div>

              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </motion.div>

              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </motion.div>

              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <FaRocket className="about-visual-icon" />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.2), transparent 50%)',
                animation: 'pulse 3s ease-in-out infinite',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
