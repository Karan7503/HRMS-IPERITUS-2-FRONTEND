const RequestTableColumns = [

  {
    id: "req",
    header: () => (
      <div className="text-center">
        Req
      </div>
    ),
    size: 60,

    cell: ({ row }) => (
      <div className="text-center font-medium tabular-nums">
        {row.index + 1}
      </div>
    )
  },



  {
    accessorKey: "owner",
    header: "Owner",
    size: 140
  },



  {
    accessorKey: "request_for",
    header: "Request For",
    size: 160
  },



  {
    accessorKey: "user_status",

    header: () => (
      <div className="text-center">
        User Status
      </div>
    ),

    size: 160,

    cell: ({ row }) => (
      <div className="flex justify-center">
        <span
          className="
          min-w-[95px]
          px-2 py-1
          text-sm
          font-medium
          rounded-full
          text-center
          bg-primarySoft
          text-primary
        ">
          {row.original.user_status}
        </span>
      </div>
    )
  },



  {
    accessorKey: "open_date",

    header: () => (
      <div className="text-center">
        Open Date
      </div>
    ),
    size: 140,
    cell: ({ row }) => (
      <div className="text-center tabular-nums">
        {row.original.open_date}
      </div>
    )
  },



  {
    accessorKey: "closed_date",
    header: () => (
      <div className="text-center">
        Closed Date
      </div>
    ),
    size: 140,
    cell: ({ row }) => (
      <div className="text-center tabular-nums">
        {row.original.closed_date || "-"}
      </div>
    )
  },



  {
    accessorKey: "report_to",
    header: "Send To",
    size: 150
  },



  {
    accessorKey: "response_status",
    header: () => (
      <div className="text-center">
        Status
      </div>
    ),
    size: 150,
    cell: ({ row }) => {
      const status = row.original.response_status;

      const badgeClass =
        status === "Approved"
          ? "badge-success"
          : "badge-warning";

      return (

        <div className="flex justify-center">

          <span
            className={`
            min-w-[95px]
            px-2 py-1
            text-xs
            font-medium
            rounded-full
            text-center
            ${badgeClass}
          `}
          >
            {status}
          </span>

        </div>

      );

    }
  },



  {
    accessorKey: "active",
    header: () => (
      <div className="text-center">
        Active
      </div>
    ),

    size: 120,
    cell: ({ row }) => (

      <div className="flex justify-center">

        <span
          className={`
          min-w-[70px]
          px-2 py-1
          text-xs
          font-medium
          rounded-full
          text-center

          ${row.original.active
              ? "badge-success"
              : "badge-neutral"}
        `}
        >

          {row.original.active ? "Yes" : "No"}

        </span>
      </div>
    )
  }

];

export default RequestTableColumns;