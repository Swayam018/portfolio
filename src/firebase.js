import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7h_t2e39us56fKMC5iQ2gHLcDcWTdORk",
  authDomain: "portfolio-53171.firebaseapp.com",
  projectId: "portfolio-53171",
  storageBucket: "portfolio-53171.appspot.com",
  messagingSenderId: "654540156239",
  appId: "1:654540156239:web:975b0902cd2336da30a93a"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
