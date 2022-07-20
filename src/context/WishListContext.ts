import { createContext } from "react";
import Games, { Result } from "../models/Games";

interface WishListContextModel {
  wishlist: Result[];
  addToWishList: (games: Result) => void;
  removeFromWishList: (id: number) => void;
  isWish: (id: number) => boolean;
}

const defaultValues: WishListContextModel = {
  wishlist: [],
  addToWishList: () => {},
  removeFromWishList: () => {},
  isWish: () => false,
};

const WishListContext = createContext(defaultValues);

export default WishListContext;
