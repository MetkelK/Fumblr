import React from "react";
import Modal from "./Modal";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Modal", () => {
  it("Renders Modal and displays data", () => {
    render(<Modal selectedImage={"/"} />);
  });

  it("Checks image is loaded", () => {
    render(<Modal selectedImage={"/alona-perez-p4xNF5ZPc0c-unsplash.jpg"} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute(
      "src",
      "/_next/image?url=%2Falona-perez-p4xNF5ZPc0c-unsplash.jpg&w=3840&q=100"
    );
  });

  //   it("Checks modal closes with escape button", () => {

  //   })

  //   it("Checks modal closes by clicking outside of modal area", () => {

  //   })
});
