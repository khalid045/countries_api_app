import React, { useEffect } from "react";
import Headder from "../components/Headder";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useCountryAPI } from "./useCountryAPI";

const CountryPage = () => {
  const { apiData, isloading, searchData, borderData } = useCountryAPI();
  // console.log(localStorage.getItem("country"));
  const filteredCountry = apiData?.filter((country) => {
    return country.name === localStorage.getItem("country");
  });

  // useEffect(() => {
  //   searchData(localStorage.getItem("country"));
  // }, [localStorage.getItem("country")]);
  // console.log(borderData);
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
              <span className="w-[100px] h-[45px] border-2 border-light py-2 px-5 cursor-pointer mr-2">
                France
              </span>
              <span className="w-[100px] h-[45px] border-2 border-light py-2 px-5 cursor-pointer">
                Canada
              </span>
              <span className="w-[100px] h-[45px] border-2 border-light py-2 px-5 cursor-pointer ml-2">
                Italy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
