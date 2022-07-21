import { ReactNode, useState } from "react";
import Games, { Result } from "../models/Games";
import WishListContext from "./WishListContext";

interface Props {
  children: ReactNode;
}

const WishListContextProvider = ({ children }: Props) => {
  const [wishlist, setWishList] = useState<Result[]>([]);

  function addToWishList(wish: Result): void {
    setWishList((prev) => {
      let copiedGames = [...prev]
      copiedGames.push(wish)

      return copiedGames
    });

    // let index: number = 0;
    // wishlist.map(game => {
    //   if(game.id === wish.id)
    //   index += 1;
    // })
    // if(index === 0){
    //   setWishList((prev) => {
    //     let copiedGames = [...prev]
    //     copiedGames.push(wish)

    //     return copiedGames
    //   });
    };
    console.log(wishlist);

    const removeFromWishList = (id: number): void => {
      setWishList((prev) => {
        const index: number = prev.findIndex((game) => game.id == id);
        return [...prev.slice(0, index), ...prev.slice(index + 1)];
      });
    };
  
  
    return (
      <WishListContext.Provider
        value={{ wishlist, addToWishList, removeFromWishList}}
      >
        {children}
      </WishListContext.Provider>
    );
  };

export default WishListContextProvider;
