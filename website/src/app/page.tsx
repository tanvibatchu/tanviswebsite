'use client'

import { useEffect, useRef, useState } from 'react'
import { highlights, experience, projects, awards, skills, interests } from '@/data'

const names = ['Tanvi Batchu', 'తన్వి బచ్చు']
const fonts = ["var(--font-cormorant),'Cormorant Garamond',serif", "'Noto Sans Telugu',sans-serif"]
const colors = ['var(--saffron-strong)', 'var(--kumkum)']

const skillIcons: Record<string, string> = {
  'Python': 'python',
  'C++': 'cplusplus',
  'TypeScript': 'typescript',
  'JavaScript': 'javascript',
  'SQL': 'sqlite',
  'R': 'r',
  'Java': 'openjdk',
  'CrewAI': 'crewai',
  'LangGraph': 'langchain',
  'OpenAI': 'openai',
  'Gemini': 'googlegemini',
  'PyTorch': 'pytorch',
  'Scikit-learn': 'scikitlearn',
  'React': 'react',
  'Next.js': 'nextdotjs',
  'TailwindCSS': 'tailwindcss',
  'FastAPI': 'fastapi',
  'Flask': 'flask',
  'Node.js': 'nodedotjs',
  'Firebase': 'firebase',
  'Pandas': 'pandas',
  'NumPy': 'numpy',
  'Jupyter': 'jupyter',
  'Git': 'git',
  'Docker': 'docker',
  'Figma': 'figma',
  'MongoDB': 'mongodb',
  'PostgreSQL': 'postgresql',
}

function useReveal() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.07 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

function Section({ id, telugu, english, children }: {
  id: string; telugu: string; english: string; children: React.ReactNode
}) {
  const { ref, visible } = useReveal()
  return (
    <section id={id} ref={ref}
      className={`reveal section-pad ${visible ? 'in' : ''}`}
      style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2.5rem' }}>
        <div style={{ flex: 1, height: '0.5px', background: 'var(--sand)' }} />
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--gold-dim)', whiteSpace: 'nowrap' }}>
          {telugu} · {english}
        </span>
        <div style={{ flex: 1, height: '0.5px', background: 'var(--sand)' }} />
      </div>
      {children}
    </section>
  )
}

