import React, { useState, useEffect } from "react";

export default function FilterMovies({ movies, setMovies }) {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const genreIdMapping = {
    Acción: 28,
    Aventura: 12,
    Animación: 16,
    Comedia: 35,
    Crimen: 80,
    Documental: 99,
    Drama: 18,
    Familiar: 10751,
    Fantasía: 14,
    Historia: 36,
    Horror: 27,
    Misterio: 9648,
    Romance: 10749,
    "Ciencia ficción": 878,
    Guerra: 10752,
    Suspenso: 53,
  };

// useEffect para filtrar películas basadas en el género seleccionado
  useEffect(() => {
    console.log("Películas:", movies);
    console.log("Género seleccionado:", selectedGenre);

     // Filtra las películas según el género seleccionado
    const result = movies.filter((movie) =>
      // verifica que el ID del género seleccionado (selectedGenre) está en el array de las pelis
      movie.genre_ids.includes(genreIdMapping[selectedGenre])
    );
    // se actualiza el estado setFilteredData con el nuevo array de result
    setFilteredData(result);
    console.log("Resultado filtrado", result);
    // el efecto definido dentro del useEffect debería ejecutarse
    // cada vez que cambie alguno de los valores en el array [selectedGenre, movies]
  }, [selectedGenre, movies]);


  
  // Función para manejar cambios en las opciones del género seleccionado
  // (e) es el onChange que se activa cuando cambia el valor de un option dentro del select
  const handleOptions = (e) => {
    const selectedGenre =
      // si la opción que marca el usuario es 'filtrar por género' se establece en una cadena vacía
      // si la opción es un género, se almacena dentro de selectedGenre
      e.target.value === "Filtrar por género" ? "" : e.target.value;
    // acá se actualiza el estado de setSelectGenre con la opción-valor seleccionado
    setSelectedGenre(selectedGenre);
    console.log(selectedGenre);
  };

  return (
    <>
      <div className="nav-bar">
        {/* acá se llama a la función handleOptions para manejar el cambio de los valores*/}
        <select className="filter" onChange={handleOptions}>
          <option value={"Filtrar por género"}> Filtrar por género </option>
          <option value={"Acción"}>Acción</option>
          <option value={"Aventura"}>Aventura </option>
          <option value={"Animación"}>Animación</option>
          <option value={"Comedia"}>Comedia</option>
          <option value={"Crimen"}>Crimen</option>
          <option value={"Documental"}>Documental</option>
          <option value={"Drama"}>Drama</option>
          <option value={"Familiar"}>Familiar</option>
          <option value={"Fantasía"}>Fantasía</option>
          <option value={"Historia"}>Historia</option>
          <option value={"Horror"}>Horror</option>
          <option value={"Misterio"}>Misterio</option>
          <option value={"Romance"}>Romance</option>
          <option value={"Ciencia ficción"}>Ciencia ficción</option>
          <option value={"Guerra"}>Guerra</option>
          <option value={"Suspenso"}>Suspenso</option>
        </select>
        <select className="sort">
          <option disabled> Ordenar por puntuación </option>
          <option> Ascendente </option>
          <option> Descendente </option>
        </select>
      </div>

      <div className="movie-list-filtered">
        {/* renderizar las películas filtradas */}
        {filteredData.map((movie) => (
          <div className="movie-cards-filtered" key={movie.id}>
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>Género: {selectedGenre}</p>
            <p>Fecha de lanzamiento: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
}
