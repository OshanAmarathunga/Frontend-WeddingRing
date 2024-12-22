import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleRegisterButton = () => {
    navigate("/register");
  };
  return (
    <div className=" bg-gradient-to-b from-[#820059] to-[#b2007a] h-16 flex items-center px-4 rounded-md shadow-2xl fixed w-full z-50">
      <img
        src="ring.png"
        alt="Wedding Ring Logo"
        className="w-10 h-10  object-cover mr-3   border-white hidden md:block"
      />
      <h1 className="md:text-3xl font-bold font-Roboto text-white tracking-wider drop-shadow-md uppercase">
        Wedding <span className="text-[#ffd700]">Ring</span>
      </h1>
      <div className="ml-auto flex space-x-2">
        <button className="bg-white font-Roboto font-bold px-4 py-1 rounded-lg shadow-lg text-[#fe01a5]  hover:bg-[#fe01a5] hover:text-white transition-all duration-300">
          Login
        </button>
        <button
          onClick={handleRegisterButton}
          className="bg-white font-Roboto font-bold px-4 py-1 rounded-lg shadow-lg text-[#fe01a5]  hover:bg-[#fe01a5] hover:text-white transition-all duration-300"
        >
          Register
        </button>
      </div>
    </div>
  );
}
