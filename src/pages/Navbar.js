import React, { useEffect, useRef, useState } from 'react';
import { FiHome, FiUser, FiFileText, FiCode, FiFolder, FiMail } from 'react-icons/fi';
import '../css/Navbar.css';

const Navbar = ({ onToggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const ratiosRef = useRef({});

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = (e, targetId) => {
    if (e) e.preventDefault();
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el && el.scrollIntoView) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Update hash without jumping
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', `#${targetId}`);
      } else {
        window.location.hash = `#${targetId}`;
      }
      setActive(targetId);
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const sectionIds = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const setActiveSafe = (id) => setActive((prev) => (prev !== id ? id : prev));
    // Initialize tracked ratios for all observed sections
    sectionIds.forEach((id) => {
      if (ratiosRef.current[id] === undefined) ratiosRef.current[id] = 0;
    });

    // Use IntersectionObserver as a lightweight trigger; compute active using rects near a target line
    const observer = new IntersectionObserver(
      (entries) => {
        // Update recent intersecting state (not strictly necessary now)
        entries.forEach((entry) => {
          ratiosRef.current[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
        });

        const NAV_OFFSET = 70; // approx navbar height
        const targetLine = Math.max(NAV_OFFSET + 10, Math.floor(window.innerHeight * 0.25));

        // Try to pick the section whose top is just above targetLine
        let candidate = null;
        let candidateTop = -Infinity;
        sectionIds.forEach((id) => {
          const el = document.getElementById(id);
          if (!el) return;
          const top = el.getBoundingClientRect().top;
          if (top <= targetLine && top > candidateTop) {
            candidateTop = top;
            candidate = id;
          }
        });

        // If none above targetLine, pick the closest below it
        if (!candidate) {
          let closestId = sectionIds[0];
          let bestDist = Number.POSITIVE_INFINITY;
          sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const top = el.getBoundingClientRect().top;
            const dist = Math.abs(top - targetLine);
            if (dist < bestDist) {
              bestDist = dist;
              closestId = id;
            }
          });
          candidate = closestId;
        }

        if (candidate) setActiveSafe(candidate);
      },
      {
        root: null,
        // Keep minimal margins; we're computing with rects ourselves
        rootMargin: '0px',
        threshold: [0, 0.01],
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Sync with hash on load and when it changes
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      if (sectionIds.includes(id)) setActive(id);
    }
    const onHashChange = () => {
      const id = window.location.hash.replace('#', '');
      if (sectionIds.includes(id)) setActive(id);
    };
    window.addEventListener('hashchange', onHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <button
          className={`navbar__menu-icon${menuOpen ? ' open' : ''}`}
          onClick={handleMenuToggle}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className="menu-icon-bar"></span>
          <span className="menu-icon-bar"></span>
          <span className="menu-icon-bar"></span>
        </button>
        <div className="navbar__logo" onClick={() => window.location.reload()} style={{ cursor: 'pointer' }}>
          <span className="logo-initials" aria-hidden="true">MA</span>
          <img src="/assets/img/logo.png" alt="Portfolio Logo" className="logo-img" /><span className="logo-text"><u>MA</u></span>
        </div>
      </div>
      <ul className={`navbar__links${menuOpen ? ' active' : ''}`}>
        {[
          { id: 'home', label: 'Home', Icon: FiHome },
          { id: 'about', label: 'About', Icon: FiUser },
          { id: 'education', label: 'Resume', Icon: FiFileText },
          { id: 'skills', label: 'Skills', Icon: FiCode },
          { id: 'projects', label: 'Projects', Icon: FiFolder },
          // { id: 'contact', label: 'Contact', Icon: FiMail },
        ].map(({ id, label, Icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, id)}
            >
              <Icon className="nav-icon" aria-hidden="true" focusable="false" />
              <span className="nav-label">{label}</span>
            </a>
          </li>
        ))}
        <li className="desktop-toggle">
          <button className="navbar__toggle" onClick={onToggleDarkMode} aria-label="Toggle dark mode">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>
      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />}
      <div className="navbar__right">
        <button className="navbar__toggle mobile-toggle" onClick={onToggleDarkMode} aria-label="Toggle dark mode">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 