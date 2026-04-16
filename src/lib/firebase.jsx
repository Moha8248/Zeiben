import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkovF7ntx57UXM9-TlnoDSlWxm3liY-Gk",
  authDomain: "zeiben-41914.firebaseapp.com",
  projectId: "zeiben-41914",
  storageBucket: "zeiben-41914.firebasestorage.app",
  messagingSenderId: "148042834059",
  appId: "1:148042834059:web:a4146605767ef610aa348e",
  measurementId: "G-N62KQ9LFQ4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = typeof window === "undefined" ? null : isSupported().then((supported) => supported ? getAnalytics(app) : null);

export {
  analytics,
  app,
  auth,
  db
};
