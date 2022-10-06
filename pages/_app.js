import React, { useState } from "react";
import AppContext from "../components/contextApi/AppContext";
import { GlobalStyling } from "../components/styles/globalStyle";

function MyApp({ Component, pageProps }) {
  const [carData, setCarData] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const value = {
    carData,
    setCarData,
    searchInput,
    setSearchInput,
    searchResult,
    setSearchResult,
  };
  return (
    <AppContext.Provider value={value}>
      <GlobalStyling />
      <Component {...pageProps}></Component>
    </AppContext.Provider>
  );
}

export default MyApp;
