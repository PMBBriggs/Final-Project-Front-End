import { Result } from "../models/Games";
import GameCard from "./GameCard";
import "../styles/WishList.css";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

interface Props {
  gamewishlist: Result[];
}

export default function Wishlist({ gamewishlist }: Props) {
  const { user } = useContext(AuthContext);
  return (
    <div className="WishList">
      {!user ? null : (
        <>
          {gamewishlist.map((game, index) => {
            return <GameCard {...game} key={game._id} />;
          })}
        </>
      )}
    </div>
  );
}
