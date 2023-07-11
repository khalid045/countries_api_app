import React, { useContext, useEffect } from "react";
import { devContext } from "../App";

const Countries = (props) => {
  const countryList = useContext(devContext);
  //console.log(countryList);

  const { apiData, fetchData } = countryList;
  useEffect(() => {
    fetchData();
  }, []);

  return (
    apiData &&
    apiData.map((country) => (
      <div
        key={country.id}
        className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 md:gap-4 md:w-[70%] lg:grid-cols-4 lg:w-[90%] lg:gap-4"
      >
        <div className="w-[260px] h-[260px] bg-slate-600">
          <img
            src={country.flags.svg}
            alt=""
            className="w-[260px] h-[140px] "
          />
          <div className="grid grid-cols-1 text-white pl-3">
            <span>{country.name}</span>
            <span>Population : {country.population}</span>
            <span>Region : {country.region}</span>
            <span>Capital : {country.capital}</span>
          </div>
        </div>
      </div>
    ))
  );
};

export default Countries;
