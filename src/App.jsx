import { useState, useEffect, useRef } from "react";

// ── Router ──────────────────────────────────────────────────────────────────
function useRouter() {
  const [page, setPage] = useState(() => {
    try {
      return sessionStorage.getItem("pg") || "home";
    } catch {
      return "home";
    }
  });
  const navigate = (p) => {
    try {
      sessionStorage.setItem("pg", p);
    } catch {}
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return { page, navigate };
}

// ── Data ────────────────────────────────────────────────────────────────────
const ME = {
  name: "Olawuyi Peter Olatomiwa",
  short: "Peter",
  role: "Front-End Developer",
  location: "Ilorin, Kwara State, Nigeria",
  email: "peteroolawuyi@gmail.com",
  phone: "+234 9129732675",
  github: "github.com/Olatomiwa-Olawuyi",
  githubUrl: "https://github.com/Olatomiwa-Olawuyi",
  summary:
    "Economics student at Kwara State University with a strong interest in software development and digital innovation. Self-taught front-end developer with structured training completed through a 2-month intensive programme at Fadaqa. Experienced in building and deploying responsive web applications using HTML, CSS, JavaScript, and REST APIs — with React.js currently in progress. Passionate about problem-solving, product thinking, and contributing to fast-paced tech startup environments.",
  keyStrength:
    "Fast-learning developer with strong self-learning ability and hands-on experience building and deploying functional, real-world web applications.",
};

const SKILLS = [
  { name: "HTML5 & CSS3", level: 90, cat: "Core" },
  { name: "JavaScript", level: 82, cat: "Core" },
  { name: "Responsive Web Design", level: 88, cat: "Core" },
  { name: "REST API Integration", level: 78, cat: "Core" },
  { name: "Git & GitHub", level: 80, cat: "Tools" },
  { name: "React.js", level: 45, cat: "Learning", note: "In Progress" },
  { name: "VS Code", level: 85, cat: "Tools" },
  { name: "Chrome DevTools", level: 80, cat: "Tools" },
  { name: "GitHub Pages / Vercel", level: 82, cat: "Deployment" },
  { name: "Microsoft Excel", level: 70, cat: "Tools" },
];

const SOFT_SKILLS = [
  "Problem Solving",
  "Fast Learner",
  "Communication",
  "Adaptability",
  "Teamwork",
  "Attention to Detail",
];

const PROJECTS = [
  {
    title: "SmartSpend — Budget Tracker",
    desc: "A personal finance tracker that helps users manage income and expenses. Includes logic for categorising transactions, an interactive UI, and persistent state — all in vanilla JS.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Olatomiwa-Olawuyi/smartspend",
    live: "https://olatomiwa-olawuyi.github.io/smartspend/",
    icon: "💰",
    highlights: [
      "Transaction categorisation",
      "Responsive & interactive UI",
      "Deployed on GitHub Pages",
    ],
  },
  {
    title: "TommyWeather — Weather App",
    desc: "A responsive weather app powered by the OpenWeather API. Users can search any city and get real-time weather data with clean, dynamic rendering.",
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    github: "https://github.com/Olatomiwa-Olawuyi/tommyweather",
    live: "https://olatomiwa-olawuyi.github.io/tommyweather/",
    icon: "🌤",
    highlights: [
      "OpenWeather API integration",
      "Dynamic search",
      "Deployed on GitHub Pages",
    ],
  },
  {
    title: "TommyCalc — Calculator App",
    desc: "A clean, functional calculator covering all standard arithmetic operations with a responsive layout that works across screen sizes.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Olatomiwa-Olawuyi/tommycalc3",
    live: "https://olatomiwa-olawuyi.github.io/tommycalc3/",
    icon: "🔢",
    highlights: [
      "Full arithmetic logic",
      "Responsive UI",
      "Deployed on GitHub Pages",
    ],
  },
  {
    title: "Nova Tech — Capstone Website",
    desc: "A multi-page responsive website for a fictional tech company. Built as the capstone project during the Fadaqa intensive — focused on UI structure, responsiveness, and UX.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Olatomiwa-Olawuyi/novatech",
    live: "https://olatomiwa-olawuyi.github.io/novatech/",
    icon: "🖥",
    highlights: [
      "Multi-page structure",
      "UX-focused layout",
      "Capstone project",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Self-Taught & Structured Front-End Developer",
    company: "Independent / Fadaqa Training",
    period: "2024 – Present",
    type: "Training & Self-Led",
    points: [
      "Independently learned front-end development before formal training at Fadaqa.",
      "Completed a 2-month intensive front-end programme at Fadaqa.",
      "Built multiple real-world projects including API-based apps and budgeting tools.",
      "Gained experience deploying projects using GitHub Pages and Vercel.",
      "Continuously improving workflow and modern web development practices.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "B.Sc. Economics (In View)",
    school: "Kwara State University (KWASU)",
    period: "Expected 2026",
    note: "Combining formal economics study with self-driven software development.",
  },
];

const CERTS = [
  {
    name: "Front-End Development Certification",
    issuer: "Fadaqa",
    year: "2026",
    desc: "2-month intensive front-end programme.",
  },
];

const MEMBERSHIPS = [
  {
    org: "Chartered Institute of Taxation of Nigeria (CITN)",
    role: "Student Member",
  },
  {
    org: "Chartered Institute of Public Diplomacy and Management",
    role: "Member",
  },
];

const INTERESTS = [
  "Web Development",
  "Technology Startups",
  "Product Design",
  "Data Analysis",
  "Digital Innovation",
];

// ── Theme ────────────────────────────────────────────────────────────────────
const ACCENT = "#6366F1";
const ACCENT2 = "#818CF8";

function useTheme() {
  const [dark, setDark] = useState(false);
  const toggle = () => setDark((d) => !d);
  const t = {
    dark,
    bg: dark ? "#0B0F1C" : "#F7F8FC",
    surface: dark ? "#111827" : "#FFFFFF",
    surfaceAlt: dark ? "#1A2235" : "#EEF0F8",
    surfaceHover: dark ? "#1E2A3A" : "#E8EBFF",
    text: dark ? "#E4EAF4" : "#111827",
    textMuted: dark ? "#8B9AB5" : "#5C6680",
    border: dark ? "#1E2D45" : "#DDE1F0",
    accent: ACCENT,
    accent2: ACCENT2,
    tagBg: dark ? "#1E2D45" : "#ECEEFF",
    tagColor: dark ? "#818CF8" : "#4F46E5",
    cardHover: dark ? "rgba(99,102,241,0.15)" : "rgba(99,102,241,0.08)",
  };
  return { t, toggle };
}

// ── Layout ───────────────────────────────────────────────────────────────────
function Layout({ children, t, navigate, page, toggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: t.bg,
        color: t.text,
        minHeight: "100vh",
        transition: "background .3s, color .3s",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          background: scrolled
            ? t.dark
              ? "rgba(11,15,28,.95)"
              : "rgba(247,248,252,.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? `1px solid ${t.border}` : "none",
          transition: "all .3s",
          padding: "0 5vw",
          height: "66px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          onClick={() => navigate("home")}
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 700,
            fontSize: "1.15rem",
            color: ACCENT,
            cursor: "pointer",
            letterSpacing: "-0.5px",
          }}
        >
          &lt;PO /&gt;
        </div>

        {/* desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "2.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((l) => (
            <li
              key={l.id}
              onClick={() => {
                navigate(l.id);
                setMobileMenu(false);
              }}
              style={{
                cursor: "pointer",
                fontSize: ".88rem",
                fontWeight: page === l.id ? 600 : 400,
                color: page === l.id ? ACCENT : t.textMuted,
                borderBottom:
                  page === l.id
                    ? `2px solid ${ACCENT}`
                    : "2px solid transparent",
                paddingBottom: "2px",
                transition: "color .2s",
              }}
            >
              {l.label}
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
              background: t.surfaceAlt,
              border: `1px solid ${t.border}`,
              borderRadius: "50px",
              width: "50px",
              height: "26px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              padding: "2px 3px",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: ACCENT,
                transform: t.dark ? "translateX(24px)" : "translateX(0)",
                transition: "transform .3s",
                fontSize: "11px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {t.dark ? "🌙" : "☀️"}
            </div>
          </button>

          {/* mobile hamburger */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            style={{
              background: "none",
              border: "none",
              color: t.text,
              cursor: "pointer",
              fontSize: "1.4rem",
              display: "none",
            }}
            className="mob-ham"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      {mobileMenu && (
        <div
          style={{
            position: "fixed",
            top: "66px",
            left: 0,
            right: 0,
            zIndex: 199,
            background: t.surface,
            borderBottom: `1px solid ${t.border}`,
            padding: ".75rem 5vw",
          }}
        >
          {links.map((l) => (
            <div
              key={l.id}
              onClick={() => {
                navigate(l.id);
                setMobileMenu(false);
              }}
              style={{
                padding: ".75rem 0",
                cursor: "pointer",
                fontWeight: page === l.id ? 600 : 400,
                color: page === l.id ? ACCENT : t.text,
                borderBottom: `1px solid ${t.border}`,
              }}
            >
              {l.label}
            </div>
          ))}
        </div>
      )}

      <main style={{ paddingTop: "66px" }}>{children}</main>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: `1px solid ${t.border}`,
          padding: "2.5rem 5vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          color: t.textMuted,
          fontSize: ".82rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            color: ACCENT,
            fontWeight: 700,
          }}
        >
          &lt;PO /&gt;
        </span>
        <span>Built by Olawuyi Peter · {new Date().getFullYear()}</span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {links.map((l) => (
            <span
              key={l.id}
              onClick={() => navigate(l.id)}
              style={{ cursor: "pointer", transition: "color .2s" }}
              onMouseEnter={(e) => (e.target.style.color = ACCENT)}
              onMouseLeave={(e) => (e.target.style.color = t.textMuted)}
            >
              {l.label}
            </span>
          ))}
        </div>
      </footer>

      <style>{`
        @media(max-width:720px){
          nav ul{display:none!important}
          .mob-ham{display:flex!important}
        }
        *{box-sizing:border-box}
        ::selection{background:${ACCENT};color:#fff}
        input,textarea{outline:none}
      `}</style>
    </div>
  );
}

