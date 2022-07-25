import { Result } from "../models/Games";
import GetGames from "../models/Games";
import axios from "axios";

export default function getMostPopular(dates: string): Promise<Result[]> {

  var apiKey = process.env.REACT_APP_FINAL_API_KEY || "";
  return (
    axios
      .get<GetGames>(`https://api.rawg.io/api/games?`, {

        params: {
          key: apiKey,
          dates: dates,
          ordering: "-added"
          // everything of the left is how the api takes it querys (key,search)
        },
      })

      /* .get<Popular>(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=2`) */
      .then((response) => {
        return response.data.results;
      })
  );
}