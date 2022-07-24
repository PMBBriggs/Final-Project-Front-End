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
          type="text"
          name="query"
          placeholder="Search...."
          className="searchBar"
          id="searchbar"
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
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={() => closeNav()}
        >
          &times;
        </a>

        <div className="overlay-content">
          <a href="/">
            {" "}
            <i className="fa-solid fa-house"></i>Home
          </a>
          <a href="/profile">
            {" "}
            <i className="fa-solid fa-user"></i>Profile
          </a>
          <a href="/wishlist">
            {" "}
            <i className="fa-solid fa-bookmark"></i>Wishlist
          </a>
          <a href="/search">
            {" "}
            <i className="fa-solid fa-magnifying-glass"></i>Search
          </a>
        </div>
      </div>
      <span onClick={() => openNav()}>
        <i className="fa-solid fa-bars"></i>
      </span>
    </div>
  );
}
