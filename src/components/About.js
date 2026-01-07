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
        <div className="about-content">
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag mono-text">About Me</span>
            <h2 className="about-title">My Bio</h2>
            <div className="about-accent-line"></div>
          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="about-intro">
              I'm a <span className="highlight">Full Stack Developer</span> obsessed with
              blending design, code, and functionality into seamless digital experiences.
            </p>
            <p className="about-text">
              With over 7 years of experience, I specialize in building dynamic web applications
              and mobile solutions using Angular, React, Node.js, WordPress, and more. From
              crafting custom WordPress plugins to building RESTful APIs and designing responsive
              mobile apps, I bring dedication and creativity to every project.
            </p>
            <p className="about-text">
              Based in Bacolod City, Philippines, I've worked with companies across different
              industries, delivering solutions that not only meet requirements but exceed expectations.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label mono-text">Location</span>
                <span className="detail-value">Bacolod City, Philippines</span>
              </div>
              <div className="detail-item">
                <span className="detail-label mono-text">Email</span>
                <a href="mailto:benjomabrasado@gmail.com" className="detail-value detail-link">
                  benjomabrasado@gmail.com
                </a>
              </div>
            </div>

            <div className="about-socials">
              <a
                href="https://github.com/benjoabrasado"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/benjo-abrasado"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
