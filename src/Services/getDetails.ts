const apiKey = process.env.REACT_APP_FINAL_API_KEY

import axios from "axios";


// export default function getGenre(): Promise<Results[]>{
//     const apiKey = process.env.REACT_APP_TMDB_API_KEY || "";
//     return axios
//         .get<genres>(`https://api.themoviedb.org/3/movie/popular`,{
//             params: {
//                 api_key: apiKey,
//             }
//         })
//         /* .get<Popular>(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=2`) */
//         .then((response) => {return response.data.results})
// }