import DatePicker from "react-datepicker";
import { Calendar } from "lucide-react";

import "react-datepicker/dist/react-datepicker.css";

function DateInput({
  label,
  selected,
  onChange,
  className = ""
}) {

  return (

    <div className="flex flex-col w-full">

      {label && (
        <label className="form-label">
          {label}
        </label>
      )}


      <div className="relative w-full">

        <DatePicker

          selected={selected}

          onChange={onChange}

          dateFormat="yyyy-MM-dd"

          placeholderText="yyyy-mm-dd"

          popperPlacement="bottom-start"

          popperClassName="z-[9999]"

          className={`input h-[48px] pl-4 pr-10 font-bold tracking-tight ${className}`}
        />


        <Calendar

          size={15}

          className="
            absolute

            right-3
            top-1/2
            -translate-y-1/2

            opacity-60

            pointer-events-none
          "
        />

      </div>

    </div>

  );

}

export default DateInput;


