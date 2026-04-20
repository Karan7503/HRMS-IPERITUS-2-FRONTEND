import { useState } from "react";

function ConferenceForm({

    time,
    room,
    date,
    onSave

}) {

    const [form, setForm] = useState({

        subject: "",
        startTime: time,
        endTime: time,
        allDay: false,
        reminder: "None",
        owner: "Karan Singh Rawat",
        project: "",
        attendees: "",
        description: ""

    });


    function update(field, value) {

        setForm(prev => ({

            ...prev,

            [field]: value

        }));

    }


    return (

        <div className="space-y-4">


            {/* subject */}

            <div>

                <label className="text-sm text-muted">

                    Subject

                </label>

                <input

                    value={form.subject}

                    onChange={e => update("subject", e.target.value)}

                    className="
            w-full
            mt-1

            px-3 py-2

            text-sm

            border border-strong
            rounded-md

            bg-bgCard
            text-textMain

            focus:outline-none
            focus:border-primary
          "

                />

            </div>



            {/* start time */}

            <div className="grid grid-cols-2 gap-3">


                <div>

                    <label className="text-sm text-muted">

                        Start

                    </label>

                    <input

                        value={date}

                        disabled

                        className="input"

                    />

                </div>


                <div>

                    <label className="text-sm text-muted">

                        Time

                    </label>

                    <input

                        value={form.startTime}

                        onChange={e => update("startTime", e.target.value)}

                        className="
              w-full
              mt-1

              px-3 py-2

              text-sm

              border border-strong
              rounded-md

              bg-bgCard
            "

                    />

                </div>

            </div>



            {/* end time */}

            <div className="grid grid-cols-2 gap-3">


                <div>

                    <label className="text-sm text-muted">

                        End Time

                    </label>

                    <input

                        value={form.endTime}

                        onChange={e => update("endTime", e.target.value)}

                        className="
              w-full
              mt-1

              px-3 py-2

              text-sm

              border border-strong
              rounded-md

              bg-bgCard
            "

                    />

                </div>


                <div className="flex items-end gap-2">

                    <input
                        type="checkbox"

                        checked={form.allDay}

                        onChange={e => update("allDay", e.target.checked)}
                    />

                    <span className="text-sm text-muted">

                        All day

                    </span>

                </div>

            </div>



            {/* project */}

            <div>

                <label className="text-sm text-muted">

                    Project

                </label>

                <select

                    value={form.project}

                    onChange={e => update("project", e.target.value)}

                    className="
            w-full
            mt-1

            px-3 py-2

            text-sm

            border border-strong
            rounded-md

            bg-bgCard
          "
                >

                    <option value="">
                        Select Project
                    </option>

                    <option>
                        LCF
                    </option>

                </select>

            </div>



            {/* room */}

            <div>

                <label className="text-sm text-muted">

                    Room

                </label>

                <input

                    value={room}

                    disabled

                    className="
            w-full
            mt-1

            px-3 py-2

            text-sm

            border border-strong
            rounded-md

            bg-bgCard
          "
                />

            </div>



            {/* attendees */}

            <div>

                <label className="text-sm text-muted">

                    Attendees

                </label>

                <input

                    placeholder="Add attendees"

                    value={form.attendees}

                    onChange={e => update("attendees", e.target.value)}

                    className="
            w-full
            mt-1

            px-3 py-2

            text-sm

            border border-strong
            rounded-md

            bg-bgCard
          "
                />

            </div>



            {/* description */}

            <div>

                <label className="text-sm text-muted">

                    Description

                </label>

                <textarea

                    rows={3}

                    value={form.description}

                    onChange={e => update("description", e.target.value)}

                    className="
            w-full
            mt-1

            px-3 py-2

            text-sm

            border border-strong
            rounded-md

            bg-bgCard
          "
                />

            </div>



            {/* buttons */}

            <div className="flex justify-end gap-2 pt-3">


                <button

                    onClick={() => onSave(form)}

                    className="
            px-4 py-2

            text-sm

            rounded-md

            bg-primaryGradient
            text-white

            hover:bg-primaryHover
          "

                >

                    Save

                </button>


            </div>


        </div>

    )

}

export default ConferenceForm;