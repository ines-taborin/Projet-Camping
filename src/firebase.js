import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC_RkEFNiB1ueUkzT9o7UBYjsm5mgLsu6E",

  authDomain: "intuitp3.firebaseapp.com",

  projectId: "intuitp3",

  storageBucket: "intuitp3.firebasestorage.app",

  messagingSenderId: "1043206260896",

  appId: "1:1043206260896:web:80f9c1c67b735aa65b61c5",
};

//initialisation de l'application firebase

const app = initializeApp(firebaseConfig);

// service authentification

const auth = getAuth(app);

export { auth };
