import { useState } from "react";
import DateFilter from "../components/attendance/DateFilter";
import {
  WelcomeCard,
  QuickActions,
  SummaryCards
} from "../components/dashboard";


function Dashboard(){

  const [filters, setFilters] = useState({
    start: "",
    end: ""
  });

  return(

    <div
      className="
        bg-bgMain
        min-h-screen
        p-6
        space-y-6
      "
    >

      <WelcomeCard />

      {/* <QuickActions /> */}

      {/* <SummaryCards /> */}

    </div>

  );

}

export default Dashboard;