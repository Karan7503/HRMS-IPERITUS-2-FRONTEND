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

export default function ConferenceLegend() {

    return (

        <div className="flex flex-wrap gap-5">

            <LegendItem
                label="Available"
                color="rgba(34,197,94,0.5)"
            />

            <LegendItem
                label="Booked"
                color="rgba(239,68,68,0.6)"
            />

            <LegendItem
                label="In Progress"
                color="rgba(245,158,11,0.6)"
            />

        </div>

    )

}