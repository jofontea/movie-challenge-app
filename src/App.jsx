import React from "react";
import Header from "./Header";
import "./App.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MovieList from "./MovieList";
import ApiConsumer from "./ApiConsumer";

function App() {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap')
      </style>
      <Header />
      <NavBar />
      <ApiConsumer />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
