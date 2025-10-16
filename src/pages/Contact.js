import React, { useState, useRef } from "react";
import "../css/Contact.css";
import emailjs from "@emailjs/browser";

const contactCards = [
  {
    title: "Email",
    lines: [
      {
        email: "meleseabrham17@gmail.com",
        url: "mailto:meleseabrham17@gmail.com",
      },
    ],
    color: "#1976d2",
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/envelope.svg",
    className: "blue",
    isEmail: true,
  },
  {
    title: "Social Media",
    lines: [
      {
        icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/linkedin.svg",
        url: "https://www.linkedin.com/in/melese-abrham",
        label: "LinkedIn",
      },
      {
        icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/twitter.svg",
        url: "https://x.com/meleseabrham17",
        label: "Twitter",
      },
      {
        icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/github.svg",
        url: "https://github.com/meleseabrham",
        label: "GitHub",
      },
      {
        icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/instagram.svg",
        url: "https://www.instagram.com/melesse_ab/",
        label: "Instagram",
      },

      {
        icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/telegram.svg",
        url: "https://t.me/melese_ab",
        label: "Telegram",
        color: "#0088CC",
      },
    ],
    color: "#fd7e14",
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/share.svg",
    className: "orange",
    isSocial: true,
  },
  {
    title: "Phone",
    lines: [" +2519 295 27564", " +2519 519 39566"],
    color: "#6f42c1",
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/telephone.svg",
    className: "purple",
  },
];

const Contact = () => {
  const [tab, setTab] = useState("form");
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await emailjs.sendForm(
        "service_bilgaz9",
        "template_gu209eo",
        formRef.current,
        "qJsQL4Gv8FlYr1DTg"
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>
        Get in <span>Touch</span>
      </h2>
      <p>Reach out to collaborate, discuss opportunities, or just say hello!</p>
      <div className="contact__tabs">
        <button
          className={tab === "form" ? "active" : ""}
          onClick={() => setTab("form")}
        >
          Contact Form
        </button>
        <button
          className={tab === "methods" ? "active" : ""}
          onClick={() => setTab("methods")}
        >
          Contact Methods
        </button>
      </div>
      {tab === "form" ? (
        <form
          className="contact__form"
          ref={formRef}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-label="Name"
          />
          {errors.name && <div className="error">{errors.name}</div>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Email"
          />
          {errors.email && <div className="error">{errors.email}</div>}
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            aria-label="Message"
            rows={5}
          />
          {errors.message && <div className="error">{errors.message}</div>}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn btn-primary w-full flex items-center justify-center gap-2 ${
              isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ display: "inline-block", verticalAlign: "middle" }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span style={{ marginLeft: 8 }}>Sending...</span>
              </>
            ) : (
              "Send Message"
            )}
          </button>
          {submitStatus === "success" && (
            <div className="success">
              Message sent successfully! I will get back to you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="error">
              Failed to send message. Please try again later.
            </div>
          )}
        </form>
      ) : (
        <div className="contact__methods">
          {contactCards.map((card) => (
            <div className={`contact__card ${card.className}`} key={card.title}>
              <div className="contact__card-title-row contact__card-title-left">
                <div
                  className="card-icon-circle"
                  style={{ background: card.color }}
                >
                  <img src={card.icon} alt={card.title} />
                </div>
                <h3>{card.title}</h3>
              </div>
              {card.isSocial ? (
                <div className="contact__social-icons">
                  {card.lines.map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__social-link"
                      title={social.label}
                    >
                      <img
                        src={social.icon}
                        alt={social.label}
                        className={`contact-social-img contact-social-img-${social.label.toLowerCase()}`}
                        style={{ width: 28, height: 28 }}
                      />
                    </a>
                  ))}
                </div>
              ) : card.isEmail ? (
                card.lines.map((line, i) => (
                  <a
                    key={i}
                    href={line.url}
                    className="contact__email-link"
                    style={{ color: "#1976d2", textDecoration: "underline" }}
                  >
                    {line.email}
                  </a>
                ))
              ) : (
                card.lines.map((line, i) => <p key={i}>{line}</p>)
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Contact;
