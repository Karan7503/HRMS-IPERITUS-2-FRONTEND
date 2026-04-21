import { useState } from "react";
import DateInput from "../../ui/DateInput";


function ConferenceForm({
    time,
    room,
    date,
    onSave
}) {

    const [form, setForm] = useState({

        subject: "",

        start_date: date,
        start_time: time,

        end_time: time,
        all_day: false,

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


    function handleDateChange(field, value) {

        update(
            field,
            value
                ? value.toISOString().split("T")[0]
                : ""
        );

    }


    function handleSubmit(e) {

        e.preventDefault();

        onSave(form);

    }


    return (

        <form onSubmit={handleSubmit} className="space-y-5">


            {/* SUBJECT */}

            <Field label="Subject">

                <input
                    value={form.subject}
                    onChange={e => update("subject", e.target.value)}
                    className="input"
                    placeholder="Meeting title"
                    required
                />

            </Field>



            {/* TIMELINE */}

            <SectionTitle>
                Timeline
            </SectionTitle>


            <Grid2>

                <DateInput
                    label="Start Date"
                    selected={
                        form.start_date
                            ? new Date(form.start_date)
                            : null
                    }
                    onChange={(d) =>
                        handleDateChange("start_date", d)
                    }
                />


                <Field label="Start Time">

                    <input
                        value={form.start_time}
                        onChange={e => update("start_time", e.target.value)}
                        className="input"
                    />

                </Field>

            </Grid2>



            <Grid2>

                <Field label="End Time">

                    <input
                        value={form.end_time}
                        onChange={e => update("end_time", e.target.value)}
                        className="input"
                    />

                </Field>


                <div className="flex items-end gap-2">

                    <input
                        type="checkbox"
                        checked={form.all_day}
                        onChange={e => update("all_day", e.target.checked)}
                    />

                    <label className="text-sm text-muted">

                        All day

                    </label>

                </div>

            </Grid2>



            {/* DETAILS */}

            <SectionTitle>
                Details
            </SectionTitle>


            <Field label="Project">

                <select
                    value={form.project}
                    onChange={e => update("project", e.target.value)}
                    className="input"
                >

                    <option value="">Select Project</option>

                    <option>
                        LCF
                    </option>

                </select>

            </Field>



            <Field label="Room">

                <input
                    value={room}
                    disabled
                    className="input"
                />

            </Field>



            <Field label="Attendees">

                <input
                    placeholder="Add attendees"
                    value={form.attendees}
                    onChange={e => update("attendees", e.target.value)}
                    className="input"
                />

            </Field>



            <Field label="Description">

                <textarea
                    rows={3}
                    value={form.description}
                    onChange={e => update("description", e.target.value)}
                    className="input min-h-[90px]"
                />

            </Field>



            {/* SUBMIT */}

            <button
                className="
          btn-primary
          w-full
          mt-2
        "
            >

                Save Booking

            </button>


        </form>

    );

}



/* reusable field */

function Field({ label, children }) {

    return (

        <div>

            <label className="
        text-sm
        text-muted
        block
        mb-1
      ">

                {label}

            </label>

            {children}

        </div>

    );

}



/* grid layout */

function Grid2({ children }) {

    return (

        <div className="grid grid-cols-2 gap-3">

            {children}

        </div>

    );

}



/* section title */

function SectionTitle({ children }) {

    return (

        <p className="
      text-xs
      uppercase
      tracking-wide
      text-muted
      pt-2
    ">

            {children}

        </p>

    );

}


export default ConferenceForm;