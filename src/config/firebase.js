import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAoKheLdKy-7MhjBM_v6sxHKAC0JMtScSU",
  authDomain: "projectewoh.firebaseapp.com",
  projectId: "projectewoh",
  storageBucket: "projectewoh.appspot.com",
  messagingSenderId: "1011216721414",
  appId: "1:1011216721414:web:39d73dbd46c97243dcc587",
};

const app = initializeApp(firebaseConfig);
const firebaseAuthentication = getAuth(app);
const firebaseDatabase = getDatabase(app);

export { firebaseAuthentication, firebaseDatabase };
