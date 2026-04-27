import { 
  FileText, 
  Laptop, 
  Book, 
  AlertTriangle, 
  CalendarDays, 
  Users,
  Layers
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

export default function RequestStats({ data = [] }) {
  const stationary = data.filter(r => r.request_for === "Stationary").length;
  const it = data.filter(r => r.request_for === "IT").length;
  const library = data.filter(r => r.request_for === "Library").length;
  const fault = data.filter(r => r.request_for === "Fault").length;
  const leave = data.filter(r => r.request_for === "Leave").length;
  const conference = data.filter(r => r.request_for === "Conference").length;
  const totalRequests = data.length;

  return (
    <div className="card-soft p-6 space-y-6 w-full lg:max-w-[320px] h-fit self-start">
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-textMain tracking-tight">
          Requests Summary
        </h3>
        <p className="text-xs text-muted font-medium">Distribution of your service requests</p>
      </div>

      <div className="space-y-3">
        <StatItem label="Stationary" value={stationary} type="primary" icon={FileText} />
        <StatItem label="IT" value={it} type="success" icon={Laptop} />
        <StatItem label="Library" value={library} type="neutral" icon={Book} />
        <StatItem label="Fault" value={fault} type="danger" icon={AlertTriangle} />
        <StatItem label="Leave" value={leave} type="warning" icon={CalendarDays} />
        <StatItem label="Conference" value={conference} type="neutral" icon={Users} />
        
        <div className="pt-2">
          <div className="p-4 rounded-2xl bg-primaryGradient text-white shadow-glow flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/20">
                <Layers size={20} />
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