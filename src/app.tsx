import React, { useState } from "react";
import "./style.css";

const App: React.FC = () => {
  const [language, setLanguage] = useState<"EN" | "FR" | null>(null);

  if (!language) {
    return (
      <div className="lang-selector">
        <div className="initials-3d">BH</div>
        <div className="lang-box">
          <button onClick={() => setLanguage("EN")}>EN</button>
          <button onClick={() => setLanguage("FR")}>FR</button>
        </div>
      </div>
    );
  }

  return (
    <main className="container">
      <header className="site-header">
        <div className="site-title">
          <div className="initials-3d header-initials">BH</div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#projects">
                {language === "EN" ? "Projects" : "Projets"}
              </a>
            </li>
            <li>
              <a href="#contact">{language === "EN" ? "Contact" : "Contact"}</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1>
          {language === "EN"
            ? "Creative Front-End Developer"
            : "Développeur Front-End Créatif"}
        </h1>
        <div className="intro-wrapper">
          <p className="intro">
            {language === "EN"
              ? "Front-End Developer & Designer, student at 42 Luxembourg"
              : "Développeur Front-End & Designer, étudiant à 42 Luxembourg"}
          </p>
          <img
            src="./public/logo/42_white.png"
            alt="École 42"
            className="logo-42"
          />
        </div>
      </section>

      <section className="projects" id="projects">
        <h2>{language === "EN" ? "PROJECTS" : "PROJETS"}</h2>
        <div className="project-cards">
          <div className="project-card">
            <img
              src="./public/logo/valeklogo.jpeg"
              alt="Valek Studio"
              className="project-logo"
            />
            <h3>Valek Studio</h3>
            <p>
              {language === "EN"
                ? "Custom web design and visual direction for a high-end creative studio. I contributed to their brand identity and helped shape their digital showcase."
                : "Design web sur-mesure et direction artistique pour un studio créatif haut de gamme. J'ai contribué à leur identité visuelle et à la mise en valeur de leurs projets."}
            </p>
            <div className="project-data">
              <div>
                <strong>+10</strong>
                <br />
                {language === "EN" ? "Projects created" : "Projets réalisés"}
              </div>
              <div>
                <strong>3</strong>
                <br />
                {language === "EN" ? "Design phases" : "Phases de design"}
              </div>
              <div>
                <strong>1</strong>
                <br />
                {language === "EN"
                  ? "Collaboration year"
                  : "An de collaboration"}
              </div>
            </div>
            <a href="https://valekstudio.com" target="_blank" className="btn">
              {language === "EN" ? "Learn more" : "En savoir plus"}
            </a>
          </div>

          <div className="project-card">
            <img
              src="./public/logo/ricbeller_logo.png"
              alt="Ricbeller"
              className="project-logo"
            />
            <h3>Ricbeller</h3>
            <p>
              {language === "EN"
                ? "Support for personal portfolio structure, animations and branding. Helped bring out storytelling through interactive motion."
                : "Soutien sur la structure du portfolio personnel, les animations et l'identité. J'ai aidé à mettre en valeur le récit à travers des motions interactives."}
            </p>
            <div className="project-data">
              <div>
                <strong>+5</strong>
                <br />
                {language === "EN" ? "Pages animated" : "Pages animées"}
              </div>
              <div>
                <strong>2</strong>
                <br />
                {language === "EN" ? "Design reviews" : "Relectures design"}
              </div>
              <div>
                <strong>1</strong>
                <br />
                {language === "EN"
                  ? "Collaboration year"
                  : "An de collaboration"}
              </div>
            </div>
            <a href="https://ricbeller.com" target="_blank" className="btn">
              {language === "EN" ? "Learn more" : "En savoir plus"}
            </a>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <p>
          © 2025 Bilal Hamzaoui.{" "}
          {language === "EN" ? "All rights reserved." : "Tous droits réservés."}
        </p>
        <p>📧 bilal.hmz14@gmail.com</p>
        <p>💼 LinkedIn | GitHub</p>
      </footer>
    </main>
  );
};

export default App;
