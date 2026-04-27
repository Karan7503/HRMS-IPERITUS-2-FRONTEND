import { 
  ClipboardList, 
  CheckCircle, 
  XCircle, 
  Clock, 
  CalendarDays 
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

export default function LeaveStats({ records = [] }) {
  const totalRequests = records.length;
  const approved = records.filter(r => r.status === "Approved").length;
  const pending = records.filter(r => r.status === "Pending").length;
  const rejected = records.filter(r => r.status === "Rejected").length;

  return (
    <div className="card-soft p-6 space-y-6 w-full lg:max-w-[320px] h-fit self-start">
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-textMain tracking-tight">
          Leave Summary
        </h3>
        <p className="text-xs text-muted font-medium"> Overview of your leave applications</p>
      </div>

      <div className="space-y-3">
        <StatItem label="Approved" value={approved} type="success" icon={CheckCircle} />
        <StatItem label="Pending" value={pending} type="warning" icon={Clock} />
        <StatItem label="Rejected" value={rejected} type="danger" icon={XCircle} />
        
        <div className="pt-2">
          <div className="p-4 rounded-2xl bg-primaryGradient text-white shadow-glow flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/20">
                <ClipboardList size={20} />
              </div>
              <span className="font-semibold">Total Requests</span>
            </div>
            <span className="text-2xl font-black">{totalRequests}</span>
          </div>
        </div>
      </div>
    </div>
  );
}