import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const experiences = [
    {
      company: 'Boostly',
      role: 'Full Stack Developer',
      period: '2023 - 2025',
      description: 'Develop custom plugins and themes for WordPress as well as Laravel as backend, improving site functionality and user experience. My work ensures robust, reliable solutions that streamline operations and enhance overall performance.',
      technologies: ['WordPress', 'Laravel', 'PHP', 'MySQL'],
      icon: '🚀',
      color: '#667eea'
    },
    {
      company: 'Tas Tradesoft',
      role: 'Full Stack Developer',
      period: '2022 - 2023',
      description: 'Full Stack Developer specializing in Angular and Node.js, I create dynamic, responsive web applications. Design and implement robust server-side solutions.',
      technologies: ['Angular', 'Node.js', 'TypeScript', 'REST APIs'],
      icon: '💻',
      color: '#764ba2'
    },
    {
      company: 'CrowdConnect',
      role: 'Mobile Developer',
      period: '2019 - 2022',
      description: 'Create cross-platform mobile applications with seamless user experiences and integrate Firebase SDK for robust backend functionalities.',
      technologies: ['Ionic', 'Firebase', 'Angular', 'TypeScript'],
      icon: '📱',
      color: '#f093fb'
    },
    {
      company: 'KnightSpear',
      role: 'Full Stack Developer',
      period: '2017 - 2018',
      description: 'Design and implement RESTful APIs, create dynamic user interfaces with Angular, and build robust back-end applications with Node.js using MongoDB as database.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'REST APIs'],
      icon: '⚔️',
      color: '#4facfe'
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="experience" id="experience" ref={ref}>
      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Work Experience</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">
            My professional journey building innovative solutions
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-marker" style={{ background: exp.color }}>
                <span className="timeline-icon">{exp.icon}</span>
              </div>

              <motion.div
                className="timeline-content"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="experience-card">
                  <div className="card-header" style={{ borderLeftColor: exp.color }}>
                    <div className="company-info">
                      <h3 className="company-name">{exp.company}</h3>
                      <h4 className="role-name">{exp.role}</h4>
                    </div>
                    <span className="period-badge" style={{ background: `${exp.color}20`, color: exp.color }}>
                      {exp.period}
                    </span>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  <div className="tech-stack">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag" style={{ borderColor: exp.color, color: exp.color }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
