import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Mail, Github, Linkedin, FileText, Send, Moon, Sun, GraduationCap,
  Code2, ShieldCheck, Network, Brain, MessagesSquare, Sparkles,
  Award, Trophy, BookOpen, ArrowUpRight, MapPin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vineetha Satya Punyamanthula — B.Tech CSE (Cyber Security)" },
      { name: "description", content: "Portfolio of Vineetha Satya Punyamanthula — projects, skills, certifications, and learning journey in cyber security." },
      { property: "og:title", content: "Vineetha Satya Punyamanthula — Portfolio" },
      { property: "og:description", content: "B.Tech CSE (Cyber Security) student passionate about technology, problem solving and continuous learning." },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  { name: "C Programming", level: "Basic", icon: Code2 },
  { name: "Python", level: "Basic", icon: Code2 },
  { name: "HTML", level: "Basic", icon: Code2 },
  { name: "CSS", level: "Basic", icon: Code2 },
  { name: "Networking Fundamentals", level: "Foundational", icon: Network },
  { name: "Cyber Security Fundamentals", level: "Foundational", icon: ShieldCheck },
  { name: "Problem Solving", level: "Core strength", icon: Brain },
  { name: "Communication Skills", level: "Core strength", icon: MessagesSquare },
];

const PROJECTS = [
  {
    title: "Askify – AI-Driven Chatbot",
    subtitle: "Intelligent Learning Assistance",
    points: [
      "AI-driven chatbot for academic query resolution and learning support.",
      "Automated query processing pipeline to provide relevant responses.",
      "Research paper presented at ICRCSET 2026 International Conference.",
    ],
    tags: ["AI", "NLP", "Research"],
  },
  {
    title: "Oral Cancer Detection System",
    subtitle: "AI-powered web application",
    points: [
      "Built with Python, TensorFlow and Streamlit.",
      "Image preprocessing and prediction workflows.",
      "User authentication and prediction functionality integrated.",
    ],
    tags: ["Python", "TensorFlow", "Streamlit"],
  },
  {
    title: "Phishing Detection System",
    subtitle: "Security project",
    points: ["Detects suspicious URLs and messages to help users avoid phishing attempts."],
    tags: ["Cyber Security", "Python"],
  },
  {
    title: "Password Strength Analyzer",
    subtitle: "Security utility",
    points: ["Evaluates password strength against common patterns and provides feedback."],
    tags: ["Cyber Security"],
  },
  {
    title: "Vulnerability Scanner",
    subtitle: "Security project",
    points: ["Scans systems and applications to surface common security weaknesses."],
    tags: ["Cyber Security", "Networking"],
  },
];

const EDUCATION = [
  {
    degree: "B.Tech – Computer Science Engineering (Cyber Security)",
    place: "Pragati Engineering College, Surampalem",
    period: "2024 – 2028",
    score: "CGPA: 8.7 / 10",
  },
  {
    degree: "Intermediate (MPC)",
    place: "Sri Sai Aditya Junior College, Kakinada",
    period: "2022 – 2024",
    score: "Percentage: 90.8%",
  },
  {
    degree: "SSC",
    place: "Vinayaka High School, Kajuluru",
    period: "2022",
    score: "Percentage: 89%",
  },
];

const CERTS = [
  "Data Analytics Job Simulation — Deloitte (Forage)",
  "Introduction to Artificial Intelligence — Wadhwani Foundation",
  "Cisco Packet Tracer Networking Academy",
  "Cyber Security & Networking Workshop — SpyPro Security Solutions Pvt. Ltd.",
];

const ACHIEVEMENTS = [
  "Presented AI-Driven Chatbot research paper at ICRCSET 2026 International Conference.",
  "Active learner in Cyber Security and emerging technologies.",
];

const LEARNING = [
  "Python Programming",
  "Web Technologies",
  "Networking Concepts",
  "Cyber Security Fundamentals",
];

