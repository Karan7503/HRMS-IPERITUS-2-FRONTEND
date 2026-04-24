// import React, { useState } from "react";
// import logo from "../assets/IPeritusLogo.png"


// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const loginUser = () => {

//     }
//   return (
//     <div
//       className="
//       flex
//       items-center
//       justify-center

//       min-h-[calc(100vh-4rem-3rem)]
//       bg-bgMain

//     "
//     >
//       <div
//         className="
//                 bg-bgCard

//                 text-textMain
//                 p-8
//                 rounded-2xl
//                 w-full max-w-md
//                 shadow-md
//               "
//         >
//         {/* LOGO */}
//         <img
//           src={logo}
//           alt="Peritus Logo"
//           className="h-10 mx-auto mb-12 mt-4"
//         />
//         {/* className="h-14 mx-auto mb-10 mt-4" */}

//         {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//                   HRMS Login
//                 </h2> */}

//         <div className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             autoComplete="off"
//             className="
//                       w-full
//                       px-4 py-2
//                       bg-bgMain
//                       text-textMain
//                       border
//                       border-borderColor
//                       focus:outline-none
//                       focus:border-borderColor
//                       rounded-lg"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             autoComplete="new-password"
//             className="
//                       w-full
//                       px-4 py-2
//                       bg-bgMain
//                       text-textMain
//                       border
//                       border-borderColor
//                       focus:outline-none
//                       focus:border-borderColor
//                       rounded-lg"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             onClick={loginUser}
//             className="
//                       w-full
//                       py-2
//                       rounded-lg
//                       bg-primary
//                       hover:bg-primaryHover
//                       text-white
//                       font-semibold
//                       bg-black
//                       transition
//                       cursor-pointer
//                       "
//           >
//             Login
//           </button>
//         </div>

//         <p className="text-sm text-gray-500 text-center mt-4">
//           HR Management System
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import logo from "../assets/IPeritusLogo.png"
import { loginUser as loginApi } from "../services/authService";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user, login } = useAuth();

  // Already logged in → go straight to dashboard
  if (user) return <Navigate to="/dashboard" replace />;

  const loginUser = async () => {
    setError("");
    try {
      const data = await loginApi(email, password);
      if (data.success) {
        login(data.user);       // store in context + localStorage
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <div
      className="
      flex
      items-center
      justify-center

      min-h-[calc(100vh-4rem-3rem)]
      bg-bgMain

    "
    >
      <div
        className="
                bg-bgCard
                
                text-textMain
                p-8
                rounded-2xl
                w-full max-w-md
                shadow-md
              "
      >
        {/* LOGO */}
        <img
          src={logo}
          alt="Peritus Logo"
          className="h-10 mx-auto mb-12 mt-4"
        />
        {/* className="h-14 mx-auto mb-10 mt-4" */}

        {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                  HRMS Login
                </h2> */}

        {error && (
          <div className="mb-4 text-sm text-red-500 bg-red-100 p-2 rounded text-center">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            autoComplete="off"
            className="
                      w-full
                      px-4 py-2
                      bg-bgMain
                      text-textMain
                      border
                      border-borderColor
                      focus:outline-none
                      focus:border-borderColor
                      rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            className="
                      w-full
                      px-4 py-2
                      bg-bgMain
                      text-textMain
                      border
                      border-borderColor
                      focus:outline-none
                      focus:border-borderColor
                      rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={loginUser}
            className="
                      w-full
                      py-3
                      rounded-lg
                      bg-primary
                      hover:bg-primaryHover
                      text-white
                      font-semibold
                      btn-modern
                      "
          >
            Login
          </button>
        </div>

        <p className="text-sm text-muted text-center mt-6">
          HR Management System
        </p>
      </div>
    </div>
  );
}

export default Login;
