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

            <span className="font-semibold">{value}</span>

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


    return (

        <div
            className="
        bg-bgCard
        border border-strong
        rounded-xl

        p-4
        space-y-3

        w-full
        lg:max-w-[300px]

        h-fit
        self-start
      "
        >

            <h3 className="font-semibold text-muted">

                Requests Summary

            </h3>


            <StatItem
                label="Stationary"
                value={stationary}
                type="primary"
            />

            <StatItem
                label="IT"
                value={it}
                type="success"
            />

            <StatItem
                label="Library"
                value={library}
                type="neutral"
            />

            <StatItem
                label="Fault"
                value={fault}
                type="danger"
            />

            <StatItem
                label="Leave"
                value={leave}
                type="warning"
            />

            <StatItem
                label="Conference"
                value={conference}
                type="neutral"
            />

        </div>

    );

}