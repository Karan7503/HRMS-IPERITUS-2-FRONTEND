function DateFilter({ label, name, filters, setFilters }) {

  return (

    <div className="flex flex-col w-45">

      <label
        className="
          text-base
          text-textMain
          mb-1
          opacity-70
        "
      >
        {label}
      </label>

      <input
        type="date"
        placeholder="yyyy-mm-dd"
        value={filters[name]}
        onChange={(e) =>
          setFilters({
            ...filters,
            [name]: e.target.value
          })
        }
        className="
          px-3
          py-2
          text-base
          w-42.5
          bg-bgMain
          border
          border-strong
          rounded-md
          text-textMain
          focus:outline-none
          focus:border-primary
        "
      />

    </div>

  );

}

export default DateFilter;