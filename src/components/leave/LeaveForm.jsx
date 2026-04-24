import { useState } from "react";
import DateInput from "../../ui/DateInput";


function LeaveForm({ onSubmit }) {

    const [form, setForm] = useState({

        leave_type: "",
        from_date: "",
        to_date: "",
        reason: ""

    });


    function handleChange(e) {

        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));

    }


    function handleDateChange(name, date) {

        setForm(prev => ({
            ...prev,
            [name]: date
                ? date.toISOString().split("T")[0]
                : ""
        }));

    }


    function handleSubmit(e) {

        e.preventDefault();

        console.log(form);
        console.log("karan")
        // onSubmit(form);

        if (onSubmit) {

            onSubmit(form);

        }

    }


    return (

        <form onSubmit={handleSubmit} className="space-y-5 text-black">

            {/* LEAVE TYPE */}

            <Field label="Leave Type">

                <select
                    name="leave_type"
                    value={form.leave_type}
                    onChange={handleChange}
                    className="input"
                    required
                >

                    <option value="">Select leave type</option>

                    <option>Casual Leave</option>
                    <option>Sick Leave</option>
                    <option>Privilege Leave</option>

                </select>

            </Field>


            {/* TIMELINE */}

            <SectionTitle>
                Timeline
            </SectionTitle>


            <Grid2>

                <DateInput
                    label="From Date"
                    selected={
                        form.from_date
                            ? new Date(form.from_date)
                            : null
                    }
                    onChange={(date) =>
                        handleDateChange("from_date", date)
                    }
                />


                <DateInput
                    label="To Date"
                    selected={
                        form.to_date
                            ? new Date(form.to_date)
                            : null
                    }
                    onChange={(date) =>
                        handleDateChange("to_date", date)
                    }
                />

            </Grid2>


            {/* REASON */}

            <Field label="Reason">

                <textarea
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                    placeholder="Write reason..."
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

                Apply Leave

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


export default LeaveForm;