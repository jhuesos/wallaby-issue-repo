import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText, debug } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  console.log("debug() output\n\n");
  debug() // ?

  console.log("screen.debug() output\n\n");
  screen.debug(); // ?
});
