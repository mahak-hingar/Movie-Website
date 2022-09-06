// context(warehouse)
//import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React, { useContext, useEffect, useState } from "react";
export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppContext = React.createContext();

// provider(deliveery boii)
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: " " });
  const [query, setQuery] = useState("love");
  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      
      
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
        setIsError({
          show : false,
          msg: " "
        })
      } else {
        setIsLoading(false);
        
        setIsError({
          show: true,
          msg: <div className="errormovie">Enter Movie or Movie not found </div>,
          
        });
      }
    } catch (error) {
      setIsLoading(false);
      <h1>Movie not found</h1>
    }
  };
  useEffect(() => {
    let time = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 800);
    return () => clearTimeout(time);
  }, [query]);

  return (
    <AppContext.Provider value={{ query, setQuery, isLoading, isError, movie }}>
      {children}
    </AppContext.Provider>
  );
};
// global custom hooks
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
