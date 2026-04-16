import AttendanceTable from "./AttendanceTable";
import GetAttendance from "./GetAttendance";


function AllAttendance({ filters }) {

  const allData = [

    {
      date: "2026-04-01",
      status: "Present",
      inTime: "09:00",
      outTime: "18:00",
      hours: 9
    },

    {
      date: "2026-04-02",
      status: "Absent",
      inTime: "-",
      outTime: "-",
      hours: 0
    },

    {
      date: "2026-04-05",
      status: "Present",
      inTime: "09:10",
      outTime: "18:05",
      hours: 8.9
    },
    {
      date: "2026-04-01",
      status: "Present",
      inTime: "09:00",
      outTime: "18:00",
      hours: 9
    },

    {
      date: "2026-04-02",
      status: "Absent",
      inTime: "-",
      outTime: "-",
      hours: 0
    },

    {
      date: "2026-04-05",
      status: "Present",
      inTime: "09:10",
      outTime: "18:05",
      hours: 8.9
    }

  ];

  let filteredData = allData;

  if(filters?.start && filters?.end){

    filteredData = allData.filter(row => {

      return (
        row.date >= filters.start &&
        row.date <= filters.end
      );

    });

  }

  return (

    <div className="space-y-2">

      <h2 className="text-base font-medium">
        Attendance Table
      </h2>

      <AttendanceTable data={filteredData} />

    </div>

  );

}

export default AllAttendance;

