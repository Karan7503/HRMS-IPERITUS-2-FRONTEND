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

        // const nextHour = new Date(slotDateTime);
        // nextHour.setHours(slotDateTime.getHours() + 1);

        // return now >= slotDateTime && now < nextHour;

        return slotDateTime < now;
    }


    const available =
        slots.filter(
            s => s.status === "available" && !isPast(s.time)
        ).length + 1;

    // const booked =
    //     slots.filter(s => s.status === "booked").length;

    const booked =
        slots.filter(
            s => s.status === "booked" && !isPast(s.time)
        ).length;

    const progress = slots.filter(
        s => s.status === "booked" && !isPast(s.time)
    ).length;


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


