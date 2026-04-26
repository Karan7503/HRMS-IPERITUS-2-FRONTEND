// function StatItem({ label, value, type }) {

//   const styles = {

//     neutral: "summary-neutral",

//     success: "summary-success",

//     danger: "summary-danger",

//     warning: "summary-warning",

//     primary: "summary-primary"

//   };


//   return (

//     <div
//       className={`
//         flex
//         justify-between
//         items-center

//         px-3 py-2

//         rounded-lg

//         text-sm

//         ${styles[type]}
//       `}
//     >

//       <span>

//         {label}

//       </span>


//       <span className="font-semibold">

//         {value}

//       </span>

//     </div>

//   );

// }


// export default function AttendanceStats({ summary = {}, filters = {} }) {
//   const {
//     totalDays = 0,
//     present = 0,
//     absent = 0,
//     late = 0,
//     holiday = 0,
//     weekOff = 0,
//     attendancePercent = 0
//   } = summary;

//   return (

//     <div className="
//     bg-bgCard
//     border border-strong
//     rounded-xl
//     p-4
//     space-y-3

//     w-full
//     lg:max-w-[300px]

//     h-fit
//     self-start
//     ">


//       <h3 className="font-semibold text-muted">

//         Attendance Summary

//       </h3>


//       <div className="text-xs text-muted">

//         {filters?.start || "YYYY-MM-DD"}

//         <span className="mx-2">→</span>

//         {filters?.end || "YYYY-MM-DD"}

//       </div>


//       <StatItem label="Total Days" value={totalDays} type="neutral" />

//       <StatItem label="Present" value={present} type="success" />

//       <StatItem label="Absent" value={absent} type="danger" />

//       <StatItem label="Late" value={late} type="warning" />

//       <StatItem label="Holiday" value={holiday} type="neutral" />

//       <StatItem label="Week Off" value={weekOff} type="neutral" />

//       <StatItem label="Attendance %" value={`${attendancePercent}%`} type="primary" />

//     </div>

//   );

// }


import { 
  Calendar, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Percent, 
  Briefcase, 
  Coffee 
} from "lucide-react";

function StatItem({ label, value, type, icon: Icon }) {
  const styles = {
    neutral: "summary-neutral",
    success: "summary-success",
    danger: "summary-danger",
    warning: "summary-warning",
    primary: "summary-primary"
  };

  return (
    <div
      className={`
        flex
        justify-between
        items-center
        px-4 py-3
        rounded-xl
        text-sm
        transition-all duration-300
        ${styles[type]}
        hover:scale-[1.02]
      `}
    >
      <div className="flex items-center gap-3">
        <div className="p-1.5 rounded-lg bg-white/10">
          <Icon size={16} />
        </div>
        <span className="font-medium">
          {label}
        </span>
      </div>

      <span className="text-lg font-bold">
        {value}
      </span>
    </div>
  );
}

export default function AttendanceStats({ summary = {}, filters = {} }) {
  const {
    totalDays = 0,
    present = 0,
    absent = 0,
    late = 0,
    holiday = 0,
    weekOff = 0,
    attendancePercent = 0
  } = summary;

  return (
    <div className="card-soft p-6 space-y-6 w-full lg:max-w-[320px] h-fit self-start">
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-textMain tracking-tight">
          Attendance Summary
        </h3>
        <div className="flex items-center gap-2 text-xs text-muted font-medium bg-bgMain/50 w-fit px-2 py-1 rounded-md border border-primary/10">
          <Calendar size={12} />
          <span>{filters?.start || "YYYY-MM-DD"}</span>
          <span className="text-muted/40">→</span>
          <span>{filters?.end || "YYYY-MM-DD"}</span>
        </div>
      </div>

      <div className="space-y-3">
        <StatItem label="Total Days" value={totalDays} type="neutral" icon={Briefcase} />
        <StatItem label="Present" value={present} type="success" icon={CheckCircle} />
        <StatItem label="Absent" value={absent} type="danger" icon={XCircle} />
        <StatItem label="Late" value={late} type="warning" icon={Clock} />
        <StatItem label="Holiday" value={holiday} type="neutral" icon={Coffee} />
        <StatItem label="Week Off" value={weekOff} type="neutral" icon={Calendar} />
        
        <div className="pt-2">
          <div className="p-4 rounded-2xl bg-primaryGradient text-white shadow-glow flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/20">
                <Percent size={20} />
              </div>
              <span className="font-semibold">Attendance Rate</span>
            </div>
            <span className="text-2xl font-black">{attendancePercent}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}