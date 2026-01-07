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
    },
    {
      company: 'Tas Tradesoft',
      role: 'Full Stack Developer',
      period: '2022 - 2023',
      description: 'Full Stack Developer specializing in Angular and Node.js, I create dynamic, responsive web applications. Design and implement robust server-side solutions.',
      technologies: ['Angular', 'Node.js', 'TypeScript', 'REST APIs'],
    },
    {
      company: 'CrowdConnect',
      role: 'Mobile Developer',
      period: '2019 - 2022',
      description: 'Create cross-platform mobile applications with seamless user experiences and integrate Firebase SDK for robust backend functionalities.',
      technologies: ['Ionic', 'Firebase', 'Angular', 'TypeScript'],
    },
    {
      company: 'KnightSpear',
      role: 'Full Stack Developer',
      period: '2017 - 2018',
      description: 'Design and implement RESTful APIs, create dynamic user interfaces with Angular, and build robust back-end applications with Node.js using MongoDB as database.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'REST APIs'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
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
          <span className="section-tag mono-text">Career</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey building innovative solutions
          </p>
        </motion.div>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              variants={itemVariants}
            >
              <div className="experience-dot">
                <div className="dot-inner"></div>
              </div>
              <div className="experience-line"></div>

              <motion.div
                className="experience-card"
                whileHover={{ y: -5, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="card-top">
                  <span className="experience-period mono-text">{exp.period}</span>
                </div>
                <h3 className="experience-company">{exp.company}</h3>
                <h4 className="experience-role">{exp.role}</h4>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-tech">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
