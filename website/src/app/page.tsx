'use client'

import { useEffect, useRef, useState } from 'react'
import { highlights, experience, projects, awards, skills, interests } from '@/data'

const names = ['Tanvi Batchu', 'తన్వి బచ్చు']
const fonts = ["'Cormorant Garamond', serif", "'Noto Sans Telugu', serif"]
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
  id: string
  telugu: string
  english: string
  children: React.ReactNode
}) {
  const { ref, visible } = useReveal()
  return (
    <section
      id={id}
      ref={ref}
      className={`reveal ${visible ? 'in' : ''} relative z-10 max-w-4xl mx-auto px-10 py-24`}
    >
      <div className="flex items-center gap-3 mb-10">
        <div className="flex-1 h-px bg-[var(--sand)]" />
        <span className="text-[0.6rem] tracking-[0.4em] uppercase text-[var(--gold-dim)] whitespace-nowrap">
          {telugu} · {english}
        </span>
        <div className="flex-1 h-px bg-[var(--sand)]" />
      </div>
      {children}
    </section>
  )
}

function Divider({ ornament = '❧' }: { ornament?: string }) {
  return (
    <div className="relative z-10 flex items-center gap-3 px-12">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--terra-mid)] to-[var(--gold-dim)]" />
      <span className="text-[var(--gold-dim)] font-serif">{ornament}</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[var(--terra-mid)] to-[var(--gold-dim)]" />
    </div>
  )
}

