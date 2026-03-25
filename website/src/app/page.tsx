'use client'

import { useEffect, useRef, useState } from 'react'
import { experience, projects, awards, interests } from '@/data'

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
        style={{ background: 'linear-gradient(to bottom, rgba(21,9,0,0.97) 60%, transparent)' }}>
        <span className="font-serif text-[var(--gold-light)] tracking-wide text-sm">
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
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-8 pt-32 pb-20 overflow-hidden">
        <div className="absolute w-[650px] h-[650px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(196,80,26,0.15) 0%, rgba(212,146,10,0.07) 45%, transparent 70%)' }} />
        <div className="absolute top-[70px] left-0 right-0 h-[2px]"
          style={{ background: 'linear-gradient(to right, transparent 5%, var(--terra-mid) 20%, var(--gold) 50%, var(--terra-mid) 80%, transparent 95%)' }} />

        <p className="text-[0.62rem] tracking-[0.55em] uppercase text-[var(--gold-dim)] mb-8"
          style={{ animation: 'fadeUp 1s 0.3s forwards', opacity: 0 }}>
          ✦ &nbsp; portfolio &nbsp; ✦
        </p>

        <h1
          className="font-serif font-light leading-none mb-7 transition-all duration-[420ms]"
          style={{
            fontSize: 'clamp(4rem, 12vw, 8.5rem)',
            fontFamily: fonts[nameIdx],
            color: colors[nameIdx],
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            animation: 'fadeUp 1s 0.55s forwards',
          }}
        >
          {names[nameIdx]}
        </h1>

        <div className="flex items-center gap-4 mb-6" style={{ animation: 'fadeUp 1s 0.75s forwards', opacity: 0 }}>
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[var(--gold-dim)]" />
          <div className="w-1 h-1 rounded-full bg-[var(--gold)]" />
          <div className="w-1 h-1 rounded-full bg-[var(--terra-light)]" />
          <div className="w-1 h-1 rounded-full bg-[var(--gold)]" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[var(--gold-dim)]" />
        </div>

        <p className="text-[0.68rem] tracking-[0.22em] uppercase text-[var(--cream-dim)] mb-7 max-w-xl leading-loose"
          style={{ animation: 'fadeUp 1s 0.8s forwards', opacity: 0 }}>
          CS &amp; Finance · University of Waterloo · Incoming AI &amp; Algorithms Engineer @ RBC Capital Markets
        </p>

        <p className="font-serif italic text-[var(--body)] max-w-md leading-loose mb-12"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.3rem)', animation: 'fadeUp 1s 0.95s forwards', opacity: 0 }}>
          Building at the intersection of markets, code,<br />and a childhood spent inside a raga.
        </p>

        <div className="flex gap-2 flex-wrap justify-center" style={{ animation: 'fadeUp 1s 1.1s forwards', opacity: 0 }}>
          {['Telugu roots', 'Carnatic · 15 years', 'Bharatanatyam', 'CCO Bronze · EGOI qualifier', '800+ volunteer hours'].map(c => (
            <span key={c} className="text-[0.6rem] tracking-[0.18em] uppercase px-3 py-1 border border-[var(--terra-mid)] text-[var(--cream-dim)]"
              style={{ background: 'rgba(122,48,16,0.12)', borderRadius: 2 }}>
              {c}
            </span>
          ))}
        </div>

        <div className="absolute bottom-10 flex flex-col items-center gap-2" style={{ animation: 'fadeUp 1s 1.5s forwards', opacity: 0 }}>
          <span className="text-[0.56rem] tracking-[0.35em] uppercase text-[var(--terra-mid)]">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[var(--gold-dim)] to-transparent pulse-bar" />
        </div>
      </div>

      <Divider />

      {/* ABOUT */}
      <Section id="about" telugu="పరిచయం" english="about">
        <h2 className="font-serif font-light text-[var(--cream)] mb-7" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)' }}>
          Who I am
        </h2>
        <p className="text-[0.93rem] leading-loose text-[var(--body)] max-w-2xl mb-8">
          I'm a Computer Science and Finance student at the University of Waterloo (CFM), incoming AI &amp; Algorithms Engineer at RBC Capital Markets. I build at the intersection of software, markets, and finance. I grew up Telugu in Markham, trained in Carnatic music for fifteen years, and learned early that discipline and improvisation are not opposites.
        </p>
        <div className="border-l-2 border-[var(--gold-dim)] pl-6 mb-10">
          <p className="font-serif italic text-[var(--cream-mid)] text-xl leading-relaxed">
            "I like projects that are practical, make an impact, are rigorous, and a little ambitious."
          </p>
        </div>
        <div className="grid grid-cols-3 border-t border-l border-[var(--sand)]">
          {[
            ['Program', 'CS + Finance (CFM)\n@ Waterloo'],
            ['Incoming', 'AI & Algorithms Engineer\nRBC Capital Markets'],
            ['Status', 'Open to opportunities'],
            ['Roots', 'Telugu · South Indian\nMarkham, Ontario'],
            ['Music', 'Carnatic vocalist\n15+ years · Level 4'],
            ['Also speaks', 'Telugu · Latin'],
          ].map(([label, val]) => (
            <div key={label} className="p-5 border-r border-b border-[var(--sand)]">
              <p className="text-[0.58rem] tracking-[0.25em] uppercase text-[var(--gold-dim)] mb-2">{label}</p>
              <p className="font-serif text-[var(--cream)] leading-snug" style={{ whiteSpace: 'pre-line' }}>
                {val}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Divider ornament="✦" />

      {/* EXPERIENCE */}
      <Section id="experience" telugu="అనుభవం" english="experience">
        <h2 className="font-serif font-light text-[var(--cream)] mb-8" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)' }}>
          Where I've been
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

      <Divider />

      {/* PROJECTS */}
      <Section id="projects" telugu="పని" english="projects">
        <h2 className="font-serif font-light text-[var(--cream)] mb-8" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)' }}>
          Selected work
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
                    style={{ background: 'rgba(212,146,10,0.12)', borderRadius: 2 }}>
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

      <Divider ornament="✦" />

      {/* AWARDS */}
      <Section id="awards" telugu="పురస్కారాలు" english="awards">
        <h2 className="font-serif font-light text-[var(--cream)] mb-8" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)' }}>
          Recognition
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

      <Divider />

      {/* INTERESTS */}
      <Section id="interests" telugu="ఆసక్తులు" english="interests">
        <h2 className="font-serif font-light text-[var(--cream)] mb-8" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)' }}>
          Beyond the screen
        </h2>
        <div className="grid gap-px" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', background: 'var(--sand)' }}>
          {interests.map((item, i) => (
            <div key={i} className="p-6 bg-[var(--bg)] hover:bg-[rgba(42,18,5,0.8)] transition-colors">
              <div className="font-serif text-2xl text-[var(--gold-dim)] mb-3">{item.glyph}</div>
              <p className="font-serif text-[var(--cream)] mb-2">{item.name}</p>
              <p className="text-[0.76rem] text-[var(--muted)] leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Divider ornament="✦" />

      {/* CONTACT */}
      <Section id="contact" telugu="సంప్రదించండి" english="contact">
        <div className="max-w-lg">
          <h2 className="font-serif font-light text-[var(--cream)] mb-7" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)' }}>
            Let's talk
          </h2>
          <p className="text-[0.93rem] leading-loose text-[var(--body)] mb-10">
            Whether it's about quant finance, a Carnatic collab, a project, or something that doesn't fit neatly into either — I'm reachable.
          </p>
          <div>
            {[
              { name: 'Email', handle: 'tsabatch@uwaterloo.ca', href: 'mailto:tsabatch@uwaterloo.ca' },
              { name: 'LinkedIn', handle: 'linkedin.com/in/tanvi-batchu', href: 'https://linkedin.com/in/tanvi-batchu' },
              { name: 'GitHub', handle: 'github.com/tanvibatchu', href: 'https://github.com/tanvibatchu' },
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
        <p className="font-serif italic text-[var(--gold-dim)] text-sm mb-1">Tanvi Batchu · CS & Finance · Waterloo · 2025</p>
        <p className="text-[var(--terra-mid)]" style={{ fontFamily: "'Noto Sans Telugu', sans-serif" }}>తన్వి బచ్చు</p>
      </footer>
    </main>
  )
}