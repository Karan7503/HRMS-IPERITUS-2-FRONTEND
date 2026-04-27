import { Plus, Calendar } from "lucide-react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { fetchRequests, createRequest, updateRequest, deleteRequest } from "../services/requestsService"

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
  const [selectedRequest, setSelectedRequest] = useState(null);
  const navigate = useNavigate();


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



  // function to edit requests
  function handleEditClick(row) {
    setSelectedRequest(row);
    setShowPopup(true);
  }

  // function to delete requests
  async function handleDeleteClick(row) {

    const confirmDelete = window.confirm("Are you sure you want to delete this request?");

    if (!confirmDelete) return;

    try {
      console.log("Deleting ID", row.request_no);
      await deleteRequest(row.request_no);
      await loadRequests();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  }



  //Useffect to load requests
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

        <h1 className="text-3xl font-black text-textMain tracking-tight">
          Requests
        </h1>

        <div className="flex items-center gap-3">
          {/* <div className="w-[120px] flex justify-end"> */}

          <button
            onClick={() => navigate("/conference")}
            className="
              p-3
              rounded-xl
              bg-bgCard
              hover:bg-primarySoft
              flex items-center gap-2
              text-textMain
              shadow-md
              transition-all
            "
          >
            <Calendar size={20} />
            <span className="hidden sm:inline font-bold text-xs uppercase tracking-widest">Book Conference</span>
          </button>

          <button
            onClick={() => setShowPopup(true)}
            className="
              p-3
              rounded-xl
              bg-bgCard
              hover:bg-primarySoft
              flex items-center gap-2
              text-textMain
              shadow-md
              transition-all
            "
          >
            <Plus size={20} />
            <span className="hidden sm:inline font-bold text-xs uppercase tracking-widest">Add Request</span>
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
            columns={RequestTableColumns(handleEditClick, handleDeleteClick)}
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