import { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { projectStorage, projectFirestore } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (!file || !file.name) return;

    // Create a unique file name
    const fileExtension = file.name.split(".").pop();
    const uniqueFileName = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}.${fileExtension}`;
    const storageRef = ref(projectStorage, uniqueFileName);

    // Upload file
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        try {
          const downloadUrl = await getDownloadURL(storageRef);
          await addDoc(collection(projectFirestore, "images"), {
            url: downloadUrl,
            createdAt: serverTimestamp(),
          });
          setUrl(downloadUrl);
        } catch (err) {
          setError(err);
        }
      },
    );

    return () => {
      // Cancel upload on unmount
      uploadTask.cancel();
    };
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
