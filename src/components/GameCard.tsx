import React, { useEffect, useState } from 'react'
import GameDetails from '../services/getDetails'
import GetDetails from '../models/getDetails'
import { useParams } from 'react-router-dom'

export default function GameCard(game:GetDetails) {
  // const [games, setGames] = useState<GetDetails[]>()
  // const search = useParams ().search
  // useEffect(() => {
  //     GameDetails(search!).then(data => {
  //         setGames(data);
  //     });
  // }, []);

  // does game card need to be in the shape of GetGames since it will come up when games are being searched? 

  return (
    <div className='Gamecard'>
      
      
    </div>
  )
}
