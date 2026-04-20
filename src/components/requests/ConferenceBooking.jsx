import { useEffect, useState } from "react";
import BreadCrumb from "../../ui/BreadCrumb";
import ConferenceFilter from "../conference/ConferenceFilter";
import ConferenceLegend from "../conference/ConferenceLegend";
import ConferenceCalendar from "../conference/ConferenceCalendar";
import ConferenceStats from "../conference/ConferenceStats";
import { fetchSlots, bookSlot } from "../conference/conferenceService";
import ConferenceForm from "../conference/ConferenceForm";
import SidePopup from "../../ui/SidePopup";


function ConferenceBooking() {

    const [room, setRoom] = useState("Room A");
    const [date, setDate] = useState("2026-04-20");
    const [showPopup, setShowPopup] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);

    const [slots, setSlots] = useState([]);

    async function loadSlots() {

        const data = await fetchSlots({
            room,
            date
        });

        setSlots(data);

    }


    /* ADD HERE */
    const [events, setEvents] = useState([

        {
            id: 1,
            title: "Team meeting",
            time: "10:00 AM",
            type: "meeting"
        },

        {
            id: 2,
            title: "Client call",
            time: "12:00 PM",
            type: "discussion"
        }

    ]);



    /* ADD HERE */
    // function handleBooking(time) {

    //     setEvents(prev => [
    //         ...prev,
    //         {
    //             id: Date.now(),
    //             title: "New Meeting",
    //             time,
    //             type: "planning"
    //         }
    //     ]);

    // }

    function handleBooking(time) {

        setSelectedTime(time);
        setShowPopup(true);

    }

    useEffect(() => {
        loadSlots();
    }, [room, date]);


    return (

        <div className="bg-bgMain min-h-screen responsive-page space-y-6">

            <BreadCrumb
                items={[
                    { label: "Dashboard", path: "/dashboard" },
                    { label: "Conference Booking", path: "/conference" }
                ]}
            />

            <h1 className="text-xl sm:text-2xl font-semibold text-textMain">
                Conference Booking
            </h1>

            <div className="border-b border-strong" />


            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                <ConferenceLegend />

                <ConferenceFilter
                    room={room}
                    setRoom={setRoom}
                    date={date}
                    setDate={setDate}
                />

            </div>


            <div className="responsive-grid">

                {/* <ConferenceSlots
                    slots={slots}
                    onBook={handleBooking}
                /> */}
                <ConferenceCalendar
                    events={events}
                    onSelectSlot={handleBooking}
                />
                <ConferenceStats slots={slots} />

            </div>

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

                    onSave={(formData) => {

                        setEvents(prev => [

                            ...prev,

                            {
                                id: Date.now(),
                                title: formData.subject,
                                time: formData.startTime,
                                type: "meeting"
                            }

                        ]);

                        setShowPopup(false);

                    }}

                />

            </SidePopup>

        </div>

    )

}

export default ConferenceBooking;