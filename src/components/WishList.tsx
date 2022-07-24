import { Result } from "../models/Games";
import GameCard from "./GameCard";

interface Props {
  gamewishlist: Result[];
}

export default function Wishlist({ gamewishlist }: Props) {
  return (
    <div>
      <h1>Wish List</h1>
      <h1>Wish List</h1>
      <h1>Wish List</h1>
      <h1>Wish List</h1>
      <h1>Wish List</h1>
      <h1>Wish List</h1>
      <h1>Wish List</h1>
      <h1>Wish List</h1>
      {gamewishlist.map((game, index) => {
        return <GameCard {...game} />;
      })}
    </div>
  );
}
