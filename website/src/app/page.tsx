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

// ── CITY THEMES ────────────────────────────────────────────
type City = 'hyd' | 'nyc' | 'sfo'

const cityLabels: Record<City, string> = { hyd: 'hyd', nyc: 'nyc', sfo: 'sfo' }

const cityVars: Record<City, Record<string, string>> = {
  hyd: {
    '--bg': '#f2e4c8',        '--body': '#2a1208',      '--cream': '#1a0a02',
    '--cream-dim': '#5a2c0e', '--sand': '#d4b888',      '--gold': '#b87808',
    '--gold-light': '#d49818','--gold-dim': '#8a5808',  '--kumkum': '#b83820',
    '--kumkum-light': '#d45838','--kumkum-dim': '#882010','--terra-mid': '#8a4010',
    '--terra-light': '#c05828','--muted': '#7a5030',    '--saffron-strong': '#d49818',
  },
  nyc: {
    '--bg': '#060a12',         '--body': '#a8b8c8',       '--cream': '#d0dce8',
    '--cream-dim': '#607888',  '--sand': '#182638',       '--gold': '#e8a840',
    '--gold-light': '#f5c860', '--gold-dim': '#a87830',   '--kumkum': '#4a9eff',
    '--kumkum-light': '#7ab8ff','--kumkum-dim': '#2858c0','--terra-mid': '#2a4060',
    '--terra-light': '#4a6888','--muted': '#3a5068',      '--saffron-strong': '#f5c860',
  },
  sfo: {
    '--bg': '#fdf4e8', '--body': '#2a3020', '--cream': '#181e10',
    '--cream-dim': '#4a5838', '--sand': '#e4d0b4', '--gold': '#f5a623',
    '--gold-light': '#ffc844', '--gold-dim': '#c07820', '--kumkum': '#e05c2a',
    '--kumkum-light': '#f09060', '--kumkum-dim': '#a83a10', '--terra-mid': '#5ba8d0',
    '--terra-light': '#80c4e8', '--muted': '#7a9060', '--saffron-strong': '#f5a623',
  },
}

