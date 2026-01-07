import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Services.css';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const services = [
    {
      icon: '🎨',
      title: 'Web Design & Development',
      description: 'Creating intuitive, responsive interfaces that align with your brand identity. From concept to deployment, I build web experiences that engage and convert.',
      features: ['UI/UX Design', 'Responsive Layouts', 'Brand Integration']
    },
    {
      icon: '⚡',
      title: 'Full Stack Development',
      description: 'Building scalable, lightning-fast applications with modern frameworks. Frontend to backend, I deliver complete solutions that perform under pressure.',
      features: ['React & Angular', 'Node.js & PHP', 'RESTful APIs']
    },
    {
      icon: '🔌',
      title: 'WordPress Solutions',
      description: 'Custom plugins, themes, and integrations that extend WordPress beyond its limits. Tailored solutions that fit your unique business needs.',
      features: ['Custom Plugins', 'Theme Development', 'API Integration']
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
        duration: 0.6,
      },
    },
  };

  return (
    <section className="services" id="services" ref={ref}>
      <div className="services-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag mono-text">What I Do</span>
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            Specialized in building digital solutions that make an impact
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="card-border"></div>
              <div className="card-content">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <span className="feature-dot"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
