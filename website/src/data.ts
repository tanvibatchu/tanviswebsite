export const highlights = [
  "incoming ai & algorithms engineer @ rbc capital markets",
  "ciw bronze medallist — top 10 women in canada (ccc)",
  "built articue → winner, google seed support @ hack canada",
  "quant researcher @ marble investments",
  "founded busiaid — reached 500+ students across canada",
  "carnatic vocalist for 15+ years",
]

export const experience = [
  {
    date: "May 2026 – Dec 2026",
    role: "AI & Algorithms Engineer — Capital Markets",
    company: "RBC Capital Markets · Toronto",
    bullets: ["Designing and implementing ML models on the Aiden platform to enhance alpha signal generation, optimize execution strategies, and improve liquidity access across multi-asset capital markets products."]
  },
  {
    date: "Jan 2026 – Present",
    role: "Quantitative Researcher",
    company: "Marble Investments · Canada",
    bullets: [
      "Analyzed short-term momentum in hype stocks — abnormal volume spikes and rapid price acceleration across market conditions",
      "Backtested systematic trading signals incorporating liquidity and volatility thresholds to establish entry & exit criteria",
      "Evaluated Sharpe ratio, drawdown depth, win-rate consistency, and regime analysis; refined signals to enhance risk-adjusted returns"
    ]
  },
  {
    date: "Sept – Dec 2024",
    role: "Software Engineering Intern — Test Automation & Systems",
    company: "FinTek Soft · Toronto",
    bullets: [
      "Designed & implemented Python automation frameworks using PyTest & Selenium for fintech web-apps",
      "Reduced regression testing time by 30% by replacing manual QA with scalable automated pipelines",
      "Built reusable utilities to validate business-critical workflows, edge cases, and data consistency"
    ]
  },
  {
    date: "Nov 2023 – May 2024",
    role: "Data & Operations Accounting Intern",
    company: "Angel Cosmeceuticals · Mississauga",
    bullets: [
      "Built data validation & reconciliation workflows for 100+ financial records; reduced month-end processing time by 15%",
      "Prepared monthly statements supporting budgeting decisions for $120K+ in annual operating expenditures"
    ]
  },
  {
    date: "Sept 2023 – June 2025",
    role: "Founder & Project Director",
    company: "BusiAid · Canada",
    bullets: [
      "Founded organization providing accessible financial literacy resources to students across Canada",
      "Hosted panel event and seminar reaching 500+ students; raised funding from CPA Ontario",
      "Released podcast content grossing 1,000+ views across multiple platforms"
    ]
  },
  {
    date: "July 2023 – Aug 2024",
    role: "National Finance Team",
    company: "Canadian Young Investors' Society · Canada",
    bullets: [
      "Sourced $5,000+ in funding from CPA Ontario, Women in Leadership Foundation, and Wealthsimple",
      "Lead presenter at Canada Youth Changemakers Summit; hosted event with 300+ students reaching 3,000+ overall"
    ]
  }
]

