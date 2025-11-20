import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { techStackData, techCategories } from '../data/content';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTech = activeCategory === 'All' 
    ? techStackData 
    : techStackData.filter(tech => tech.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="tech-stack" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">Technology Stack</p>
          <h2 className="section-title">
            Modern <span style={{ color: 'var(--accent-secondary)' }}>Technologies</span> We Master
          </h2>
          <p className="section-subtitle">
            We leverage cutting-edge tools and frameworks to build scalable, secure, and future-ready solutions.
          </p>
        </motion.div>

        <motion.div
          className="tech-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {techCategories.map((category) => (
            <button
              key={category}
              className={`tech-filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="tech-stack-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {filteredTech.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  className="tech-stack-item"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -6,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Icon className="tech-stack-icon" style={{ color: tech.color }} />
                  <span className="tech-stack-name">{tech.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TechStack;
