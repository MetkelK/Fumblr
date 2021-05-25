import { ReactNode } from "react";
import Upload from "./Upload";

interface Images {
  children: ReactNode
}

const Layout = ({ children }:Images) => {
  return (
    <div>
      <nav>
        <h1>Fumblr</h1>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
