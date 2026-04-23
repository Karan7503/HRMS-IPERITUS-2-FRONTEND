import { useEffect, useState } from "react";

import BreadCrumb from "../../ui/BreadCrumb";

import ConferenceFilter from "../conference/ConferenceFilter";
import ConferenceLegend from "../conference/ConferenceLegend";
import ConferenceCalendar from "../conference/ConferenceCalendar";
import ConferenceStats from "../conference/ConferenceStats";

import {
    fetchSlots,
    bookSlot
} from "../conference/conferenceService";

import ConferenceForm from "../conference/ConferenceForm";

import SidePopup from "../../ui/SidePopup";


function ConferenceBooking() {

    const [room, setRoom] = useState("Room A");

    const [date, setDate] = useState(
        new Date().toISOString().split("T")[0]
    );
    const [showPopup, setShowPopup] = useState(false);

    const [selectedTime, setSelectedTime] = useState(null);

    const [slots, setSlots] = useState([]);

    const [events, setEvents] = useState([]);



    /* load slots from backend */

    async function loadSlots() {

        try {

            const data = await fetchSlots({

                room,
                date

            });

            setSlots(data);

            /* convert slots -> calendar events */

            const mappedEvents = data

                .filter(s => s.status === "booked")

                .map((s, index) => ({

                    id: index + 1,

                    title: s.title || "Meeting",

                    time: s.time,

                    type: "meeting"

                }));


            setEvents(mappedEvents);

        }

        catch (err) {

            console.error("slot fetch failed", err);

        }

    }



    /* when user clicks calendar slot */

    function handleBooking(time) {

        setSelectedTime(time);

        setShowPopup(true);

    }



    /* book slot using backend */

    async function handleSave(formData) {

        try {

            await bookSlot({

                room,
                date,

                start_time: formData.start_time,
                end_time: formData.end_time,

                subject: formData.subject

            });

            await loadSlots();

            setShowPopup(false);

        }
        catch (err) {

            alert(err.message);   // shows "Slot already booked"

            console.error("booking failed", err);

        }

    }



    useEffect(() => {

        loadSlots();

    }, [room, date]);



    return (

        <div className="bg-bgMain min-h-screen responsive-page space-y-6">


            {/* breadcrumb */}

            <BreadCrumb

                items={[

                    { label: "Dashboard", path: "/dashboard" },

                    { label: "Requests", path: "/requests" },

                    { label: "Conference", path: "/conference" }

                ]}

            />


            {/* title */}

            <h1 className="text-xl sm:text-2xl font-semibold text-textMain">

                Conference Booking

            </h1>


            <div className="border-b border-strong" />



            {/* legend + filter */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                <ConferenceLegend />


                <ConferenceFilter

                    room={room}

                    setRoom={setRoom}

                    date={date}

                    setDate={setDate}

                />

            </div>



            {/* calendar + stats */}

            <div className="responsive-grid">

                <ConferenceCalendar

                    events={events}

                    onSelectSlot={handleBooking}

                    selectedDate={date}

                />


                <ConferenceStats

                    slots={slots}
                    selectedDate={date}
                />

            </div>



            {/* booking popup */}

            <SidePopup

                isOpen={showPopup}

                onClose={() => setShowPopup(false)}

                title="Book Conference Room"

                width="500px"

            >

                <ConferenceForm

                    time={selectedTime}

                    room={room}

                    date={date}

                    onSave={handleSave}

                />

            </SidePopup>


        </div>

    );

}


export default ConferenceBooking;