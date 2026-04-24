import { Pencil, Trash2 } from "lucide-react";


const LeaveTableColumns = (onEdit, onDelete) => [

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



    // {
    //     accessorKey: "leaveType",
    //     header: "Type"
    // },

    // {
    //     accessorKey: "fromDate",
    //     header: "From"
    // },

    // {
    //     accessorKey: "toDate",
    //     header: "To"
    // },

    // {
    //     accessorKey: "days",
    //     header: "Days"
    // },

    // {
    //     accessorKey: "status",

    //     header: "Status",

    //     cell: ({ row }) => {

    //         const status = row.original.status;

    //         const style =
    //             status === "Approved"
    //                 ? "badge-success"
    //                 : status === "Pending"
    //                     ? "badge-warning"
    //                     : "badge-danger";

    //         return (

    //             <span className={`
    //             px-2
    //             py-1
    //             text-xs
    //             rounded-full
    //             ${style}
    //         `}>

    //                 {status}

    //             </span>

    //         );

    //     }

    // },

    // 1. Type column
    {
        accessorKey: "leaveType",
        header: () => <div className="text-center">Type</div>,
        cell: ({ row }) => (
            <div className="text-center">
                {row.original.leaveType}
            </div>
        )
    },
    // 2. From
    {
        accessorKey: "fromDate",
        header: () => <div className="text-center">From</div>,
        cell: ({ row }) => (
            <div className="text-center tabular-nums">
                {row.original.fromDate}
            </div>
        )
    },
    // 3. To
    {
        accessorKey: "toDate",
        header: () => <div className="text-center">To</div>,
        cell: ({ row }) => (
            <div className="text-center tabular-nums">
                {row.original.toDate}
            </div>
        )
    },
    // 4. Days
    {
        accessorKey: "days",
        header: () => <div className="text-center">Days</div>,
        cell: ({ row }) => (
            <div className="text-center">
                {row.original.days}
            </div>
        )
    },
    // 5. Status (important)
    {
        accessorKey: "status",
        header: () => <div className="text-center">Status</div>,
        cell: ({ row }) => {
            const status = row.original.status;

            const style =
                status === "Approved"
                    ? "badge-success"
                    : status === "Pending"
                        ? "badge-warning"
                        : "badge-danger";

            return (
                <div className="flex justify-center">
                    <span className={`px-2 py-1 text-xs rounded-full ${style}`}>
                        {status}
                    </span>
                </div>
            );
        }
    },




    {
        id: "actions",
        header: () => (
            <div className="text-center w-[90px]">
                Actions
            </div>
        ),
        size: 90,
        maxSize: 90,
        minSize: 90,
        meta: { align: "center" },

        cell: ({ row }) => (
            <div className="flex justify-center items-center gap-1 w-[90px]">

                <button
                    onClick={() => onEdit(row.original)}
                    className="
                    p-1
                    border border-strong
                    rounded
                    hover:bg-primarySoft
                    transition-colors
                    cursor-pointer
                    flex-shrink-0
                "
                >
                    <Pencil size={14} />
                </button>

                <button
                    onClick={() => onDelete(row.original)}
                    className="
                    p-1
                    border border-red-200
                    rounded
                    hover:bg-red-50
                    text-red-500
                    transition-colors
                    cursor-pointer
                    flex-shrink-0
                "
                >
                    <Trash2 size={14} />
                </button>

            </div>
        )
    }

];

export default LeaveTableColumns;