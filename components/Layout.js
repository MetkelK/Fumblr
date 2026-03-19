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

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
        }
        .upload-container {
          margin: 20px 0;
          display: flex;
          justify-content: center;
        }
        .logout-btn {
          padding: 8px 16px;
          border: 1px solid #333;
          background: transparent;
          color: #333;
          cursor: pointer;
          font-size: 0.75rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: all 0.2s ease-in-out;
          border-radius: 4px;
        }
        .logout-btn:hover {
          background: #333;
          color: #fff;
        }
        .logout-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default Layout;
