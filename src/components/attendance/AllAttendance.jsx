// import { allData } from "./allData";
// import AttendanceTable from "./AttendanceTable";
// import GetAttendance from "./GetAttendance";

// function AllAttendance({ filters }) {

  

//   let filteredData = allData;

//   if(filters?.start && filters?.end){

//     filteredData = allData.filter(row => {

//       return (
//         row.date >= filters.start &&
//         row.date <= filters.end
//       );

//     });

//   }

//   return (

//     <div className="space-y-2">

//       {/* <h2 className="text-base font-medium">
//         Attendance Table
//       </h2> */}

//       <AttendanceTable data={filteredData} />

//     </div>

//   );

// }

// export default AllAttendance;



import AttendanceTable from "./AttendanceTable";


function AllAttendance({ data }){


  return(

    <div>

      <AttendanceTable data={data}/>

    </div>

  );

}


export default AllAttendance;