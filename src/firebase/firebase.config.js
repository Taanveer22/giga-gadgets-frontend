// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Initialize Firebase Authentication and get a reference to the service
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB80WwhpdriZ4hwq-96bZrVHdivjMJXb_k",
  authDomain: "giga-gadgets-crud.firebaseapp.com",
  projectId: "giga-gadgets-crud",
  storageBucket: "giga-gadgets-crud.firebasestorage.app",
  messagingSenderId: "9919578303",
  appId: "1:9919578303:web:e8df4630c525474cd8460a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
