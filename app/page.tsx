'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import profilePic from '../public/profile.jpg';

// JSON data for Experience
const experienceData = [
  {
    title: "AVIRSO",
    role: "Tech Business Management Consultant",
    dates: "03/2025 – Present",
    details: [
      "Providing tech business management consulting as a personal venture.",
      "Working on strategic initiatives for a Fortune 10 company."
    ],
    tools: "Business Strategy, Technology Consulting, Project Management",
    color: "#FBBF24" // Amber-400
  },
  {
    title: "Teradata",
    role: "Professional Data Scientist",
    dates: "01/2025 – 04/2025",
    details: [
      "Worked on AI ASK SQL Model training and SQL generation.",
      "Developed Agentic inDB Workflow Generation.",
      "Benchmarked Teradata VectorStore and generated inDB ONNX Embeddings.",
      "Implemented inDB Intent Classification and Multi-Entity Tagging."
    ],
    tools: "Teradata, SQLMR, C++, Python, Cloud Platforms",
    color: "#EF4444" // Red-500
  },
  {
    title: "Teradata",
    role: "Graduate Associate Data Science",
    dates: "01/2024 – Present",
    details: [
      "Outstanding performance on the Wells Fargo project led to double promotion.",
      "Developed a SQLMR function to tokenize input text into meaningful n-grams, enhancing sentiment analysis, topic identification, and document classification.",
      "Engineered a function for precise text tagging and improved NLP outcomes.",
      "Developed TD_GenAI functions for advanced text analytics within Teradata.",
      "Implemented an in-database BYO-LLM solution and a system to convert unstructured data into JSON.",
      "Initiated projects for in-database training (BYOM-LLM) and a parallel Torch NN-like library for ANN/CNN inference.",
      "Worked on a Document QA system and defect detection (Wafer in DB) using ML and extensive feature engineering."
    ],
    tools:
      "C, C++, Java, Regex; vLLM, C++, Python, Huggingface, Teradata Vantage, AWS, VCL, BYOM, PyTorch, ML, UDFs",
    color: "#2563EB" // Blue-600
  },
  {
    title: "My Impact Meter",
    role: "Data Scientist (Part-time)",
    dates: "02/2022 – 09/2023",
    details: [
      "Developed data visualization dashboards for the admin portal to bolster data-driven decision-making.",
      "Created an automated data pipeline for the Payment & Services division, reducing manual processing time by 80%."
    ],
    tools: "Dashboarding Tools, Data Pipeline Automation",
    color: "#0EA5E9" // Sky-500
  },
  {
    title: "Data Insight Lab",
    role: "Research Assistant",
    dates: "06/2022 – 06/2023",
    details: [
      "Developed ViLanOCR – a state-of-the-art method for extracting handwritten bilingual text from medical prescriptions.",
      "Addressed challenges in extracting handwritten Urdu by leveraging advanced ML techniques."
    ],
    tools: "Python, Machine Learning, OCR, Deep Learning",
    color: "#10B981" // Emerald-500
  },
  {
    title: "Knowledge Discovery & Data Science Lab",
    role: "Research Assistant (Part-time)",
    dates: "03/2021 – 08/2022",
    details: [
      "Contributed to a NCAI-funded project to re-design e-recruitment using AI for temporal analysis.",
      "Developed a novel resume ranking algorithm and optimized real-time entity enrichment from resumes."
    ],
    tools: "AI, Machine Learning, Graph Databases, Optimization",
    color: "#8B5CF6" // Violet-500
  }
];

// JSON data for Education
const educationData = [
  {
    title: "NUCES FAST ISB",
    degree: "BS Data Science",
    dates: "Aug 2019 - Jun 2023",
    details:
      "Coursework: AI, NLP, Big Data, Distributed Data Engineering, DevOps/MLOps, and more.",
    color: "#2563EB" // Blue-600
  },
  {
    title: "Stanford University",
    degree: "Summer School",
    dates: "Jun 2022 - Aug 2022",
    details: "Courses: CS229 Machine Learning, SOC-128D Social Data Science, etc.",
    color: "#10B981" // Emerald-500
  }
];

// JSON data for Publications
const publicationData = [
  {
    title:
      "An efficient algorithm for ranking candidates in e-recruitment system",
    authors:
      "Abdul Hanan Minhas, Mohammad Daniyal Shaiq, Saad Ali Qureshi, Musa Cheema, Shujaat Hussain, Kifayat Ullah Khan",
    link: "https://ieeexplore.ieee.org/abstract/document/9721629/",
    description:
      "A comprehensive approach that enhances candidate ranking in e-recruitment through advanced algorithms and graph-based techniques.",
    color: "#2563EB" // Blue-600
  },
  {
    title:
      "Feature-Wise Ranking of Candidates through Maximum Degrees in Hidden Bipartite Graphs",
    authors:
      "Sarah Kiyani, Musa Cheema, Saad Ali Qureshi, Shujaat Hussain, Kifayat Ullah Khan",
    link: "https://ieeexplore.ieee.org/abstract/document/9721803/",
    description:
      "Innovative graph-based techniques to improve candidate ranking accuracy in recruitment systems.",
    color: "#1D4ED8" // Blue-700
  },
  {
    title:
      "Transformer based Urdu Handwritten Text Optical Character Reader",
    authors:
      "Mohammad Daniyal Shaiq, Musa Dildar Ahmed Cheema, Ali Kamal",
    link: "https://arxiv.org/abs/2206.04575",
    description:
      "A pioneering OCR approach for handwritten Urdu text leveraging transformer architectures.",
    color: "#8B5CF6" // Violet-500
  },
  {
    title:
      "Adapting multilingual vision language transformers for low-resource Urdu optical character recognition (OCR)",
    authors:
      "Musa Dildar Ahmed Cheema, Mohammad Daniyal Shaiq, Farhaan Mirza, Ali Kamal, M. Asif Naeem​",
    link: "https://peerj.com/articles/cs-1964/",
    description:
      "This research introduces ViLanOCR—an innovative bilingual OCR system tailored for Urdu and English. Leveraging advanced multilingual transformer-based models, the approach achieves state-of-the-art performance on the Urdu UHWR dataset with a CER of 1.1%, surpassing existing baselines.",
    color: "#FBBF24" // Amber-400
  }
];

const judgeshipData = [
  {
    title: "EME Final Year Project Showcase 2024",
    color: "#EF4444" // Teal-500
  },
  {
    title: "NASCON 2024 Data Quest",
    color: "#FACC15"
  },
  {
    title: "NASCON 2024 Code Craft",
    color: "#3B82F6"
  },
  {
    title: "NASCON 2023 Code Craft",
    color: "#14B8A6"
  }
];

const awardsData = [
  { title: "Teradata Quaterly Award Q3", color: "#F59E0B" }, // Amber-400
  { title: "Teradata Project Team Award Q3", color: "#EF4444" }, // Red-500
  { title: "Teradata Quaterly Award Q2", color: "#FACC15" }, // Yellow-400
  { title: "Teradata Spot Award Jul 2024", color: "#10B981" }, // Emerald-500
  { title: "Teradata Spot Award Apr 2024", color: "#3B82F6" }, // Blue-500
  { title: "Teradata Spot Award Dec 2023", color: "#8B5CF6" }, // Violet-500
  { title: "Zindagi Awards Best FYP 2023", color: "#14B8A6" }, // Teal-500
  { title: "Bronze Award", color: "#B08D57" }, // Bronze
  { title: "Dean's List x3", color: "#6B7280" } // Gray
];

export default function Home() {
  useEffect(() => {
    // No additional side-effects required
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header with Gradient and Animation */}
      <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-900 to-indigo-600 shadow-md animate-fadeInDown">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Musa Dildar Ahmed Cheema</h1>
          <nav>
            <a
              href="https://www.linkedin.com/in/musadac/"
              className="px-4 py-2 border rounded-md text-white hover:bg-white hover:text-gray-800 transition transform hover:scale-105 duration-300"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </header>

      <style jsx>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out;
        }
      `}</style>

      {/* Hero Section with Full-Width Gradient */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-600">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-left">
            <h2 className="text-5xl font-bold text-white">Professional Data Scientist</h2>
            <p className="mt-4 text-xl text-white">
            I am a highly accomplished data science professional with a proven track record of delivering innovative, impactful solutions. I lead cutting-edge AI/ML projects and have earned recognition as a distinguished judge at premier competitions.
            </p>
            <p className="mt-4 text-lg text-white">
              <span className="font-semibold">Career Aspiration:</span> To spearhead transformative initiatives that redefine the future of Data Science and Artificial Intelligence.
            </p>
            <p className="mt-4 text-lg text-white">
              <span className="font-semibold">Contact:</span>{" "}
              <a href="mailto:mcheema2010@gmail.com" className="underline text-white">
                mcheema2010@gmail.com
              </a>
            </p>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <div className="relative h-96 w-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <Image
                src={profilePic}
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-left">Experience</h2>
          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border-l-4"
                style={{ borderLeftColor: item.color }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-left" style={{ color: item.color }}>
                    {item.title}
                  </h3>
                  <span className="text-sm text-gray-500">{item.dates}</span>
                </div>
                <p className="mt-2 text-lg font-medium text-gray-600 text-left">{item.role}</p>
                <ul className="list-disc list-inside mt-4 text-gray-700 text-left">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                <div
                  className="mt-4 rounded p-2 text-sm text-left"
                  style={{ backgroundColor: item.color, color: "#ffffff" }}
                >
                  Tools: {item.tools}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-left">Education</h2>
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border-l-4"
                style={{ borderLeftColor: edu.color }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-left" style={{ color: edu.color }}>
                    {edu.title}
                  </h3>
                  <span className="text-sm text-gray-500">{edu.dates}</span>
                </div>
                <p className="mt-2 text-lg font-medium text-gray-600 text-left">{edu.degree}</p>
                <p className="mt-4 text-gray-700 text-left">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-left">Publications</h2>
          <div className="space-y-12">
            {publicationData.map((pub, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border-l-4"
                style={{ borderLeftColor: pub.color }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-left" style={{ color: pub.color }}>
                    {pub.title}
                  </h3>
                </div>
                <p className="mt-2 text-gray-600 font-medium text-left">{pub.authors}</p>
                <p className="mt-4 text-gray-700 text-left">{pub.description}</p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 underline text-left"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Judgeship Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-left">Judgeship</h2>
          <div className="space-y-12">
            {judgeshipData.map((judge, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border-l-4"
                style={{ borderLeftColor: judge.color }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg text-left" style={{ color: judge.color }}>
                    {judge.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-left">Awards</h2>
          <div className="space-y-8">
            {awardsData.map((award, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg border-l-4"
                style={{ borderLeftColor: award.color }}
              >
                <p className="text-lg text-left" style={{ color: award.color }}>
                  {award.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer & Leadership Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-left">Volunteer & Leadership</h2>
          <div className="bg-white shadow rounded-lg p-6 text-left">
            <p className="text-lg text-gray-700">
              Google Student Club Vice Head App Dev 2020, NASCOM Arrangements, and other leadership roles.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-left">Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg p-6 text-left">
              <h3 className="text-2xl font-semibold mb-2">ViLanOCR</h3>
              <p className="text-gray-700 mb-4">
                A multilingual OCR system for handwritten text achieving a 1.2% CER on handwritten Urdu.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-200 rounded-full text-sm">Transformers</span>
                <span className="px-2 py-1 bg-gray-200 rounded-full text-sm">ViT</span>
                <span className="px-2 py-1 bg-gray-200 rounded-full text-sm">HuggingFace</span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/musadac/ViLanOCR"
                  className="px-4 py-2 border rounded-md text-blue-600 hover:bg-blue-600 hover:text-white transition text-sm"
                >
                  Github Code
                </a>
                <a
                  href="https://huggingface.co/spaces/musadac/VilanOCR-Urdu-English-Chinese"
                  className="px-4 py-2 border rounded-md text-blue-600 hover:bg-blue-600 hover:text-white transition text-sm"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-6 text-left">
              <h3 className="text-2xl font-semibold mb-2">BART/LLama 7B SFT Trainer</h3>
              <p className="text-gray-700 mb-4">
                A trainer implementation for LLMs on a single GPU using PEFT and Hugging Face’s SFT Trainer.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-200 rounded-full text-sm">LLM</span>
                <span className="px-2 py-1 bg-gray-200 rounded-full text-sm">PEFT</span>
                <span className="px-2 py-1 bg-gray-200 rounded-full text-sm">HuggingFace</span>
              </div>
              <div>
                <a
                  href="https://github.com/musadac/Training-LLMs"
                  className="px-4 py-2 border rounded-md text-blue-600 hover:bg-blue-600 hover:text-white transition text-sm"
                >
                  Github Code
                </a>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-6 text-left">
              <h3 className="text-2xl font-semibold mb-2">LLama2.C</h3>
              <p className="text-gray-700 mb-4">
                Chat UI and socket server for LLama2 inference in C, enabling real-time CPU-based processing.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-200 rounded-full text-sm">LLama</span>
                <span className="px-2 py-1 bg-gray-200 rounded-full text-sm">C</span>
                <span className="px-2 py-1 bg-gray-200 rounded-full text-sm">WebSocket</span>
              </div>
              <div>
                <a
                  href="https://github.com/musadac/llama2.c"
                  className="px-4 py-2 border rounded-md text-blue-600 hover:bg-blue-600 hover:text-white transition text-sm"
                >
                  Github Code
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-start mt-10">
            <a
              href="https://github.com/musadac"
              className="px-6 py-3 border rounded-md text-blue-600 hover:bg-blue-600 hover:text-white transition text-lg"
            >
              Other Projects on Github &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 shadow-inner">
        <div className="container mx-auto px-6 text-left text-gray-600">
          &copy; {new Date().getFullYear()} Musa Dildar Ahmed Cheema. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
