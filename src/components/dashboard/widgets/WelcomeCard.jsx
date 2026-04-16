import { useState } from "react";

function WelcomeCard({ name = "Karan", role = "admin" }) {

  const [photo,setPhoto] = useState(null);

  const today = new Date().toLocaleDateString(
    "en-IN",
    {
      weekday:"long",
      day:"numeric",
      month:"long",
      year:"numeric"
    }
  );

  const handleUpload = (e) => {

    const file = e.target.files[0];

    if(file){

      setPhoto(URL.createObjectURL(file));

    }

  };

  return(

    <div
      className="
        bg-primary
        text-white

        rounded-2xl

        p-6

        flex
        items-center
        justify-between

        shadow-md
      "
    >

      {/* LEFT */}
      <div>

        <h2 className="text-2xl font-semibold">
          Welcome back 👋
        </h2>

        <p className="text-white/80 mt-1">
          {name}
        </p>

        <p className="text-white/70 text-sm">
          {today}
        </p>

        <span
          className="
            mt-3
            inline-block

            text-xs
            font-medium

            px-3 py-1

            rounded-full

            bg-white/20
            border border-white/30
          "
        >

          {role.toUpperCase()}

        </span>

      </div>


      {/* RIGHT */}
      <div className="flex flex-col items-center gap-2">

        <div
          className="
            w-20 h-20

            rounded-full

            bg-white/20

            flex items-center justify-center

            border border-white/30

            overflow-hidden
          "
        >

          {photo
            ? <img src={photo} className="w-full h-full object-cover"/>
            : <span className="text-xl font-semibold">{name.charAt(0)}</span>
          }

        </div>


        <label
          className="
            text-xs

            px-3 py-1

            rounded-md

            bg-white/20

            cursor-pointer

            hover:bg-white/30
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