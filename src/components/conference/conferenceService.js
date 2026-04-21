const API = "http://127.0.0.1:5000";


/* get slots */
export async function fetchSlots({ room, date }) {

    const res = await fetch(
        `${API}/conference/slots?room=${room}&date=${date}`
    );

    const data = await res.json();

    return data.records;
}


/* book slot */
export async function bookSlot(payload) {

    const res = await fetch(

        `${API}/conference/book`,

        {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(payload)

        }

    );

    const data = await res.json();

    if (!res.ok) {

        throw new Error(data.message || "Booking failed");

    }

    return data;
}