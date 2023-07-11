import React from "react";
import { Brightness3 } from "@mui/icons-material";

const Headder = () => {
  return (
    <div className="flex justify-between items-center w-[400px] h-[70px] md:w-[800px] lg:w-[1200px] bg-white font-mono p-3  ">
      <div>
        <span>Where in the World</span>
      </div>
      <div className="flex items-center justify-around gap-3 cursor-pointer ">
        <Brightness3 />
        <span>Dark Mode</span>
      </div>
    </div>
  );
};

export default Headder;
