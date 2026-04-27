import DateInput from "../../ui/DateInput";
import CustomSelect from "../../ui/CustomSelect";


function ConferenceFilter({
    room,
    setRoom,
    date,
    setDate
}) {

    return (

        <div className="flex items-center gap-4">

            {/* ROOM */}
            <div className="w-[190px]">
                <CustomSelect
                    label=""
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    options={["Room A", "Room B", "Room C"]}
                    placeholder="Select Room"
                    className="rounded-full px-8"
                />
            </div>


            {/* DATE */}
            <div className="w-[190px]">
                <DateInput
                    label=""
                    selected={date ? new Date(date) : null}
                    onChange={(d) => setDate(d ? d.toISOString().split("T")[0] : null)}
                    className="rounded-full pl-8"
                />
            </div>

        </div>

    );

}

export default ConferenceFilter;