import React, { useContext } from "react";
import { Brightness3 } from "@mui/icons-material";

const Headder = ({ themeChange }) => {
  return (
    <div className="flex justify-between items-center w-[400px] h-[90px] md:w-[70%] lg:w-[90%] shadow-xl bg-white font-mono p-3 mb-4 ">
      <div>
        <span>Where in the World</span>
      </div>
      <div className="flex items-center justify-around gap-3 cursor-pointer ">
        <Brightness3 onClick={themeChange} />
        <span>Dark Mode</span>
      </div>
    </div>
  );
};

export default Headder;
