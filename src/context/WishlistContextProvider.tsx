import { ReactNode, useContext, useEffect, useState } from "react";
import { Result } from "../models/Games";
import { fetchAllGames } from "../services/getGames";

import WishlistContext from "./WishlistContext";

export default function WishlistContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [wishlist, setWishlist] = useState<Result[]>([]);
  useEffect(() => {
    // useEffect to only register once at start
    fetchAllGames().then((res) => setWishlist(res));
  }, []);
  function refreshWishlist() {
    fetchAllGames().then((res) => setWishlist(res));
  }
  return (
    <WishlistContext.Provider value={{ wishlist, refreshWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}
