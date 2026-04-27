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


// export default function LeaveLegend() {

//     return (

//         <div className="flex flex-wrap gap-5">

//             <LegendItem
//                 label="Approved"
//                 color="rgba(34,197,94,0.45)"
//             />

//             <LegendItem
//                 label="Pending"
//                 color="rgba(245,158,11,0.45)"
//             />

//             <LegendItem
//                 label="Rejected"
//                 color="rgba(239,68,68,0.6)"
//             />

//         </div>

//     );

// }


import { CheckCircle, Clock, XCircle } from "lucide-react";

const leaveConfig = {
    Approved: {
        color: "rgba(34,197,94,1)",   // green
        icon: CheckCircle,
    },
    Pending: {
        color: "rgba(245,158,11,1)",  // yellow
        icon: Clock,
    },
    Rejected: {
        color: "rgba(239,68,68,1)",   // red
        icon: XCircle,
    },
};

function LegendItem({ label }) {
    const config = leaveConfig[label];
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
                backgroundColor: config.color.replace("1)", "0.12)"), // soft bg
                borderColor: config.color.replace("1)", "0.35)"),     // soft border
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


export default function LeaveLegend() {
    return (
        <div className="flex flex-wrap gap-3 py-2">
            <LegendItem label="Approved" />
            <LegendItem label="Pending" />
            <LegendItem label="Rejected" />
        </div>
    );
}