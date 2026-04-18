import DatePicker from "react-datepicker";
import { Calendar } from "lucide-react";

import "react-datepicker/dist/react-datepicker.css";

function DateInput({
  label,
  selected,
  onChange
}) {

  return (

    <div className="flex flex-col w-full">

      <label
        className="
          text-sm
          text-textMain
          opacity-70
          mb-1
        "
      >

        {label}

      </label>


      <div className="relative w-full">

        <DatePicker

          selected={selected}

          onChange={onChange}

          dateFormat="yyyy-MM-dd"

          placeholderText="yyyy-mm-dd"

          popperPlacement="bottom-start"

          popperClassName="z-[9999]"

          className="
            w-full

            h-[36px]

            pl-3 pr-9

            text-sm

            bg-bgMain
            text-textMain

            border border-strong

            rounded-md

            focus:outline-none
            focus:border-primary
          "
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