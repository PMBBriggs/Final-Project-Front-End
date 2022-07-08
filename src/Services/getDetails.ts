import axios from "axios";
import { GetDetails } from "../Models/getDetails";

const apiKey = process.env.REACT_APP_FINAL_API_KEY



export default function GameDetails(): Promise<GetDetails[]>{
    const apiKey = process.env. REACT_APP_FINAL_API_KEY|| "";
    return axios
        .get<GetDetails>(``,{
            params: {
                api_key: apiKey,
            }
        })
        /* .get<Popular>(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=2`) */
        .then((response) => {return response.data.getDetails})
}

https://api.rawg.io/api/games?page=1&key=fa8485bcb51e4a8dab23493baa1d1ce9&search=spyro