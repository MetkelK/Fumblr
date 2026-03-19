import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { projectAuth } from "../firebase/config";
import Upload from "./Upload";
import Login from "./Login";

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authIsReady, setAuthIsReady] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(projectAuth, (currentUser) => {
      setUser(currentUser);
      setAuthIsReady(true);
    });
    return () => unsub();
  }, []);

  const handleLogout = () => {
    signOut(projectAuth);
  };

  return (
    <div>
      <nav>
        <h1>Fumblr</h1>
        {/* Only keep Login and Logout in the nav */}
        {authIsReady && (
          <div className="admin-controls">
            {user ? (
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Login />
            )}
          </div>
        )}
      </nav>

      {/* Upload now sits right above the page content */}
      {user && (
        <div className="upload-container">
          <Upload />
        </div>
      )}
      {children}
    </div>
  );
};

export default Layout;
