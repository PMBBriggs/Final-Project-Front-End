import { createContext } from "react";
import Games, { Result } from "../models/Games";

interface WishListContextModel {
  wishlist: Result[];
  addToWishList: (games: Result) => void;
  removeFromWishList: (id: number) => void;
}

const defaultValues: WishListContextModel = {
  wishlist: [],
  addToWishList: () => {},
  removeFromWishList: () => {},
};

const WishListContext = createContext(defaultValues);

export default WishListContext;
