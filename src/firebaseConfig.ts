import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC931K9c3Lng8e3BKCT-usEPPgMW3vFaVc",
  authDomain: "final-project-f8e73.firebaseapp.com",
  projectId: "final-project-f8e73",
  storageBucket: "final-project-f8e73.appspot.com",
  messagingSenderId: "461602032311",
  appId: "1:461602032311:web:80a6b7dd8b760a40c5db32",
  measurementId: "G-J9VZRETKMQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

//sign in and sign out function
export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