// ── Reusable ─────────────────────────────────────────────────────────────────
function SectionHeader({ label, title, t }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <div
        style={{
          fontSize: ".7rem",
          fontWeight: 700,
          color: ACCENT,
          letterSpacing: "3.5px",
          textTransform: "uppercase",
          marginBottom: ".5rem",
        }}
      >
        {label}
      </div>
      <h2
        style={{
          fontFamily: "'Space Grotesk',sans-serif",
          fontSize: "clamp(1.6rem,4vw,2.4rem)",
          fontWeight: 700,
          margin: 0,
          color: t.text,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          width: "44px",
          height: "3px",
          background: ACCENT,
          borderRadius: "2px",
          marginTop: ".75rem",
        }}
      />
    </div>
  );
}

function Card({ children, t, style = {}, hover = true }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => hover && setHov(true)}
      onMouseLeave={() => hover && setHov(false)}
      style={{
        background: t.surface,
        border: `1px solid ${t.border}`,
        borderRadius: "14px",
        padding: "1.5rem",
        transition: "transform .2s, box-shadow .2s",
        transform: hov ? "translateY(-4px)" : "none",
        boxShadow: hov ? `0 14px 40px ${t.cardHover}` : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ── Pages ────────────────────────────────────────────────────────────────────

// HOME
function HomePage({ t, navigate }) {
  const roles = [
    "Front-End Developer.",
    "Web App Builder.",
    "Problem Solver.",
    "Continuous Learner.",
  ];
  const [typedText, setTyped] = useState("");
  const [rIdx, setRIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = roles[rIdx];
    const id = setTimeout(
      () => {
        if (!del && cIdx < cur.length) {
          setTyped(cur.slice(0, cIdx + 1));
          setCIdx((c) => c + 1);
        } else if (!del && cIdx === cur.length) {
          setTimeout(() => setDel(true), 1800);
        } else if (del && cIdx > 0) {
          setTyped(cur.slice(0, cIdx - 1));
          setCIdx((c) => c - 1);
        } else {
          setDel(false);
          setRIdx((r) => (r + 1) % roles.length);
        }
      },
      del ? 50 : 80,
    );
    return () => clearTimeout(id);
  }, [cIdx, del, rIdx]);

  return (
    <div>
      {/* HERO */}
      <section
        style={{
          minHeight: "calc(100vh - 66px)",
          display: "flex",
          alignItems: "center",
          padding: "4rem 5vw",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: ".5rem",
              background: t.surfaceAlt,
              border: `1px solid ${t.border}`,
              borderRadius: "50px",
              padding: "5px 16px",
              marginBottom: "1.75rem",
              fontSize: ".8rem",
              color: t.textMuted,
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#22c55e",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            Open to opportunities
          </div>

          <h1
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: "clamp(2.4rem,7vw,5rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              margin: "0 0 1rem",
              color: t.text,
            }}
          >
            Hi, I'm <span style={{ color: ACCENT }}>Peter</span>
            <br />
            <span
              style={{
                color: t.textMuted,
                fontSize: "clamp(1.5rem,4.5vw,3.2rem)",
              }}
            >
              {typedText}
              <span style={{ color: ACCENT, animation: "blink 1s infinite" }}>
                |
              </span>
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              color: t.textMuted,
              maxWidth: "560px",
              lineHeight: 1.85,
              marginBottom: "2.5rem",
            }}
          >
            {ME.summary}
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "3rem",
            }}
          >
            <button
              onClick={() => navigate("projects")}
              style={{
                padding: ".8rem 2.2rem",
                borderRadius: "50px",
                border: "none",
                background: ACCENT,
                color: "#fff",
                fontWeight: 600,
                fontSize: ".9rem",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all .2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#4F46E5";
                e.target.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = ACCENT;
                e.target.style.transform = "none";
              }}
            >
              See My Work
            </button>
            <button
              onClick={() => navigate("contact")}
              style={{
                padding: ".8rem 2.2rem",
                borderRadius: "50px",
                border: `2px solid ${ACCENT}`,
                background: "transparent",
                color: ACCENT,
                fontWeight: 600,
                fontSize: ".9rem",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all .2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = ACCENT;
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = ACCENT;
              }}
            >
              Get in Touch
            </button>
          </div>

          {/* Quick stats */}
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              flexWrap: "wrap",
              paddingTop: "2rem",
              borderTop: `1px solid ${t.border}`,
            }}
          >
            {[
              ["4", "Projects Deployed"],
              ["2 mo", "Fadaqa Training"],
              ["3+", "Tech Stacks Used"],
            ].map(([n, l]) => (
              <div key={l}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk',sans-serif",
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    color: ACCENT,
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontSize: ".8rem",
                    color: t.textMuted,
                    marginTop: "2px",
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK SKILLS ROW */}
      <section style={{ background: t.surfaceAlt, padding: "3rem 5vw" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p
            style={{
              textAlign: "center",
              fontSize: ".78rem",
              color: t.textMuted,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Core Technologies
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: ".75rem",
              justifyContent: "center",
            }}
          >
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "REST APIs",
              "Git",
              "GitHub Pages",
              "Responsive Design",
              "React.js (In Progress)",
            ].map((s) => (
              <span
                key={s}
                style={{
                  background: t.tagBg,
                  color: t.tagColor,
                  borderRadius: "50px",
                  padding: "6px 18px",
                  fontSize: ".82rem",
                  fontWeight: 500,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS PREVIEW */}
      <section
        style={{ padding: "5rem 5vw", maxWidth: "1100px", margin: "0 auto" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <div
              style={{
                fontSize: ".7rem",
                fontWeight: 700,
                color: ACCENT,
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: ".4rem",
              }}
            >
              What I've Built
            </div>
            <h2
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: "clamp(1.4rem,3vw,2rem)",
                fontWeight: 700,
                margin: 0,
                color: t.text,
              }}
            >
              Featured Projects
            </h2>
          </div>
          <button
            onClick={() => navigate("projects")}
            style={{
              background: "none",
              border: `1px solid ${t.border}`,
              borderRadius: "50px",
              padding: "8px 20px",
              cursor: "pointer",
              color: t.textMuted,
              fontSize: ".82rem",
              fontFamily: "inherit",
              transition: "all .2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = ACCENT;
              e.target.style.color = ACCENT;
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = t.border;
              e.target.style.color = t.textMuted;
            }}
          >
            View all →
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
            gap: "1.25rem",
          }}
        >
          {PROJECTS.slice(0, 3).map((p) => (
            <Card key={p.title} t={t}>
              <div style={{ fontSize: "2rem", marginBottom: ".75rem" }}>
                {p.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: ".5rem",
                  color: t.text,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  color: t.textMuted,
                  fontSize: ".85rem",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                {p.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: t.tagBg,
                      color: t.tagColor,
                      borderRadius: "4px",
                      padding: "2px 8px",
                      fontSize: ".72rem",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
      `}</style>
    </div>
  );
}

// ABOUT
function AboutPage({ t }) {
  const [visSkills, setVisSkills] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    if (!skillRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisSkills(true);
      },
      { threshold: 0.2 },
    );
    obs.observe(skillRef.current);
    return () => obs.disconnect();
  }, []);

  const cats = [...new Set(SKILLS.map((s) => s.cat))];

  return (
    <div style={{ padding: "4rem 5vw", maxWidth: "1100px", margin: "0 auto" }}>
      <SectionHeader label="Who I Am" title="About Me" t={t} />

      {/* Bio + quick facts */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          marginBottom: "5rem",
          alignItems: "start",
        }}
      >
        <div>
          <p
            style={{
              color: t.textMuted,
              lineHeight: 1.9,
              fontSize: "1rem",
              marginBottom: "1.25rem",
            }}
          >
            {ME.summary}
          </p>
          <div
            style={{
              background: t.surfaceAlt,
              borderLeft: `3px solid ${ACCENT}`,
              padding: "1rem 1.25rem",
              borderRadius: "0 10px 10px 0",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: t.textMuted,
                fontSize: ".92rem",
                lineHeight: 1.8,
                margin: 0,
                fontStyle: "italic",
              }}
            >
              "{ME.keyStrength}"
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: ".6rem",
              marginTop: "1.5rem",
            }}
          >
            {INTERESTS.map((i) => (
              <span
                key={i}
                style={{
                  background: t.tagBg,
                  color: t.tagColor,
                  borderRadius: "50px",
                  padding: "5px 14px",
                  fontSize: ".78rem",
                  fontWeight: 500,
                }}
              >
                {i}
              </span>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { icon: "📍", label: "Location", val: ME.location },
            {
              icon: "🎓",
              label: "Education",
              val: "B.Sc. Economics – KWASU (In View, 2026)",
            },
            { icon: "💼", label: "Status", val: "Open to Work" },
            {
              icon: "🏫",
              label: "Training",
              val: "Fadaqa — Front-End Dev (2-month intensive)",
            },
          ].map(({ icon, label, val }) => (
            <Card
              key={label}
              t={t}
              hover={false}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem 1.25rem",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: t.surfaceAlt,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  flexShrink: 0,
                }}
              >
                {icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: ".72rem",
                    color: t.textMuted,
                    marginBottom: "2px",
                  }}
                >
                  {label}
                </div>
                <div style={{ fontWeight: 600, fontSize: ".9rem" }}>{val}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div ref={skillRef} style={{ marginBottom: "5rem" }}>
        <h3
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 700,
            fontSize: "1.3rem",
            marginBottom: "2rem",
            color: t.text,
          }}
        >
          Technical Skills
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
            gap: "1.25rem",
          }}
        >
          {SKILLS.map((s, i) => (
            <div key={s.name}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: ".5rem",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: ".9rem",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: ".4rem",
                  }}
                >
                  {s.name}
                  {s.note && (
                    <span
                      style={{
                        fontSize: ".65rem",
                        background: "#fef9c3",
                        color: "#92400e",
                        borderRadius: "4px",
                        padding: "1px 6px",
                        fontWeight: 600,
                      }}
                    >
                      {s.note}
                    </span>
                  )}
                </span>
                <span
                  style={{ fontSize: ".82rem", color: ACCENT, fontWeight: 600 }}
                >
                  {s.level}%
                </span>
              </div>
              <div
                style={{
                  background: t.border,
                  borderRadius: "4px",
                  height: "5px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    background: `linear-gradient(90deg,${ACCENT},${ACCENT2})`,
                    borderRadius: "4px",
                    transition: `width 1.1s ease ${i * 60}ms`,
                    width: visSkills ? `${s.level}%` : "0%",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: ".68rem",
                  color: t.textMuted,
                  marginTop: "3px",
                }}
              >
                {s.cat}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft skills */}
      <div style={{ marginBottom: "5rem" }}>
        <h3
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 700,
            fontSize: "1.3rem",
            marginBottom: "1.5rem",
            color: t.text,
          }}
        >
          Soft Skills
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem" }}>
          {SOFT_SKILLS.map((s) => (
            <span
              key={s}
              style={{
                background: t.surface,
                border: `1px solid ${t.border}`,
                borderRadius: "50px",
                padding: "8px 20px",
                fontSize: ".85rem",
                fontWeight: 500,
                color: t.text,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div style={{ marginBottom: "5rem" }}>
        <h3
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 700,
            fontSize: "1.3rem",
            marginBottom: "2rem",
            color: t.text,
          }}
        >
          Experience
        </h3>
        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          <div
            style={{
              position: "absolute",
              left: "7px",
              top: 0,
              bottom: 0,
              width: "2px",
              background: t.border,
            }}
          />
          {EXPERIENCE.map((e, i) => (
            <div key={i} style={{ position: "relative", marginBottom: "2rem" }}>
              <div
                style={{
                  position: "absolute",
                  left: "-29px",
                  top: "8px",
                  width: "13px",
                  height: "13px",
                  borderRadius: "50%",
                  background: ACCENT,
                  border: `3px solid ${t.bg}`,
                }}
              />
              <Card t={t} hover={false}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: ".5rem",
                    marginBottom: ".75rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontFamily: "'Space Grotesk',sans-serif",
                        fontSize: "1rem",
                      }}
                    >
                      {e.role}
                    </div>
                    <div
                      style={{
                        color: ACCENT,
                        fontWeight: 600,
                        fontSize: ".87rem",
                      }}
                    >
                      {e.company}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: ".25rem",
                    }}
                  >
                    <span
                      style={{
                        background: t.tagBg,
                        color: t.tagColor,
                        borderRadius: "50px",
                        padding: "3px 12px",
                        fontSize: ".72rem",
                        fontWeight: 600,
                      }}
                    >
                      {e.period}
                    </span>
                    <span style={{ fontSize: ".7rem", color: t.textMuted }}>
                      {e.type}
                    </span>
                  </div>
                </div>
                <ul
                  style={{
                    margin: 0,
                    padding: "0 0 0 1.1rem",
                    color: t.textMuted,
                    lineHeight: 1.8,
                    fontSize: ".9rem",
                  }}
                >
                  {e.points.map((pt, j) => (
                    <li key={j} style={{ marginBottom: ".25rem" }}>
                      {pt}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Education + Certs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          marginBottom: "5rem",
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 700,
              fontSize: "1.2rem",
              marginBottom: "1.5rem",
              color: t.text,
            }}
          >
            Education
          </h3>
          {EDUCATION.map((e, i) => (
            <Card key={i} t={t} hover={false}>
              <div style={{ fontSize: "1.5rem", marginBottom: ".5rem" }}>
                🎓
              </div>
              <div
                style={{
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: ".95rem",
                  marginBottom: ".25rem",
                }}
              >
                {e.degree}
              </div>
              <div
                style={{
                  color: ACCENT,
                  fontWeight: 600,
                  fontSize: ".85rem",
                  marginBottom: ".5rem",
                }}
              >
                {e.school}
              </div>
              <div
                style={{
                  fontSize: ".78rem",
                  color: t.textMuted,
                  marginBottom: ".5rem",
                }}
              >
                {e.period}
              </div>
              <div
                style={{
                  fontSize: ".82rem",
                  color: t.textMuted,
                  lineHeight: 1.6,
                }}
              >
                {e.note}
              </div>
            </Card>
          ))}
        </div>
        <div>
          <h3
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 700,
              fontSize: "1.2rem",
              marginBottom: "1.5rem",
              color: t.text,
            }}
          >
            Certifications
          </h3>
          {CERTS.map((c, i) => (
            <Card key={i} t={t} hover={false}>
              <div style={{ fontSize: "1.5rem", marginBottom: ".5rem" }}>
                🏅
              </div>
              <div
                style={{
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: ".95rem",
                  marginBottom: ".25rem",
                }}
              >
                {c.name}
              </div>
              <div
                style={{
                  color: ACCENT,
                  fontWeight: 600,
                  fontSize: ".85rem",
                  marginBottom: ".5rem",
                }}
              >
                {c.issuer} · {c.year}
              </div>
              <div style={{ fontSize: ".82rem", color: t.textMuted }}>
                {c.desc}
              </div>
            </Card>
          ))}
          <div style={{ marginTop: "1.5rem" }}>
            <h3
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                marginBottom: "1rem",
                color: t.text,
              }}
            >
              Memberships
            </h3>
            {MEMBERSHIPS.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: ".75rem",
                  alignItems: "flex-start",
                  marginBottom: ".75rem",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: ACCENT,
                    marginTop: "6px",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div style={{ fontWeight: 600, fontSize: ".85rem" }}>
                    {m.org}
                  </div>
                  <div style={{ fontSize: ".75rem", color: t.textMuted }}>
                    {m.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:720px){.two-col-about{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}

// PROJECTS
function ProjectsPage({ t }) {
  return (
    <div style={{ padding: "4rem 5vw", maxWidth: "1100px", margin: "0 auto" }}>
      <SectionHeader label="What I've Built" title="Projects" t={t} />
      <p
        style={{
          color: t.textMuted,
          maxWidth: "600px",
          lineHeight: 1.8,
          marginBottom: "3rem",
          marginTop: "-1.5rem",
        }}
      >
        Every project here was built from scratch — no templates. Real problems,
        real code, real deployments.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
          gap: "1.5rem",
        }}
      >
        {PROJECTS.map((p, i) => (
          <Card
            key={i}
            t={t}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1rem",
              }}
            >
              <div style={{ fontSize: "2.2rem" }}>{p.icon}</div>
              <div style={{ display: "flex", gap: ".5rem" }}>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    background: t.surfaceAlt,
                    border: `1px solid ${t.border}`,
                    borderRadius: "8px",
                    padding: "5px 10px",
                    fontSize: ".72rem",
                    color: t.textMuted,
                    fontWeight: 500,
                    transition: "all .2s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = ACCENT;
                    e.target.style.borderColor = ACCENT;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = t.textMuted;
                    e.target.style.borderColor = t.border;
                  }}
                >
                  GitHub
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    background: ACCENT,
                    borderRadius: "8px",
                    padding: "5px 10px",
                    fontSize: ".72rem",
                    color: "#fff",
                    fontWeight: 500,
                  }}
                >
                  Live ↗
                </a>
              </div>
            </div>
            <h3
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 700,
                fontSize: "1.05rem",
                marginBottom: ".5rem",
                color: t.text,
              }}
            >
              {p.title}
            </h3>
            <p
              style={{
                color: t.textMuted,
                fontSize: ".875rem",
                lineHeight: 1.75,
                flex: 1,
                marginBottom: "1.25rem",
              }}
            >
              {p.desc}
            </p>

            <ul
              style={{
                margin: "0 0 1rem",
                padding: "0",
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: ".3rem",
              }}
            >
              {p.highlights.map((h, j) => (
                <li
                  key={j}
                  style={{
                    display: "flex",
                    gap: ".5rem",
                    fontSize: ".78rem",
                    color: t.textMuted,
                  }}
                >
                  <span style={{ color: ACCENT, flexShrink: 0 }}>✓</span> {h}
                </li>
              ))}
            </ul>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: ".35rem",
                paddingTop: ".75rem",
                borderTop: `1px solid ${t.border}`,
              }}
            >
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: t.tagBg,
                    color: t.tagColor,
                    borderRadius: "4px",
                    padding: "2px 8px",
                    fontSize: ".7rem",
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* GitHub CTA */}
      <div
        style={{
          textAlign: "center",
          marginTop: "4rem",
          padding: "2.5rem",
          background: t.surfaceAlt,
          borderRadius: "16px",
          border: `1px solid ${t.border}`,
        }}
      >
        <div style={{ fontSize: "2rem", marginBottom: ".75rem" }}>💻</div>
        <h3
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 700,
            marginBottom: ".5rem",
          }}
        >
          More on GitHub
        </h3>
        <p
          style={{
            color: t.textMuted,
            fontSize: ".9rem",
            marginBottom: "1.25rem",
          }}
        >
          I build and push regularly. Come see what else I'm working on.
        </p>
        <a
          href={ME.githubUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            textDecoration: "none",
            background: ACCENT,
            color: "#fff",
            borderRadius: "50px",
            padding: ".75rem 2rem",
            fontWeight: 600,
            fontSize: ".9rem",
          }}
        >
          {ME.github}
        </a>
      </div>
    </div>
  );
}

// CONTACT
function ContactPage({ t }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handle = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const inputStyle = {
    width: "100%",
    padding: ".75rem 1rem",
    background: t.surfaceAlt,
    border: `1px solid ${t.border}`,
    borderRadius: "10px",
    color: t.text,
    fontSize: ".9rem",
    fontFamily: "inherit",
    transition: "border .2s",
    display: "block",
  };

  return (
    <div style={{ padding: "4rem 5vw", maxWidth: "1100px", margin: "0 auto" }}>
      <SectionHeader label="Let's Talk" title="Get In Touch" t={t} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div>
          <p
            style={{
              color: t.textMuted,
              lineHeight: 1.85,
              fontSize: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            I'm currently open to new opportunities — internships, freelance
            projects, or a conversation about tech. Don't hesitate to reach out.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              marginBottom: "3rem",
            }}
          >
            {[
              {
                icon: "✉️",
                label: "Email",
                val: ME.email,
                href: `mailto:${ME.email}`,
              },
              {
                icon: "📞",
                label: "Phone",
                val: ME.phone,
                href: `tel:${ME.phone}`,
              },
              {
                icon: "💻",
                label: "GitHub",
                val: ME.github,
                href: ME.githubUrl,
              },
              { icon: "📍", label: "Location", val: ME.location },
            ].map(({ icon, label, val, href }) => (
              <div
                key={label}
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: t.surfaceAlt,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: ".72rem",
                      color: t.textMuted,
                      marginBottom: "2px",
                    }}
                  >
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontWeight: 600,
                        fontSize: ".9rem",
                        color: ACCENT,
                        textDecoration: "none",
                      }}
                    >
                      {val}
                    </a>
                  ) : (
                    <div style={{ fontWeight: 600, fontSize: ".9rem" }}>
                      {val}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: "1.5rem",
              background: t.surfaceAlt,
              borderRadius: "12px",
              border: `1px solid ${t.border}`,
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontFamily: "'Space Grotesk',sans-serif",
                marginBottom: ".5rem",
              }}
            >
              Availability
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
                fontSize: ".85rem",
                color: t.textMuted,
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              Open to internships, freelance, and full-time roles
            </div>
          </div>
        </div>

        {/* Right — form */}
        <Card t={t} hover={false}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 700,
                  marginBottom: ".5rem",
                }}
              >
                Message Sent!
              </h3>
              <p style={{ color: t.textMuted }}>
                Thanks for reaching out. I'll get back to you soon.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", subject: "", message: "" });
                }}
                style={{
                  marginTop: "1.5rem",
                  padding: ".7rem 1.75rem",
                  borderRadius: "50px",
                  border: `2px solid ${ACCENT}`,
                  background: "transparent",
                  color: ACCENT,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Send another
              </button>
            </div>
          ) : (
            <>
              <h3
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                  color: t.text,
                }}
              >
                Send a Message
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: ".82rem",
                      fontWeight: 500,
                      marginBottom: ".4rem",
                      color: t.text,
                    }}
                  >
                    Name
                  </label>
                  <input
                    value={form.name}
                    onChange={handle("name")}
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = ACCENT)}
                    onBlur={(e) => (e.target.style.borderColor = t.border)}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: ".82rem",
                      fontWeight: 500,
                      marginBottom: ".4rem",
                      color: t.text,
                    }}
                  >
                    Email
                  </label>
                  <input
                    value={form.email}
                    onChange={handle("email")}
                    type="email"
                    placeholder="you@email.com"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = ACCENT)}
                    onBlur={(e) => (e.target.style.borderColor = t.border)}
                  />
                </div>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: ".82rem",
                    fontWeight: 500,
                    marginBottom: ".4rem",
                    color: t.text,
                  }}
                >
                  Subject
                </label>
                <input
                  value={form.subject}
                  onChange={handle("subject")}
                  placeholder="What's this about?"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = ACCENT)}
                  onBlur={(e) => (e.target.style.borderColor = t.border)}
                />
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: ".82rem",
                    fontWeight: 500,
                    marginBottom: ".4rem",
                    color: t.text,
                  }}
                >
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={handle("message")}
                  rows={5}
                  placeholder="Tell me what you need..."
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => (e.target.style.borderColor = ACCENT)}
                  onBlur={(e) => (e.target.style.borderColor = t.border)}
                />
              </div>
              <button
                onClick={() => {
                  if (form.name && form.email && form.message) setSent(true);
                }}
                style={{
                  width: "100%",
                  padding: ".85rem",
                  borderRadius: "10px",
                  border: "none",
                  background: ACCENT,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: ".95rem",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all .2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#4F46E5";
                  e.target.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = ACCENT;
                  e.target.style.transform = "none";
                }}
              >
                Send Message →
              </button>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const { t, toggle } = useTheme();
  const { page, navigate } = useRouter();

  const pages = {
    home: HomePage,
    about: AboutPage,
    projects: ProjectsPage,
    contact: ContactPage,
  };
  const Page = pages[page] || HomePage;

  return (
    <Layout t={t} navigate={navigate} page={page} toggle={toggle}>
      <Page t={t} navigate={navigate} />
    </Layout>
  );
}
