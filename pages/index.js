import { useState, useEffect } from "react";
import Head from "next/head";
import { onAuthStateChanged } from "firebase/auth";
import { projectAuth } from "../firebase/config";

import Upload from "../components/Upload";
import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal";
import Login from "../components/Login"; // Import your new Login component

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // This checks if you are logged in whenever the page loads
  useEffect(() => {
    const unsub = onAuthStateChanged(projectAuth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        console.log("Admin verified:", currentUser.email);
      }
    });
    return () => unsub(); // Cleanup the listener
  }, []);

  useEffect(() => {
    const unsub = onAuthStateChanged(projectAuth, (user) => {
      setUser(user);
      setLoading(false); // Once Firebase answers, stop loading
    });
    return () => unsub();
  }, []);

  if (loading) return <div className="loading-screen">Loading Fumblr...</div>;

  return (
    <div>
      <Head>
        <title>Fumblr</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Fake Tumblr"></meta>
      </Head>
      <main>
        <ImageGrid setSelectedImage={setSelectedImage} />

        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </main>
    </div>
  );
}
