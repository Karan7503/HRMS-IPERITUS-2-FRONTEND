import { useState, useRef, useEffect } from "react";
import { SlidersHorizontal } from "lucide-react";

import GetAttendance from "./GetAttendance";

function DateFilterPopup({
  filters,
  setFilters,
  onSearch
}) {

  const [open, setOpen] = useState(false);

  const ref = useRef();


  /* close when clicking outside */

  useEffect(() => {

    function handleClickOutside(e){

      if(
        ref.current &&
        !ref.current.contains(e.target)
      ){

        setOpen(false);

      }

    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

  }, []);



  const handleSearch = () => {

    onSearch();

    setOpen(false);

  };



  return (

    <div
      className="relative"
      ref={ref}
    >

      {/* filter button */}

      <button

        onClick={() => setOpen(!open)}

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

      {open && (

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
            onSearch={handleSearch}
          />

        </div>

      )}

    </div>

  );

}

export default DateFilterPopup;