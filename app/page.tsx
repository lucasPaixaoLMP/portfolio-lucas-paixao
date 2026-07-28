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
  visual: "commerce" | "finance" | "wellness";
};

/*
 * PERSONALIZE SEUS PROJETOS AQUI:
 * 1. Troque liveUrl pelo link publicado do projeto.
 * 2. Troque githubUrl pelo link do repositório.
 * 3. Edite título, descrição e tecnologias.
 * Os botões e todo o card já usam automaticamente esses links.
 */
const projects: Project[] = [
  {
    number: "01",
    title: "Nōva Commerce",
    category: "E-commerce experience",
    year: "2026",
    description:
      "Uma experiência de compra refinada, criada para transformar descoberta em desejo — e desejo em conversão.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    liveUrl: "https://example.com", // COLOQUE AQUI O LINK DO PROJETO
    githubUrl: "https://github.com/", // COLOQUE AQUI O LINK DO GITHUB
    visual: "commerce",
  },
  {
    number: "02",
    title: "Orbit Finance",
    category: "Fintech dashboard",
    year: "2025",
    description:
      "Dados financeiros complexos traduzidos em uma interface objetiva, rápida e surpreendentemente simples.",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com", // COLOQUE AQUI O LINK DO PROJETO
    githubUrl: "https://github.com/", // COLOQUE AQUI O LINK DO GITHUB
    visual: "finance",
  },
  {
    number: "03",
    title: "Alma Studio",
    category: "Wellness platform",
    year: "2025",
    description:
      "Uma plataforma digital serena que conecta movimento, rotina e bem-estar em uma jornada acolhedora.",
    tags: ["Next.js", "Framer Motion", "CMS"],
    liveUrl: "https://example.com", // COLOQUE AQUI O LINK DO PROJETO
    githubUrl: "https://github.com/", // COLOQUE AQUI O LINK DO GITHUB
    visual: "wellness",
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

function ProjectPreview({ type }: { type: Project["visual"] }) {
  if (type === "commerce") {
    return (
      <div className="preview preview-commerce">
        <div className="browser-bar">
          <span /><span /><span />
          <div className="browser-address">novā.store / collection</div>
        </div>
        <div className="commerce-nav">
          <b>NŌVA</b><span>NEW &nbsp; SHOP &nbsp; STORIES</span><i>Bag (2)</i>
        </div>
        <div className="commerce-body">
          <div className="commerce-copy">
            <small>THE NEW COLLECTION</small>
            <strong>Objects for<br />slow living.</strong>
            <button>Explore collection ↗</button>
          </div>
          <div className="product-stage">
            <div className="vase vase-back" />
            <div className="vase vase-front" />
            <span>Form No. 04</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "finance") {
    return (
      <div className="preview preview-finance">
        <div className="browser-bar dark-bar">
          <span /><span /><span />
          <div className="browser-address">app.orbit.finance</div>
        </div>
        <div className="finance-shell">
          <aside>
            <b>O.</b>
            <div className="side-lines"><i /><i /><i /><i /></div>
            <span>LP</span>
          </aside>
          <main>
            <div className="finance-head">
              <div><small>GOOD MORNING, LUCAS</small><h4>Your overview</h4></div>
              <button>+ Add account</button>
            </div>
            <div className="balance-grid">
              <div className="balance-card">
                <small>TOTAL BALANCE</small>
                <strong>R$ 48.250,80</strong>
                <span>↑ 12.8% this month</span>
                <div className="chart">
                  {[22, 30, 27, 43, 38, 58, 51, 74, 68, 87, 80, 96].map((h, i) => (
                    <i key={i} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="goal-card">
                <small>MONTHLY GOAL</small>
                <div className="goal-ring"><b>72%</b></div>
                <span>R$ 7.200 de R$ 10k</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="preview preview-wellness">
      <div className="browser-bar warm-bar">
        <span /><span /><span />
        <div className="browser-address">almastudio.co / practice</div>
      </div>
      <div className="wellness-nav">
        <b>alma.</b><span>Practices &nbsp; Journal &nbsp; About</span><button>Join us</button>
      </div>
      <div className="wellness-body">
        <div className="sun-orbit"><i /><span>03</span></div>
        <div className="wellness-copy">
          <small>MOVE WITH INTENTION</small>
          <strong>A quieter<br />way to feel.</strong>
          <p>Guided movement and rituals<br />for your everyday rhythm.</p>
        </div>
        <div className="wellness-card">
          <div className="wellness-silhouette" />
          <span>Morning flow · 24 min</span>
        </div>
      </div>
    </div>
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
        <ProjectPreview type={project.visual} />
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
        <h1 className="reveal">
          Eu crio experiências
          <span>digitais que <em>movem.</em></span>
        </h1>
        <div className="hero-bottom reveal">
          <p>
            Design com intenção. Código com precisão.<br />
            Produtos digitais feitos para permanecer.
          </p>
          <div className="name-stamp" aria-label="Lucas Mathias Paixão">
            <span>LUCAS</span>
            <b>MATHIAS</b>
            <strong>PAIXÃO</strong>
            <i>FULL STACK · DEV</i>
          </div>
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

      <section className="identity-break" aria-label="Assinatura Lucas Mathias Paixão">
        <div className="identity-line reveal">
          <span>LUCAS</span>
          <i>✦</i>
          <b>MATHIAS</b>
          <strong>PAIXÃO</strong>
        </div>
        <div className="identity-caption reveal">
          <span>DESIGN COM INTENÇÃO</span>
          <span>© 2026</span>
          <span>CÓDIGO COM PRECISÃO</span>
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
          <div className="contact-signature">
            <span>por</span>
            <strong>Lucas Mathias Paixão</strong>
          </div>
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
