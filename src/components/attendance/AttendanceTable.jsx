import DataTable from "../../ui/DataTable";

import {
  Calendar,
  Clock,
  Timer,
  Eye,
  Pencil
} from "lucide-react";


function AttendanceTable({ data = [] }) {

  const columns = [

{
  accessorKey: "date",

  header: () => (

    <div className="flex items-center gap-2">

      {/* <Calendar size={14}/> */}
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

        <span
          className={`
            min-w-[85px]

            px-2 py-1

            text-xs
            font-medium

            rounded-full

            text-center

            ${badgeClass}
          `}
        >

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

      {/* <Clock size={14}/> */}
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
      {/* <Clock size={14}/> */}
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

      {/* <Timer size={14}/> */}
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

        <Eye size={14}/>

      </button>

      <button className="icon-btn">

        <Pencil size={14}/>

      </button>

    </div>

  )

}

];


  return (

    <DataTable
      data={data}
      columns={columns}
    />

  );

}

export default AttendanceTable;