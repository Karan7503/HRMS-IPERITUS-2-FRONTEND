// function LegendItem({ label, color }) {

//   return (

//     <div className="flex items-center gap-2">

//       <span
//         className="w-3 h-3 rounded-full"
//         style={{ backgroundColor: color }}
//       />

//       <span className="text-sm text-muted">

//         {label}

//       </span>

//     </div>

//   );

// }

// export default function AttendanceLegend() {

//   return (

//     <div className="flex flex-wrap gap-5">

//       <LegendItem
//         label="Present"
//         color="rgba(34,197,94,0.5)"
//       />

//       <LegendItem
//         label="Absent"
//         color="rgba(239,68,68,0.7)"
//       />

//       <LegendItem
//         label="Holiday"
//         color="rgba(120,120,120,0.4)"
//       />

//       <LegendItem
//         label="Late"
//         color="rgba(245,158,11,0.5)"
//       />

//       <LegendItem
//         label="Weekly Off"
//         // color="rgba(255, 228, 228, 0.75)"
//         color="#dbeafe"   // blue-100
//       />

//     </div>

//   );

// }

import { CheckCircle, XCircle, Clock, Coffee, Calendar } from "lucide-react";

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

function AttendanceLegend() {
  return (
    <div className="flex flex-wrap gap-3 py-2">
      <LegendItem label="Present" style="summary-success" icon={CheckCircle} />
      <LegendItem label="Absent" style="summary-danger" icon={XCircle} />
      <LegendItem label="Holiday" style="summary-neutral" icon={Coffee} />
      <LegendItem label="Late" style="summary-warning" icon={Clock} />
      <LegendItem label="Weekly Off" style="summary-primary" icon={Calendar} />
    </div>
  );
}

export  {LegendItem, AttendanceLegend}