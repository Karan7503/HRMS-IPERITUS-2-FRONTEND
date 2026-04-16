import DataTable from "../../ui/DataTable";
import {
  Calendar,
  Clock,
  Timer,
  CheckCircle2,
  XCircle,
  Eye,
  Pencil
} from "lucide-react";

function StatusBadge({ status }) {

  const styles = {

    Present: `
      bg-primarySoft
      text-primary
    `,

   
    Absent: `
      bg-primarySoft
      text-textMain
      opacity-70
    `
  };

  return (

    <span
      className={`
        px-2.5
        py-1

        text-xs
        font-medium

        rounded-md

        ${styles[status]}
      `}
    >

      {status}

    </span>

  );

}


function AttendanceTable({ data = [] }) {

  const columns = [

    // {
    //   accessorKey: "date",
    //   header: "Date",
    //   cell: ({ row }) => (

    //     <span className="font-medium">

    //       {row.original.date}

    //     </span>

    //   )
    // },

        {
      accessorKey: "date",
      header: () => (

        <div className="flex items-center gap-2">

          <Calendar size={14}/>

          Date

        </div>

      )
    },


    {
      accessorKey: "status",
      header: "Status",
       cell: ({ row }) => {

        const value = row.original.status;
        
        // const badgeClass =
        // value === "Present"
        //   ? `
        //     bg-successSoft
        //     text-success
        //     border
        //     border-success/20
        //   `
        //   : `
        //     bg-dangerSoft
        //     text-danger
        //     border
        //     border-danger/20
        //   `;

        const badgeClass =
        value === "Present"
          ? "badge-success"
          : "badge-danger";

        return (

          <span
            className={`
              inline-flex
              items-center
              gap-1

              px-2.5
              py-1

              text-xs
              font-medium

              rounded-full

              ${badgeClass}
            `}
          >
            {value}
          </span>
        );
      }
    },

    // {
    //   accessorKey: "inTime",
    //   header: "Time In"
    // },

    {
      accessorKey: "inTime",
      header: () => (

        <div className="flex items-center gap-2">

          <Clock size={14}/>

          Time In

        </div>

      )
    },

    {
      accessorKey: "outTime",
      header: "Time Out"
    },

    // {
    //   accessorKey: "hours",
    //   header: "Hours"
    // }

    {
      accessorKey: "hours",
      header: () => (

        <div className="flex items-center gap-2">
          <Timer size={14}/>
          Hours
        </div>
      )
    },


    ////////////////////////////

     {
    id: "actions",

    header: "Actions",

    cell: () => (

      <div className="flex gap-2">

        <button
          className="
            p-1.5
            rounded-md
            bg-primarySoft
            hover:bg-primarySoft/70
            transition
          "
        >
          <Eye size={14}/>
        </button>

        <button
          className="
            p-1.5
            rounded-md
            bg-warningSoft
            hover:bg-warningSoft/70
            transition
          "
        >
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
      emptyMessage="No attendance found"
    />

  );

}

export default AttendanceTable;