export const projects = [
  {
    num: "01",
    badge: "Winner · Google Seed Support · Hack Canada",
    title: "ArtiCue — AI Speech Therapy Companion",
    description: "Built for Canadian children facing waitlists of up to 920 days for a government-funded speech-language pathologist. Kids practice daily with Nova, an animated coach voiced by ElevenLabs, while Gemini 2.5 Flash scores pronunciation using age-calibrated clinical rubrics in real time.",
    tags: ["Next.js 16", "TypeScript", "Gemini 2.5 Flash", "ElevenLabs", "Firebase", "Auth0"],
    href: "https://github.com/tanvibatchu/articue"
  },
  {
    num: "02",
    badge: "UofT Hacks 2026",
    title: "LandLock — Climate Risk Intelligence Platform",
    description: "Multi-agent system (CrewAI + LangGraph) orchestrating 3 specialized agents analyzing 20+ BC government datasets for wildfire, zoning, and climate risk. Interactive map frontend translating complex data into 0-100 actionable risk scores for homebuyers and insurers.",
    tags: ["Python", "CrewAI", "LangGraph", "FastAPI", "React", "Mapbox", "TypeScript"],
    href: "https://github.com/apun16/landlock"
  },
  {
    num: "03",
    badge: undefined,
    title: "RiskSpeak — AI Portfolio Risk Explainer",
    description: "Full-stack platform integrating broker APIs (Wealthsimple, Questrade, IBKR) for automated portfolio imports and real-time risk assessment. Analytics engine computing 15+ financial metrics with automatic S&P 500/TSX 60 benchmark selection and NewsAPI sentiment risk alerts.",
    tags: ["Python", "FastAPI", "React", "YFinance", "GeminiAPI", "TailwindCSS"],
    href: "https://github.com/tanvibatchu/RiskSpeak"
  },
  {
    num: "04",
    badge: undefined,
    title: "MarketMeet — Quantitative Robo-Advisor",
    description: "Python-based portfolio construction platform. Multi-factor screening model against TSX/S&P 500 benchmarks, matched to 0.05% accuracy. Modified Markowitz mean-variance framework with full backtesting system measuring Sharpe ratio, drawdowns, and cumulative returns.",
    tags: ["Python", "SciPy", "Pandas", "NumPy", "YFinance", "Jupyter"],
    href: "https://github.com/tanvibatchu/MarketMeet"
  },
  {
    num: "05",
    badge: "3rd Overall · TechNova Hackathon 2025",
    title: "FakeSeek — Deepfake Detection Platform",
    description: "Platform empowering users to protect their digital identity by scanning the web for manipulated media and impersonation risks. GeminiAPI deepfake analysis, BeautifulSoup detection pipelines, React + TypeScript frontend with Google OAuth.",
    tags: ["Python", "GeminiAPI", "React", "TypeScript", "MongoDB", "BeautifulSoup"],
    href: "https://github.com/apun16/FakeSeek."
  }
]

export const awards = [
  { name: "Winner — Google Seed Support · Hack Canada", org: "ArtiCue — AI speech therapy for children on 920-day waitlists", year: "March 2026" },
  { name: "EGOI National Team Camp Qualifier + CIW Bronze Medallist", org: "Top 10 women in Canada in the CCC", year: "2025" },
  { name: "Lieutenant Governor's Community Volunteer Award", org: "Government of Ontario · 1000+ community service hours", year: "June 2025" },
  { name: "Provincial Champion + Top 8% Internationally (ICDC) x2", org: "DECA Ontario · Business Law & Ethics (2025), Project Management (2024)", year: "2024 & 2025" },
  { name: "Best Stock Pitch & Presentation", org: "Wharton School of Business, University of Pennsylvania", year: "August 2024" },
  { name: "President's Entrance Scholarship of Distinction", org: "University of Waterloo · Research Experience Award, International Exchange Award", year: "2025" },
  { name: "3rd Overall — TechNova Hackathon", org: "FakeSeek deepfake detection platform", year: "September 2025" },
  { name: "Provincial Classics Champion (Certamen) — 6x first place", org: "National Junior Classical League · Roman History, Mythology, Latin", year: "2022-2025" },
  { name: "AP Scholar with Distinction", org: "College Board · Macro/Microeconomics, Calculus BC, English Literature", year: "2024" }
]

export const skills = [
  { category: "languages", items: ["Python", "C++", "TypeScript", "JavaScript", "SQL", "R", "Java"] },
  { category: "ai / ml", items: ["CrewAI", "LangGraph", "OpenAI", "Gemini", "PyTorch", "Scikit-learn"] },
  { category: "frontend", items: ["React", "Next.js", "TailwindCSS"] },
  { category: "backend", items: ["FastAPI", "Flask", "Node.js", "Firebase"] },
  { category: "data & finance", items: ["Pandas", "NumPy", "Jupyter", "Tableau"] },
  { category: "tools", items: ["Git", "AWS", "Azure", "MongoDB", "PostgreSQL"] }
]

export const interests = [
  { glyph: "✦", name: "Classics & Latin", detail: "President of Classics Club. 6x provincial Certamen champion." },
  { glyph: "𝄞", name: "Carnatic Music", detail: "Vocalist for 15+ years. Roopaka talam is still where its at." },
  { glyph: "•", name: "Cooking", detail: "Experimenting with new recipes, cuisines, and eating them after..." },
  { glyph: "⬡", name: "Financial History", detail: "Tracking correlations between bond prices, rates, and major historical events. Sparked at Wharton." },
  { glyph: "◎", name: "Competitive Programming", detail: "CIW Bronze medallist. Top 10 women in Canada in the CCC. C++ and Python." },
  { glyph: "◐", name: "Telugu & Roots", detail: "Bilingual — English and Telugu. Growing up between two languages shapes how you think in both." }
]
