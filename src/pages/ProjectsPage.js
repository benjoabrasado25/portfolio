import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SEO from '../components/SEO';
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
      title: 'ZCA Realtime Chat',
      description: 'A comprehensive real-time chat support system built with Socket.IO and WordPress. Features live agent management, anonymous chat, multi-chat support, and seamless integration with licensing system.',
      fullDescription: 'ZCA Realtime Chat is a full-featured WordPress plugin that provides real-time customer support through a sleek chat interface. Built with Socket.IO for instant messaging and MongoDB for data persistence, it offers agent management, multi-chat capabilities, automatic online/offline detection, and a beautiful chat widget. The system integrates with the ZCA API Key Manager for licensing, includes a 7-day trial period, and features custom branding that can be removed with license activation.',
      technologies: ['WordPress', 'PHP', 'Socket.IO', 'Node.js', 'MongoDB', 'Express', 'jQuery'],
      category: 'web',
      downloadUrl: 'https://drive.google.com/file/d/13pdnqyMwgipsKLDfk4YHqgWg1o9ZQgZ_/view?usp=drive_link',
      images: [
        '/images/projects/zca-realtime-chat-1.png',
        '/images/projects/zca-realtime-chat-2.png',
        '/images/projects/zca-realtime-chat-3.png',
        '/images/projects/zca-realtime-chat-4.png',
        '/images/projects/zca-realtime-chat-5.png',
        '/images/projects/zca-realtime-chat-6.png',
      ],
      features: [
        'Real-time messaging with Socket.IO',
        'Agent dashboard with live chat management',
        'Anonymous and logged-in user support',
        'Multi-chat capability per agent',
        'Automatic online/offline status tracking',
        'Chat rating and review system',
        'WordPress database and MongoDB synchronization',
        'License integration with branding removal',
        '7-day trial period',
        'Customizable chat widget',
        'Browser notifications for agents',
        'Chat history and analytics'
      ],
      year: '2025'
    },
    {
      id: 2,
      title: 'ZCA API Key Manager',
      description: 'A full-stack web application for managing API keys and licenses for the ZCA Inventory WordPress plugin. Features JWT authentication, site activation tracking, trial management, and admin controls.',
      fullDescription: 'ZCA API Key Manager is a comprehensive full-stack application built with React and MongoDB that manages API keys and licensing for the ZCA Inventory WordPress plugin. The system provides dynamic API key generation, multi-site activation tracking with configurable limits, 7-day trial periods per site, and WordPress integration via RESTful APIs. Features include a beautiful gradient UI, JWT-based authentication, and admin controls for site deactivation management.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Axios'],
      category: 'web',
      images: [
        '/images/projects/zca-api-manager-1.png',
        '/images/projects/zca-api-manager-2.png',
      ],
      features: [
        'Dynamic API key generation',
        'JWT-based authentication system',
        'Multi-site activation tracking',
        'Trial period management (7 days)',
        'Admin dashboard with analytics',
        'WordPress plugin integration',
        'Site deactivation controls',
        'Real-time license validation'
      ],
      year: '2025'
    },
    {
      id: 3,
      title: 'ZCA Inventory System',
      description: 'A comprehensive WordPress inventory management plugin for small to medium businesses. Features include product management, real-time stock tracking, point of sale, currency settings, and detailed reporting.',
      fullDescription: 'ZCA Inventory is a full-featured WordPress plugin designed for inventory management in small to medium businesses. The plugin seamlessly integrates with WordPress and includes a modern dashboard, product catalog management, cashier/POS interface, sales reporting, and multi-currency support. Built as a WordPress plugin, it provides a seamless experience for WordPress store owners.',
      technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'jQuery'],
      category: 'web',
      downloadUrl: 'https://drive.google.com/file/d/1D04ilzbQ9RaYXL1_IQS7j7feKm7gPDsh/view?usp=drive_link',
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
      id: 4,
      title: 'Ridewatch.org',
      description: 'A cross-platform mobile application for ride tracking and management built with Flutter and Firebase, providing real-time updates and seamless user experience.',
      fullDescription: 'Ridewatch.org is a comprehensive ride tracking and management application that allows users to monitor and manage their rides in real-time. Built with Flutter framework for cross-platform compatibility and Firebase for backend services, the app features user authentication, real-time GPS tracking, ride history, and push notifications.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
      category: 'mobile',
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
      <SEO
        title="Projects"
        description="View my portfolio of web applications including ZCA Realtime Chat, ZCA Inventory System, ZCA API Key Manager, and more full-stack projects built with React, Node.js, WordPress, and Socket.IO."
        url="/projects"
        keywords="Web Development Projects, React Projects, WordPress Plugins, Node.js Applications, Socket.IO Chat, Inventory Management, Full Stack Portfolio"
      />

      {/* Header */}
      <section className="projects-page-header">
        <div className="header-background">
          <div className="grid-pattern"></div>
          <motion.div
            className="header-orb header-orb-1"
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
            className="header-orb header-orb-2"
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
            <a href="/" className="back-link mono-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Home
            </a>
            <h1 className="page-title">My Projects</h1>
            <p className="page-subtitle">
              A collection of web and mobile applications I've built
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
              All Projects ({allProjects.length})
            </button>
            <button
              className={`filter-button ${activeCategory === 'web' ? 'active' : ''}`}
              onClick={() => setActiveCategory('web')}
            >
              Web Development ({webProjects.length})
            </button>
            <button
              className={`filter-button ${activeCategory === 'mobile' ? 'active' : ''}`}
              onClick={() => setActiveCategory('mobile')}
            >
              Mobile Apps ({mobileProjects.length})
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
                whileHover={{ y: -10 }}
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
                      <span className="view-details">View Details</span>
                    </div>
                  </div>
                ) : (
                  <div className="project-header-page">
                    <span className="project-icon-page">{project.category === 'web' ? '💻' : '📱'}</span>
                  </div>
                )}

                <div className="project-content-page">
                  <div className="project-meta-row">
                    <span className="project-category-tag mono-text">
                      {project.category === 'web' ? 'Web' : 'Mobile'}
                    </span>
                    <span className="project-year mono-text">{project.year}</span>
                  </div>
                  <h3 className="project-title-page">{project.title}</h3>
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
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="modal-header">
              <span className="modal-category mono-text">{selectedProject.category === 'web' ? 'Web Development' : 'Mobile App'}</span>
              <h2>{selectedProject.title}</h2>
              <span className="modal-year mono-text">{selectedProject.year}</span>
            </div>

            {selectedProject.downloadUrl && (
              <div className="modal-download">
                <a
                  href={selectedProject.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                  Download Plugin
                </a>
              </div>
            )}

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
