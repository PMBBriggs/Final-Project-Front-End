import { useContext, useState } from "react";
import WishListContext from "../context/WishListContext";
import GetDetails from "../models/Details";
import GetGames, { Result } from "../models/Games";

interface GameCardProps {
  game: GetDetails;
  games: Result;
}

export default function GameCard({ game, games }: GameCardProps) {
  const { isWish, addToWishList, removeFromWishList } =
    useContext(WishListContext);

  // const [games, setGames] = useState<Result[]>([]);
  return (
    <div className="Gamecard">
      <p>{game.name}</p>
      <p>{game.released}</p>
      <p>{game.description_raw}</p>
      {/* <p>{game?.parent_platform!.platform.name}</p> */}
      <p>{game?.esrb_rating!.name}</p>

      {/* <div> from davids project
        <button
          className="heart"
          onClick={() => {
            // console.log(games);

            addToWishList(game.name);
          }}
        >
          <i className="fa-solid fa-heart"></i>{" "}
        </button>

        <button onClick={() => removeFromWishList(games.number)}>
          REMOVE FROM WATCHLIST
        </button>
      </div> */}

      {isWish(games?.id) ? (
        <i
          className="fa-solid fa-heart"
          onClick={() => removeFromWishList(games?.id)}
        ></i>
      ) : (
        <i
          className="fa-regular fa-heart"
          onClick={() => addToWishList(games)}
        ></i>
      )}
    </div>
  );
}
