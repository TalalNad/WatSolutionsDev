# WatDev

## Overview
WatDev is a professional React-based portfolio website for a SaaS/AI/ML/DevOps startup. Built with Create React App, it features a modern landing page with smooth animations, glassmorphism effects, and interactive sections showcasing services, case studies, technology stack, company information, and contact options.

## Project Structure
- `watdev/` - Main application directory
  - `public/` - Static assets (favicon, index.html, manifest)
  - `src/` - React source code
    - `components/` - Reusable UI components
      - `layout/` - Navbar, Footer
      - `ui/` - Button
      - `AnimatedBackground.jsx` - Canvas-based particle system with floating gradient orbs
    - `sections/` - Page sections
      - `Hero.jsx` - Hero section with animated introduction
      - `Services.jsx` - 8 service cards with 3D hover effects and mouse tracking
      - `CaseStudies.jsx` - Portfolio showcase with 4 projects
      - `TechStack.jsx` - Interactive tech stack with category filtering
      - `About.jsx` - Company overview with statistics
      - `Contact.jsx` - Contact section with multiple options
    - `data/` - Content configuration
      - `content.js` - Centralized data for services, case studies, and tech stack
    - `styles/` - Global CSS styles with custom animations
  - `package.json` - Project dependencies and scripts
  - `.env` - Environment configuration for Replit

## Technology Stack
- React 19.2.0
- Create React App 5.0.1
- Framer Motion 12.23.24 (scroll-triggered & hover animations)
- React Icons 5.5.0 (service & tech icons)
- Testing Library (Jest/React Testing Library)

## Features
- **Animated Background**: Canvas-based particle network with floating gradient orbs that move smoothly across the screen
- **3D Hover Effects**: Service cards feature mouse-tracking 3D rotation and depth layers for immersive interactions
- **Professional Animations**: Scroll-triggered fade-ins, hover effects, shine animations, and glassmorphism
- **Interactive Tech Stack**: Filterable technology display across 6 categories (Frontend, Backend, Database, AI/ML, DevOps)
- **Responsive Design**: Fully responsive layout that works on all devices
- **Centralized Content**: All data (services, case studies, technologies) managed in a single configuration file for easy updates
- **Accessibility**: Proper semantic HTML, aria-labels, valid link targets, and prefers-reduced-motion support

## Development
The application runs on port 5000 with host 0.0.0.0 to work with Replit's proxy system.

### Environment Configuration
- PORT: 5000
- HOST: 0.0.0.0
- DANGEROUSLY_DISABLE_HOST_CHECK: true (required for Replit proxy)
- WDS_SOCKET_PORT: 0 (automatic WebSocket configuration)

## Deployment
The application is configured for Replit deployment using autoscale mode:
- Build command: `npm run build --prefix watdev`
- Run command: `npx serve -s watdev/build`
- The `serve` package is installed as a dev dependency for production serving

## Scripts Available
- `npm start` - Start development server (port 5000)
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (one-way operation)

## Recent Changes
- 2025-11-20: Initial Replit setup
  - Installed Node.js 20
  - Installed all npm dependencies
  - Configured environment for port 5000 and Replit proxy compatibility
  - Set up development workflow
  - Configured deployment settings with autoscale mode
  - Installed serve package for production deployment

- 2025-11-20: Professional Portfolio Transformation
  - Added Services section with 8 animated service cards (SaaS, AI/ML, DevOps, Data Science, Full Stack, Mobile, Database, API)
  - Created Case Studies section showcasing 4 portfolio projects
  - Implemented interactive Tech Stack section with category filtering (24 technologies)
  - Built About section with company overview and statistics
  - Designed Contact section with 3 contact options and CTAs
  - Implemented Framer Motion animations throughout (scroll-triggered, hover effects, shine animations)
  - Added glassmorphism and gradient effects for modern UI
  - Centralized all content data in src/data/content.js for easy maintenance
  - Fixed accessibility issues in Footer with proper link targets
  - Updated Navigation with links to all sections
  - Application successfully tested and verified

- 2025-11-20: Advanced Animation & Interaction Enhancements
  - Created AnimatedBackground component with canvas-based particle system
    - Floating particles with connecting lines between nearby particles
    - Three animated gradient orbs moving smoothly across the screen
    - Performance-optimized with particle cap (max 100 particles)
  - Added 3D hover effects to service cards
    - Mouse-tracking rotation (rotateX and rotateY based on mouse position)
    - Depth layers with translateZ for 3D effect
    - Smooth spring animations for natural movement
    - Cards lift up (-12px) on hover
  - Implemented accessibility support
    - Added prefers-reduced-motion detection
    - Disables animations for users who prefer reduced motion
    - Maintains visual design while respecting accessibility preferences
  - All enhancements tested and architect-approved
