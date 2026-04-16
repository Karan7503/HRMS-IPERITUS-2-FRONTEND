import { useState } from "react";
import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";

function DateRangePicker({ filters, setFilters }) {

  const [range, setRange] = useState({
    from: filters.start ? new Date(filters.start) : undefined,
    to: filters.end ? new Date(filters.end) : undefined
  });

  const handleSelect = (selectedRange) => {

    setRange(selectedRange);

    if(selectedRange?.from && selectedRange?.to){

      setFilters({

        start: selectedRange.from.toISOString().split("T")[0],
        end: selectedRange.to.toISOString().split("T")[0]

      });

    }

  };

  return (

    <div
      className="
        bg-bgCard
        border
        border-borderColor

        rounded-lg

        p-3

        text-textMain
      "
    >

      <DayPicker

        mode="range"

        selected={range}

        onSelect={handleSelect}

        numberOfMonths={2}

        showOutsideDays

        className="text-sm"

      />

    </div>

  );

}

export default DateRangePicker;