function Portfolio() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  return (
    <div className="min-h-screen">
      <Header theme={theme} setTheme={setTheme} navOpen={navOpen} setNavOpen={setNavOpen} />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header({
  theme, setTheme, navOpen, setNavOpen,
}: { theme: "dark" | "light"; setTheme: (t: "dark" | "light") => void; navOpen: boolean; setNavOpen: (b: boolean) => void }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold text-base sm:text-lg tracking-tight">
          <span className="text-gradient">Vineetha</span>
          <span className="text-muted-foreground"> .dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-muted-foreground hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9 grid place-items-center rounded-full glass hover:shadow-glow transition-all"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            aria-label="Menu"
            className="md:hidden h-9 w-9 grid place-items-center rounded-full glass"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-4 bg-foreground" />
              <span className="block h-0.5 w-4 bg-foreground" />
            </div>
          </button>
        </div>
      </div>
      {navOpen && (
        <div className="md:hidden border-t border-border px-5 py-4 glass">
          <div className="flex flex-col gap-3">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setNavOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="absolute top-40 right-1/4 h-72 w-72 rounded-full bg-accent/25 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
      </div>
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Open to internships &amp; placements
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
            Vineetha Satya<br />
            <span className="text-gradient">Punyamanthula</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground">
            B.Tech CSE (Cyber Security) Student
          </p>
          <p className="mt-2 max-w-xl text-sm sm:text-base text-muted-foreground/90">
            Passionate about technology, problem solving and continuous learning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:translate-y-[-1px] transition-transform"
            >
              <Send className="h-4 w-4" /> Contact Me
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:shadow-glow transition-all"
            >
              <FileText className="h-4 w-4" /> View Resume
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <SocialIcon href="https://www.linkedin.com/in/vineethapunyamanthula" label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
            <SocialIcon href="https://github.com/24A31A4627" label="GitHub"><Github className="h-4 w-4" /></SocialIcon>
            <SocialIcon href="mailto:vineethapunyamanthula@gmail.com" label="Email"><Mail className="h-4 w-4" /></SocialIcon>
          </div>
        </div>
        <div className="justify-self-center md:justify-self-end animate-float">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-primary opacity-40 blur-2xl" />
            <div className="relative h-56 w-56 sm:h-64 sm:w-64 rounded-full p-[3px] bg-gradient-primary shadow-glow">
              <div className="h-full w-full rounded-full glass grid place-items-center overflow-hidden">
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl font-bold text-gradient">VP</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Cyber Security</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="h-10 w-10 grid place-items-center rounded-full glass text-muted-foreground hover:text-foreground hover:shadow-glow transition-all"
    >
      {children}
    </a>
  );
}

function Section({
  id, eyebrow, title, children,
}: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 sm:mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">{eyebrow}</div>
          <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="A student building toward a career in cyber security.">
      <div className="glass rounded-2xl p-6 sm:p-10 max-w-3xl">
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Motivated B.Tech Cyber Security student with strong analytical and problem-solving skills.
          Possessing foundational knowledge in programming and web technologies. Passionate about
          learning new technologies, building practical projects, and gaining industry experience.
        </p>
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background.">
      <div className="grid gap-5 md:grid-cols-3">
        {EDUCATION.map((e) => (
          <div key={e.degree} className="glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all">
            <div className="h-10 w-10 rounded-full bg-gradient-primary grid place-items-center mb-4">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-semibold leading-snug">{e.degree}</h3>
            <div className="mt-2 text-sm text-muted-foreground flex items-start gap-1.5">
              <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" /> {e.place}
            </div>
            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{e.period}</span>
              <span className="px-2 py-1 rounded-full bg-primary/15 text-primary">{e.score}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools and topics I'm working with.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((s) => (
          <div key={s.name} className="glass rounded-2xl p-5 hover:shadow-glow hover:-translate-y-1 transition-all group">
            <div className="h-10 w-10 rounded-xl bg-primary/15 text-primary grid place-items-center mb-4 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
              <s.icon className="h-5 w-5" />
            </div>
            <div className="font-medium">{s.name}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.level}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built and explored.">
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <article key={p.title} className="glass rounded-2xl p-6 sm:p-7 hover:shadow-glow hover:-translate-y-1 transition-all group">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <div className="text-xs text-primary mt-1">{p.subtitle}</div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-transform" />
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {p.points.map((pt, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-[11px] px-2.5 py-1 rounded-full glass text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Courses and workshops.">
      <div className="grid gap-4 sm:grid-cols-2">
        {CERTS.map((c) => (
          <div key={c} className="glass rounded-2xl p-5 flex items-start gap-4 hover:shadow-glow transition-all">
            <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/15 text-primary grid place-items-center">
              <Award className="h-5 w-5" />
            </div>
            <div className="text-sm leading-relaxed">{c}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Highlights along the way.">
      <div className="grid gap-4 sm:grid-cols-2">
        {ACHIEVEMENTS.map((a) => (
          <div key={a} className="glass rounded-2xl p-6 flex items-start gap-4">
            <Trophy className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Learning() {
  return (
    <Section id="learning" eyebrow="Learning Journey" title="What I'm currently exploring.">
      <div className="flex flex-wrap gap-3">
        {LEARNING.map((l) => (
          <span key={l} className="glass rounded-full px-5 py-2.5 text-sm flex items-center gap-2 hover:shadow-glow transition-all">
            <BookOpen className="h-4 w-4 text-primary" />
            {l}
          </span>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's connect.">
      <div className="glass rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-semibold">
          Open to internships, placements <br className="hidden sm:block" /> and academic opportunities.
        </h3>
        <p className="mt-3 text-muted-foreground text-sm sm:text-base">
          The fastest way to reach me is email — I'll get back to you soon.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:vineethapunyamanthula@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow"
          >
            <Mail className="h-4 w-4" /> vineethapunyamanthula@gmail.com
          </a>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <SocialIcon href="https://www.linkedin.com/in/vineethapunyamanthula" label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
          <SocialIcon href="https://github.com/24A31A4627" label="GitHub"><Github className="h-4 w-4" /></SocialIcon>
          <SocialIcon href="mailto:vineethapunyamanthula@gmail.com" label="Email"><Mail className="h-4 w-4" /></SocialIcon>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Vineetha Satya Punyamanthula</div>
        <div>Designed and Developed by Vineetha Satya Punyamanthula</div>
      </div>
    </footer>
  );
}
