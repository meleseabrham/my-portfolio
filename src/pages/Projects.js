import React, { useState } from 'react';
import '../css/Projects.css';
import { FaGithub } from 'react-icons/fa';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiHtml5,
  SiTailwindcss,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiPython,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiFlutter,
  SiPostgresql,
  SiSocketdotio,
  SiRedux,
  SiSupabase,
} from "react-icons/si";

const projectIcon = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/box-seam.svg';

const techIcons = {
  'React': <SiReact style={{ color: '#61DAFB' }} />,
  'JavaScript': <SiJavascript style={{ color: '#F7DF1E' }} />,
  'Tailwind': <SiTailwindcss style={{ color: '#38BDF8' }} />,
  'TypeScript': <SiTypescript style={{ color: '#3178C6' }} />,
  'Bootstrap': <SiBootstrap style={{ color: '#563D7C' }} />,
  'HTML': <SiHtml5 style={{ color: '#E34F26' }} />,
  'HTML5': <SiHtml5 style={{ color: '#E34F26' }} />,
  'CSS': <SiCss3 style={{ color: '#1572B6' }} />,
  'CSS3': <SiCss3 style={{ color: '#1572B6' }} />,
  'Node.js': <SiNodedotjs style={{ color: '#339933' }} />,
  'Express': <SiExpress style={{ color: '#000000' }} />,
  'Express.js': <SiExpress style={{ color: '#000000' }} />,
  'PHP': <SiPhp style={{ color: '#777BB4' }} />,
  'Python': <SiPython style={{ color: '#3776AB' }} />,
  'MongoDB': <SiMongodb style={{ color: '#47A248' }} />,
  'MySQL': <SiMysql style={{ color: '#4479A1' }} />,
  'Firebase': <SiFirebase style={{ color: '#FFCA28' }} />,
  'Flutter': <SiFlutter style={{ color: '#02569B' }} />,
  'PostgreSQL': <SiPostgresql style={{ color: '#336791' }} />,
  'Socket.io': <SiSocketdotio style={{ color: '#010101' }} />,
  'Redux': <SiRedux style={{ color: '#764ABC' }} />,
  'JWT': <SiJavascript style={{ color: '#F7DF1E' }} />,
  'OpenWeather API': <SiJavascript style={{ color: '#F7DF1E' }} />,
  'Supabase': <SiSupabase style={{ color: '#FFCA28' }} />,
};

const projects = [
  {
    title: 'E-Commerce Platform',
    type: 'fullstack',
    desc: 'A full-stack e-commerce platform built with Flutter, and Supabase.\nA comprehensive online store with payment integration and admin dashboard.',
    tech: ['Flutter', 'Node.js', 'Supabase', 'Firebase','MySQL'],
    github: 'https://github.com/meleseabrham',
    demo: '#',
    color: 'blue',
    iconColor: '#1976d2',
    screenshots: [
      require('../assets/screenshots/ecommerce1.jpg'),
      require('../assets/screenshots/ecommerce2.jpg'),
      require('../assets/screenshots/ecommerce3.jpg'),
      require('../assets/screenshots/ecommerce4.jpg'),
      require('../assets/screenshots/ecommerce5.jpg'),
      require('../assets/screenshots/ecommerce6.jpg'),
    ],
  },
  {
    title: 'Online Shopping System / E-Commerce Platform',
    type: 'fullstack' || 'backend',
    desc: 'Responsive Online Shopping System with product listings, cart, checkout, and modern UI with admin dashboard and customer dashboard.',
    tech: ['React', 'Tailwind','TypeScript','Node.js', 'Express','MySQL'],
    github: 'https://github.com/meleseabrham',
    demo: '#',
    color: 'purple',
    iconColor: '#6f42c1',
    screenshots: [
        require('../assets/screenshots/shopping1.png'),
        require('../assets/screenshots/shopping2.png'),
        require('../assets/screenshots/shopping3.png'),
        require('../assets/screenshots/shopping4.png'),
        require('../assets/screenshots/shopping5.png'),
        require('../assets/screenshots/shopping6.png'),
        
        // require('../assets/screenshots/shopping3.png'),
       
    ],
  },
 
  // {
  //   title: 'Task Management API',
  //   type: 'backend',
  //   desc: 'RESTful API for task management with authentication.',
  //   tech: ['Node.js', 'Express', 'JWT'],
  //   github: 'https://github.com/meleseabrham',
  //   demo: '#',
  //   color: 'orange',
  //   iconColor: '#fd7e14',
  //   screenshots: [
  //     '/assets/screenshots/task1.png',
  //     '/assets/screenshots/task2.png',
  //   ],
  // },
  // {
  //   title: 'Social Media Dashboard',
  //   type: 'fullstack',
  //   desc: 'Real time social media analytics dashboard.',
  //   tech: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
  //   github: 'https://github.com/meleseabrham',
  //   demo: '#',
  //   color: 'purple',
  //   iconColor: '#6f42c1',
  //   screenshots: [
  //     '/assets/screenshots/social1.png',
  //     '/assets/screenshots/social2.png',
  //   ],
  // },
  {
    title: 'Weather App',
    type: 'frontend',
    desc: 'Responsive weather application with real time data.',
    tech: ['Flutter', 'OpenWeather API'],
    github: 'https://github.com/meleseabrham/weather-app',
    demo: '#',
    color: 'red',
    iconColor: '#ff4c60',
    screenshots: [
      require('../assets/screenshots/weather1.jpg'),
      require('../assets/screenshots/weather2.jpg'),
      
    ],
  },

  {
    title: 'Chat Application',
    type: 'fullstack',
    desc: 'Real-time chat app with group and private messaging.',
    tech: ['Flutter', 'Supabase'],
    github: 'https://github.com/meleseabrham/chat-application',
    demo: '#',
    color: 'blue',
    iconColor: '#1976d2',
    screenshots: [
      require('../assets/screenshots/chat1.jpg'),
     
    ],
  },
  {
    title: 'Portfolio Website',
    type: 'frontend',
    desc: 'A modern portfolio showcasing projects with smooth animations.',
    tech: ['React', 'CSS', 'JavaScript', 'HTML','Tailwind'],
    github: 'https://github.com/meleseabrham',
    demo: '#',
    color: 'green',
    iconColor: '#2ecc40',
    screenshots: [
     require('../assets/screenshots/portfolio1.png'),
     require('../assets/screenshots/portfolio2.png'),
    ],
  },
  {
    title: 'Complain Management System',
    type: 'fullstack',
    desc: 'Complain Management System with complaint submission, tracking, role-based access, and admin dashboard for efficient resolution.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'javascript','Bootstrap'],
    github: 'https://github.com/meleseabrham/complain-management-system',
    demo: '#',
    color: 'teal',
    iconColor: '#20c997',
    screenshots: [
     require('../assets/screenshots/complain1.png'),
   
    ],
  },

  // {
  //   title: 'Todo List App',
  //   type: 'frontend',
  //   desc: 'Interactive todo list with drag-and-drop functionality.',
  //   tech: ['React', 'Redux'],
  //   github: 'https://github.com/meleseabrham/todo-list-app',
  //   demo: '#',
  //   color: 'orange',
  //   iconColor: '#fd7e14',
  //   screenshots: [
  //     '/assets/screenshots/todo1.png',
  //     '/assets/screenshots/todo2.png',
  //   ],
  // },
];

