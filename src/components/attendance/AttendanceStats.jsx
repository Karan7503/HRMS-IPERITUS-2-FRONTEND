function StatItem({ label, value, type }) {

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

        px-3 py-2

        rounded-lg

        text-sm

        ${styles[type]}
      `}
    >

      <span>

        {label}

      </span>


      <span className="font-semibold">

        {value}

      </span>

    </div>

  );

}


export default function AttendanceStats({summary = {}, filters = {}}){
  const {
    totalDays = 0,
    present = 0,
    absent = 0,
    late = 0,
    holiday = 0,
    attendancePercent = 0
  } = summary;

  return(

    <div className="
    bg-bgCard
    border border-strong
    rounded-xl
    p-4
    space-y-3

    w-full
    lg:max-w-[300px]

    h-fit
    self-start
    ">


      <h3 className="font-semibold text-muted">

        Attendance Summary

      </h3>


      <div className="text-xs text-muted">

        {filters?.start || "YYYY-MM-DD"}

        <span className="mx-2">→</span>

        {filters?.end || "YYYY-MM-DD"}

      </div>


      <StatItem label="Total Days" value={totalDays} type="neutral"/>

      <StatItem label="Present" value={present} type="success"/>

      <StatItem label="Absent" value={absent} type="danger"/>

      <StatItem label="Late" value={late} type="warning"/>

      <StatItem label="Holiday" value={holiday} type="neutral"/>

      <StatItem label="Attendance %" value={`${attendancePercent}%`} type="primary"/>

    

    </div>

  );

}