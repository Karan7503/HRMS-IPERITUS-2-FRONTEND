import { CheckCircle, XCircle, Clock } from "lucide-react";

function LegendItem({ label, style, icon: Icon }) {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded-xl ${style} border border-white/5 shadow-sm transition-all duration-300 hover:scale-105 cursor-default`}
    >
      <div className="p-1 rounded-lg bg-white/20">
        <Icon size={12} />
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-textMain/80">
        {label}
      </span>
    </div>
  );
}

export default function ConferenceLegend() {
  return (
    <div className="flex flex-wrap gap-3 py-2">
      <LegendItem label="Available" style="summary-success" icon={CheckCircle} />
      <LegendItem label="Booked" style="summary-danger" icon={XCircle} />
      <LegendItem label="In Progress" style="summary-warning" icon={Clock} />
    </div>
  );
}