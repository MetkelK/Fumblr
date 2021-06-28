import React from "react";
import Upload from "./Upload";
import { render, screen, fireEvent, getByText } from "@testing-library/react";

const file = new File(["sunset-june-23"], "sunset.png", { type: "image/png" });

describe("Upload", () => {
  it("Renders form", () => {
    render(<Upload />);
  });

  it("displays window alert", () => {
    render(<Upload />);
    fireEvent.click(screen.getByLabelText("upload image"));
    expect(window.alert).toBeCalled;
  });

  it("displays error message for wrong file", () => {
    render(<Upload />);
    fireEvent.click(screen.getByLabelText("upload image"));
    const reader = new FileReader();
    reader.addEventListener("onload", (e) => {
      if (reader.result) {
        console.log(reader.result as string);
      }
      reader.readAsDataURL(file);
    });
    // const error = screen.getByLabelText("error message");
    // expect(error).toBeVisible;
  });

  //   it("displays error message for wrong file", () => {
  //     render(<Upload />);
  //     const error = screen.getByLabelText("error message");
  //     expect(error).toBeVisible;
  //   });

  //   it("displays filename", () => {
  //     render(<Upload />);
  //     const name = screen.getByLabelText("file name");
  //     expect(name).toBeVisible;
  //   });
});
