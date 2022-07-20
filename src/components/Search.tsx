import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import GetGames from "../models/Games";
import { Result } from "../models/Games";
import getGames from "../services/getGames";
import "../styles/Search.css";

export default function Search() {
  const [games, setGames] = useState<Result[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    getGames(searchParams.get("query") as string).then((data) => {
      setGames(data);
    });
  }, []);
  function goToGameCard(game: Result) {
    navigate(`/infopage/${game.id}`);
  }
  return (
    <div className="SearchPage">
      <div className="advancedSearch">
        <p className="dropbtn">Advanced Search</p>

        {/* <div className="topnav">
          
          <div className="dropdown">
            <button className="dropbtn">
              Platform
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content container">
              <p>Nintendo Switch</p>
              <p>PC</p>
              <p>PlayStation</p>
              <p>XBOX</p>
              <p>Game Cube</p>
              <p>Nintendo 64</p>
              <p>Gameboy</p>
              <p>NES</p>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">
              Mode
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content container">
              <a href="#">Single-Player</a>
              <a href="#">Multipler</a>
            </div> */}

        <form id="advDropdown">
          <label className="subcategories">Genre</label>
          <label className="subcategories">Platform</label>
          <label className="subcategories">Mode</label>
        </form>
      </div>
      <div className="searchResultsContainer">
        {games.map((game, index) => (
          <div
            onClick={(e) => {
              goToGameCard(game);
            }}
          >
            <h1 className="nameOfGame" key={index}>
              {game.name}
            </h1>
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
