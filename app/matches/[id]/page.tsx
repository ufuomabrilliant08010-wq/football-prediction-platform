import Link from 'next/link';
import { ArrowRight, BarChart3, Clock3, ShieldCheck, Trophy } from 'lucide-react';
import { matchDetail } from '@/lib/mock-data';

export default function MatchDetailPage({ params }: { params: { id: string } }) {
  const match = matchDetail[params.id] ?? matchDetail['arsenal-aston-villa'];

  return (
    <div className="section-shell py-10">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white">
          <ArrowRight className="h-4 w-4 rotate-180" />
          Back to fixtures
        </Link>
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
          {match.status}
        </span>
      </div>

      <div className="glass-panel rounded-[2rem] p-6 md:p-8">
        <div className="flex flex-col gap-5 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 text-xl font-black text-cyan-200">{match.home.short}</div>
            <div>
              <p className="text-sm text-slate-400">Home</p>
              <h1 className="text-3xl font-black text-white">{match.home.name}</h1>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Kickoff</p>
            <p className="mt-2 text-4xl font-black text-white">{match.score}</p>
            <p className="mt-2 text-sm text-slate-400">{match.time} • {match.league}</p>
          </div>

          <div className="flex items-center gap-4 md:flex-row-reverse">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 text-xl font-black text-emerald-200">{match.away.short}</div>
            <div className="text-right md:text-left">
              <p className="text-sm text-slate-400">Away</p>
              <h2 className="text-3xl font-black text-white">{match.away.name}</h2>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { label: 'Possession', value: '54% / 46%' },
                { label: 'Shots', value: '12 / 7' },
                { label: 'Corners', value: '6 / 3' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
                  <p className="mt-3 text-xl font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Markets</p>
              <div className="mt-4 space-y-3">
                {match.markets.map((market) => (
                  <div key={market.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                    <div>
                      <p className="font-semibold text-white">{market.label}</p>
                      <p className="text-sm text-slate-400">{market.desc}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-black text-cyan-300">{market.odds}</p>
                      <p className="text-xs text-slate-400">Virtual odds</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-800/70 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Prediction slip</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">Stake</h3>
                </div>
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">+25% bonus</div>
              </div>

              <div className="mt-5 space-y-4">
                <label className="block">
                  <span className="mb-2 block text-sm text-slate-400">Select market</span>
                  <select className="w-full rounded-2xl border border-white/10 bg-slate-900 p-3 text-white outline-none ring-0 focus:border-cyan-500/50">
                    <option>Home Win</option>
                    <option>Draw</option>
                    <option>Away Win</option>
                    <option>Over 2.5</option>
                    <option>Both Teams To Score</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm text-slate-400">Stake</span>
                  <input type="number" defaultValue={220} className="w-full rounded-2xl border border-white/10 bg-slate-900 p-3 text-white outline-none focus:border-cyan-500/50" />
                </label>

                <button className="w-full rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
                  Place virtual prediction
                </button>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-slate-800/70 p-5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-300" />
                <h3 className="text-xl font-bold text-white">Safety model</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-cyan-300" /> Settlement after final whistle</li>
                <li className="flex items-center gap-2"><Trophy className="h-4 w-4 text-amber-300" /> Results based on official fixture outcome</li>
                <li className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-violet-300" /> Odds refresh on live market movements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
