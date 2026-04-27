import { useState } from "react";
import DateInput from "../../ui/DateInput";
import CustomSelect from "../../ui/CustomSelect";


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

    // Specific change handler for CustomSelect and other inputs
    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        update(name, type === "checkbox" ? checked : value);
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
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="input"
                    placeholder="Meeting title"
                    required
                />
            </Field>


            {/* TIMELINE */}
            <SectionTitle>Timeline</SectionTitle>

            <Grid2>
                <DateInput
                    label="Start Date"
                    selected={form.start_date ? new Date(form.start_date) : null}
                    onChange={(d) => handleDateChange("start_date", d)}
                />

                <Field label="Start Time">
                    <input
                        name="start_time"
                        value={form.start_time}
                        onChange={handleChange}
                        className="input"
                    />
                </Field>
            </Grid2>


            <Grid2>
                <Field label="End Time">
                    <input
                        name="end_time"
                        value={form.end_time}
                        onChange={handleChange}
                        className="input"
                    />
                </Field>

                <div className="flex items-center gap-2 h-[48px] mt-[26px]">
                    <input
                        type="checkbox"
                        id="all_day"
                        name="all_day"
                        checked={form.all_day}
                        onChange={handleChange}
                        className="w-4 h-4 rounded border-strong text-primary focus:ring-primary cursor-pointer"
                    />
                    <label htmlFor="all_day" className="text-sm font-medium text-textMain cursor-pointer">
                        All day
                    </label>
                </div>
            </Grid2>


            {/* DETAILS */}
            <SectionTitle>Details</SectionTitle>

            <CustomSelect
                label="Project"
                name="project"
                value={form.project}
                onChange={handleChange}
                options={["LCF", "HRMS", "Other"]}
                placeholder="Select Project"
            />


            <Field label="Room">
                <input
                    value={room}
                    disabled
                    className="input opacity-60"
                />
            </Field>


            <Field label="Attendees">
                <input
                    name="attendees"
                    placeholder="Add attendees"
                    value={form.attendees}
                    onChange={handleChange}
                    className="input"
                />
            </Field>


            <Field label="Description">
                <textarea
                    name="description"
                    rows={3}
                    value={form.description}
                    onChange={handleChange}
                    className="input min-h-[90px]"
                />
            </Field>


            {/* SUBMIT */}
            <button
                type="submit"
                className="btn-primary w-full h-[48px] mt-4"
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
            <label className="form-label">
                {label}
            </label>
            {children}
        </div>
    );
}



/* grid layout */
function Grid2({ children }) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {children}
        </div>
    );
}



/* section title */
function SectionTitle({ children }) {
    return (
        <p className="form-section-title">
            {children}
        </p>
    );
}


export default ConferenceForm;