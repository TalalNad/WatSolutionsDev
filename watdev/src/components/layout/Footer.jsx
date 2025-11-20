import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { SiUpwork, SiFreelancer } from 'react-icons/si';

const Footer = () => {
  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer-inner">
        
        <span className="footer-text">
          <strong>Wat Solutions Dev</strong> · Remote-first team building SaaS products.
        </span>

        <div className="footer-right">
          <span className="footer-year">
            © {new Date().getFullYear()} All rights reserved.
          </span>

          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="LinkedIn">
              <FaLinkedin size={16} />
            </a>

            <a href="https://upwork.com" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="Upwork">
              <SiUpwork size={18} />
            </a>

            <a href="https://freelancer.com" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="Freelancer">
              <SiFreelancer size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;