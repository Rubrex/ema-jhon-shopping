// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiYmFpxc2ZHJ5Q1haXwJxyNy5RYDF_8iY",
  authDomain: "ema-jhon-auth-26191.firebaseapp.com",
  projectId: "ema-jhon-auth-26191",
  storageBucket: "ema-jhon-auth-26191.appspot.com",
  messagingSenderId: "817692541139",
  appId: "1:817692541139:web:d1eb36630d1f9c63631426",
};
// Another config
const firebaseConfig1 = {
  apiKey: "AIzaSyDcUviD2-XlLz1QPD7xzGOmLCtFOwywww8",
  authDomain: "fir-auth-21c73.firebaseapp.com",
  projectId: "fir-auth-21c73",
  storageBucket: "fir-auth-21c73.appspot.com",
  messagingSenderId: "361083750151",
  appId: "1:361083750151:web:231c610f922734053de7a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig1);

export default app;
