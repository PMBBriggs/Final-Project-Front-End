import { createContext } from "react";
import { Result } from "../models/Games";

export interface WishlistContextModel {
  wishlist: Result[];
  refreshWishlist: () => void;
}
const defaultValue: WishlistContextModel = {
  wishlist: [],
  refreshWishlist: () => {},
};
const WishlistContext = createContext(defaultValue);
export default WishlistContext;
