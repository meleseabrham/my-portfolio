import React from 'react';
import '../css/HeroSection.css';
import profileImg from '../assets/profile.png';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import DownloadButton from '../components/DownloadButton';

const socials = [
  { href: 'https://www.linkedin.com/in/melese-abrham', label: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/linkedin.svg', color: '#1976d2' },
  { href: 'https://github.com/meleseabrham', label: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/github.svg', color: '#222' },
  { href: 'https://x.com/meleseabrham17', label: 'Twitter', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/twitter.svg', color: '#1da1f2' },
  { href: 'https://www.instagram.com/melesse_ab/', label: 'Instagram', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/instagram.svg', color: '#e1306c' },
];

const quickSkills = [
 { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg', color: '#61dafb' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg', color: '#e34f26' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg', color: '#1572b6' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg', color: '#38bdf8' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg', color: '#f7df1e' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg', color: '#3c873a' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg', color: '#000000' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/php.svg', color: '#777BB4' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg', color: '#4479a1' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/flutter.svg', color: '#02569b' },
 

];

const HeroSection = () => {
  // Calculate positions for icons in a circle
  const getPositionOnCircle = (index, total, radius) => {
    const angle = (index * (2 * Math.PI)) / total;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  return (
    <section
      className="hero"
      id="home"
      style={{
        "--hero-image": "url('/assets/img/hero.jpeg')"
      }}
    >
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__name">Melese Abrham</h1>
          <div className="hero__title">
            <span className="hero__prefix"> Hey I'm </span>
            <span className="hero__typewriter">
              <Typewriter
                words={[
                  " FullStack Software Developer_",
                  "Web Developer_",
                  "Android Developer_",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
          <p>I create creative software experiences by merging creativity and logic to transform code into solutions you can see, apply, and believe on.</p>
          {/* <div className="hero__socials">
             {socials.map((s) => (
              <a href={s.href} aria-label={s.label} key={s.label} target="_blank" rel="noopener noreferrer">
                <div className="card-icon-circle" style={{ background: s.color }}>
                  <img src={s.icon} alt={s.label} />
                </div>
              </a>
            ))} 
          </div>
          <div className="hero__buttons">
            <DownloadButton />
            <a href="#contact" className="contact-btn">Contact Me</a> 
          </div> */}
          <div className="hero__skills">
            {quickSkills.map((skill) => (
              <span key={skill.name} className="hero-skill-icon">
                <div className="card-icon-circle" style={{ background: skill.color }}>
                  <img src={skill.icon} alt={skill.name} />
                </div>
               {skill.name}
              </span>
            ))}
          </div>
        </div>
        
        <div className="hero__image">
          <motion.img
            src={profileImg}
            alt="Profile"
            className="profile-img"
            // animate={{ y: [0, -20, 0], rotate: [0, 8, -8, 0] }}
            // transition={{
            //   y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            //   rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" }
            // }}
          />
          
          {/* Animated skill icons around the profile image */}
          <div className="floating-icons">
            {quickSkills.map((skill, index) => {
              const radius = 120; // Adjust this value to change the circle size
              const position = getPositionOnCircle(index, quickSkills.length, radius);
              
              return (
                <motion.div
                  key={skill.name}
                  className="floating-icon"
                  style={{
                    '--icon-color': skill.color,
                    x: position.x,
                    y: position.y,
                  }}
                  animate={{
                    rotate: [0, 360],
                    x: position.x,
                    y: position.y,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { repeat: Infinity, duration: 20 + index * 2, ease: "linear" },
                    scale: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: index * 0.2 },
                    x: { type: 'spring', stiffness: 100, damping: 10 },
                    y: { type: 'spring', stiffness: 100, damping: 10 }
                  }}
                >
                  <div className="floating-icon-circle" style={{ background: skill.color }}>
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;