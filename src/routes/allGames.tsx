import { useContext } from "react";
import Wishlist from "../components/WishList";
import WishlistContext from "../context/WishlistContext";

export default function AllGamesRoute() {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div>
      <Wishlist gamewishlist={wishlist} />
    </div>
  );
}
