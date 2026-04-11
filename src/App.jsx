 import { useState, useEffect, useRef } from "react";

const NAV = ["Work", "Skills", "Experience", "About", "Contact"];

const PROJECTS = [
  {
    id: "01",
    name: "B6 Club",
    sub: "Financial Management System",
    role: "Founder & Developer",
    period: "2024 – Present",
    desc: "Full-stack production platform managing group savings, loans, interest calculations, and financial reporting for real users. Complex business logic, partial payment handling, audit trails, and role-based access control.",
    data: "Applied Python (Pandas, Matplotlib) and SQL to analyse member transaction data — generating visual reports on monthly savings trends, loan repayment rates, and financial summaries for informed decision-making.",
    stack: ["Node.js", "Express", "MongoDB", "React", "TypeScript", "Next.js", "Tailwind CSS"],
    link: "https://theb6cluborg.org",
    cta: "Visit Live",
    highlight: "Real users. Real financial data. Production-grade.",
  },
  {
    id: "02",
    name: "WeTalkCare",
    sub: "UK Social Care Community Platform",
    role: "Contract Developer — Nest Social Care Ltd",
    period: "Aug – Dec 2023",
    desc: "Full UK care community platform with posts, articles, user profiles, resources, and community features. Migrated the client's WordPress site to a custom Laravel/MySQL solution, significantly improving performance and scalability.",
    data: "Used SQL and Python to analyse platform usage — visualising user engagement trends, content performance, and care provider activity through clear charts for non-technical stakeholders.",
    stack: ["Laravel", "MySQL", "PHP", "Custom CMS", "Data Analytics"],
    link: null,
    cta: "Currently unavailable",
    highlight: "Actively used by UK carers and care professionals.",
  },
  {
    id: "03",
    name: "First Aid App",
    sub: "Android Capstone Project",
    role: "Developer — Chuka University",
    period: "2020",
    desc: "Emergency first-aid guide application for Android. Offline-capable with step-by-step emergency procedures.",
    data: null,
    stack: ["Java", "Android SDK", "SQLite"],
    link: null,
    cta: "Repo on request",
    highlight: "Capstone project — distinction grade.",
  },
];

const COMING_SOON = [
  {
    name: "AI-Powered Analytics Dashboard",
    desc: "A data analytics platform with integrated LLM capabilities — natural language querying of datasets, automated insight generation, and interactive visualisations. Built on Python, React, and OpenAI APIs.",
    stack: ["Python", "React", "OpenAI API", "PostgreSQL", "FastAPI"],
    eta: "Summer 2026",
  },
  {
    name: "Smart Data Pipeline Tool",
    desc: "Automated data ingestion, cleaning, and reporting pipeline with AI-assisted anomaly detection and trend forecasting. Designed for small businesses to get enterprise-grade analytics.",
    stack: ["Python", "Pandas", "Node.js", "MongoDB", "ML"],
    eta: "Summer 2026",
  },
  {
    name: "AI Content & SEO Platform",
    desc: "Full-stack platform leveraging LLMs for content strategy, SEO optimisation, and performance tracking — with dashboards showing real-time analytics and AI-generated recommendations.",
    stack: ["Next.js", "TypeScript", "OpenAI API", "MySQL"],
    eta: "Summer 2026",
  },
];

