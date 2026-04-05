'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a14] flex flex-col items-center justify-center px-6">
      <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[100px]" />
      <h1 className="text-8xl font-bold text-purple-500/20">404</h1>
      <p className="mt-4 text-xl text-gray-400">Page not found</p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-lg border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition"
      >
        Back to home
      </Link>
    </div>
  );
}
