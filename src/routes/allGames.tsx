import { useEffect, useState } from "react";
import { Result } from "../models/Games";
import { addGame, deleteGame, fetchAllGames } from "../services/getGames";
import GetDetails from "../models/Details";
import GetGames from "../models/Games";
import Wishlist from "../components/WishList";

export default function AllGamesRoute() {
  const [games, setGames] = useState<Result[]>([]);

  useEffect(() => {
    fetchAllGames().then((res) => setGames(res));
  }, []);

  return (
    <div className="Gamecard">
      <Wishlist gamewishlist={games} />
    </div>
  );
}
