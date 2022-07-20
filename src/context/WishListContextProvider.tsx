import { ReactNode, useState } from "react";
import Games, { Result } from "../models/Games";
import WishListContext from "./WishListContext";

interface Props {
  children: ReactNode;
}

const WishListContextProvider = ({ children }: Props) => {
  const [wishlist, setWishList] = useState<Result[]>([]);

  const addToWishList = (games: Result): void => {
    setWishList((prev) => [...prev, games]);
  };

  const removeFromWishList = (id: number): void => {
    setWishList((prev) => {
      const index: number = prev.findIndex((game) => game.id == id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  const isWish = (id: number): boolean => wishlist.some((games) => games.id);

  return (
    <WishListContext.Provider
      value={{ wishlist, addToWishList, removeFromWishList, isWish }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export default WishListContextProvider;