const SKILLS = [
  { cat: "Data Analysis",  items: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL", "PostgreSQL", "MySQL", "Data Visualisation", "EDA", "Reporting"] },
  { cat: "Frontend",       items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Vite", "HTML5", "CSS3"] },
  { cat: "Backend",        items: ["Node.js", "Express.js", "Laravel", "PHP", "REST API Design", "JWT Auth", "RBAC"] },
  { cat: "Databases",      items: ["PostgreSQL", "MongoDB", "MySQL", "Query Optimisation", "Schema Design"] },
  { cat: "AI & Safety",    items: ["OpenAI API", "LLM Integration", "RLHF Annotation", "LLM Evaluation", "Adversarial Testing", "Prompt Engineering"] },
  { cat: "Cloud & Tools",  items: ["DigitalOcean VPS", "cPanel", "Git", "GitHub", "VS Code"] },
];

const EXPERIENCE = [
  {
    title: "Data Analyst & Senior Full-Stack Developer",
    company: "Independent Projects & Client Work (Remote)",
    period: "2023 – Present",
    bullets: [
      "Analyse complex datasets using Python (Pandas, NumPy, Matplotlib) and SQL to identify trends and deliver data-driven insights",
      "Build interactive dashboards and data visualisations for non-technical stakeholders",
      "Integrate AI/LLM capabilities into full-stack applications using OpenAI and related APIs",
      "Design and build full-stack web applications using Node.js, React, TypeScript, Next.js, and MongoDB",
      "Implemented secure authentication systems using JWT and RBAC across multiple client platforms",
    ],
  },
  {
    title: "AI Safety Annotator (Contractor)",
    company: "AI Safety Annotation Project (Remote)",
    period: "2025 – Present",
    bullets: [
      "Evaluate AI model responses for safety violations, factual accuracy, and policy compliance at scale",
      "Apply structured annotation workflows with quality scoring and improvement recommendations",
      "Adversarial testing, prompt injection analysis, and RLHF feedback workflows",
    ],
  },
  {
    title: "Data Analyst & Web Developer",
    company: "Nest Social Care Ltd — WeTalkCare",
    period: "Aug 2023 – Dec 2023",
    bullets: [
      "Built a structured UK care providers directory platform aligned to real client operational needs",
      "Migrated system from WordPress to custom Laravel/MySQL, significantly improving performance",
      "Analysed platform data to track search patterns, directory usage, and provider engagement",
      "Presented data findings to client to inform content and feature decisions",
    ],
  },
  {
    title: "Data Analyst",
    company: "Agmond International",
    period: "Sep 2021 – Jul 2022",
    bullets: [
      "Collected and analysed data from farmer registration programmes for coffee cooperatives",
      "Built automated SQL reporting tools — reducing manual data processing by 25%",
      "Tracked registration volumes, geographic distribution, and yield data for management reporting",
    ],
  },
  {
    title: "Data Analyst & ICT Manager",
    company: "Libertech Solutions",
    period: "2019 – 2021",
    bullets: [
      "Built internal SQL tools to analyse monthly sales data and generate management reports",
      "Designed and maintained database systems for HR, inventory, and operational KPIs",
      "Led cross-functional teams to implement IT upgrades and quality tracking tools",
    ],
  },
];

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

function Cursor() {
  const ring = useRef(null);
  const dot  = useRef(null);
  useEffect(() => {
    const mv = (e) => {
      if (ring.current) ring.current.style.transform = `translate(${e.clientX-15}px,${e.clientY-15}px)`;
      if (dot.current)  dot.current.style.transform  = `translate(${e.clientX-2.5}px,${e.clientY-2.5}px)`;
    };
    window.addEventListener("mousemove", mv);
    return () => window.removeEventListener("mousemove", mv);
  }, []);
  return (
    <>
      <div ref={ring} className="cursor-ring" />
      <div ref={dot}  className="cursor-dot"  />
    </>
  );
}

export default function App() {
  const scrollY = useScrollY();
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <Cursor />

      {/* NAV */}
      <header className={`nav ${scrollY > 40 ? "nav--scrolled" : ""}`}>
        <a href="/" className="nav__logo">
          <span className="nav__logo-mark">ES</span>
          <span className="nav__logo-name">Enoch Sagini</span>
        </a>
        <nav className="nav__links">
          {NAV.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="nav__link">{l}</a>)}
        </nav>
        <a href="mailto:orareenoch@gmail.com" className="nav__cta">Hire me</a>
        <button className="nav__burger" onClick={() => setMenu(!menu)}>
          <span /><span /><span />
        </button>
      </header>

      {menu && (
        <div className="mobile-menu">
          {NAV.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="mobile-menu__link" onClick={() => setMenu(false)}>{l}</a>
          ))}
          <a href="mailto:orareenoch@gmail.com" className="mobile-menu__link mobile-menu__link--cta">Hire me →</a>
        </div>
      )}

      {/* HERO */}
      <section className="hero">
        <div className="hero__grid" />
        <div className="hero__inner">
          <div className="hero__left">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Available for work · London / Remote
            </div>
            <h1 className="hero__headline">
              <span className="hero__line-1">Enoch</span>
              <span className="hero__line-2">Sagini</span>
            </h1>
            <p className="hero__role">Data Analyst & Senior Full-Stack Developer</p>
            <p className="hero__sub">
              5+ years deriving actionable insights from complex datasets and building scalable
              web applications. Python · SQL · React · Node.js · Laravel.
              Currently integrating AI & LLMs into production systems.
            </p>
            <div className="hero__actions">
              <a href="#work" className="btn btn--primary">See my work</a>
              <a href="/cv.pdf" className="btn btn--ghost">Download CV</a>
              <a href="https://github.com/IamSagini" target="_blank" rel="noreferrer" className="btn btn--ghost">GitHub ↗</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-num">5+</span>
                <span className="hero__stat-label">Years experience</span>
              </div>
              <div className="hero__stat-div" />
              <div className="hero__stat">
                <span className="hero__stat-num">2</span>
                <span className="hero__stat-label">Live production apps</span>
              </div>
              <div className="hero__stat-div" />
              <div className="hero__stat">
                <span className="hero__stat-num">3+</span>
                <span className="hero__stat-label">Shipping before summer</span>
              </div>
            </div>
          </div>

          {/* PHOTO */}
          <div className="hero__photo-wrap">
            <div className="hero__photo-frame">
              <img src="/photo.jpg" alt="Enoch Sagini" className="hero__photo" />
            </div>
            <div className="hero__online">
              <span className="hero__badge-dot" />
              Open to new opportunities
            </div>
          </div>
        </div>
        <div className="hero__scroll">scroll</div>
      </section>

      {/* AI BANNER */}
      <div className="ai-banner">
        <div className="ai-banner__inner">
          <div>
            <strong>Currently integrating AI into production</strong>
            <span> — Building LLM-powered analytics tools, working in AI safety annotation, and applying AI to real data problems.</span>
          </div>
          <a href="#skills" className="ai-banner__link">See AI skills →</a>
        </div>
      </div>

      {/* WORK */}
      <section className="section section--dark" id="work">
        <div className="container">
          <span className="section__eyebrow">Selected work</span>
          <h2 className="section__title">Things I've built</h2>
          <div className="projects">
            {PROJECTS.map(p => (
              <article key={p.id} className="project">
                <div className="project__num">{p.id}</div>
                <div className="project__body">
                  <div className="project__meta">
                    <span className="project__role">{p.role}</span>
                    <span className="project__period">{p.period}</span>
                  </div>
                  <h3 className="project__name">{p.name}</h3>
                  <p className="project__sub">{p.sub}</p>
                  <p className="project__desc">{p.desc}</p>
                  {p.data && (
                    <div className="project__data">
                      <strong>Data work:</strong> {p.data}
                    </div>
                  )}
                  <div className="project__highlight">↳ {p.highlight}</div>
                  <div className="project__stack">
                    {p.stack.map(s => <span key={s} className="tag">{s}</span>)}
                  </div>
                  {p.link
                    ? <a href={p.link} target="_blank" rel="noreferrer" className="project__link">{p.cta} →</a>
                    : <span className="project__link project__link--muted">{p.cta}</span>
                  }
                </div>
              </article>
            ))}
          </div>

          {/* COMING SOON */}
          <div className="coming-soon">
            <div className="coming-soon__header">
              <span className="section__eyebrow">In progress</span>
              <h3 className="coming-soon__title">Shipping before summer 2026</h3>
            </div>
            <div className="coming-soon__grid">
              {COMING_SOON.map((p, i) => (
                <div key={i} className="coming-card">
                  <div className="coming-card__eta">{p.eta}</div>
                  <h4 className="coming-card__name">{p.name}</h4>
                  <p className="coming-card__desc">{p.desc}</p>
                  <div className="coming-card__stack">
                    {p.stack.map(s => <span key={s} className="tag">{s}</span>)}
                  </div>
                  <div className="coming-card__status">
                    <span className="coming-card__dot" />
                    In development
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section section--mid" id="skills">
        <div className="container">
          <span className="section__eyebrow">Technical skills</span>
          <h2 className="section__title">What I work with</h2>
          <div className="skills-grid">
            {SKILLS.map(({ cat, items }) => (
              <div key={cat} className={`skills-card ${cat === "AI & Safety" ? "skills-card--highlight" : ""}`}>
                <h3 className="skills-card__title">{cat}</h3>
                <div className="skills-card__tags">
                  {items.map(s => <span key={s} className="tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section section--dark" id="experience">
        <div className="container">
          <span className="section__eyebrow">Career</span>
          <h2 className="section__title">Where I've worked</h2>
          <div className="timeline">
            {EXPERIENCE.map((e, i) => (
              <div key={i} className="timeline__item">
                <div className="timeline__dot" />
                <div className="timeline__content">
                  <div className="timeline__header">
                    <div>
                      <h3 className="timeline__title">{e.title}</h3>
                      <span className="timeline__company">{e.company}</span>
                    </div>
                    <span className="timeline__period">{e.period}</span>
                  </div>
                  <ul className="timeline__bullets">
                    {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="education">
            <span className="education__label">Education</span>
            <div className="education__grid">
              <div>
                <div className="education__degree">MSc Management</div>
                <div className="education__school">Keele University, United Kingdom</div>
                <div className="education__detail">Merit · 2022 – 2024</div>
              </div>
              <div>
                <div className="education__degree">BSc Computer Science</div>
                <div className="education__school">Chuka University, Kenya</div>
                <div className="education__detail">2:1 Upper Division · 2016 – 2020</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section section--light" id="about">
        <div className="container container--narrow">
          <span className="section__eyebrow section__eyebrow--ink">About</span>
          <h2 className="section__title section__title--ink">I build things that work</h2>
          <div className="about__body">
            <p>
              I'm a Data Analyst and Senior Full-Stack Developer based in London with 5+ years of experience
              across financial management, social care, and agricultural sectors. I specialise in Python (Pandas,
              Matplotlib, NumPy) and SQL for data analysis, and Node.js, React, and Laravel for full-stack development.
            </p>
            <p>
              I'm currently focused on integrating AI and LLMs into production systems — building tools that make
              data analysis smarter, faster, and more accessible. I also work in AI safety annotation, applying
              adversarial thinking to LLM evaluation and RLHF workflows.
            </p>
            <p>
              Bilingual in English and Swahili. Strong track record delivering projects remotely with no
              micromanagement. Available for UK, EU, and US remote roles in data analysis and full-stack development.
            </p>
            <div className="about__links">
              <a href="https://github.com/IamSagini" target="_blank" rel="noreferrer" className="about__link">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/IamSagini" target="_blank" rel="noreferrer" className="about__link">LinkedIn ↗</a>
              <a href="https://x.com/sir_sagini" target="_blank" rel="noreferrer" className="about__link">X / Twitter ↗</a>
              <a href="/cv.pdf" className="about__link">Download CV ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section--dark" id="contact">
        <div className="container container--narrow contact">
          <h2 className="contact__headline">Let's talk.</h2>
          <p className="contact__sub">
            Open to senior data analyst and full-stack engineering roles — remote, UK, EU, US and worldwide.
          </p>
          <a href="mailto:orareenoch@gmail.com" className="contact__email">orareenoch@gmail.com</a>
          <div className="contact__socials">
            <a href="https://github.com/IamSagini" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/IamSagini" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://x.com/sir_sagini" target="_blank" rel="noreferrer">X / Twitter</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Enoch Sagini</span>
        <span>Built with React & Tailwind</span>
      </footer>
    </div>
  );
}