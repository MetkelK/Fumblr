import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "fumblr-a43b3.firebaseapp.com",
  projectId: "fumblr-a43b3",
  storageBucket: "fumblr-a43b3.appspot.com",
  messagingSenderId: "946728572283",
  appId: "1:946728572283:web:2e6d2c7e203a327db359de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const projectFirestore = getFirestore(app);
const projectStorage = getStorage(app);
const projectAuth = getAuth(app); // Initialize Auth

// Export as NAMED exports
export { projectFirestore, projectStorage, projectAuth, serverTimestamp };
