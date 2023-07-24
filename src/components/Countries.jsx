import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Countries = ({ data }) => {
  const eventone = useNavigate();
  const coubtryPages = (county) => {
    localStorage.setItem("country", county);
    eventone("/CountryPage");
  };
  return (
    <div
      role="button"
      onClick={() => coubtryPages(data.name)}
      className="grid grid-cols-1 w-[260px] h-[260px] shadow-lg cursor-pointer gap-5 mt-8 "
    >
      <div className="w-[260px] h-[260px] bg-gray-400">
        <img src={data.flags.svg} alt="" className="w-[260px] h-[140px] " />
        <div className="grid grid-cols-1 text-white pl-3">
          <span>{data.name}</span>
          <span>Population : {data.population}</span>
          <span>Region : {data.region}</span>
          <span>Capital : {data.capital} </span>
        </div>
      </div>
    </div>
  );
};

export default Countries;
