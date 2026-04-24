import { useState } from "react";
import DateInput from "../../ui/DateInput";
import { useNavigate } from "react-router-dom";


function RequestForm({ onSubmit }) {

  const navigate = useNavigate();

  const [form, setForm] = useState({

    request_for: "",
    subject: "",
    comments: "",

    open_date: "",
    close_date: "",
    actual_close_date: "",

    user_status: "Open",
    request_status: "",

    active: true,
    report_to: ""

  });

  function handleChange(e) {

    const { name, value, type, checked } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    // redirect when conference selected
    if (name === "request_for" && value === "Conference") {

      navigate("/conference");

    }

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

    if (onSubmit) {
      onSubmit(form);
    }

  }

  return (

    <form onSubmit={handleSubmit} className="space-y-5 ">

      {/* REQUEST TYPE */}

      <Field label="Request Type">

        <select
          name="request_for"
          value={form.request_for}
          onChange={handleChange}
          className="input"
          required
        >

          <option value="">Select type</option>

          <option>Stationary</option>
          <option>IT</option>
          <option>Fault</option>
          <option>Library</option>
          <option>Leave</option>
          <option>Conference</option>

        </select>

      </Field>

      {/* SUBJECT */}
      <Field label="Subject">

        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Short description"
          className="input"
          required
        />

      </Field>

      {/* COMMENTS */}
      <Field label="Comments">

        <textarea
          name="comments"
          value={form.comments}
          onChange={handleChange}
          placeholder="Write details..."
          className="input min-h-[90px]"
        />

      </Field>


      {/* TIMELINE */}
      <SectionTitle>Timeline</SectionTitle>

      <Grid2>

        <DateInput
          label="Open Date"
          selected={
            form.open_date
              ? new Date(form.open_date)
              : null
          }
          onChange={(date) =>
            handleDateChange("open_date", date)
          }
        />


        <DateInput
          label="Close Date"
          selected={
            form.close_date
              ? new Date(form.close_date)
              : null
          }
          onChange={(date) =>
            handleDateChange("close_date", date)
          }
        />

      </Grid2>


      <DateInput
        label="Actual Closed Date"
        selected={
          form.actual_close_date
            ? new Date(form.actual_close_date)
            : null
        }
        onChange={(date) =>
          handleDateChange("actual_close_date", date)
        }
      />


      {/* STATUS */}

      <SectionTitle>Status</SectionTitle>

      <Grid2>

        <Field label="User Status">

          <select
            name="user_status"
            value={form.user_status}
            onChange={handleChange}
            className="input"
          >

            <option>Open</option>
            <option>In Progress</option>
            <option>Closed</option>

          </select>

        </Field>


        <Field label="Request Status">

          <input
            name="request_status"
            value={form.request_status}
            onChange={handleChange}
            placeholder="Internal status"
            className="input"
          />

        </Field>

      </Grid2>


      <Field label="Report To">

        <select
          name="report_to"
          value={form.report_to}
          onChange={handleChange}
          className="input"
        >

          <option value="">Select user</option>

          <option>Admin</option>
          <option>Manager</option>
          <option>HR</option>

        </select>

      </Field>


      {/* ACTIVE */}

      <div className="flex items-center gap-2">

        <input
          type="checkbox"
          name="active"
          checked={form.active}
          onChange={handleChange}
        />

        <label className="text-sm text-textMain">
          Active
        </label>

      </div>


      {/* SUBMIT */}

      <button
        className="
        btn-primary
        w-full
        mt-2
      ">
        Add Request
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


/* reusable grid */

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

export default RequestForm;