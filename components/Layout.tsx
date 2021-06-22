import { ReactNode } from "react";

interface Images {
  children: ReactNode;
}

const Layout = ({ children }: Images) => {
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
