import axios from "axios";
import Games, { Result } from "../models/Games";
import GetGames from "../models/Games";

const baseUrl = process.env.REACT_APP_FINAL_API_URL;

if (!baseUrl) {
  console.error("Missing config REACT_APP_FINAL_API_URL");
}

export default function getGames(search: string): Promise<Result[]> {
  // try param as string OR number**

  var apiKey = process.env.REACT_APP_FINAL_API_KEY || "";
  return (
    axios
      .get<GetGames>(`https://api.rawg.io/api/games?`, {
        // removed template literal - url showed 'search twice'

        params: {
          key: apiKey,
          search: search,
          // everything of the left is how the api takes it querys (key,search)
        },
      })

      /* .get<Popular>(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=2`) */
      .then((response) => {
        return response.data.results;
      })
  );
}

export function fetchAllGames(): Promise<Result[]> {
  return axios.get<Result[]>(`${baseUrl}/wishlist`).then((res) => res.data);
}

export function addGame(game: Result): Promise<Result> {
  return axios
    .post<Result>(`${baseUrl}/wishlist`, game)
    .then((response) => response.data);
}

export function deleteGame(game: Result): Promise<Result> {
  return axios
    .delete(`${baseUrl}/wishlist/${game.id}`)
    .then((response) => response.data);
}

// get<GetDetails>(`https://api.rawg.io/api/games/${id} ** Before*

// https://api.rawg.io/api/games?page=1&key=fa8485bcb51e4a8dab23493baa1d1ce9&search=spyro

// https://api.rawg.io/api/games/57797?page=1&key=fa8485bcb51e4a8dab23493baa1d1ce9
