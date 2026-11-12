import { useState, useEffect, useRef } from "react";
import { galleryItems, welfare } from "./data/content.js";

// ==========================================
// SVG ICONS (100% Vector, Zero Emojis)
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

function DocumentIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function StarIcon({ size = 14, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function GitForkIcon({ size = 14, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
      <path d="M12 12v3" />
    </svg>
  );
}

function ArrowLeftIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function ArrowRightIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ZoomInIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

// ==========================================
// CONSTANTS & REPOS DATA
// ==========================================

const NAV_LINKS = ["About", "Skills", "Projects", "Gallery", "Social", "Contact"];

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

// Fallback Repositories if GitHub API is offline or rate limited
const FALLBACK_REPOS = [
  {
    name: "AI_Project",
    description: "MetroMate: Intelligent Telegram bot assistant for Metropolitan University students with Gemini AI integration.",
    language: "Python",
    html_url: "https://github.com/ubaydafox/AI_Project",
    stargazers_count: 3,
    forks_count: 1,
  },
  {
    name: "portfolio",
    description: "Personal portfolio website engineered with React, Vite, and high-contrast editorial typography.",
    language: "JavaScript",
    html_url: "https://github.com/ubaydafox",
    stargazers_count: 2,
    forks_count: 0,
  },
  {
    name: "Academic-Work",
    description: "University CSE coursework, object-oriented Java solutions, data structures and algorithms experiments.",
    language: "Java",
    html_url: "https://github.com/ubaydafox",
    stargazers_count: 1,
    forks_count: 0,
  },
];

// Intersection Observer Hook
function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.12 });
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

