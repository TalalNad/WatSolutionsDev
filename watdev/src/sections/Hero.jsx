import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            maxWidth: '900px',
          }}
        >
          <motion.p
            className="section-kicker"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Welcome to WatDev Solutions
          </motion.p>

          <motion.h1
            style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.06em',
              marginBottom: '1.1rem',
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            We Build <span style={{ color: 'var(--accent-secondary)' }}>Exceptional Digital Products</span>
            <br />
            That Drive Real Business Value
          </motion.h1>

          <motion.p
            className="section-subtitle"
            style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            At WatDev, we specialize in crafting robust SaaS applications, AI-powered solutions, and scalable DevOps infrastructure. 
            Our team combines deep technical expertise with a passion for solving complex problems. Whether you're a startup scaling your first product 
            or an established company modernizing your tech stack, we're here to transform your vision into reality through cutting-edge technology and strategic thinking.
          </motion.p>

          <motion.div
            style={{
              marginTop: '2.2rem',
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button className="btn btn-primary">
              View Our Services
            </button>
          </motion.div>

          <motion.div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2.5rem',
              marginTop: '3.5rem',
              fontSize: '0.9rem',
              color: 'var(--muted)',
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            <div>
              <div style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1.3rem', marginBottom: '0.3rem' }}>
                15+
              </div>
              <div>Successfully Delivered Projects</div>
            </div>
            <div>
              <div style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1.3rem', marginBottom: '0.3rem' }}>
                50+
              </div>
              <div>Happy Clients Worldwide</div>
            </div>
            <div>
              <div style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1.3rem', marginBottom: '0.3rem' }}>
                5+
              </div>
              <div>Years of Industry Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
