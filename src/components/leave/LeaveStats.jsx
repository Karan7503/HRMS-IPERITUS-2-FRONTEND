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

            <span>{label}</span>

            <span className="font-semibold">
                {value}
            </span>

        </div>

    );

}



export default function LeaveStats({ records = [] }) {

    const totalRequests = records.length;

    const approved =
        records.filter(r => r.status === "Approved").length;

    const pending =
        records.filter(r => r.status === "Pending").length;

    const rejected =
        records.filter(r => r.status === "Rejected").length;

    const totalDays =
        records.reduce(
            (sum, r) => sum + r.days,
            0
        );


    return (

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

                Leave Summary

            </h3>


            <StatItem
                label="Total Requests"
                value={totalRequests}
                type="neutral"
            />

            <StatItem
                label="Approved"
                value={approved}
                type="success"
            />

            <StatItem
                label="Pending"
                value={pending}
                type="warning"
            />

            <StatItem
                label="Rejected"
                value={rejected}
                type="danger"
            />

            {/* <StatItem
                label="Total Days"
                value={totalDays}
                type="primary"
            /> */}

        </div>

    );

}