import { useState, useRef, useEffect } from "react";
import { User, LogOut, LayoutDashboard } from "lucide-react";


function UserDropdown() {

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);


  // close when clicking outside
  useEffect(() => {

    function handleClickOutside(event) {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {

        setOpen(false);

      }

    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);

  }, []);


  // temporary static user
  const user = {

    name: "Karan",
    email: "karan@iperitus.com",
    role: "ADMIN"

  };


  return (

    <div
      ref={dropdownRef}
      className="relative "
    >

      {/* avatar button */}
      <button
        onClick={() => setOpen(!open)}

        className="
          w-9
          h-9

          flex
          items-center
          justify-center

          rounded-full

          border
          border-strong

          bg-bgCard

          hover:bg-primarySoft
          cursor-pointer
          transition
        "
      >

        <User size={18} />

      </button>



      {/* dropdown panel */}

      {open && (

        <div
          className="
            absolute
            right-0
            mt-2

            w-64

            bg-bgCard

            border
            border-strong

            rounded-xl

            shadow-lg

            z-50
            cursor-pointer

          "
        >


          {/* user info */}

          <div className="p-3">

            <div className="text-sm font-medium">
              {user.name}
            </div>

            <div className="text-xs opacity-70">
              {user.email}
            </div>

          </div>


          <div className="border-t border-strong" />


          {/* dashboard */}

          <button
            className="
              w-full

              flex
              items-center
              gap-2

              px-3
              py-2

              text-sm

              hover:bg-primarySoft
              cursor-pointer
              transition
            "
          >

            <LayoutDashboard size={16} />

            Admin Dashboard

          </button>



          {/* logout */}

          <button
            className="
              w-full

              flex
              items-center
              gap-2

              px-3
              py-2

              text-sm

              text-danger

              hover:bg-dangerSoft
              cursor-pointer
              transition
            "
          >

            <LogOut size={16} />

            Sign out

          </button>


        </div>

      )}

    </div>

  );

}

export default UserDropdown;