const cityColors: Record<City, {
  cardBg: string; cardHover: string; infoBg: string; infoHover: string;
  navBg: string; heroBlobBg: string;
}> = {
  hyd: {
    cardBg: 'rgba(232,212,178,0.55)', cardHover: 'rgba(218,195,155,0.82)',
    infoBg: 'rgba(232,212,178,0.45)', infoHover: 'rgba(218,195,155,0.75)',
    navBg:  'rgba(242,228,200,0.97)',
    heroBlobBg: 'radial-gradient(ellipse, rgba(184,120,8,0.18) 0%, rgba(184,56,32,0.07) 45%, transparent 70%)',
  },
  nyc: {
    cardBg: 'rgba(10,18,32,0.78)',  cardHover: 'rgba(18,30,50,0.92)',
    infoBg: 'rgba(8,14,26,0.65)',   infoHover: 'rgba(16,26,44,0.85)',
    navBg:  'rgba(6,10,18,0.98)',
    heroBlobBg: 'radial-gradient(ellipse, rgba(74,158,255,0.12) 0%, rgba(232,168,64,0.09) 45%, transparent 70%)',
  },
  sfo: {
    cardBg: 'rgba(255,255,255,0.82)',  cardHover: 'rgba(255,246,228,1)',
    infoBg: 'rgba(255,255,255,0.75)', infoHover: 'rgba(255,244,220,1)',
    navBg:  'rgba(253,244,232,0.97)',
    heroBlobBg: 'radial-gradient(ellipse, rgba(245,166,35,0.2) 0%, rgba(91,168,208,0.1) 45%, transparent 70%)',
  },
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

// ── HYD NAV GARLAND · Marigold torana drawing ─────────────
function NavGarland() {
  const n   = 6           // number of swags
  const W   = 1440        // viewBox width
  const sw  = W / n       // swag width = 240
  const cY  = 64          // bezier control-point y  (midpoint droops to cY/2 = 32)
  const mY  = cY / 2      // actual lowest y of each swag = 32

  // Garland path — starts/ends at y=2 (small offset from edge)
  const d = `M 0 2 ${Array.from({ length: n }, (_, i) =>
    `Q ${(i + 0.5) * sw} ${cY} ${(i + 1) * sw} 2`
  ).join(' ')}`

  // Flower dots at t = 0.2, 0.4, 0.5, 0.6, 0.8 per swag
  const flowers = Array.from({ length: n }, (_, i) => {
    const x0 = i * sw, cx = x0 + sw / 2, x1 = (i + 1) * sw
    return [0.2, 0.4, 0.5, 0.6, 0.8].map(t => ({
      cx: (1 - t) * (1 - t) * x0 + 2 * t * (1 - t) * cx + t * t * x1,
      cy: 2 + 2 * t * (1 - t) * cY,
    }))
  }).flat()

  const pendantX = Array.from({ length: n }, (_, i) => i * sw + sw / 2)

  return (
    <svg width="100%" height="82" viewBox="0 0 1440 82"
      preserveAspectRatio="none" style={{ display: 'block' }}>

      {/* Soft shadow behind the line for depth */}
      <path d={d} fill="none" stroke="#c8a060" strokeWidth="3.5" opacity="0.18"/>

      {/* Main garland stroke — draws itself */}
      <path d={d} fill="none" stroke="#8a4010" strokeWidth="1.3" opacity="0.6"
        strokeDasharray="1560" strokeDashoffset="1560"
        style={{ animation: "draw 2.8s ease forwards 0.1s", opacity: 0 }}/>

      {/* Attachment knots at top */}
      {Array.from({ length: n + 1 }, (_, i) => (
        <circle key={`k${i}`} cx={i * sw} cy="2" r="4" fill="#8a4010" opacity="0.5"
          style={{ animation: `dot-appear 0.3s ease forwards ${0.1 + i * 0.06}s`, opacity: 0 }}/>
      ))}

      {/* Marigold flowers — concentric stroke circles */}
      {flowers.map((f, i) => (
        <g key={`fl${i}`}
          style={{ animation: `dot-appear 0.3s ease forwards ${0.4 + i * 0.06}s`, opacity: 0 }}>
          <circle cx={f.cx} cy={f.cy} r="5.5" fill="none" stroke="#8a4010" strokeWidth="0.85" opacity="0.38"/>
          <circle cx={f.cx} cy={f.cy} r="2.8" fill="none" stroke="#b83820" strokeWidth="0.7"  opacity="0.45"/>
          <circle cx={f.cx} cy={f.cy} r="1.2" fill="#8a4010" opacity="0.5"/>
        </g>
      ))}

      {/* Hanging pendants (string + beads + jhumka bell) */}
      {pendantX.map((x, i) => (
        <g key={`pend${i}`}
          style={{ animation: `dot-appear 0.5s ease forwards ${0.6 + i * 0.12}s`, opacity: 0 }}>
          {/* String */}
          <line x1={x} y1={mY} x2={x} y2="65"
            stroke="#8a4010" strokeWidth="0.8" opacity="0.4"/>
          {/* Beads along string */}
          <circle cx={x} cy={mY + 9}  r="3.2" fill="#b83820" opacity="0.55"/>
          <circle cx={x} cy={mY + 18} r="2.5" fill="#b87808" opacity="0.6"/>
          <circle cx={x} cy={mY + 26} r="2"   fill="#b83820" opacity="0.5"/>
          {/* Jhumka bell outline */}
          <circle cx={x} cy="65" r="7" fill="none" stroke="#8a4010" strokeWidth="1.1" opacity="0.5"/>
          {/* Bell inner detail */}
          <circle cx={x} cy="65" r="3.5" fill="none" stroke="#b87808" strokeWidth="0.6" opacity="0.5"/>
          <circle cx={x} cy="65" r="1.5" fill="#8a4010" opacity="0.45"/>
          {/* Bell clapper dot */}
          <circle cx={x} cy="73" r="1.2" fill="#b83820" opacity="0.5"/>
        </g>
      ))}
    </svg>
  )
}

// ── HYD ORNAMENT · Mughal Arch (Golkonda / Charminar inspired) ─
function HydOrnament() {
  // Arch geometry: springs at (48,158) and (212,158), apex at (130,20)
  // Bezier left:  M 48 158 C 48 78 122 20 130 20
  // Bezier right: C 138 20 212 78 212 158
  // Dot positions computed from bezier at t=0.25, 0.5, 0.75
  const leftDots  = [{ cx: 60, cy: 103 }, { cx: 86, cy: 59 }, { cx: 114, cy: 30 }]
  const rightDots = [{ cx: 200, cy: 103 }, { cx: 174, cy: 59 }, { cx: 146, cy: 30 }]
  const legDots   = [185, 210, 237]
  // 8 medallion petals at r=16 from (130,20)
  const petals = Array.from({ length: 8 }, (_, i) => {
    const a = (i * 45 - 90) * Math.PI / 180
    return { cx: 130 + 16 * Math.cos(a), cy: 20 + 16 * Math.sin(a) }
  })
  return (
    <svg width="520" height="520" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">

      {/* PERSPECTIVE LINES — receding courtyard floor, very faint */}
      <g stroke="#8a3810" strokeWidth="0.3" opacity="0.1">
        {[80, 96, 112, 130, 148, 164, 180].map((x, i) => (
          <line key={i} x1={x} y1="258" x2="130" y2="20"
            strokeDasharray="250" strokeDashoffset="250"
            style={{ animation: `draw 1.2s ease forwards ${1.9 + i * 0.04}s`, opacity: 0 }}/>
        ))}
      </g>

      {/* PLINTH — triple base lines, widest at bottom */}
      <line x1="18" y1="258" x2="242" y2="258" stroke="#8a4010" strokeWidth="0.9"
        strokeDasharray="224" strokeDashoffset="224" style={{ animation: "draw 0.9s ease forwards 0.2s", opacity: 0 }}/>
      <line x1="30" y1="252" x2="230" y2="252" stroke="#8a4010" strokeWidth="0.6"
        strokeDasharray="200" strokeDashoffset="200" style={{ animation: "draw 0.7s ease forwards 0.3s", opacity: 0 }}/>
      <line x1="42" y1="246" x2="218" y2="246" stroke="#c8a060" strokeWidth="0.4"
        strokeDasharray="176" strokeDashoffset="176" style={{ animation: "draw 0.6s ease forwards 0.4s", opacity: 0 }}/>

      {/* OUTER ARCH — primary dark terracotta frame */}
      <path d="M 48 258 L 48 158 C 48 78 122 20 130 20 C 138 20 212 78 212 158 L 212 258"
        fill="none" stroke="#8a4010" strokeWidth="1.35" opacity="0.88"
        strokeDasharray="610" strokeDashoffset="610"
        style={{ animation: "draw 2.0s ease forwards 0.5s", opacity: 0 }}/>

      {/* MIDDLE ARCH — gold second layer */}
      <path d="M 68 258 L 68 166 C 68 88 122 46 130 46 C 138 46 192 88 192 166 L 192 258"
        fill="none" stroke="#b87808" strokeWidth="0.85" opacity="0.75"
        strokeDasharray="515" strokeDashoffset="515"
        style={{ animation: "draw 1.7s ease forwards 0.8s", opacity: 0 }}/>

      {/* INNER ARCH — terracotta kumkum accent */}
      <path d="M 90 258 L 90 183 C 90 125 122 98 130 98 C 138 98 170 125 170 183 L 170 258"
        fill="none" stroke="#b83820" strokeWidth="0.7" opacity="0.8"
        strokeDasharray="385" strokeDashoffset="385"
        style={{ animation: "draw 1.4s ease forwards 1.1s", opacity: 0 }}/>

      {/* INNERMOST ARCH — delicate filigree hint */}
      <path d="M 106 258 L 106 198 C 106 160 122 144 130 144 C 138 144 154 160 154 198 L 154 258"
        fill="none" stroke="#8a4010" strokeWidth="0.45" opacity="0.45"
        strokeDasharray="230" strokeDashoffset="230"
        style={{ animation: "draw 1.0s ease forwards 1.4s", opacity: 0 }}/>

      {/* PILLAR CAPITALS at arch springs */}
      <g fill="none" stroke="#8a4010" strokeWidth="0.85">
        <line x1="26" y1="158" x2="70" y2="158" strokeDasharray="44" strokeDashoffset="44"
          style={{ animation: "draw 0.4s ease forwards 1.8s", opacity: 0 }}/>
        <circle cx="48" cy="150" r="5.5" strokeDasharray="35" strokeDashoffset="35"
          style={{ animation: "draw 0.5s ease forwards 2.0s", opacity: 0 }}/>
        <circle cx="48" cy="150" r="2.5" fill="#8a4010" opacity="0.7"
          style={{ animation: "dot-appear 0.3s ease forwards 2.3s", opacity: 0 }}/>
        <line x1="190" y1="158" x2="234" y2="158" strokeDasharray="44" strokeDashoffset="44"
          style={{ animation: "draw 0.4s ease forwards 1.8s", opacity: 0 }}/>
        <circle cx="212" cy="150" r="5.5" strokeDasharray="35" strokeDashoffset="35"
          style={{ animation: "draw 0.5s ease forwards 2.0s", opacity: 0 }}/>
        <circle cx="212" cy="150" r="2.5" fill="#8a4010" opacity="0.7"
          style={{ animation: "dot-appear 0.3s ease forwards 2.3s", opacity: 0 }}/>
      </g>

      {/* TERRACOTTA DOT ACCENTS — left leg */}
      <g fill="#b83820" opacity="0.7">
        {legDots.map((y, i) => (
          <circle key={`ll${i}`} cx="48" cy={y} r="1.8"
            style={{ animation: `dot-appear 0.25s ease forwards ${2.4 + i * 0.1}s`, opacity: 0 }}/>
        ))}
        {leftDots.map((p, i) => (
          <circle key={`la${i}`} cx={p.cx} cy={p.cy} r="1.5"
            style={{ animation: `dot-appear 0.25s ease forwards ${2.7 + i * 0.1}s`, opacity: 0 }}/>
        ))}
        {/* right leg */}
        {legDots.map((y, i) => (
          <circle key={`rl${i}`} cx="212" cy={y} r="1.8"
            style={{ animation: `dot-appear 0.25s ease forwards ${2.4 + i * 0.1}s`, opacity: 0 }}/>
        ))}
        {rightDots.map((p, i) => (
          <circle key={`ra${i}`} cx={p.cx} cy={p.cy} r="1.5"
            style={{ animation: `dot-appear 0.25s ease forwards ${2.7 + i * 0.1}s`, opacity: 0 }}/>
        ))}
      </g>

      {/* GOLD MARKERS at middle-arch spring points */}
      <g fill="#b87808" opacity="0.6">
        <circle cx="68" cy="166" r="1.5" style={{ animation: "dot-appear 0.3s ease forwards 3.1s", opacity: 0 }}/>
        <circle cx="192" cy="166" r="1.5" style={{ animation: "dot-appear 0.3s ease forwards 3.1s", opacity: 0 }}/>
        <circle cx="90" cy="183" r="1.5" style={{ animation: "dot-appear 0.3s ease forwards 3.2s", opacity: 0 }}/>
        <circle cx="170" cy="183" r="1.5" style={{ animation: "dot-appear 0.3s ease forwards 3.2s", opacity: 0 }}/>
      </g>

      {/* APEX MEDALLION — nested circles + 8 lotus petals */}
      <circle cx="130" cy="20" r="14" fill="none" stroke="#8a4010" strokeWidth="0.85"
        strokeDasharray="88" strokeDashoffset="88"
        style={{ animation: "draw 0.7s ease forwards 2.5s", opacity: 0 }}/>
      <circle cx="130" cy="20" r="9" fill="none" stroke="#b87808" strokeWidth="0.65"
        strokeDasharray="57" strokeDashoffset="57"
        style={{ animation: "draw 0.6s ease forwards 2.7s", opacity: 0 }}/>
      <circle cx="130" cy="20" r="5" fill="none" stroke="#b83820" strokeWidth="0.55"
        strokeDasharray="31" strokeDashoffset="31"
        style={{ animation: "draw 0.5s ease forwards 2.9s", opacity: 0 }}/>
      <circle cx="130" cy="20" r="2.5" fill="#8a4010" opacity="0.9"
        style={{ animation: "dot-appear 0.3s ease forwards 3.1s", opacity: 0 }}/>
      <g fill="#b87808" opacity="0.7">
        {petals.map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r="1.5"
            style={{ animation: `dot-appear 0.2s ease forwards ${3.3 + i * 0.08}s`, opacity: 0 }}/>
        ))}
      </g>

      {/* HORIZONTAL LINTEL at medallion level */}
      <line x1="15" y1="20" x2="48" y2="20" stroke="#8a4010" strokeWidth="0.5" opacity="0.4"
        strokeDasharray="33" strokeDashoffset="33"
        style={{ animation: "draw 0.4s ease forwards 2.6s", opacity: 0 }}/>
      <line x1="212" y1="20" x2="245" y2="20" stroke="#8a4010" strokeWidth="0.5" opacity="0.4"
        strokeDasharray="33" strokeDashoffset="33"
        style={{ animation: "draw 0.4s ease forwards 2.6s", opacity: 0 }}/>

      {/* SPANDREL MEDALLIONS — ornamental circles in arch corners */}
      <g fill="none" stroke="#8a4010" strokeWidth="0.5" opacity="0.35">
        <circle cx="26" cy="65" r="11" style={{ animation: "dot-appear 0.4s ease forwards 3.5s", opacity: 0 }}/>
        <circle cx="26" cy="65" r="6"  style={{ animation: "dot-appear 0.3s ease forwards 3.6s", opacity: 0 }}/>
        <circle cx="26" cy="65" r="2.5" fill="#8a4010" style={{ animation: "dot-appear 0.3s ease forwards 3.7s", opacity: 0 }}/>
        <circle cx="234" cy="65" r="11" style={{ animation: "dot-appear 0.4s ease forwards 3.5s", opacity: 0 }}/>
        <circle cx="234" cy="65" r="6"  style={{ animation: "dot-appear 0.3s ease forwards 3.6s", opacity: 0 }}/>
        <circle cx="234" cy="65" r="2.5" fill="#8a4010" style={{ animation: "dot-appear 0.3s ease forwards 3.7s", opacity: 0 }}/>
      </g>

      {/* CARVED BAND — repeating arch motifs along outer arch inner face */}
      <g fill="none" stroke="#b83820" strokeWidth="0.45" opacity="0.32">
        <path d="M 52 170 C 52 158 60 152 60 152 C 60 152 68 158 68 170"
          style={{ animation: "dot-appear 0.4s ease forwards 3.8s", opacity: 0 }}/>
        <path d="M 57 128 C 57 116 65 110 66 108 C 67 110 76 116 75 128"
          style={{ animation: "dot-appear 0.4s ease forwards 3.9s", opacity: 0 }}/>
        <path d="M 192 170 C 192 158 200 152 200 152 C 200 152 208 158 208 170"
          style={{ animation: "dot-appear 0.4s ease forwards 3.8s", opacity: 0 }}/>
        <path d="M 184 128 C 184 116 193 110 194 108 C 195 110 203 116 203 128"
          style={{ animation: "dot-appear 0.4s ease forwards 3.9s", opacity: 0 }}/>
      </g>
    </svg>
  )
}

