import React from 'react';
import { motion } from 'framer-motion';
import { caseStudiesData } from '../data/content';

const CaseStudies = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="case-studies" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">Case Studies</p>
          <h2 className="section-title">
            Proven Success <span style={{ color: 'var(--accent-secondary)' }}>Stories</span>
          </h2>
          <p className="section-subtitle">
            Real-world projects that showcase our expertise in building scalable, innovative solutions.
          </p>
        </motion.div>

        <motion.div
          className="case-studies-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {caseStudiesData.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={index}
                className="case-study-card"
                variants={cardVariants}
              >
                <div 
                  className="case-study-image"
                  style={{
                    background: `radial-gradient(circle at center, ${study.color}30, transparent 70%), rgba(15, 23, 42, 0.8)`
                  }}
                >
                  <Icon style={{ color: study.color }} />
                </div>
                <div className="case-study-content">
                  <div className="case-study-category">{study.category}</div>
                  <h3 className="case-study-title">{study.title}</h3>
                  <p className="case-study-description">{study.description}</p>
                  <div className="case-study-tags">
                    {study.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="case-study-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
