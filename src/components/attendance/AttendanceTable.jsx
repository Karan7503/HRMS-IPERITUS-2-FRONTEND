import DataTable from "../../ui/DataTable";

import {
  Eye,
  Pencil
} from "lucide-react";


function AttendanceTable({ data = [] }) {

  // map row background based on status
  const styledData = data.map(row => {

    let rowClass = "";

    if (row.status === "Holiday") {
      rowClass = "bg-green-50"; // light green
    }

    // if (row.status === "Weekly Off") {
    //   rowClass = "bg-red-50"; // light red
    // }

    if (row.status === "Weekly Off") {
      rowClass = "bg-primarySoft";
    }

    return {
      ...row,
      rowClass
    };

  });


  const columns = [

    {
      accessorKey: "date",
      header: () => (
        <div className="flex items-center gap-2">
          Date
        </div>
      ),
      size: 140
    },


    {
      accessorKey: "status",
      header: () => (
        <div className="text-center">
          Status
        </div>
      ),

      size: 120,
      cell: ({ row }) => {
        const value = row.original.status;
        const badgeClass =
          value === "Present"
            ? "badge-success"
            : value === "Absent"

              ? "badge-danger"
              : value === "Late"

                ? "badge-warning"
                : value === "Holiday"

                  ? "badge-neutral"
                  : "badge-neutral";

        return (
          <div className="flex justify-center">

            <span className={`
              min-w-[85px]
              px-2 py-1
              text-xs
              font-medium
              rounded-full
              text-center
              ${badgeClass}
            `}>
              {value}
            </span>

          </div>
        );
      }
    },


    {
      accessorKey: "inTime",
      header: () => (
        <div className="flex items-center justify-center gap-2">
          Time In
        </div>
      ),

      size: 110,
      cell: ({ row }) => (
        <div className="text-center tabular-nums">
          {row.original.inTime}
        </div>
      )
    },


    {
      accessorKey: "outTime",
      header: () => (
        <div className="text-center">
          Time Out
        </div>
      ),

      size: 110,
      cell: ({ row }) => (
        <div className="text-center tabular-nums">
          {row.original.outTime}
        </div>
      )
    },



    {
      accessorKey: "hours",
      header: () => (
        <div className="flex items-center justify-center gap-2">
          Hours
        </div>
      ),

      size: 80,
      cell: ({ row }) => (
        <div className="text-center font-medium tabular-nums">
          {row.original.hours}
        </div>
      )
    },


    {
      id: "actions",
      header: () => (
        <div className="text-center">
          Actions
        </div>
      ),

      size: 100,
      cell: () => (
        <div className="flex justify-center gap-2">
          <button className="icon-btn">
            <Eye size={14} />
          </button>

          <button className="icon-btn">
            <Pencil size={14} />
          </button>

        </div>
      )
    }
  ];


  return (
    <DataTable
      // data={data}
      data={styledData}
      columns={columns}
    />
  );
}

export default AttendanceTable;