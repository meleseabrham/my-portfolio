// src/components/HiddenResume.jsx
import React from "react";
import "../resume.css";
import profileImg from '../assets/profile.png';

const HiddenResume = ({ profileImage }) => {
  return (
    <div id="resume" className="resume-container">
      <div className="resume-content">
        <h1 className="resume-header">MELESE ABRHAM JENBERU</h1>

        <div className="resume-two-column">
          {/* Left Column */}
          <div className="resume-left-column">
            <div className="profile-image">
              <img src={profileImage || profileImg} alt="Melese Abrham" />
            </div>

            <div className="resume-section">
              <h2 className="resume-section-title">PERSONAL DETAIL</h2>
              <ul className="resume-list">
                <li className="resume-list-item">
                  <strong>Sex:</strong> Male
                </li>
                <li className="resume-list-item">
                  <strong>Birth Date:</strong> August 01, 2000
                </li>
                <li className="resume-list-item">
                  <strong>Health Status:</strong> Normal
                </li>
                <li className="resume-list-item">
                  <strong>Nationality:</strong> Ethiopian
                </li>
                <li className="resume-list-item">
                  <strong>Current Resident:</strong> A.A
                </li>
              </ul>
            </div>

            <div className="resume-section">
              <h2 className="resume-section-title">CONTACT</h2>
              <ul className="resume-list">
                <li className="resume-list-item">+25192 952 7564</li>
                <li className="resume-list-item">+25195 193 9566</li>
                <li className="resume-list-item">
                  <a
                    href="mailto:Meleseabrham17@gmail.com"
                    className="resume-link"
                  >
                    meleseabrham17@gmail.com
                  </a>
                </li>

              </ul>
            </div>

            <div className="resume-section">
              <h2 className="resume-section-title">PORTFOLIO</h2>
              <ul className="resume-list">

                <li className="resume-list-item">
                  <a
                    href="https://melese.vercel.app"
                    className="resume-link"
                  >
                    https://melese.vercel.app
                  </a>
                </li>
              </ul>
            </div>

            <div className="resume-section">
              <h2 className="resume-section-title">HOBBIES</h2>
              <ul className="resume-bullet-list">
                <li className="resume-bullet-item">Writing code (coding)</li>
                <li className="resume-bullet-item">
                  Viewing satisfied customer through my skill
                </li>
                <li className="resume-bullet-item">Reading books</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="resume-right-column">
            <div className="resume-section">
              <h2 className="resume-section-title">Education</h2>
              <ul className="resume-list">
                <li className="resume-list-item">
                  <strong>Field Of Study:</strong> B.Sc. Degree in Computer Science
                </li>
                <li className="resume-list-item">
                  <strong>Institution:</strong> Assosa University
                </li>
                <li className="resume-list-item">
                  <strong>Date:</strong> May 25, 2020 – Jun 01, 2024
                </li>
                <li className="resume-list-item">
                  <strong>CGPA:</strong> 3.79
                </li>
                <li className="resume-list-item">
                  <strong>Exit Exam:</strong> 77%
                </li>
                <li className="resume-list-item">
                  <strong>Graduation Year:</strong> Jun 01, 2024
                </li>
              </ul>
            </div>

            <div className="resume-section">
              <h2 className="resume-section-title">Work Experience</h2>
              <div className="resume-section">
                <h3 className="skills-title">Data Encoder</h3>
                <ul className="resume-list">
                  <li className="resume-list-item">
                    <strong>Company:</strong> Private Organization Employee Social Security Administration (POESSA)
                  </li>
                  <li className="resume-list-item">
                    <strong>Date:</strong> Oct 18, 2024 - Mar 30, 2025
                  </li>
                  <li className="resume-list-item">
                    <strong>Responsibility:</strong> Data Encode on the System and Arranging Document
                  </li>
                </ul>
              </div>
              <div className="resume-section">
                <h3 className="skills-title">Software Application Developer</h3>
                <ul className="resume-list">
                  <li className="resume-list-item">
                    <strong>Company:</strong> Information Network Security Agency (INSA)
                  </li>
                  <li className="resume-list-item">
                    <strong>Date:</strong> Mar 30, 2025 - Current
                  </li>
                  <li className="resume-list-item">
                    <strong>Responsibility:</strong> Software Application, Web & Mobile Developer and Digital Forensics Investigator
                  </li>
                </ul>
              </div>
            </div>

            <div className="resume-section">
              <h2 className="resume-section-title">Skills</h2>
              <div className="skills-category">
                <h3 className="skills-title">Personal Skills:</h3>
                <p>
                  Communication, Time Management, Flexibility, Negotiation,
                  Politeness, Team Working and Problem Solving
                </p>
              </div>
              <div className="skills-category">
                <h3 className="skills-title">Technical Skills:</h3>
                <ul className="resume-bullet-list">
                  <li className="resume-bullet-item">
                    Web & Mobile Developer: HTML, CSS, JS, PHP, React, Node.js, Express.js, MySQL, Firebase and Flutter
                  </li>
                  <li className="resume-bullet-item">
                    Software Developer and Digital Forensics Investigator
                  </li>
                  <li className="resume-bullet-item">
                    Database Management: MySQL and Supabase  </li>
                  <li className="resume-bullet-item">
                    Version Control: Git and GitHub
                  </li>
                  <li className="resume-bullet-item">
                    Full Stack Developer                  
                  </li>
                </ul>
              </div>
            </div>

            <div className="resume-section">
              <h2 className="resume-section-title">Reference</h2>
              <p>
                <strong>Mr. Fikadu Eshetu (M.Sc.)</strong> → Department Head of Computer Science
              </p>
              <p>Phone: +251912265469</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenResume;