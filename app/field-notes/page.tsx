import Link from 'next/link';
import { getAllCategories } from '../../lib/primers';

export default function FieldNotesPage() {
  const categories = getAllCategories();

  return (
    <main className="min-h-screen bg-[#0a0a14] text-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a14]/95 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold text-white tracking-tight">
            Musa<span className="text-purple-400">.</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-400 hover:text-purple-400 transition">Home</Link>
            <Link href="/field-notes" className="text-sm text-purple-400">Field Notes</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/8 blur-[120px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-sm mb-4">
            Field Notes
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Field Notes
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl">
            Notes from building AI systems in production - covering ML, software engineering, and lessons from the field. New topics added regularly.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.slug}
                className="p-8 rounded-2xl border border-gray-800/50 bg-gray-900/30 hover:border-purple-500/20 transition-all duration-300"
              >
                <h2 className="text-xl font-semibold text-white mb-2">{cat.name}</h2>
                <p className="text-sm text-gray-500 mb-6">{cat.description}</p>
                <ul className="space-y-3">
                  {cat.primers.map((primer) => (
                    <li key={primer.slug}>
                      <Link
                        href={`/field-notes/${primer.category}/${primer.slug}`}
                        className="group flex items-start gap-3"
                      >
                        <span className="text-purple-500/50 mt-1 text-xs">&#9679;</span>
                        <div>
                          <span className="text-gray-300 group-hover:text-purple-400 transition text-sm">
                            {primer.title}
                          </span>
                          {primer.description && (
                            <p className="text-xs text-gray-600 mt-0.5">{primer.description}</p>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Empty categories hint */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-600">
              More topics coming soon. New field notes added daily.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Musa Dildar Ahmed.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-sm text-gray-600 hover:text-purple-400 transition">Home</Link>
            <a href="https://www.linkedin.com/in/musadac/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-purple-400 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
