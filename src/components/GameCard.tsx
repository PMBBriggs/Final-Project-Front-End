import { useContext, useState } from "react";
import WishListContext from "../context/WishListContext";
import GetDetails from "../models/Details";
import GetGames, { Result } from "../models/Games";

// interface GameCardProps {
//   game: GetDetails;
//   games: Result;
// }

export default function GameCard(game : Result) {
  const {wishlist, addToWishList, removeFromWishList } =
    useContext(WishListContext);

  // const [games, setGames] = useState<Result[]>([]);
  return (
    <div className="Gamecard">
      <p>{game.name}</p>
      <img src={game.background_image}></img>
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

      
        <i
          className="fa-regular fa-heart"
          onClick={() => {
            
            addToWishList(game);
            console.log(wishlist);
          }}
        ></i>
        <i
          className="fa-solid fa-heart"
          onClick={() => {
            // console.log(game);
            removeFromWishList(game?.id)}}
        ></i>
     
      
    </div>
  );
}
