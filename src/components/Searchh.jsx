import React, { useContext, useState } from "react";
import { Search } from "@mui/icons-material";

const Searchh = ({ searchdata, themeChange }) => {
  const [filter, setFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");

  const handleOnchange = (e) => {
    setFilter(e.target.value);
    searchdata.searchData(e.target.value);
  };
  const handleRegionChange = (e) => {
    if (e.target.value === "all") {
      return;
    } else if (e.target.value === "asia") {
      searchdata.regionData(e.target.value);
    } else if (e.target.value === "europe") {
      searchdata.regionData(e.target.value);
    } else if (e.target.value === "africa") {
      searchdata.regionData(e.target.value);
    } else if (e.target.value === "americas") {
      searchdata.regionData(e.target.value);
    } else if (e.target.value === "oceania") {
      searchdata.regionData(e.target.value);
    }
  };

  return (
    <div className="grid gap-4 w-[400px] mb-6 h-[50px] items-center justify-between font-thin md:flex md:w-[70%] lg:flex lg:w-[90%] ">
      <div className="flex items-center w-[280px] h-[40px rounded-sm ">
        <Search className="m-2 " />
        <input
          type="text"
          placeholder="Search for a country "
          className="outline-none shadow-lg"
          value={filter}
          onChange={handleOnchange}
        />
      </div>
      <div>
        <select
          value={regionFilter}
          onChange={handleRegionChange}
          className="flex items-center w-[140px] h-[40px rounded-sm outline-none font-thin"
        >
          <option value="all">Filter By Region</option>
          <option value="asia">Asia</option>
          <option value="europe">Eroupe</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Searchh;
