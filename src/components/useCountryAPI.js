import React, { useEffect, useState } from "react";
import axios from "axios";

export const useCountryAPI = () => {
  const [apiData, setApiData] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [iserror, setIsError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const respons = await axios.get(`https://restcountries.com/v2/all`);
      setApiData(respons.data);
      setIsLoading(false);
    } catch (error) {
      setIsError("no data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const searchData = async (country) => {
    setIsLoading(true);
    try {
      const respons = await axios.get(
        `https://restcountries.com/v2/name/${country}`
      );
      setApiData(respons.data);
      setIsLoading(false);
    } catch (error) {
      setIsError("no data", error);
    }
  };
  useEffect(() => {
    searchData();
  }, []);

  const regionData = async (region) => {
    setIsLoading(true);
    try {
      const respons = await axios.get(
        `https://restcountries.com/v2/region/${region}`
      );
      setApiData(respons.data);
      setIsLoading(false);
    } catch (error) {
      setIsError("no data", error);
    }
  };
  useEffect(() => {
    regionData();
  }, []);

  return { apiData, isloading, iserror, fetchData, searchData, regionData };
};
