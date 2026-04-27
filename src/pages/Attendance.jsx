import { useEffect, useState, useRef } from "react";
import { SlidersHorizontal } from "lucide-react";

import { fetchAttendance } from "../services/attendanceService";

import GetAttendance from "../components/attendance/GetAttendance";
import AttendanceStats from "../components/attendance/AttendanceStats";
import { AttendanceLegend } from "../components/attendance/AttendanceLegend";

import Breadcrumb from "../ui/BreadCrumb";
import AttendanceTable from "../components/attendance/AttendanceTable";


function Attendance() {

  /* filters */
  const [filters, setFilters] = useState({
    start: "",
    end: ""
  });

  const popupRef = useRef();

  /* popup */
  const [showPopup, setShowPopup] = useState(false);


  /* backend data */
  const defaultSummary = {
    totalDays: 0,
    present: 0,
    absent: 0,
    late: 0,
    holiday: 0,
    attendancePercent: 0
  };

  const [records, setRecords] = useState([]);
  const [summary, setSummary] = useState(defaultSummary);


  /* load data */
  async function loadAttendance() {
    try {
      const data = await fetchAttendance(filters);
      setRecords(data.records);
      console.log("filters", filters);
      setSummary(data.summary ?? defaultSummary);
    }
    catch (err) {
      console.error("attendance fetch failed", err);
    }
  }


  /* initial load */
  useEffect(() => {
    loadAttendance();
    function handleClickOutside(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    }

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);



  /* filter search */
  function onSearch() {
    if (!filters.start || !filters.end) return;
    loadAttendance();
    setShowPopup(false);
  }



  return (

    <div className="
      bg-bgMain
      min-h-screen
      px-4
      sm:px-6
      lg:px-10
      xl:px-16
      py-4
      space-y-6
    ">

      {/* ROW 1 */}

      <Breadcrumb
        items={[
          { label: "Dashboard", path: "/dashboard" },
          { label: "Attendance", path: "/attendance" }
        ]}
      />


      {/* TITLE */}

      <div className="flex items-center justify-between">

        <h1 className="text-3xl font-black text-textMain tracking-tight">
          Attendance
        </h1>

        {/* FILTER BUTTON */}

        {/* <div className="relative" ref={popupRef}>
          <button
            onClick={() => setShowPopup(!showPopup)}
            className="
              p-2
              rounded-md
              border border-strong
              bg-bgCard
              hover:bg-primarySoft
            "
          >
            <SlidersHorizontal size={18} />
          </button>  */}

        <div className="relative" ref={popupRef}>
          <button
            onClick={() => setShowPopup(!showPopup)}
            className="
                btn-modern
                p-3
                rounded-xl
                
                bg-bgCard
                hover:bg-primarySoft

                flex items-center gap-2
                text-textMain
                shadow-md
              "
          >
            <SlidersHorizontal size={20} />
            <span className="hidden sm:inline font-bold text-xs uppercase tracking-widest">Filters</span>
          </button>


          {/* FILTER POPUP */}
          {showPopup && (
            <div className="
                absolute
                right-0
                top-12
                z-[1000]
                bg-bgCard
                border border-strong
                rounded-lg
                shadow-lg
                p-3
                w-[300px]
                sm:w-[340px]
              ">

              <GetAttendance filters={filters} setFilters={setFilters} onSearch={onSearch} />

            </div>

          )}

        </div>
      </div>



      {/* SEPARATOR */}

      <div className="border-b border-strong" />



      {/* STATUS LEGEND */}

      <AttendanceLegend />



      {/* TABLE + SUMMARY */}

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">

        {/* TABLE */}
        <div className="min-w-0">
          <AttendanceTable data={records} />
        </div>


        {/* SUMMARY (sticky) */}
        <div className="lg:sticky lg:top-24 h-fit">
          <AttendanceStats summary={summary} filters={filters} />
        </div>


      </div>


    </div>

  );

}

export default Attendance;