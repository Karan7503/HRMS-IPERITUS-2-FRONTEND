

function getEventColor(type) {

    if (type === "meeting") return "badge-primary";

    if (type === "discussion") return "badge-warning";

    if (type === "planning") return "badge-success";

    return "badge-neutral";

}


function isPastSlot(slotTime, selectedDate) {

    if (!selectedDate) return false;

    const now = new Date();

    const [time, modifier] = slotTime.split(" ");
    let [hours, minutes] = time.split(":");

    hours = parseInt(hours);

    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    const slotDateTime = new Date(selectedDate);

    slotDateTime.setHours(hours);
    slotDateTime.setMinutes(parseInt(minutes));
    slotDateTime.setSeconds(0);

    return slotDateTime < now;

}


function ConferenceCalendar({
    events = [],
    onSelectSlot,
    selectedDate
}) {

    const hours = [

        "08:00 AM",
        "09:00 AM",
        "10:00 AM",
        "11:00 AM",

        "12:00 PM",
        "01:00 PM",
        "02:00 PM",
        "03:00 PM",

        "04:00 PM",
        "05:00 PM",
        "06:00 PM",

        "07:00 PM",
        "08:00 PM",
        "09:00 PM",
        "10:00 PM"

    ];


    /* DEBUG LOGS */

    console.log("TODAY DATE OBJECT:", new Date());

    console.log("SELECTED DATE STRING:", selectedDate);

    console.log("TODAY DATE STRING:",
        new Date().toISOString().split("T")[0]
    );


    return (

        <div className="bg-bgCard border border-strong rounded-lg p-4 card-soft">

            <div className="flex items-center justify-between mb-4">

                <h3 className="text-lg font-extrabold text-textMain tracking-tighter">
                    Schedule
                </h3>

            </div>


            <div className="grid grid-cols-[80px_1fr]">


                {/* time labels */}

                <div>

                    {hours.map(h => (

                        <div
                            key={h}

                            className="h-[60px] text-xs text-muted pt-2"
                        >

                            {h}

                        </div>

                    ))}

                </div>



                {/* slot grid */}

                <div className="border-l border-strong">

                    {hours.map(hour => {

                        const past = isPastSlot(hour, selectedDate);

                        console.log(
                            hour,
                            "past =",
                            past
                        );


                        return (

                            <div

                                key={hour}

                                className={`
                                    h-[60px]
                                    border-b
                                    border-strong
                                    relative

                                    ${past
                                        ? "opacity-40 cursor-not-allowed bg-gray-100"
                                        : "hover:bg-primarySoft cursor-pointer"
                                    }
                                `}

                                onClick={() => {

                                    if (!past) {

                                        onSelectSlot(hour);

                                    }

                                }}

                            >

                                {events
                                    .filter(e => e.time === hour)
                                    .map(event => (

                                        <div
                                            key={event.id}

                                            className={`
                                                absolute
                                                left-2 right-2 top-1
                                                px-2 py-1
                                                text-xs
                                                rounded-md
                                                ${getEventColor(event.type)}
                                            `}
                                        >

                                            {event.title}

                                        </div>

                                    ))}

                            </div>

                        );

                    })}

                </div>


            </div>

        </div>

    );

}

export default ConferenceCalendar;