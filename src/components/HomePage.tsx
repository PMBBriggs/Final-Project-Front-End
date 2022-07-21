import { useEffect, useState } from "react";
import { Result } from "../models/Games";
import getGenres from "../services/getGenres";
import "../styles/HomePage.css";
import GameCard from "./GameCard";

export default function HomePage() {
  const [genreRPG, setGenreRPG] = useState<Result[]>([]);
  const [genreAction, setGenreAction] = useState<Result[]>([]);
  // genres take id

  useEffect(() => {
    getGenres("5").then((data) => {
      setGenreRPG(data);
    });
    getGenres("4").then((data) => {
      setGenreAction(data);
    });
  }, []);

  return (
    <div className="HomePage">
      <h2 className="categories">Recently Released</h2>
      <h2 className="categories">Genre</h2>
      <div className="categoryContainer">
        {/* maps out games from selected genre from dropdown */}
        {genreRPG.map((game, index) => (
          <div>
            <GameCard {...game}/>
          </div>
        ))}
      </div>
      <h2 className="categories">Platform</h2>
      <h2 className="categories">Upcoming Titles</h2>
    </div>
  );
}
