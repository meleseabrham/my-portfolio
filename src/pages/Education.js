import React, { useState } from "react";
import "../css/Education.css";

// Import certificate images
// import degreeCertificate from '../assets/certificates/degree-certificate.jpg';
import deansListCertificate from "../assets/certificates/deans-list.jpg";
// Import Udacity certificates
import androidFundamentalsCertificate from "../assets/certificates/android-fundamentals.jpg";
import programmingFundamentalsCertificate from "../assets/certificates/programming-fundamentals.jpg";

const formalEducation = [
  {
    title: "Bachelor of Computer Science",
    subtitle: "Assoa University",
    year: "2021-2024",
    desc: "",
    keyCourses: [
      "Data Structures",
      "Algorithms",
      "Web Development",
      "Database Management",
      "Software Engineering",
    ],
    certificates: [
      {
        name: "Bachelor Degree Certificate",
        image: null,
        description: "Bachelor of Computer Science from Assoa University",
        contactRequired: true,
      },
      {
        name: "Dean's Recommendation Letter",
        image: deansListCertificate,
        description: "Recommendation Letter",
      },
    ],
    color: "#1976d2",
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/mortarboard.svg",
    className: "blue",
  },
  // {
  //   title: 'Software Development',
  //   subtitle: 'Information Network Security Agency (INSA)',
  //   desc: 'Web and Android Development',
  //   year: 'Mar 30, 2025-Current',
  //   keyCourses: [
  //     'React',
  //     'Node.js',
  //     'MySQL',
  //     'Flutter',
  //     'Express',
  //     'Android Development'
  //   ],
  //   certificates: [
  //     {
  //       name: 'INSA Training Certificate',
  //       image: null, // Will show placeholder
  //       description: 'Software Development Training Completion'
  //     },
  //     {
  //       name: 'React Certification',
  //       image: null, // Will show placeholder
  //       description: 'Advanced React Development Skills'
  //     }
  //   ],
  //   color: '#2ecc40',
  //   icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/laptop.svg',
  //   className: 'green',
  // },
];

const certifications = [
  {
    title: "Android Developer Fundamentals",
    subtitle: "Udacity",
    year: "2024",
    certificateImage: androidFundamentalsCertificate,
    color: "#20c997",
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/phone.svg",
    className: "teal",
  },
  {
    title: "Programming Fundamentals",
    subtitle: "Udacity",
    year: "2024",
    certificateImage: programmingFundamentalsCertificate,
    color: "#1976d2",
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/code-slash.svg",
    className: "blue",
  },
  // {
  //   title: 'React Certification',
  //   subtitle: 'Meta',
  //   year: '2022',
  //   certificateImage: null, // Will show placeholder
  //   color: '#1976d2',
  //   icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/react.svg',
  //   className: 'blue',
  // },
  // {
  //   title: 'Node.js Certified Developer',
  //   subtitle: 'OpenJS Foundation',
  //   year: 'Currently Learning',
  //   certificateImage: null, // Will show placeholder
  //   color: '#2ecc40',
  //   icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/node-plus.svg',
  //   className: 'green',
  // },
  // {
  //   title: 'JavaScript Algorithms',
  //   subtitle: 'freeCodeCamp',
  //   year: '2020',
  //   certificateImage: null, // Will show placeholder
  //   color: '#fd7e14',
  //   icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/file-earmark-code.svg',
  //   className: 'orange',
  // },
];

const experience = [
  {
    title: "Software Developer",
    company: "Information Network Security Agency (INSA)",
    period: "Feb 2025 - Present",
    summary:
      "Working on secure web and mobile application development and digital forensics investigation.",
    responsibilities: [
      
     
      "Develop high-performance, responsive web applications using React.js, JavaScript, TypeScript, HTML5, CSS3, and Tailwind CSS.",
      "Build and maintain scalable backend systems using Node.js, Express.js, and PHP, ensuring clean architecture and secure APIs.",
      "Integrate and manage MySQL, Firebase, and Supabase databases for reliable data storage and real-time synchronization.",
      "Develop Android apps using Flutter with clean architecture",
      "Collaborate with users and stakeholders to gather requirements, provide technical support, and ensure the product meets user needs.",
      "Debug, optimize, and improve mobile and web performance",
      
    ],
    color: "#2ecc40",
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/laptop.svg",
    className: "green",
  },
  {
    title: "Data Encoder and Data Analyst",
    company:
      "Private Organization Employee Social Security Administration (POESSA)",
    period: "Oct 2024 - Feb 2025",
    summary: "Managed and processed data with high accuracy.",
    responsibilities: [
      "Input large data volumes with accuracy and consistency",
      "Organize and maintain physical and digital documents effectively",
      "Coordinate with teams to verify and correct data",
      "Prepare reports by compiling and formatting key entries",
      "Analyze data to provide insights and recommendations",
    ],
    color: "#1976d2",
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/database.svg",
    className: "blue",
  },
];

