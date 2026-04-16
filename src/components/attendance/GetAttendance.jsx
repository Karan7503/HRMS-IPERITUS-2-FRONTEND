import DateInput from "../../ui/DateInput"


function GetAttendance({
        filters,
        setFilters,
        onSearch
    }) {

  

  return (
    
    // bg-bgCard
    // border
    // border-strong
    // attendance date-filter card container
    <div
    className="
    
    p-3
    rounded-lg

        flex
        items-end
        gap-2
        "
        >

     
      
      <DateInput 
        label = "From"
        selected={
          filters.start
            ? new Date(filters.start)
            : null
        }

        onChange={(date) => 
          setFilters({
            ...filters,
            start: date.toISOString().split("T")[0]
          })
        }
      />


      <DateInput
        label="To"
        selected={
          filters.end
            ? new Date(filters.end)
            : null
        }

        onChange={(date) =>
          setFilters({
            ...filters,
            end: date.toISOString().split("T")[0]
          })
        }
      />
        

      <button
        onClick={onSearch}

        className="
          h-[36px]

          px-3
          bg-primary
          text-white

          rounded-md

          hover:bg-primaryHover
          cursor-pointer
          transition
        "
      >
        Search
      </button>

    </div>

  );

}

export default GetAttendance;


