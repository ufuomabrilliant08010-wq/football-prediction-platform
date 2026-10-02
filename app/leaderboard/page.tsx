import Link from 'next/link';
import { ArrowLeft, Crown, Gift, Shield, Users, Zap } from 'lucide-react';
import { leaderboard } from '@/lib/mock-data';

export default function LeaderboardPage() {
  return (
    <div className="section-shell py-10">
      <div className="mb-8 flex items-center gap-3">
        <Link href="/" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-300">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Ranking</p>
          <h1 className="text-4xl font-black text-white">Leaderboard</h1>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="metric-card">
          <p className="text-sm text-slate-400">Top balance</p>
          <p className="mt-3 text-3xl font-black text-white">£42.8k</p>
          <p className="mt-2 text-xs text-emerald-300">+12.5% this week</p>
        </div>
        <div className="metric-card">
          <p className="text-sm text-slate-400">Win rate</p>
          <p className="mt-3 text-3xl font-black text-white">68.2%</p>
          <p className="mt-2 text-xs text-slate-400">Platform average</p>
        </div>
        <div className="metric-card">
          <p className="text-sm text-slate-400">Streaks</p>
          <p className="mt-3 text-3xl font-black text-white">9</p>
          <p className="mt-2 text-xs text-cyan-300">Longest active streak</p>
        </div>
        <div className="metric-card">
          <p className="text-sm text-slate-400">Private leagues</p>
          <p className="mt-3 text-3xl font-black text-white">24</p>
          <p className="mt-2 text-xs text-violet-300">Active this month</p>
        </div>
      </div>

      <div className="mt-10 rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Global rankings</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Top virtual investors</h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-sm text-amber-200">
            <Crown className="h-4 w-4" />
            Weekly rewards
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {leaderboard.map((user, index) => (
            <div key={user.name} className="grid gap-4 rounded-2xl border border-white/10 bg-slate-800/70 p-4 md:grid-cols-[60px_1.2fr_0.8fr_0.8fr_0.8fr] md:items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/30 font-bold text-cyan-100">
                #{index + 1}
              </div>
              <div>
                <p className="font-semibold text-white">{user.name}</p>
                <p className="text-xs text-slate-400">{user.country}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Balance</p>
                <p className="font-semibold text-white">{user.balance}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Profit</p>
                <p className="font-semibold text-emerald-300">+{user.profit}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Streak</p>
                <p className="font-semibold text-cyan-300">{user.streak}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
