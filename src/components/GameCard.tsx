import { useNavigate } from "react-router-dom";
import GetDetails from "../models/Details";
import { Result } from "../models/Games";

// interface GameCardProps {
//   game: GetDetails;
// }
// { game }: GameCardProps

export default function GameCard(game : Result) {
  const navigate = useNavigate();

  function goToGameCard(game: Result) {
    navigate(`/infopage/${game.id}`);
  }

  return (
    <div className="Gamecard"  onClick={(e) => {
      goToGameCard(game);
    }}>
      <p className="gameName">{game.name}</p>
      <img 
              src={game.background_image}
              alt="poster"
              className="mainPoster"
            />
    </div>
  );
}