// ── NYC ORNAMENT · Manhattan Skyline ─────────────────────────
function NycOrnament() {
  const gnd = 195  // ground / waterline y

  // Buildings: { x=left edge, top=roof y, w=width }
  const blds = [
    { x: 2,   top: 182, w: 12 },
    { x: 16,  top: 172, w: 13 },
    { x: 31,  top: 162, w: 13 },
    { x: 46,  top: 150, w: 16 },
    { x: 64,  top: 128, w: 17 },  // Chrysler area
    { x: 88,  top: 84,  w: 22 },  // Empire State
    { x: 113, top: 150, w: 14 },
    { x: 130, top: 98,  w: 22 },  // One WTC
    { x: 155, top: 145, w: 14 },
    { x: 172, top: 160, w: 14 },
    { x: 189, top: 168, w: 14 },
    { x: 206, top: 174, w: 15 },
    { x: 224, top: 179, w: 15 },
    { x: 242, top: 184, w: 16 },
  ]

  const SP = 4  // window grid spacing

  // Window dots for every building
  const dots = blds.flatMap((b, bi) => {
    const h = gnd - b.top
    const res: { cx: number; cy: number; bi: number }[] = []
    for (let dx = 2; dx < b.w - 1; dx += SP)
      for (let dy = 3; dy < h - 2; dy += SP)
        res.push({ cx: b.x + dx, cy: b.top + dy, bi })
    return res
  })

  const stars = [
    { cx: 12, cy: 16 }, { cx: 38, cy: 28 }, { cx: 72, cy: 10 },
    { cx: 112, cy: 22 }, { cx: 154, cy: 13 }, { cx: 190, cy: 26 },
    { cx: 226, cy: 8  }, { cx: 250, cy: 34 },
  ]

  return (
    <svg width="520" height="520" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">

      {/* Stars */}
      {stars.map((s, i) => (
        <circle key={`st${i}`} cx={s.cx} cy={s.cy} r="0.9" fill="#c0d0e0" opacity="0.5"
          style={{ animation: `dot-appear 0.3s ease forwards ${0.05 + i * 0.07}s`, opacity: 0 }}/>
      ))}

      {/* Moon */}
      <circle cx="235" cy="20" r="7.5" fill="none" stroke="#c0d0e0" strokeWidth="0.5" opacity="0.22"
        style={{ animation: 'dot-appear 0.5s ease forwards 0.2s', opacity: 0 }}/>

      {/* Building fills + outlines */}
      {blds.map((b, i) => (
        <rect key={`bl${i}`} x={b.x} y={b.top} width={b.w} height={gnd - b.top}
          fill="rgba(5,10,22,0.82)" stroke="#1c3050" strokeWidth="0.45" opacity="0.9"
          style={{ animation: `dot-appear 0.35s ease forwards ${0.2 + i * 0.04}s`, opacity: 0 }}/>
      ))}

      {/* Window dots — amber / white / blue */}
      {dots.map((d, i) => {
        const v   = (d.bi * 13 + i * 7) % 26
        const col = v < 17 ? '#e8a840' : v < 22 ? '#f8e8a0' : '#4a9eff'
        const op  = v < 17 ? 0.70 : v < 22 ? 0.95 : 0.88
        return (
          <circle key={`d${i}`} cx={d.cx} cy={d.cy} r="1.1" fill={col} opacity={op}
            style={{ animation: `dot-appear 0.2s ease forwards ${0.5 + (i * 7 % 180) * 0.011}s`, opacity: 0 }}/>
        )
      })}

      {/* Chrysler spire (bld 4: center x≈72, top=128) */}
      <path d="M 68 128 L 66 115 L 62 107 L 72 98 L 82 107 L 78 115 L 76 128"
        fill="none" stroke="#9ab0c8" strokeWidth="0.65" opacity="0.68"
        strokeDasharray="82" strokeDashoffset="82"
        style={{ animation: 'draw 0.5s ease forwards 0.44s', opacity: 0 }}/>
      <line x1="72" y1="98" x2="72" y2="86"
        stroke="#9ab0c8" strokeWidth="0.5" opacity="0.58"
        strokeDasharray="14" strokeDashoffset="14"
        style={{ animation: 'draw 0.25s ease forwards 0.88s', opacity: 0 }}/>

      {/* Empire State spire (bld 5: center x≈99, top=84) */}
      <line x1="99" y1="84" x2="99" y2="60"
        stroke="#dde4ee" strokeWidth="0.95" opacity="0.82"
        strokeDasharray="26" strokeDashoffset="26"
        style={{ animation: 'draw 0.4s ease forwards 0.5s', opacity: 0 }}/>
      <line x1="99" y1="60" x2="99" y2="44"
        stroke="#dde4ee" strokeWidth="0.55" opacity="0.62"
        strokeDasharray="18" strokeDashoffset="18"
        style={{ animation: 'draw 0.3s ease forwards 0.85s', opacity: 0 }}/>
      <circle cx="99" cy="44" r="2.2" fill="#f8e8a0" opacity="0.9"
        style={{ animation: 'dot-appear 0.3s ease forwards 1.12s', opacity: 0 }}/>

      {/* One WTC antenna (bld 7: center x≈141, top=98) */}
      <line x1="141" y1="98" x2="141" y2="68"
        stroke="#dde4ee" strokeWidth="0.75" opacity="0.75"
        strokeDasharray="32" strokeDashoffset="32"
        style={{ animation: 'draw 0.4s ease forwards 0.5s', opacity: 0 }}/>
      <circle cx="141" cy="68" r="1.8" fill="#ff3838" opacity="0.92"
        style={{ animation: 'dot-appear 0.3s ease forwards 0.88s', opacity: 0 }}/>

      {/* Waterline */}
      <line x1="0" y1={gnd} x2="260" y2={gnd}
        stroke="#2a4a6a" strokeWidth="0.65" opacity="0.58"
        strokeDasharray="260" strokeDashoffset="260"
        style={{ animation: 'draw 1.2s ease forwards 0.15s', opacity: 0 }}/>

      {/* Water ripples */}
      {[5, 12, 20].map((dy, i) => (
        <path key={`rp${i}`}
          d={`M 0 ${gnd + dy} Q 65 ${gnd + dy - 2} 130 ${gnd + dy} Q 195 ${gnd + dy + 2} 260 ${gnd + dy}`}
          fill="none" stroke="#4a9eff" strokeWidth="0.45" opacity={0.18 - i * 0.05}
          strokeDasharray="280" strokeDashoffset="280"
          style={{ animation: `draw 1.5s ease forwards ${0.9 + i * 0.15}s`, opacity: 0 }}/>
      ))}
    </svg>
  )
}

