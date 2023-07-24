import "./App.css";
import Countries from "./components/Countries";
import CountryPage from "./components/CountryPage";
import Headder from "./components/Headder";
import Searchh from "./components/Searchh";
import { useCountryAPI } from "./components/useCountryAPI";
import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };
  const { apiData, isloading, iserror, fetchData, searchData, regionData } =
    useCountryAPI();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
              <div
                id={theme}
                className="grid grid-cols-1 items-center justify-center pl-10 "
              >
                <Headder themeChange={toggleTheme} />
                <Searchh searchdata={{ searchData, regionData }} />
                <div className="md:w-[70%] md:grid md:grid-cols-3 lg:w-[90%] lg:grid lg:grid-cols-5">
                  {apiData &&
                    apiData.map((country) => {
                      return <Countries key={country.id} data={country} />;
                    })}
                </div>
              </div>
            </ThemeContext.Provider>
          }
        />
        <Route path="CountryPage" element={<CountryPage />} />
      </Routes>
    </>
  );
}

export default App;
