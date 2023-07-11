import React from "react";
import { useState } from "react";
import "./App.css";
import Countries from "./components/Countries";
import Headder from "./components/Headder";
import Searchh from "./components/Searchh";
import { useCountryAPI } from "./components/useCountryAPI";
import CountryPage from "./components/CountryPage";

export let devContext = React.createContext();
function App() {
  const country = useCountryAPI();

  return (
    <devContext.Provider value={country}>
      <div className="grid grid-cols-1 items-center justify-center pl-10 gap-5">
        <Headder />
        <Searchh />
        <Countries />
      </div>
    </devContext.Provider>
  );
}

export default App;
