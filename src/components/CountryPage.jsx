import React from "react";
import Headder from "../components/Headder";
import { ArrowBack } from "@mui/icons-material";

const CountryPage = () => {
  return (
    <div>
      <Headder />
      <div className="m-8 w-[100px] h-[50px] justify-center items-center font-thin cursor-pointer">
        <ArrowBack />
        <button className="ml-[5px] mt-3 ">Back</button>
      </div>
      <div className=" grid grid-cols-1 gap-4 justify-between items-center md:grid md:grid-cols-2">
        <img
          src="assets/uk.jpeg"
          alt=""
          className=" w-[400px] h-[250px] md:w-[500px] md:h-[280px]  lg:w-[600px] lg:h-[300px]"
        />

        <div className=" w-[400px] h-[200px] md:w-[800px] lg:w-[1200px]  ">
          <div className="  h-[240px] w-[300px] pl-5 ">
            <p className=" font-extrabold font-mono pt-5 text-lg">
              United Kindom
            </p>
            <div className=" grid grid-cols-1 mt-2 gap-3">
              <span>Native Name : Beigie</span>
              <span>Population : 11,234,2456</span>
              <span>Region : Europe</span>
              <span>Sub Region : Werstern Europe</span>
              <span>Capital : Buseel</span>
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
