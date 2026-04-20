// function getClass(status) {

//     if (status === "available")
//         return "badge-success";

//     if (status === "booked")
//         return "badge-danger";

//     return "badge-warning";

// }


// function ConferenceSlots({
//     slots = [],
//     onBook
// }) {

//     return (

//         <div className="bg-bgCard border border-strong rounded-lg p-4 card-soft">

//             <h3 className="text-sm font-semibold text-textMain mb-4">

//                 Available Slots

//             </h3>


//             <div className="space-y-2">

//                 {slots.map(slot => (

//                     <div
//                         key={slot.time}

//                         className="
//               flex
//               items-center
//               justify-between

//               px-3 py-2

//               border border-strong
//               rounded-md

//               hover:bg-primarySoft
//             "
//                     >

//                         <span className="text-sm tabular-nums">

//                             {slot.time}

//                         </span>


//                         <div className="flex items-center gap-3">


//                             <span
//                                 className={`
//                   px-2 py-1

//                   text-xs
//                   font-medium

//                   rounded-full

//                   ${getClass(slot.status)}
//                 `}
//                             >

//                                 {slot.title || slot.status}

//                             </span>


//                             {slot.status === "available" && (

//                                 <button

//                                     onClick={() => onBook(slot.time)}

//                                     className="
//                     text-xs

//                     px-2 py-1

//                     rounded-md

//                     border border-strong

//                     hover:bg-primarySoft
//                   "
//                                 >

//                                     Book

//                                 </button>

//                             )}

//                         </div>

//                     </div>

//                 ))}

//             </div>

//         </div>

//     )

// }

// export default ConferenceSlots;

function getEventColor(type) {

    if (type === "meeting")
        return "badge-primary";

    if (type === "discussion")
        return "badge-warning";

    if (type === "planning")
        return "badge-success";

    return "badge-neutral";

}


function ConferenceCalendar({
    events = [],
    onSelectSlot
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


    return (

        <div className="bg-bgCard border border-strong rounded-lg p-4 card-soft">

            <div className="flex items-center justify-between mb-4">

                <h3 className="text-sm font-semibold text-textMain">

                    Schedule

                </h3>

                <button
                    className="
            text-xs
            px-2 py-1
            border border-strong
            rounded-md
            hover:bg-primarySoft
          "
                >
                    Week
                </button>

            </div>


            <div className="grid grid-cols-[80px_1fr]">

                {/* time column */}

                <div>

                    {hours.map(h => (

                        <div
                            key={h}

                            className="
                h-[60px]

                text-xs
                text-muted

                flex
                items-start
                pt-2
              "
                        >

                            {h}

                        </div>

                    ))}

                </div>


                {/* calendar grid */}

                <div className="border-l border-strong">

                    {hours.map(hour => (

                        <div
                            key={hour}

                            className="
                h-[60px]

                border-b
                border-strong

                relative

                hover:bg-primarySoft
                cursor-pointer
              "

                            onClick={() => onSelectSlot(hour)}

                        >

                            {/* events */}

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
                      font-medium

                      rounded-md

                      ${getEventColor(event.type)}
                    `}

                                    >

                                        {event.title}

                                    </div>

                                ))}

                        </div>

                    ))}

                </div>

            </div>

        </div>

    )

}

export default ConferenceCalendar;