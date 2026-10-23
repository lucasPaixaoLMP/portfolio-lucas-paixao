"use client";

import { useEffect, useState } from "react";

type Project = {
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  statusLabel?: string;
  previewHost?: string;
  image: string;
  imagePosition?: string;
};

type Experience = {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  paragraphs: string[];
  skills: string[];
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
    title: "ClockHub",
    category: "Marketplace de relógios autênticos",
    year: "2026",
    description:
      "Marketplace para compra e venda de relógios com foco em confiança, descoberta de modelos e uma experiência premium para clientes reais.",
    tags: ["React", "Marketplace", "SEO"],
    liveUrl: "https://clockhub.com.br/",
    image: "/projects/clockhub-shot.png",
    imagePosition: "center top",
  },
  {
    number: "02",
    title: "BuyTicket Brasil",
    category: "Marketplace de ingressos · Migração",
    year: "2026",
    description:
      "Colaboração na migração tecnológica do maior mercado secundário de ingressos do Brasil, garantindo alta disponibilidade, busca rápida e compra e revenda seguras para grandes eventos.",
    tags: ["Migração de Sistema", "Marketplace", "Alta Performance", "Eventos"],
    liveUrl: "https://buyticketbrasil.com/",
    statusLabel: "Colaboração na migração",
    image: "/projects/buyticket-shot.png",
    imagePosition: "center top",
  },
  {
    number: "03",
    title: "PAN — Apoio ao Neurodivergente",
    category: "App mobile & saúde multidisciplinar",
    year: "2026",
    description:
      "Aplicativo mobile para acompanhamento multidisciplinar de pessoas neurodivergentes, integrando prontuário, calendário de comportamentos, aderência medicamentosa e rede de cuidado entre família, escola e clínica.",
    tags: ["Flutter", "Riverpod", "FastAPI", "Clean Architecture", "LGPD"],
    statusLabel: "Em desenvolvimento",
    previewHost: "app mobile · flutter (em desenvolvimento)",
    image: "/projects/pan-mobile.png",
    imagePosition: "center top",
  },
  {
    number: "04",
    title: "PRÓ Torneios",
    category: "Plataforma de torneios esportivos",
    year: "2026",
    description:
      "Plataforma completa para organização de torneios de beach tennis, tênis, futevôlei e padel, com inscrições via PIX, chaves automáticas, placar ao vivo e perfil de atletas.",
    tags: ["Full Stack", "PIX & Pagamentos", "Placar ao Vivo", "SaaS Esportivo"],
    liveUrl: "https://protorneios.com.br/",
    image: "/projects/protorneios-shot.png",
    imagePosition: "center top",
  },
  {
    number: "05",
    title: "MinasXtreme",
    category: "Gestão de campeonatos de motocross",
    year: "2026",
    description:
      "Plataforma para inscrições, pagamentos, vistoria e acompanhamento de resultados em campeonatos de motocross, desenvolvida para um cliente real.",
    tags: ["Next.js", "Pagamentos", "Gestão esportiva"],
    liveUrl: "https://minasxtreme.com.br/",
    image: "/projects/minasxtreme-shot.png",
    imagePosition: "center center",
  },
  {
    number: "06",
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
    number: "07",
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
    number: "08",
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
    number: "09",
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

const experiences: Experience[] = [
  {
    role: "AI Engineer",
    company: "MVP Builders",
    type: "Tempo integral",
    period: "abr. de 2026 - o momento",
    location: "Remoto",
    paragraphs: [
      "Atuação no desenvolvimento de aplicações fullstack modernas, utilizando ferramentas de Inteligência Artificial para otimizar produtividade, qualidade de código e tomada de decisões técnicas.",
      "Responsável por projetar, desenvolver e manter sistemas escaláveis, atuando tanto no frontend quanto no backend, com foco em performance, usabilidade e boas práticas de engenharia de software.",
    ],
    skills: [
      "Inteligência Artificial",
      "Desenvolvimento de Front-end",
      "Full Stack",
      "Sistemas Escaláveis",
      "Arquitetura de Software",
      "Performance & Usabilidade",
    ],
  },
];

const skills = [
  "Inteligência Artificial",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Design Systems",
  "Motion",
  "PostgreSQL",
  "APIs",
];

const linkedIn = "https://www.linkedin.com/in/lucas-mathias-paix%C3%A3o-84a62b198/";

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
  );
}

