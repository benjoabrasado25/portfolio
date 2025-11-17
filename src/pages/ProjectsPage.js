import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const webProjects = [
    {
      id: 1,
      title: 'ZCA Inventory System',
      description: 'A comprehensive WordPress inventory management plugin for small to medium businesses. Features include product management, real-time stock tracking, point of sale, currency settings, and detailed reporting.',
      fullDescription: 'ZCA Inventory is a full-featured WordPress plugin designed for inventory management in small to medium businesses. The plugin seamlessly integrates with WordPress and includes a modern dashboard, product catalog management, cashier/POS interface, sales reporting, and multi-currency support. Built as a WordPress plugin, it provides a seamless experience for WordPress store owners.',
      technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'jQuery'],
      category: 'web',
      icon: '📦',
      color: '#2196F3',
      images: [
        '/images/projects/zca-inventory-1.png',
        '/images/projects/zca-inventory-2.png',
        '/images/projects/zca-inventory-3.png',
        '/images/projects/zca-inventory-4.png',
        '/images/projects/zca-inventory-5.png',
        '/images/projects/zca-inventory-6.png',
      ],
      features: [
        'Dashboard with analytics',
        'Product management system',
        'Point of Sale (POS) interface',
        'Inventory tracking',
        'Sales reports',
        'Multi-currency support',
        'User role management',
        'WordPress integration'
      ],
      year: '2024'
    },
  ];

  const mobileProjects = [
    {
      id: 2,
      title: 'Ridewatch.org',
      description: 'A cross-platform mobile application for ride tracking and management built with Flutter and Firebase, providing real-time updates and seamless user experience.',
      fullDescription: 'Ridewatch.org is a comprehensive ride tracking and management application that allows users to monitor and manage their rides in real-time. Built with Flutter framework for cross-platform compatibility and Firebase for backend services, the app features user authentication, real-time GPS tracking, ride history, and push notifications.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
      category: 'mobile',
      icon: '🚗',
      color: '#4CAF50',
      images: [
        '/images/projects/ridewatch-1.jpeg',
        '/images/projects/ridewatch-2.jpeg',
      ],
      features: [
        'Real-time GPS tracking',
        'User authentication',
        'Ride history management',
        'Push notifications',
        'Map integration',
        'Cross-platform support (iOS & Android)',
        'Offline mode',
        'Real-time updates'
      ],
      year: '2021'
    },
  ];

  const allProjects = [...webProjects, ...mobileProjects];

  const filteredProjects = activeCategory === 'all'
    ? allProjects
    : activeCategory === 'web'
    ? webProjects
    : mobileProjects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="projects-page">
      {/* Header */}
      <section className="projects-page-header">
        <div className="header-background">
          <motion.div
            className="header-blob header-blob-1"
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="header-blob header-blob-2"
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="header-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a href="/" className="back-link">← Back to Home</a>
            <h1 className="page-title">My Projects</h1>
            <p className="page-subtitle">
              A comprehensive showcase of web and mobile applications I've built
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="projects-filter-section" ref={ref}>
        <div className="projects-page-container">
          <motion.div
            className="filter-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <button
              className={`filter-button ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              <span className="filter-icon">🚀</span> All Projects ({allProjects.length})
            </button>
            <button
              className={`filter-button ${activeCategory === 'web' ? 'active' : ''}`}
              onClick={() => setActiveCategory('web')}
            >
              <span className="filter-icon">💻</span> Web Development ({webProjects.length})
            </button>
            <button
              className={`filter-button ${activeCategory === 'mobile' ? 'active' : ''}`}
              onClick={() => setActiveCategory('mobile')}
            >
              <span className="filter-icon">📱</span> Mobile Apps ({mobileProjects.length})
            </button>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="projects-page-container">
          <motion.div
            className="projects-grid-page"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card-page"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                onClick={() => setSelectedProject(project)}
              >
                {project.images && project.images.length > 0 ? (
                  <div className="project-image-container">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-overlay">
                      <span className="view-details">View Details →</span>
                    </div>
                  </div>
                ) : (
                  <div className="project-header-page" style={{ background: project.color }}>
                    <span className="project-icon-page">{project.icon}</span>
                  </div>
                )}

                <div className="project-content-page">
                  <div className="project-category-badge">
                    {project.category === 'web' ? '💻 Web' : '📱 Mobile'}
                  </div>
                  <h3 className="project-title-page">{project.title}</h3>
                  <p className="project-year">{project.year}</p>
                  <p className="project-description-page">{project.description}</p>

                  <div className="project-tech-stack-page">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="project-tech-tag-page">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-more">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          className="project-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>

            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <span className="modal-year">{selectedProject.year}</span>
            </div>

            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="modal-images">
                {selectedProject.images.map((image, index) => (
                  <img key={index} src={image} alt={`${selectedProject.title} ${index + 1}`} />
                ))}
              </div>
            )}

            <div className="modal-body">
              <p className="modal-description">{selectedProject.fullDescription}</p>

              {selectedProject.features && (
                <div className="modal-features">
                  <h3>Key Features</h3>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-technologies">
                <h3>Technologies Used</h3>
                <div className="modal-tech-tags">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="modal-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectsPage;
