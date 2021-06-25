import React from "react";
import Layout from "./Layout";
import { render } from "@testing-library/react";

describe("Layout", () => {
  it("Renders child components", () => {
    render(<Layout children />);
  });
});
