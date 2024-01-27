import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

export default function ApiConsumer() {
  // useState: el primer elemento del array es una variable que almacenará el valor del estado actual
  // el segundo elemento del array es la función que permite actualizar ese estado
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

   // la función handlePageClick se ejecuta cuando el usuario hace clic en una página
  const handlePageClick = (selectedPage) => {
    console.log("currentPage antes de cambiar:", currentPage);
    // actualiza el estado de currentPage con el valor de la página seleccionada
    setCurrentPage(selectedPage.selected + 1);
    console.log("currentPage después de cambiar:", currentPage);
  };

  // useEffect se 'dispara' cada vez que el usuario cambia de página (cuando currentPage cambia)
  // como currentPage tiene como valor inicial 1, useEffect se ejecuta por primera vez con ese valor 
  // lo anterior permite poder visualizar la renderización de las películas de la pag 1
  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=f70960e339541d233540a0fb5733a395&page=${currentPage}`;

    // llamada a la API con axios
    axios
      .get(apiUrl)
      .then((response) => {
        // se actualiza el estado de movies con los resultados de la API
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error trayendo la data:", error);
      });
  }, [currentPage]);

  return (
    <div>
      {/* lista de pelis renderizadas a partir de los datos obtenidos de la API */}
      <ul className="movie-list" data-testid= "movie-list">
         {/* map genera dinámicamente elementos <li> para cada película */}
        {movies.map((movie) => (
          <li className="movie-cards" key={movie.id}>
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
      {/* Paginación con react-paginate */}
      <div className="pagination-container" data-testid= "pagination-container">
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          // establezco el número de páginas totales en 20
          pageCount={20}
          //acá le digo a la librería que función debe ejecutar cuando el usuario haga clic en sgte
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
