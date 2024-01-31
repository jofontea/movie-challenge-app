import React, { useState } from "react";
import Header from "./Header";
import "./App.css";
import ApiConsumer from "./ApiConsumer";
import FilterMovies from "./FilterMovies";

function App() {
  const [movies, setMovies] = useState([])
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap')
      </style>
      <Header />
      <FilterMovies movies={movies} setMovies={setMovies} />
      <ApiConsumer movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default App;
