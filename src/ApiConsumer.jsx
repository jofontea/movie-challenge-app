import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

export default function ApiConsumer() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [, setTotalPages] = useState(1);

  const handlePageClick = (selectedPage) => {
    console.log("currentPage antes de cambiar:", currentPage);
    setCurrentPage(selectedPage.selected + 1);
    console.log("currentPage después de cambiar:", currentPage);
  };

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=f70960e339541d233540a0fb5733a395&page=${currentPage}`;

    // llamada a la API con axios
    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        console.error("Error trayendo la data:", error);
      });
  }, [currentPage]);

  return (
    <div>
      {/* Lista de películas renderizadas a partir de los datos obtenidos de la API */}
      <ul className="movie-list">
        {movies.map((movie) => (
          <li className= "movie-cards" key={movie.id}>
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>Fecha de lanzamiento: {movie.release_date}</p>
          </li>
        ))}
      </ul>
      <div className="pagination-container">
        {/* Paginación con react-paginate */}
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          breakLabel={'...'}
          pageCount={20}
          onPageChange={handlePageClick}
          marginPagesDisplayed={0}
          pageRangeDisplayed={0}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}
