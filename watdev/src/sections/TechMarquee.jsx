import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaAws,
  FaNodeJs,
  FaReact,
  FaAngular,
  FaPython,
  FaDocker,
} from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';

const techItems = [
  { label: 'GitHub', Icon: FaGithub },
  { label: 'AWS', Icon: FaAws },
  { label: 'Node.js', Icon: FaNodeJs },
  { label: 'React', Icon: FaReact },
  { label: 'Angular', Icon: FaAngular },
  { label: 'Python', Icon: FaPython },
  { label: 'Docker', Icon: FaDocker },
  { label: 'Kubernetes', Icon: SiKubernetes },
];

const TechMarquee = () => {
  // Duplicate the array so the marquee loops smoothly
  const loopItems = [...techItems, ...techItems];

  return (
    <section id="stack" className="section">
      <div className="container">
        <motion.div
          className="tech-marquee"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="tech-marquee-label">Preferred Stack</div>
          <div className="tech-marquee-track">
            {loopItems.map(({ label, Icon }, index) => (
              <div className="tech-marquee-item" key={`${label}-${index}`}>
                <span className="tech-dot" />
                <Icon size={16} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechMarquee;