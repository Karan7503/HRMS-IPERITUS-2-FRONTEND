// function LegendItem({ label, color }) {

//     return (

//         <div className="flex items-center gap-2">

//             <span
//                 className="w-3 h-3 rounded-full"
//                 style={{ backgroundColor: color }}
//             />

//             <span className="text-sm text-muted">

//                 {label}

//             </span>

//         </div>

//     );

// }


// export default function RequestLegend() {

//     return (

//         <div className="flex flex-wrap gap-5">

//             <LegendItem
//                 label="Stationary"
//                 color="rgba(168,85,247,0.45)"
//             />

//             <LegendItem
//                 label="IT"
//                 color="rgba(34,197,94,0.45)"
//             />

//             <LegendItem
//                 label="Library"
//                 color="rgba(120,120,120,0.35)"
//             />

//             <LegendItem
//                 label="Fault"
//                 color="rgba(239,68,68,0.6)"
//             />

//             <LegendItem
//                 label="Leave"
//                 color="rgba(245,158,11,0.45)"
//             />

//             <LegendItem
//                 label="Conference"
//                 color="rgba(156,163,175,0.45)"
//             />

//         </div>

//     );

// }

import {
    FileText,
    Laptop,
    Book,
    AlertTriangle,
    CalendarDays,
    Users
} from "lucide-react";

const requestConfig = {
    Stationary: {
        color: "rgba(168,85,247,1)", // purple
        icon: FileText,
    },
    IT: {
        color: "rgba(34,197,94,1)", // green
        icon: Laptop,
    },
    Library: {
        color: "rgba(120,120,120,1)", // gray
        icon: Book,
    },
    Fault: {
        color: "rgba(239,68,68,1)", // red
        icon: AlertTriangle,
    },
    Leave: {
        color: "rgba(245,158,11,1)", // yellow
        icon: CalendarDays,
    },
    Conference: {
        color: "rgba(156,163,175,1)", // light gray
        icon: Users,
    },
};

function LegendItem({ label }) {
    const config = requestConfig[label];
    const Icon = config.icon;

    return (
        <div
            className="
        flex items-center gap-2 
        px-4 py-2 
        rounded-xl 
        border
        shadow-sm
        transition-all duration-300 
        hover:scale-105
        cursor-default
      "
            style={{
                backgroundColor: config.color.replace("1)", "0.12)"),
                borderColor: config.color.replace("1)", "0.35)"),
            }}
        >
            {/* Icon */}
            <div
                className="p-1 rounded-lg"
                style={{
                    backgroundColor: config.color.replace("1)", "0.15)")
                }}
            >
                <Icon size={12} color={config.color} />
            </div>

            {/* Label */}
            <span
                className="text-[10px] font-black uppercase tracking-widest"
                style={{ color: config.color }}
            >
                {label}
            </span>
        </div>
    );
}

export default function RequestLegend() {
    return (
        <div className="flex flex-wrap gap-3 py-2">
            {Object.keys(requestConfig).map((key) => (
                <LegendItem key={key} label={key} />
            ))}
        </div>
    );
}