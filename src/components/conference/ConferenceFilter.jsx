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
          h-[34px]
          px-3

          text-sm

          bg-bgCard
          text-textMain

          border border-strong
          rounded-md

          hover:bg-primarySoft
          focus:outline-none
        "
            >

                <option>Room A</option>
                <option>Room B</option>
                <option>Room C</option>

            </select>


            {/* DATE */}

            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}

                className="
          h-[34px]
          px-3

          text-sm

          bg-bgCard
          text-textMain

          border border-strong
          rounded-md

          hover:bg-primarySoft
          focus:outline-none
        "
            />

        </div>

    );

}

export default ConferenceFilter;