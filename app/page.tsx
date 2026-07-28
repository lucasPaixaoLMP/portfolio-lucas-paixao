"use client";

import { useEffect, useRef } from "react";

type Project = {
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  imagePosition?: string;
};

/*
 * PERSONALIZE SEUS PROJETOS AQUI:
 * Os links publicados, repositórios e previews reais ficam centralizados aqui.
 * Para adicionar outro projeto, duplique um item e coloque a captura em
 * /public/projects. Os botões e o card usam estes dados automaticamente.
 */
const projects: Project[] = [
  {
    number: "01",
    title: "DDA Delivery",
    category: "Delivery & e-commerce",
    year: "2026",
    description:
      "Aplicação de delivery responsiva com catálogo por categorias, busca de produtos e uma jornada de compra pensada para dispositivos móveis.",
    tags: ["JavaScript", "Firebase", "Responsive UI"],
    liveUrl: "https://dda-delivery.web.app/",
    githubUrl: "https://github.com/lucasPaixaoLMP/app-delivery",
    image: "/projects/dda-delivery.png",
    imagePosition: "center top",
  },
  {
    number: "02",
    title: "StockFlow",
    category: "Gestão de estoque & vendas",
    year: "2026",
    description:
      "Plataforma full stack multi-loja para controle de inventário e vendas, com isolamento por vendedor, histórico e operação em nuvem.",
    tags: ["Angular 17", "Node.js", "Turso"],
    liveUrl: "https://stockflow-lukkl.vercel.app/login?returnUrl=%2Fdashboard",
    githubUrl: "https://github.com/lucasPaixaoLMP/Stockflow",
    image: "/projects/stockflow.png",
  },
  {
    number: "03",
    title: "Monte seu PC",
    category: "Jogo educacional interativo",
    year: "2026",
    description:
      "Experiência gamificada de hardware em que o usuário monta um computador arrastando cada componente para o lugar correto.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://jogo-hardware.vercel.app/",
    githubUrl: "https://github.com/lucasPaixaoLMP/jogo-hardware",
    image: "/projects/jogo-hardware.png",
    imagePosition: "center top",
  },
  {
    number: "04",
    title: "Barber App",
    category: "Agendamento via WhatsApp",
    year: "2026",
    description:
      "Aplicação para barbearias com entrada simplificada por telefone e uma experiência elegante para conectar clientes ao atendimento.",
    tags: ["Node.js", "Express", "WhatsApp"],
    liveUrl: "https://barber-wa-server.vercel.app/",
    githubUrl: "https://github.com/lucasPaixaoLMP/barber-wa-server",
    image: "/projects/barber-wa.png",
  },
];

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Design Systems",
  "Motion",
  "PostgreSQL",
  "APIs",
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span className="arrow" aria-hidden="true">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  };

  return (
    <article
      className="project reveal"
      ref={cardRef}
      onPointerMove={handlePointerMove}
    >
      <div className="project-heading">
        <span>{project.number}</span>
        <div>
          <p>{project.category}</p>
          <p>{project.year}</p>
        </div>
      </div>

      <a
        className="project-visual"
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Abrir ${project.title}`}
      >
        <img
          className="project-screenshot"
          src={project.image}
          alt={`Preview do projeto ${project.title}`}
          style={{ objectPosition: project.imagePosition ?? "center center" }}
          loading="lazy"
        />
        <span className="open-project"><Arrow diagonal /></span>
      </a>

      <div className="project-info">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-meta">
          <div className="tags">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className="project-links">
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Visitar projeto <Arrow diagonal />
            </a>
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              Código <Arrow diagonal />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    const items = document.querySelectorAll(".reveal");
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Ir ao início">LMP<span>.</span></a>
        <nav aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="availability" href="#contato">
          <i /> Disponível para projetos
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker reveal">
          <span><b>LUCAS MATHIAS PAIXÃO</b> — DESENVOLVEDOR FULL STACK</span>
          <span>BRASIL · 2026</span>
        </div>
        <div className="hero-name-lockup reveal" aria-label="Lucas Mathias Paixão">
          <span className="hero-name-monogram">LMP.</span>
          <div className="hero-name-lines">
            <strong>LUCAS</strong>
            <strong>MATHIAS</strong>
            <strong>PAIXÃO</strong>
          </div>
          <small>DESENVOLVEDOR FULL STACK</small>
        </div>
        <h1 className="reveal">
          Eu crio experiências
          <span>digitais que <em>movem.</em></span>
        </h1>
        <div className="hero-bottom reveal">
          <p>
            Design com intenção. Código com precisão.<br />
            Produtos digitais feitos para permanecer.
          </p>
          <a className="circle-link" href="#projetos" aria-label="Ver projetos">
            <span>ver<br />projetos</span>
            <Arrow />
          </a>
        </div>
        <div className="scroll-note">ROLE PARA EXPLORAR <span>↓</span></div>
      </section>

      <section className="projects-section" id="projetos">
        <div className="section-title reveal">
          <div>
            <span className="eyebrow">01 — PROJETOS SELECIONADOS</span>
            <h2>Trabalho que fala<br /><em>por si.</em></h2>
          </div>
          <p>Uma seleção de produtos onde estratégia, interface e engenharia trabalham como uma coisa só.</p>
        </div>
        <div className="projects-list">
          {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="about-index reveal">
          <span className="eyebrow">02 — SOBRE MIM</span>
          <span>( LUCAS / MATHIAS / PAIXÃO )</span>
        </div>
        <div className="about-grid">
          <div className="about-statement reveal">
            <p>
              Eu transformo ideias complexas em experiências
              <strong> simples, úteis e memoráveis.</strong>
            </p>
          </div>
          <div className="about-copy reveal">
            <p>
              Sou Lucas, desenvolvedor full stack com olhar apurado para design.
              Gosto de atuar na interseção entre lógica e sensibilidade — do
              primeiro wireframe ao último detalhe em produção.
            </p>
            <p>
              Acredito em interfaces silenciosas, performance real e movimentos
              que ajudam a contar uma história. Menos ruído, mais significado.
            </p>
            {/* TROQUE O LINK ABAIXO PELO LINK DO SEU CURRÍCULO */}
            <a href="/curriculo.pdf" target="_blank">
              Baixar currículo <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="skill-marquee" aria-label="Tecnologias">
          <div>
            {[...skills, ...skills].map((skill, index) => (
              <span key={`${skill}-${index}`}>{skill}<i>✦</i></span>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact-top reveal">
          <span className="eyebrow">03 — VAMOS CONVERSAR</span>
          <span>Tem uma ideia em mente?</span>
        </div>
        <div className="contact-main reveal">
          <p>Vamos criar algo</p>
          {/* TROQUE O E-MAIL ABAIXO PELO SEU E-MAIL PROFISSIONAL */}
          <a href="mailto:seuemail@exemplo.com">
            extraordinário<span>.</span>
          </a>
        </div>
        <footer>
          <div>
            <span>© 2026 LUCAS MATHIAS PAIXÃO</span>
            <span>SÃO PAULO, BR</span>
          </div>
          <div className="social-links">
            {/* TROQUE OS LINKS ABAIXO PELOS SEUS PERFIS */}
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a>
          </div>
          <a href="#top">Voltar ao topo ↑</a>
        </footer>
      </section>
    </main>
  );
}
