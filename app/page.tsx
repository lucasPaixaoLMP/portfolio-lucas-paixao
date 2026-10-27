"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  number: string;
  title: string;
  category: string;
  filterGroup: "saas" | "mobile" | "apps";
  year: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  statusLabel?: string;
  previewHost?: string;
  image: string;
  imagePosition?: string;
  featured?: boolean;
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

type SolutionPillar = {
  id: string;
  code: string;
  tag: string;
  title: string;
  description: string;
  metrics: string;
  icon: "ai" | "software" | "automation" | "api";
};

const solutions: SolutionPillar[] = [
  {
    id: "ai",
    code: "01 / IA NA PRÁTICA",
    tag: "INTELIGÊNCIA ARTIFICIAL",
    title: "IA precisa resolver problemas reais.",
    description:
      "Aplicações que interpretam contexto, automatizam decisões complexas e potencializam pessoas e negócios com LLMs, agentes autônomos e recuperação semântica (RAG).",
    metrics: "LLMs · Agentes · RAG · Visão",
    icon: "ai",
  },
  {
    id: "software",
    code: "02 / SOFTWARE",
    tag: "DESENVOLVIMENTO SOB MEDIDA",
    title: "Seu negócio não precisa se adaptar a qualquer software.",
    description:
      "Arquitetura full stack web e mobile desenhada sob medida para os seus processos, regras de negócio e objetivos reais de crescimento e conversão.",
    metrics: "Next.js · React · Flutter · Node.js",
    icon: "software",
  },
  {
    id: "automation",
    code: "03 / AUTOMAÇÃO",
    tag: "AUTOMAÇÃO INTELIGENTE",
    title: "Menos tarefas repetitivas. Mais tempo para crescer.",
    description:
      "Orquestração de fluxos inteligentes, atendimento automatizado e processos internos que operam 24/7 com precisão, logs auditáveis e zero atrito.",
    metrics: "Workflows · Filas · Workers 24/7",
    icon: "automation",
  },
  {
    id: "api",
    code: "04 / INTEGRAÇÕES",
    tag: "ECOSSISTEMA & APIS",
    title: "Seus sistemas podem trabalhar juntos.",
    description:
      "Desenvolvimento de APIs de alta performance, webhooks, meios de pagamento (PIX, split, recorrência) e sincronização segura entre ERP, CRM e apps.",
    metrics: "REST · GraphQL · Webhooks · PIX",
    icon: "api",
  },
];

const processSteps = [
  {
    step: "01",
    name: "Descoberta",
    deliverable: "Diagnóstico & Mapa de Oportunidades",
    detail: "Imersão no desafio, diagnóstico de gargalos e definição de metas reais.",
  },
  {
    step: "02",
    name: "Planejamento",
    deliverable: "Blueprint de Arquitetura & Protótipo",
    detail: "Arquitetura de dados, escolha de modelos de IA e especificação técnica.",
  },
  {
    step: "03",
    name: "Desenvolvimento",
    deliverable: "Sprints Full Stack & Integrações",
    detail: "Código limpo, sprints ágeis, interfaces fluidas e integrações robustas.",
  },
  {
    step: "04",
    name: "Testes",
    deliverable: "QA Automatizado & Stress Test",
    detail: "Validação automatizada, segurança, performance e calibração de IA.",
  },
  {
    step: "05",
    name: "Evolução",
    deliverable: "Observabilidade & Escala Contínua",
    detail: "Deploy contínuo, telemetria em produção e escala orientada a dados.",
  },
];

