import { Pencil, Trash2, Clock, CheckCircle, XCircle } from "lucide-react";

const requestStatusConfig = {
    Approved: {
        color: "rgba(34,197,94,1)",
        icon: CheckCircle,
    },
    Pending: {
        color: "rgba(245,158,11,1)",
        icon: Clock,
    },
    Rejected: {
        color: "rgba(239,68,68,1)",
        icon: XCircle,
    },
};



// Main Table Columns
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
            const status = row.original.status; // ✅ FIXED

            const config = requestStatusConfig[status];

            if (!config) return <div className="text-center">-</div>;

            const Icon = config.icon;

            return (
                <div className="flex justify-center">
                    <div
                        className="flex items-center gap-2 px-3 py-1.5 rounded-xl border shadow-sm"
                        style={{
                            backgroundColor: config.color.replace("1)", "0.12)"),
                            borderColor: config.color.replace("1)", "0.35)"),
                        }}
                    >
                        <div
                            className="p-1 rounded-lg"
                            style={{
                                backgroundColor: config.color.replace("1)", "0.15)")
                            }}
                        >
                            <Icon size={12} color={config.color} />
                        </div>

                        <span
                            className="text-[10px] font-black uppercase tracking-widest"
                            style={{ color: config.color }}
                        >
                            {status}
                        </span>
                    </div>
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