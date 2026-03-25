'use client'

import { useEffect, useRef, useState } from 'react'
import { highlights, experience, projects, awards, skills, interests } from '@/data'

const names = ['Tanvi Batchu', 'తన్వి బచ్చు']
const fonts = ["var(--font-cormorant), 'Cormorant Garamond', serif", "'Noto Sans Telugu', sans-serif"]
const colors = ['var(--cream)', 'var(--gold-light)']

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
      className={`reveal ${visible ? 'in' : ''} relative z-10 max-w-4xl mx-auto px-10 py-24`}>
      <div className="flex items-center gap-3 mb-10">
        <div className="flex-1 h-px" style={{ background: 'var(--sand)' }} />
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--gold-dim)', whiteSpace: 'nowrap' }}>
          {telugu} · {english}
        </span>
        <div className="flex-1 h-px" style={{ background: 'var(--sand)' }} />
      </div>
      {children}
    </section>
  )
}

function Divider({ ornament = '❧' }: { ornament?: string }) {
  return (
    <div className="relative z-10 flex items-center gap-3 px-12">
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, var(--terra-mid) 40%, var(--gold-dim) 50%, var(--terra-mid) 60%, transparent)' }} />
      <span style={{ color: 'var(--gold-dim)', fontFamily: "var(--font-cormorant), serif" }}>{ornament}</span>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, var(--terra-mid) 40%, var(--gold-dim) 50%, var(--terra-mid) 60%, transparent)' }} />
    </div>
  )
}