const projects: Project[] = [
  {
    number: "01",
    title: "ClockHub",
    category: "Marketplace de relógios autênticos",
    filterGroup: "saas",
    year: "2026",
    description:
      "Marketplace para compra e venda de relógios com foco em confiança, descoberta de modelos e uma experiência premium para clientes reais.",
    tags: ["React", "Marketplace", "SEO"],
    liveUrl: "https://clockhub.com.br/",
    image: "/projects/clockhub-shot.png",
    imagePosition: "center top",
    featured: true,
  },
  {
    number: "02",
    title: "BuyTicket Brasil",
    category: "Marketplace de ingressos · Migração",
    filterGroup: "saas",
    year: "2026",
    description:
      "Colaboração na migração tecnológica do maior mercado secundário de ingressos do Brasil, garantindo alta disponibilidade, busca rápida e compra e revenda seguras para grandes eventos.",
    tags: ["Migração de Sistema", "Marketplace", "Alta Performance", "Eventos"],
    liveUrl: "https://buyticketbrasil.com/",
    statusLabel: "Colaboração na migração",
    image: "/projects/buyticket-shot.png",
    imagePosition: "center top",
    featured: true,
  },
  {
    number: "03",
    title: "PAN — Apoio ao Neurodivergente",
    category: "App mobile & saúde multidisciplinar",
    filterGroup: "mobile",
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
    filterGroup: "saas",
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
    filterGroup: "saas",
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
    filterGroup: "apps",
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
    filterGroup: "saas",
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
    filterGroup: "apps",
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
    filterGroup: "apps",
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
    role: "AI Engineer & Founder",
    company: "Mathix Labs",
    type: "Software & IA Studio",
    period: "2026 - o momento",
    location: "Brasil · Global",
    paragraphs: [
      "Liderança técnica e engenharia de soluções sob medida em software, Inteligência Artificial, automação inteligente e arquitetura de sistemas escaláveis para empresas e produtos digitais.",
      "Do diagnóstico do problema ao deploy em produção: descoberta, planejamento, desenvolvimento full stack, integração de agentes de IA e evolução contínua orientada a resultados reais.",
    ],
    skills: [
      "Engineering Intelligence",
      "Software sob Medida",
      "Agentes de IA & LLMs",
      "Automação & Integrações",
      "Arquitetura Cloud",
      "Produtos SaaS & Mobile",
    ],
  },
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
  "Agentes & Automação",
  "TypeScript",
  "React & Next.js",
  "Node.js & FastAPI",
  "Flutter",
  "PostgreSQL & Cloud",
  "Arquitetura de Sistemas",
  "APIs & Integrações",
];

const linkedIn = "https://www.linkedin.com/in/lucas-mathias-paix%C3%A3o-84a62b198/";

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
  );
}

function MathixMonogram({ className = "mathix-mark" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="mathixElectricGrad"
          x1="56"
          y1="8"
          x2="106"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="55%" stopColor="#1682FF" />
          <stop offset="100%" stopColor="#0B5ED7" />
        </linearGradient>
      </defs>
      <path
        d="M16 96V16L60 54L74 41.5V62.5L60 75L34 52V96H16Z"
        fill="#F4F7FB"
      />
      <path
        d="M64 38L104 4V25.5L64 59.5V38Z"
        fill="url(#mathixElectricGrad)"
      />
      <path
        d="M86 45.5L104 30V96H86V45.5Z"
        fill="url(#mathixElectricGrad)"
      />
    </svg>
  );
}

function SolutionIcon({ type }: { type: SolutionPillar["icon"] }) {
  if (type === "ai") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 3a4 4 0 0 0-4 4v1a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3v1a4 4 0 0 0 8 0v-1a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3V7a4 4 0 0 0-4-4Z" />
        <path d="M12 3v18M8 9h8M8 15h8" />
      </svg>
    );
  }
  if (type === "software") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="8 7 3 12 8 17" />
        <polyline points="16 7 21 12 16 17" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    );
  }
  if (type === "automation") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="12" cy="18" r="3" />
      <path d="M8.7 7.5 15.3 7.5M7.5 8.6l3.2 6.8M16.5 8.6l-3.2 6.8" />
    </svg>
  );
}

