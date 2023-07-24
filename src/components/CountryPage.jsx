import React, { useEffect, useState } from "react";
import Headder from "../components/Headder";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useCountryAPI } from "./useCountryAPI";

const CountryPage = () => {
  const { apiData, isloading, searchData } = useCountryAPI();
  //const [filteredCountry, setFilteredCountry] = useState(null);

  const filteredCountry = apiData?.filter((country) => {
    return country.name === localStorage.getItem("country");
  });

  // useEffect(() => {
  //   setFilteredCountry(
  //     apiData?.filter((country) => {
  //       return country.name === localStorage.getItem("country");
  //     })
  //   );
  // }, [localStorage.getItem("country")]);
  // console.log(filteredCountry);

  return (
    <div>
      <Headder />
      <div className="m-8 w-[100px] h-[50px] justify-center items-center font-thin cursor-pointer">
        <Link to="/">
          <ArrowBack />
        </Link>

        <button className="ml-[5px] mt-3 ">Back</button>
      </div>
      <div className=" grid grid-cols-1 gap-4 justify-between items-center md:grid md:grid-cols-2">
        <img
          src={filteredCountry && filteredCountry[0].flags.svg}
          alt=""
          className=" w-[400px] h-[250px] md:w-[500px] md:h-[280px]  lg:w-[600px] lg:h-[300px]"
        />

        <div className=" w-[400px] h-[200px] md:w-[800px] lg:w-[1200px]  ">
          <div className="  h-[240px] w-[300px] pl-5 ">
            <p className=" font-extrabold font-mono pt-5 text-lg">
              {filteredCountry && filteredCountry[0].name}
            </p>
            <div className=" grid grid-cols-1 mt-2 gap-3">
              <span>
                Native Name : {filteredCountry && filteredCountry[0].nativeName}
              </span>
              <span>
                Population : {filteredCountry && filteredCountry[0].population}
              </span>
              <span>
                Region : {filteredCountry && filteredCountry[0].region}
              </span>
              <span>
                Sub Region : {filteredCountry && filteredCountry[0].subregion}
              </span>
              <span>
                Capital : {filteredCountry && filteredCountry[0].capital}
              </span>
            </div>
          </div>
          <div className="grid  w-[300px] h-[100px] pl-2 items-center mt-1 md:flex md:w-[600px]">
            <div className=" md:mr-5">
              <p className="">Border Countries:</p>
            </div>
            <div className=" justify-around">
              {filteredCountry &&
                filteredCountry[0]?.borders &&
                filteredCountry[0]?.borders.map((value, index) => (
                  <button className=" gap-2 mr-4 border-2 p-2" key={index}>
                    {
                      apiData?.filter(
                        (country) => country.alpha3Code === value
                      )[0].name
                    }
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