export default function Home() {
  const [nameIdx, setNameIdx] = useState(0)
  const [nameVisible, setNameVisible] = useState(true)

  useEffect(() => {
    const t = setInterval(() => {
      setNameVisible(false)
      setTimeout(() => {
        setNameIdx(i => (i + 1) % names.length)
        setNameVisible(true)
      }, 420)
    }, 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <main>

      {/* NAV */}
      <nav style={{ background: 'linear-gradient(to bottom, rgba(30,13,2,0.97) 60%, transparent)' }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-14 py-5">
        <span style={{ fontFamily: fonts[nameIdx], color: 'var(--gold-light)', letterSpacing: '0.05em', fontSize: '1rem', transition: 'all 0.5s' }}>
          {names[nameIdx]}
        </span>
        <ul className="flex list-none" style={{ gap: '2.5rem' }}>
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
      <div className="relative z-10 flex flex-col justify-center px-14 pt-36 pb-32" style={{ minHeight: '100vh' }}>
        <div className="absolute pointer-events-none" style={{
          width: '700px', height: '700px', top: '50%', left: '35%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, rgba(228,162,10,0.09) 0%, rgba(196,80,26,0.07) 45%, transparent 70%)'
        }} />
        <div className="absolute left-0 right-0" style={{
          top: '72px', height: '2px',
          background: 'linear-gradient(to right, transparent 5%, var(--terra-mid) 20%, var(--gold-light) 50%, var(--terra-mid) 80%, transparent 95%)'
        }} />

        <div style={{ maxWidth: '700px' }}>
          <p style={{ fontSize: '0.62rem', letterSpacing: '0.55em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '1.5rem', animation: 'fadeUp 1s 0.2s forwards', opacity: 0 }}>
            ✦ &nbsp; hey there,
          </p>

          <h1 style={{
            fontSize: 'clamp(3.5rem, 9vw, 7rem)',
            fontFamily: fonts[nameIdx],
            color: colors[nameIdx],
            fontWeight: 300,
            lineHeight: 1,
            marginBottom: '2rem',
            opacity: nameVisible ? 1 : 0,
            transform: nameVisible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.42s ease, transform 0.42s ease',
            animation: 'fadeUp 1s 0.4s forwards',
          }}>
            i&apos;m {names[nameIdx]}.
          </h1>

          <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--cream-dim)', marginBottom: '2.5rem', animation: 'fadeUp 1s 0.6s forwards', opacity: 0, lineHeight: 2 }}>
            cs & finance @ waterloo &nbsp;·&nbsp; incoming ai engineer @ rbc capital markets
          </p>

          <div style={{ animation: 'fadeUp 1s 0.8s forwards', opacity: 0 }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--gold-dim)', marginBottom: '1rem', letterSpacing: '0.05em' }}>
              some things i&apos;ve done:
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--body)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--gold-dim)', flexShrink: 0, marginTop: '2px' }}>→</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '2.5rem', animation: 'fadeUp 1s 1s forwards', opacity: 0 }}>
            {['telugu roots', 'carnatic · 15 years', 'waterloo cfm'].map(c => (
              <span key={c} style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '5px 13px', border: '0.5px solid var(--terra-mid)', color: 'var(--cream-dim)', background: 'rgba(154,64,24,0.15)', borderRadius: '2px' }}>
                {c}
              </span>
            ))}
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '2.5rem', left: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', animation: 'fadeUp 1s 1.3s forwards', opacity: 0 }}>
          <span style={{ fontSize: '0.56rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--terra-mid)' }}>scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--gold-dim), transparent)' }} />
        </div>
      </div>

      <Divider />

      {/* ABOUT */}
      <Section id="about" telugu="పరిచయం" english="about">
        <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '1.5rem' }}>
          who i am
        </h2>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--body)', maxWidth: '600px', marginBottom: '2rem' }}>
          i&apos;m a cs + finance student at waterloo (cfm), incoming ai & algorithms engineer at rbc capital markets. i build at the intersection of software, markets, and finance — from risk pipelines and portfolio analytics to ai-powered tools. i grew up telugu in the gta, trained in carnatic music for fifteen years, and learned early that discipline and improvisation aren&apos;t opposites.
        </p>
        <div style={{ borderLeft: '2px solid var(--gold-dim)', paddingLeft: '1.5rem', marginBottom: '2.5rem' }}>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: 'italic', color: 'var(--cream-mid)', fontSize: '1.2rem', lineHeight: 1.7 }}>
            &ldquo;i like projects that are practical, make an impact, are rigorous, and a little ambitious.&rdquo;
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '0.5px solid var(--sand)', borderLeft: '0.5px solid var(--sand)' }}>
          {[
            ['program', 'CS + Finance (CFM)\n@ Waterloo'],
            ['incoming', 'AI & Algorithms Engineer\nRBC Capital Markets'],
            ['open to', 'opportunities after Fall 2026'],
            ['roots', 'Telugu · South Indian\nMarkham, Ontario'],
            ['music', 'Carnatic vocalist\n15+ years · Level 4'],
            ['also speaks', 'Telugu · Latin'],
          ].map(([label, val]) => (
            <div key={label} style={{ padding: '1.2rem', borderRight: '0.5px solid var(--sand)', borderBottom: '0.5px solid var(--sand)' }}>
              <p style={{ fontSize: '0.57rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '0.4rem' }}>{label}</p>
              <p style={{ fontFamily: "var(--font-cormorant), serif", color: 'var(--cream)', lineHeight: 1.4, fontSize: '0.95rem', whiteSpace: 'pre-line' }}>{val}</p>
            </div>
          ))}
        </div>
      </Section>

      <Divider ornament="✦" />

      {/* SKILLS */}
      <Section id="skills" telugu="నైపుణ్యాలు" english="skills">
        <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '2rem' }}>
          what i work with
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {skills.map((s, i) => (
            <div key={i}>
              <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '0.75rem' }}>{s.category}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {s.items.map(item => (
                  <span key={item} style={{ fontSize: '0.72rem', padding: '3px 9px', border: '0.5px solid var(--sand)', color: 'var(--muted)', borderRadius: '2px' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* EXPERIENCE */}
      <Section id="experience" telugu="అనుభవం" english="experience">
        <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '2rem' }}>
          where i&apos;ve been
        </h2>
        <div>
          {experience.map((e, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '2rem', padding: '2rem 0', borderBottom: '0.5px solid var(--sand)' }}>
              <span style={{ fontSize: '0.63rem', letterSpacing: '0.08em', color: 'var(--gold-dim)', textTransform: 'uppercase', lineHeight: 1.7, paddingTop: '3px' }}>{e.date}</span>
              <div>
                <p style={{ fontFamily: "var(--font-cormorant), serif", color: 'var(--cream)', fontSize: '1.2rem', marginBottom: '0.2rem' }}>{e.role}</p>
                <p style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--terra-light)', marginBottom: '0.6rem' }}>{e.company}</p>
                <ul style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {e.bullets.map((b, j) => (
                    <li key={j} style={{ marginLeft: '1rem', listStyleType: 'disc' }}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Divider ornament="✦" />

      {/* PROJECTS */}
      <Section id="projects" telugu="పని" english="projects">
        <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '2rem' }}>
          selected work
        </h2>
        <div>
          {projects.map((p, i) => (
            <a key={i} href={p.href} target="_blank" rel="noopener noreferrer"
              style={{ display: 'grid', gridTemplateColumns: '46px 1fr 22px', gap: '1.5rem', padding: '1.8rem 0', borderBottom: '0.5px solid var(--sand)', textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={e => { (e.currentTarget.querySelector('.pnum') as HTMLElement).style.color = 'var(--gold)'; (e.currentTarget.querySelector('.ptitle') as HTMLElement).style.color = 'var(--gold-light)'; (e.currentTarget.querySelector('.parrow') as HTMLElement).style.color = 'var(--gold)' }}
              onMouseLeave={e => { (e.currentTarget.querySelector('.pnum') as HTMLElement).style.color = 'var(--terra-mid)'; (e.currentTarget.querySelector('.ptitle') as HTMLElement).style.color = 'var(--cream)'; (e.currentTarget.querySelector('.parrow') as HTMLElement).style.color = 'var(--sand)' }}>
              <span className="pnum" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: '1.5rem', color: 'var(--terra-mid)', lineHeight: 1, paddingTop: '3px', transition: 'color 0.3s' }}>{p.num}</span>
              <div>
                {p.badge && (
                  <span style={{ display: 'inline-block', fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '2px 8px', marginBottom: '0.4rem', border: '0.5px solid var(--gold-dim)', color: 'var(--gold-dim)', background: 'rgba(228,162,10,0.1)', borderRadius: '2px' }}>
                    {p.badge}
                  </span>
                )}
                <p className="ptitle" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: '1.25rem', color: 'var(--cream)', marginBottom: '0.4rem', transition: 'color 0.3s' }}>{p.title}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.6rem' }}>{p.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '2px 8px', border: '0.5px solid var(--sand)', color: 'var(--muted)', borderRadius: '2px' }}>{t}</span>
                  ))}
                </div>
              </div>
              <span className="parrow" style={{ color: 'var(--sand)', paddingTop: '3px', transition: 'color 0.3s', fontSize: '1rem' }}>↗</span>
            </a>
          ))}
        </div>
      </Section>

      <Divider />

      {/* AWARDS */}
      <Section id="awards" telugu="పురస్కారాలు" english="awards">
        <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '2rem' }}>
          recognition
        </h2>
        <div>
          {awards.map((a, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', padding: '1.3rem 0', borderBottom: '0.5px solid var(--sand)' }}>
              <div>
                <p style={{ fontFamily: "var(--font-cormorant), serif", color: 'var(--cream)', fontSize: '1.1rem', marginBottom: '0.2rem' }}>{a.name}</p>
                <p style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{a.org}</p>
              </div>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--gold-dim)', textTransform: 'uppercase', whiteSpace: 'nowrap', paddingTop: '4px' }}>{a.year}</span>
            </div>
          ))}
        </div>
      </Section>

      <Divider ornament="✦" />

      {/* INTERESTS */}
      <Section id="interests" telugu="ఆసక్తులు" english="interests">
        <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '2rem' }}>
          beyond the screen
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1px', background: 'var(--sand)' }}>
          {interests.map((item, i) => (
            <div key={i} style={{ padding: '1.6rem 1.4rem', background: 'var(--bg)', transition: 'background 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(50,22,5,0.95)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg)')}>
              <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: '1.5rem', color: 'var(--gold-dim)', marginBottom: '0.7rem' }}>{item.glyph}</div>
              <p style={{ fontFamily: "var(--font-cormorant), serif", color: 'var(--cream)', marginBottom: '0.3rem', fontSize: '1.05rem' }}>{item.name}</p>
              <p style={{ fontSize: '0.76rem', color: 'var(--muted)', lineHeight: 1.65 }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* CONTACT */}
      <Section id="contact" telugu="సంప్రదించండి" english="contact">
        <div style={{ maxWidth: '520px' }}>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '1.5rem' }}>
            let&apos;s talk
          </h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--body)', marginBottom: '2.5rem' }}>
            whether it&apos;s about quant finance, a carnatic collab, a project, or something that doesn&apos;t fit neatly into either — i&apos;d love to connect.
          </p>
          <div>
            {[
              { name: 'email', handle: 'tsabatch@uwaterloo.ca', href: 'mailto:tsabatch@uwaterloo.ca' },
              { name: 'linkedin', handle: 'linkedin.com/in/tanvi-batchu', href: 'https://linkedin.com/in/tanvi-batchu' },
              { name: 'github', handle: 'github.com/tanvibatchu', href: 'https://github.com/tanvibatchu' },
            ].map(link => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.2rem 0', borderBottom: '0.5px solid var(--sand)', textDecoration: 'none', color: 'inherit', transition: 'padding-left 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.paddingLeft = '8px'; (e.currentTarget.querySelector('.cname') as HTMLElement).style.color = 'var(--gold-light)'; (e.currentTarget.querySelector('.carrow') as HTMLElement).style.color = 'var(--gold)' }}
                onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0'; (e.currentTarget.querySelector('.cname') as HTMLElement).style.color = 'var(--cream)'; (e.currentTarget.querySelector('.carrow') as HTMLElement).style.color = 'var(--sand)' }}>
                <div>
                  <p className="cname" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: '1.25rem', color: 'var(--cream)', transition: 'color 0.3s' }}>{link.name}</p>
                  <p style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '2px' }}>{link.handle}</p>
                </div>
                <span className="carrow" style={{ color: 'var(--sand)', transition: 'color 0.3s' }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '2.5rem 2rem', borderTop: '0.5px solid var(--sand)' }}>
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: 'italic', color: 'var(--gold-dim)', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
          tanvi batchu · cs & finance · waterloo · 2025
        </p>
        <p style={{ fontFamily: "'Noto Sans Telugu', sans-serif", color: 'var(--terra-mid)', fontSize: '1rem' }}>తన్వి బచ్చు</p>
      </footer>
    </main>
  )
}
