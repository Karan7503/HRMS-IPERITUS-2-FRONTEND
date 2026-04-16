import { useEffect } from "react";
import Footer from "../footer/Footer";

function SidePopup({ open, onClose, children, title }) {

  // close on ESC
  useEffect(() => {

    const handleEsc = (e) => {

      if (e.key === "Escape") onClose();

    };

    window.addEventListener("keydown", handleEsc);

    return () =>

      window.removeEventListener("keydown", handleEsc);

  }, [onClose]);


  if (!open) return null;


  return (

    <div className="fixed inset-0 z-50 flex justify-end">

      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="flex-1 bg-black/40 backdrop-blur-[1px]"
      />


      {/* PANEL */}
      <div
        className="
        w-[680px]
        max-w-full
        h-full
        bg-bgCard
        text-textMain
        border-l
        border-borderColor
        shadow-xl
        animate-slideIn

        flex
        flex-col
        "
      >

        {/* HEADER */}
        <div
          className="
          flex
          justify-between
          items-center

          px-6
          py-4

          border-b
          border-borderColor
          "
        >

          <h2 className="text-lg font-semibold">

            {title}

          </h2>


          <button
            onClick={onClose}
            className="
            px-3 py-1
            rounded-md
            bg-primarySoft
            hover:bg-primary
            hover:text-white
            transition
            "
          >

            ✕

          </button>

        </div>



        {/* CONTENT */}
        <div
          className="
          flex-1
          overflow-y-auto

          px-6
          py-6
          "
        >

          {children}

        </div>



        {/* FOOTER */}
        <Footer/>

      </div>

    </div>

  );

}

export default SidePopup;