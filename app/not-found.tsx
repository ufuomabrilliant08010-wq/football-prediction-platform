import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="glass-panel max-w-xl rounded-[2rem] p-10 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">404</p>
        <h1 className="mt-4 text-4xl font-black text-white">Page not found</h1>
        <p className="mt-3 text-slate-400">The football fixture or page you searched for is unavailable.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
