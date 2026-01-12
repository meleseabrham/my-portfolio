import React from 'react';
import '../css/Footer.css';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/melese-abrham',
      label: 'LinkedIn'
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/meleseabrham',
      label: 'GitHub'
    },
    {
      icon: <FaTwitter />,
      url: 'https://x.com/meleseabrham17',
      label: 'Twitter'
    },
    {
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/melesse_ab/',
      label: 'Instagram'
    },
   {
    icon: <FaTelegramPlane />,
    url: 'https://t.me/melese_ab',
    label: 'Telegram'
  }

  ];

  return (
    <footer className="footer">
      <div className="footer__content">
        {/* <div className="footer__social">
          <span className="footer__social-text">Follow me on</span>
          <div className="footer__social-icons">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div> */}
        <p className="footer__copyright">© 2025 Melese Abrham.</p>
      </div>
    </footer>
  );
};

export default Footer; 