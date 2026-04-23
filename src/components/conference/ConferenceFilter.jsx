import DateInput from "../../ui/DateInput";


function ConferenceFilter({
    room,
    setRoom,
    date,
    setDate
}) {

    return (

        <div className="flex items-center gap-3">

            {/* ROOM */}

            <select
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="
                    h-[37px]
                    mt-1.25
                    px-3

                    text-sm
                    bg-bgCard
                    text-textMain

                    border border-strong
                    rounded-md

                    hover:bg-primarySoft
                    focus:outline-none
            ">

                <option value="Room A">Room A</option>
                <option value="Room B">Room B</option>
                <option value="Room C">Room C</option>

            </select>


            {/* DATE */}
            <div className="w-[170px]">
                <DateInput
                    label=""
                    selected={date}
                    onChange={(date) => setDate(date.toISOString().split("T")[0])}
                />
            </div>

        </div>

    );

}

export default ConferenceFilter;