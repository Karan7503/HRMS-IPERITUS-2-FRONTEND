// import DataTable from "../../ui/DataTable";
// import {AttendanceLegend, LegendItem} from "./AttendanceLegend";

// import {
//   Eye,
//   Pencil,
//   Calendar
// } from "lucide-react";


// function AttendanceTable({ data = [] }) {

//   // map row background based on status
//   const styledData = data.map(row => {

//     let rowClass = "";

//     if (row.status === "Holiday") {
//       rowClass = "bg-green-50"; // light green
//     }

//     // if (row.status === "Weekly Off") {
//     //   rowClass = "bg-red-50"; // light red
//     // }

//     if (row.status === "Weekly Off") {
//       rowClass = "bg-primarySoft";
//     }

//     return {
//       ...row,
//       rowClass
//     };

//   });


//   const columns = [

//     // {
//     //   accessorKey: "date",
//     //   header: () => (
//     //     <div className="flex items-center gap-2">
//     //       Date
//     //     </div>
//     //   ),
//     //   size: 140
//     // },

//     {
//       accessorKey: "date",
//       header: () => (
//         <div className="">
//           Date
//         </div>
//       ),
//       size: 140,

//       cell: ({ row }) => (
//         <div className="
//           font-semibold 
//           text-[15px] 
//           text-textMain 
//           tracking-tight
//         ">
//           {row.original.date}
//         </div>
//       )
//     },

//     {
//       accessorKey: "status",
//       header: () => (
//         <div className="text-center">
//           Status
//         </div>
//       ),

//       size: 120,
//       cell: ({ row }) => {
//         const value = row.original.status;
//         // const badgeClass =
//         //   value === "Present"
//         //     ? "badge-success"
//         //     : value === "Absent"

//         //       ? "badge-danger"
//         //       : value === "Late"

//         //         ? "badge-warning"
//         //         : value === "Holiday"


//         //           ? "badge-neutral"
//         //           : "badge-neutral";

//         return (
//           <div className="flex justify-center">

//             {/* <span className={`
//               min-w-[85px]
//               px-2 py-1
//               text-xs
//               font-medium
//               rounded-full
//               text-center
//               ${badgeClass}
//             `}>
//               {value}
//             </span> */}

//             {/* <LegendItem  label={value}  style="summary-primary" icon={Calendar}/> */}

//           </div>
//         );
//       }
//     },


//     {
//       accessorKey: "inTime",
//       header: () => (
//         <div className="flex items-center justify-center gap-2">
//           Time In
//         </div>
//       ),

//       size: 110,
//       cell: ({ row }) => (
//         <div className="text-center tabular-nums">
//           {row.original.inTime}
//         </div>
//       )
//     },


//     {
//       accessorKey: "outTime",
//       header: () => (
//         <div className="text-center">
//           Time Out
//         </div>
//       ),

//       size: 110,
//       cell: ({ row }) => (
//         <div className="text-center tabular-nums">
//           {row.original.outTime}
//         </div>
//       )
//     },



//     {
//       accessorKey: "hours",
//       header: () => (
//         <div className="flex items-center justify-center gap-2">
//           Hours
//         </div>
//       ),

//       size: 80,
//       cell: ({ row }) => (
//         <div className="text-center font-medium tabular-nums">
//           {row.original.hours}
//         </div>
//       )
//     },


//     // {
//     //   id: "actions",
//     //   header: () => (
//     //     <div className="text-center">
//     //       Actions
//     //     </div>
//     //   ),

//     //   size: 100,
//     //   cell: () => (
//     //     <div className="flex justify-center gap-2">
//     //       <button className="icon-btn">
//     //         <Eye size={14} />
//     //       </button>

//     //       <button className="icon-btn">
//     //         <Pencil size={14} />
//     //       </button>

//     //     </div>
//     //   )
//     // }
//   ];


//   return (
//     <DataTable
//       // data={data}
//       data={styledData}
//       columns={columns}
//     />
//   );
// }

// export default AttendanceTable;



import DataTable from "../../ui/DataTable";
import {AttendanceLegend, LegendItem} from "./AttendanceLegend";

import {
  Eye,
  Pencil,
  CheckCircle, XCircle, Clock, Coffee, Calendar 
} from "lucide-react";

const statusConfig = {
  Present: {
    style: "summary-success",
    icon: CheckCircle,
  },
  Absent: {
    style: "summary-danger",
    icon: XCircle,
  },
  Late: {
    style: "summary-warning",
    icon: Clock,
  },
  Holiday: {
    style: "summary-neutral",
    icon: Coffee,
  },
  "Weekly Off": {
    style: "summary-primary",
    icon: Calendar,
  },
};

function AttendanceTable({ data = [] }) {

  // map row background based on status
  const styledData = data.map(row => {

    let rowClass = "";

    if (row.status === "Holiday") {
      rowClass = "bg-green-50"; // light green
    }


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
        <div className="">
          Date
        </div>
      ),
      size: 140,

      cell: ({ row }) => (
        <div className="
          font-medium
          text-[15px] 
          text-textMain 
          tracking-tight
        ">
          {row.original.date}
        </div>
      )
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

      // ✅ if no status → return empty
      if (!value) {
        return <div className="text-center">-</div>;
      }

      const config = statusConfig[value];

      // extra safety (if unknown value)
      if (!config) {
        return <div className="text-center">{value}</div>;
      }

      return (
        <div className="flex justify-center">
          <LegendItem
            label={value}
            style={config.style}
            icon={config.icon}
          />
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