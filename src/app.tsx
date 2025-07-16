import React, { useState } from "react";
import "./style.css";

const App: React.FC = () => {
  const [language, setLanguage] = useState<"EN" | "FR" | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

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
              <a href="#skills">
                {language === "EN" ? "Skills" : "Compétences"}
              </a>
            </li>
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

      <section className="skills" id="skills">
        <h2>{language === "EN" ? "SKILLS" : "COMPÉTENCES"}</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <div className="skill-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </svg>
            </div>
            <span>React</span>
          </div>

          <div className="skill-item">
            <div className="skill-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
              </svg>
            </div>
            <span>JavaScript</span>
          </div>

          <div className="skill-item">
            <div className="skill-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853H10.112z" />
              </svg>
            </div>
            <span>Three.js</span>
          </div>

          <div className="skill-item">
            <div className="skill-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0C.055 14.613.925 11.605 1.936 8.81c.942.404 1.894.787 2.9 1.064 1.163.317 2.341.549 3.537.706a9.117 9.117 0 01-1.85 3.142 9.274 9.274 0 01-2.773 2.502c.214 1.215.368 2.435.455 3.671zm-.522-3.484c.834-.52 1.554-1.218 2.116-2.019.582-.821 1.004-1.74 1.243-2.713.065-.267.108-.536.138-.808-.085-.718-.355-1.406-.788-1.96a4.904 4.904 0 00-1.563-1.21c-.65-.28-1.3-.515-1.975-.695a25.441 25.441 0 00-3.11-.706 2.142 2.142 0 01-.04-.289c-.015-.343-.108-.68-.27-.983-.175-.344-.338-.68-.52-1.016-.201-.373-.463-.72-.77-1.024-.315-.335-.687-.625-1.1-.86-.394-.22-.82-.39-1.264-.51-.51-.14-1.043-.201-1.57-.18-.526.02-1.048.129-1.542.32-.535.208-.1.002-.658.33-.142.084-.287.169-.418.268-.147.106-.282.222-.407.348-.116.12-.22.249-.31.386-.083.129-.15.265-.2.408-.055.158-.088.32-.097.484-.013.185.010.37.067.546.064.191.167.369.302.524.147.171.32.317.507.435.264.167.556.29.852.368.31.084.634.12.957.107.637-.021 1.27-.168 1.85-.42.725-.307 1.407-.693 2.027-1.168.674-.515 1.293-1.11 1.846-1.79.264-.32.506-.658.717-1.01.154-.26.28-.532.38-.813.109-.307.184-.62.224-.938.04-.318.048-.638.024-.957-.024-.318-.08-.634-.165-.942-.09-.325-.204-.64-.346-.938-.147-.314-.126-.13-.288-.417-.18-.319-.466-.577-.805-.716-.571-.234-1.146-.35-1.735-.35-.589-.001-1.18.119-1.747.36-.596.252-1.115.646-1.490 1.157-.4.548-.678 1.157-.695 1.833-.011.35.040.7.15 1.031.129.348.308.665.53.942.208.259.46.472.749.622.34.178.707.284 1.1.312.429.032.862-.027 1.242-.17.448-.171.819-.442 1.1-.8.284-.377.448-.835.469-1.299.02-.465-.15-.917-.469-1.257-.734-.781-1.089-1.952-1.089-3.514v-.018c0-.979.137-1.954.41-2.886.297-.953.728-1.857 1.283-2.685.302-.45.641-.869 1.01-1.258l.101-.11c.464-.253.96-.445 1.476-.571.639-.15 1.299-.226 1.96-.225.66 0 1.321.119 1.943.35.653.244 1.25.614 1.73 1.112.505.526.875 1.157 1.07 1.859.18.629.253 1.288.218 1.944-.037.656-.18 1.307-.425 1.925-.264.665-.65 1.277-1.147 1.792-.71.736-1.7 1.208-2.768 1.208-.594 0-1.180-.227-1.616-.64-.475-.45-.820-1.02-.996-1.642-.18-.63-.24-1.29-.177-1.945.070-.705.24-1.39.507-2.04.285-.697.24-.42.556-.967.35-.598.82-1.12 1.394-1.526.32-.226.674-.404 1.05-.526.394-.135.81-.201 1.229-.196.422.005.844.08 1.242.224.379.137.735.33 1.050.581.734.585 1.139 1.54.995 2.491-.155 1.03-.715 1.898-1.52 2.371-.59.347-1.284.52-1.98.49-.747-.034-1.474-.286-2.067-.717-.616-.447-1.080-1.057-1.331-1.756-.267-.744-.299-1.554-.092-2.32.238-.884.736-1.68 1.421-2.269.342-.294.777-.5 1.257-.581.5-.085 1.02-.075 1.511.027.49.1.955.3 1.34.594.404.308.744.696.985 1.154.26.491.402 1.037.415 1.591.024.675-.12 1.35-.415 1.968-.31.649-.77 1.215-1.341 1.652-.651.499-1.425.820-2.233.93-.891.119-1.803.065-2.653-.155-.916-.237-1.772-.653-2.502-1.216-.863-.668-1.56-1.54-2.009-2.562-.47-1.070-.667-2.246-.573-3.415.105-1.29.49-2.54 1.138-3.625.694-1.162 1.668-2.101 2.832-2.728.35-.188.72-.341 1.1-.459 1.928-.601 4.062-.601 5.99 0 1.79.559 3.360 1.66 4.47 3.141 1.184 1.581 1.847 3.51 1.902 5.497.065 2.123-.455 4.228-1.488 6.086-.972 1.747-2.4 3.175-4.145 4.144l-.551.307v-.086zm1.122-3.616c.406-.548.684-1.18.812-1.848.138-.697.166-1.414.084-2.123-.09-.747-.312-1.469-.65-2.127-.367-.715-.865-1.347-1.473-1.856l-.618-.5c-.556-.421-1.182-.747-1.856-.967-.766-.251-1.57-.357-2.373-.314-.896.048-1.777.244-2.581.576-.805.34-1.54.829-2.1 1.468-.604.685-1.046 1.499-1.29 2.387-.297.107-.161.005-.418.207-.19.15-.353.334-.479.558-.131.236-.219.4-.26.639-.046.295-.027.4.055.65.088.272.22.52.393.728.18.217.399.402.646.55.270.16.572.271.882.328.327.06.662.061.987.001.696-.128 1.345-.44 1.857-.895.58-.515 1.01-1.184 1.254-1.932.117-.36.175-.734.174-1.108-.001-.4-.066-.798-.194-1.178-.145-.43-.98-.24-1.116.206-.16.526-.38 1.03-.665 1.503-.133.22-.425.609-.673.609-.045 0-.087-.025-.109-.065-.033-.06-.037-.13-.01-.193.105-.244.249-.469.425-.664.442-.491.9-.925 1.386-1.325.302-.248.617-.479.949-.692.175-.113.356-.218.544-.314l.284-.138.26-.13c.405-.203.822-.378 1.25-.523.715-.24 1.462-.36 2.209-.357.839.004 1.673.15 2.459.43.96.342 1.838.859 2.549 1.527a3.985 3.985 0 011.26 2.119c.134.813.134 1.646 0 2.459-.145.915-.505 1.793-1.044 2.549-.588.826-1.385 1.486-2.33 1.939-1.207.578-2.562.743-3.891.475-1.255-.252-2.414-.8-3.357-1.587-.835-.697-1.497-1.613-1.916-2.659-.464-1.159-.622-2.42-.457-3.665.151-1.143.526-2.243 1.099-3.225.612-1.05 1.46-1.94 2.483-2.61.987-.646 2.113-1.074 3.287-1.25.701-.105 1.414-.105 2.116 0l.099.011V9.78c.115.002.23.009.346.021.116.012.15.025.22.05.069.024.12.045.15.08-.026.075-.02.15-.05.2-.026.075-.095.15-.15.2-.04.05-.12.075-.2.1-.075.025-.15.05-.25.075z" />
              </svg>
            </div>
            <span>SQL</span>
          </div>

          <div className="skill-item">
            <div className="skill-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
              </svg>
            </div>
            <span>HTML</span>
          </div>

          <div className="skill-item">
            <div className="skill-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
              </svg>
            </div>
            <span>CSS</span>
          </div>
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
                ? "Custom web design. I contributed to realizing their web innovations like Polaris and showcasing their projects."
                : "Design web sur-mesure. J'ai contribué à réalisé leurs innovation web comme le Polaris et à la mise en valeur de leurs projets."}
            </p>
            <div className="project-data">
              <div>
                <strong>1</strong>
                <br />
                {language === "EN" ? "Project realized" : "Projet réalisé"}
              </div>
              <div>
                <strong>4</strong>
                <br />
                {language === "EN" ? "Design phases" : "Phases de design"}
              </div>
              <div>
                <strong>6</strong>
                <br />
                {language === "EN"
                  ? "Months collaboration"
                  : "Mois de collaboration"}
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
                <strong>+2</strong>
                <br />
                {language === "EN" ? "Project realized" : "Projet réalisé"}
              </div>
              <div>
                <strong>+5</strong>
                <br />
                {language === "EN" ? "Pages animated" : "Pages animées"}
              </div>
              <div>
                <strong>4</strong>
                <br />
                {language === "EN"
                  ? "Months collaboration"
                  : "Mois de collaboration"}
              </div>
            </div>
            <a href="https://ricbeller.com" target="_blank" className="btn">
              {language === "EN" ? "Learn more" : "En savoir plus"}
            </a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>{language === "EN" ? "CONTACT" : "CONTACT"}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              {language === "EN"
                ? "Let's connect and create something amazing together"
                : "Connectons-nous et créons quelque chose d'extraordinaire ensemble"}
            </p>
            <div className="contact-email">
              <span>📧 bilal.hmz14@gmail.com</span>
            </div>
          </div>
          <div className="social-links-contact">
            <a
              href="https://linkedin.com/in/bilal-hamzaoui"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="social-info">
                <h3>LinkedIn</h3>
                <p>
                  {language === "EN"
                    ? "Professional network"
                    : "Réseau professionnel"}
                </p>
              </div>
            </a>
            <a
              href="https://github.com/Sinbad667"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
              <div className="social-info">
                <h3>GitHub</h3>
                <p>
                  {language === "EN" ? "Code repositories" : "Dépôts de code"}
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>
            © 2025 Bilal Hamzaoui.{" "}
            {language === "EN"
              ? "All rights reserved."
              : "Tous droits réservés."}
          </p>
        </div>
      </footer>

      {/* CTA Flottant */}
      <div className="floating-cta">
        <div className="floating-cta-content">
          <span className="floating-cta-text">
            {language === "EN"
              ? "Let's Build Something Amazing Together"
              : "Créons Quelque Chose d'Extraordinaire Ensemble"}
          </span>
          <div className="floating-cta-buttons">
            <button
              onClick={() => setShowContactForm(true)}
              className="floating-btn primary"
            >
              {language === "EN" ? "Contact Me" : "Me Contacter"}
            </button>
          </div>
        </div>
      </div>

      {/* Formulaire de contact modal */}
      {showContactForm && (
        <div
          className="contact-form-overlay"
          onClick={() => setShowContactForm(false)}
        >
          <div
            className="contact-form-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-form"
              onClick={() => setShowContactForm(false)}
            >
              ✕
            </button>
            <h3>
              {language === "EN"
                ? "Schedule a Meeting"
                : "Planifier un Rendez-vous"}
            </h3>
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="contact-form"
            >
              <div className="form-group">
                <label>{language === "EN" ? "First Name" : "Prénom"}</label>
                <input type="text" name="firstname" required />
              </div>
              <div className="form-group">
                <label>{language === "EN" ? "Last Name" : "Nom"}</label>
                <input type="text" name="lastname" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" required />
              </div>
              <div className="form-group">
                <label>
                  {language === "EN" ? "Phone Number" : "Numéro de téléphone"}
                </label>
                <input type="tel" name="phone" required />
              </div>
              <div className="form-group">
                <label>
                  {language === "EN"
                    ? "A few words about your project"
                    : "Quelques mots sur votre projet"}
                </label>
                <textarea name="project" rows={4} required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                {language === "EN" ? "Send Request" : "Envoyer la demande"}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default App;
