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
            className="flex items-center gap-3 relative"
        >

            {/* selected value field */}

            <div className="relative group">
                <input
                    readOnly
                    value={value}
                    onClick={() => setOpen(!open)}
                    className="
                      w-[150px]
                      h-[42px]
                      px-4
                      text-sm
                      font-medium
                      bg-bgCard
                      text-textMain
                      border border-strong
                      rounded-xl
                      cursor-pointer
                      focus:outline-none
                      transition-all
                      duration-300
                      tracking-tight
                      shadow-sm
                    "
                />
            </div>


            {/* filter icon button */}

            <button
                onClick={() => setOpen(!open)}
                className="
                  p-3
                  rounded-xl
                  bg-bgCard
                  text-textMain
                  hover:bg-primarySoft
                  hover:text-primary
                  transition-all
                  duration-300
                  shadow-md
                "
            >

                <SlidersHorizontal size={20} />

            </button>


            {/* dropdown */}

            {open && (

                <div
                    className="
                        absolute
                        right-0
                        top-[50px]
                        z-[100]
                        w-[180px]
                        bg-bgCard
                        border border-strong
                        rounded-xl
                        shadow-xl
                        overflow-hidden
                        animate-in fade-in zoom-in-95 duration-200
                    "
                >

                    {options.map(option => (

                        <div
                            key={option}

                            onClick={() => {

                                onChange(option);

                                setOpen(false);

                            }}

                            className={`
                                px-4 py-3
                                text-sm
                                font-medium
                                tracking-tight
                                cursor-pointer
                                transition-colors
                                ${value === option 
                                    ? "bg-primarySoft text-primary" 
                                    : "text-textMain hover:bg-bgMain hover:text-primary"}
                            `}
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