function NeuralNetworkCanvas({ pulseBoost }: { pulseBoost: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const boostRef = useRef(0);

  useEffect(() => {
    if (pulseBoost > 0) {
      boostRef.current = 1;
    }
  }, [pulseBoost]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let width = (canvas.width = canvas.offsetWidth || 520);
    let height = (canvas.height = canvas.offsetHeight || 520);

    const pointer = { x: width / 2, y: height / 2, active: false };

    const nodeCount = 34;
    const nodes = Array.from({ length: nodeCount }, (_, i) => {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 56 + (i % 4) * 44;
      return {
        x: width / 2 + Math.cos(angle) * radius,
        y: height / 2 + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: i % 5 === 0 ? 3.2 : 2,
        pulse: Math.random() * Math.PI * 2,
      };
    });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 520;
      height = canvas.height = canvas.offsetHeight || 520;
    };

    const handleMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active =
        pointer.x >= 0 &&
        pointer.x <= width &&
        pointer.y >= 0 &&
        pointer.y <= height;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handleMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const speedMult = 1 + boostRef.current * 2.2;
      boostRef.current *= 0.95;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.pulse += 0.035 * speedMult;
        n.x += n.vx * speedMult;
        n.y += n.vy * speedMult;

        const margin = 26;
        if (n.x < margin || n.x > width - margin) n.vx *= -1;
        if (n.y < margin || n.y > height - margin) n.vy *= -1;

        if (pointer.active) {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 155 && dist > 1) {
            n.x += (dx / dist) * 0.55;
            n.y += (dy / dist) * 0.55;
          }
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * (0.42 + boostRef.current * 0.35);
            ctx.strokeStyle = `rgba(22, 130, 255, ${Math.min(0.9, alpha).toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();

            if ((i + j) % 6 === 0) {
              const t = (Math.sin(n.pulse * 0.85 + i) + 1) * 0.5;
              const px = n.x + (m.x - n.x) * t;
              const py = n.y + (m.y - n.y) * t;
              ctx.fillStyle = "rgba(244, 247, 251, 0.9)";
              ctx.beginPath();
              ctx.arc(px, py, 1.6, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }

        const glow = (Math.sin(n.pulse) + 1) * 0.5;
        ctx.fillStyle = i % 4 === 0 ? "#F4F7FB" : "#1682FF";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + glow * 0.9, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-canvas" aria-hidden="true" />;
}

function handleSpotlightMove(event: React.PointerEvent<HTMLElement>) {
  if (event.pointerType !== "mouse") return;
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const tiltX = ((y - centerY) / centerY) * -4.2;
  const tiltY = ((x - centerX) / centerX) * 4.2;

  el.style.setProperty("--mouse-x", `${x}px`);
  el.style.setProperty("--mouse-y", `${y}px`);
  el.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
  el.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
}

function handleSpotlightLeave(event: React.PointerEvent<HTMLElement>) {
  const el = event.currentTarget;
  el.style.setProperty("--tilt-x", "0deg");
  el.style.setProperty("--tilt-y", "0deg");
}

function handleMagneticMove(event: React.PointerEvent<HTMLElement>) {
  if (event.pointerType !== "mouse") return;
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = event.clientX - (rect.left + rect.width / 2);
  const y = event.clientY - (rect.top + rect.height / 2);
  el.style.transform = `translate3d(${x * 0.18}px, ${y * 0.18}px, 0)`;
}

function handleMagneticLeave(event: React.PointerEvent<HTMLElement>) {
  const el = event.currentTarget;
  el.style.transform = "translate3d(0, 0, 0)";
}

function handleArtMove(event: React.PointerEvent<HTMLElement>) {
  if (event.pointerType !== "mouse") return;
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  el.style.setProperty("--art-tilt-x", `${(-y * 16).toFixed(2)}deg`);
  el.style.setProperty("--art-tilt-y", `${(x * 16).toFixed(2)}deg`);
}

function handleArtLeave(event: React.PointerEvent<HTMLElement>) {
  const el = event.currentTarget;
  el.style.setProperty("--art-tilt-x", "0deg");
  el.style.setProperty("--art-tilt-y", "0deg");
}

function ProjectCard({
  project,
  isDimmed,
}: {
  project: Project;
  isDimmed: boolean;
}) {
  const hostLabel =
    project.previewHost ??
    (project.liveUrl ? new URL(project.liveUrl).hostname : "preview");

  const visualContent = (
    <>
      <div className="project-browser" aria-hidden="true">
        <span className="browser-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-host">{hostLabel}</span>
        <span className="browser-status">
          {project.liveUrl ? "LIVE ↗" : "DEV ●"}
        </span>
      </div>
      <img
        src={project.image}
        alt={`Preview do projeto ${project.title}`}
        style={{ objectPosition: project.imagePosition ?? "center" }}
        loading="lazy"
        width="1200"
        height="750"
      />
      <div className="project-scanline" aria-hidden="true" />
      {project.liveUrl && (
        <span className="open-project">
          <Arrow />
        </span>
      )}
    </>
  );

  return (
    <article
      className={`project reveal bezel-shell spotlight-card ${
        project.featured ? "project-featured" : ""
      } ${isDimmed ? "project-dimmed" : ""}`}
      onPointerMove={handleSpotlightMove}
      onPointerLeave={handleSpotlightLeave}
    >
      <div className="bezel-core project-core">
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
                <span>{project.title}</span>
                <span className="inline-island-icon">
                  <Arrow />
                </span>
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
      </div>
    </article>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [projectFilter, setProjectFilter] = useState<
    "all" | "saas" | "mobile" | "apps"
  >("all");
  const [pulseBoost, setPulseBoost] = useState(0);

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
    const interval = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 3200);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((item, index) => {
      item.classList.add("will-reveal");
      (item as HTMLElement).style.setProperty("--reveal-index", `${index % 6}`);
      observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main id="top" className="od-workspace">
      <div className="cyber-grid-bg" aria-hidden="true" />
      <div className="ambient-glow glow-one" aria-hidden="true" />
      <div className="ambient-glow glow-two" aria-hidden="true" />
      <div className="cursor-follower" aria-hidden="true" />

      <a className="skip-link" href="#projetos">
        Pular para projetos
      </a>

      {/* FLUID ISLAND NAVBAR */}
      <div className="island-header-wrap">
        <header className="site-header island-header">
          <div
            className="scroll-progress-line"
            style={{ transform: `scaleX(${scrollProgress / 100})` }}
            aria-hidden="true"
          />
          <a
            className="logo brand-logo"
            href="#top"
            aria-label="Mathix Labs — Lucas Mathias Paixão, início"
          >
            <MathixMonogram className="header-monogram" />
            <span className="brand-wordmark">
              <strong>MATHIX</strong>
              <small>LABS</small>
            </span>
          </a>
          <nav aria-label="Navegação principal">
            <a href="#solucoes">Soluções</a>
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
              title={
                theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"
              }
            >
              <span className="theme-icon" aria-hidden="true">
                {theme === "dark" ? "☀" : "☾"}
              </span>
              <span>{theme === "dark" ? "Claro" : "Escuro"}</span>
            </button>
            <a className="availability island-cta-mini" href="#contato">
              <i />
              <span>Construir projeto</span>
              <span className="mini-island-circle" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </header>
      </div>

      {/* HERO — EDITORIAL SPLIT + DOUBLE-BEZEL 3D CORE */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-kicker">
          <span className="kicker-badge">
            <i>◈</i> MATHIX LABS // AI &amp; SOFTWARE ENGINEERING
          </span>
          <span>ENGINEERING INTELLIGENCE · SÃO PAULO, BR ↗</span>
        </div>

        <div className="hero-content">
          <div className="hero-copy od-stack">
            <div className="intro-pill">
              <span className="intro-dot" aria-hidden="true" />
              <p className="intro">
                Lucas Mathias Paixão · AI Engineer &amp; Founder @ Mathix Labs · MVP Builders
              </p>
            </div>

            <h1 id="hero-title">
              Engineering
              <br />
              Intelligence.
              <br />
              <em>Software &amp; IA.</em>
            </h1>

            <p className="hero-description">
              Desenvolvemos soluções inteligentes em software, IA e sistemas para
              um futuro mais eficiente. Arquitetura sob medida, automação de
              processos e produtos digitais construídos para escalar.
            </p>

            <div className="hero-pillars od-cluster" aria-label="Pilares da Mathix Labs">
              <span>
                <i>◈</i> Desenvolvimento sob medida
              </span>
              <span>
                <i>◈</i> Inteligência Artificial
              </span>
              <span>
                <i>◈</i> Automação e integrações
              </span>
            </div>

            <div className="hero-actions od-cluster">
              <a
                className="button island-button"
                href="#projetos"
                onPointerMove={handleMagneticMove}
                onPointerLeave={handleMagneticLeave}
              >
                <span>Explorar projetos</span>
                <span className="btn-island-icon">
                  <Arrow />
                </span>
              </a>
              <a
                className="button button-secondary island-button"
                href="#solucoes"
                onPointerMove={handleMagneticMove}
                onPointerLeave={handleMagneticLeave}
              >
                <span>Nossas soluções</span>
                <span className="btn-island-icon">⚡</span>
              </a>
              <a className="text-link" href="#contato">
                Vamos construir algo inteligente? <span>↘</span>
              </a>
            </div>
          </div>

          {/* DOUBLE-BEZEL 3D HARDWARE CORE */}
          <div
            className="hero-art-shell bezel-shell"
            onPointerMove={handleArtMove}
            onPointerLeave={handleArtLeave}
          >
            <div className="hero-art bezel-core" aria-hidden="true">
              <NeuralNetworkCanvas pulseBoost={pulseBoost} />
              <div className="art-coordinate">
                <span>MATHIX LABS // CORE V3.0</span>
                <span className="live-telemetry">● TELEMETRIA ATIVA · 99.98%</span>
              </div>

              <div className="orbital">
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="orbit orbit-three" />
                <div className="orbit orbit-four" />
                <span className="satellite" />
                <span className="satellite satellite-two" />
                <span className="satellite satellite-three" />
              </div>

              <div className="orb-core-monogram">
                <div className="monogram-halo" />
                <MathixMonogram className="hero-monogram-svg" />
                <span className="monogram-caption">MATHIX LABS</span>
                <span className="monogram-sub">ENGINEERING INTELLIGENCE.</span>
              </div>

              <div className="hud-floating hud-top-right">
                <span className="hud-dot" />
                <span>IA · SOFTWARE · AUTOMAÇÃO</span>
              </div>

              <div className="hud-floating hud-bottom-left">
                <span>LATÊNCIA: 14.2ms · CLOUD READY</span>
              </div>

              <button
                type="button"
                className="core-pulse-trigger"
                onClick={() => setPulseBoost((p) => p + 1)}
                tabIndex={-1}
              >
                ⚡ Disparar pulso neural
              </button>

              <div className="art-label">
                <span>
                  SISTEMAS INTELIGENTES.
                  <br />
                  RESULTADOS REAIS.
                </span>
                <span className="art-symbol">↗</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-foot">
          <a href="#solucoes">
            <span className="scroll-line" />
            ROLE PARA EXPLORAR A ARQUITETURA
          </a>
          <span>IDEIAS INTELIGENTES. SOFTWARE REAL. ENGENHARIA COM PROPÓSITO.</span>
          <span>MATHIX LABS — 2026</span>
        </div>
      </section>

      <div className="discipline-band" aria-hidden="true">
        <div>
          {[0, 1].map((n) => (
            <span key={n}>
              MATHIX LABS <i>◈</i> ENGINEERING INTELLIGENCE <i>◈</i> DESENVOLVIMENTO
              SOB MEDIDA <i>◈</i> INTELIGÊNCIA ARTIFICIAL <i>◈</i> AUTOMAÇÃO &amp;
              INTEGRAÇÕES <i>◈</i> ARQUITETURA ESCALÁVEL <i>◈</i>{" "}
            </span>
          ))}
        </div>
      </div>

      {/* SOLUTIONS & PROCESS SECTION (SEM ARCHITECTURE-CONSOLE) */}
      <section className="solutions-section" id="solucoes">
        <div className="section-title reveal">
          <div>
            <span className="eyebrow">00 / ECOSSISTEMA MATHIX LABS</span>
            <h2>
              Ideias inteligentes.
              <br />
              <em>Software real.</em>
            </h2>
          </div>
          <div className="section-aside">
            <span className="small-star">◈</span>
            <p>
              Engenharia de software e Inteligência Artificial
              <br />
              desenhadas para resolver problemas reais de negócio.
            </p>
            <span className="eyebrow">IA · SOFTWARE · SISTEMAS · AUTOMAÇÃO</span>
          </div>
        </div>

        <div className="solutions-cards-grid">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="bezel-shell solution-shell reveal spotlight-card"
              onPointerMove={handleSpotlightMove}
              onPointerLeave={handleSpotlightLeave}
            >
              <div className="bezel-core solution-core">
                <div className="solution-top">
                  <span className="solution-tag">{item.tag}</span>
                  <div className="solution-icon" aria-hidden="true">
                    <SolutionIcon type={item.icon} />
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="solution-foot">
                  <span className="eyebrow">{item.code}</span>
                  <span className="solution-stack">{item.metrics}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DOUBLE-BEZEL 5-STAGE PROCESS PIPELINE */}
        <div
          className="process-banner bezel-shell reveal spotlight-card"
          onPointerMove={handleSpotlightMove}
          onPointerLeave={handleSpotlightLeave}
        >
          <div className="bezel-core process-core">
            <div className="process-header">
              <div>
                <span className="eyebrow">NOSSO PROCESSO // MÉTODO &amp; PRECISÃO</span>
                <h3>
                  Do problema à <em>solução.</em>
                </h3>
              </div>
              <p>
                Engenharia ponta a ponta: cada etapa entrega artefatos claros,
                auditáveis e orientados a resultado.
              </p>
            </div>
            <div className="process-track">
              {processSteps.map((s, idx) => (
                <div
                  key={s.step}
                  className={`process-step ${idx === activeStep ? "is-active" : ""}`}
                  onPointerEnter={() => setActiveStep(idx)}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="process-step-head">
                    <span className="process-num">{s.step}</span>
                    <span className="process-connector" aria-hidden="true" />
                  </div>
                  <h4>{s.name}</h4>
                  <p>{s.detail}</p>
                  <span className="process-deliverable">{s.deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION — DOUBLE-BEZEL HARDWARE CARDS + INTERACTIVE FILTER */}
      <section className="projects-section" id="projetos">
        <div className="section-title reveal">
          <div>
            <span className="eyebrow">01 / PROJETOS &amp; SISTEMAS REAIS</span>
            <h2>
              Do conceito
              <br />
              ao <em>mundo real.</em>
            </h2>
          </div>
          <div className="section-aside">
            <div className="project-filters" role="group" aria-label="Filtrar projetos">
              <button
                type="button"
                className={`filter-pill ${projectFilter === "all" ? "is-active" : ""}`}
                onClick={() => setProjectFilter("all")}
              >
                Todos <span>09</span>
              </button>
              <button
                type="button"
                className={`filter-pill ${projectFilter === "saas" ? "is-active" : ""}`}
                onClick={() => setProjectFilter("saas")}
              >
                Marketplaces &amp; SaaS <span>05</span>
              </button>
              <button
                type="button"
                className={`filter-pill ${projectFilter === "mobile" ? "is-active" : ""}`}
                onClick={() => setProjectFilter("mobile")}
              >
                Mobile &amp; Saúde <span>01</span>
              </button>
              <button
                type="button"
                className={`filter-pill ${projectFilter === "apps" ? "is-active" : ""}`}
                onClick={() => setProjectFilter("apps")}
              >
                E-commerce &amp; Apps <span>03</span>
              </button>
            </div>
            <span className="eyebrow">2026 — SELEÇÃO DE PROJETOS (09)</span>
          </div>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
              isDimmed={
                projectFilter !== "all" && project.filterGroup !== projectFilter
              }
            />
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION — DOUBLE-BEZEL BENTO */}
      <section className="experience-section" id="experiencia">
        <div className="section-title reveal">
          <div>
            <span className="eyebrow">02 / EXPERIÊNCIA &amp; LIDERANÇA TÉCNICA</span>
            <h2>
              Engenharia com
              <br />
              <em>inteligência aplicada.</em>
            </h2>
          </div>
          <div className="section-aside">
            <span className="small-star">◈</span>
            <p>
              Construindo sistemas modernos de ponta a ponta
              <br />
              com IA integrada ao ciclo de engenharia.
            </p>
            <span className="eyebrow">MATHIX LABS &amp; MVP BUILDERS</span>
          </div>
        </div>

        <div className="experience-list">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="experience-card bezel-shell reveal spotlight-card"
              onPointerMove={handleSpotlightMove}
              onPointerLeave={handleSpotlightLeave}
            >
              <div className="bezel-core experience-core">
                <div className="experience-header">
                  <div className="experience-brand">
                    <div className="company-logo" aria-hidden="true">
                      {exp.company === "Mathix Labs" ? (
                        <MathixMonogram className="exp-monogram" />
                      ) : (
                        <span>◈</span>
                      )}
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
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT / FOUNDER SECTION */}
      <section className="about" id="sobre">
        <div className="about-top reveal">
          <span className="eyebrow">03 / CONHEÇA O FUNDADOR</span>
          <span className="eyebrow">ENGINEERING INTELLIGENCE // MATHIX LABS</span>
        </div>
        <div className="about-grid">
          <div
            className="about-identity bezel-shell reveal spotlight-card"
            onPointerMove={handleSpotlightMove}
            onPointerLeave={handleSpotlightLeave}
          >
            <div className="bezel-core identity-core">
              <div className="identity-art">
                <div className="portrait-Coord" aria-hidden="true">
                  <span>MATHIX LABS // 2026</span>
                  <span>AI ENGINEER &amp; FOUNDER</span>
                </div>
                <div className="portrait-halo" aria-hidden="true" />
                <div className="portrait-ring" aria-hidden="true" />
                <i aria-hidden="true">◈</i>
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
                <span>AI ENGINEER &amp; FOUNDER @ MATHIX LABS</span>
              </div>
            </div>
          </div>

          <div className="about-copy reveal">
            <span className="founder-kicker">
              <i>◈</i> LIDERANÇA TÉCNICA &amp; ARQUITETURA
            </span>
            <h2>
              Por trás da tecnologia,
              <br />
              <em>
                existe
                <br />
                engenharia.
              </em>
            </h2>
            <p>
              Sou <strong>Lucas Mathias Paixão</strong>, fundador da{" "}
              <strong>Mathix Labs</strong> e AI Engineer na{" "}
              <strong>MVP Builders</strong>. Especialista em transformar desafios de
              negócio em software sob medida, arquiteturas escaláveis e aplicações
              potencializadas por Inteligência Artificial.
            </p>
            <p>
              Uma solução começa com uma pergunta: qual problema real estamos
              resolvendo? Combinamos método, engenharia de software moderna e
              automação inteligente para entregar sistemas rápidos, seguros e com
              design de alto impacto.
            </p>
            <div className="about-links">
              <a
                className="button island-button"
                href="/curriculo.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span>Baixar currículo</span>
                <span className="btn-island-icon">
                  <Arrow />
                </span>
              </a>
              <a
                className="button button-secondary island-button"
                href={linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                <span>Conectar no LinkedIn</span>
                <span className="btn-island-icon">
                  <Arrow />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="skills-row reveal">
          <span className="eyebrow">
            STACK &amp; TECNOLOGIAS
            <br />
            MATHIX LABS
          </span>
          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* DOUBLE-BEZEL CTA ISLAND SECTION */}
      <section className="contact" id="contato">
        <div className="contact-shell bezel-shell reveal">
          <div className="contact-core bezel-core">
            <div className="contact-top">
              <span className="eyebrow">04 / VAMOS CONVERSAR</span>
              <span className="availability">
                <i />
                Tem um projeto em mente? Vamos transformar em software
              </span>
            </div>
            <div className="contact-main">
              <p>Conte seu desafio. Nós te ajudamos a transformar em realidade.</p>
              <a href={linkedIn} target="_blank" rel="noreferrer">
                <span>
                  Vamos construir sua
                  <br />
                  <em>próxima solução?</em>
                </span>
                <span
                  className="contact-arrow"
                  onPointerMove={handleMagneticMove}
                  onPointerLeave={handleMagneticLeave}
                >
                  <Arrow />
                </span>
              </a>
            </div>
            <div className="contact-bottom">
              <span>
                Mathix Labs | Software, Sistemas &amp; Inteligência Artificial sob
                medida.
              </span>
              <a className="text-link" href={linkedIn} target="_blank" rel="noreferrer">
                Iniciar uma conversa <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <a className="logo brand-logo" href="#top" aria-label="Voltar ao início">
          <MathixMonogram className="header-monogram" />
          <span className="brand-wordmark">
            <strong>MATHIX</strong>
            <small>LABS</small>
          </span>
        </a>
        <span>
          © 2026 MATHIX LABS · LUCAS MATHIAS PAIXÃO — ENGINEERING INTELLIGENCE.
        </span>
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
        <a
          href="#top"
          className="back-top"
          aria-label="Voltar ao topo"
          onPointerMove={handleMagneticMove}
          onPointerLeave={handleMagneticLeave}
        >
          ↑
        </a>
      </footer>
    </main>
  );
}