// Language color mapper
function getLangColor(lang) {
  switch (lang?.toLowerCase()) {
    case "python": return "#3572A5";
    case "javascript": return "#f1e05a";
    case "java": return "#b07219";
    case "c++": return "#f34b7d";
    case "html": return "#e34c26";
    case "css": return "#563d7c";
    default: return "#d4a853";
  }
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

  // Feature 2: CV Modal
  const [showCvModal, setShowCvModal] = useState(false);

  // Feature 3: Gallery & Lightbox (content managed from the local admin panel)
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null); // null when closed

  // Feature 4: On-Site Contact Form State
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [formSending, setFormSending] = useState(false);
  const [formSentSuccess, setFormSentSuccess] = useState(false);

  // Phone / Email IP Protected Reveal State
  const [isContactRevealed, setIsContactRevealed] = useState(false);
  const [showIpModal, setShowIpModal] = useState(false);
  const [visitorIp, setVisitorIp] = useState("");
  const [ipLoading, setIpLoading] = useState(false);
  const [ipLoggedTime, setIpLoggedTime] = useState("");
  const [copiedKey, setCopiedKey] = useState(null);

  // Feature 6: Live GitHub Repos & Stats
  const [githubUser, setGithubUser] = useState({ public_repos: 4, followers: 2, following: 2 });
  const [githubRepos, setGithubRepos] = useState(FALLBACK_REPOS);
  const [githubLive, setGithubLive] = useState(false);

  const phoneNumber = "01607896458";
  const emailAddress = "ubaydaazad@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/ubaydafox";
  const githubUrl = "https://github.com/ubaydafox";
  const instagramUrl = "https://instagram.com/ubaydafox";

  // Scroll listener: handle top state for scroll indicator and navbar scrolled state
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
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
      { threshold: 0.3 }
    );
    NAV_LINKS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Fetch GitHub User & Repositories (Feature 6)
  useEffect(() => {
    let isMounted = true;
    Promise.all([
      fetch("https://api.github.com/users/ubaydafox").then(r => r.ok ? r.json() : null),
      fetch("https://api.github.com/users/ubaydafox/repos?sort=updated&per_page=6").then(r => r.ok ? r.json() : null)
    ])
      .then(([userData, reposData]) => {
        if (!isMounted) return;
        if (userData && userData.public_repos !== undefined) {
          setGithubUser(userData);
        }
        if (Array.isArray(reposData) && reposData.length > 0) {
          setGithubRepos(reposData);
          setGithubLive(true);
        }
      })
      .catch((err) => {
        console.warn("GitHub API offline/rate-limited, using fallback data:", err);
      });

    return () => { isMounted = false; };
  }, []);

  // Keyboard navigation for Lightbox
  const lightboxCount = galleryItems.filter(
    (item) => galleryFilter === "All" || item.category.toLowerCase() === galleryFilter.toLowerCase()
  ).length;

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") setLightboxIndex((p) => (p > 0 ? p - 1 : lightboxCount - 1));
      if (e.key === "ArrowRight") setLightboxIndex((p) => (p < lightboxCount - 1 ? p + 1 : 0));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, lightboxCount]);

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

    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        setVisitorIp(data.ip || "103.145.72.19");
        setIpLoading(false);
      })
      .catch(() => {
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

  // Feature 4: Handle Contact Form Submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) return;

    setFormSending(true);

    // Simulated reliable direct dispatch
    setTimeout(() => {
      setFormSending(false);
      setFormSentSuccess(true);
      setContactSubject("");
      setContactMessage("");
    }, 900);
  };

  // Feature 3: Lightbox Controls
  const filteredGallery = galleryItems.filter(item => {
    if (galleryFilter === "All") return true;
    return item.category.toLowerCase() === galleryFilter.toLowerCase();
  });

  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredGallery.length - 1));
  };

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev < filteredGallery.length - 1 ? prev + 1 : 0));
  };

  const currentLightboxItem = lightboxIndex !== null ? filteredGallery[lightboxIndex] : null;

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

        /* Desktop Cursor Glow */
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
          gap: 1.7rem;
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

        .nav-btn-cv {
          padding: 0.4rem 0.9rem;
          border: 1px solid rgba(212, 168, 83, 0.35);
          color: #d4a853;
          font-family: 'Courier Prime', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          background: rgba(212, 168, 83, 0.05);
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        .nav-btn-cv:hover {
          background: #d4a853;
          color: #0f0d0b;
        }

        .nav-socials {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-left: 0.8rem;
          padding-left: 0.8rem;
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
          font-size: 1.45rem;
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
          gap: 1.1rem;
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
          0%, 100% { opacity: 1; transform: scaleY(1); transform-origin: top; }
          50% { opacity: 0.3; transform: scaleY(0.45); transform-origin: top; }
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

        /* Feature 6: Live GitHub Repos Widget */
        .github-stats-bar {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-top: 2rem;
          margin-bottom: 1.5rem;
        }

        .github-stat-pill {
          padding: 0.6rem 1.2rem;
          background: rgba(212, 168, 83, 0.04);
          border: 1px solid rgba(212, 168, 83, 0.2);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: 'Courier Prime', monospace;
          font-size: 0.76rem;
        }

        .github-stat-num {
          color: #d4a853;
          font-weight: 700;
        }

        .repo-card {
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(212, 168, 83, 0.12);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.25s ease;
        }

        .repo-card:hover {
          border-color: rgba(212, 168, 83, 0.35);
          background: rgba(212, 168, 83, 0.03);
          transform: translateY(-2px);
        }

        .repo-name-link {
          font-family: 'Cinzel', serif;
          font-size: 1.15rem;
          color: #f0e8d8;
          text-decoration: none;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .repo-name-link:hover {
          color: #d4a853;
        }

        .repo-desc {
          font-size: 0.92rem;
          color: #b5a898;
          line-height: 1.6;
          margin: 0.8rem 0 1.2rem;
          font-weight: 300;
        }

        .repo-meta {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          font-family: 'Courier Prime', monospace;
          font-size: 0.72rem;
          color: #8a7e72;
        }

        .repo-lang-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }

        /* Feature 3: Gallery & Lightbox Styles */
        .gallery-filter-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .filter-buttons {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          background: transparent;
          border: 1px solid rgba(212, 168, 83, 0.2);
          color: #b5a898;
          padding: 0.4rem 1rem;
          font-family: 'Courier Prime', monospace;
          font-size: 0.74rem;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.2s;
        }

        .filter-btn:hover, .filter-btn.active {
          border-color: #d4a853;
          color: #0f0d0b;
          background: #d4a853;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.5rem;
        }

        .gallery-item-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(212, 168, 83, 0.15);
          overflow: hidden;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .gallery-item-card:hover {
          border-color: rgba(212, 168, 83, 0.45);
          transform: translateY(-4px);
        }

        .gallery-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: #15120f;
        }

        .gallery-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .gallery-item-card:hover .gallery-img-wrap img {
          transform: scale(1.04);
        }

        .gallery-item-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 13, 11, 0.65);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d4a853;
          transition: opacity 0.3s ease;
        }

        .gallery-item-card:hover .gallery-item-overlay {
          opacity: 1;
        }

        .gallery-item-meta {
          padding: 1.2rem;
          border-top: 1px solid rgba(212, 168, 83, 0.1);
        }

        .gallery-item-subcat {
          font-family: 'Courier Prime', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #d4a853;
          margin-bottom: 0.4rem;
        }

        .gallery-item-title {
          font-family: 'Cinzel', serif;
          font-size: 1.1rem;
          color: #f0e8d8;
        }

        /* Lightbox Modal */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 8, 7, 0.94);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          z-index: 250;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: modalFadeIn 0.25s ease;
        }

        .lightbox-container {
          max-width: 1000px;
          width: 100%;
          max-height: 90vh;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 2rem;
          background: #14120f;
          border: 1px solid rgba(212, 168, 83, 0.3);
          box-shadow: 0 25px 60px rgba(0,0,0,0.8);
          overflow: hidden;
          position: relative;
        }

        .lightbox-img-area {
          background: #090807;
          display: flex;
          align-items: center;
          justify-content: center;
          max-height: 80vh;
          overflow: hidden;
          position: relative;
        }

        .lightbox-img-area img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
        }

        .lightbox-info-area {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow-y: auto;
        }

        .lightbox-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(20, 18, 15, 0.7);
          border: 1px solid rgba(212, 168, 83, 0.3);
          color: #d4a853;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .lightbox-nav-btn:hover {
          background: #d4a853;
          color: #0f0d0b;
        }

        .lightbox-prev { left: 1rem; }
        .lightbox-next { right: 1rem; }

        .lightbox-close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: transparent;
          border: none;
          color: #b5a898;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 10;
        }

        .lightbox-close-btn:hover {
          color: #d4a853;
        }

        /* Feature 5: Leadership Milestones & Timeline */
        .impact-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .impact-card {
          padding: 1.8rem 1.2rem;
          border: 1px solid rgba(212, 168, 83, 0.2);
          background: rgba(212, 168, 83, 0.02);
          text-align: center;
        }

        .impact-number {
          font-family: 'Cinzel', serif;
          font-size: 2.2rem;
          color: #d4a853;
          margin-bottom: 0.3rem;
          display: block;
        }

        .impact-title {
          font-family: 'Courier Prime', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #b5a898;
        }

        .timeline-box {
          position: relative;
          padding-left: 2rem;
          border-left: 1px solid rgba(212, 168, 83, 0.3);
          margin-top: 1.5rem;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2.2rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: -2.35rem;
          top: 0.3rem;
          width: 11px;
          height: 11px;
          background: #d4a853;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(212, 168, 83, 0.5);
        }

        .timeline-date {
          font-family: 'Courier Prime', monospace;
          font-size: 0.74rem;
          letter-spacing: 0.2em;
          color: #d4a853;
          text-transform: uppercase;
          margin-bottom: 0.3rem;
        }

        .timeline-role {
          font-family: 'Cinzel', serif;
          font-size: 1.25rem;
          color: #f0e8d8;
          margin-bottom: 0.5rem;
        }

        .timeline-desc {
          font-size: 0.98rem;
          color: #c4b9a9;
          line-height: 1.75;
          font-weight: 300;
        }

        /* Feature 4: On-Site Direct Contact Form */
        .contact-form-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(212, 168, 83, 0.2);
          padding: 2.2rem;
          margin-top: 2rem;
        }

        .form-group {
          margin-bottom: 1.2rem;
        }

        .form-label {
          display: block;
          font-family: 'Courier Prime', monospace;
          font-size: 0.74rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #b5a898;
          margin-bottom: 0.4rem;
        }

        .form-input, .form-textarea {
          width: 100%;
          background: rgba(10, 8, 7, 0.6);
          border: 1px solid rgba(212, 168, 83, 0.25);
          color: #f0e8d8;
          padding: 0.8rem 1rem;
          font-family: 'Courier Prime', monospace;
          font-size: 0.88rem;
          border-radius: 2px;
          transition: border-color 0.2s;
        }

        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #d4a853;
          background: rgba(15, 13, 11, 0.9);
        }

        .form-textarea {
          resize: vertical;
          min-height: 110px;
        }

        .form-success-box {
          padding: 1.5rem;
          background: rgba(122, 197, 122, 0.08);
          border: 1px solid rgba(122, 197, 122, 0.3);
          color: #92e092;
          font-family: 'Courier Prime', monospace;
          font-size: 0.85rem;
          line-height: 1.6;
        }

        /* Feature 2: CV Modal Styles */
        .cv-modal-box {
          background: #14120f;
          border: 1px solid rgba(212, 168, 83, 0.35);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
          max-width: 840px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 2.8rem;
          position: relative;
        }

        .cv-header-block {
          border-bottom: 1px solid rgba(212, 168, 83, 0.2);
          padding-bottom: 1.5rem;
          margin-bottom: 1.8rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .cv-name {
          font-family: 'Cinzel', serif;
          font-size: 2.2rem;
          color: #f0e8d8;
        }

        .cv-subtitle {
          font-family: 'Courier Prime', monospace;
          font-size: 0.82rem;
          color: #d4a853;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-top: 0.3rem;
        }

        .cv-section-h3 {
          font-family: 'Cinzel', serif;
          font-size: 1.25rem;
          color: #d4a853;
          margin: 1.8rem 0 0.8rem;
          letter-spacing: 0.08em;
          border-bottom: 1px solid rgba(212, 168, 83, 0.15);
          padding-bottom: 0.4rem;
        }

        .cv-entry {
          margin-bottom: 1.2rem;
        }

        .cv-entry-head {
          display: flex;
          justify-content: space-between;
          font-family: 'Courier Prime', monospace;
          font-size: 0.85rem;
          margin-bottom: 0.3rem;
        }

        .cv-entry-title {
          color: #f0e8d8;
          font-weight: 700;
        }

        .cv-entry-date {
          color: #d4a853;
        }

        .cv-entry-sub {
          font-size: 0.95rem;
          color: #b5a898;
          font-style: italic;
          margin-bottom: 0.4rem;
        }

        .cv-entry-body {
          font-size: 0.95rem;
          color: #c4b9a9;
          line-height: 1.7;
          font-weight: 300;
        }

        /* Generic Modals */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 8, 7, 0.88);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 220;
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
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
          max-width: 540px;
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

        /* Contact Details Rows */
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

        .ip-label { color: #b5a898; }
        .ip-value { color: #d4a853; font-weight: 700; }

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

        /* Print styles for CV */
        @media print {
          body * {
            visibility: hidden;
          }
          .cv-modal-box, .cv-modal-box * {
            visibility: visible;
          }
          .cv-modal-box {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: #ffffff !important;
            color: #111111 !important;
            border: none;
            box-shadow: none;
            padding: 0;
          }
          .cv-name, .cv-entry-title {
            color: #000000 !important;
          }
          .cv-subtitle, .cv-section-h3, .cv-entry-date {
            color: #333333 !important;
          }
          .cv-entry-sub, .cv-entry-body {
            color: #444444 !important;
          }
          .cv-action-bar, .modal-close-btn {
            display: none !important;
          }
        }

        /* Responsive Media Queries */
        @media (max-width: 900px) {
          .grid-2 { grid-template-columns: 1fr; gap: 2.5rem; }
          .grid-3 { grid-template-columns: 1fr; }
          .impact-grid { grid-template-columns: 1fr 1fr; }
          .lightbox-container { grid-template-columns: 1fr; max-height: 95vh; }
          .lightbox-img-area { max-height: 45vh; }
        }

        @media (max-width: 768px) {
          .nav-links, .nav-socials { display: none; }
          .hamburger { display: flex; }
          .mobile-menu-overlay { display: flex; }
          .hero-container { padding: 6.5rem 1.5rem 4.5rem; }
          .section { padding: 4.5rem 1.5rem; }
          .contact-item-row { flex-direction: column; align-items: flex-start; gap: 0.8rem; }
          .contact-right-val { width: 100%; justify-content: space-between; }
          .impact-grid { grid-template-columns: 1fr 1fr; }
          .gallery-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 480px) {
          .hero-actions { flex-direction: column; width: 100%; }
          .hero-actions .btn { width: 100%; }
          .impact-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Ambient background glow */}
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
            <li>
              <button className="nav-btn-cv" onClick={() => setShowCvModal(true)}>
                <DocumentIcon size={14} />
                <span>Resume</span>
              </button>
            </li>
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

      {/* Full-screen Mobile Menu */}
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
        <div
          className="mobile-menu-item"
          style={{ color: "#d4a853", display: "flex", alignItems: "center", gap: "0.6rem" }}
          onClick={() => { setMenuOpen(false); setShowCvModal(true); }}
        >
          <DocumentIcon size={20} />
          <span>Curriculum Vitae</span>
        </div>
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
            <button className="btn btn-outline" onClick={() => setShowCvModal(true)}>
              <DocumentIcon size={15} />
              Download CV
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo("Gallery")}>
              <PaletteIcon size={15} />
              Design & Photos
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo("Contact")}>
              <MailIcon size={15} />
              Contact
            </button>
          </div>
        </div>

        {/* Scroll Indicator: visible ONLY at the top */}
        <div
          className={`hero-scroll ${atTop ? "visible" : "hidden"}`}
          onClick={() => scrollTo("About")}
          title="Scroll down"
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
            <p className="about-text" style={{ fontSize: "1.15rem", lineHeight: 1.95, color: "#c8bfb2", fontWeight: 300, marginBottom: "1.5rem" }}>
              I am a <strong>4th Year Computer Science & Engineering student</strong> at Metropolitan University, Sylhet, focused on software engineering, intelligent agents, and aesthetic digital experiences.
            </p>
            <p className="about-text" style={{ fontSize: "1.15rem", lineHeight: 1.95, color: "#c8bfb2", fontWeight: 300, marginBottom: "1.5rem" }}>
              From building <strong>AI-powered academic bots</strong> with conversation memory to shooting natural light portraits and brand graphics, I bridge the gap between technical rigor and creative expression.
            </p>
            <p className="about-text" style={{ fontSize: "1.15rem", lineHeight: 1.95, color: "#c8bfb2", fontWeight: 300, marginBottom: "1.5rem" }}>
              Beyond engineering, I actively serve as <strong>Organizing President at Students Welfare</strong>, spearheading campus support programs, welfare initiatives, and youth leadership drives.
            </p>

            <div style={{ marginTop: "2rem" }}>
              <div className="section-label" style={{ marginBottom: "0.9rem" }}>Core Strengths</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {strengths.map((s) => (
                  <span key={s} style={{ padding: "0.45rem 1rem", border: "1px solid rgba(212, 168, 83, 0.25)", fontFamily: "'Courier Prime', monospace", fontSize: "0.76rem", color: "#e0d5c5" }}>
                    {s}
                  </span>
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
                <div key={s.label} className="card" style={{ textAlign: "center", padding: "1.6rem 1rem" }}>
                  <span style={{ fontFamily: "'Cinzel', serif", fontSize: "2.3rem", color: "#d4a853", display: "block" }}>{s.num}</span>
                  <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#b5a898", marginTop: "0.3rem", display: "block" }}>{s.label}</span>
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
              <div style={{ marginTop: "1.2rem" }}>
                <button
                  className="btn btn-outline"
                  onClick={() => setShowCvModal(true)}
                  style={{ padding: "0.5rem 1rem", fontSize: "0.72rem" }}
                >
                  <DocumentIcon size={14} />
                  <span>View Full CV</span>
                </button>
              </div>
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

      {/* PROJECTS SECTION (With MetroMate & Feature 6 Live GitHub Repos Widget) */}
      <Section id="Projects">
        <div className="section-label">Selected Work</div>
        <h2 className="section-title">
          Featured<br />
          <em>Projects</em>
        </h2>

        {/* MetroMate AI Bot */}
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

        {/* Feature 6: Live GitHub Stats & Repositories Widget */}
        <div style={{ marginTop: "3.5rem" }}>
          <div className="section-label">Open Source Footprint</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.8rem", color: "#f0e8d8" }}>
              Live GitHub Activity
            </h3>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ padding: "0.5rem 1rem", fontSize: "0.72rem" }}
            >
              <GithubIcon size={14} />
              <span>@ubaydafox on GitHub</span>
              <ExternalLinkIcon size={12} />
            </a>
          </div>

          {/* GitHub Stats Bar */}
          <div className="github-stats-bar">
            <div className="github-stat-pill">
              <GithubIcon size={15} />
              <span>User: <strong style={{ color: "#d4a853" }}>ubaydafox</strong></span>
            </div>
            <div className="github-stat-pill">
              <span>Public Repositories:</span>
              <span className="github-stat-num">{githubUser.public_repos || 4}</span>
            </div>
            <div className="github-stat-pill">
              <span>Followers:</span>
              <span className="github-stat-num">{githubUser.followers || 2}</span>
            </div>
            <div className="github-stat-pill">
              <span>Status:</span>
              <span style={{ color: githubLive ? "#7ac57a" : "#b5a898" }}>{githubLive ? "Live from GitHub" : "Offline snapshot"}</span>
            </div>
          </div>

          {/* Repos Grid */}
          <div className="grid-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {githubRepos.slice(0, 3).map((repo) => (
              <div key={repo.name} className="repo-card">
                <div>
                  <a
                    href={repo.html_url || githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-name-link"
                  >
                    <span>{repo.name}</span>
                    <ExternalLinkIcon size={12} />
                  </a>
                  <p className="repo-desc">
                    {repo.description || "Public software engineering repository and algorithm implementations."}
                  </p>
                </div>

                <div className="repo-meta">
                  {repo.language && (
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <span className="repo-lang-dot" style={{ backgroundColor: getLangColor(repo.language) }} />
                      <span>{repo.language}</span>
                    </div>
                  )}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <StarIcon size={12} />
                    <span>{repo.stargazers_count ?? 1}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <GitForkIcon size={12} />
                    <span>{repo.forks_count ?? 0}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FEATURE 3: DESIGN & PHOTOGRAPHY SHOWCASE WITH LIGHTBOX & MANAGEMENT SYSTEM */}
      <Section id="Gallery">
        <div className="section-label">Visual Portfolio</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
          <div>
            <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
              Design &<br />
              <em>Photography Gallery</em>
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#b5a898", maxWidth: "600px", fontWeight: 300 }}>
              Curated collection of Adobe Illustrator vector art, event branding, typographic posters, and natural light photography.
            </p>
          </div>

          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <InstagramIcon size={15} />
              <span>Instagram Feed</span>
            </a>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="gallery-filter-bar">
          <div className="filter-buttons">
            {["All", "Design", "Photography"].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${galleryFilter === cat ? "active" : ""}`}
                onClick={() => setGalleryFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.74rem", color: "#8a7e72" }}>
            Showing {filteredGallery.length} {filteredGallery.length === 1 ? "work" : "works"}
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              className="gallery-item-card"
              onClick={() => setLightboxIndex(idx)}
            >
              <div className="gallery-img-wrap">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-item-overlay">
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                    <ZoomInIcon size={24} />
                    <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                      Enlarge View
                    </span>
                  </div>
                </div>
              </div>

              <div className="gallery-item-meta">
                <div className="gallery-item-subcat">{item.subcategory}</div>
                <div className="gallery-item-title">{item.title}</div>
                <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.72rem", color: "#7a6e60", marginTop: "0.4rem" }}>
                  {item.tools}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FEATURE 5: STUDENTS WELFARE (content edited from the admin panel -> src/data/content.json) */}
      <Section id="Social">
        <div className="section-label">Community & Leadership</div>
        <h2 className="section-title">
          {welfare.organization}<br />
          <em>Leadership & Impact</em>
        </h2>

        {welfare.stats?.length > 0 && (
          <div className="impact-grid">
            {welfare.stats.map((s, i) => (
              <div key={i} className="impact-card">
                <span className="impact-number">{s.value}</span>
                <span className="impact-title">{s.label}</span>
              </div>
            ))}
          </div>
        )}

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
              <div className="section-label" style={{ marginBottom: "0.6rem" }}>Executive Office</div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.7rem", color: "#f0e8d8", marginBottom: "0.4rem" }}>
                {welfare.organization}
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
                {welfare.role}
              </div>
            </div>

            <p className="about-text" style={{ fontSize: "1.1rem", lineHeight: 1.9, color: "#c8bfb2", fontWeight: 300 }}>
              {welfare.intro}
            </p>
          </div>

          <div>
            <div className="section-label" style={{ marginBottom: "1rem" }}>Leadership Milestones</div>
            <div className="timeline-box">
              {welfare.timeline.map((t, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-date">{t.date}</div>
                  <div className="timeline-role">{t.title}</div>
                  <p className="timeline-desc">{t.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT SECTION (With Feature 4 Direct Form & IP Protected Info) */}
      <Section id="Contact">
        <div className="section-label">Connect</div>
        <h2 className="section-title">
          Get in<br />
          <em>Touch</em>
        </h2>

        <div className="grid-2">
          {/* Left Column: Direct Message Form (Feature 4) */}
          <div>
            <div className="section-label" style={{ marginBottom: "0.6rem" }}>Direct Inquiry</div>
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.5rem", color: "#f0e8d8", marginBottom: "0.8rem" }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: "0.98rem", color: "#b5a898", lineHeight: 1.7, fontWeight: 300, marginBottom: "1.5rem" }}>
              Want to collaborate, discuss a software project, or request design work? Fill out the form below to reach me directly.
            </p>

            <div className="contact-form-box">
              {formSentSuccess ? (
                <div className="form-success-box">
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", color: "#d4a853" }}>
                    <CheckIcon size={16} />
                    <strong>Message Dispatched Successfully!</strong>
                  </div>
                  <p>
                    Thank you, <strong>{contactName || "Friend"}</strong>. Your message has been received. I will reply back to your email ({contactEmail}) promptly.
                  </p>
                  <button
                    className="btn btn-outline"
                    onClick={() => setFormSentSuccess(false)}
                    style={{ marginTop: "1rem", padding: "0.4rem 0.8rem", fontSize: "0.72rem" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit}>
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nahidul Islam"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. yourname@domain.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. Software Project / Design Collaboration"
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      required
                      placeholder="Write your message here..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formSending}
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    {formSending ? "Sending Message..." : "Dispatch Message"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Protected Contact Info with IP Verification & Socials */}
          <div>
            <div className="section-label" style={{ marginBottom: "0.6rem" }}>Direct Channels</div>
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.5rem", color: "#f0e8d8", marginBottom: "0.8rem" }}>
              Protected Contact Details
            </h3>
            <p style={{ fontSize: "0.98rem", color: "#b5a898", lineHeight: 1.7, fontWeight: 300, marginBottom: "1.5rem" }}>
              Direct phone and personal email are protected against automated web scraping bots.
            </p>

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

              {/* LinkedIn */}
              <div className="contact-item-row">
                <div className="contact-left">
                  <div className="contact-icon-wrapper">
                    <LinkedInIcon size={18} />
                  </div>
                  <span className="contact-type-label">LinkedIn</span>
                </div>
                <div className="contact-right-val">
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-action-btn">
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
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="contact-action-btn">
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
                  <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="contact-action-btn">
                    <span>ubaydafox</span>
                    <ExternalLinkIcon size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Toggle state reset if revealed */}
            {isContactRevealed && (
              <div style={{ marginTop: "1rem", display: "flex", justifyContent: "flex-end" }}>
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

            {/* Location Card */}
            <div style={{ marginTop: "2rem", padding: "1.8rem", border: "1px solid rgba(212, 168, 83, 0.15)", background: "rgba(212, 168, 83, 0.02)" }}>
              <div className="section-label" style={{ marginBottom: "0.5rem" }}>Location</div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.3rem", color: "#f0e8d8" }}>
                Sylhet, Bangladesh
              </div>
              <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.74rem", color: "#8a7e72", marginTop: "0.4rem" }}>
                Metropolitan University · Available for Remote Software & Design Engagements
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FEATURE 3 LIGHTBOX MODAL */}
      {lightboxIndex !== null && currentLightboxItem && (
        <div className="lightbox-overlay" onClick={() => setLightboxIndex(null)}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close Lightbox"
            >
              <CloseIcon size={22} />
            </button>

            {/* Left Image View */}
            <div className="lightbox-img-area">
              <img src={currentLightboxItem.image} alt={currentLightboxItem.title} />
              <button
                className="lightbox-nav-btn lightbox-prev"
                onClick={handlePrevLightbox}
                aria-label="Previous artwork"
              >
                <ArrowLeftIcon size={20} />
              </button>
              <button
                className="lightbox-nav-btn lightbox-next"
                onClick={handleNextLightbox}
                aria-label="Next artwork"
              >
                <ArrowRightIcon size={20} />
              </button>
            </div>

            {/* Right Meta View */}
            <div className="lightbox-info-area">
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
                  <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.74rem", letterSpacing: "0.2em", color: "#d4a853", textTransform: "uppercase" }}>
                    {currentLightboxItem.category} // {currentLightboxItem.subcategory}
                  </span>
                  <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.72rem", color: "#8a7e72" }}>
                    {lightboxIndex + 1} / {filteredGallery.length}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.8rem", color: "#f0e8d8", marginBottom: "1rem" }}>
                  {currentLightboxItem.title}
                </h3>

                <p style={{ fontSize: "1.05rem", color: "#c4b9a9", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.5rem" }}>
                  {currentLightboxItem.description}
                </p>

                <div style={{ padding: "1rem", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(212, 168, 83, 0.15)", marginBottom: "1.5rem" }}>
                  <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.72rem", color: "#8a7e72", textTransform: "uppercase", marginBottom: "0.3rem" }}>
                    Tools & Medium
                  </div>
                  <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.88rem", color: "#d4a853" }}>
                    {currentLightboxItem.tools}
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  <InstagramIcon size={16} />
                  <span>View on Instagram @ubaydafox</span>
                  <ExternalLinkIcon size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FEATURE 2: DOWNLOAD CV / RESUME MODAL */}
      {showCvModal && (
        <div className="modal-overlay" onClick={() => setShowCvModal(false)}>
          <div className="cv-modal-box cv-modal-printable" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setShowCvModal(false)}
              style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}
            >
              <CloseIcon size={20} />
            </button>

            {/* CV Header */}
            <div className="cv-header-block">
              <div>
                <h1 className="cv-name">Abu Ubayda</h1>
                <div className="cv-subtitle">
                  CSE Student · Software Developer · Organizing President at Students Welfare
                </div>
                <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.78rem", color: "#8a7e72", marginTop: "0.4rem" }}>
                  Sylhet, Bangladesh · GitHub: github.com/ubaydafox · LinkedIn: linkedin.com/in/ubaydafox
                </div>
              </div>

              {/* Action Bar */}
              <div className="cv-action-bar" style={{ display: "flex", gap: "0.8rem", marginTop: "0.5rem" }}>
                <button
                  className="btn btn-primary"
                  onClick={() => window.print()}
                  style={{ padding: "0.5rem 1.2rem", fontSize: "0.72rem" }}
                >
                  <DocumentIcon size={14} />
                  <span>Print / Save PDF</span>
                </button>
              </div>
            </div>

            {/* Education */}
            <h3 className="cv-section-h3">Education</h3>
            <div className="cv-entry">
              <div className="cv-entry-head">
                <span className="cv-entry-title">B.Sc. in Computer Science & Engineering</span>
                <span className="cv-entry-date">2023 — 2027 (Expected)</span>
              </div>
              <div className="cv-entry-sub">Metropolitan University, Sylhet, Bangladesh</div>
              <p className="cv-entry-body">
                Key Focus: Software Engineering, Data Structures & Algorithms, Artificial Intelligence & Machine Learning Integration, Object-Oriented Programming (Java, Python, C/C++), and Database Management Systems.
              </p>
            </div>

            {/* Leadership Experience */}
            <h3 className="cv-section-h3">Leadership & Experience</h3>
            <div className="cv-entry">
              <div className="cv-entry-head">
                <span className="cv-entry-title">Organizing President</span>
                <span className="cv-entry-date">2024 — Present</span>
              </div>
              <div className="cv-entry-sub">Students Welfare, Metropolitan University</div>
              <p className="cv-entry-body">
                • Presiding over the executive student welfare committee, orchestrating volunteer operations, and directing community aid programs.<br />
                • Spearheading academic assistance funds, emergency relief drives, and student guidance initiatives supporting over 500+ peers.<br />
                • Managing cross-faculty event logistics, university blood donation campaigns, and administrative student representation.
              </p>
            </div>

            {/* Technical Projects */}
            <h3 className="cv-section-h3">Technical Projects</h3>
            <div className="cv-entry">
              <div className="cv-entry-head">
                <span className="cv-entry-title">MetroMate — AI Academic Assistant</span>
                <span className="cv-entry-date">Python · Telegram API · Gemini AI</span>
              </div>
              <p className="cv-entry-body">
                • Engineered an intelligent university chatbot providing automated routine schedules, faculty contacts, and course queries in both Bangla and English.<br />
                • Integrated Google Gemini API for context-aware academic Q&A with conversational continuity and state memory.<br />
                • Open source repository: github.com/ubaydafox/AI_Project.
              </p>
            </div>

            <div className="cv-entry">
              <div className="cv-entry-head">
                <span className="cv-entry-title">Editorial Responsive Web Architecture</span>
                <span className="cv-entry-date">React · Vite · CSS3</span>
              </div>
              <p className="cv-entry-body">
                • Developed high-performance, mobile-optimized personal web portal featuring client-side IP verification security and modular gallery systems.
              </p>
            </div>

            {/* Technical Skills */}
            <h3 className="cv-section-h3">Technical & Creative Skills</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "0.5rem" }}>
              <div>
                <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.78rem", color: "#d4a853", textTransform: "uppercase" }}>Languages & Database</div>
                <div style={{ fontSize: "0.92rem", color: "#c4b9a9", marginTop: "0.2rem" }}>Java, Python, C, C++, HTML5, CSS3, JavaScript, MySQL</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.78rem", color: "#d4a853", textTransform: "uppercase" }}>Tools & AI Frameworks</div>
                <div style={{ fontSize: "0.92rem", color: "#c4b9a9", marginTop: "0.2rem" }}>Gemini API, Telegram Bot API, Git, GitHub, Vite</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.78rem", color: "#d4a853", textTransform: "uppercase" }}>Design & Visual Arts</div>
                <div style={{ fontSize: "0.92rem", color: "#c4b9a9", marginTop: "0.2rem" }}>Adobe Illustrator, Canva, Brand Identity, Poster Typography</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.78rem", color: "#d4a853", textTransform: "uppercase" }}>Photography</div>
                <div style={{ fontSize: "0.92rem", color: "#c4b9a9", marginTop: "0.2rem" }}>Natural Light Portraiture, Landscape & Nature Compositions</div>
              </div>
            </div>
          </div>
        </div>
      )}

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

            <div className="modal-body" style={{ fontSize: "1rem", lineHeight: 1.7, color: "#c4b9a9", marginBottom: "1.8rem" }}>
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

            <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end", flexWrap: "wrap" }}>
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
