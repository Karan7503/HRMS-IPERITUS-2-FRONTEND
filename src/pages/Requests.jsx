import { Plus } from "lucide-react"
import { useState, useEffect } from "react"
import { fetchRequests, createRequest } from "../services/requestsService"

import BreadCrumb from './../ui/BreadCrumb';
import DataTable from "../ui/DataTable";
import SidePopup from "../ui/SidePopup";

import RequestForm from "../components/requests/RequestForm";
import RequestTableColumns from "../components/requests/RequestTableColumns";
import RequestFilter from "../components/requests/RequestFilter";
import RequestStats from "../components/requests/RequestStats";
import RequestLegend from "../components/requests/RequestLegend";



function Requests() {

  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState([]);
  const [typeFilter, setTypeFilter] = useState("All");

  async function loadRequests() {
    try {
      const response = await fetchRequests();
      setData(response.records || []);
    } catch (err) {
      console.error("Failed to load requests:", err);
    }
  }

  async function handleAddRequest(formData) {
    try {
      await createRequest(formData);
      setShowPopup(false);
      loadRequests(); // Refresh the table
    } catch (err) {
      console.error("Failed to create request:", err);
    }
  }

  const filteredData =
    typeFilter === "All"
      ? data
      : data.filter(
        r => r.request_for === typeFilter
      );

  useEffect(() => {
    loadRequests();
  }, []);

  return (
    <div
      className="
        bg-bgMain
        min-h-screen
        px-4
        sm:px-6
        lg:px-10
        xl:px-16
        py-4
        space-y-6
      "
    >

      <BreadCrumb
        items={[
          { label: "Dashboard", path: "/dashboard" },
          { label: "Requests", path: "/requests" }
        ]}
      />

      {/* TITLE */}

      <div className="flex items-center justify-between ">

        <h1 className="
          text-xl
          sm:text-2xl
          font-semibold
          text-textMain
          ">
          My Requests
        </h1>

        <div className="relative">
          {/* <div className="w-[120px] flex justify-end"> */}

          <button
            onClick={() => setShowPopup(true)}
            title="Add Request"
            className="
              p-2
              rounded-md
              border border-strong
              bg-bgCard
              hover:bg-primarySoft
              hover:text-primary
              transition
              cursor-pointer
          ">
            <Plus size={18} />
          </button>

        </div>

      </div>

      {/* SEPARATOR */}

      <div className="border-b border-strong" />


      {/* STATUS LEGEND + Filter */}

      {/* STATUS LEGEND + FILTER */}

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

        {/* <AttendanceLegend /> */}
        <RequestLegend />

        <RequestFilter
          value={typeFilter}
          onChange={setTypeFilter}
        />

      </div>


      {/* TABLE + SUMMARY */}

      <div
        className="
        grid
        gap-6

        lg:grid-cols-[minmax(0,1fr)_300px]
      "
      >

        {/* TABLE */}
        <div className="min-w-0">

          <DataTable
            data={filteredData}
            columns={RequestTableColumns}
            emptyMessage="No requests yet"
          />

        </div>


        {/* SUMMARY */}
        <div className="lg:sticky lg:top-24 h-fit">

          <RequestStats data={filteredData} />

        </div>

      </div>




      <SidePopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        title="Add Request"
        width="500px"
      >
        <RequestForm onSubmit={handleAddRequest} />
      </SidePopup>




    </div>
  )
}

export default Requests