import { useState } from "react";

function WelcomeCard({ name = "Karan", role = "admin" }) {

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
      className="
        bg-primaryGradient
        text-white

        rounded-2xl
        p-6

        flex items-center justify-between

        shadow-md
        shadow-[0_0_20px_rgba(var(--primary),0.25)]
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
          inline-flex items-center justify-center

          px-4 py-2
          w-fit

          rounded-xl
          bg-bgCard
          hover:bg-primarySoft

          text-textMain
          text-sm font-semibold tracking-wide

          shadow-md
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



// import { useState } from "react";

// function WelcomeCard({ name = "Karan", role = "admin" }) {

//   const [photo, setPhoto] = useState(null);

//   const today = new Date().toLocaleDateString(
//     "en-IN",
//     {
//       weekday: "long",
//       day: "numeric",
//       month: "long",
//       year: "numeric"
//     }
//   );

//   const handleUpload = (e) => {

//     const file = e.target.files[0];

//     if (file) {

//       setPhoto(URL.createObjectURL(file));

//     }

//   };

//   return (

//     <div
//       className="
 
//     text-white

//       rounded-2xl
//       p-6

//       flex items-center justify-between 
//       shadow-md
//       shadow-[0_0_20px_rgba(var(--primary),0.25)]
// "
//     >

//       {/* LEFT */}
//       <div className="flex flex-col gap-2 ">

//         <h2 className="text-2xl font-bold text-textMain">
//           Welcome back
//         </h2>

//         <p className="text-textMain font-bold mt-1 text-lg">
//           {name}
//         </p>

//         <p className="text-textMain font-normal text-lg">
//           {today}
//         </p>

//         <span
//         //   className="
//         //     mt-3
//         //     inline-block

//         //     text-textMain
//         //     text-lg
//         //     font-bold
//         //   "
//         // >
//         className="
//           mt-3
//           inline-flex items-center justify-center

//           px-4 py-2
//           w-fit

//           rounded-xl
//           bg-bgCard
//           hover:bg-primarySoft

//           text-textMain
//           text-sm font-semibold tracking-wide

//           shadow-md
//         ">

//           {role.toUpperCase()}

//         </span>

//       </div>


//       {/* RIGHT */}
//       <div className="flex flex-col items-center gap-2">

//         <div
//           className="
//             w-20 h-20
//             p-3
//             rounded-full

//             bg-bgMain
//             text-textMain

//             border border-borderColor
//             flex items-center justify-center
//             overflow-hidden
//             shadow-md
//           "
//         >

//           {photo
//             ? <img src={photo} className="w-full h-full object-cover" />
//             : <span className="text-xl font-semibold">{name.charAt(0)}</span>
//           }

//         </div>


//         <label
//           className="
//             text-xs

//             px-3 py-1.5

//             rounded-md

//             bg-bgMain
//             text-textMain

//             border border-borderColor

//             cursor-pointer

//             hover:bg-primarySoft

//             transition-colors
//           "
//         >

//           Edit

//           <input
//             type="file"
//             onChange={handleUpload}
//             className="hidden"
//           />

//         </label>

//       </div>

//     </div>

//   );

// }

// export default WelcomeCard;