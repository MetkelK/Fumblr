import React from "react";
import ProgressBar from "./ProgressBar";
import { render, screen } from "@testing-library/react";

const file = new File(["sunset-june-23"], "sunset.png", { type: "image/png" });

describe("Progress", () => {
  it("loads the progress bar", () => {
    render(<ProgressBar file={file} setFile={jest.fn()} />);
  });

  it("display progress bar", () => {
    render(<ProgressBar file={file} setFile={jest.fn()} />);
    const bar = screen.getByLabelText("progressBar");
    expect(bar).toBeVisible;
  });
});
