import DateInput from "../../ui/DateInput";

function GetAttendance({
  filters,
  setFilters,
  onSearch
}) {

  return (

    <div
      className="
        flex
        flex-wrap
        items-end
        gap-3
      ">

      <div className="flex-1 min-w-[130px]">

        <DateInput
          label="From"
          selected=
          {
            filters.start
              ? new Date(filters.start)
              : null
          }
          onChange={(date) =>
            setFilters({
              ...filters,
              start:
                date.toISOString().split("T")[0]
            })
          }
        />

      </div>


      <div className="flex-1 min-w-[130px]">

        <DateInput
          label="To"
          selected=
          {
            filters.end
              ? new Date(filters.end)
              : null
          }
          onChange={(date) =>
            setFilters({
              ...filters,
              end:
                date.toISOString().split("T")[0]
            })
          }
        />
      </div>


      <button

        onClick={onSearch}
        className="
          h-[36px]
          px-4
          bg-primary
          text-white
          rounded-md
          hover:bg-primaryHover
      ">

        Search

      </button>

    </div>

  );

}

export default GetAttendance;