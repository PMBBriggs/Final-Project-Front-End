import React from "react";
import "../styles/Header.css";
import { useEffect, useState } from "react";
import GetGames from "../models/Games";
import { Result } from "../models/Games";
import getGames from "../services/getGames";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [games, setGames] = useState<Result[]>([]);

  function search(searchInput: string) {
    getGames(searchInput).then((data) => {
      setGames(data);
    });
  }

  let navRef = React.createRef<HTMLDivElement>();
  /* Open */
  function openNav() {
    navRef.current!.style.height = "100%";
  }
  /* Close */
  function closeNav() {
    navRef.current!.style.height = "0%";
  }
  return (
    <div className="Header">
      <a id="logoHomeButton" href="/">
        <h1 className="logo">Gamer Depot</h1>
      </a>
      <form action="/search">
        <input
          name="query"
          placeholder="Search...."
          className="searchBar"
          id="searchbar"
          type="text"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          value={searchInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              search(searchInput);
            }
          }}
        />
      </form>

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
          <a href="/">Home</a>
          <a href="#">Profile</a>
          <a href="#">Wishlist</a>
          <a href="/search">Advanced Search</a>
        </div>
      </div>
      {/* <!-- Use any element to open/show the overlay navigation menu --> */}
      <span onClick={() => openNav()}>
        <i className="fa-solid fa-bars"></i>
      </span>
    </div>
  );
}
