import React from "react";
import Layout from "./Layout";
import { render } from "@testing-library/react";

describe("Layout", () => {
  it("Renders children components", () => {
    render(<Layout children={jest.fn()} />);
  });
});
