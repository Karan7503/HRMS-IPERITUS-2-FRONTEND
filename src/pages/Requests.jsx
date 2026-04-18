import { Plus } from "lucide-react"
import { useState, useEffect } from "react"
import { fetchRequests, createRequest } from "../services/requestsService"

import BreadCrumb from './../ui/BreadCrumb';
import DataTable from "../ui/DataTable";
import SidePopup from "../ui/SidePopup";

import RequestForm from "../components/requests/RequestForm";
import RequestTableColumns from "../components/requests/RequestTableColumns";


function Requests() {

  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState([]);

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

        <div className="flex items-center justify-between w-full">

          <h1 className="
            text-xl
            font-semibold
            text-textMain
          ">
            My Requests
          </h1>

          <button
            onClick={() => setShowPopup(true)}
            className="
              btn-primary
              flex
              items-center
              gap-2
              whitespace-nowrap
              cursor-pointer
            "
          >
            <Plus size={16}/>
            Add Request
          </button>

        </div>

       <div className="max-w-4xl overflow-x-auto">
        <DataTable
          data={data}
          columns={RequestTableColumns}
          emptyMessage="No requests yet"
        />
      </div>

        <SidePopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        title="Add Request"
        width="500px"
      >
        <RequestForm onSubmit={handleAddRequest}/>
      </SidePopup>


    </div>
  )
}

export default Requests