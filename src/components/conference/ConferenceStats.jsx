import { CheckCircle, XCircle, Clock } from "lucide-react";

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

function ConferenceStats({
    slots = [],
    selectedDate
}) {

    const now = new Date();

    function isPast(slotTime) {
        if (!selectedDate) return false;
        const [time, modifier] = slotTime.split(" ");
        let [hours, minutes] = time.split(":");
        hours = parseInt(hours);
        if (modifier === "PM" && hours !== 12) hours += 12;
        if (modifier === "AM" && hours === 12) hours = 0;
        const slotDateTime = new Date(selectedDate);
        slotDateTime.setHours(hours);
        slotDateTime.setMinutes(parseInt(minutes));
        slotDateTime.setSeconds(0);
        return slotDateTime < now;
    }


    const available =
        slots.filter(
            s => s.status === "available" && !isPast(s.time)
        ).length;

    const booked =
        slots.filter(
            s => s.status === "booked" && !isPast(s.time)
        ).length;

    const progress = slots.filter(
        s => s.status === "booked" && !isPast(s.time)
    ).length;


    return (
        <div className="card-soft p-6 space-y-6 w-full lg:max-w-[320px] h-fit self-start">
            <h3 className="text-lg font-bold text-textMain tracking-tight">
                Booking Summary
            </h3>

            <div className="space-y-3">
                <StatItem label="Available" value={available} type="success" icon={CheckCircle} />
                <StatItem label="Booked" value={booked} type="danger" icon={XCircle} />
                <StatItem label="In Progress" value={progress} type="warning" icon={Clock} />
            </div>
        </div>
    )
}

export default ConferenceStats;


