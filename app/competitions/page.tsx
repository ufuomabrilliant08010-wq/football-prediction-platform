import Link from 'next/link';
import { ArrowLeft, Code2, Gift, Users, Zap } from 'lucide-react';

const privateLeagues = [
  { name: 'City Weekend League', members: 12, code: 'CITY-24', reward: '2,500 VC', status: 'Open' },
  { name: 'Office Predators', members: 8, code: 'OFF-77', reward: '1,200 VC', status: '2 invites left' },
  { name: 'Bayern Bragging Rights', members: 16, code: 'BAY-88', reward: '3,800 VC', status: 'Closed' },
];

export default function CompetitionsPage() {
  return (
    <div className="section-shell py-10">
      <div className="mb-8 flex items-center gap-3">
        <Link href="/" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-300">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Community</p>
          <h1 className="text-4xl font-black text-white">Competitions</h1>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="metric-card">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Weekly prize</p>
            <Gift className="h-5 w-5 text-emerald-300" />
          </div>
          <p className="mt-4 text-3xl font-black text-white">6,500 VC</p>
          <p className="mt-2 text-xs text-slate-400">Top 3 reward pool</p>
        </div>
        <div className="metric-card">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Private leagues</p>
            <Users className="h-5 w-5 text-cyan-300" />
          </div>
          <p className="mt-4 text-3xl font-black text-white">18</p>
          <p className="mt-2 text-xs text-slate-400">Active across users</p>
        </div>
        <div className="metric-card">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Win streaks</p>
            <Zap className="h-5 w-5 text-violet-300" />
          </div>
          <p className="mt-4 text-3xl font-black text-white">142</p>
          <p className="mt-2 text-xs text-slate-400">Active this month</p>
        </div>
      </div>

      <div className="mt-10 space-y-6">
        <div className="glass-panel rounded-[2rem] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Private leagues</p>
              <h2 className="mt-2 text-2xl font-bold text-white">Invite friends</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-200">
              <Code2 className="h-4 w-4" />
              Create league
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {privateLeagues.map((league) => (
              <div key={league.code} className="rounded-[1.5rem] border border-white/10 bg-slate-800/70 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{league.name}</h3>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-200">
                    {league.status}
                  </span>
                </div>
                <div className="mt-5 space-y-3 text-sm text-slate-300">
                  <div className="flex items-center justify-between"><span>Members</span><span>{league.members}</span></div>
                  <div className="flex items-center justify-between"><span>Code</span><span className="font-mono text-cyan-200">{league.code}</span></div>
                  <div className="flex items-center justify-between"><span>Prize</span><span className="font-semibold text-emerald-300">{league.reward}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
