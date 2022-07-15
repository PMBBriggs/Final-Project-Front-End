import axios from "axios";
import GetDetails from "../models/getDetails";


export default function GameDetails(id: string ): Promise<GetDetails>{
  // try param as string OR number**

    const apiKey = process.env.REACT_APP_FINAL_API_KEY|| "";
    // console.log(apiKey);
    
    return axios
        .get<GetDetails>(`https://api.rawg.io/api/games/${id}`,{
          // ${id}^ NEED
            params: {
                key: apiKey,
                id: id
                // everything of the left is how the api takes it querys (key,search)
            }
        })
      
        /* .get<Popular>(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=2`) */
        .then((response) => {return response.data})
}

// get<GetDetails>(`https://api.rawg.io/api/games/${id} ** Before*

// https://api.rawg.io/api/games?page=1&key=fa8485bcb51e4a8dab23493baa1d1ce9&search=spyro

// https://api.rawg.io/api/games/57797?page=1&key=fa8485bcb51e4a8dab23493baa1d1ce9