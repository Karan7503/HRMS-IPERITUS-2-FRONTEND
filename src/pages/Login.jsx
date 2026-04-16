import React, { useState } from "react";
import logo from "../assets/IPeritusLogo.png"


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = () => {
        
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
                      py-2
                      rounded-lg
                      bg-primary
                      hover:bg-primaryHover
                      text-white
                      font-semibold
                      bg-black
                      transition
                      cursor-pointer
                      "
          >
            Login
          </button>
        </div>

        <p className="text-sm text-gray-500 text-center mt-4">
          HR Management System
        </p>
      </div>
    </div>
  );
}

export default Login;
