import Upload from "./Upload";

const Layout = ({ children }) => {
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
