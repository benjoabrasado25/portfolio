import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'benjomabrasado@gmail.com',
      link: 'mailto:benjomabrasado@gmail.com',
      color: '#667eea'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '(+63) 915 752 1601',
      link: 'tel:+639157521601',
      color: '#764ba2'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Bacolod City, Philippines',
      link: null,
      color: '#f093fb'
    },
  ];


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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact-background">
        <motion.div
          className="contact-blob contact-blob-1"
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
          className="contact-blob contact-blob-2"
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

      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title light">Let's Work Together</h2>
          <div className="section-underline light"></div>
          <p className="section-subtitle light">
            Have a project in mind? Let's make it happen!
          </p>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-card"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {info.link ? (
                  <a href={info.link} className="contact-link">
                    <div className="contact-icon" style={{ background: info.color }}>
                      {info.icon}
                    </div>
                    <div className="contact-details">
                      <h4>{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </a>
                ) : (
                  <>
                    <div className="contact-icon" style={{ background: info.color }}>
                      {info.icon}
                    </div>
                    <div className="contact-details">
                      <h4>{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="cta-section"
            variants={itemVariants}
          >
            <h3 className="cta-title">Ready to start a project?</h3>
            <p className="cta-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <motion.a
              href="mailto:benjomabrasado@gmail.com"
              className="cta-email-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Me an Email
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p>© 2025 Benjo M. Abrasado. Crafted with passion and React.</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
