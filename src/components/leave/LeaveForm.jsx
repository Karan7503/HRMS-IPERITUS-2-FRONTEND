import { useState } from "react";
import DateInput from "../../ui/DateInput";
import CustomSelect from "../../ui/CustomSelect";


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

            <CustomSelect
                label="Leave Type"
                name="leave_type"
                value={form.leave_type}
                onChange={handleChange}
                options={[
                    "Casual Leave",
                    "Sick Leave",
                    "Privilege Leave"
                ]}
                placeholder="Choose leave category"
                required
            />


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
                    placeholder="Please describe the reason for your leave request..."
                    className="input min-h-[120px]"
                />

            </Field>


            {/* SUBMIT */}

            <button
                className="btn-primary w-full h-[48px] mt-4"
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


export default LeaveForm;