import { Result } from "../models/Games";
import GameCard from "./GameCard";

interface Props {
  gamewishlist: Result[];
}

export default function Wishlist({ gamewishlist }: Props) {
  return (
    <div>
      {gamewishlist.map((game, index) => {
        return <GameCard {...game} key={index} />;
      })}
    </div>
  );
}
