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
      title: 'WordPress Custom Solutions',
      company: 'Boostly',
      description: 'Developed custom WordPress plugins and themes with Laravel backend integration, enhancing site functionality and streamlining operations.',
      technologies: ['WordPress', 'Laravel', 'PHP', 'MySQL'],
      icon: '🚀',
      color: '#667eea',
      period: '2023-2025'
    },
    {
      title: 'Dynamic Web Applications',
      company: 'Tas Tradesoft',
      description: 'Built responsive, dynamic web applications using Angular and Node.js with robust server-side solutions and RESTful APIs.',
      technologies: ['Angular', 'Node.js', 'TypeScript', 'REST APIs'],
      icon: '💻',
      color: '#764ba2',
      period: '2022-2023'
    },
    {
      title: 'Cross-Platform Mobile Apps',
      company: 'CrowdConnect',
      description: 'Created seamless cross-platform mobile applications with Ionic and integrated Firebase SDK for robust backend functionalities.',
      technologies: ['Ionic', 'Firebase', 'Angular', 'TypeScript'],
      icon: '📱',
      color: '#f093fb',
      period: '2019-2022'
    },
    {
      title: 'RESTful API Development',
      company: 'KnightSpear',
      description: 'Designed and implemented RESTful APIs, created dynamic UIs with Angular, and built back-end applications with Node.js and MongoDB.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express'],
      icon: '⚔️',
      color: '#4facfe',
      period: '2017-2018'
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
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">
            A showcase of my work across web and mobile development
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
              whileHover={{
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <div className="project-header" style={{ background: project.color }}>
                <span className="project-icon">{project.icon}</span>
                {project.company && (
                  <span className="project-company">{project.company}</span>
                )}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-period">{project.period}</p>
                <p className="project-description">{project.description}</p>

                <div className="project-tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="project-tech-tag" style={{ borderColor: project.color, color: project.color }}>
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
          <h3>Want to see more of my work?</h3>
          <p>Explore my complete portfolio of web and mobile applications with detailed case studies.</p>
          <motion.a
            href="/projects"
            className="projects-contact-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
