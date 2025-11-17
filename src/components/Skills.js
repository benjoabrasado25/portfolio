import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const skills = [
    { name: 'HTML', category: 'frontend', color: '#E34F26', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', category: 'frontend', color: '#1572B6', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', category: 'frontend', color: '#F7DF1E', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Angular', category: 'frontend', color: '#DD0031', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'React', category: 'frontend', color: '#61DAFB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Vue.js', category: 'frontend', color: '#4FC08D', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Ionic', category: 'mobile', color: '#3880FF', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg' },
    { name: 'Flutter', category: 'mobile', color: '#02569B', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Node.js', category: 'backend', color: '#339933', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'PHP', category: 'backend', color: '#777BB4', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Laravel', category: 'backend', color: '#FF2D20', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
    { name: 'Python', category: 'backend', color: '#3776AB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'WordPress', category: 'cms', color: '#21759B', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    { name: 'MongoDB', category: 'database', color: '#47A248', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', category: 'database', color: '#4479A1', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Firestore', category: 'database', color: '#FFA611', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  ];

  const categories = [
    { name: 'Frontend', icon: '🎨', key: 'frontend' },
    { name: 'Mobile', icon: '📱', key: 'mobile' },
    { name: 'Backend', icon: '⚙️', key: 'backend' },
    { name: 'CMS', icon: '📝', key: 'cms' },
    { name: 'Database', icon: '🗄️', key: 'database' },
  ];

  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          className="category-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            <span>🚀</span> All Skills
          </button>
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              <span>{cat.icon}</span> {cat.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <div className="skill-logo-container">
                <img src={skill.logo} alt={skill.name} className="skill-logo" />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-category-badge">
                {categories.find(c => c.key === skill.category)?.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="summary-card">
            <div className="summary-icon">💼</div>
            <h4>7+ Years</h4>
            <p>Professional Experience</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🚀</div>
            <h4>16+</h4>
            <p>Technologies Mastered</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">✨</div>
            <h4>100+</h4>
            <p>Projects Delivered</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
