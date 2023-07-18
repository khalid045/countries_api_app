import React, { useContext, useEffect, useState } from "react";
import { devContext } from "../App";
import CountryPage from "./CountryPage";

const Countries = (props) => {
  const countryList = useContext(devContext);
  const [showCountryPage, setShowCountryPage] = useState(false);

  const { apiData, fetchData } = countryList;
  useEffect(() => {
    fetchData();
  }, []);
  const handleClick = () => {
    setShowCountryPage(true);
  };
  return (
    apiData &&
    apiData.map((country) => (
      <div
        onClick={handleClick}
        key={country.id}
        className="grid grid-cols-1 cursor-pointer gap-4 mt-8 md:grid-cols-2 md:gap-4 md:w-[70%] lg:grid-cols-4 lg:w-[90%] lg:gap-4"
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
  {
    setShowCountryPage && <CountryPage country={showCountryPage} />;
  }
};

export default Countries;
