import { useState, useRef, useEffect } from "react";
import { SlidersHorizontal } from "lucide-react";
import GetAttendance from "./GetAttendance";

function DateFilterPopup({
  filters,
  setFilters,
  onSearch
}) {

  const [open, setOpen] = useState(false);

  const wrapperRef = useRef(null);


  useEffect(() => {

    function handleClickOutside(e) {

      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {

        setOpen(false);

      }

    }

    

    // IMPORTANT: use capture phase
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



  function handleSearchClick() {

    onSearch();

    setOpen(false);

  }


  return (

    <div
      ref={wrapperRef}
      className="relative"
    >

      {/* FILTER BUTTON */}

      <button

        onClick={() => setOpen(prev => !prev)}

        className="
          p-2
          rounded-md
          border border-strong
          bg-bgCard
          hover:bg-primarySoft
        "
      >

        <SlidersHorizontal size={18}/>

      </button>



      {/* POPUP */}

      {open && (

        <div
          className="
            absolute
            right-0
            top-12

            z-[9999]

            bg-bgCard

            border border-strong

            rounded-lg

            shadow-lg

            p-4

            w-[300px]
            sm:w-[340px]
          "
        >

          <GetAttendance

            filters={filters}

            setFilters={setFilters}

            onSearch={handleSearchClick}

          />

        </div>

      )}

    </div>

  );

}

export default DateFilterPopup;