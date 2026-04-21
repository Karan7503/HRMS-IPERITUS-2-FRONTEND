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


export default function AttendanceLegend() {

  return (

    <div className="flex flex-wrap gap-5">

      <LegendItem
        label="Present"
        color="rgba(34,197,94,0.5)"
      />

      <LegendItem
        label="Absent"
        color="rgba(239,68,68,0.7)"
      />

      <LegendItem
        label="Holiday"
        color="rgba(120,120,120,0.4)"
      />

      <LegendItem
        label="Late"
        color="rgba(245,158,11,0.5)"
      />

      <LegendItem
        label="Weekly Off"
        // color="rgba(255, 228, 228, 0.75)"
        color="#dbeafe"   // blue-100
      />

    </div>

  );

}