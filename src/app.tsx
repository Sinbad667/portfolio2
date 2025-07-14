import React, { useState } from "react";
import "./style.css";

const App: React.FC = () => {
  const [language, setLanguage] = useState<"EN" | "FR" | null>(null);

  if (!language) {
    return (
      <div className="lang-selector">
        <div className="lang-box">
          <button onClick={() => setLanguage("EN")}>EN</button>
          <button onClick={() => setLanguage("FR")}>FR</button>
        </div>
      </div>
    );
  }

  return (
    <main className="container">
      <h1>
        BILAL <br />
        <span className="sub">HAMZAOUI</span>
      </h1>
      <p className="intro">
        {language === "EN"
          ? "welcome here! i offer a glimpse into my universe."
          : "bienvenue ici ! je vous invite à découvrir mon univers."}
      </p>

      <section className="projects">
        <h2>{language === "EN" ? "PROJECTS" : "PROJETS"}</h2>
        <div className="grid">
          <div className="card">
            <h3>FRONT-END</h3>
            <p>
              React, HTML, CSS, animation
              <br />
              UI/UX design & interaction.
            </p>
          </div>
          <div className="card">
            <h3>BACK-END</h3>
            <p>
              Node.js, Express, APIs
              <br />
              MongoDB, PostgreSQL.
            </p>
          </div>
          <div className="card">
            <h3>MOBILE DESIGN</h3>
            <p>
              Figma & responsive tools
              <br />
              Clean cross-platform UI.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
