import React from "react";
import { render, screen, fireEvent, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import ApiConsumer from "./ApiConsumer";


describe("<ApiConsumer/>", () => {
  test("renderiza la lista de películas correctamente", () => {
    render(<ApiConsumer />);

    const movieListElement = screen.getByTestId("movie-list");
    expect(movieListElement).toBeInTheDocument();
  });
});

test("carga las imágenes de las películas correctamente", async () => {
    render(<ApiConsumer />);
  
    await waitFor(() => {
      const images = screen.getAllByRole("img");
      expect(images.every((img) => img.src)).toBeTruthy();
    });
  });

test("renderiza la paginación correctamente", () => {
  render(<ApiConsumer />);

  const paginationContainerElement = screen.getByTestId("pagination-container");
  expect(paginationContainerElement).toBeInTheDocument();

  const previousButton = screen.getByText(/Anterior/i);
  const nextButton = screen.getByText(/Siguiente/i);

  expect(previousButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
});

test("cambia de página al hacer clic en Anterior", () => {
  render(<ApiConsumer />);

  const nextButton = screen.getByText(/Anterior/i);
  fireEvent.click(nextButton);
});

test("cambia de página al hacer clic en Siguiente", () => {
  render(<ApiConsumer />);

  const nextButton = screen.getByText(/Siguiente/i);
  fireEvent.click(nextButton);
});

  