'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import profilePic from '../public/profile.jpg';

// ─── Data ────────────────────────────────────────────────────────────────────

const experienceData = [
  {
    company: "Avirso",
    role: "AI Leadership & Tech Management",
    dates: "2025 – Present",
    description:
      "Leading technology strategy and delivery for Fortune 100 enterprises - from automating manual workflows to fundamentally re-imagining business processes with AI. Working directly with CxOs to identify high-impact opportunities and deliver custom-built AI solutions faster than any competitor in market.",
    tags: ["Enterprise AI", "LLM Deployment", "Process Automation", "Strategy"],
  },
  {
    company: "Teradata",
    role: "Data Science Engineer II",
    dates: "Jan 2025 – Apr 2025",
    description:
      "Trained the AI ASK SQL model and built an agentic in-database workflow engine, enabling natural language interaction with Teradata. Benchmarked VectorStore performance, generated in-database ONNX embeddings, and shipped intent classification and multi-entity tagging pipelines - bringing NLP capabilities natively into the Teradata ecosystem.",
    tags: ["Agentic AI", "NLP", "ONNX", "In-DB ML"],
  },
  {
    company: "Teradata",
    role: "Data Science Associate I",
    dates: "Dec 2023 – Jan 2025",
    description:
      "Architected TDNN, an in-database deep learning inference library modeled on PyTorch nn, allowing enterprise customers to run predictions at scale without data movement. Built a production RAG pipeline for LLM-powered question answering within Teradata and achieved state-of-the-art accuracy on wafer defect detection, outperforming existing DL/ML baselines.",
    tags: ["Deep Learning", "RAG Pipelines", "PyTorch", "C++"],
  },
  {
    company: "Teradata",
    role: "Graduate Associate",
    dates: "Sep 2023 – Dec 2023",
    description:
      "Earned Spot Award for A Grade in the LEAP program and recognized as Salutatorian. Designed and implemented a full data warehouse pipeline, demonstrating production-readiness from day one.",
    tags: ["Data Warehousing", "Python", "Teradata Vantage"],
  },
];

const publicationData = [
  {
    title: "Adapting multilingual vision language transformers for low-resource Urdu OCR",
    venue: "PeerJ Computer Science, 2024",
    link: "https://peerj.com/articles/cs-1964/",
  },
  {
    title: "Feature-Wise Ranking of Candidates through Maximum Degrees in Hidden Bipartite Graphs",
    venue: "IEEE IMCOM 2022",
    link: "https://ieeexplore.ieee.org/abstract/document/9721803/",
  },
  {
    title: "An Efficient Algorithm for Ranking Candidates in E-Recruitment System",
    venue: "IEEE IMCOM 2022",
    link: "https://ieeexplore.ieee.org/abstract/document/9721629/",
  },
  {
    title: "Transformer based Urdu Handwritten Text Optical Character Reader",
    venue: "arXiv, 2022",
    link: "https://arxiv.org/abs/2206.04575",
  },
];

// ─── Fade-in hook ────────────────────────────────────────────────────────────

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a14] text-gray-100 selection:bg-purple-500/30">

      {/* ── Navbar ─────────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          backgroundColor: scrollY > 50 ? 'rgba(10, 10, 20, 0.95)' : 'transparent',
          backdropFilter: scrollY > 50 ? 'blur(12px)' : 'none',
          borderBottom: scrollY > 50 ? '1px solid rgba(139, 92, 246, 0.1)' : '1px solid transparent',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-semibold text-white tracking-tight">
            Musa<span className="text-purple-400">.</span>
          </span>
          <div className="flex items-center gap-6">
            <a href="#experience" className="text-sm text-gray-400 hover:text-purple-400 transition">Experience</a>
            <a href="#publications" className="text-sm text-gray-400 hover:text-purple-400 transition">Publications</a>
            <a href="/field-notes" className="text-sm text-gray-400 hover:text-purple-400 transition">Field Notes</a>
            <a
              href="https://www.linkedin.com/in/musadac/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-lg border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-800/8 blur-[100px]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-3/5">
            <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-sm mb-6">
              AI Leadership & Tech Management
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">AI Systems</span> That Ship
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-2xl">
              I help Fortune 100 enterprises turn complex, manual processes into production-grade AI systems.
              Working directly with CxOs to re-imagine how businesses operate - delivering faster than anyone else in market.
            </p>
            <p className="mt-4 text-gray-500">
              Published researcher. Former Teradata. Stanford CS.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="mailto:musa@avirso.ai"
                className="px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 transition"
              >
                Get in touch
              </a>
              <a
                href="https://www.linkedin.com/in/musadac/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:border-purple-500/50 hover:text-purple-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-2xl scale-110" />
              <div className="relative h-80 w-80 rounded-full overflow-hidden border-2 border-purple-500/20 shadow-2xl shadow-purple-500/10">
                <Image
                  src={profilePic}
                  alt="Musa Dildar Ahmed"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-purple-500/50 to-transparent" />
        </div>
      </section>

      {/* ── Experience ─────────────────────────────────────────────────── */}
      <section id="experience" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-sm font-medium text-purple-400 tracking-widest uppercase mb-2">Experience</h2>
            <p className="text-3xl font-bold text-white mb-16">Where I&apos;ve Made an Impact</p>
          </FadeIn>

          <div className="space-y-12">
            {experienceData.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative p-8 rounded-2xl border border-gray-800/50 bg-gray-900/30 hover:border-purple-500/30 hover:bg-gray-900/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition">{item.company}</h3>
                      <p className="text-gray-400">{item.role}</p>
                    </div>
                    <span className="text-sm text-gray-600 whitespace-nowrap">{item.dates}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-6">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full text-xs text-purple-300 bg-purple-500/10 border border-purple-500/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Publications ───────────────────────────────────────────────── */}
      <section id="publications" className="py-24 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-sm font-medium text-purple-400 tracking-widest uppercase mb-2">Research</h2>
            <p className="text-3xl font-bold text-white mb-16">Publications</p>
          </FadeIn>

          <div className="space-y-6">
            {publicationData.map((pub, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-xl border border-gray-800/50 bg-gray-900/20 hover:border-purple-500/30 hover:bg-gray-900/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-white group-hover:text-purple-400 transition leading-snug">
                        {pub.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">{pub.venue}</p>
                    </div>
                    <span className="text-gray-600 group-hover:text-purple-400 transition flex-shrink-0 mt-1">
                      ↗
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Open to consulting engagements, partnerships, and conversations about enterprise AI.
            </p>
            <a
              href="mailto:musa@avirso.ai"
              className="inline-block px-8 py-4 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 transition text-lg"
            >
              musa@avirso.ai
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="py-8 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Musa Dildar Ahmed.
          </p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/musadac/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-purple-400 transition">
              LinkedIn
            </a>
            <a href="https://github.com/musadac" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-purple-400 transition">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
