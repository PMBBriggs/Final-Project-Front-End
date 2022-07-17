import { useEffect, useState } from "react";
import GetGames from "../models/getGames";
import { Result } from "../models/getGames";
import getGames from "../services/getGames";
import "../styles/Search.css";


export default function Search() {
  const [name, setName] = useState("");
  const [games, setGames] = useState<Result[]>([]);
  // const [search, setSearch] = useState ('');

  useEffect(() => {
    getGames(name).then((data) => {
      setGames(data);
    });
  }, [name]);

  return (
    <div className="SearchPage">
      {/* <button onClick={() => {
            console.log(name)
        }}>console</button> */}
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setName(name);
          }}
        >
          <label htmlFor="searchBox"></label>
          <input
            type="text"
            id="searchBox"
            placeholder="search game..."
            defaultValue={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {/* anytime it changes - e.target.value - call get game on submit - pass in names */}
          <input type="submit" />
        </form>
        <p className="dropbtn">Advanced Search</p>
        <form id="advDropdown">
          <p>Genre</p>
          <p>Platform</p>
          <p>Mode</p>
          {/* tags */}
        </form>
        {/* form for adv search thats hidden - clicking advanced search toggles */}
        <div className="searchResultsContainer">
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
          {/* img needs to be link to game card*/}
        </div>
      </div>
    </div>
  );
}
