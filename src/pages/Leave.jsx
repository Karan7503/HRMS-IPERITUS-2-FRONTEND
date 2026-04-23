import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import BreadCrumb from "../ui/BreadCrumb";
import DataTable from "../ui/DataTable";
import SidePopup from "../ui/SidePopup";


import LeaveLegend from "../components/leave/LeaveLegend";
import LeaveStats from "../components/leave/LeaveStats";
import LeaveForm from "../components/leave/LeaveForm";
import LeaveTableColumns from "../components/leave/LeaveTableColumns";
import { fetchLeaves, applyLeave } from "../services/leaveService";

function Leave() {

  const [showPopup, setShowPopup] = useState(false);

  const [leaveRecords, setLeaveRecords] = useState([])

  useEffect(() => {
    loadLeaves();
  }, []);

  async function loadLeaves() {
    try {
      const leaves = await fetchLeaves();
      setLeaveRecords(leaves || []);
    } catch (err) {
      console.error("Failed to load leaves:", err);
    }
  }


  async function handleApplyLeave(formData) {

    try {

      const payload = {
        leaveType: formData.leave_type,
        fromDate: formData.from_date,
        toDate: formData.to_date,
        reason: formData.reason
      };

      const res = await applyLeave(payload);

      console.log("API response:", res);

      setShowPopup(false);

      await loadLeaves();

    } catch (err) {
      console.error("Failed to apply leave:", err);
    }
  }


  return (

    <div className="
      bg-bgMain
      min-h-screen
      px-4
      sm:px-6
      lg:px-10
      xl:px-16
      py-4
      space-y-6
    ">


      {/* breadcrumb */}

      <BreadCrumb
        items={[
          { label: "Dashboard", path: "/dashboard" },
          { label: "Leave", path: "/leave" }
        ]}
      />


      {/* header */}

      <div className="flex items-center justify-between">

        <h1 className="
          text-xl
          sm:text-2xl
          font-semibold
          text-textMain
        ">
          Leave
        </h1>


        <button
          onClick={() => setShowPopup(true)}
          className="
            p-2
            rounded-md
            border border-strong
            bg-bgCard
            hover:bg-primarySoft
          "
        >
          <Plus size={18} />
        </button>

      </div>


      <div className="border-b border-strong" />

      {/* LEGEND  */}

      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-2
        "
      >

        <LeaveLegend />

      </div>


      {/* TABLE */}
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">

        <div className="min-w-0">

          <DataTable
            data={leaveRecords}
            columns={LeaveTableColumns}
            emptyMessage="No leave applied"
          />

        </div>


        {/* SUMMARY */}
        <div className="lg:sticky lg:top-24 h-fit">

          <LeaveStats records={leaveRecords} />

        </div>

      </div>


      {/* popup */}

      <SidePopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        title="Apply Leave"
        width="420px"
      >

        <LeaveForm onSubmit={handleApplyLeave} />

      </SidePopup>


    </div>

  );

}

export default Leave;