// ── SFO ORNAMENT · Golden Hour Sunburst ────────────────────
function SfoOrnament() {
  const cx = 130, cy = 130
  const longR = 100, shortR = 62
  const longRays  = Array.from({ length: 12 }, (_, i) => {
    const a = (i * 30 - 90) * Math.PI / 180
    return { x2: cx + longR  * Math.cos(a), y2: cy + longR  * Math.sin(a) }
  })
  const shortRays = Array.from({ length: 12 }, (_, i) => {
    const a = (i * 30 + 15 - 90) * Math.PI / 180
    return { x2: cx + shortR * Math.cos(a), y2: cy + shortR * Math.sin(a) }
  })
  return (
    <svg width="520" height="520" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
      {/* Short rays */}
      {shortRays.map((r, i) => (
        <line key={`s${i}`} x1={cx} y1={cy} x2={r.x2} y2={r.y2}
          stroke="#f5a623" strokeWidth="0.6" opacity="0.38"
          strokeDasharray="62" strokeDashoffset="62"
          style={{ animation: `draw 0.35s ease forwards ${0.4 + i * 0.04}s`, opacity: 0 }}/>
      ))}
      {/* Long rays */}
      {longRays.map((r, i) => (
        <line key={`l${i}`} x1={cx} y1={cy} x2={r.x2} y2={r.y2}
          stroke="#f5a623" strokeWidth="0.85" opacity="0.7"
          strokeDasharray="100" strokeDashoffset="100"
          style={{ animation: `draw 0.5s ease forwards ${0.5 + i * 0.05}s`, opacity: 0 }}/>
      ))}
      {/* Concentric circles */}
      <circle cx={cx} cy={cy} r="28"  fill="none" stroke="#e05c2a" strokeWidth="0.85" opacity="0.5"
        strokeDasharray="176" strokeDashoffset="176" style={{ animation: "draw 0.8s ease forwards 1.4s", opacity: 0 }}/>
      <circle cx={cx} cy={cy} r="62"  fill="none" stroke="#e05c2a" strokeWidth="0.6"  opacity="0.32"
        strokeDasharray="390" strokeDashoffset="390" style={{ animation: "draw 1.0s ease forwards 1.7s", opacity: 0 }}/>
      <circle cx={cx} cy={cy} r="100" fill="none" stroke="#f5a623" strokeWidth="0.45" opacity="0.2"
        strokeDasharray="628" strokeDashoffset="628" style={{ animation: "draw 1.2s ease forwards 2.0s", opacity: 0 }}/>
      {/* Dot accents at long ray tips */}
      {longRays.map((r, i) => (
        <circle key={`d${i}`} cx={r.x2} cy={r.y2} r="2.2"
          fill="#e05c2a" opacity="0.75"
          style={{ animation: `dot-appear 0.3s ease forwards ${2.2 + i * 0.05}s`, opacity: 0 }}/>
      ))}
      {/* Centre */}
      <circle cx={cx} cy={cy} r="5"   fill="#f5a623" opacity="0.9"  style={{ animation: "dot-appear 0.4s ease forwards 2.9s", opacity: 0 }}/>
      <circle cx={cx} cy={cy} r="2.5" fill="#e05c2a"                style={{ animation: "dot-appear 0.3s ease forwards 3.1s", opacity: 0 }}/>
    </svg>
  )
}

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [loadingFade, setLoadingFade] = useState(false)
  const [kolamsVisible, setKolamsVisible] = useState(false)
  const [kolamsSettled, setKolamsSettled] = useState(false)
  const [city, setCity] = useState<City>('hyd')
  const [menuOpen, setMenuOpen] = useState(false)
  const [nameIdx, setNameIdx] = useState(0)
  const [nameVis, setNameVis] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-city', city)
    Object.entries(cityVars[city]).forEach(([k, v]) => root.style.setProperty(k, v))
  }, [city])

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

  const { cardBg, cardHover, infoBg, infoHover, navBg, heroBlobBg } = cityColors[city]

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
          <li style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            {(['hyd', 'nyc', 'sfo'] as City[]).map((c, i) => (
              <span key={c} style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                {i > 0 && <span className="city-sep">·</span>}
                <button className={`city-btn${city === c ? ' active' : ''}`} onClick={() => setCity(c)}>
                  {cityLabels[c]}
                </button>
              </span>
            ))}
          </li>
        </ul>
        {/* mobile hamburger */}
        <button className="hamburger-btn" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* HYD NAV GARLAND */}
      {city === 'hyd' && (
        <div className="nav-garland">
          <NavGarland />
        </div>
      )}

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          {['about','experience','projects','awards','interests','contact'].map(s => (
            <a key={s} href={`#${s}`} className="mobile-menu-link" onClick={() => setMenuOpen(false)}>{s}</a>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '0.5rem' }}>
            {(['hyd', 'nyc', 'sfo'] as City[]).map((c, i) => (
              <span key={c} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {i > 0 && <span className="city-sep">·</span>}
                <button className={`city-btn${city === c ? ' active' : ''}`}
                  onClick={() => { setCity(c); setMenuOpen(false) }}>
                  {cityLabels[c]}
                </button>
              </span>
            ))}
          </div>
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
          {city === 'hyd' && <HydOrnament />}
          {city === 'nyc' && <NycOrnament />}
          {city === 'sfo' && <SfoOrnament />}
        </div>}

          {false && <div style={{display:'none'}}>

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
            { src: '/photo-kid.png',        label: 'locked in' },
            { src: '/photo-whiteboard.png', label: ':D' },
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
