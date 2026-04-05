import Link from 'next/link';
import { getPrimer, getAllPrimerPaths } from '../../../../lib/primers';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const paths = getAllPrimerPaths();
  return paths.map((p) => ({
    category: p.category,
    slug: p.slug,
  }));
}

export default async function PrimerPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const primer = await getPrimer(params.category, params.slug);

  if (!primer) {
    notFound();
  }

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
            <Link href="/field-notes" className="text-sm text-gray-400 hover:text-purple-400 transition">Field Notes</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <article className="pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/field-notes" className="hover:text-purple-400 transition">Field Notes</Link>
            <span>/</span>
            <span className="text-gray-400">{primer.title}</span>
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">{primer.title}</h1>
          {primer.description && (
            <p className="text-lg text-gray-400 mb-2">{primer.description}</p>
          )}
          <p className="text-sm text-gray-600 mb-12">{primer.date}</p>

          {/* Primer content */}
          <div
            className="primer-content"
            dangerouslySetInnerHTML={{ __html: primer.contentHtml }}
          />

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-gray-800/50">
            <Link
              href="/field-notes"
              className="text-sm text-purple-400 hover:text-purple-300 transition"
            >
              &larr; Back to all field notes
            </Link>
          </div>
        </div>
      </article>

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
