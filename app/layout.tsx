import './globals.css';
import Link from 'next/link';
import { Trophy, ShieldCheck, TrendingUp, Wallet, Zap } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Matches', href: '/#matches' },
  { name: 'Leaderboard', href: '/leaderboard' },
  { name: 'Competitions', href: '/competitions' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Admin', href: '/admin' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
          <div className="section-shell flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-emerald-400 text-lg font-black text-slate-950">
                F
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Virtual</p>
                <h1 className="text-lg font-bold text-white">Football League</h1>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200 md:flex">
                <Wallet className="h-4 w-4" />
                24,560 VC
              </div>
              <Link
                href="/profile"
                className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-500/50 hover:text-cyan-200"
              >
                Profile
              </Link>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-white/10 py-10">
          <div className="section-shell grid gap-8 md:grid-cols-3">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-emerald-400 text-lg font-black text-slate-950">
                  F
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Virtual</p>
                  <h2 className="text-lg font-bold text-white">Football League</h2>
                </div>
              </div>
              <p className="max-w-sm text-sm text-slate-400">
                A virtual football prediction ecosystem with no real-money gambling functionality.
              </p>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Platform</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Match prediction markets</li>
                <li>Virtual wallet and settlements</li>
                <li>Leagues and private leagues</li>
              </ul>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Trust</p>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-400" /> No real-money gambling</div>
                <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-cyan-400" /> Performance-led competition</div>
                <div className="flex items-center gap-2"><Trophy className="h-4 w-4 text-amber-400" /> Leaderboards and achievements</div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-violet-400" /> Live score integrations</div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
