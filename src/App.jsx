import React, { useContext } from "react";
import { useState } from "react";
import "./App.css";
import Countries from "./components/Countries";
import Headder from "./components/Headder";
import Searchh from "./components/Searchh";
import { useCountryAPI } from "./components/useCountryAPI";
import CountryPage from "./components/CountryPage";

export let devContext = React.createContext();
export const ThemeContext = React.createContext(null);

function App() {
  const country = useCountryAPI();
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={toggleTheme}>
      <devContext.Provider value={country}>
        <div
          id={theme}
          className="grid grid-cols-1 items-center justify-center pl-10 "
        >
          <Headder />
          <Searchh />
          <Countries />
        </div>
      </devContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
