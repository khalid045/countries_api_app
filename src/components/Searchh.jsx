import React, { useContext, useState } from "react";
import { Search } from "@mui/icons-material";
import { devContext } from "../App";

const Searchh = () => {
  const [filter, setFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");
  const regionList = useContext(devContext);

  const handleOnchange = (e) => {
    setFilter(e.target.value);
    regionList.searchData(e.target.value);
  };
  const handleRegionChange = (e) => {
    if (e.target.value === "all") {
      return;
    } else if (e.target.value === "asia") {
      regionList.regionData(e.target.value);
    } else if (e.target.value === "europe") {
      regionList.regionData(e.target.value);
    } else if (e.target.value === "africa") {
      regionList.regionData(e.target.value);
    } else if (e.target.value === "americas") {
      regionList.regionData(e.target.value);
    } else if (e.target.value === "oceania") {
      regionList.regionData(e.target.value);
    }
  };

  return (
    <div className="grid gap-4 w-[400px] mb-6 h-[50px] items-center justify-between font-thin md:flex md:w-[70%] lg:flex lg:w-[90%] ">
      <div className="flex items-center w-[280px] h-[40px] bg-white rounded-sm ">
        <Search className="m-2 " />
        <input
          type="text"
          placeholder="Search for a country "
          className="outline-none"
          value={filter}
          onChange={handleOnchange}
        />
      </div>
      <div>
        <select
          value={regionFilter}
          onChange={handleRegionChange}
          className="flex items-center w-[140px] h-[40px] bg-white rounded-sm outline-none font-thin"
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
