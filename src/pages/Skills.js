import React, { useState } from 'react';
import '../css/Skills.css';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiPython,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
  SiGithub,
  SiSupabase,
  // SiFigma,
  // SiJest,
} from "react-icons/si";

const techIcons = {
  'React.js': <SiReact style={{ color: '#61DAFB' }} />,
  'JavaScript': <SiJavascript style={{ color: '#F7DF1E' }} />,
  'TypeScript': <SiTypescript style={{ color: '#3178C6' }} />,
  'HTML5': <SiHtml5 style={{ color: '#E34F26' }} />,
  'CSS3': <SiCss3 style={{ color: '#1572B6' }} />,
  'Tailwind': <SiTailwindcss style={{ color: '#38BDF8' }} />,
  'Node.js': <SiNodedotjs style={{ color: '#339933' }} />,
  'Express.js': <SiExpress style={{ color: '#000000' }} />,
  'PHP': <SiPhp style={{ color: '#777BB4' }} />,
  'Python': <SiPython style={{ color: '#3776AB' }} />,
  'MongoDB': <SiMongodb style={{ color: '#47A248' }} />,
  'MySQL': <SiMysql style={{ color: '#4479A1' }} />,
  'Firebase': <SiFirebase style={{ color: '#FFCA28' }} />,
  'Supabase': <SiSupabase style={{ color: '#FFCA28' }} />,
};

// Icons shown before each category title
const categoryIcons = {
  'Frontend Development': <SiReact className="category-icon" style={{ color: '#61DAFB' }} />,
  'Backend Development': <SiNodedotjs className="category-icon" style={{ color: '#339933' }} />,
  'Database & Cloud': <SiSupabase className="category-icon" style={{ color: '#3ECF8E' }} />,
};

const technical = [
  { category: 'Frontend Development', skills: [
    { name: 'React.js', level: 80 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 90 },
    { name: 'Tailwind', level: 75 },
  ]},
  { category: 'Backend Development', skills: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 85 },
    { name: 'PHP', level: 85 },
    //{ name: 'Python', level: 65 },
   
  ]},
  { category: 'Database & Cloud', skills: [
    //{ name: 'MongoDB', level: 80 },
    { name: 'MySQL', level: 85 },
    { name: 'Firebase', level: 75 },
    { name: 'Supabase', level: 80 },
   
  ]},
];

const softSkills = [
  { name: 'Problem Solving', level: 95, icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/journal-code.svg', color: '#1976d2' },
  { name: 'Team Collaboration', level: 100, icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/people.svg', color: '#2ecc40' },
  { name: 'Adaptability', level: 95, icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/arrow-repeat.svg', color: '#a259fa' },
  { name: 'Communication', level: 90, icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/chat-dots.svg', color: '#ff4c60' },
  { name: 'Time Management', level: 100, icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/alarm.svg', color: '#20c997' },
];

  const tools = [
    {
      category: 'Development Tools',
      // { category: 'Design Tools', items: ['Figma', 'Adobe XD', 'Canva', 'Photoshop'] },
  // { category: 'Testing & Deployment', items: ['Jest', 'Cypress', 'Netlify', 'Vercel', 'Heroku'] },
      items: [
        { 
          name: 'VS Code', 
          icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/code-slash.svg', 
          color: '#007ACC' // VS Code blue
        },
        { 
          name: 'Git', 
          icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/git.svg', 
          color: '#F05032' // Git orange
        },
        { 
          name: 'GitHub', 
          icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/github.svg', 
          color: '#181717' // GitHub black
        }


      ]
    }
  ];
  


const toolIcons = {
  'Development Tools': <SiGithub style={{ color: '#007ACC' }} />,
  // 'Design Tools': <SiFigma style={{ color: '#A259FF' }} />,
  // 'Testing & Deployment': <SiJest style={{ color: '#C63D14' }} />,
};

const Skills = () => {
  const [tab, setTab] = useState('technical');
  return (
    <section className="skills" id="skills">
      <h2>Skills </h2>
      <p>Technical competences and professional skills I've developed through experience and continuous learning</p>
      <div className="skills__tabs">
        <button className={tab === 'technical' ? 'active' : ''} onClick={() => setTab('technical')}>Technical</button>
        <button className={tab === 'soft' ? 'active' : ''} onClick={() => setTab('soft')}>Soft Skills</button>
        {/* <button className={tab === 'tools' ? 'active' : ''} onClick={() => setTab('tools')}>Tools</button> */}
      </div>
      {tab === 'technical' && (
        <div className="skills__categories">
          {technical.map((cat) => (
            <div className="skills__category" key={cat.category}>
              <h3 className="skills__category-title">
                {categoryIcons[cat.category]}
                <span>{cat.category}</span>
              </h3>
              {/* {cat.skills.map((skill) => (
                <div className="skills__bar" key={skill.name}>
                  <div className="skill-name-with-icon">
                    {techIcons[skill.name]}
                    <span>{skill.name}</span>
                  </div>
                  { <div className="bar">
                    <div className="bar__fill" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <span className="level">
                    {skill.level}%
                  </span> 
                </div>
              ))}  */}
              {/* Horizontal marquee loop for this category */}
              <div className="skills__marquee">
                <div className="skills__marquee-content">
                  {[...cat.skills, ...cat.skills].map((skill, idx) => (
                    <span className="skills__marquee-item" key={`${skill.name}-${idx}`}>
                      {techIcons[skill.name]}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {tab === 'soft' && (
        <div className="skills__soft">
          {softSkills.map((skill) => (
            <div className="skills__soft-card" key={skill.name}>
              <div className="soft-header">
                <div className="skill-icon-circle" style={{ background: skill.color }}>
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <h4>{skill.name}</h4>
              </div>
              {/* <div className="bar">
                <div className="bar__fill" style={{ width: `${skill.level}%` }}></div>
              </div>
              <span className="level">
                {skill.level}%
              </span> */}
            </div>
          ))}
        </div>
      )}
      {tab === 'tools' && (
        <div className="skills__tools">
          {tools.map((tool) => (
            <div className="skills__tool-card" key={tool.category}>
              <h4>{toolIcons[tool.category]} {tool.category}</h4>
              <ul>
                {tool.items.map((item) => (
                  <li key={item.name} className="tool-item">
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="tool-icon"
                        style={{ width: 18, height: 18, marginRight: 8, verticalAlign: 'middle' }}
                      />
                    )}
                    <span style={{ color: item.color || 'inherit' }}>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Skills; 