const filterTypes = [
  { label: 'All', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
 // { label: 'Backend', value: 'backend' },
  { label: 'Fullstack', value: 'fullstack' },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);

  // Control how many projects are shown per category
  const [showAll, setShowAll] = useState(false);

  // When changing filter, reset the showAll state
  const handleFilterChange = (value) => {
    setFilter(value);
    setShowAll(false);
  };

  const filtered = filter === 'all' ? projects : projects.filter(p => p.type === filter);
  const visibleProjects = showAll ? filtered : filtered.slice(0, 3);

  const openModal = (project) => {
    setModalProject(project);
    setModalIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const goToContact = () => {
    setModalOpen(false);
    // Navigate to contact section and focus the form tab (default is form)
    window.location.hash = '#contact';
    const el = document.getElementById('contact');
    if (el && el.scrollIntoView) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
    }
  };

  const nextScreenshot = () => {
    if (modalProject && modalProject.screenshots) {
      setModalIndex((prev) => (prev + 1) % modalProject.screenshots.length);
    }
  };

  const prevScreenshot = () => {
    if (modalProject && modalProject.screenshots) {
      setModalIndex((prev) =>
        prev === 0 ? modalProject.screenshots.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="projects" id="projects">
      <h2>Projects & <span>Portfolio</span></h2>
      <p>A showcase of my work, demonstrating technical expertise and problem-solving skills across various domains</p>
      <div className="projects__filters">
        {filterTypes.map(f => (
          <button key={f.value} className={filter === f.value ? 'active' : ''} onClick={() => handleFilterChange(f.value)}>{f.label}</button>
        ))}
      </div>
      <div className="projects__cards">
        {visibleProjects.map((proj, idx) => (
          <div className={`projects__card ${proj.color}`} key={idx}>
            <div className="projects__card-title-row projects__card-title-left">
              <div className="card-icon-circle" style={{ background: proj.iconColor }}>
                <img src={projectIcon} alt="Project" />
              </div>
              <h3>{proj.title}</h3>
            </div>
            <p>{proj.desc}</p>
            <div className="projects__tech">
              {proj.tech.map(t => (
                <span key={t} className="tech-tag">
                  {techIcons[t] || techIcons[t.charAt(0).toUpperCase() + t.slice(1)] || <SiJavascript style={{ color: '#F7DF1E' }} />}
                  <span className="tech-name">{t}</span>
                </span>
              ))}
            </div>
            <div className="projects__links">
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub />
              </a>
              <button
                type="button"
                className="demo-btn"
                onClick={() => openModal(proj)}
              >
                Sample
              </button>
            </div>
          </div>
        ))}
      </div>
      {filtered.length > 3 && !showAll && (
        <div className="projects__show-more">
          <button type="button" className="demo-btn-project" onClick={() => setShowAll(true)}>
            More projects
          </button>
        </div>
      )}

      {/* Modal */}
      {modalOpen && modalProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-title">{modalProject.title}</div>
            <div className="modal-screenshot-container">
              <button className="modal-nav-left" onClick={prevScreenshot}>&lt;</button>
              <img
                src={modalProject.screenshots[modalIndex]}
                alt={`Screenshot ${modalIndex + 1}`}
                className="modal-screenshot"
              />
              <button className="modal-nav-right" onClick={nextScreenshot}>&gt;</button>
            <div className="modal-cta-overlay">
              {/* <div className="modal-cta-card">
                <div className="modal-cta-title">If you need source code or want to work together</div>
                <button type="button" className="demo-btn-contact-me" onClick={goToContact}>Contact Me</button>
              </div> */}
            </div>
            </div>
            <div className="modal-counter">
              {modalIndex + 1} / {modalProject.screenshots.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects; 