import React, { useState } from 'react';
import '../css/AboutMe.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
const aboutCards = [
  {
    title: 'About Me',
    text: "I'm Melese Abrham, a Computer Science graduate with strong skills in software development, and full-stack web and mobile technologies.\nCurrently working at Information Network Security Agency (INSA) in software development, I have hands-on experience in building secure in web and mobile development, user-focused applications and website development.",
    color: '#1976d2',
    icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/person-badge.svg',
    className: 'blue',
  },
  // {
  //   title: 'Hobbies',
  //   text: 'Writing code (coding)\nViewing satisfied customer through my skill\nCommunicating with people\nReading books',
  //   color: '#2ecc40',
  //   icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/camera.svg',
  //   className: 'green',
  // },
  // {
  //   title: 'Languages',
  //   text: 'Native in Amharic \n  Fluent in English ',
  //   // Intermediate in Afan Oromo.
  //   color: '#fd7e14',
  //   icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/globe.svg',
  //   className: 'orange',
  // },
  // {
  //   title: 'Contact',
  //   contactInfo: [
  //     {
  //       icon: <FaPhone className="text-2xl" />,
  //       title: 'Phone',
  //       content: '+2519 29 52 75 64',
  //       link: 'tel:+251929527564',
  //     },
  //     {
  //       icon: <FaPhone className="text-2xl" />,
  //       title: 'Phone',
  //       content: '+2519 51 93 95 66',
  //       link: 'tel:+251951939566',
  //     },
  //     {
  //       icon: <FaEnvelope className="text-2xl" />,
  //       title: 'Email',
  //       content: 'meleseabrham17@gmail.com',
  //       link: 'mailto:meleseabrham17@gmail.com',
  //     },
     
  //   ],
  //   color: '#6f42c1',
  //   icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/envelope.svg',
  //   className: 'purple',
  // },
  {
    title: 'Location',
    locationInfo: {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Location',
      content: 'Addis Ababa, Ethiopia',
      link: 'https://maps.google.com/?q=Addis+Ababa,Ethiopia',
    },
    color: '#20c997',
    icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/geo-alt.svg',
    className: 'teal',
  },
  {
    title: 'Education Summary',
    text: 'Field Of Study: B.Sc. Degree in Computer Science\nInstitution: Assosa University\nDate: May 25, 2021 - Jun 01, 2024',
    color: '#ffc107',
    icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/mortarboard.svg',
    className: 'yellow',
  },
];

const socials = [
  { href: 'https://www.linkedin.com/in/melese-abrham', label: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/linkedin.svg', color: '#1976d2' },
  { href: 'https://github.com/meleseabrham', label: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/github.svg', color: '#222' },
  { href: 'https://x.com/meleseabrham17', label: 'Twitter', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/twitter.svg', color: '#1da1f2' },
  { href: 'https://www.instagram.com/melesse_ab/', label: 'Instagram', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/instagram.svg', color: '#e1306c' },
];

const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Get the Bio card
  const bioCard = aboutCards.find(card => card.title === 'About Me');
  
  // Get other cards (excluding Bio)
  const otherCards = aboutCards.filter(card => card.title !== 'About Me');

  return (
    <section className="about" id="about" >
      <h2>About <span>Me</span></h2>
      <p>Explore my path as a developer driven by curiosity, built on code, and shaped by a passion for creating real-world solutions.</p>
      
      {/* Bio Section - Always Visible and Centered */}
      <div className="about__bio-container">
        <div className={`about__card ${bioCard.className}`}>
          <div className="about__card-title-row about__card-title-left">
            <div className="card-icon-circle" style={{ background: bioCard.color, marginLeft:'5px' }}>
              <img src={bioCard.icon} alt={bioCard.title} />
            </div>
            <h3>{bioCard.title}</h3>
          </div>
          <p>{bioCard.text.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</p>
          
          {/* See More Button on Bio Card - Right Side Bottom */}
          <div className="about__see-more-wrapper">
            <button 
              className="about__see-more-btn"
              onClick={toggleShowMore}
              aria-expanded={showMore}
            >
              <span>{showMore ? 'See Less' : 'See More'}</span>
              <div className="about__see-more-icon">
                {showMore ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Collapsible Other Sections - 2 Columns */}
      <div className={`about__other-content ${showMore ? 'about__other-content--visible' : ''}`}>
        <div className="about__other-cards">
          {otherCards.map(card => (
            <div className={`about__card ${card.className}`} key={card.title}>
              <div className="about__card-title-row about__card-title-left">
                <div className="card-icon-circle" style={{ background: card.color, marginLeft:'5px' }}>
                  <img src={card.icon} alt={card.title} />
                </div>
                <h3>{card.title} </h3>
              </div>
              {card.title === 'Hobbies' || card.title === 'Languages' || card.title === 'Education Summary' ? (
                <ul className="about__card-list">
                  {card.text.split('\n').map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : card.title === 'Contact' ? (
                <div className="about__contact-info">
                  {card.contactInfo.map((info, i) => (
                    <a
                      key={i}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about__contact-link"
                    >
                      <div className="about__contact-item">
                        <div className="about__contact-icon">
                          {info.icon}
                        </div>
                        <div className="about__contact-details">
                          <span className="about__contact-title">{info.title}</span>
                          <span className="about__contact-content">{info.content}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              ) : card.title === 'Location' ? (
                <a
                  href={card.locationInfo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__contact-link"
                >
                  <div className="about__contact-item">
                    <div className="about__contact-icon">
                      {card.locationInfo.icon}
                    </div>
                    <div className="about__contact-details">
                      <span className="about__contact-title">{card.locationInfo.title}</span>
                      <span className="about__contact-content">{card.locationInfo.content}</span>
                    </div>
                  </div>
                </a>
              ) : (
                <p>{card.text.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="about__actions">
        <span>Follow me on</span>
        <div className="about__social-icons">
          {socials.map((s) => (
            <a href={s.href} aria-label={s.label} key={s.label} target="_blank" rel="noopener noreferrer">
              <div className="card-icon-circle" style={{ background: s.color }}>
                <img src={s.icon} alt={s.label} />
              </div>
            </a>
          ))}
        </div>
        <DownloadButton />
      </div> */}
    </section>
  );
};

export default AboutMe; 