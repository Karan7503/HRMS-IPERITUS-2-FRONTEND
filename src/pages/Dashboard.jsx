import { useState } from "react";
import {
  WelcomeCard,
  QuickActions,
  SummaryCards,
  AttendanceStats
} from "../components/dashboard";


function Dashboard() {

  const [filters, setFilters] = useState({
    start: "",
    end: ""
  });

  return (

    <div
      className="
        bg-bgMain
        min-h-screen
        p-6
        space-y-6
      "
    >

      <WelcomeCard />

      <AttendanceStats filters={filters} />

      {/* <QuickActions /> */}

      {/* <SummaryCards /> */}



    </div>

  );

}

export default Dashboard;