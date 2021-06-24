import React from "react";
import Modal from "./Modal";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Modal", () => {
  it("Renders Modal", () => {
    render(<Modal selectedImage={"/"} />);
  });

  it("Renders modal with image loaded", () => {
    render(<Modal selectedImage={"/alona-perez-p4xNF5ZPc0c-unsplash.jpg"} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute(
      "src",
      "/_next/image?url=%2Falona-perez-p4xNF5ZPc0c-unsplash.jpg&w=3840&q=100"
    );
  });

  it("Checks modal closes with escape button", () => {
    render(<Modal selectedImage={"/"} />);
    const escape = fireEvent.click(screen.getByText("×"));
    expect(escape).not.toBeVisible;
  });

  it("Checks modal closes by clicking outside of modal area", () => {
    render(<Modal selectedImage={"/"} />);
    const escapeArea = fireEvent.click(screen.getByLabelText("background"));
    expect(escapeArea).not.toBeVisible;
  });
});
