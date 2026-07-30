import { useEffect } from "react";
import "./App.css";

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "PHP",
    "Symfony",
    "MySQL",
    "Git",
    "GitHub",
  ];

  const projects = [
    {
      title: "Maison Elixir",
      description:
        "Développement d’un site e-commerce de parfumerie avec catalogue, panier, commandes et espace d’administration.",
      technologies: "Symfony • PHP • Twig • MySQL • Bootstrap",
    },
    {
      title: "Compteur React",
      description:
        "Application permettant d’incrémenter un compteur à chaque clic. Lorsque la valeur atteint 10, le compteur revient à 0.",
      technologies: "React • JavaScript • CSS",
    },
    {
      title: "Jeu Memory",
      description:
        "Jeu de mémoire dans lequel l’utilisateur retourne les cartes afin de retrouver les paires identiques.",
      technologies: "React • JavaScript • CSS",
    },
    {
      title: "Galerie API",
      description:
        "Récupération d’images depuis une API, affichage sous forme de cards et chargement de nouvelles images lors du défilement.",
      technologies: "React • API • JavaScript • CSS",
    },
  ];

  return (
    <div className="app">
      <nav className="nav">
        <div className="logo">JM</div>

        <ul className="nav-links">
          <li>
            <a href="#about">À propos</a>
          </li>
          <li>
            <a href="#skills">Compétences</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>
            <a href="#experience">Expérience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <header className="hero reveal">
        <div className="hero-content">
          <p className="badge">Développeur Web Full Stack</p>

          <h1>Jonathan MAHEO</h1>

          <p className="subtitle">
            Stagiaire Développeur Front-End au sein de l’équipe Web Front TF1+
          </p>

          <p className="description">
            Je recherche une alternance en développement Full Stack afin de
            renforcer mes compétences et de participer à des projets concrets.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn">
              Voir mes projets
            </a>

            <a href="#contact" className="btn btn-outline">
              Me contacter
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section reveal">
          <h2>À propos</h2>

          <div className="card">
            <p>
              Actuellement en formation Développeur Web Full Stack chez
              Nextformation, j’effectue un stage au sein de l’équipe Web Front
              de TF1+.
            </p>

            <p>
              Cette expérience me permet de mettre en pratique React,
              JavaScript, les appels API, Git et GitHub dans un environnement
              professionnel.
            </p>

            <p>
              Je recherche ensuite une alternance afin de continuer à progresser
              en développement Front-End et Back-End.
            </p>
          </div>
        </section>

        <section id="skills" className="section reveal">
          <h2>Compétences</h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section reveal">
          <h2>Mes projets</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <span>{project.title}</span>
                </div>

                <div className="project-content">

                  <p>{project.description}</p>

                  <span className="technologies">
                    {project.technologies}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section reveal">
          <h2>Expérience</h2>

          <div className="card">
            <h3>Stagiaire Développeur Front-End — TF1+</h3>

            <p className="date">Juillet 2026 - Août 2026</p>

            <p>
              Participation aux réunions de préparation des tickets et
              découverte du fonctionnement Agile et Scrum.
            </p>

            <p>
              Réalisation d’exercices React, utilisation de composants, gestion
              des états, appels API et utilisation de Git et GitHub.
            </p>
          </div>
        </section>

        <section id="contact" className="section reveal">
          <h2>Contact</h2>

          <div className="card contact-card">
            <p>
              <a href="mailto:jonathanmaheo@outlook.fr">
                jonathanmaheo@outlook.fr
              </a>
            </p>

            <div className="buttons">
              <a
                className="btn"
                href="https://github.com/jonathanmaheo"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                className="btn btn-outline"
                href="https://www.linkedin.com/in/jonathan-maheo-b8855b372/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>© 2026 Jonathan MAHEO</footer>
    </div>
  );
}