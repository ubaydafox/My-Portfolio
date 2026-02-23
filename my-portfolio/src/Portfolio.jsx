import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Design", "Photography", "Social", "Contact"];

const skills = [
  { name: "Java", level: 65, cat: "Language" },
  { name: "Python", level: 70, cat: "Language" },
  { name: "C / C++", level: 60, cat: "Language" },
  { name: "HTML/CSS/JS", level: 72, cat: "Language" },
  { name: "MySQL", level: 62, cat: "Language" },
  { name: "Gemini AI", level: 68, cat: "Tool" },
  { name: "Telegram Bot API", level: 75, cat: "Tool" },
  { name: "Adobe Illustrator", level: 70, cat: "Design" },
  { name: "Canva", level: 80, cat: "Design" },
  { name: "Git", level: 55, cat: "Tool" },
];

const strengths = [
  "Problem Solving", "Quick Learner", "Team Collaboration",
  "Creative Thinking", "Communication", "Social Responsibility"
];

function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

function Section({ id, children, className = "" }) {
  const ref = useRef();
  const visible = useInView(ref);
  return (
    <section
      id={id}
      ref={ref}
      className={`section ${className} ${visible ? "visible" : ""}`}
    >
      {children}
    </section>
  );
}

function SkillBar({ skill, delay }) {
  const ref = useRef();
  const vis = useInView(ref);
  return (
    <div ref={ref} style={{ marginBottom: "1.4rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
        <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.9rem", color: "#e0d5c5" }}>{skill.name}</span>
        <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.8rem", color: "#b5a898" }}>{skill.cat}</span>
      </div>
      <div style={{ height: "4px", background: "#2a2420", borderRadius: "2px", overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: vis ? `${skill.level}%` : "0%",
          background: "linear-gradient(90deg, #d4a853, #e8c47a)",
          borderRadius: "2px",
          transition: `width 1.2s ease ${delay}ms`,
        }} />
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: 0.4 });
    NAV_LINKS.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ background: "#0f0d0b", minHeight: "100vh", color: "#e0d5c5", fontFamily: "'Cormorant Garamond', Georgia, serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Courier+Prime:wght@400;700&family=Cinzel:wght@400;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #d4a853; color: #0f0d0b; }

        .cursor-glow {
          position: fixed;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212,168,83,0.07) 0%, transparent 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 0;
          transition: left 0.1s, top 0.1s;
        }

        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 100;
          transition: all 0.4s ease;
          padding: 1.2rem 2rem;
        }
        .nav.scrolled {
          background: rgba(15,13,11,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(212,168,83,0.12);
          padding: 0.8rem 2rem;
        }
        .nav-inner { max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .nav-logo { font-family: 'Cinzel', serif; font-size: 1.1rem; letter-spacing: 0.2em; color: #d4a853; cursor: pointer; }
        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-links li { font-family: 'Courier Prime', monospace; font-size: 0.78rem; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer; color: #b5a898; transition: color 0.2s; }
        .nav-links li:hover, .nav-links li.active { color: #d4a853; }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; }
        .hamburger span { width: 24px; height: 1px; background: #d4a853; transition: all 0.3s; }

        .mobile-menu { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: #0f0d0b; z-index: 99; flex-direction: column; align-items: center; justify-content: center; gap: 2rem; }
        .mobile-menu.open { display: flex; }
        .mobile-menu li { list-style: none; font-family: 'Cinzel', serif; font-size: 1.4rem; letter-spacing: 0.2em; cursor: pointer; color: #e0d5c5; transition: color 0.2s; }
        .mobile-menu li:hover { color: #d4a853; }

        .section { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; padding: 6rem 2rem; max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
        .section.visible { opacity: 1; transform: translateY(0); }

        .section-label { font-family: 'Courier Prime', monospace; font-size: 0.72rem; letter-spacing: 0.3em; text-transform: uppercase; color: #d4a853; margin-bottom: 0.8rem; }
        .section-title { font-family: 'Cinzel', serif; font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 400; color: #f0e8d8; line-height: 1.1; margin-bottom: 3rem; }
        .section-title em { font-style: italic; color: #d4a853; }
        .divider { width: 60px; height: 1px; background: linear-gradient(90deg, #d4a853, transparent); margin-bottom: 3rem; }

        .hero { min-height: 100vh; display: flex; align-items: center; padding: 0 2rem; max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
        .hero-content { max-width: 700px; }
        .hero-eyebrow { font-family: 'Courier Prime', monospace; font-size: 0.8rem; letter-spacing: 0.35em; text-transform: uppercase; color: #d4a853; margin-bottom: 2rem; animation: fadeUp 1s ease 0.2s both; }
        .hero-name { font-family: 'Cinzel', serif; font-size: clamp(3rem, 8vw, 6.5rem); font-weight: 400; line-height: 1; color: #f0e8d8; margin-bottom: 1.5rem; animation: fadeUp 1s ease 0.4s both; }
        .hero-name span { display: block; color: #d4a853; font-style: italic; }
        .hero-tagline { font-size: 1.25rem; font-weight: 300; color: #b5a898; line-height: 1.7; margin-bottom: 3rem; animation: fadeUp 1s ease 0.6s both; max-width: 500px; }
        .hero-actions { display: flex; gap: 1.2rem; flex-wrap: wrap; animation: fadeUp 1s ease 0.8s both; }

        .btn { display: inline-block; padding: 0.85rem 2rem; font-family: 'Courier Prime', monospace; font-size: 0.78rem; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none; cursor: pointer; border: none; transition: all 0.3s ease; }
        .btn-primary { background: #d4a853; color: #0f0d0b; }
        .btn-primary:hover { background: #e8c47a; transform: translateY(-2px); }
        .btn-outline { background: transparent; color: #d4a853; border: 1px solid #d4a853; }
        .btn-outline:hover { background: rgba(212,168,83,0.08); transform: translateY(-2px); }

        .hero-scroll { position: absolute; bottom: 3rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 0.5rem; animation: fadeUp 1s ease 1.2s both; }
        .hero-scroll span { font-family: 'Courier Prime', monospace; font-size: 0.65rem; letter-spacing: 0.3em; text-transform: uppercase; color: #b5a898; }
        .scroll-line { width: 1px; height: 50px; background: linear-gradient(to bottom, #d4a853, transparent); animation: scrollAnim 2s ease-in-out infinite; }

        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }

        .card { background: rgba(255,255,255,0.02); border: 1px solid rgba(212,168,83,0.1); padding: 2rem; transition: all 0.3s ease; }
        .card:hover { border-color: rgba(212,168,83,0.35); background: rgba(212,168,83,0.03); transform: translateY(-3px); }
        .card-icon { font-size: 1.8rem; margin-bottom: 1rem; }
        .card-title { font-family: 'Cinzel', serif; font-size: 1rem; color: #d4a853; margin-bottom: 0.8rem; letter-spacing: 0.05em; }
        .card-text { font-size: 0.95rem; color: #b5a898; line-height: 1.7; font-weight: 300; }

        .project-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(212,168,83,0.1); overflow: hidden; transition: all 0.4s ease; }
        .project-card:hover { border-color: rgba(212,168,83,0.4); transform: translateY(-5px); }
        .project-header { padding: 2rem 2rem 1.5rem; border-bottom: 1px solid rgba(212,168,83,0.08); }
        .project-tech { font-family: 'Courier Prime', monospace; font-size: 0.72rem; letter-spacing: 0.2em; color: #d4a853; text-transform: uppercase; margin-bottom: 0.8rem; }
        .project-name { font-family: 'Cinzel', serif; font-size: 1.6rem; color: #f0e8d8; margin-bottom: 0.8rem; }
        .project-desc { font-size: 0.97rem; color: #b5a898; line-height: 1.75; font-weight: 300; }
        .project-features { padding: 1.5rem 2rem; display: flex; flex-wrap: wrap; gap: 0.6rem; }
        .feature-tag { font-family: 'Courier Prime', monospace; font-size: 0.7rem; letter-spacing: 0.1em; padding: 0.3rem 0.8rem; border: 1px solid rgba(212,168,83,0.25); color: #b5a898; }
        .project-footer { padding: 1.2rem 2rem; border-top: 1px solid rgba(212,168,83,0.08); display: flex; justify-content: space-between; align-items: center; }
        .project-link { font-family: 'Courier Prime', monospace; font-size: 0.75rem; letter-spacing: 0.15em; color: #d4a853; text-decoration: none; text-transform: uppercase; transition: opacity 0.2s; }
        .project-link:hover { opacity: 0.7; }

        .tag { display: inline-block; padding: 0.5rem 1.2rem; border: 1px solid rgba(212,168,83,0.2); font-family: 'Courier Prime', monospace; font-size: 0.78rem; letter-spacing: 0.1em; color: #e0d5c5; transition: all 0.2s; margin: 0.3rem; }
        .tag:hover { border-color: #d4a853; color: #d4a853; background: rgba(212,168,83,0.05); }

        .about-text { font-size: 1.1rem; line-height: 1.9; color: #c8bfb2; font-weight: 300; margin-bottom: 1.5rem; }
        .about-text strong { color: #d4a853; font-weight: 400; }

        .stat { text-align: center; padding: 2rem; border: 1px solid rgba(212,168,83,0.12); }
        .stat-num { font-family: 'Cinzel', serif; font-size: 2.5rem; color: #d4a853; display: block; }
        .stat-label { font-family: 'Courier Prime', monospace; font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: #b5a898; margin-top: 0.4rem; display: block; }

        .contact-link { display: flex; align-items: center; gap: 1rem; padding: 1.2rem 0; border-bottom: 1px solid rgba(212,168,83,0.08); text-decoration: none; transition: all 0.2s; }
        .contact-link:hover { padding-left: 0.8rem; }
        .contact-link:hover .contact-label { color: #d4a853; }
        .contact-icon { font-size: 1.2rem; width: 2rem; text-align: center; }
        .contact-label { font-family: 'Courier Prime', monospace; font-size: 0.85rem; letter-spacing: 0.1em; color: #b5a898; transition: color 0.2s; }
        .contact-value { font-size: 0.9rem; color: #e0d5c5; font-style: italic; margin-left: auto; }

        .noise-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; opacity: 0.025; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"); }

        .gold-line { position: absolute; right: 0; top: 50%; width: 1px; height: 60%; background: linear-gradient(to bottom, transparent, rgba(212,168,83,0.15), transparent); }

        footer { border-top: 1px solid rgba(212,168,83,0.1); padding: 3rem 2rem; text-align: center; font-family: 'Courier Prime', monospace; font-size: 0.72rem; letter-spacing: 0.2em; color: #6b6055; text-transform: uppercase; position: relative; z-index: 1; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scrollAnim { 0%, 100% { opacity: 1; transform: scaleY(1); transform-origin: top; } 50% { opacity: 0.4; transform: scaleY(0.5); transform-origin: top; } }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .grid-2 { grid-template-columns: 1fr; }
          .grid-3 { grid-template-columns: 1fr; }
          .hero-name { font-size: clamp(2.5rem, 12vw, 4rem); }
          .section { padding: 4rem 1.5rem; }
        }
      `}</style>

      {/* Cursor glow */}
      <div className="cursor-glow" style={{ left: cursorPos.x, top: cursorPos.y }} />
      <div className="noise-overlay" />

      {/* NAV */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => scrollTo("About")}>AU</div>
          <ul className="nav-links">
            {NAV_LINKS.map(id => (
              <li key={id} className={active === id ? "active" : ""} onClick={() => scrollTo(id)}>{id}</li>
            ))}
          </ul>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span style={{ transform: menuOpen ? "rotate(45deg) translate(4px,4px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translate(4px,-4px)" : "none" }} />
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map(id => (
          <li key={id} onClick={() => scrollTo(id)}>{id}</li>
        ))}
      </ul>

      {/* HERO */}
      <div style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(212,168,83,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="hero" style={{ paddingTop: "8rem" }}>
          <div className="hero-content">
            <div className="hero-eyebrow">✦ Hi, i'm</div>
            <h1 className="hero-name">
              Abu
              <span>Ubayda</span>
            </h1>
            <p className="hero-tagline">
              CSE Student · Software Developer · Designer · Photographer — crafting digital experiences where code meets creativity.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => scrollTo("Projects")}>View Projects</button>
              <button className="btn btn-outline" onClick={() => scrollTo("Contact")}>Get in Touch</button>
            </div>
          </div>
          <div className="hero-scroll" style={{ position: "fixed", bottom: "2rem", left: "50%", transform: "translateX(-50%)" }}>
            <div className="scroll-line" />
            <span>Scroll</span>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <Section id="About">
        <div className="section-label">✦ Introduction</div>
        <h2 className="section-title">Crafting Code<br /><em>& Creativity</em></h2>
        <div className="grid-2" style={{ gap: "4rem" }}>
          <div>
            <p className="about-text">
              I'm a <strong>4th Year CSE student</strong> at Metropolitan University, Sylhet — building at the intersection of software engineering, AI, and visual design.
            </p>
            <p className="about-text">
              From developing <strong>AI-powered Telegram bots</strong> to shooting portraits and designing brand visuals, I believe the best digital experiences are both technically sound and visually compelling.
            </p>
            <p className="about-text">
              Beyond code, I serve as <strong>Organising Secretary</strong> at Students Welfare — because technology should ultimately empower communities.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <div className="section-label" style={{ marginBottom: "1rem" }}>Strengths</div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {strengths.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          </div>
          <div>
            <div className="grid-3" style={{ gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { num: "4th", label: "Year CSE" },
                { num: "1", label: "AI Project" },
                { num: "3+", label: "Design Tools" },
                { num: "2027", label: "Graduation" },
              ].map(s => (
                <div key={s.label} className="stat">
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="card">
              <div className="card-title">🎓 Education</div>
              <p className="card-text">
                B.Sc. in Computer Science & Engineering<br />
                <span style={{ color: "#d4a853" }}>Metropolitan University, Sylhet</span><br />
                Expected Graduation: 2027
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="Skills" style={{ background: "rgba(255,255,255,0.01)" }}>
        <div className="section-label">✦ Capabilities</div>
        <h2 className="section-title">Technical<br /><em>Arsenal</em></h2>
        <div className="grid-2" style={{ gap: "4rem" }}>
          <div>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>Proficiency</div>
            {skills.map((s, i) => <SkillBar key={s.name} skill={s} delay={i * 80} />)}
          </div>
          <div>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>Tools & Technologies</div>
            <div className="grid-3" style={{ gridTemplateColumns: "1fr", gap: "1rem" }}>
              {[
                { icon: "⚙️", title: "IDEs & Version Control", text: "NetBeans IDE for Java development; Git for version control and collaborative workflows." },
                { icon: "🤖", title: "AI Integration", text: "Gemini API integration for context-aware, multilingual AI-powered applications." },
                { icon: "📬", title: "Bot Development", text: "Telegram Bot API — building automated, intelligent bots with real-world utility." },
                { icon: "🎨", title: "Creative Suite", text: "Adobe Illustrator for vector art; Canva for rapid, polished design production." },
              ].map(c => (
                <div key={c.title} className="card" style={{ padding: "1.5rem" }}>
                  <div style={{ fontSize: "1.4rem", marginBottom: "0.6rem" }}>{c.icon}</div>
                  <div className="card-title">{c.title}</div>
                  <p className="card-text">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="Projects">
        <div className="section-label">✦ Work</div>
        <h2 className="section-title">Featured<br /><em>Projects</em></h2>
        <div className="project-card">
          <div className="project-header">
            <div className="project-tech">Python · Telegram Bot API · Gemini AI</div>
            <div className="project-name">MetroMate</div>
            <p className="project-desc">
              An intelligent AI-powered Telegram bot built for university students. MetroMate delivers class routines, faculty information, and course content in both Bangla and English — using Gemini AI for context-aware academic Q&A with conversation memory.
            </p>
          </div>
          <div className="project-features">
            {["Academic Info Retrieval", "AI-Powered Q&A", "Bangla & English", "Context-Aware", "Easy Deployment", "Conversation Memory"].map(f => (
              <span key={f} className="feature-tag">{f}</span>
            ))}
          </div>
          <div className="project-footer">
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.72rem", color: "#6b6055", letterSpacing: "0.1em" }}>
                Developed with Nahidul Islam Roni
              </span>
            </div>
            <a className="project-link" href="https://github.com/ubaydafox/AI_Project" target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
          </div>
        </div>

        <div style={{ marginTop: "1.5rem", padding: "2rem", border: "1px dashed rgba(212,168,83,0.15)", textAlign: "center" }}>
          <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.78rem", letterSpacing: "0.2em", color: "#6b6055", textTransform: "uppercase" }}>
            More projects in progress — 2025
          </p>
        </div>
      </Section>

      {/* DESIGN */}
      <Section id="Design">
        <div className="section-label">✦ Visual Work</div>
        <h2 className="section-title">Design &<br /><em>Aesthetics</em></h2>
        <div className="grid-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          {[
            { icon: "📱", title: "Social Media Design", text: "Scroll-stopping visuals crafted for engagement — brand-consistent, audience-aware, platform-optimised." },
            { icon: "🪧", title: "Poster & Banner Design", text: "Event posters, academic banners, and promotional materials with bold compositional choices." },
            { icon: "✏️", title: "UI Layouts", text: "Clean interface compositions with strong typographic hierarchy and purposeful negative space." },
            { icon: "🎭", title: "Brand Compositions", text: "Cohesive brand-style visuals that communicate identity through color, form, and typography." },
          ].map(c => <div key={c.title} className="card"><div className="card-icon">{c.icon}</div><div className="card-title">{c.title}</div><p className="card-text">{c.text}</p></div>)}
        </div>
        <div style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <div style={{ padding: "1.5rem 2.5rem", background: "rgba(212,168,83,0.05)", border: "1px solid rgba(212,168,83,0.15)", flex: 1, minWidth: "200px" }}>
            <div className="section-label" style={{ marginBottom: "0.5rem" }}>Primary Tool</div>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.3rem", color: "#f0e8d8" }}>Adobe Illustrator</div>
          </div>
          <div style={{ padding: "1.5rem 2.5rem", background: "rgba(212,168,83,0.05)", border: "1px solid rgba(212,168,83,0.15)", flex: 1, minWidth: "200px" }}>
            <div className="section-label" style={{ marginBottom: "0.5rem" }}>Rapid Design</div>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.3rem", color: "#f0e8d8" }}>Canva</div>
          </div>
        </div>
      </Section>

      {/* PHOTOGRAPHY */}
      <Section id="Photography">
        <div className="section-label">✦ Through the Lens</div>
        <h2 className="section-title">Photography<br /><em>Portfolio</em></h2>
        <div className="grid-2" style={{ gap: "4rem", alignItems: "center" }}>
          <div>
            <p className="about-text">
              Photography for me is about finding the extraordinary in the ordinary — the interplay of <strong>light and shadow</strong>, the fleeting expression, the quiet landscape.
            </p>
            <p className="about-text">
              I work primarily in <strong>nature and portrait photography</strong>, with an emphasis on composition, natural light, and visual storytelling.
            </p>
            <div style={{ marginTop: "2.5rem" }}>
              <a className="btn btn-outline" href="https://instagram.com/ubaydafox" target="_blank" rel="noopener noreferrer">
                View Portfolio on Instagram →
              </a>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { genre: "Nature", icon: "🌿", desc: "Landscapes, flora, and the quiet beauty of the natural world." },
              { genre: "Portrait", icon: "👤", desc: "Human expression, emotion, and the stories behind the eyes." },
            ].map(g => (
              <div key={g.genre} className="card" style={{ aspectRatio: "1", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{g.icon}</div>
                <div className="card-title">{g.genre}</div>
                <p className="card-text" style={{ fontSize: "0.85rem" }}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SOCIAL */}
      <Section id="Social">
        <div className="section-label">✦ Community</div>
        <h2 className="section-title">Social Work &<br /><em>Leadership</em></h2>
        <div className="grid-2" style={{ gap: "4rem" }}>
          <div>
            <div style={{ padding: "2.5rem", border: "1px solid rgba(212,168,83,0.2)", marginBottom: "2rem", background: "rgba(212,168,83,0.02)" }}>
              <div className="section-label" style={{ marginBottom: "0.8rem" }}>Organization</div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.5rem", color: "#f0e8d8", marginBottom: "0.5rem" }}>Students Welfare</div>
              <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.78rem", letterSpacing: "0.2em", color: "#d4a853", textTransform: "uppercase" }}>Organising Secretary</div>
            </div>
            <p className="about-text">
              True impact comes from combining technical expertise with <strong>genuine community engagement</strong>. Through Students Welfare, I coordinate events, support student initiatives, and lead teams toward meaningful social outcomes.
            </p>
          </div>
          <div className="grid-3" style={{ gridTemplateColumns: "1fr", gap: "1rem" }}>
            {[
              { icon: "🤝", title: "Voluntary Service", text: "Active participation in community service projects and student support programs." },
              { icon: "📋", title: "Event Coordination", text: "Planning and executing university and community events with full logistical ownership." },
              { icon: "👥", title: "Team Leadership", text: "Building collaborative teams and guiding them toward shared objectives." },
            ].map(a => (
              <div key={a.title} className="card" style={{ padding: "1.5rem" }}>
                <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{a.icon}</div>
                <div className="card-title">{a.title}</div>
                <p className="card-text">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="Contact">
        <div className="section-label">✦ Connect</div>
        <h2 className="section-title">Get in<br /><em>Touch</em></h2>
        <div className="grid-2" style={{ gap: "4rem" }}>
          <div>
            <p className="about-text" style={{ marginBottom: "3rem" }}>
              Open to collaboration, freelance projects, and conversations about technology, design, and community. Let's build something meaningful together.
            </p>
            {[
              { icon: "📞", label: "Phone", value: "01607896458", href: "tel:01607896458" },
              { icon: "✉️", label: "Email", value: "ubaydaazad@gmail.com", href: "mailto:ubaydaazad@gmail.com" },
              { icon: "💼", label: "LinkedIn", value: "abu-ubayda-131bb3190", href: "https://www.linkedin.com/in/abu-ubayda-131bb3190" },
              { icon: "💻", label: "GitHub", value: "ubaydafox", href: "https://github.com/ubaydafox" },
              { icon: "📸", label: "Instagram", value: "ubaydafox", href: "https://instagram.com/ubaydafox" },
            ].map(c => (
              <a key={c.label} className="contact-link" href={c.href} target="_blank" rel="noopener noreferrer">
                <span className="contact-icon">{c.icon}</span>
                <span className="contact-label">{c.label}</span>
                <span className="contact-value">{c.value}</span>
              </a>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ padding: "2.5rem", border: "1px solid rgba(212,168,83,0.15)", background: "rgba(212,168,83,0.02)" }}>
              <div className="section-label" style={{ marginBottom: "1rem" }}>Currently</div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "#c8bfb2", lineHeight: 1.7, fontStyle: "italic" }}>
                "4th year CSE student, developing AI-powered solutions, leading student welfare initiatives, and capturing the world through photography."
              </p>
            </div>
            <div style={{ padding: "2rem", border: "1px solid rgba(212,168,83,0.1)", textAlign: "center" }}>
              <div className="section-label" style={{ marginBottom: "0.8rem" }}>Location</div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.2rem", color: "#f0e8d8" }}>Sylhet, Bangladesh</div>
              <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.72rem", color: "#6b6055", marginTop: "0.3rem", letterSpacing: "0.1em" }}>Available for remote work</div>
            </div>
          </div>
        </div>
      </Section>

      <footer>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1rem", color: "#b5a898", marginBottom: "0.5rem", letterSpacing: "0.2em" }}>Abu Ubayda</div>
          <div>© 2025 · Built with React · Sylhet, Bangladesh</div>
          <div style={{ marginTop: "0.5rem", color: "#3d3530" }}>CSE Student · Developer · Designer · Photographer</div>
        </div>
      </footer>
    </div>
  );
}

//export default Portfolio;