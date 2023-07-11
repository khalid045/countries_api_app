import React from "react";
import { Brightness3 } from "@mui/icons-material";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Headder = ({ toggleDarkMode }) => {
  return (
    <div className="flex justify-between items-center w-[400px] h-[70px] md:w-[800px] lg:w-[1200px] bg-white font-mono p-3  ">
      <div>
        <span>Where in the World</span>
      </div>
      <div className="flex items-center justify-around gap-3 cursor-pointer ">
        <DarkModeSwitch
          style={{ marginBottom: "2rem" }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={120}
        />
        <span>Dark Mode</span>
      </div>
    </div>
  );
};

export default Headder;
