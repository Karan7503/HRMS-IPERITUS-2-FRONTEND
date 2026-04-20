function ConferenceStats({ slots = [] }) {

    const available =
        slots.filter(s => s.status === "available").length;

    const booked =
        slots.filter(s => s.status === "booked").length;

    const progress =
        slots.filter(s => s.status === "progress").length;


    return (

        <div className="bg-bgCard border border-strong rounded-lg p-4 card-soft h-fit">

            <h3 className="text-sm font-semibold text-textMain mb-4">

                Booking Summary

            </h3>


            <div className="space-y-2">


                <div className="summary-success px-3 py-2 rounded-md flex justify-between">

                    <span>Available</span>

                    <span>{available}</span>

                </div>


                <div className="summary-danger px-3 py-2 rounded-md flex justify-between">

                    <span>Booked</span>

                    <span>{booked}</span>

                </div>


                <div className="summary-warning px-3 py-2 rounded-md flex justify-between">

                    <span>In Progress</span>

                    <span>{progress}</span>

                </div>

            </div>

        </div>

    )

}

export default ConferenceStats;