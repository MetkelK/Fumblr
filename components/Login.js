import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { projectAuth } from "../firebase/config";

export default function Login() {
  const [isPending, setIsPending] = useState(false);

  const handleLogin = async () => {
    setIsPending(true);
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(projectAuth, provider);
    } catch (err) {
      console.error("Login failed:", err.message);
      alert("Admin access denied.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="login-wrapper">
      <button onClick={handleLogin} disabled={isPending} className="login-btn">
        {isPending ? "Authenticating..." : "Login"}
      </button>

      {/* Standard CSS inside Next.js */}
      <style jsx>{`
        .login-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .login-btn {
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
        .login-btn:hover {
          background: #333;
          color: #fff;
        }
        .login-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
