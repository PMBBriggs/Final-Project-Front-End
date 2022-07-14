import React, { useEffect, useState } from 'react'
import GameDetails from '../services/getDetails';
import { GetDetails } from '../models/getDetails';
import { useParams } from 'react-router-dom';

  export default function InfoPage () {
  const [games, setGames] = useState<GetDetails>()
  const id = useParams ().id

  useEffect(() => {
      GameDetails(57840).then(data => {
          setGames(data);
      });
  }, []);


//   getDetails(id!).then(data => setGames(data));
//  }, []);

  return (
    <div className='InfoPage'>
      <h1>InfoPage</h1>
      <h3>{games?.name}</h3>
      <section>{games?.description}</section>
      <p>{games?.rating}</p>
      <img src= {`${games?.background_image}`} alt="poster" className="poster" />

      </div>
  )
}

