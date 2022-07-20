import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GetDetails from "../models/Details";
import { Result } from "../models/Games";

export default function Wishlist() {
  const [games, setGames] = useState<Result[]>([]);
  const navigate = useNavigate();
  function goToGameCard(game: Result) {
    navigate(`/infopage/${game.id}`);
  }

  return (
    <div className="wishListContainer">
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
        </div>
      ))}
    </div>
  );
}
