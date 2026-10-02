import Link from 'next/link';
import { Activity, ArrowRight, CalendarClock, ShieldCheck, Trophy, Wallet } from 'lucide-react';
import { competitions, leaderboard, liveMatches } from '@/lib/mock-data';

export default function HomePage() {
  return (
    <div className="pb-16">
      <section className="section-shell pt-10 md:pt-16">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          <div className="rounded-[2rem] border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 shadow-glow">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-200">
              <Activity className="h-4 w-4" />
              Virtual football market
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Predict the <span className="gradient-text">beautiful game</span> and climb the leaderboard.
            </h2>

            <p className="mt-5 max-w-xl text-lg text-slate-300">
              Compete with virtual coins in real football fixtures from the Premier League, Champions League, La Liga, Serie A, Bundesliga and more.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/#matches" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
                Explore fixtures
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/leaderboard" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-cyan-500/60 hover:text-cyan-200">
                View leaderboard
              </Link>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="metric-card">
                <p className="text-sm text-slate-400">Active users</p>
                <p className="mt-2 text-3xl font-bold text-white">128k</p>
              </div>
              <div className="metric-card">
                <p className="text-sm text-slate-400">Virtual volume</p>
                <p className="mt-2 text-3xl font-bold text-white">£8.7M</p>
              </div>
              <div className="metric-card">
                <p className="text-sm text-slate-400">Live matches</p>
                <p className="mt-2 text-3xl font-bold text-white">42</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
            <div className="flex items-center justify-between pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Wallet</p>
                <p className="mt-2 text-3xl font-black text-white">24,560</p>
              </div>
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-emerald-300">
                <Wallet className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-800/80 p-4">
                <span className="text-slate-400">Available</span>
                <span className="font-semibold text-white">16,240 VC</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-800/80 p-4">
                <span className="text-slate-400">Pending</span>
                <span className="font-semibold text-amber-300">1,890 VC</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-800/80 p-4">
                <span className="text-slate-400">Settled W/L</span>
                <span className="font-semibold text-emerald-300">+6,430 VC</span>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4">
              <div className="flex items-center gap-2 text-cyan-200">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-sm font-medium">No cash value</span>
              </div>
              <p className="mt-3 text-sm text-slate-300">
                All coins are virtual and used only for contests, leaderboards, and internal platform activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Featured leagues</p>
            <h3 className="mt-2 text-3xl font-bold text-white">Top competitions</h3>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {['Premier League', 'Champions League', 'La Liga', 'Serie A', 'Bundesliga', 'Europa League', 'MLS', 'World Cup'].map((league, index) => (
            <div key={league} className="glass-panel rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 text-lg font-bold text-cyan-200 flex items-center justify-center">
                  {league.charAt(0)}
                </div>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">
                  {index + 1} {index % 2 === 0 ? 'LIVE' : 'UPCOMING'}
                </span>
              </div>
              <h4 className="mt-5 text-xl font-bold text-white">{league}</h4>
              <p className="mt-2 text-sm text-slate-400">{14 + index * 3} clubs • {index % 2 === 0 ? '72 fixtures' : '58 fixtures'}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="matches" className="section-shell mt-16">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Live & upcoming</p>
            <h3 className="mt-2 text-3xl font-bold text-white">Today's matches</h3>
          </div>
          <Link href="/matches/arsenal-aston-villa" className="text-sm font-medium text-cyan-300 hover:text-cyan-200">
            View all fixtures →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-2">
          {liveMatches.map((match) => (
            <Link
              key={match.id}
              href={`/matches/${match.id}`}
              className="glass-panel group rounded-[1.75rem] p-5 transition hover:border-cyan-500/40 hover:bg-slate-900"
            >
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{match.league}</span>
                <span className="rounded-full border border-white/10 px-2 py-1">{match.status}</span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-lg font-black text-cyan-200">
                    {match.home.short}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{match.home.name}</p>
                    <p className="text-xs text-slate-400">Home</p>
                  </div>
                </div>

                <div className="flex items-center justify-center rounded-full border border-white/10 bg-slate-800 px-3 py-2 text-lg font-black text-white">
                  {match.score}
                </div>

                <div className="flex items-center justify-end gap-3 text-right">
                  <div>
                    <p className="font-semibold text-white">{match.away.name}</p>
                    <p className="text-xs text-slate-400">Away</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-lg font-black text-emerald-200">
                    {match.away.short}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <CalendarClock className="h-4 w-4 text-cyan-300" />
                  {match.time}
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {match.markets.map((market) => (
                    <span key={market} className="market-pill">{market}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel rounded-[2rem] p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Prediction slip</p>
          <h3 className="mt-2 text-3xl font-bold text-white">Quick bet builder</h3>

          <div className="mt-6 space-y-4">
            {[
              { label: 'Home Win', odd: '1.82', desc: 'Arsenal vs Aston Villa', status: 'Available' },
              { label: 'Over 2.5 Goals', odd: '2.14', desc: 'Inter vs Juventus', status: 'Hot' },
              { label: 'Both Teams To Score', odd: '1.68', desc: 'Real Madrid vs Girona', status: 'Trending' },
            ].map((bet) => (
              <div key={bet.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                <div>
                  <p className="font-semibold text-white">{bet.label}</p>
                  <p className="text-sm text-slate-400">{bet.desc}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-cyan-300">{bet.odd}</p>
                  <p className="text-xs text-slate-400">{bet.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-6">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Leaderboard</p>
              <h3 className="mt-2 text-3xl font-bold text-white">Top performers</h3>
            </div>
            <Trophy className="h-6 w-6 text-amber-300" />
          </div>

          <div className="mt-6 space-y-3">
            {leaderboard.slice(0, 5).map((user, index) => (
              <div key={user.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-800/70 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/30 font-bold text-cyan-100">
                    #{index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{user.name}</p>
                    <p className="text-xs text-slate-400">{user.wins} wins • {user.streak} streak</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-white">{user.balance}</p>
                  <p className="text-xs text-emerald-300">+{user.profit} profit</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell mt-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Competitions</p>
            <h3 className="mt-2 text-3xl font-bold text-white">Weekly events</h3>
          </div>
          <Link href="/competitions" className="text-sm font-medium text-cyan-300 hover:text-cyan-200">See all events →</Link>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {competitions.slice(0, 3).map((competition) => (
            <div key={competition.name} className="glass-panel rounded-[1.75rem] p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{competition.type}</p>
                  <h4 className="mt-2 text-xl font-bold text-white">{competition.name}</h4>
                </div>
                <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-2 py-1 text-xs font-medium text-amber-200">
                  {competition.prize}
                </div>
              </div>

              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Entries</span>
                  <span>{competition.entries}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Deadline</span>
                  <span>{competition.deadline}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Reward</span>
                  <span className="font-semibold text-emerald-300">{competition.reward}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
