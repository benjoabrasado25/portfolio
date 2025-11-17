import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Education.css';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      school: 'La Consolacion College-Bacolod',
      period: '2013 - 2017',
      icon: '🎓',
      color: '#667eea'
    },
    {
      degree: 'Bachelor of Marine Transportation',
      school: 'John B. Lacson Colleges Foundation',
      period: '2011 - 2012',
      icon: '⚓',
      color: '#764ba2'
    },
  ];

  const awards = [
    {
      title: 'Complete WordPress and Theme Development',
      type: 'Certificate',
      icon: '🏅',
      color: '#f093fb'
    },
    {
      title: '1st Place PSITS Quiz Bowl LCCB',
      type: '2017',
      icon: '🏆',
      color: '#4facfe'
    },
    {
      title: 'Best Capstone Programmer',
      type: '2016-2017',
      icon: '⭐',
      color: '#43e97b'
    },
    {
      title: 'PSITS Club Vice-President',
      type: '2016-2017',
      icon: '👔',
      color: '#fa709a'
    },
    {
      title: 'Impact Hackathon Top 15',
      type: '2019',
      icon: '💡',
      color: '#667eea'
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
    <section className="education" id="education" ref={ref}>
      <div className="education-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Education & Achievements</h2>
          <div className="section-underline"></div>
        </motion.div>

        <div className="education-content">
          {/* Education Section */}
          <div className="subsection">
            <motion.h3
              className="subsection-title"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              📚 Education
            </motion.h3>

            <motion.div
              className="education-list"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-card"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="edu-icon" style={{ background: edu.color }}>
                    {edu.icon}
                  </div>
                  <div className="edu-content">
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <p className="edu-school">{edu.school}</p>
                    <span className="edu-period" style={{ color: edu.color }}>
                      {edu.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Awards Section */}
          <div className="subsection">
            <motion.h3
              className="subsection-title"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              🏆 Awards & Certifications
            </motion.h3>

            <motion.div
              className="awards-grid"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  className="award-card"
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  style={{ borderTopColor: award.color }}
                >
                  <div className="award-icon">{award.icon}</div>
                  <h4 className="award-title">{award.title}</h4>
                  <span className="award-type" style={{ background: `${award.color}20`, color: award.color }}>
                    {award.type}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
