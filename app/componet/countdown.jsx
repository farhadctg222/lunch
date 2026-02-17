"use client";

import { useEffect, useMemo, useState } from "react";

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function Countdown({ targetISO }) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  let diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);

  const seconds = Math.floor(diff / 1000);

  const ended = target - now <= 0;

  return (
    <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-emerald-700">
        {ended ? "✅ ওয়েবসাইট চালু হয়েছে" : "🚀 ওয়েবসাইট উদ্বোধন হতে বাকি"}
      </p>

      {!ended && (
        <div className="mt-3 grid grid-cols-4 gap-3 text-center">
          <div className="rounded-xl bg-emerald-50 p-3">
            <div className="text-2xl font-extrabold text-emerald-700">
              {days}
            </div>
            <div className="text-xs text-slate-600">দিন</div>
          </div>

          <div className="rounded-xl bg-emerald-50 p-3">
            <div className="text-2xl font-extrabold text-emerald-700">
              {pad(hours)}
            </div>
            <div className="text-xs text-slate-600">ঘন্টা</div>
          </div>

          <div className="rounded-xl bg-emerald-50 p-3">
            <div className="text-2xl font-extrabold text-emerald-700">
              {pad(minutes)}
            </div>
            <div className="text-xs text-slate-600">মিনিট</div>
          </div>

          <div className="rounded-xl bg-emerald-50 p-3">
            <div className="text-2xl font-extrabold text-emerald-700">
              {pad(seconds)}
            </div>
            <div className="text-xs text-slate-600">সেকেন্ড</div>
          </div>
        </div>
      )}

      <p className="mt-3 text-xs text-slate-500">
        Launch Date: {new Date(targetISO).toLocaleString()}
      </p>
    </div>
  );
}
