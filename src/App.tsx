import React from "react";
import Header from "./Header";
import "./App.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MovieList from "./MovieList";

function App(): JSX.Element {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap')
      </style>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300;400;500;600;700&display=swap')
      </style>
      <Header />
      <NavBar />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
