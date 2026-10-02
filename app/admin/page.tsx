import Link from 'next/link';
import { ArrowLeft, BadgeCheck, ShieldAlert, Users } from 'lucide-react';

export default function AdminPage() {
  return (
    <div className="section-shell py-10">
      <div className="mb-8 flex items-center gap-3">
        <Link href="/" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-300">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Operations</p>
          <h1 className="text-4xl font-black text-white">Admin</h1>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="metric-card">
          <p className="text-sm text-slate-400">Users</p>
          <p className="mt-4 text-3xl font-black text-white">128,432</p>
          <p className="mt-2 text-xs text-cyan-300">+1,820 this week</p>
        </div>
        <div className="metric-card">
          <p className="text-sm text-slate-400">Active markets</p>
          <p className="mt-4 text-3xl font-black text-white">4,981</p>
          <p className="mt-2 text-xs text-emerald-300">Across 18 leagues</p>
        </div>
        <div className="metric-card">
          <p className="text-sm text-slate-400">Settlements</p>
          <p className="mt-4 text-3xl font-black text-white">96.2%</p>
          <p className="mt-2 text-xs text-violet-300">Auto-processed</p>
        </div>
        <div className="metric-card">
          <p className="text-sm text-slate-400">Compliance</p>
          <p className="mt-4 text-3xl font-black text-white">100%</p>
          <p className="mt-2 text-xs text-amber-300">Virtual currency checks</p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel rounded-[2rem] p-6">
          <div className="flex items-center gap-3">
            <ShieldAlert className="h-5 w-5 text-amber-300" />
            <h2 className="text-2xl font-bold text-white">Operational controls</h2>
          </div>

          <div className="mt-6 space-y-4">
            {[
              'Suspend suspicious accounts',
              'Adjust virtual reward grants',
              'Manage live fixture integrity',
              'Review market closures and odds updates',
              'Approve private competition invites',
            ].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                <span className="text-slate-200">{item}</span>
                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-1 text-xs text-cyan-200">Ready</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-6">
          <div className="flex items-center gap-3">
            <BadgeCheck className="h-5 w-5 text-emerald-300" />
            <h2 className="text-2xl font-bold text-white">Status overview</h2>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">API health</span>
                <span className="font-semibold text-emerald-300">Healthy</span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Result settlement</span>
                <span className="font-semibold text-cyan-300">Auto-running</span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">User disputes</span>
                <span className="font-semibold text-violet-300">12 pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
