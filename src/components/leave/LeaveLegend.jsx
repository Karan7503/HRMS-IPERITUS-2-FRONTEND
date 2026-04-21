function LegendItem({ label, color }) {

    return (

        <div className="flex items-center gap-2">

            <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
            />

            <span className="text-sm text-muted">

                {label}

            </span>

        </div>

    );

}


export default function LeaveLegend() {

    return (

        <div className="flex flex-wrap gap-5">

            <LegendItem
                label="Approved"
                color="rgba(34,197,94,0.45)"
            />

            <LegendItem
                label="Pending"
                color="rgba(245,158,11,0.45)"
            />

            <LegendItem
                label="Rejected"
                color="rgba(239,68,68,0.6)"
            />

        </div>

    );

}