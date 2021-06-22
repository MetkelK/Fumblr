import React from "react";
import ImageGrid from "./ImageGrid";
import { render } from "@testing-library/react";
import useFirestore from "../hooks/useFirestore";

// https://github.com/testing-library/react-testing-library/issues/422
jest.mock("../hooks/useFirestore", () =>
  jest.fn(() => {
    docs: [];
  })
);

describe("ImageGrid", () => {
  it("renders and displays data", () => {
    render(<ImageGrid />);
  });
});
