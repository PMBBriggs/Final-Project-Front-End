import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createWatchCompilerHost } from "typescript";
import WishListContext from "../context/WishListContext";
import GetDetails from "../models/Details";
import { Result } from "../models/Games";
import GameCard from "./GameCard";

export default function Wishlist() {
  const [games, setGames] = useState<Result[]>([]);
  const navigate = useNavigate();

  const { wishlist } = useContext(WishListContext);

  // function goToGameCard(game: Result) {
  //   navigate(`/infopage/${game.id}`);
  // }

  return (
    <div className="wishListContainer">
      <h1>Wish List</h1>
      <div className="gameSection">
        {wishlist.map((game,index) => 
          <GameCard {...game}/>
        )}
      </div>
      {/* {games.map((game, index) => (
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
      ))} */}
    </div>
  );
}
