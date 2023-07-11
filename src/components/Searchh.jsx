import React, { useContext, useState } from "react";
import { Search } from "@mui/icons-material";
import { devContext } from "../App";

const Searchh = () => {
  const [filter, setFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");
  const regionList = useContext(devContext);

  const { apiData, fetchData } = regionList;

  const handleOnchange = (e) => {
    setFilter(e.target.value);
  };
  const handleRegionChange = (e) => {
    setRegionFilter(e.target.value);
  };

  // const filteredList = regionList.filter((country) => {
  //   if (regionFilter === "all") {
  //     return true;
  //   } else {
  //     return country.region == regionFilter;
  //   }
  // });

  const filteredList = (e) => {
    if (e.target.value === "all") {
      return regionList;
    } else if (e.target.value === "asia") {
      return country.region;
    }
    // console.log(e.target.value);
  };

  return (
    <div className="grid gap-4 w-[400px] h-[50px] items-center justify-between font-thin md:flex md:w-[70%] lg:flex lg:w-[90%] ">
      <div className="flex items-center w-[280px] h-[40px] bg-white rounded-sm ">
        <Search className="m-2 " />
        <input
          type="text"
          placeholder="Search for a country "
          className="outline-none"
          value={filter}
          onChange={handleRegionChange}
        />
      </div>
      <div>
        <select
          value={regionFilter}
          onChange={filteredList}
          className="flex items-center w-[140px] h-[40px] bg-white rounded-sm outline-none font-thin"
        >
          <option value="all">Filter By Region</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Eroupe</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Searchh;
