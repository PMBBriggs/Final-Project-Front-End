import React from "react";
import "../styles/Header.css";
export default function Header() {
<<<<<<< search-service/component
    return(<div className='Header'>
        <h1>Title Name Here.. </h1>
        <nav>
            <a href="/">Home</a><br></br>
            <a href="/search">Search</a>
            <p>Wishlist</p>
            <p>Profile</p>
        </nav>
     
=======
  let navRef = React.createRef<HTMLDivElement>();
  /* Open */
  function openNav() {
    console.log("here");
    console.log(navRef);
    navRef.current!.style.height = "100%";
  }
  /* Close */
  function closeNav() {
    navRef.current!.style.height = "0%";
  }
  return (
    <div className="Header">
      <h1>Gamer Depot</h1>
>>>>>>> main

      {/* <!-- The overlay --> */}
      <div ref={navRef} id="myNav" className="overlay">
        {/* <!-- Button to close the overlay navigation --> */}
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={() => closeNav()}
        >
          &times;
        </a>
        {/* <!-- Overlay content --> */}
        <div className="overlay-content">
          <a href="#">Home</a>
          <a href="#">Profile</a>
          <a href="#">Wishlist</a>
          <a href="#">Search</a>
        </div>
      </div>
      {/* <!-- Use any element to open/show the overlay navigation menu --> */}
      <span onClick={() => openNav()}>
        <i className="fa-solid fa-bars"></i>
      </span>
    </div>
  );
}
