const RequestTableColumns = [

  {
    header: "Request No.",
    accessorKey: "request_no"
  },

  {
    header: "Owner",
    accessorKey: "owner"
  },

  {
    header: "Request For",
    accessorKey: "request_for"
  },

  {
    header: "User Status",
    accessorKey: "user_status",

    cell: ({ row }) => (

      <span
        className="
          px-2 py-0.5
          rounded-full
          text-xs
          font-medium
          bg-primarySoft
          text-primary
        "
      >
        {row.original.user_status}
      </span>

    )
  },

  {
    header: "Open Date",
    accessorKey: "open_date"
  },

  {
    header: "Closed Date",
    accessorKey: "closed_date"
  },

  {
    header: "Send To",
    accessorKey: "report_to"
  },

  {
    header: "Status",
    accessorKey: "response_status"
  },

  {
    header: "Active",
    accessorKey: "active",

    cell: ({ row }) => (

      <span
        className={`
          px-2 py-0.5
          rounded-full
          text-xs

          ${row.original.active
            ? "bg-success-soft text-success-strong"
            : "bg-rowAlt text-muted"}
        `}
      >
        {row.original.active ? "Yes" : "No"}
      </span>

    )
  }

];

export default RequestTableColumns;