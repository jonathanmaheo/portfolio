import { useEffect } from "react";
import "./App.css";

export default function App() {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.12 });

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="app">

      <nav className="nav">
        <div className="logo">JM</div>

        <div className="links">
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero reveal">
        <div className="hero-box">

          <div className="badge">Développeur Web • Alternance 2026</div>

          <h1>Jonathan MAHEO</h1>

          <p className="subtitle">
            Développeur Web Full Stack
          </p>

          <p className="desc">
            Full-stack developer spécialisé React et Symfony, je construis des applications web performantes et structurées autour de cas concrets comme un e-commerce avec gestion complète back-office.
          </p>

          <div className="cta">
            <a href="#projects" className="btn">Voir mes projets</a>
            <a href="#contact" className="btn ghost">Contact</a>
          </div>

        </div>
      </header>

      <section id="about" className="section reveal">
        <h2>À propos</h2>

        <div className="card">
          <p>
            En formation Développeur Web et Web Mobile chez Next Formation, je me spécialise dans le développement full-stack. Je réalise un stage de fin de formation de 6 semaines chez TF1, où j’aurai l’opportunité de mettre en pratique mes compétences dans un contexte professionnel à forte exigence technique.
          </p>

          <p>
            Projet e-commerce de parfumerie avec back-office complet (produits, commandes, administration).
          </p>

          <p className="highlight">
            Stage TF1 : 13/07/2026 → 13/08/2026
          </p>
        </div>
      </section>

      <section id="skills" className="section reveal">
        <h2>Compétences</h2>

        <div className="grid">
          {["HTML","CSS","JavaScript","React","Node.js","PHP","Symfony","Git","Figma"]
            .map(skill => (
              <div className="skill" key={skill}>{skill}</div>
            ))}
        </div>
      </section>

      <section id="projects" className="section reveal">
        <h2>Projet principal</h2>

        <div className="project">
          <h3>E-commerce Parfumerie</h3>
          <p>
            Développement d’une application e-commerce de parfumerie avec une interface orientée luxe et une architecture full-stack.

Mise en place d’un système d’authentification sécurisé, gestion des rôles et accès administrateur via un back-office dédié.

Le projet reproduit un contexte métier réel avec des fonctionnalités complètes : gestion des produits, des commandes et des utilisateurs, dans une logique de performance et de sécurité.
          </p>
          <span>React • Symfony • Node.js • MySQL</span>
        </div>
      </section>

      <section id="contact" className="section reveal">
        <h2>Contact</h2>

        <div className="card">
          <p>📧 jonathanmaheo@outlook.fr</p>

          <div className="cta">
            <a className="btn" href="https://github.com">GitHub</a>
            <a className="btn ghost" href="https://linkedin.com">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer>
        © 2026 Jonathan MAHEO
      </footer>

    </div>
  );
}