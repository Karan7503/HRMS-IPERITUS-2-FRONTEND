import { Pencil, Trash2, CheckCircle, Clock, XCircle, Circle, CheckCircle2 } from "lucide-react";

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

const userStatusConfig = {
  Open: {
    color: "rgba(168,85,247,1)", // purple
    icon: Circle,
  },
  Closed: {
    color: "rgba(34,197,94,1)", // green
    icon: CheckCircle2,
  },
};

const activeConfig = {
  true: {
    label: "Yes",
    color: "rgba(34,197,94,1)", // green
    icon: CheckCircle,
  },
  false: {
    label: "No",
    color: "rgba(156,163,175,1)", // gray
    icon: XCircle,
  },
};

//Main Table Columns
const RequestTableColumns = (onEdit, onDelete) => [

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
    header: () => <div className="text-center">Owner</div>,
    size: 140,
    cell: ({ row }) => (
      <div className="text-center">
        {row.original.owner}
      </div>
    )
  },

  {
    accessorKey: "request_for",
    header: () => <div className="text-center">Request For</div>,
    size: 160,
    cell: ({ row }) => (
      <div className="text-center">
        {row.original.request_for}
      </div>
    )
  },

  {
    accessorKey: "user_status",
    header: () => (
      <div className="text-center">
        User Status
      </div>
    ),
    size: 160,
    cell: ({ row }) => {
      const status = row.original.user_status;
      const config = userStatusConfig[status];

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
    header: () => <div className="text-center">Send To</div>,
    size: 150,
    cell: ({ row }) => (
      <div className="text-center">
        {row.original.report_to}
      </div>
    )
  },

  {
    accessorKey: "request_status",
    header: () => <div className="text-center">Status</div>,
    size: 130,
    cell: ({ row }) => {
      const status = row.original.request_status;

      const config = requestStatusConfig[status];

      if (!config) return <div className="text-center">-</div>;

      const Icon = config.icon;

      return (
        <div className="flex justify-center">
          <div
            className="
              flex items-center gap-2 
              px-3 py-1.5
              rounded-xl 
              border
              shadow-sm
            "
            style={{
              backgroundColor: config.color.replace("1)", "0.12)"),
              borderColor: config.color.replace("1)", "0.35)"),
            }}
          >
            {/* Icon */}
            <div
              className="p-1 rounded-lg"
              style={{
                backgroundColor: config.color.replace("1)", "0.15)")
              }}
            >
              <Icon size={12} color={config.color} />
            </div>

            {/* Label */}
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
    accessorKey: "active",
    header: () => (
      <div className="text-center">
        Active
      </div>
    ),
    size: 120,
    cell: ({ row }) => {
      const value = row.original.active;
      const config = activeConfig[value];

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
              {config.label}
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

export default RequestTableColumns;