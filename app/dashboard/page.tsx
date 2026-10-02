import Link from 'next/link';
import { ArrowLeft, BarChart3, Bell, CalendarRange, CircleDollarSign, ShieldCheck, Sparkles, Trophy } from 'lucide-react';
import { leaderboard, walletSummary, recentBets, achievements } from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <div className="section-shell py-10">
      <div className="mb-8 flex items-center gap-3">
        <Link href="/" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-300">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Account</p>
          <h1 className="text-4xl font-black text-white">Dashboard</h1>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {walletSummary.map((stat) => (
          <div key={stat.label} className="metric-card">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">{stat.label}</p>
              <stat.icon className="h-5 w-5 text-cyan-300" />
            </div>
            <p className="mt-4 text-3xl font-black text-white">{stat.value}</p>
            <p className="mt-2 text-xs text-slate-400">{stat.caption}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="glass-panel rounded-[2rem] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Prediction history</p>
              <h2 className="mt-2 text-2xl font-bold text-white">Recent bets</h2>
            </div>
            <button className="rounded-full border border-white/10 bg-slate-800 px-3 py-2 text-sm text-slate-200">Export</button>
          </div>

          <div className="mt-6 space-y-4">
            {recentBets.map((bet) => (
              <div key={bet.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-800/60 p-4">
                <div>
                  <p className="font-semibold text-white">{bet.match}</p>
                  <p className="mt-1 text-sm text-slate-400">{bet.market} • {bet.stake} VC</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-white">{bet.potential}</p>
                  <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${bet.result === 'Won' ? 'bg-emerald-500/15 text-emerald-300' : bet.result === 'Pending' ? 'bg-amber-500/15 text-amber-300' : 'bg-rose-500/15 text-rose-300'}`}>
                    {bet.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-panel rounded-[2rem] p-6">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-violet-300" />
              <h3 className="text-xl font-bold text-white">Achievements</h3>
            </div>
            <div className="mt-5 space-y-3">
              {achievements.map((achievement) => (
                <div key={achievement.name} className="rounded-2xl border border-white/10 bg-slate-800/60 p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-white">{achievement.name}</p>
                    <span className="text-xs text-emerald-300">{achievement.progress}%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-700">
                    <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" style={{ width: `${achievement.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-6">
            <div className="flex items-center gap-3">
              <CalendarRange className="h-5 w-5 text-amber-300" />
              <h3 className="text-xl font-bold text-white">Competitions</h3>
            </div>
            <div className="mt-5 space-y-3">
              {['Champions Challenge', 'Weekend Mastery', 'Private League Event'].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-800/60 p-3">
                  <span className="text-slate-200">{item}</span>
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-1 text-xs text-cyan-200">Live</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