const Education = () => {
  const [tab, setTab] = useState("formal");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCertificates, setModalCertificates] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [singleCertificateModal, setSingleCertificateModal] = useState(null);

  // Helper: parse a period string like "feb 2025 - Present" or "Oct 2024 - feb 2025"
  const getDurationText = (period) => {
    if (!period || typeof period !== "string") return "";
    try {
      const [startStrRaw, endStrRaw] = period.split("-");
      if (!startStrRaw || !endStrRaw) return "";
      const startStr = startStrRaw.trim();
      const endStr = endStrRaw.trim();

      const parseMonthYear = (s) => {
        const months = [
          "jan",
          "feb",
          "mar",
          "apr",
          "may",
          "jun",
          "jul",
          "aug",
          "sep",
          "oct",
          "nov",
          "dec",
        ];
        const parts = s.split(/\s+/).filter(Boolean);
        if (parts.length === 1) {
          const year = parseInt(parts[0], 10);
          if (!isNaN(year)) return new Date(year, 0, 1);
          return null;
        }
        const monToken = parts[0].slice(0, 3).toLowerCase();
        const year = parseInt(parts[1], 10);
        const monthIdx = months.indexOf(monToken);
        if (monthIdx === -1 || isNaN(year)) return null;
        return new Date(year, monthIdx, 1);
      };

      const start = parseMonthYear(startStr);
      const end = /present/i.test(endStr) ? new Date() : parseMonthYear(endStr);
      if (!start || !end) return "";

      // Inclusive calculation (+1 to count both start and end months)
      let totalMonths =
        (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth()) +
        1;
      if (totalMonths < 0) totalMonths = 0;

      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;

      if (years > 0 && months > 0) {
        return `${years} ${years === 1 ? "year" : "years"} ${months} ${
          months === 1 ? "month" : "months"
        }`;
      }
      if (years > 0) {
        return `${years} ${years === 1 ? "year" : "years"}`;
      }
      return `${months} ${months === 1 ? "month" : "months"}`;
    } catch (e) {
      return "";
    }
  };

  const openCertificateModal = (certificates, title) => {
    setModalCertificates(certificates);
    setModalTitle(title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalCertificates([]);
    setModalTitle("");
  };

  const openSingleCertificateModal = (certificate) => {
    setSingleCertificateModal(certificate);
  };

  const closeSingleCertificateModal = () => {
    setSingleCertificateModal(null);
  };

  const openFullScreenImage = (imageSrc, imageAlt) => {
    setFullScreenImage({ src: imageSrc, alt: imageAlt });
  };

  const closeFullScreenImage = () => {
    setFullScreenImage(null);
  };

  const navigateToContact = () => {
    // Close the modal first
    closeSingleCertificateModal();
    // Navigate to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="education" id="education">
      <h2>
        Educational Background and{" "}
        <span>Work Experience With Certifications</span>
      </h2>
      <p>
        My academic journey and continuous learning path in computer science and
        web development
      </p>

      <div className="education__tabs">
        <button
          className={tab === "formal" ? "active" : ""}
          onClick={() => setTab("formal")}
        >
          {" "}
          Education
        </button>
        <button
          className={tab === "expert" ? "active" : ""}
          onClick={() => setTab("expert")}
        >
          {" "}
          Experience
        </button>
        <button
          className={tab === "cert" ? "active" : ""}
          onClick={() => setTab("cert")}
        >
          Certifications
        </button>
      </div>

      {tab === "formal" ? (
        <div className="education__cards">
          {formalEducation.map((card) => (
            <div
              className={`education__card ${card.className}`}
              key={card.title}
            >
              <div className="education__card-title-row education__card-title-left">
                <div
                  className="card-icon-circle"
                  style={{ background: card.color }}
                >
                  <img src={card.icon} alt={card.title} />
                </div>
                <h3>{card.title}</h3>
              </div>
              <p>
                <strong>Institution:</strong> {card.subtitle}
              </p>
              <p>
                <strong>Date:</strong> {card.year}
              </p>
              {card.desc && (
                <p>
                  <strong>Description:</strong> {card.desc}
                </p>
              )}

              <div className="education__section">
                <h4 className="education__section-title">Key Courses:</h4>
                <ul className="education__courses-list">
                  {card.keyCourses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>

              {card.certificates &&
                card.certificates.length > 0 &&
                card.title !== "Software Development" && (
                  <div className="education__section">
                    <div className="education__achievements-header">
                      {/* <button
                        className="certificate-btn"
                        onClick={() =>
                          openCertificateModal(card.certificates, card.title)
                        }
                      >
                        View Certificates
                      </button> */}
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>
      ) : (
        <div className="education__cards">
          {tab === "expert" ? (
            <div className="education__cards">
              {experience.map((exp) => (
                <div
                  className={`education__card ${exp.className}`}
                  key={exp.title}
                  style={{ borderLeft: `4px solid ${exp.color}` }}
                >
                  <div className="education__card-title-row education__card-title-left">
                    <div
                      className="card-icon-circle"
                      style={{ background: exp.color }}
                    >
                      <img src={exp.icon} alt={exp.title} />
                    </div>
                    <h3 style={{ color: exp.color }}>{exp.title}</h3>
                  </div>
                  <p>
                    <strong style={{ color: exp.color }}>Company:</strong>{" "}
                    {exp.company}
                  </p>
                  <p
                    style={{
                      backgroundColor: "rgba(168, 185, 180, 0.34)",
                      padding: "6px",
                      borderRadius: "4px",
                    }}
                  >
                    <strong>Period:</strong>{" "}
                    <span style={{ color: "blue" }}>{exp.period}</span>
                    <br />
                    <span style={{ fontSize: "0.9em" }}>
                      <strong>Experience:</strong>{" "}
                      <span style={{ color: "blue",fontWeight: "bold" }}>
                        {getDurationText(exp.period)}
                      </span>
                    </span>
                  </p>
                  <p>
                    <strong>Summary:</strong> {exp.summary}
                  </p>
                  <div className="education__section">
                    <h4 className="education__section-title">
                      Responsibilities:
                    </h4>
                    <ul className="education__courses-list">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="education__cards">
              {certifications.map((card) => (
                <div
                  className={`education__card ${card.className}`}
                  key={card.title}
                >
                  <div className="education__card-title-row education__card-title-left">
                    <div
                      className="card-icon-circle"
                      style={{ background: card.color }}
                    >
                      <img src={card.icon} alt={card.title} />
                    </div>
                    <h3>{card.title}</h3>
                  </div>
                  <p>
                    <strong>Issuer:</strong> {card.subtitle}
                  </p>
                  <p>
                    <strong>Year:</strong> {card.year}
                  </p>
                  <button
                    className="certificate-btn"
                    onClick={() =>
                      openSingleCertificateModal({
                        name: card.title,
                        image: card.certificateImage,
                        description: `${card.title} from ${card.subtitle}`,
                        issuer: card.subtitle,
                        year: card.year,
                      })
                    }
                  >
                    View Certificate
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Single Certificate Modal */}
      {singleCertificateModal && (
        <div
          className="certificate-modal-overlay"
          onClick={closeSingleCertificateModal}
        >
          <div
            className="single-certificate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="certificate-modal-close"
              onClick={closeSingleCertificateModal}
            >
              ×
            </button>
            <h3 className="single-certificate-title">
              {singleCertificateModal.name}
            </h3>
            <p className="single-certificate-subtitle">
              {singleCertificateModal.description}
            </p>

            <div className="single-certificate-container">
              {singleCertificateModal.image ? (
                <img
                  src={singleCertificateModal.image}
                  alt={singleCertificateModal.name}
                  className="single-certificate-image"
                  onClick={() =>
                    openFullScreenImage(
                      singleCertificateModal.image,
                      singleCertificateModal.name
                    )
                  }
                />
              ) : singleCertificateModal.contactRequired ? (
                <div className="certificate-contact-placeholder">
                  <div className="contact-icon">📧</div>
                  <h4>Contact Required</h4>
                  <p>To view this certificate, please contact me directly.</p>
                  <button className="contact-btn" onClick={navigateToContact}>
                    Contact Me
                  </button>
                </div>
              ) : (
                <div className="certificate-placeholder show">
                  <span className="coming-soon-text">Coming Soon</span>
                  <small className="learning-text">Currently Learning</small>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {modalOpen && (
        <div className="certificate-modal-overlay" onClick={closeModal}>
          <div
            className="certificate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="certificate-modal-close" onClick={closeModal}>
              ×
            </button>
            <h3 className="certificate-modal-title">
              {modalTitle} - Certificates
            </h3>
            <div className="certificate-modal-grid">
              {modalCertificates.map((cert, index) => (
                <div key={index} className="certificate-item">
                  <h4 className="certificate-item-title">{cert.name}</h4>
                  <p className="certificate-item-subtitle">
                    {cert.description}
                  </p>
                  <div className="certificate-image-placeholder">
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="certificate-image"
                        onClick={() =>
                          openFullScreenImage(cert.image, cert.name)
                        }
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                    ) : cert.contactRequired ? (
                      <div className="certificate-contact-placeholder">
                        <div className="contact-icon">📧</div>
                        <h4>Contact Required</h4>
                        <p>
                          To view this certificate, please contact me directly.
                        </p>
                        <button
                          className="contact-btn"
                          onClick={navigateToContact}
                        >
                          Contact Me
                        </button>
                      </div>
                    ) : null}
                    <div
                      className={`certificate-placeholder ${
                        !cert.image && !cert.contactRequired ? "show" : ""
                      }`}
                    >
                      <span className="coming-soon-text">Coming Soon</span>
                      <small className="learning-text">
                        Currently Learning
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Image Viewer */}
      {fullScreenImage && (
        <div className="fullscreen-overlay" onClick={closeFullScreenImage}>
          <div
            className="fullscreen-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="fullscreen-close" onClick={closeFullScreenImage}>
              ×
            </button>
            <img
              src={fullScreenImage.src}
              alt={fullScreenImage.alt}
              className="fullscreen-image"
            />
            <div className="fullscreen-caption">{fullScreenImage.alt}</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
