import React from "react";
import "../styles/Header.css";
import { useEffect, useState } from "react";
import GetGames from "../models/getGames";
import { Result } from "../models/getGames";
import getGames from "../services/getGames";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [games, setGames] = useState<Result[]>([]);
  //const [getGames, setGetGames] = useState<Result>();

  function search(searchInput: string) {
    getGames(searchInput).then((data) => {
      setGames(data);
    });
  }

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
    <div>
      <div className="Header">
        <h1 className="logo">Gamer Depot</h1>

        <input
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
      <div className="searchResults">
        {games.map((game, index) => (
          <div>
            <h1 key={index}>{game.name}</h1>
            <img
              src={game.background_image}
              alt="poster"
              className="mainPoster"
            />
            <p> {game.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
