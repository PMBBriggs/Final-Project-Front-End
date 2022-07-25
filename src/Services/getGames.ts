import axios from "axios";
import Games, { Result } from "../models/Games";
import GetGames from "../models/Games";
import { FilterState } from "../models/Filters";


const baseUrl = process.env.REACT_APP_FINAL_API_URL;

if (!baseUrl) {
  console.error("Missing config REACT_APP_FINAL_API_URL");
}

export default function getGames(
  search: string,
  filters?: FilterState
): Promise<Result[]> {

  // try param as string OR number**

  let platforms = [];
  let tags = [];
  let genres = [];
  // If filters is passed (it's not null) convert filters to a number
  if (filters?.platform.PC) {
    platforms.push(4);
  }
  if (filters?.platform.PlayStation) {
    platforms.push(27, 15, 16, 18, 187);
  }
  if (filters?.platform.NintendoSwitch) {
    platforms.push(7);
  }
  if (filters?.platform.Xbox) {
    platforms.push(14, 80, 1);
  }
  if (filters?.platform.Nintendo64) {
    platforms.push(83);
  }
  if (filters?.platform.NES) {
    platforms.push(49, 79);
  }
  if (filters?.genre.Action) {
    genres.push(4);
  }
  if (filters?.genre.Adventure) {
    genres.push(3);
  }
  if (filters?.genre.Casual) {
    genres.push(40);
  }
  if (filters?.genre.fighting) {
    genres.push(6);
  }
  if (filters?.genre.Racing) {
    genres.push(1);
  }
  if (filters?.genre.RealTimeStrategy) {
    genres.push(10);
  }
  if (filters?.genre.RolePlaying) {
    genres.push(5);
  }
  if (filters?.genre.Simulation) {
    genres.push(14);
  }
  if (filters?.genre.Sport) {
    genres.push(15);
  }
  if (filters?.tags.Single) {
    tags.push(31);
  }
  if (filters?.tags.Multi) {
    tags.push(7);
  }

  var apiKey = process.env.REACT_APP_FINAL_API_KEY || "";
  return (
    axios
      .get<GetGames>(`https://api.rawg.io/api/games?`, {
        // removed template literal - url showed 'search twice'

        params: {
          key: apiKey,
          search: search,
          platforms: platforms.length ? platforms.join(",") : null,
          tags: tags.length ? tags.join(",") : null,
          genres: genres.length ? genres.join(",") : null,
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
  console.log("adding a game inside the route");

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
