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
    </div>
  );
}