export default function Home() {
  const [nameIdx, setNameIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setNameIdx(i => (i + 1) % names.length)
        setVisible(true)
      }, 420)
    }, 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <main>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-14 py-5"
        style={{ background: 'linear-gradient(to bottom, rgba(30,13,2,0.97) 60%, transparent)' }}>
        <span style={{ fontFamily: fonts[nameIdx], color: 'var(--gold-light)' }} className="tracking-wide text-sm transition-all duration-500">
          {names[nameIdx]}
        </span>
        <ul className="flex gap-9 list-none">
          {['about','experience','projects','awards','interests','contact'].map(s => (
            <li key={s}>
              <a href={`#${s}`} className="text-[0.63rem] tracking-[0.22em] uppercase text-[var(--cream-dim)] hover:text-[var(--gold-light)] transition-colors no-underline">
                {s}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-14 pt-32 pb-20">
        <div className="absolute w-[800px] h-[800px] top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(228,162,10,0.1) 0%, rgba(196,80,26,0.08) 40%, transparent 70%)' }} />
        <div className="absolute top-[70px] left-0 right-0 h-[2px]"
          style={{ background: 'linear-gradient(to right, transparent 5%, var(--terra-mid) 20%, var(--gold-light) 50%, var(--terra-mid) 80%, transparent 95%)' }} />

        <div className="max-w-3xl">
          <p className="text-[0.62rem] tracking-[0.55em] uppercase text-[var(--gold-dim)] mb-6"
            style={{ animation: 'fadeUp 1s 0.2s forwards', opacity: 0 }}>
            ✦ &nbsp; hey there,
          </p>

          <h1
            className="font-light leading-none mb-8 transition-all duration-[420ms]"
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 7rem)',
              fontFamily: fonts[nameIdx],
              color: colors[nameIdx],
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(10px)',
              animation: 'fadeUp 1s 0.4s forwards',
            }}
          >
            i&apos;m {names[nameIdx]}.
          </h1>

          <p className="text-[0.75rem] tracking-[0.2em] uppercase text-[var(--cream-dim)] mb-10"
            style={{ animation: 'fadeUp 1s 0.6s forwards', opacity: 0 }}>
            cs & finance @ waterloo &nbsp;·&nbsp; incoming ai engineer @ rbc capital markets
          </p>

          <div style={{ animation: 'fadeUp 1s 0.8s forwards', opacity: 0 }}>
            <p className="text-[var(--gold-dim)] text-sm mb-4 tracking-wide">some things i&apos;ve done:</p>
            <ul className="space-y-2">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-[0.88rem] text-[var(--body)] leading-relaxed">
                  <span className="text-[var(--gold-dim)] mt-1 shrink-0">→</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2 flex-wrap mt-10" style={{ animation: 'fadeUp 1s 1s forwards', opacity: 0 }}>
            {['telugu roots', 'carnatic · 15 years', 'waterloo cfm'].map(c => (
              <span key={c} className="text-[0.6rem] tracking-[0.15em] uppercase px-3 py-1 border border-[var(--terra-mid)] text-[var(--cream-dim)]"
                style={{ background: 'rgba(154,64,24,0.15)', borderRadius: 2 }}>
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-14 flex flex-col gap-2"
          style={{ animation: 'fadeUp 1s 1.3s forwards', opacity: 0 }}>
          <span className="text-[0.56rem] tracking-[0.35em] uppercase text-[var(--terra-mid)]">scroll</span>
          <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, var(--gold-dim), transparent)' }} />
        </div>
      </div>

      <Divider />

      {/* ABOUT */}
      <Section id="about" telugu="పరిచయం" english="about">
        <h2 className="font-serif font-light text-[var(--cream)] mb-7" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)' }}>
          who i am
        </h2>
        <p className="text-[0.95rem] leading-loose text-[var(--body)] max-w-2xl mb-8">
          i&apos;m a cs + finance student at waterloo (cfm), incoming ai & algorithms engineer at rbc capital markets. i build at the intersection of software, markets, and finance — from risk pipelines and portfolio analytics to ai-powered tools. i grew up telugu in the gta, trained in carnatic music for fifteen years, and learned early that discipline and improvisation aren&apos;t opposites.
        </p>
        <div className="border-l-2 border-[var(--gold-dim)] pl-6 mb-10">
          <p className="font-serif italic text-[var(--cream-mid)] text-xl leading-relaxed">
            &ldquo;i like projects that are practical, make an impact, are rigorous, and a little ambitious.&rdquo;
          </p>
        </div>
        <div className="grid grid-cols-3 border-t border-l border-[var(--sand)]">
          {[
            ['program', 'CS + Finance (CFM)\n@ Waterloo'],
            ['incoming', 'AI & Algorithms Engineer\nRBC Capital Markets'],
            ['open to', 'opportunities after Fall 2026'],
            ['roots', 'Telugu · South Indian\nMarkham, Ontario'],
            ['music', 'Carnatic vocalist\n15+ years · Level 4'],
            ['also speaks', 'Telugu · Latin'],
          ].map(([label, val]) => (
            <div key={label} className="p-5 border-r border-b border-[var(--sand)]">
              <p className="text-[0.58rem] tracking-[0.25em] uppercase text-[var(--gold-dim)] mb-2">{label}</p>
              <p className="font-serif text-[var(--cream)] leading-snug text-sm" style={{ whiteSpace: 'pre-line' }}>{val}</p>
            </div>
          ))}
        </div>
      </Section>

      <Divider ornament="✦" />

      {/* SKILLS */}
      <Section id="skills" telugu="నైపుణ్యాలు" english="skills">
        <h2 className="font-serif font-light text-[var(--cream)] mb-8" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)' }}>
          what i work with
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {skills.map((s, i) => (
            <div key={i}>
              <p className="text-[0.6rem] tracking-[0.3em] uppercase text-[var(--gold-dim)] mb-3">{s.category}</p>
              <div className="flex flex-wrap gap-2">
                {s.items.map(item => (
                  <span key={item} className="text-[0.72rem] px-2 py-1 border border-[var(--sand)] text-[var(--muted)]" style={{ borderRadius: 2 }}>
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
        <h2 className="font-serif font-light text-[var(--cream)] mb-8" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)' }}>
          where i&apos;ve been
        </h2>
        <div>
          {experience.map((e, i) => (
            <div key={i} className="grid gap-8 py-8 border-b border-[var(--sand)]" style={{ gridTemplateColumns: '160px 1fr' }}>
              <span className="text-[0.63rem] tracking-wide text-[var(--gold-dim)] uppercase leading-relaxed pt-1">{e.date}</span>
              <div>
                <p className="font-serif text-[var(--cream)] text-xl mb-1">{e.role}</p>
                <p className="text-[0.68rem] tracking-wide uppercase text-[var(--terra-light)] mb-3">{e.company}</p>
                <ul className="text-[0.8rem] text-[var(--muted)] leading-loose space-y-1">
                  {e.bullets.map((b, j) => <li key={j} className="ml-4 list-disc">{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Divider ornament="✦" />

      {/* PROJECTS */}
      <Section id="projects" telugu="పని" english="projects">
        <h2 className="font-serif font-light text-[var(--cream)] mb-8" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)' }}>
          selected work
        </h2>
        <div>
          {projects.map((p, i) => (
            <a key={i} href={p.href} target="_blank" rel="noopener noreferrer"
              className="group grid py-7 border-b border-[var(--sand)] no-underline"
              style={{ gridTemplateColumns: '46px 1fr 22px', gap: '1.5rem' }}>
              <span className="font-serif text-2xl text-[var(--terra-mid)] pt-1 group-hover:text-[var(--gold)] transition-colors">{p.num}</span>
              <div>
                {p.badge && (
                  <span className="inline-block text-[0.58rem] tracking-wide uppercase px-2 py-0.5 mb-2 border border-[var(--gold-dim)] text-[var(--gold-dim)]"
                    style={{ background: 'rgba(228,162,10,0.12)', borderRadius: 2 }}>
                    {p.badge}
                  </span>
                )}
                <p className="font-serif text-xl text-[var(--cream)] mb-2 group-hover:text-[var(--gold-light)] transition-colors">{p.title}</p>
                <p className="text-[0.8rem] text-[var(--muted)] leading-relaxed mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-1">
                  {p.tags.map(t => (
                    <span key={t} className="text-[0.58rem] tracking-wide uppercase px-2 py-0.5 border border-[var(--sand)] text-[var(--muted)]" style={{ borderRadius: 2 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-[var(--sand)] pt-1 group-hover:text-[var(--gold)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">↗</span>
            </a>
          ))}
        </div>
      </Section>

      <Divider />

      {/* AWARDS */}
      <Section id="awards" telugu="పురస్కారాలు" english="awards">
        <h2 className="font-serif font-light text-[var(--cream)] mb-8" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)' }}>
          recognition
        </h2>
        <div>
          {awards.map((a, i) => (
            <div key={i} className="grid py-5 border-b border-[var(--sand)]" style={{ gridTemplateColumns: '1fr auto', gap: '2rem' }}>
              <div>
                <p className="font-serif text-[var(--cream)] text-lg mb-1">{a.name}</p>
                <p className="text-[0.72rem] text-[var(--muted)]">{a.org}</p>
              </div>
              <span className="text-[0.65rem] tracking-wide text-[var(--gold-dim)] uppercase whitespace-nowrap pt-1">{a.year}</span>
            </div>
          ))}
        </div>
      </Section>

      <Divider ornament="✦" />

      {/* INTERESTS */}
      <Section id="interests" telugu="ఆసక్తులు" english="interests">
        <h2 className="font-serif font-light text-[var(--cream)] mb-8" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)' }}>
          beyond the screen
        </h2>
        <div className="grid gap-px" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', background: 'var(--sand)' }}>
          {interests.map((item, i) => (
            <div key={i} className="p-6 bg-[var(--bg)] hover:bg-[rgba(50,22,5,0.9)] transition-colors">
              <div className="font-serif text-2xl text-[var(--gold-dim)] mb-3">{item.glyph}</div>
              <p className="font-serif text-[var(--cream)] mb-2">{item.name}</p>
              <p className="text-[0.76rem] text-[var(--muted)] leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* CONTACT */}
      <Section id="contact" telugu="సంప్రదించండి" english="contact">
        <div className="max-w-lg">
          <h2 className="font-serif font-light text-[var(--cream)] mb-7" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)' }}>
            let&apos;s talk
          </h2>
          <p className="text-[0.95rem] leading-loose text-[var(--body)] mb-10">
            whether it&apos;s about quant finance, a carnatic collab, a project, or something that doesn&apos;t fit neatly into either — i&apos;d love to connect.
          </p>
          <div>
            {[
              { name: 'email', handle: 'tsabatch@uwaterloo.ca', href: 'mailto:tsabatch@uwaterloo.ca' },
              { name: 'linkedin', handle: 'linkedin.com/in/tanvi-batchu', href: 'https://linkedin.com/in/tanvi-batchu' },
              { name: 'github', handle: 'github.com/tanvibatchu', href: 'https://github.com/tanvibatchu' },
            ].map(link => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 border-b border-[var(--sand)] no-underline hover:pl-2 transition-all">
                <div>
                  <p className="font-serif text-xl text-[var(--cream)] group-hover:text-[var(--gold-light)] transition-colors">{link.name}</p>
                  <p className="text-[0.7rem] text-[var(--muted)] mt-0.5">{link.handle}</p>
                </div>
                <span className="text-[var(--sand)] group-hover:text-[var(--gold)] transition-colors">↗</span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="relative z-10 text-center py-10 border-t border-[var(--sand)]">
        <p className="font-serif italic text-[var(--gold-dim)] text-sm mb-1">tanvi batchu · cs & finance · waterloo · 2025</p>
        <p className="text-[var(--terra-mid)] text-sm" style={{ fontFamily: "'Noto Sans Telugu', sans-serif" }}>తన్వి బచ్చు</p>
      </footer>
    </main>
  )
}
