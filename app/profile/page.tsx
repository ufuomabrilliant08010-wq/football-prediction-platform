import Link from 'next/link';
import { ArrowLeft, Bell, BriefcaseBusiness, CalendarClock, ShieldCheck } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="section-shell py-10">
      <div className="mb-8 flex items-center gap-3">
        <Link href="/" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-300">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Profile</p>
          <h1 className="text-4xl font-black text-white">Alicia Parker</h1>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="glass-panel rounded-[2rem] p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 text-2xl font-black text-slate-950">
              AP
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Alicia Parker</h2>
              <p className="text-slate-400">Model, London • Rank #42</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Virtual balance</span>
                <span className="font-semibold text-white">24,560 VC</span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Lifetime profit</span>
                <span className="font-semibold text-emerald-300">+8,420 VC</span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Win streak</span>
                <span className="font-semibold text-cyan-300">6 games</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-panel rounded-[2rem] p-6">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="h-5 w-5 text-cyan-300" />
              <h3 className="text-xl font-bold text-white">Preferences</h3>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                <p className="text-slate-400">Favourite leagues</p>
                <p className="mt-2 font-semibold text-white">Premier League • La Liga</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                <p className="text-slate-400">Default stake</p>
                <p className="mt-2 font-semibold text-white">220 VC</p>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-6">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-amber-300" />
              <h3 className="text-xl font-bold text-white">Notifications</h3>
            </div>

            <div className="mt-5 space-y-3">
              {[
                'Match result settled: Arsenal 2–1 Aston Villa',
                'Weekly competition starts in 6 hours',
                'Friend request accepted in City Weekend League',
              ].map((alert) => (
                <div key={alert} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-800/70 p-3">
                  <span className="text-slate-200">{alert}</span>
                  <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-200">New</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
