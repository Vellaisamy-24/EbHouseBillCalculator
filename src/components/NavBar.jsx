import React from "react";
import image from "../assets/electricity.jpg";
const NavBar = () => {
  return (
    <div className="w-full flex gap-2 px-5 items-center border-b py-3 fixed top-0">
      <div className="w-1/4 ">
        <img
          src={image}
          className="w-1/2 object-cover rounded-md shadow-md shadow-black/20"
        />
      </div>

      <h1 className="text-center font-bold flex-wrap text-lg lg:text-xl">
        TNEB <span className="text-orange-400 px-2">House</span>Bill Calculator
      </h1>
    </div>
  );
};

export default NavBar;
