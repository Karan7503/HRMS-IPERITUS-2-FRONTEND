import { useState } from "react";
import { motion } from "framer-motion";

function WelcomeCard({ name = "Karan", role = "Employee" }) {

  const [photo, setPhoto] = useState(null);

  const today = new Date().toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );

  const handleUpload = (e) => {

    const file = e.target.files[0];

    if (file) {

      setPhoto(URL.createObjectURL(file));

    }

  };

  return (

    <div
      style={{
        backgroundColor: "var(--welcome-bg)",
        boxShadow: "var(--welcome-shadow)",
        borderColor: "var(--welcome-border)"
      }}
      className="
        rounded-[2rem]
        p-8
        flex items-center justify-between
        border
        relative overflow-hidden
      "
    >


      {/* LEFT */}
      <div className="flex flex-col gap-2 ">

        {/* <h2 className="text-2xl font-bold text-textMain">
          Welcome back
        </h2> */}

        <motion.h2
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          whileHover={{ letterSpacing: "0.5px", opacity: 0.9 }}
          className="text-[1.75rem] font-extrabold text-textMain tracking-tighter transition-all duration-300"
        >
          Welcome back
        </motion.h2>

        <p className="text-textMain font-bold mt-1 text-xl tracking-tight">
          {name}
        </p>

        <p className="text-textMain font-medium text-lg tracking-tight opacity-80">
          {today}
        </p>

        <span

          className="
          mt-3
          inline-flex items-center justify-center

          px-4 py-2
          w-fit

          rounded-xl
          text-textMain
          text-sm font-semibold tracking-wide
          
          hover:bg-primarySoft
          shadow-md
        ">

          {role.toUpperCase()}
        </span>

      </div>


      {/* RIGHT */}
      <div className="flex flex-col items-center gap-2">

        <div
          className="
            w-20 h-20
            p-3
            rounded-full

            bg-bgMain
            text-textMain

            border border-borderColor
            flex items-center justify-center
            overflow-hidden
            shadow-md
          "
        >

          {photo
            ? <img src={photo} className="w-full h-full object-cover" />
            : <span className="text-xl font-semibold">{name.charAt(0)}</span>
          }

        </div>


        <label
          className="
            text-xs

            px-3 py-1.5

            rounded-md

            bg-bgMain
            text-textMain

            border border-borderColor

            cursor-pointer

            hover:bg-primarySoft

            transition-colors
          "
        >

          Edit

          <input
            type="file"
            onChange={handleUpload}
            className="hidden"
          />

        </label>

      </div>

    </div>

  );

}

export default WelcomeCard;