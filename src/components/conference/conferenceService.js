// temporary fake backend

export function fetchSlots({ room, date }) {

    return Promise.resolve([

        { time: "09:00", status: "available" },
        { time: "10:00", status: "booked", title: "Team Meeting" },
        { time: "11:00", status: "available" },
        { time: "12:00", status: "booked", title: "Client Call" },
        { time: "13:00", status: "available" },
        { time: "14:00", status: "available" }

    ]);

}


export function bookSlot({ time }) {

    return Promise.resolve({
        success: true
    });

}