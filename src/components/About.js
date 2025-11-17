import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });


  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-underline"></div>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3>Hello! I'm Benjo 👋</h3>
          <p>
            A passionate <strong>Full Stack Developer</strong> from Bacolod City, Philippines,
            with over 7 years of experience building dynamic web applications and mobile solutions.
          </p>
          <p>
            My journey in tech started with a BS in Information Technology from La Consolacion
            College-Bacolod, where I honed my skills and developed a deep passion for creating
            seamless digital experiences.
          </p>
          <p>
            I specialize in <strong>Angular, React, Node.js, WordPress, and Ionic</strong>,
            transforming ideas into robust, user-friendly applications. Whether it's crafting
            custom WordPress plugins, building RESTful APIs, or designing responsive mobile apps,
            I bring dedication and creativity to every project.
          </p>

          <div className="about-location">
            <span className="location-icon">📍</span>
            <span>Bacolod City, Negros Occidental, Philippines</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
