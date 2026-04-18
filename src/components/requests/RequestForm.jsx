import { useState } from "react";

function RequestForm({ onSubmit }) {

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

  function handleChange(e){

    const { name, value, type, checked } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

  }

  function handleSubmit(e){

    e.preventDefault();

    console.log(form);

    if(onSubmit){
      onSubmit(form);
    }

  }

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      {/* AUTO FIELDS */}

      <Field label="Request No">
        <input
          className="input-disabled"
          value="AUTO GENERATED"
          disabled
        />
      </Field>


      <Field label="Requester">
        <input
          className="input-disabled"
          value="Current User"
          disabled
        />
      </Field>


      {/* REQUEST TYPE */}

      <Field label="Request For">

        <select
          name="request_for"
          value={form.request_for}
          onChange={handleChange}
          className="input"
          required
        >

          <option value="">Select request type</option>

          <option>Stationary</option>
          <option>IT</option>
          <option>Fault</option>
          <option>Library</option>
          <option>Leave</option>
          <option>Conference</option>

        </select>

      </Field>


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


      <Field label="Comments">

        <textarea
          name="comments"
          value={form.comments}
          onChange={handleChange}
          placeholder="Write details..."
          className="input min-h-[90px]"
        />

      </Field>


      {/* DATE SECTION */}

      <SectionTitle>
        Timeline
      </SectionTitle>


      <Grid2>

        <Field label="Open Date">

          <input
            type="date"
            name="open_date"
            value={form.open_date}
            onChange={handleChange}
            className="input"
          />

        </Field>


        <Field label="Close Date">

          <input
            type="date"
            name="close_date"
            value={form.close_date}
            onChange={handleChange}
            className="input"
          />

        </Field>

      </Grid2>


      <Field label="Actual Closed Date">

        <input
          type="date"
          name="actual_close_date"
          value={form.actual_close_date}
          onChange={handleChange}
          className="input"
        />

      </Field>


      {/* STATUS SECTION */}

      <SectionTitle>
        Status
      </SectionTitle>


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
        "
      >

        Add Request

      </button>

    </form>

  );

}


/* reusable field */

function Field({ label, children }){

  return(

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

function Grid2({ children }){

  return(

    <div className="grid grid-cols-2 gap-3">
      {children}
    </div>

  );

}


/* section title */

function SectionTitle({ children }){

  return(

    <p className="
    text-xs
    uppercase
    tracking-wide

    text-muted

    pt-2
    "
    >

      {children}

    </p>

  );

}

export default RequestForm;