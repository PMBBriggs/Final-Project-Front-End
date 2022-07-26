import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GetDetails from "../models/Details";
import { Result } from "../models/Games";
import { addGame, deleteGame } from "../services/getGames";
import '../styles/GameCard.css'

// interface GameCardProps {
//   game: GetDetails;
// }
// { game }: GameCardProps

export default function GameCard(game: Result) {
  const navigate = useNavigate();
  const [showHeart, setShowHeart] = useState(false);
  function goToGameCard(game: Result) {
    navigate(`/infopage/${game.id}`);
  }

  return (
    <div className="Gamecard">
      <p>{game.name}</p>
      <img
        src={game.background_image}
        alt="poster"
        className="mainPoster"
        onClick={(e) => {
          goToGameCard(game);
        }}
      />
      <i
        className="fa-regular fa-heart"
        onClick={() => {
          console.log("adding a game");

          addGame(game);
          setShowHeart(!showHeart);
          //   console.log(wishlist);
        }}
        style={showHeart === false ? { display: "block" } : { display: "none" }}
      ></i>
      <i
        className="fa-solid fa-heart"
        onClick={() => {
          console.log("deleting a game");
          deleteGame(game);
          setShowHeart(!showHeart);
        }}
        style={showHeart === true ? { display: "block" } : { display: "none" }}
      ></i>
    </div>
  );
}
