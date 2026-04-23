const LeaveTableColumns = [

    // {
    //     accessorKey: "id",
    //     header: "S.No",
    //     cell: ({ row }) => row.index + 1
    // },
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
        accessorKey: "leaveType",
        header: "Type"
    },

    {
        accessorKey: "fromDate",
        header: "From"
    },

    {
        accessorKey: "toDate",
        header: "To"
    },

    {
        accessorKey: "days",
        header: "Days"
    },

    {
        accessorKey: "status",

        header: "Status",

        cell: ({ row }) => {

            const status = row.original.status;

            const style =
                status === "Approved"
                    ? "badge-success"
                    : status === "Pending"
                        ? "badge-warning"
                        : "badge-danger";

            return (

                <span className={`
        px-2
        py-1
        text-xs
        rounded-full
        ${style}
      `}>

                    {status}

                </span>

            );

        }

    },

    {
        id: "actions",

        header: "Actions",

        cell: ({ row }) => (

            <button className="
      px-2
      py-1
      text-xs
      border
      border-strong
      rounded
      hover:bg-primarySoft
    ">

                view

            </button>

        )

    }

];

export default LeaveTableColumns;