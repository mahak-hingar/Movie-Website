import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const Movie = () => {
  const { movie, isLoading } = useGlobalContext();
  if (isLoading == true) {
    return <div className="loading">Loading....</div>;
  }
  
  
  

  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col">
          {movie.map((curMovie) => {
            const { imdbID, Title, Poster } = curMovie;
            const moviename = Title.substring(0, 15);
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>
                      {moviename.length > 13 ? `${moviename}...` : moviename}
                    </h2>
                    <img src={Poster} alt={imdbID} />
                  </div>
                </div>
              </NavLink>
            );
          })}
          ;
        </div>
      </section>
    </>
  );
};

export default Movie;