function handleSpotlightMove(event: React.PointerEvent<HTMLElement>) {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
  el.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
}

function ProjectCard({ project }: { project: Project }) {
  const hostLabel =
    project.previewHost ??
    (project.liveUrl ? new URL(project.liveUrl).hostname : "preview");

  const visualContent = (
    <>
      <div className="project-browser" aria-hidden="true">
        <span>● ● ●</span>
        <span>{hostLabel}</span>
        <span>{project.liveUrl ? "↗" : "●"}</span>
      </div>
      <img
        src={project.image}
        alt={`Preview do projeto ${project.title}`}
        style={{ objectPosition: project.imagePosition ?? "center" }}
        loading="lazy"
        width="1200"
        height="750"
      />
      {project.liveUrl && (
        <span className="open-project">
          <Arrow />
        </span>
      )}
    </>
  );

  return (
    <article
      className="project reveal spotlight-card"
      onPointerMove={handleSpotlightMove}
    >
      {project.liveUrl ? (
        <a
          className="project-visual"
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir ${project.title}`}
        >
          {visualContent}
        </a>
      ) : (
        <div
          className="project-visual project-visual-static"
          aria-label={`Preview de ${project.title}`}
        >
          {visualContent}
        </div>
      )}
      <div className="project-body">
        <div className="project-caption">
          <span className="eyebrow">{project.category}</span>
          <span className="project-number">/{project.number}</span>
        </div>
        <h3>
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              {project.title}
              <Arrow />
            </a>
          ) : (
            <span className="project-title-static">
              <span>{project.title}</span>
              {project.statusLabel && (
                <span className="project-status-pill">{project.statusLabel}</span>
              )}
            </span>
          )}
        </h3>
        <p>{project.description}</p>
        <div className="project-meta">
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          {project.githubUrl ? (
            <a
              className="code-link"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Código de ${project.title}`}
            >
              Código <Arrow />
            </a>
          ) : (
            project.statusLabel && (
              <span className="code-link status-note">{project.statusLabel}</span>
            )
          )}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("lmp-theme");
    const initial = saved === "light" ? "light" : "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("lmp-theme", next);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((item) => {
      item.classList.add("will-reveal");
      observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main id="top">
      <div className="ambient-glow glow-one" aria-hidden="true" />
      <div className="ambient-glow glow-two" aria-hidden="true" />

      <a className="skip-link" href="#projetos">
        Pular para projetos
      </a>

      <header className="site-header">
        <a className="logo" href="#top" aria-label="Lucas Mathias Paixão, início">
          lmp<span>®</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#projetos">
            Projetos <sup>09</sup>
          </a>
          <a href="#experiencia">Experiência</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">
            Contato <Arrow />
          </a>
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"
            }
            title={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
          >
            <span className="theme-icon" aria-hidden="true">
              {theme === "dark" ? "☀" : "☾"}
            </span>
            <span>{theme === "dark" ? "Modo claro" : "Modo escuro"}</span>
          </button>
          <a className="availability" href="#contato">
            <i />
            Disponível para projetos
          </a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-kicker">
          <span>AI ENGINEER &amp; DESENVOLVEDOR FULL STACK</span>
          <span>SÃO PAULO, BRASIL ↗</span>
        </div>
        <div className="hero-content">
          <div className="hero-copy">
            <div className="intro-pill">
              <span className="intro-dot" aria-hidden="true" />
              <p className="intro">
                Olá, eu sou Lucas Mathias Paixão · AI Engineer @ MVP Builders
              </p>
            </div>
            <h1 id="hero-title">
              Ideias ganham
              <br />
              forma.
              <br />
              <em>E inteligência.</em>
            </h1>
            <p className="hero-description">
              Entre o design, a engenharia full stack e a Inteligência Artificial,
              construo produtos digitais escaláveis que conectam pessoas a grandes
              ideias.
            </p>
            <div className="hero-actions">
              <a className="button" href="#projetos">
                Explorar projetos <Arrow />
              </a>
              <a className="text-link" href="#experiencia">
                Minha trajetória <span>↘</span>
              </a>
            </div>
          </div>

          <div
            className="hero-art"
            aria-hidden="true"
            onPointerMove={handleSpotlightMove}
          >
            <div className="art-coordinate">FIG. 01 — SISTEMAS EM ÓRBITA</div>
            <div className="orbital">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="orbit orbit-four" />
              <div className="orb-core">✳</div>
              <span className="satellite" />
              <span className="satellite satellite-two" />
            </div>
            <span className="art-cross cross-one">+</span>
            <span className="art-cross cross-two">+</span>
            <div className="art-label">
              <span>
                ENGENHARIA + IA
                <br />
                EM CONSTANTE EVOLUÇÃO
              </span>
              <span className="art-symbol">↗</span>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <a href="#projetos">
            <span className="scroll-line" />
            ROLE PARA DESCOBRIR
          </a>
          <span>DESIGN COM INTENÇÃO. CÓDIGO E IA COM PRECISÃO.</span>
          <span>PORTFÓLIO — 2026</span>
        </div>
      </section>

      <div className="discipline-band" aria-hidden="true">
        <div>
          {[0, 1].map((n) => (
            <span key={n}>
              AI ENGINEERING <i>✳</i> FULL STACK <i>✳</i> DESIGN DE PRODUTO{" "}
              <i>✳</i> ARQUITETURA ESCALÁVEL <i>✳</i> EXPERIÊNCIA &amp; MOTION{" "}
              <i>✳</i>{" "}
            </span>
          ))}
        </div>
      </div>

      <section className="projects-section" id="projetos">
        <div className="section-title reveal">
          <div>
            <span className="eyebrow">01 / TRABALHOS SELECIONADOS</span>
            <h2>
              Do conceito
              <br />
              ao <em>mundo real.</em>
            </h2>
          </div>
          <div className="section-aside">
            <span className="small-star">✳</span>
            <p>
              Produtos reais, desafios diferentes.
              <br />O mesmo cuidado em cada detalhe.
            </p>
            <span className="eyebrow">2026 — SELEÇÃO DE PROJETOS (09)</span>
          </div>
        </div>
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </section>

      <section className="experience-section" id="experiencia">
        <div className="section-title reveal">
          <div>
            <span className="eyebrow">02 / EXPERIÊNCIA PROFISSIONAL</span>
            <h2>
              Engenharia com
              <br />
              <em>inteligência aplicada.</em>
            </h2>
          </div>
          <div className="section-aside">
            <span className="small-star">✳</span>
            <p>
              Construindo sistemas modernos de ponta a ponta
              <br />
              com IA integrada ao ciclo de engenharia.
            </p>
            <span className="eyebrow">CARREIRA &amp; ATUAÇÃO ATUAL</span>
          </div>
        </div>

        <div className="experience-list">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="experience-card reveal spotlight-card"
              onPointerMove={handleSpotlightMove}
            >
              <div className="experience-header">
                <div className="experience-brand">
                  <div className="company-logo" aria-hidden="true">
                    <span>✳</span>
                  </div>
                  <div>
                    <div className="experience-status">
                      <span className="status-dot" />
                      <span>ATUALMENTE</span>
                    </div>
                    <h3>{exp.role}</h3>
                    <p className="experience-company">
                      <strong>{exp.company}</strong> · {exp.type}
                    </p>
                  </div>
                </div>
                <div className="experience-meta-badges">
                  <span className="exp-badge">{exp.period}</span>
                  <span className="exp-badge exp-badge-outline">{exp.location}</span>
                </div>
              </div>

              <div className="experience-body">
                {exp.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="experience-footer">
                <span className="eyebrow">COMPETÊNCIAS EM DESTAQUE</span>
                <div className="tags">
                  {exp.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="about-top reveal">
          <span className="eyebrow">03 / POR TRÁS DO CÓDIGO</span>
          <span className="eyebrow">CURIOSIDADE COMO PONTO DE PARTIDA.</span>
        </div>
        <div className="about-grid">
          <div
            className="about-identity reveal spotlight-card"
            onPointerMove={handleSpotlightMove}
          >
            <div className="identity-art">
              <div className="portrait-Coord" aria-hidden="true">
                <span>LMP // 2026</span>
                <span>AI + FULL STACK</span>
              </div>
              <div className="portrait-halo" aria-hidden="true" />
              <div className="portrait-ring" aria-hidden="true" />
              <i aria-hidden="true">✳</i>
              <img
                className="portrait-photo"
                src="/lucas-paixao.png"
                alt="Foto de Lucas Mathias Paixão"
                loading="lazy"
                width="400"
                height="400"
              />
              <div className="portrait-fade" aria-hidden="true" />
            </div>
            <div className="identity-caption">
              <span>LUCAS MATHIAS PAIXÃO</span>
              <span>AI ENGINEER &amp; DESENVOLVEDOR FULL STACK</span>
            </div>
          </div>
          <div className="about-copy reveal">
            <h2>
              Lógica para construir.
              <br />
              <em>
                Sensibilidade
                <br />
                para ir além.
              </em>
            </h2>
            <p>
              Sou Lucas, AI Engineer na MVP Builders e desenvolvedor full stack com
              olhar apurado para design. Transformo ideias complexas em
              experiências simples, úteis e memoráveis — do primeiro wireframe à
              arquitetura escalável em produção.
            </p>
            <p>
              Uno engenharia de software moderna e Inteligência Artificial para
              acelerar entregas sem abrir mão de performance, usabilidade e cuidado
              visual em cada interação.
            </p>
            <div className="about-links">
              <a
                className="text-link"
                href="/curriculo.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Conheça minha trajetória <Arrow />
              </a>
              <a
                className="text-link"
                href={linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                Ver perfil no LinkedIn <Arrow />
              </a>
            </div>
          </div>
        </div>
        <div className="skills-row reveal">
          <span className="eyebrow">
            MINHA CAIXA
            <br />
            DE FERRAMENTAS
          </span>
          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact-top reveal">
          <span className="eyebrow">04 / O PRÓXIMO PROJETO</span>
          <span className="availability">
            <i />
            Vamos tirar sua ideia do papel
          </span>
        </div>
        <div className="contact-main reveal">
          <p>Uma boa conversa pode ser o começo.</p>
          <a href={linkedIn} target="_blank" rel="noreferrer">
            <span>
              Vamos criar
              <br />
              <em>algo incrível.</em>
            </span>
            <span className="contact-arrow">
              <Arrow />
            </span>
          </a>
        </div>
        <div className="contact-bottom">
          <span>Tem um desafio em mente? Me chame no LinkedIn.</span>
          <a className="text-link" href={linkedIn} target="_blank" rel="noreferrer">
            Iniciar uma conversa <Arrow />
          </a>
        </div>
      </section>

      <footer>
        <a className="logo" href="#top" aria-label="Voltar ao início">
          lmp<span>®</span>
        </a>
        <span>© 2026 LUCAS MATHIAS PAIXÃO</span>
        <div className="social-links">
          <a
            href="https://github.com/lucasPaixaoLMP"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Arrow />
          </a>
          <a href={linkedIn} target="_blank" rel="noreferrer">
            LinkedIn <Arrow />
          </a>
          <a href="/curriculo.pdf" target="_blank" rel="noreferrer">
            Currículo <Arrow />
          </a>
        </div>
        <a href="#top" className="back-top" aria-label="Voltar ao topo">
          ↑
        </a>
      </footer>
    </main>
  );
}
