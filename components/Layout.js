import React from "react";
import Upload from "./Upload";

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="">
        <h1>Fumblr</h1>
        <Upload />
      </nav>
      {children}
    </div>
  );
};

export default Layout;
