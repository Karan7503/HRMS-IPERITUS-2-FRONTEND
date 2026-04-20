import { SlidersHorizontal } from "lucide-react";
import { useState, useRef, useEffect } from "react";

function RequestFilter({ value, onChange }) {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {

        function handleClickOutside(e) {

            if (ref.current && !ref.current.contains(e.target)) {

                setOpen(false);

            }

        }

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener("mousedown", handleClickOutside);

    }, []);


    const options = [
        "All",
        "Stationary",
        "IT",
        "Library",
        "Fault",
        "Leave",
        "Conference"
    ];


    return (

        <div
            ref={ref}
            className="flex items-center gap-2 relative"
        >

            {/* selected value field */}

            <input
                readOnly
                value={value}

                className="
          w-[140px]
          h-[34px]

          px-3

          text-sm

          bg-bgCard
          text-textMain

          border border-strong

          rounded-md

          cursor-pointer

          focus:outline-none
          focus:border-primary
        "
            />


            {/* filter icon */}

            <button
                onClick={() => setOpen(!open)}

                className="
          p-2

          rounded-md

          border border-strong

          bg-bgCard

          hover:bg-primarySoft
          hover:text-primary

          transition
        "
            >

                <SlidersHorizontal size={16} />

            </button>


            {/* dropdown */}

            {open && (

                <div
                    className="
            absolute

            right-0
            top-10

            z-50

            w-[170px]

            bg-bgCard

            border border-strong

            rounded-md

            shadow-sm

            overflow-hidden
          "
                >

                    {options.map(option => (

                        <div
                            key={option}

                            onClick={() => {

                                onChange(option);

                                setOpen(false);

                            }}

                            className="
                px-3 py-2

                text-sm

                cursor-pointer

                text-textMain

                hover:bg-primarySoft
                hover:text-primary

                transition
              "
                        >

                            {option}

                        </div>

                    ))}

                </div>

            )}

        </div>

    );

}

export default RequestFilter;