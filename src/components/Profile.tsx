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
          id="signInOutButton"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign In
        </button>
      ) : (
        <button
          id="signInOutButton"
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </button>
      )}
      {!user ? null : (
        <>
          <div id="welcomeUser">
            <p id="greeting"> Welcome, </p>
            <p className="displayName">{user?.displayName}</p>
          </div>
          <img className="userPic" src={user?.photoURL as string} />
          <p>Email: {user?.email}</p>
          <p>
            {" "}
            My Wishlist
            <a href="/wishlist"></a>
          </p>
        </>
      )}
    </div>
  );
}
