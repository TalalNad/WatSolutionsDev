import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/content';

const ServiceCard = ({ service, Icon, variants }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="service-card"
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        y: rotateX !== 0 || rotateY !== 0 ? -12 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      <div 
        className="service-card-glow" 
        style={{ 
          background: `radial-gradient(circle at top, ${service.color}15, transparent 70%)`,
          transform: 'translateZ(5px)',
        }}
      />
      <div 
        className="service-icon-wrapper"
        style={{ 
          background: `linear-gradient(135deg, ${service.color}20, transparent)`,
          borderColor: `${service.color}40`,
          transform: 'translateZ(20px)',
        }}
      >
        <Icon size={28} style={{ color: service.color }} />
      </div>
      <h3 className="service-title" style={{ transform: 'translateZ(15px)' }}>
        {service.title}
      </h3>
      <p className="service-description" style={{ transform: 'translateZ(10px)' }}>
        {service.description}
      </p>
      <div className="service-card-shine" />
    </motion.div>
  );
};

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="services" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">Our Services</p>
          <h2 className="section-title">
            Transforming Ideas Into <span style={{ color: 'var(--accent-secondary)' }}>Digital Excellence</span>
          </h2>
          <p className="section-subtitle">
            From AI-powered solutions to scalable SaaS platforms, we build technology that drives your business forward.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <ServiceCard
                key={index}
                service={service}
                Icon={Icon}
                variants={cardVariants}
              />
            );
          })}
        </motion.div>

        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Not sure where to begin?</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
              Let's discuss your project and find the perfect solution for your needs.
            </p>
          </div>
          <button className="btn btn-primary">Schedule a Call</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
