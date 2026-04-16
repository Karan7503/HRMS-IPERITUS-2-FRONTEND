import Tabs from "../../ui/Tabs"
import AllAttendance from "./AllAttendance"
import GetAttendance from "./GetAttendance"



function AttendanceTabs() {

    const tabs = [

    {
      label: "All Attendance",
      content: <AllAttendance />
      

    },

    {
      label: "Get Attendance",
      content: <GetAttendance />
    }

  ];

  return <Tabs tabs={tabs}/>
}

export default AttendanceTabs