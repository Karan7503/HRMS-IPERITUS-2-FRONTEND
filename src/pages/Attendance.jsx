import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import GetAttendance from './../components/attendance/GetAttendance';
import AllAttendance from './../components/attendance/AllAttendance';



function Attendance() {

    const [filters, setFilters] = useState({
    start: "",
    end: ""
  });

  const [showFiltered, setShowFiltered] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
 
  const onSearch = () => {

    if(filters.start && filters.end){

      setShowFiltered(true);

      setShowPopup(false);

    }

  };
  


  return (

    <div
      className="
        bg-bgMain 
        min-h-screen 
        p-6 
        space-y-6
        text-textMain
      "
    >
      {/* header */}

        <div
          className="
            flex
            items-center
            justify-between
          "
        >

          <h1
            className="
              text-lg
              font-semibold
            "
          >
            Attendance
          </h1>

           {/* filter icon */}

        <div className="relative">

          <button

            onClick={() => setShowPopup(!showPopup)}

            className="
              p-2

              rounded-md

              border
              border-strong

              bg-bgCard

              hover:bg-primarySoft
              hover:text-primary

              transition
            "
          >

            <SlidersHorizontal size={18} />

          </button>

          {/* popup */}

          {showPopup && (

            <div
              className="
                absolute
                right-0
                top-11
                z-50
                bg-bgCard
                border
                border-strong
                rounded-lg
                shadow-lg
                p-3
                card-soft
              "
            >
              <GetAttendance
                filters={filters}
                setFilters={setFilters}
                onSearch={onSearch}
              />
            </div>
          )}

        </div>

        {/* <GetAttendance
        filters={filters}
        setFilters={setFilters}
        onSearch={onSearch}
      />  */}
{/* 
         <AllAttendance 
          filters={showFiltered 
          ? filters : null} /> */}


    </div>

    {/* table */}

      <AllAttendance
        filters={
          showFiltered
            ? filters
            : null
        }
      />

    </div>
  );

}

export default Attendance;