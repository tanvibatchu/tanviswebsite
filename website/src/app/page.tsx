'use client'

import { useEffect, useRef, useState } from 'react'
import { highlights, experience, projects, awards, skills, interests } from '@/data'

const names = ['Tanvi Batchu', 'తన్వి బచ్చు']
const fonts = ["var(--font-cormorant),'Cormorant Garamond',serif", "'Noto Sans Telugu',sans-serif"]
const colors = ['var(--cream)', 'var(--gold-light)']

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
      className={`reveal ${visible ? 'in' : ''}`}
      style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto', padding: '5rem 2.5rem' }}>
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
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, var(--terra-mid) 40%, var(--gold-dim) 50%, var(--terra-mid) 60%, transparent)' }} />
      <span style={{ color: 'var(--gold-dim)', fontFamily: "var(--font-cormorant),'Cormorant Garamond',serif" }}>{ornament}</span>
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, var(--terra-mid) 40%, var(--gold-dim) 50%, var(--terra-mid) 60%, transparent)' }} />
    </div>
  )
}

export default function Home() {
  const [nameIdx, setNameIdx] = useState(0)
  const [nameVis, setNameVis] = useState(true)

  useEffect(() => {
    const t = setInterval(() => {
      setNameVis(false)
      setTimeout(() => { setNameIdx(i => (i + 1) % names.length); setNameVis(true) }, 420)
    }, 3500)
    return () => clearInterval(t)
  }, [])

  const serif = "var(--font-cormorant),'Cormorant Garamond',serif"

  return (
    <main>
      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.2rem 3.5rem', background: 'linear-gradient(to bottom, rgba(26,11,1,0.97) 60%, transparent)' }}>
        <span style={{ fontFamily: fonts[nameIdx], color: 'var(--gold-light)', letterSpacing: '0.06em', fontSize: '1rem', transition: 'all 0.5s' }}>
          {names[nameIdx]}
        </span>
        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
          {['about','experience','projects','awards','interests','contact'].map(s => (
            <li key={s}>
              <a href={`#${s}`} style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--cream-dim)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--cream-dim)')}>
                {s}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8rem 3.5rem 5rem' }}>
        <div style={{ position: 'absolute', width: '700px', height: '700px', top: '50%', left: '35%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(ellipse, rgba(212,146,10,0.1) 0%, rgba(196,80,26,0.07) 45%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '70px', left: 0, right: 0, height: '2px', background: 'linear-gradient(to right, transparent 5%, var(--terra-mid) 20%, var(--gold-light) 50%, var(--terra-mid) 80%, transparent 95%)' }} />

        <div style={{ maxWidth: '680px' }}>
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
              <span key={c} style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '5px 13px', border: '0.5px solid var(--terra-mid)', color: 'var(--cream-dim)', background: 'rgba(138,56,16,0.15)', borderRadius: '2px' }}>{c}</span>
            ))}
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '2.5rem', left: '3.5rem', display: 'flex', flexDirection: 'column', gap: '8px', animation: 'fadeUp 1s 1.3s forwards', opacity: 0 }}>
          <span style={{ fontSize: '0.56rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--terra-mid)' }}>scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--gold-dim), transparent)' }} />
        </div>
      </div>

      <Divider />

      {/* ABOUT */}
      <Section id="about" telugu="నా గురించి" english="about">
        <h2 style={{ fontFamily: serif, fontSize: 'clamp(2.4rem,5vw,3.5rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '1.5rem' }}>who i am</h2>
        <p style={{ fontSize: '0.93rem', lineHeight: 1.9, color: 'var(--body)', maxWidth: '580px', marginBottom: '2rem' }}>
          i&apos;m a cs + finance student at waterloo (cfm), incoming ai & algorithms engineer at rbc capital markets. i build at the intersection of software, markets, and finance, but more importantly, i am extremely passionate about building with purpose. follow along on my journey!
        </p>
        <div style={{ borderLeft: '2px solid var(--gold-dim)', paddingLeft: '1.5rem', marginBottom: '2.5rem' }}>
          <p style={{ fontFamily: serif, fontStyle: 'italic', color: 'var(--cream-dim)', fontSize: '1.15rem', lineHeight: 1.7 }}>
            &ldquo;i like projects that are practical, make an impact, are rigorous, and a little ambitious.&rdquo;
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderTop: '0.5px solid var(--sand)', borderLeft: '0.5px solid var(--sand)' }}>
          {[
            ['program','CS + Finance (CFM)\n@ Waterloo'],
            ['incoming','AI Engineer in Algorithmic Research\nRBC Capital Markets'],
            ['open to','Opportunities after Fall 2026'],
            ['roots','Telugu · South Indian\nMarkham, Ontario'],
            ['music','Carnatic vocalist\n15+ years'],
            ['also speaks','Telugu · Latin (working proficiency)'],
          ].map(([l,v]) => (
            <div key={l} style={{ padding: '1.2rem', borderRight: '0.5px solid var(--sand)', borderBottom: '0.5px solid var(--sand)', background: 'rgba(45,18,3,0.4)', transition: 'background 0.3s' }} onMouseEnter={e => (e.currentTarget.style.background='rgba(80,32,8,0.5)')} onMouseLeave={e => (e.currentTarget.style.background='rgba(45,18,3,0.4)')}>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }}>
          {experience.map((e,i) => (
            <div key={i} style={{ padding: '1.5rem', borderLeft: '2px solid var(--gold-dim)', borderTop: '0.5px solid var(--sand)', borderRight: '0.5px solid var(--sand)', borderBottom: '0.5px solid var(--sand)', borderRadius: '4px', background: 'rgba(60,25,5,0.5)', transition: 'background 0.3s, transform 0.25s' }} onMouseEnter={e => { e.currentTarget.style.background='rgba(95,40,10,0.6)'; e.currentTarget.style.transform='translateY(-2px)' }} onMouseLeave={e => { e.currentTarget.style.background='rgba(60,25,5,0.5)'; e.currentTarget.style.transform='translateY(0)' }}>
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--gold-dim)', textTransform: 'uppercase', lineHeight: 1.7, display: 'block', marginBottom: '0.5rem' }}>{e.date}</span>
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
      <Section id="projects" telugu="పని" english="projects">
        <h2 style={{ fontFamily: serif, fontSize: 'clamp(2.4rem,5vw,3.5rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '2rem' }}>selected work</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
        {projects.map((p,i) => (
          <a key={i} href={p.href} target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', flexDirection: 'column', border: '0.5px solid var(--sand)', borderRadius: '4px', overflow: 'hidden', textDecoration: 'none', color: 'inherit', transition: 'border-color 0.3s' }}
            onMouseEnter={e => { (e.currentTarget.querySelector('.pn') as HTMLElement).style.color='var(--gold)'; (e.currentTarget.querySelector('.pt') as HTMLElement).style.color='var(--gold-light)'; (e.currentTarget.querySelector('.pa') as HTMLElement).style.color='var(--gold)' }}
            onMouseLeave={e => { (e.currentTarget.querySelector('.pn') as HTMLElement).style.color='var(--terra-mid)'; (e.currentTarget.querySelector('.pt') as HTMLElement).style.color='var(--cream)'; (e.currentTarget.querySelector('.pa') as HTMLElement).style.color='var(--sand)' }}>
            <span className="pn" style={{ fontFamily: serif, fontSize: '1.5rem', color: 'var(--terra-mid)', lineHeight: 1, paddingTop: '3px', transition: 'color 0.3s' }}>{p.num}</span>
            <div>
              {(p as any).image && (
                <div style={{ overflow: 'hidden' }}>
                  <img src={(p as any).image} alt={p.title} style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block', opacity: 0.9, transition: 'opacity 0.3s' }} />
                </div>
              )}
              <div style={{ padding: '1.2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {p.badge && <span style={{ display: 'inline-block', fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '2px 8px', marginBottom: '0.4rem', border: '0.5px solid var(--gold-dim)', color: 'var(--gold-dim)', background: 'rgba(212,146,10,0.1)', borderRadius: '2px' }}>{p.badge}</span>}
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem', alignItems: 'start' }}>
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
                style={{ padding: '1.5rem', borderLeft: '2px solid var(--gold-dim)', borderTop: '0.5px solid var(--sand)', borderRight: '0.5px solid var(--sand)', borderBottom: '0.5px solid var(--sand)', borderRadius: '4px', background: 'rgba(60,25,5,0.5)', textDecoration: 'none', color: 'inherit', display: 'block', transition: 'border-color 0.3s, background 0.3s, transform 0.25s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold-dim)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--sand)')}>
                {inner}
              </a>
            ) : (
              <div key={i} style={{ padding: '1.5rem', borderLeft: '2px solid var(--gold-dim)', borderTop: '0.5px solid var(--sand)', borderRight: '0.5px solid var(--sand)', borderBottom: '0.5px solid var(--sand)', borderRadius: '4px', background: 'rgba(60,25,5,0.5)', transition: 'background 0.3s, transform 0.25s' }} onMouseEnter={e => { e.currentTarget.style.background='rgba(95,40,10,0.6)'; e.currentTarget.style.transform='translateY(-2px)' }} onMouseLeave={e => { e.currentTarget.style.background='rgba(60,25,5,0.5)'; e.currentTarget.style.transform='translateY(0)' }}>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--sand)' }}>
          {interests.map((item,i) => (
            <div key={i} style={{ padding: '1.6rem 1.4rem', background: 'rgba(50,20,2,0.5)', transition: 'background 0.3s, transform 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(90,38,10,0.7)'; e.currentTarget.style.transform='translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background='rgba(50,20,2,0.5)'; e.currentTarget.style.transform='translateY(0)' }}>
              <div style={{ fontFamily: serif, fontSize: '1.4rem', color: 'var(--gold-dim)', marginBottom: '0.7rem' }}>{item.glyph}</div>
              <p style={{ fontFamily: serif, color: 'var(--cream)', marginBottom: '0.3rem', fontSize: '1.05rem' }}>{item.name}</p>
              <p style={{ fontSize: '0.76rem', color: 'var(--muted)', lineHeight: 1.65 }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* CONTACT */}
      <Section id="contact" telugu="కలుద్దాం" english="contact">
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
