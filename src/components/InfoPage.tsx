import React, { useEffect, useState } from 'react'
import GameDetails from '../Services/getDetails';
import { GetDetails } from '../Models/getDetails';
import { useParams } from 'react-router-dom';


  export default function InfoPage () {
  const [games, setGames] = useState<GetDetails>()
  const [gamesDetails, setGamesDetails] = useState<GetDetails>()
  const id = useParams ().id

  useEffect(() => {
    // 57797 spyro 57840 tekken
      GameDetails(3498).then(data => {
          setGames(data);
      });
  }, []);

  // Trying to get the game rating on the info page (esrb rating) is in getGames Models (gameDetails.platform)
  useEffect(() => {
      GameDetails(57840).then(data => {
          setGamesDetails(data);
      });
  }, []);


//   getDetails(id!).then(data => setGames(data));
//  }, []);

  return (
    <div className='InfoPage'>
      <button onClick={()=>{
        console.log(games);
        
      }}>console details</button>
      
      <h1>InfoPage</h1>
      <section>{games?.released}</section>
      {/* <section>{games?.platforms}</section> */}
      {/* <section>{games?.esrb_rating}</section> */}

      <h3>{games?.name}</h3>
      <section>{games?.description}</section>
      <p>{games?.rating}</p>
      <img src= {`${games?.background_image}`} alt="poster" className="poster" />
      <img src= {`${games?.background_image_additional}`} alt="poster" className="poster" />

      </div>
  )
}

