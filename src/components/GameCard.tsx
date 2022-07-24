import { useNavigate } from "react-router-dom";
import GetDetails from "../models/Details";
import { Result } from "../models/Games";
import { addGame, deleteGame } from "../services/getGames";

// interface GameCardProps {
//   game: GetDetails;
// }
// { game }: GameCardProps

export default function GameCard(game: Result) {
  const navigate = useNavigate();

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
          addGame(game);
          //   console.log(wishlist);
        }}
      ></i>
      ) : (
      <i
        className="fa-solid fa-heart"
        onClick={() => {
          // console.log(game);
          deleteGame(game);
        }}
      ></i>
      )
    </div>
  );
}
