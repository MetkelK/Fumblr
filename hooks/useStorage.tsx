import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file:any) => {
  const [progress, setProgress] = useState<number | 0>(0);
  const [error, setError] = useState<any | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    //Create a reference to files in storage
    const storageRef = projectStorage.ref(file.name);

    //Create a collection of storage data
    const collectionRef = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
