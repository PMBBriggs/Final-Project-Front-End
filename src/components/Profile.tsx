import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import "../styles/Profile.css";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { userInterface } from "../models/UserData";

export default function () {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState<userInterface>();
  console.log(user);
  return (
    <div id="signInDiv">
      {!user ? (
        <button
          id="signInButton"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign In
        </button>
      ) : (
        <button
          id="signOutButton"
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </button>
      )}
      <div id='profileBorder'>
      {!user ? null : (
        <>
          <div id="welcomeUser">
            <p id="greeting"> Welcome, </p>
            <p className="displayName">{user?.displayName}</p>
          </div>
          <img className="userPic" src={user?.photoURL as string} />
          <p>Email: {user?.email}</p>
          <p>
            <a href="/wishlist"> My Wishlist</a>
          </p>
        </>
      )}
      </div>
    </div>
  );
}
