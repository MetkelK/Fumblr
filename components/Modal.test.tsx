import React from "react";
import Modal from "./Modal";
import { render } from "@testing-library/react";

describe("Modal", () => {
  it("Renders Modal and displays data", () => {
    render(<Modal selectedImage={"/"} />);
  });
});
