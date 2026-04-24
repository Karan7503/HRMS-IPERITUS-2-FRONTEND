import { Pencil, Trash2 } from "lucide-react";

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
          "
        >
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
      const badgeClass =
        status === "Approved" ? "badge-success" : "badge-warning";

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