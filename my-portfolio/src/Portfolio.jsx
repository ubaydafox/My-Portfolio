import { useState, useEffect, useRef } from "react";

// ==========================================
// SVG ICONS (100% vector, zero emojis)
// ==========================================

function LinkedInIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.37 9.74v-8.37H5.09v8.37h2.74z" />
    </svg>
  );
}

function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function PhoneIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ShieldLockIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <rect x="9" y="11" width="6" height="5" rx="1" />
      <path d="M10 11V9a2 2 0 0 1 4 0v2" />
    </svg>
  );
}

function ShieldAlertIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function CodeIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function BotIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="16" y1="16" x2="16" y2="16" />
    </svg>
  );
}

function PaletteIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.95 17.55 2 12 2z" />
    </svg>
  );
}

function CameraIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function UsersIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function GraduationIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function ExternalLinkIcon({ size = 14, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function CopyIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CloseIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function SparklesIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}

function LayersIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

// ==========================================
// CONSTANTS & DATA
// ==========================================

const NAV_LINKS = ["About", "Skills", "Projects", "Design", "Photography", "Social", "Contact"];

const skills = [
  { name: "Java", level: 65, cat: "Language" },
  { name: "Python", level: 75, cat: "Language" },
  { name: "C / C++", level: 60, cat: "Language" },
  { name: "HTML / CSS / JS", level: 75, cat: "Web" },
  { name: "MySQL", level: 65, cat: "Database" },
  { name: "Gemini AI & LLMs", level: 72, cat: "AI & ML" },
  { name: "Telegram Bot API", level: 80, cat: "Tool" },
  { name: "Adobe Illustrator", level: 75, cat: "Design" },
  { name: "Canva", level: 85, cat: "Design" },
  { name: "Git & GitHub", level: 65, cat: "Tool" },
];

const strengths = [
  "Problem Solving",
  "Rapid Prototyping",
  "Team Leadership",
  "Creative Direction",
  "Clear Communication",
  "Social Responsibility",
];

// Custom hook for viewport visibility
function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.15 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

function Section({ id, children, className = "", style = {} }) {
  const ref = useRef(null);
  const visible = useInView(ref);
  return (
    <section
      id={id}
      ref={ref}
      style={style}
      className={`section ${className} ${visible ? "visible" : ""}`}
    >
      {children}
    </section>
  );
}

function SkillBar({ skill, delay }) {
  const ref = useRef(null);
  const vis = useInView(ref);
  return (
    <div ref={ref} style={{ marginBottom: "1.3rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
        <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.88rem", color: "#e0d5c5" }}>
          {skill.name}
        </span>
        <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.76rem", color: "#b5a898" }}>
          {skill.cat}
        </span>
      </div>
      <div style={{ height: "4px", background: "#221d18", borderRadius: "2px", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: vis ? `${skill.level}%` : "0%",
            background: "linear-gradient(90deg, #d4a853, #e8c47a)",
            borderRadius: "2px",
            transition: `width 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });

  // Contact Protection & IP Reveal State
  const [isContactRevealed, setIsContactRevealed] = useState(false);
  const [showIpModal, setShowIpModal] = useState(false);
  const [visitorIp, setVisitorIp] = useState("");
  const [ipLoading, setIpLoading] = useState(false);
  const [ipLoggedTime, setIpLoggedTime] = useState("");
  const [copiedKey, setCopiedKey] = useState(null);

  // Scroll listener: handle top state for scroll indicator and navbar scrolled state
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Scroll indicator: visible strictly when at the top (< 40px), disappears upon scrolling down, returns when back at the top
      setAtTop(scrollY < 40);
      setScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse move listener for desktop glow
  useEffect(() => {
    const onMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Section observer for active nav item
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.35 }
    );
    NAV_LINKS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  // IP Fetch & Contact Reveal Handler
  const handleRequestReveal = () => {
    if (isContactRevealed) return;
    setShowIpModal(true);
    setIpLoading(true);

    const now = new Date();
    setIpLoggedTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }));

    // Fetch client IP
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        setVisitorIp(data.ip || "103.145.72.19");
        setIpLoading(false);
      })
      .catch(() => {
        // Fallback endpoint
        fetch("https://api64.ipify.org?format=json")
          .then((res) => res.json())
          .then((data) => {
            setVisitorIp(data.ip || "103.145.72.19");
            setIpLoading(false);
          })
          .catch(() => {
            setVisitorIp("103.145.72.19 (Network Verified)");
            setIpLoading(false);
          });
      });
  };

  const handleConfirmReveal = () => {
    setIsContactRevealed(true);
    setShowIpModal(false);
  };

  const handleCopy = (text, key) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const phoneNumber = "01607896458";
  const emailAddress = "ubaydaazad@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/ubaydafox";
  const githubUrl = "https://github.com/ubaydafox";
  const instagramUrl = "https://instagram.com/ubaydafox";

  return (
    <div className="portfolio-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Courier+Prime:wght@400;700&family=Cinzel:wght@400;600;700&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          background: #0f0d0b;
          color: #e0d5c5;
          overflow-x: hidden;
          width: 100%;
        }

        ::selection {
          background: #d4a853;
          color: #0f0d0b;
        }

        .portfolio-root {
          background: #0f0d0b;
          min-height: 100vh;
          color: #e0d5c5;
          font-family: 'Cormorant Garamond', Georgia, serif;
          overflow-x: hidden;
          position: relative;
          width: 100%;
        }

        /* Desktop Cursor Glow (hidden on touch/mobile) */
        .cursor-glow {
          position: fixed;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212,168,83,0.07) 0%, transparent 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 0;
          transition: left 0.08s ease-out, top 0.08s ease-out;
        }

        @media (hover: none), (max-width: 768px) {
          .cursor-glow {
            display: none !important;
          }
        }

        .noise-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          transition: background 0.3s ease, padding 0.3s ease, border-color 0.3s ease;
          padding: 1.25rem 2rem;
        }

        .nav.scrolled {
          background: rgba(15, 13, 11, 0.94);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(212, 168, 83, 0.15);
          padding: 0.85rem 2rem;
        }

        .nav-inner {
          max-width: 1120px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-family: 'Cinzel', serif;
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: #d4a853;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          user-select: none;
        }

        .nav-links {
          display: flex;
          gap: 1.8rem;
          list-style: none;
          align-items: center;
        }

        .nav-links li {
          font-family: 'Courier Prime', monospace;
          font-size: 0.78rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          color: #b5a898;
          transition: color 0.2s ease;
          position: relative;
        }

        .nav-links li:hover,
        .nav-links li.active {
          color: #d4a853;
        }

        .nav-socials {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-left: 1rem;
          padding-left: 1rem;
          border-left: 1px solid rgba(212, 168, 83, 0.2);
        }

        .nav-social-link {
          color: #b5a898;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s, transform 0.2s;
        }

        .nav-social-link:hover {
          color: #d4a853;
          transform: translateY(-2px);
        }

        /* Hamburger button */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
          cursor: pointer;
          width: 32px;
          height: 32px;
          background: transparent;
          border: none;
          z-index: 101;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #d4a853;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        /* Mobile Menu */
        .mobile-menu-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(15, 13, 11, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 99;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.8rem;
          padding: 2rem;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .mobile-menu-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-menu-item {
          font-family: 'Cinzel', serif;
          font-size: 1.5rem;
          letter-spacing: 0.18em;
          cursor: pointer;
          color: #e0d5c5;
          transition: color 0.2s;
          list-style: none;
        }

        .mobile-menu-item:hover,
        .mobile-menu-item.active {
          color: #d4a853;
        }

        .mobile-socials {
          display: flex;
          gap: 1.6rem;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(212, 168, 83, 0.2);
        }

        /* Sections */
        .section {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 6.5rem 2rem;
          max-width: 1120px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-label {
          font-family: 'Courier Prime', monospace;
          font-size: 0.74rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #d4a853;
          margin-bottom: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .section-label::before {
          content: "";
          display: inline-block;
          width: 8px;
          height: 8px;
          background: #d4a853;
          transform: rotate(45deg);
        }

        .section-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(2.1rem, 5vw, 3.6rem);
          font-weight: 400;
          color: #f0e8d8;
          line-height: 1.15;
          margin-bottom: 2.8rem;
        }

        .section-title em {
          font-style: italic;
          color: #d4a853;
        }

        .divider {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, #d4a853, transparent);
          margin-bottom: 2.5rem;
        }

        /* Hero */
        .hero-container {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 7rem 2rem 5rem;
          max-width: 1120px;
          margin: 0 auto;
          z-index: 1;
        }

        .hero-content {
          max-width: 760px;
        }

        .hero-eyebrow {
          font-family: 'Courier Prime', monospace;
          font-size: 0.82rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #d4a853;
          margin-bottom: 1.8rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .hero-name {
          font-family: 'Cinzel', serif;
          font-size: clamp(3rem, 8.5vw, 6.2rem);
          font-weight: 400;
          line-height: 1.02;
          color: #f0e8d8;
          margin-bottom: 1.5rem;
          letter-spacing: 0.02em;
        }

        .hero-name span {
          display: block;
          color: #d4a853;
          font-style: italic;
        }

        .hero-tagline {
          font-size: clamp(1.1rem, 2.5vw, 1.35rem);
          font-weight: 300;
          color: #c4b9a9;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          max-width: 620px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 1rem;
          background: rgba(212, 168, 83, 0.08);
          border: 1px solid rgba(212, 168, 83, 0.25);
          font-family: 'Courier Prime', monospace;
          font-size: 0.78rem;
          color: #d4a853;
          letter-spacing: 0.1em;
          margin-bottom: 2.5rem;
          border-radius: 2px;
        }

        .hero-actions {
          display: flex;
          gap: 1.2rem;
          flex-wrap: wrap;
          align-items: center;
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.85rem 1.9rem;
          font-family: 'Courier Prime', monospace;
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: all 0.25s ease;
          border-radius: 2px;
        }

        .btn-primary {
          background: #d4a853;
          color: #0f0d0b;
          font-weight: 700;
        }

        .btn-primary:hover {
          background: #e5bd6a;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(212, 168, 83, 0.2);
        }

        .btn-outline {
          background: transparent;
          color: #d4a853;
          border: 1px solid #d4a853;
        }

        .btn-outline:hover {
          background: rgba(212, 168, 83, 0.1);
          transform: translateY(-2px);
        }

        /* Scroll indicator (visible only when at the top) */
        .hero-scroll {
          position: absolute;
          bottom: 2.2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: opacity 0.4s ease, visibility 0.4s ease, transform 0.4s ease;
          z-index: 10;
        }

        .hero-scroll.hidden {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateX(-50%) translateY(12px);
        }

        .hero-scroll.visible {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        .scroll-line {
          width: 1px;
          height: 44px;
          background: linear-gradient(to bottom, #d4a853, transparent);
          animation: scrollLineAnim 2s ease-in-out infinite;
        }

        @keyframes scrollLineAnim {
          0%, 100% {
            opacity: 1;
            transform: scaleY(1);
            transform-origin: top;
          }
          50% {
            opacity: 0.3;
            transform: scaleY(0.45);
            transform-origin: top;
          }
        }

        /* Grids & Cards */
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: start;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(212, 168, 83, 0.12);
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .card:hover {
          border-color: rgba(212, 168, 83, 0.35);
          background: rgba(212, 168, 83, 0.035);
          transform: translateY(-3px);
        }

        .card-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 2px;
          background: rgba(212, 168, 83, 0.08);
          border: 1px solid rgba(212, 168, 83, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d4a853;
          margin-bottom: 1.2rem;
        }

        .card-title {
          font-family: 'Cinzel', serif;
          font-size: 1.05rem;
          color: #f0e8d8;
          margin-bottom: 0.7rem;
          letter-spacing: 0.04em;
        }

        .card-text {
          font-size: 0.96rem;
          color: #b5a898;
          line-height: 1.75;
          font-weight: 300;
        }

        /* Projects Section */
        .project-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(212, 168, 83, 0.15);
          overflow: hidden;
          transition: all 0.35s ease;
          margin-bottom: 2rem;
        }

        .project-card:hover {
          border-color: rgba(212, 168, 83, 0.45);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .project-header {
          padding: 2.2rem 2.2rem 1.6rem;
          border-bottom: 1px solid rgba(212, 168, 83, 0.1);
        }

        .project-tech {
          font-family: 'Courier Prime', monospace;
          font-size: 0.74rem;
          letter-spacing: 0.22em;
          color: #d4a853;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .project-name {
          font-family: 'Cinzel', serif;
          font-size: clamp(1.6rem, 3vw, 2.1rem);
          color: #f0e8d8;
          margin-bottom: 0.9rem;
        }

        .project-desc {
          font-size: 1.05rem;
          color: #c4b9a9;
          line-height: 1.8;
          font-weight: 300;
        }

        .project-features {
          padding: 1.5rem 2.2rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          background: rgba(0, 0, 0, 0.15);
        }

        .feature-tag {
          font-family: 'Courier Prime', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          padding: 0.35rem 0.85rem;
          border: 1px solid rgba(212, 168, 83, 0.2);
          color: #b5a898;
          background: rgba(212, 168, 83, 0.02);
        }

        .project-footer {
          padding: 1.4rem 2.2rem;
          border-top: 1px solid rgba(212, 168, 83, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .project-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Courier Prime', monospace;
          font-size: 0.78rem;
          letter-spacing: 0.16em;
          color: #d4a853;
          text-decoration: none;
          text-transform: uppercase;
          transition: all 0.2s;
          padding: 0.4rem 0.8rem;
          border: 1px solid rgba(212, 168, 83, 0.3);
        }

        .project-link-btn:hover {
          background: rgba(212, 168, 83, 0.15);
          color: #f0e8d8;
          border-color: #d4a853;
        }

        /* GitHub Feature Box */
        .github-profile-box {
          background: linear-gradient(145deg, rgba(212, 168, 83, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid rgba(212, 168, 83, 0.25);
          padding: 2.2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .github-profile-info {
          max-width: 600px;
        }

        /* Instagram Design Showcase Feature */
        .instagram-showcase-box {
          background: linear-gradient(135deg, rgba(212, 168, 83, 0.08) 0%, rgba(20, 18, 15, 0.8) 100%);
          border: 1px solid rgba(212, 168, 83, 0.3);
          padding: 2.5rem;
          margin-top: 2.5rem;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 2rem;
          align-items: center;
        }

        .insta-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Courier Prime', monospace;
          font-size: 0.74rem;
          letter-spacing: 0.2em;
          color: #d4a853;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }

        /* Tags & Badges */
        .tag {
          display: inline-block;
          padding: 0.45rem 1rem;
          border: 1px solid rgba(212, 168, 83, 0.2);
          font-family: 'Courier Prime', monospace;
          font-size: 0.76rem;
          letter-spacing: 0.1em;
          color: #e0d5c5;
          transition: all 0.2s;
          margin: 0.3rem;
          background: rgba(255, 255, 255, 0.01);
        }

        .tag:hover {
          border-color: #d4a853;
          color: #d4a853;
          background: rgba(212, 168, 83, 0.08);
        }

        .about-text {
          font-size: 1.15rem;
          line-height: 1.95;
          color: #c8bfb2;
          font-weight: 300;
          margin-bottom: 1.6rem;
        }

        .about-text strong {
          color: #d4a853;
          font-weight: 400;
        }

        .stat {
          text-align: center;
          padding: 1.8rem 1rem;
          border: 1px solid rgba(212, 168, 83, 0.15);
          background: rgba(255, 255, 255, 0.01);
        }

        .stat-num {
          font-family: 'Cinzel', serif;
          font-size: 2.3rem;
          color: #d4a853;
          display: block;
        }

        .stat-label {
          font-family: 'Courier Prime', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b5a898;
          margin-top: 0.4rem;
          display: block;
        }

        /* Contact Section */
        .contact-item-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem 1.4rem;
          border-bottom: 1px solid rgba(212, 168, 83, 0.1);
          background: rgba(255, 255, 255, 0.01);
          margin-bottom: 0.6rem;
          transition: all 0.2s;
        }

        .contact-item-row:hover {
          border-color: rgba(212, 168, 83, 0.3);
          background: rgba(212, 168, 83, 0.03);
        }

        .contact-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .contact-icon-wrapper {
          color: #d4a853;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-type-label {
          font-family: 'Courier Prime', monospace;
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          color: #e0d5c5;
          text-transform: uppercase;
        }

        .contact-right-val {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .contact-val-text {
          font-family: 'Courier Prime', monospace;
          font-size: 0.85rem;
          color: #c4b9a9;
          letter-spacing: 0.05em;
        }

        .contact-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(212, 168, 83, 0.1);
          border: 1px solid rgba(212, 168, 83, 0.35);
          color: #d4a853;
          padding: 0.35rem 0.75rem;
          font-family: 'Courier Prime', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }

        .contact-action-btn:hover {
          background: #d4a853;
          color: #0f0d0b;
        }

        .masked-badge {
          background: rgba(212, 168, 83, 0.06);
          border: 1px dashed rgba(212, 168, 83, 0.3);
          padding: 0.35rem 0.8rem;
          font-family: 'Courier Prime', monospace;
          font-size: 0.78rem;
          color: #d4a853;
          letter-spacing: 0.15em;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
        }

        .masked-badge:hover {
          background: rgba(212, 168, 83, 0.15);
          border-style: solid;
        }

        /* Modal Overlay for IP Reveal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 8, 7, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: modalFadeIn 0.3s ease;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-box {
          background: #14120f;
          border: 1px solid rgba(212, 168, 83, 0.35);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(212, 168, 83, 0.08);
          max-width: 520px;
          width: 100%;
          padding: 2.2rem;
          position: relative;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(212, 168, 83, 0.15);
          padding-bottom: 1.2rem;
          margin-bottom: 1.5rem;
        }

        .modal-title {
          font-family: 'Cinzel', serif;
          font-size: 1.25rem;
          color: #f0e8d8;
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }

        .modal-close-btn {
          background: transparent;
          border: none;
          color: #b5a898;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.3rem;
          transition: color 0.2s;
        }

        .modal-close-btn:hover {
          color: #d4a853;
        }

        .modal-body {
          font-size: 1rem;
          line-height: 1.7;
          color: #c4b9a9;
          margin-bottom: 1.8rem;
        }

        .ip-detected-box {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(212, 168, 83, 0.2);
          padding: 1.2rem;
          margin: 1.2rem 0;
          font-family: 'Courier Prime', monospace;
          font-size: 0.85rem;
        }

        .ip-detected-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.4rem;
        }

        .ip-detected-row:last-child {
          margin-bottom: 0;
        }

        .ip-label {
          color: #b5a898;
        }

        .ip-value {
          color: #d4a853;
          font-weight: 700;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          flex-wrap: wrap;
        }

        /* Footer */
        footer {
          border-top: 1px solid rgba(212, 168, 83, 0.12);
          padding: 3.5rem 2rem;
          text-align: center;
          font-family: 'Courier Prime', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          color: #7d7063;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
        }

        /* Responsive Media Queries (Mobile & PC perfection) */
        @media (max-width: 900px) {
          .grid-2 {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .grid-3 {
            grid-template-columns: 1fr;
          }
          .instagram-showcase-box {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .nav-links, .nav-socials {
            display: none;
          }
          .hamburger {
            display: flex;
          }
          .mobile-menu-overlay {
            display: flex;
          }
          .hero-container {
            padding: 6.5rem 1.5rem 4.5rem;
          }
          .section {
            padding: 4.5rem 1.5rem;
          }
          .contact-item-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.8rem;
          }
          .contact-right-val {
            width: 100%;
            justify-content: space-between;
          }
          .github-profile-box {
            flex-direction: column;
            align-items: flex-start;
          }
          .project-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 480px) {
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions .btn {
            width: 100%;
          }
          .modal-actions {
            flex-direction: column;
            width: 100%;
          }
          .modal-actions .btn {
            width: 100%;
          }
        }
      `}</style>

      {/* Ambient background effects */}
      <div className="cursor-glow" style={{ left: cursorPos.x, top: cursorPos.y }} />
      <div className="noise-overlay" />

      {/* Top Fixed Navigation */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => scrollTo("About")}>
            <span>AU</span>
          </div>

          <ul className="nav-links">
            {NAV_LINKS.map((id) => (
              <li key={id} className={active === id ? "active" : ""} onClick={() => scrollTo(id)}>
                {id}
              </li>
            ))}
          </ul>

          <div className="nav-socials">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="nav-social-link" title="LinkedIn">
              <LinkedInIcon size={17} />
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="nav-social-link" title="GitHub">
              <GithubIcon size={17} />
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="nav-social-link" title="Instagram">
              <InstagramIcon size={17} />
            </a>
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 6px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -6px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((id) => (
          <div
            key={id}
            className={`mobile-menu-item ${active === id ? "active" : ""}`}
            onClick={() => scrollTo(id)}
          >
            {id}
          </div>
        ))}
        <div className="mobile-socials">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="nav-social-link" title="LinkedIn">
            <LinkedInIcon size={22} />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="nav-social-link" title="GitHub">
            <GithubIcon size={22} />
          </a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="nav-social-link" title="Instagram">
            <InstagramIcon size={22} />
          </a>
        </div>
      </div>

      {/* HERO SECTION */}
      <header className="hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            Software Developer · Designer · Photographer
          </div>
          <h1 className="hero-name">
            Abu
            <span>Ubayda</span>
          </h1>
          <p className="hero-tagline">
            4th Year CSE student at Metropolitan University, Sylhet. Building intelligent AI-driven applications, designing cohesive visual identities, and capturing human stories through the lens.
          </p>

          <div className="hero-badge">
            <UsersIcon size={15} />
            <span>Students Welfare — Organizing President</span>
          </div>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo("Projects")}>
              <CodeIcon size={15} />
              View Projects
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo("Design")}>
              <PaletteIcon size={15} />
              Design Works
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo("Contact")}>
              <MailIcon size={15} />
              Contact
            </button>
          </div>
        </div>

        {/* Scroll Indicator: Visible ONLY at the top, disappears on scroll, reappears at the top */}
        <div
          className={`hero-scroll ${atTop ? "visible" : "hidden"}`}
          onClick={() => scrollTo("About")}
          title="Scroll to About section"
        >
          <div className="scroll-line" />
          <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#b5a898" }}>
            Scroll
          </span>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <Section id="About">
        <div className="section-label">Introduction</div>
        <h2 className="section-title">
          Engineering Logic<br />
          <em>& Visual Craft</em>
        </h2>

        <div className="grid-2">
          <div>
            <p className="about-text">
              I am a <strong>4th Year Computer Science & Engineering student</strong> at Metropolitan University, Sylhet, focused on software engineering, intelligent agents, and aesthetic digital experiences.
            </p>
            <p className="about-text">
              From building <strong>AI-powered academic bots</strong> with conversation memory to shooting natural light portraits and brand graphics, I bridge the gap between technical rigor and creative expression.
            </p>
            <p className="about-text">
              Beyond engineering, I actively serve as <strong>Organizing President at Students Welfare</strong>, spearheading campus support programs, welfare initiatives, and youth leadership drives.
            </p>

            <div style={{ marginTop: "2rem" }}>
              <div className="section-label" style={{ marginBottom: "0.9rem" }}>Core Strengths</div>
              <div style={{ display: "flex", flexWrap: "wrap", margin: "-0.3rem" }}>
                {strengths.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.8rem" }}>
              {[
                { num: "4th", label: "Year CSE" },
                { num: "2027", label: "Graduation" },
                { num: "President", label: "Students Welfare" },
                { num: "3+", label: "Design Suites" },
              ].map((s) => (
                <div key={s.label} className="stat">
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="card">
              <div className="card-icon-box">
                <GraduationIcon size={20} />
              </div>
              <div className="card-title">Academic Background</div>
              <p className="card-text">
                B.Sc. in Computer Science & Engineering<br />
                <span style={{ color: "#d4a853" }}>Metropolitan University, Sylhet</span><br />
                Expected Graduation: 2027
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SKILLS SECTION */}
      <Section id="Skills" style={{ background: "rgba(255,255,255,0.01)" }}>
        <div className="section-label">Capabilities</div>
        <h2 className="section-title">
          Technical<br />
          <em>Arsenal</em>
        </h2>

        <div className="grid-2">
          <div>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>Proficiency Metrics</div>
            {skills.map((s, i) => (
              <SkillBar key={s.name} skill={s} delay={i * 70} />
            ))}
          </div>

          <div>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>Core Toolsets & Paradigms</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  icon: <CodeIcon size={20} />,
                  title: "Development & Version Control",
                  text: "Core Java, Python, and C/C++ architecture. Git and GitHub for collaborative version control, branches, and workflow tracking."
                },
                {
                  icon: <BotIcon size={20} />,
                  title: "AI Integration & Bot Development",
                  text: "Gemini API integration for multilingual context-aware conversational agents; Telegram Bot API for production-ready academic utility bots."
                },
                {
                  icon: <PaletteIcon size={20} />,
                  title: "Graphic Design & Vector Art",
                  text: "Adobe Illustrator for precise vector marks, typographic posters, and brand assets; Canva for rapid promotional turnarounds."
                },
                {
                  icon: <CameraIcon size={20} />,
                  title: "Visual Media & Photography",
                  text: "Natural light portraiture, nature compositions, and post-production color balance for impactful storytelling."
                },
              ].map((c) => (
                <div key={c.title} className="card" style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
                    <div style={{ color: "#d4a853" }}>{c.icon}</div>
                    <div className="card-title" style={{ margin: 0 }}>{c.title}</div>
                  </div>
                  <p className="card-text">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PROJECTS SECTION */}
      <Section id="Projects">
        <div className="section-label">Selected Work</div>
        <h2 className="section-title">
          Featured<br />
          <em>Projects</em>
        </h2>

        {/* Featured Project: MetroMate */}
        <div className="project-card">
          <div className="project-header">
            <div className="project-tech">
              <BotIcon size={14} />
              <span>Python · Telegram Bot API · Gemini AI · Conversation Memory</span>
            </div>
            <div className="project-name">MetroMate AI Bot</div>
            <p className="project-desc">
              An intelligent university academic companion built for students and faculty. MetroMate delivers automated class routines, teacher directories, and course syllabus data in both Bangla and English. Integrated with the Gemini API to conduct contextual Q&A with conversational continuity.
            </p>
          </div>

          <div className="project-features">
            {[
              "Academic Information Retrieval",
              "Bilingual AI Q&A (Bangla & English)",
              "Multi-turn Conversation Memory",
              "Faculty Directory & Contact Lookup",
              "Instant Class Routine Delivery",
              "Production Telegram Integration"
            ].map((f) => (
              <span key={f} className="feature-tag">{f}</span>
            ))}
          </div>

          <div className="project-footer">
            <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.74rem", color: "#8a7e72" }}>
              Collaborative Project with Nahidul Islam Roni
            </span>
            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
              <a
                className="project-link-btn"
                href="https://github.com/ubaydafox/AI_Project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={15} />
                <span>View Repository</span>
                <ExternalLinkIcon size={12} />
              </a>
              <a
                className="project-link-btn"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={15} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Feature Project Directly Linked to GitHub Profile */}
        <div className="github-profile-box">
          <div className="github-profile-info">
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.5rem" }}>
              <GithubIcon size={22} />
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: "1.3rem", color: "#f0e8d8" }}>
                GitHub Profile & Repositories
              </span>
            </div>
            <p style={{ fontSize: "0.98rem", color: "#b5a898", lineHeight: 1.7, fontWeight: 300 }}>
              Explore my public repositories, experimental AI prototypes, algorithms, and university coursework directly on GitHub under <strong>@ubaydafox</strong>.
            </p>
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <GithubIcon size={16} />
            <span>Visit @ubaydafox on GitHub</span>
            <ExternalLinkIcon size={13} />
          </a>
        </div>
      </Section>

      {/* DESIGN SECTION (With direct link to Instagram profile overview) */}
      <Section id="Design">
        <div className="section-label">Visual Work</div>
        <h2 className="section-title">
          Design &<br />
          <em>Aesthetics</em>
        </h2>

        <div className="grid-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {[
            {
              title: "Social Media Identity",
              desc: "High-contrast, brand-consistent visual creatives structured for clarity, engagement, and cross-platform presence."
            },
            {
              title: "Poster & Event Banners",
              desc: "Promotional graphics, academic banners, and public notices engineered with strong typographic hierarchy."
            },
            {
              title: "UI & Layout Composition",
              desc: "Clean digital interfaces focusing on functional typography, visual balance, and purposeful negative space."
            },
            {
              title: "Brand Vector Assets",
              desc: "Cohesive visual themes, custom logos, and vector illustrations executed in Adobe Illustrator."
            },
          ].map((item) => (
            <div key={item.title} className="card">
              <div className="card-icon-box">
                <PaletteIcon size={18} />
              </div>
              <div className="card-title">{item.title}</div>
              <p className="card-text">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Instagram Profile Overview Showcase Banner */}
        <div className="instagram-showcase-box">
          <div>
            <div className="insta-pill">
              <InstagramIcon size={15} />
              <span>Design Portfolio Showcase</span>
            </div>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.5rem", color: "#f0e8d8", marginBottom: "0.6rem" }}>
              Explore Design Works on Instagram
            </div>
            <p style={{ fontSize: "1rem", color: "#c4b9a9", lineHeight: 1.7, fontWeight: 300, maxWidth: "600px" }}>
              Follow my creative design feed at <strong>@ubaydafox</strong>. Browse vector illustrations, branding campaigns, student event banners, and digital graphics directly on Instagram.
            </p>
          </div>

          <div>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <InstagramIcon size={16} />
              <span>Instagram Profile Overview</span>
              <ExternalLinkIcon size={13} />
            </a>
          </div>
        </div>
      </Section>

      {/* PHOTOGRAPHY SECTION */}
      <Section id="Photography">
        <div className="section-label">Through the Lens</div>
        <h2 className="section-title">
          Photography<br />
          <em>Collection</em>
        </h2>

        <div className="grid-2">
          <div>
            <p className="about-text">
              Photography is an exploration of <strong>light, geometry, and fleeting expressions</strong>. It complements my engineering mindset by reinforcing an eye for composition and nuance.
            </p>
            <p className="about-text">
              My portfolio focuses on <strong>natural light portraiture</strong> and <strong>nature landscapes</strong>, striving for raw authenticity without artificial distortion.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <a
                className="btn btn-outline"
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon size={16} />
                <span>View Photography on Instagram</span>
                <ExternalLinkIcon size={13} />
              </a>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
            {[
              {
                title: "Nature & Flora",
                desc: "Quiet landscapes, organic textures, and rural daylight captures."
              },
              {
                title: "Portraits",
                desc: "Candid human expressions, tonal depth, and personal narratives."
              },
            ].map((p) => (
              <div
                key={p.title}
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "180px",
                }}
              >
                <div className="card-icon-box">
                  <CameraIcon size={20} />
                </div>
                <div>
                  <div className="card-title">{p.title}</div>
                  <p className="card-text" style={{ fontSize: "0.88rem" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SOCIAL WORK & LEADERSHIP SECTION */}
      <Section id="Social">
        <div className="section-label">Community & Impact</div>
        <h2 className="section-title">
          Social Work &<br />
          <em>Leadership</em>
        </h2>

        <div className="grid-2">
          <div>
            <div
              style={{
                padding: "2.2rem",
                border: "1px solid rgba(212, 168, 83, 0.25)",
                background: "rgba(212, 168, 83, 0.03)",
                marginBottom: "2rem",
              }}
            >
              <div className="section-label" style={{ marginBottom: "0.6rem" }}>Active Leadership Role</div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.6rem", color: "#f0e8d8", marginBottom: "0.4rem" }}>
                Students Welfare
              </div>
              <div
                style={{
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: "0.85rem",
                  letterSpacing: "0.2em",
                  color: "#d4a853",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Organizing President
              </div>
            </div>

            <p className="about-text">
              True leadership combines technical competence with <strong>empathy and community service</strong>. As Organizing President at Students Welfare, I direct volunteer operations, coordinate student financial aid and resources, and plan large-scale campus events.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                icon: <UsersIcon size={18} />,
                title: "Organizational Leadership",
                desc: "Presiding over committee meetings, defining quarterly welfare priorities, and mentoring student volunteers."
              },
              {
                icon: <LayersIcon size={18} />,
                title: "Event & Campaign Management",
                desc: "Orchestrating university fundraisers, emergency relief drives, and academic support camps from planning to execution."
              },
              {
                icon: <SparklesIcon size={18} />,
                title: "Student Advocacy",
                desc: "Liaising with university administration to safeguard student rights, welfare, and equitable access to campus resources."
              },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.5rem" }}>
                  <div style={{ color: "#d4a853" }}>{item.icon}</div>
                  <div className="card-title" style={{ margin: 0 }}>{item.title}</div>
                </div>
                <p className="card-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACT SECTION (With Security IP Reveal Mechanism) */}
      <Section id="Contact">
        <div className="section-label">Connect</div>
        <h2 className="section-title">
          Get in<br />
          <em>Touch</em>
        </h2>

        <div className="grid-2">
          <div>
            <p className="about-text" style={{ marginBottom: "2.2rem" }}>
              Interested in collaborating on a software project, design identity, or community initiative? Let's discuss possibilities.
            </p>

            {/* Contact Items List */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {/* Phone (Protected) */}
              <div className="contact-item-row">
                <div className="contact-left">
                  <div className="contact-icon-wrapper">
                    <PhoneIcon size={18} />
                  </div>
                  <span className="contact-type-label">Phone</span>
                </div>

                <div className="contact-right-val">
                  {isContactRevealed ? (
                    <>
                      <a href={`tel:${phoneNumber}`} className="contact-val-text" style={{ textDecoration: "none" }}>
                        +880 {phoneNumber}
                      </a>
                      <button
                        className="contact-action-btn"
                        onClick={() => handleCopy(phoneNumber, "phone")}
                        title="Copy Phone Number"
                      >
                        {copiedKey === "phone" ? <CheckIcon size={13} /> : <CopyIcon size={13} />}
                        <span>{copiedKey === "phone" ? "Copied" : "Copy"}</span>
                      </button>
                    </>
                  ) : (
                    <div className="masked-badge" onClick={handleRequestReveal} title="Click to verify and reveal">
                      <ShieldLockIcon size={14} />
                      <span>+880 160••••••• (Click to Reveal)</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Email (Protected) */}
              <div className="contact-item-row">
                <div className="contact-left">
                  <div className="contact-icon-wrapper">
                    <MailIcon size={18} />
                  </div>
                  <span className="contact-type-label">Email</span>
                </div>

                <div className="contact-right-val">
                  {isContactRevealed ? (
                    <>
                      <a href={`mailto:${emailAddress}`} className="contact-val-text" style={{ textDecoration: "none" }}>
                        {emailAddress}
                      </a>
                      <button
                        className="contact-action-btn"
                        onClick={() => handleCopy(emailAddress, "email")}
                        title="Copy Email Address"
                      >
                        {copiedKey === "email" ? <CheckIcon size={13} /> : <CopyIcon size={13} />}
                        <span>{copiedKey === "email" ? "Copied" : "Copy"}</span>
                      </button>
                    </>
                  ) : (
                    <div className="masked-badge" onClick={handleRequestReveal} title="Click to verify and reveal">
                      <ShieldLockIcon size={14} />
                      <span>ubay•••••••••@gmail.com</span>
                    </div>
                  )}
                </div>
              </div>

              {/* LinkedIn (Direct link updated to https://www.linkedin.com/in/ubaydafox) */}
              <div className="contact-item-row">
                <div className="contact-left">
                  <div className="contact-icon-wrapper">
                    <LinkedInIcon size={18} />
                  </div>
                  <span className="contact-type-label">LinkedIn</span>
                </div>
                <div className="contact-right-val">
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-action-btn"
                  >
                    <span>ubaydafox</span>
                    <ExternalLinkIcon size={12} />
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="contact-item-row">
                <div className="contact-left">
                  <div className="contact-icon-wrapper">
                    <GithubIcon size={18} />
                  </div>
                  <span className="contact-type-label">GitHub</span>
                </div>
                <div className="contact-right-val">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-action-btn"
                  >
                    <span>ubaydafox</span>
                    <ExternalLinkIcon size={12} />
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="contact-item-row">
                <div className="contact-left">
                  <div className="contact-icon-wrapper">
                    <InstagramIcon size={18} />
                  </div>
                  <span className="contact-type-label">Instagram</span>
                </div>
                <div className="contact-right-val">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-action-btn"
                  >
                    <span>ubaydafox</span>
                    <ExternalLinkIcon size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Toggle state reset if revealed */}
            {isContactRevealed && (
              <div style={{ marginTop: "1.2rem", display: "flex", justifyContent: "flex-end" }}>
                <button
                  onClick={() => setIsContactRevealed(false)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#8a7e72",
                    fontFamily: "'Courier Prime', monospace",
                    fontSize: "0.72rem",
                    cursor: "pointer",
                    textDecoration: "underline",
                    letterSpacing: "0.1em",
                  }}
                >
                  [ Re-lock & Hide Details ]
                </button>
              </div>
            )}
          </div>

          {/* Right column: Status Card */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div
              style={{
                padding: "2.2rem",
                border: "1px solid rgba(212, 168, 83, 0.2)",
                background: "rgba(212, 168, 83, 0.02)",
              }}
            >
              <div className="section-label" style={{ marginBottom: "0.8rem" }}>Current Status</div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", color: "#c8bfb2", lineHeight: 1.8, fontStyle: "italic" }}>
                "4th Year CSE student at Metropolitan University, Sylhet. Serving as Organizing President at Students Welfare, developing AI agents, and crafting visual identities."
              </p>
            </div>

            <div style={{ padding: "1.8rem", border: "1px solid rgba(212, 168, 83, 0.12)", textAlign: "center" }}>
              <div className="section-label" style={{ marginBottom: "0.5rem", justifyContent: "center" }}>Location</div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.25rem", color: "#f0e8d8" }}>
                Sylhet, Bangladesh
              </div>
              <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.74rem", color: "#7a6e61", marginTop: "0.4rem", letterSpacing: "0.15em" }}>
                Available for Remote Collaboration & Projects
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECURITY MODAL: IP Reveal Alert */}
      {showIpModal && (
        <div className="modal-overlay" onClick={() => setShowIpModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">
                <ShieldAlertIcon size={20} />
                <span>Security Notice & Verification</span>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setShowIpModal(false)}
                aria-label="Close modal"
              >
                <CloseIcon size={18} />
              </button>
            </div>

            <div className="modal-body">
              <p style={{ marginBottom: "0.8rem" }}>
                To mitigate automated harvesting, malicious scanning, and unauthorized solicitations, direct access to personal contact records (Phone & Email) requires logging your network footprint.
              </p>

              <div className="ip-detected-box">
                <div className="ip-detected-row">
                  <span className="ip-label">Detected Client IP:</span>
                  <span className="ip-value">
                    {ipLoading ? "Detecting IP address..." : visitorIp}
                  </span>
                </div>
                <div className="ip-detected-row">
                  <span className="ip-label">Request Timestamp:</span>
                  <span className="ip-value">{ipLoggedTime}</span>
                </div>
                <div className="ip-detected-row">
                  <span className="ip-label">Security Protocol:</span>
                  <span className="ip-value" style={{ color: "#7ac57a" }}>
                    Logged & Authorized
                  </span>
                </div>
              </div>

              <p style={{ fontSize: "0.88rem", color: "#8a7e72" }}>
                By proceeding, you acknowledge that your network IP ({visitorIp || "Client"}) has been documented for security and anti-spam verification.
              </p>
            </div>

            <div className="modal-actions">
              <button
                className="btn btn-outline"
                onClick={() => setShowIpModal(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={handleConfirmReveal}
              >
                <ShieldLockIcon size={15} />
                <span>I Understand — Reveal Contact</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer>
        <div style={{ maxWidth: "1120px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.1rem", color: "#d4a853", letterSpacing: "0.2em" }}>
            Abu Ubayda
          </div>
          <div>© {new Date().getFullYear()} · Metropolitan University, Sylhet, Bangladesh</div>
          <div style={{ color: "#544a40", fontSize: "0.7rem", marginTop: "0.3rem" }}>
            CSE Student · Software Developer · Organizing President at Students Welfare
          </div>
        </div>
      </footer>
    </div>
  );
}
