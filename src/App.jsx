import "./App.css";
import { useState } from "react";
import { SiJest } from "react-icons/si";
import { FaReact, FaAngular, FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
const App = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("dusan.ilic1999@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="app">
      {copied && <div className="copied-notification">✓ Copied!</div>}
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">Dusan Ilic</div>
          <nav className="nav">
            <a href="#owiran">Profile</a>
            <a href="#ropilei">Projects</a>
            <a href="#homaik">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Hi, I am Dušan
            <br />
            Junior Frontend <br /> Developer
          </h1>
          <p className="hero-description">
            Graduated Informatics student with one and a half years of
            professional experience in frontend development.
            <br /> Passionate about creating user-friendly web applications and
            continuously learning new technologies.
          </p>
          <button className="btn btn-primary">About me</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">About me</h2>
          <p className="about-description">
            I have achieved significant success across a wide spectrum of modern
            technologies, mastering programming languages such as JavaScript,
            TypeScript, Java, Python, PHP, and SQL. My expertise extends to
            frameworks and tools including React, Angular, Node.js, Spring Boot,
            Flask, and Laravel, as well as cloud computing with Azure and server
            configuration with nginx. I have also developed skills in software
            testing using Jest, Cypress, and React Testing Library, ensuring
            high-quality, production-ready applications.
          </p>
          <div className="tech-icons">
            <div className="icon">
              <FaReact />
            </div>
            <div className="icon">
              <FaAngular />
            </div>
            <div className="icon">
              <FaPython />
            </div>
            <div className="icon">
              <GrMysql />
            </div>
            <div className="icon">
              <SiJest />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-image">
                <img
                  src="/images/press-office-main.png"
                  alt="Press Office 2026"
                />
              </div>
              <h3 className="project-title">Press Office 2026</h3>
              <ul className="project-description">
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>React Router</li>
                <li>30+ static responsive web pages</li>
              </ul>
              <div className="project-buttons">
                <button className="btn btn-primary" style={{widh:"100%"}}>Visit</button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/placeholder2.png" alt="P-Commenco Profotice" />
              </div>
              <h3 className="project-title">P-Commenco Profotice</h3>
              <p className="project-description">
                ◊Öpnnci apaicimı -<br />
                iëlfëūnüü Nö-ümöndüū ës
                <br />
                šītzmpö xi
              </p>
              <div className="project-buttons">
                <button className="btn btn-primary">Galoet</button>
                <button className="btn btn-secondary">Ouce</button>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/placeholder3.png" alt="Fesce Traxlder" />
              </div>
              <h3 className="project-title">Fesce Traxlder</h3>
              <p className="project-description">
                Pödecibiùe öpsoütöeβe
                <br />
                ndëi oùk ïaüšoïi ëxa
                <br />
                iödüša ä Tempo
                <br />
                Lolaesp
              </p>
              <div className="project-buttons">
                <button className="btn btn-primary">Caploet</button>
                <button className="btn btn-secondary">Dolce</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <p className="contact-description">Glad to connect with you!</p>
          <div className="contact-info">
            <div className="email-link" onClick={copyToClipboard}>
              dusan.ilic1999@gmail.com
            </div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
