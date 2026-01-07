import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const projects = [
    {
      title: 'ZCA Realtime Chat',
      description: 'Real-time chat support system with Socket.IO, live agent management, and WordPress integration.',
      technologies: ['WordPress', 'Socket.IO', 'Node.js', 'MongoDB'],
      image: '/images/projects/zca-realtime-chat-1.png',
      year: '2025',
      category: 'Plugin'
    },
    {
      title: 'ZCA API Key Manager',
      description: 'Full-stack application for managing API keys and licenses with JWT authentication.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: '/images/projects/zca-api-manager-1.png',
      year: '2025',
      category: 'Web App'
    },
    {
      title: 'ZCA Inventory System',
      description: 'Comprehensive inventory management plugin with POS interface and multi-currency support.',
      technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
      image: '/images/projects/zca-inventory-1.png',
      year: '2024',
      category: 'Plugin'
    },
    {
      title: 'Ridewatch.org',
      description: 'Cross-platform ride tracking app with real-time GPS and Firebase backend.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Maps API'],
      image: '/images/projects/ridewatch-1.jpeg',
      year: '2021',
      category: 'Mobile'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag mono-text">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my expertise in web and mobile development
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <span className="project-category mono-text">{project.category}</span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span className="project-year mono-text">{project.year}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="cta-content">
            <h3>Want to see more?</h3>
            <p>Explore all my projects with detailed case studies and technical breakdowns.</p>
            <motion.a
              href="/projects"
              className="projects-view-all-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
