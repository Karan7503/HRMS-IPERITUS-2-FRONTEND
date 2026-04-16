import RequestTable from "./RequestTable"


function ManageRequests() {

  return (

    <div
      className="
        bg-bgCard
        p-4
        rounded-lg
        border
        border-borderColor
        space-y-4
      "
    >

      <h2 className="text-lg">
        Manage Requests
      </h2>

      <p className="text-lg opacity-70">
        View and manage employee requests.
      </p>

      <RequestTable />

    </div>
  )
}

export default ManageRequests