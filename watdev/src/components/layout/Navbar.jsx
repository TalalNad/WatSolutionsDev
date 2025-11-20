import React from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#case-studies' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-inner">
        
        {/* Brand block */}
        <motion.div
          className="nav-left"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="nav-brand-block">
            <span className="brand-line brand-line-main">Wat</span>
            <span className="brand-line">Solutions</span>
            <span className="brand-line">Dev</span>
          </div>
        </motion.div>

        {/* Nav links */}
        <motion.nav
          className="nav-links"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {links.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </motion.nav>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <button className="btn btn-primary">Let&apos;s Talk</button>
        </motion.div>

      </div>
    </header>
  );
};

export default Navbar;