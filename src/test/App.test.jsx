import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("<App/>", () => {
  test("renderiza la lista de películas correctamente", () => {
    render(<App />);

    const movieListElement = screen.getByTestId("movie-list");
    expect(movieListElement).toBeInTheDocument();
  });
  test("renderiza el nombre de la app", () => {
    render(<App />);
    const linkElement = screen.getByText(/Cinema Go/i);
    expect(linkElement).toBeInTheDocument();
  });
  

test("carga las imágenes de las películas correctamente", async () => {
  render(<App />);

  await waitFor(() => {
    const images = screen.getAllByRole("img");
    expect(images.every((img) => img.src)).toBeTruthy();
  });
});

test("renderiza la paginación correctamente", () => {
render(<App />);

const paginationContainerElement = screen.getByTestId("pagination-container");
expect(paginationContainerElement).toBeInTheDocument();

const previousButton = screen.getByText(/Anterior/i);
const nextButton = screen.getByText(/Siguiente/i);

expect(previousButton).toBeInTheDocument();
expect(nextButton).toBeInTheDocument();
});

test("cambia de página al hacer clic en Anterior", () => {
render(<App />);

const nextButton = screen.getByText(/Anterior/i);
fireEvent.click(nextButton);
});

test("cambia de página al hacer clic en Siguiente", () => {
render(<App />);

const nextButton = screen.getByText(/Siguiente/i);
fireEvent.click(nextButton);
});


});
