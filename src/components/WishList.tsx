import { Result } from "../models/Games";
import GameCard from "./GameCard";
import "../styles/WishList.css";

interface Props {
  gamewishlist: Result[];
}

export default function Wishlist({ gamewishlist }: Props) {
  return (
    <div className="WishList">
      {gamewishlist.map((game, index) => {
        return <GameCard {...game} key={game.id} />;
      })}
    </div>
  );
}