function Divider({ ornament = '❧' }: { ornament?: string }) {
  return (
    <div style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: '12px', padding: '0 3rem' }}>
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, var(--kumkum-dim) 40%, var(--kumkum) 50%, var(--kumkum-dim) 60%, transparent)' }} />
      <span style={{ color: 'var(--gold-dim)', fontFamily: "var(--font-cormorant),'Cormorant Garamond',serif" }}>{ornament}</span>
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, var(--terra-mid) 40%, var(--gold-dim) 50%, var(--terra-mid) 60%, transparent)' }} />
    </div>
  )
}

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [loadingFade, setLoadingFade] = useState(false)
  const [kolamsVisible, setKolamsVisible] = useState(false)
  const [kolamsSettled, setKolamsSettled] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [nameIdx, setNameIdx] = useState(0)
  const [nameVis, setNameVis] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    const vars = darkMode
      ? {
          '--bg': '#2b1304',
          '--body': '#e0c090',
          '--cream': '#f5ead0',
          '--cream-dim': '#c8a870',
          '--sand': '#4a2810',
          '--gold': '#d4920a',
          '--gold-light': '#f0b832',
          '--gold-dim': '#9a6a10',
          '--kumkum': '#d4537e',
          '--kumkum-light': '#ed93b1',
          '--kumkum-dim': '#993556',
          '--terra-mid': '#8a3810',
          '--terra-light': '#e07040',
          '--muted': '#9a7040',
          '--saffron-strong': '#f0b832',
        }
      : {
          '--bg': '#f0e6d0',
          '--body': '#3d2510',
          '--cream': '#1e0e04',
          '--cream-dim': '#5a3010',
          '--sand': '#cdb896',
          '--gold': '#c97b00',
          '--gold-light': '#e8950a',
          '--gold-dim': '#9a5e00',
          '--kumkum': '#c43f5e',
          '--kumkum-light': '#e07090',
          '--kumkum-dim': '#8f2a42',
          '--terra-mid': '#b85020',
          '--terra-light': '#d97840',
          '--muted': '#8a6242',
          '--saffron-strong': '#c97b00',
        }
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v))
  }, [darkMode])

  useEffect(() => {
    const fadeTimer   = setTimeout(() => setLoadingFade(true),  2600)
    const kolamsTimer = setTimeout(() => setKolamsVisible(true), 2600)
    const settleTimer = setTimeout(() => setKolamsSettled(true), 2750)
    const hideTimer   = setTimeout(() => setLoading(false),      3200)
    return () => { clearTimeout(fadeTimer); clearTimeout(kolamsTimer); clearTimeout(settleTimer); clearTimeout(hideTimer) }
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setNameVis(false)
      setTimeout(() => { setNameIdx(i => (i + 1) % names.length); setNameVis(true) }, 420)
    }, 3500)
    return () => clearInterval(t)
  }, [])

  const serif = "var(--font-cormorant),'Cormorant Garamond',serif"

  const cardBg       = darkMode ? 'rgba(60,25,5,0.5)'    : 'rgba(232,218,196,0.5)'
  const cardHover    = darkMode ? 'rgba(95,40,10,0.6)'   : 'rgba(218,200,170,0.75)'
  const infoBg       = darkMode ? 'rgba(45,18,3,0.4)'    : 'rgba(232,218,196,0.45)'
  const infoHover    = darkMode ? 'rgba(80,32,8,0.5)'    : 'rgba(218,200,170,0.7)'
  const navBg        = darkMode ? 'rgba(26,11,1,0.97)'   : 'rgba(240,230,208,0.97)'
  const kolamStop    = darkMode ? '#1a0b01'               : '#f0e6d0'
  const heroBlobBg   = darkMode
    ? 'radial-gradient(ellipse, rgba(212,146,10,0.1) 0%, rgba(196,80,26,0.07) 45%, transparent 70%)'
    : 'radial-gradient(ellipse, rgba(201,123,0,0.18) 0%, rgba(184,80,32,0.08) 45%, transparent 70%)'

  return (
    <main>
      {/* LOADING SCREEN */}
      {loading && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'var(--bg)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: '2rem',
          opacity: loadingFade ? 0 : 1,
          transition: 'opacity 0.6s ease',
          pointerEvents: loadingFade ? 'none' : 'all',
        }}>
          <p style={{
            fontFamily: serif, fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
            color: 'var(--cream)', fontWeight: 300,
            textAlign: 'center', maxWidth: '600px', lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}>
            &ldquo;You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.&rdquo;
          </p>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            Bhagavad Gita · 2.47
          </p>
        </div>
      )}

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.2rem 2rem', background: `linear-gradient(to bottom, ${navBg} 60%, transparent)` }}>
        <span style={{ fontFamily: fonts[nameIdx], color: 'var(--gold-light)', letterSpacing: '0.06em', fontSize: '1rem', transition: 'all 0.5s' }}>
          {names[nameIdx]}
        </span>
        {/* desktop links */}
        <ul className="nav-links-desktop">
          {['about','experience','projects','awards','interests','contact'].map(s => (
            <li key={s}>
              <a href={`#${s}`} style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--cream-dim)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--cream-dim)')}>
                {s}
              </a>
            </li>
          ))}
          <li>
            <button className="theme-toggle" onClick={() => setDarkMode(d => !d)} aria-label="Toggle theme">
              {darkMode ? '· light' : '· dark'}
            </button>
          </li>
        </ul>
        {/* mobile hamburger */}
        <button className="hamburger-btn" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          {['about','experience','projects','awards','interests','contact'].map(s => (
            <a key={s} href={`#${s}`} className="mobile-menu-link" onClick={() => setMenuOpen(false)}>{s}</a>
          ))}
          <button className="theme-toggle" style={{ marginTop: '0.5rem' }} onClick={() => { setDarkMode(d => !d); setMenuOpen(false) }}>
            {darkMode ? '· light' : '· dark'}
          </button>
        </div>
      )}

      {/* HERO */}
      <div className="hero-pad" style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', width: '720px', height: '720px', top: '50%', left: '35%', transform: 'translate(-50%,-50%)', background: heroBlobBg, pointerEvents: 'none', transition: 'background 0.45s ease' }} />
        <div style={{ position: 'absolute', top: '70px', left: 0, right: 0, height: '2px', background: 'linear-gradient(to right, transparent 5%, var(--terra-mid) 20%, var(--gold-light) 50%, var(--terra-mid) 80%, transparent 95%)' }} />

        {/* KOLAM */}

        {kolamsVisible && <div className="kolam-wrapper" style={{
          transform: kolamsSettled ? 'translateY(-50%)' : 'translateX(-460px) translateY(-50%)',
          transition: kolamsSettled ? 'transform 2s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
          width: '520px', height: '520px', pointerEvents: 'none', zIndex: 1,
        }}>

          <svg width="520" height="520" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">

            <defs>

              <radialGradient id="rfade" cx="50%" cy="50%" r="50%">

                <stop offset="0%" stopColor={kolamStop} stopOpacity="0"/>

                <stop offset="100%" stopColor={kolamStop} stopOpacity="0.75"/>

              </radialGradient>



            </defs>

            <g fill="#d4920a" opacity="0.45">

              <circle cx="130" cy="20" r="2.5"/><circle cx="182" cy="33" r="2"/><circle cx="222" cy="68" r="2"/>

              <circle cx="240" cy="120" r="2.5"/><circle cx="227" cy="175" r="2"/><circle cx="192" cy="215" r="2"/>

              <circle cx="140" cy="238" r="2.5"/><circle cx="85" cy="232" r="2"/><circle cx="42" cy="205" r="2"/>

              <circle cx="16" cy="162" r="2.5"/><circle cx="18" cy="108" r="2"/><circle cx="42" cy="62" r="2"/>

              <circle cx="82" cy="28" r="2.5"/>

            </g>

            <circle cx="130" cy="130" r="105" fill="none" stroke="#c97b36" strokeWidth="0.5" strokeDasharray="660" strokeDashoffset="660" style={{ animation: "draw 2s ease forwards 0.5s", opacity: 0 }}/>

            <g fill="none" stroke="#d4920a" strokeWidth="0.8" opacity="0.4">

              <ellipse cx="130" cy="75" rx="12" ry="28" transform="rotate(0,130,130)" strokeDasharray="200" strokeDashoffset="200" style={{ animation: "draw 0.6s ease forwards 1.2s", opacity: 0 }}/>

              <ellipse cx="130" cy="75" rx="12" ry="28" transform="rotate(45,130,130)" strokeDasharray="200" strokeDashoffset="200" style={{ animation: "draw 0.6s ease forwards 1.3s", opacity: 0 }}/>

              <ellipse cx="130" cy="75" rx="12" ry="28" transform="rotate(90,130,130)" strokeDasharray="200" strokeDashoffset="200" style={{ animation: "draw 0.6s ease forwards 1.4s", opacity: 0 }}/>

              <ellipse cx="130" cy="75" rx="12" ry="28" transform="rotate(135,130,130)" strokeDasharray="200" strokeDashoffset="200" style={{ animation: "draw 0.6s ease forwards 1.5s", opacity: 0 }}/>

              <ellipse cx="130" cy="75" rx="12" ry="28" transform="rotate(180,130,130)" strokeDasharray="200" strokeDashoffset="200" style={{ animation: "draw 0.6s ease forwards 1.6s", opacity: 0 }}/>

              <ellipse cx="130" cy="75" rx="12" ry="28" transform="rotate(225,130,130)" strokeDasharray="200" strokeDashoffset="200" style={{ animation: "draw 0.6s ease forwards 1.7s", opacity: 0 }}/>

              <ellipse cx="130" cy="75" rx="12" ry="28" transform="rotate(270,130,130)" strokeDasharray="200" strokeDashoffset="200" style={{ animation: "draw 0.6s ease forwards 1.8s", opacity: 0 }}/>

              <ellipse cx="130" cy="75" rx="12" ry="28" transform="rotate(315,130,130)" strokeDasharray="200" strokeDashoffset="200" style={{ animation: "draw 0.6s ease forwards 1.9s", opacity: 0 }}/>

            </g>

            <g fill="none" stroke="#d4537e" strokeWidth="0.7" opacity="0.35">

              <ellipse cx="130" cy="98" rx="8" ry="18" transform="rotate(22.5,130,130)" strokeDasharray="160" strokeDashoffset="160" style={{ animation: "draw 0.5s ease forwards 2s", opacity: 0 }}/>

              <ellipse cx="130" cy="98" rx="8" ry="18" transform="rotate(67.5,130,130)" strokeDasharray="160" strokeDashoffset="160" style={{ animation: "draw 0.5s ease forwards 2.1s", opacity: 0 }}/>

              <ellipse cx="130" cy="98" rx="8" ry="18" transform="rotate(112.5,130,130)" strokeDasharray="160" strokeDashoffset="160" style={{ animation: "draw 0.5s ease forwards 2.2s", opacity: 0 }}/>

              <ellipse cx="130" cy="98" rx="8" ry="18" transform="rotate(157.5,130,130)" strokeDasharray="160" strokeDashoffset="160" style={{ animation: "draw 0.5s ease forwards 2.3s", opacity: 0 }}/>

              <ellipse cx="130" cy="98" rx="8" ry="18" transform="rotate(202.5,130,130)" strokeDasharray="160" strokeDashoffset="160" style={{ animation: "draw 0.5s ease forwards 2.4s", opacity: 0 }}/>

              <ellipse cx="130" cy="98" rx="8" ry="18" transform="rotate(247.5,130,130)" strokeDasharray="160" strokeDashoffset="160" style={{ animation: "draw 0.5s ease forwards 2.5s", opacity: 0 }}/>

              <ellipse cx="130" cy="98" rx="8" ry="18" transform="rotate(292.5,130,130)" strokeDasharray="160" strokeDashoffset="160" style={{ animation: "draw 0.5s ease forwards 2.6s", opacity: 0 }}/>

              <ellipse cx="130" cy="98" rx="8" ry="18" transform="rotate(337.5,130,130)" strokeDasharray="160" strokeDashoffset="160" style={{ animation: "draw 0.5s ease forwards 2.7s", opacity: 0 }}/>

            </g>

            <g stroke="#c97b36" strokeWidth="0.5" opacity="0.5">

              <line x1="130" y1="25" x2="130" y2="235" strokeDasharray="210" strokeDashoffset="210" style={{ animation: "draw 1s ease forwards 0.8s", opacity: 0 }}/>

              <line x1="25" y1="130" x2="235" y2="130" strokeDasharray="210" strokeDashoffset="210" style={{ animation: "draw 1s ease forwards 0.9s", opacity: 0 }}/>

              <line x1="56" y1="56" x2="204" y2="204" strokeDasharray="210" strokeDashoffset="210" style={{ animation: "draw 1s ease forwards 1s", opacity: 0 }}/>

              <line x1="204" y1="56" x2="56" y2="204" strokeDasharray="210" strokeDashoffset="210" style={{ animation: "draw 1s ease forwards 1.1s", opacity: 0 }}/>

            </g>

            <circle cx="130" cy="130" r="68" fill="none" stroke="#d4537e" strokeWidth="0.6" opacity="0.25"/>

            <circle cx="130" cy="130" r="45" fill="none" stroke="#d4920a" strokeWidth="0.5" opacity="0.3"/>

            <g fill="#d4537e" opacity="0.6">

              <circle cx="130" cy="62" r="2"/><circle cx="178" cy="82" r="2"/><circle cx="198" cy="130" r="2"/>

              <circle cx="178" cy="178" r="2"/><circle cx="130" cy="198" r="2"/><circle cx="82" cy="178" r="2"/>

              <circle cx="62" cy="130" r="2"/><circle cx="82" cy="82" r="2"/>

            </g>

            <g fill="#d4920a" opacity="0.7">

              <circle cx="130" cy="85" r="1.5"/><circle cx="157" cy="103" r="1.5"/><circle cx="167" cy="133" r="1.5"/>

              <circle cx="155" cy="160" r="1.5"/><circle cx="130" cy="172" r="1.5"/><circle cx="103" cy="160" r="1.5"/>

              <circle cx="90" cy="133" r="1.5"/><circle cx="100" cy="103" r="1.5"/>

            </g>

            <circle cx="130" cy="130" r="22" fill="none" stroke="#d4537e" strokeWidth="0.8" strokeDasharray="138" strokeDashoffset="138" style={{ animation: "draw 0.8s ease forwards 3.2s", opacity: 0 }}/>

            <circle cx="130" cy="130" r="14" fill="none" stroke="#d4920a" strokeWidth="0.7" strokeDasharray="88" strokeDashoffset="88" style={{ animation: "draw 0.7s ease forwards 3.4s", opacity: 0 }}/>

            <circle cx="130" cy="130" r="7" fill="none" stroke="#d4537e" strokeWidth="0.6" strokeDasharray="44" strokeDashoffset="44" style={{ animation: "draw 0.6s ease forwards 3.6s", opacity: 0 }}/>

            <circle cx="130" cy="130" r="3" fill="#d4920a" opacity="0.9"/>

            <circle cx="130" cy="130" r="1.5" fill="#d4537e" style={{ animation: "dot-appear 0.4s ease forwards 4s", opacity: 0 }}/>




          </svg>

        </div>}

        <div style={{ maxWidth: '680px', position: 'relative', zIndex: 2 }}>
          <p style={{ fontSize: '1.5rem', letterSpacing: '0.55em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '1.5rem', animation: 'fadeUp 1s 0.2s forwards', opacity: 0 }}>
            👋 hey there,
          </p>

          <h1 style={{
            fontFamily: fonts[nameIdx], fontWeight: 300, lineHeight: 1,
            fontSize: 'clamp(3.2rem, 8vw, 6.5rem)',
            color: colors[nameIdx],
            marginBottom: '2rem',
            opacity: nameVis ? 1 : 0,
            transform: nameVis ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.42s ease, transform 0.42s ease',
            animation: 'fadeUp 1s 0.4s forwards',
            whiteSpace: 'nowrap',
            textShadow: '0 0 120px rgba(212,146,10,0.3)',
          }}>
            i&apos;m {names[nameIdx]}.
          </h1>

          <p style={{ fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--cream-dim)', marginBottom: '2.5rem', lineHeight: 1.9, animation: 'fadeUp 1s 0.6s forwards', opacity: 0 }}>
            cs & finance @ waterloo &nbsp;&middot;&nbsp; incoming ai engineer @ rbc capital markets
          </p>

          <div style={{ animation: 'fadeUp 1s 0.8s forwards', opacity: 0 }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--gold-dim)', marginBottom: '1rem', letterSpacing: '0.05em' }}>some things i&apos;ve done:</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--body)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--gold-dim)', flexShrink: 0 }}>&rarr;</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '2.5rem', animation: 'fadeUp 1s 1s forwards', opacity: 0 }}>
            {['learn more about me!'].map(c => (
              <span key={c} style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '5px 13px', border: '0.5px solid var(--kumkum-dim)', color: 'var(--kumkum)', background: 'rgba(212,83,126,0.08)', borderRadius: '2px' }}>{c}</span>
            ))}
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '2.5rem', left: '3.5rem', display: 'flex', flexDirection: 'column', gap: '8px', animation: 'fadeUp 1s 1.3s forwards', opacity: 0 }}>
          <span style={{ fontSize: '0.56rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--kumkum-dim)' }}>scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--gold-dim), transparent)' }} />
        </div>
      </div>

      <Divider />

      {/* ABOUT */}
      <Section id="about" telugu="నా గురించి" english="about">
        <h2 style={{ fontFamily: serif, fontSize: 'clamp(2.4rem,5vw,3.5rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '1.5rem' }}>who i am</h2>

        {/* PHOTO STRIP */}
        <div className="photo-grid">
          {[
            { src: '/photo-kid.png',        label: 'age 3 · already shipping' },
            { src: '/photo-whiteboard.png', label: 'locked in · planning mode' },
            { src: '/photo-headshot.png',   label: 'now' },
          ].map(({ src, label }) => (
            <div key={src} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ overflow: 'hidden', borderRadius: '4px', border: '0.5px solid var(--sand)' }}>
                <img
                  src={src}
                  alt={label}
                  style={{ width: '100%', height: '220px', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', textAlign: 'center' }}>{label}</p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '0.93rem', lineHeight: 1.9, color: 'var(--body)', maxWidth: '580px', marginBottom: '2rem' }}>
          i&apos;m a cs + finance student at waterloo (cfm), incoming ai & algorithms engineer at rbc capital markets. i build at the intersection of software, markets, and finance, but more importantly, i am extremely passionate about building with purpose. follow along on my journey!
        </p>
        <div style={{ borderLeft: '2px solid var(--kumkum)', paddingLeft: '1.5rem', marginBottom: '2.5rem' }}>
          <p style={{ fontFamily: serif, fontStyle: 'italic', color: 'var(--cream-dim)', fontSize: '1.15rem', lineHeight: 1.7 }}>
            &ldquo;i like projects that are practical, make an impact, are rigorous, and a little ambitious.&rdquo;
          </p>
        </div>
        <div className="info-grid" style={{ borderTop: '0.5px solid var(--sand)', borderLeft: '0.5px solid var(--sand)' }}>
          {[
            ['program','CS + Finance (CFM)\n@ Waterloo'],
            ['incoming','AI Engineer in Algorithmic Research\nRBC Capital Markets'],
            ['open to','Opportunities after Fall 2026'],
            ['music','Carnatic vocalist\n15+ years'],
            ['also speaks','Telugu · Latin (working proficiency)'],
          ].map(([l,v]) => (
            <div key={l} style={{ padding: '1.2rem', borderRight: '0.5px solid var(--sand)', borderBottom: '0.5px solid var(--sand)', background: infoBg, transition: 'background 0.3s' }} onMouseEnter={e => (e.currentTarget.style.background=infoHover)} onMouseLeave={e => (e.currentTarget.style.background=infoBg)}>
              <p style={{ fontSize: '0.57rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '0.4rem' }}>{l}</p>
              <p style={{ fontFamily: serif, color: 'var(--cream)', lineHeight: 1.4, fontSize: '0.92rem', whiteSpace: 'pre-line' }}>{v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Divider ornament="✦" />

      {/* SKILLS */}
      <Section id="skills" telugu="నైపుణ్యాలు" english="skills">
        <h2 style={{ fontFamily: serif, fontSize: 'clamp(2.4rem,5vw,3.5rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '2rem' }}>what i work with</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.8rem 1.4rem' }}>
          {skills.flatMap(s => s.items).map(item => {
            const slug = skillIcons[item] || item.toLowerCase().replace(/[^a-z0-9]/g, '')
            return (
              <div key={item} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px', width: '52px' }}>
                <img
                  src={`https://cdn.simpleicons.org/${slug}/a87010`}
                  alt={item}
                  width={28}
                  height={28}
                  style={{ objectFit: 'contain', opacity: 0.85 }}
                  onError={(e) => {
                    const t = e.currentTarget
                    t.style.display = 'none'
                    const parent = t.parentElement
                    if (parent) {
                      const fallback = document.createElement('div')
                      fallback.style.cssText = 'width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:0.55rem;color:var(--gold-dim);border:0.5px solid var(--sand);border-radius:4px;text-align:center;line-height:1.2;'
                      fallback.textContent = item.slice(0,3)
                      parent.insertBefore(fallback, parent.firstChild)
                    }
                  }}
                />
                <span style={{ fontSize: '0.58rem', color: 'var(--muted)', textAlign: 'center', lineHeight: 1.3 }}>{item}</span>
              </div>
            )
          })}
        </div>
      </Section>

      <Divider />

      {/* EXPERIENCE */}
      <Section id="experience" telugu="అనుభవం" english="experience">
        <h2 style={{ fontFamily: serif, fontSize: 'clamp(2.4rem,5vw,3.5rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '2rem' }}>where i&apos;ve been</h2>
        <div className="two-col-grid">
          {experience.map((e,i) => (
            <div key={i} style={{ padding: '1.5rem', borderLeft: '2px solid var(--kumkum)', borderTop: '0.5px solid var(--sand)', borderRight: '0.5px solid var(--sand)', borderBottom: '0.5px solid var(--sand)', borderRadius: '4px', background: cardBg, transition: 'background 0.3s, transform 0.25s' }} onMouseEnter={e => { e.currentTarget.style.background=cardHover; e.currentTarget.style.transform='translateY(-2px)' }} onMouseLeave={e => { e.currentTarget.style.background=cardBg; e.currentTarget.style.transform='translateY(0)' }}>
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--kumkum)', textTransform: 'uppercase', lineHeight: 1.7, display: 'block', marginBottom: '0.5rem' }}>{e.date}</span>
              <p style={{ fontFamily: serif, color: 'var(--cream)', fontSize: '1.1rem', marginBottom: '0.2rem' }}>{e.role}</p>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--terra-light)', marginBottom: '0.75rem' }}>{e.company}</p>
              <ul style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                {e.bullets.map((b,j) => <li key={j} style={{ marginLeft: '1rem', listStyleType: 'disc' }}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Divider ornament="❧" />

      {/* PROJECTS */}
      <Section id="projects" telugu="పనులు" english="projects">
        <h2 style={{ fontFamily: serif, fontSize: 'clamp(2.4rem,5vw,3.5rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '2rem' }}>selected work</h2>
        <div className="two-col-grid">
        {projects.map((p,i) => (
          <a key={i} href={p.href} target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', flexDirection: 'column', border: '0.5px solid var(--sand)', borderRadius: '4px', overflow: 'hidden', textDecoration: 'none', color: 'inherit', transition: 'border-color 0.3s' }}
            onMouseEnter={e => { (e.currentTarget.querySelector('.pn') as HTMLElement).style.color='var(--kumkum)'; (e.currentTarget.querySelector('.pt') as HTMLElement).style.color='var(--gold-light)'; (e.currentTarget.querySelector('.pa') as HTMLElement).style.color='var(--kumkum)' }}
            onMouseLeave={e => { (e.currentTarget.querySelector('.pn') as HTMLElement).style.color='var(--kumkum-dim)'; (e.currentTarget.querySelector('.pt') as HTMLElement).style.color='var(--cream)'; (e.currentTarget.querySelector('.pa') as HTMLElement).style.color='var(--sand)' }}>
            <span className="pn" style={{ fontFamily: serif, fontSize: '1.5rem', color: 'var(--kumkum-dim)', lineHeight: 1, paddingTop: '3px', transition: 'color 0.3s' }}>{p.num}</span>
            <div>
              {(p as any).image && (
                <div style={{ overflow: 'hidden' }}>
                  <img src={(p as any).image} alt={p.title} style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block', opacity: 0.9, transition: 'opacity 0.3s' }} />
                </div>
              )}
              <div style={{ padding: '1.2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {p.badge && <span style={{ display: 'inline-block', fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '2px 8px', marginBottom: '0.4rem', border: '0.5px solid var(--kumkum)', color: 'var(--kumkum)', background: 'rgba(212,83,126,0.08)', borderRadius: '2px' }}>{p.badge}</span>}
              <p className="pt" style={{ fontFamily: serif, fontSize: '1.25rem', color: 'var(--cream)', marginBottom: '0.4rem', transition: 'color 0.3s' }}>{p.title}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.6rem' }}>{p.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: 'auto' }}>
                {p.tags.map(t => <span key={t} style={{ fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '2px 8px', border: '0.5px solid var(--sand)', color: 'var(--muted)', borderRadius: '2px' }}>{t}</span>)}
              </div>
              </div>
            </div>
            <span className="pa" style={{ color: 'var(--sand)', paddingTop: '3px', transition: 'color 0.3s', fontSize: '1rem' }}>↗</span>
          </a>
        ))}
        </div>
      </Section>

      <Divider />

      {/* AWARDS */}
      <Section id="awards" telugu="బహుమతులు" english="awards">
        <h2 style={{ fontFamily: serif, fontSize: 'clamp(2.4rem,5vw,3.5rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '2rem' }}>recognition</h2>
        <div className="two-col-grid-start">
          {awards.map((a,i) => {
            const hasLink = !!(a as any).link
            const inner = (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--gold-dim)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>{a.year}</span>
                  {hasLink && <span style={{ color: 'var(--gold-dim)', fontSize: '0.8rem' }}>↗</span>}
                </div>
                <p style={{ fontFamily: serif, color: 'var(--cream)', fontSize: '1.05rem', marginBottom: '0.3rem', lineHeight: 1.3 }}>{a.name}</p>
                <p style={{ fontSize: '0.72rem', color: 'var(--muted)', lineHeight: 1.5 }}>{a.org}</p>
              </>
            )
            return hasLink ? (
              <a key={i} href={(a as any).link} target="_blank" rel="noopener noreferrer"
                style={{ padding: '1.5rem', borderLeft: '2px solid var(--kumkum)', borderTop: '0.5px solid var(--sand)', borderRight: '0.5px solid var(--sand)', borderBottom: '0.5px solid var(--sand)', borderRadius: '4px', background: cardBg, textDecoration: 'none', color: 'inherit', display: 'block', transition: 'border-color 0.3s, background 0.3s, transform 0.25s' }}
                onMouseEnter={e => (e.currentTarget.style.background = cardHover)}
                onMouseLeave={e => (e.currentTarget.style.background = cardBg)}>
                {inner}
              </a>
            ) : (
              <div key={i} style={{ padding: '1.5rem', borderLeft: '2px solid var(--kumkum)', borderTop: '0.5px solid var(--sand)', borderRight: '0.5px solid var(--sand)', borderBottom: '0.5px solid var(--sand)', borderRadius: '4px', background: cardBg, transition: 'background 0.3s, transform 0.25s' }} onMouseEnter={e => { e.currentTarget.style.background=cardHover; e.currentTarget.style.transform='translateY(-2px)' }} onMouseLeave={e => { e.currentTarget.style.background=cardBg; e.currentTarget.style.transform='translateY(0)' }}>
                {inner}
              </div>
            )
          })}
        </div>
      </Section>

      <Divider ornament="✦" />

      {/* INTERESTS */}
      <Section id="interests" telugu="నచ్చినవి" english="interests">
        <h2 style={{ fontFamily: serif, fontSize: 'clamp(2.4rem,5vw,3.5rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '2rem' }}>beyond the screen</h2>
        <div className="three-col-grid" style={{ background: 'var(--sand)' }}>
          {interests.map((item,i) => (
            <div key={i} style={{ padding: '1.6rem 1.4rem', background: cardBg, transition: 'background 0.3s, transform 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background=cardHover; e.currentTarget.style.transform='translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background=cardBg; e.currentTarget.style.transform='translateY(0)' }}>
              <div style={{ fontFamily: serif, fontSize: '1.4rem', color: 'var(--gold-dim)', marginBottom: '0.7rem' }}>{item.glyph}</div>
              <p style={{ fontFamily: serif, color: 'var(--cream)', marginBottom: '0.3rem', fontSize: '1.05rem' }}>{item.name}</p>
              <p style={{ fontSize: '0.76rem', color: 'var(--muted)', lineHeight: 1.65 }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* CONTACT */}
      <Section id="contact" telugu="కలుద్దాం" english="let's connect">
        <div style={{ maxWidth: '500px' }}>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(2.4rem,5vw,3.5rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '1.5rem' }}>let&apos;s talk</h2>
          <p style={{ fontSize: '0.93rem', lineHeight: 1.9, color: 'var(--body)', marginBottom: '2.5rem' }}>
            whether it&apos;s about building, code, finance, music, or something that doesn&apos;t fit neatly into either &mdash; i&apos;d love to connect.
          </p>
          {[
            { name: 'email', handle: 'tsabatch@uwaterloo.ca', href: 'mailto:tsabatch@uwaterloo.ca' },
            { name: 'linkedin', handle: 'linkedin.com/in/tanvi-batchu', href: 'https://linkedin.com/in/tanvi-batchu' },
            { name: 'github', handle: 'github.com/tanvibatchu', href: 'https://github.com/tanvibatchu' },
          ].map(link => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.2rem 0', borderBottom: '0.5px solid var(--sand)', textDecoration: 'none', color: 'inherit', transition: 'padding-left 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.paddingLeft='8px'; (e.currentTarget.querySelector('.cn') as HTMLElement).style.color='var(--gold-light)'; (e.currentTarget.querySelector('.ca') as HTMLElement).style.color='var(--gold)' }}
              onMouseLeave={e => { e.currentTarget.style.paddingLeft='0'; (e.currentTarget.querySelector('.cn') as HTMLElement).style.color='var(--cream)'; (e.currentTarget.querySelector('.ca') as HTMLElement).style.color='var(--sand)' }}>
              <div>
                <p className="cn" style={{ fontFamily: serif, fontSize: '1.2rem', color: 'var(--cream)', transition: 'color 0.3s' }}>{link.name}</p>
                <p style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '2px' }}>{link.handle}</p>
              </div>
              <span className="ca" style={{ color: 'var(--sand)', transition: 'color 0.3s' }}>↗</span>
            </a>
          ))}
        </div>
      </Section>

      <footer style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '2.5rem 2rem', borderTop: '0.5px solid var(--sand)' }}>
        <p style={{ fontFamily: serif, fontStyle: 'italic', color: 'var(--gold-dim)', fontSize: '0.9rem', marginBottom: '0.4rem' }}>tanvi batchu &middot; cs & finance &middot; waterloo &middot; 2025</p>
        <p style={{ fontFamily: "'Noto Sans Telugu',sans-serif", color: 'var(--terra-mid)', fontSize: '1rem' }}>తన్వి బచ్చు</p>
      </footer>
    </main>
  )
}
