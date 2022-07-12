import React, { useEffect, useState } from 'react'
import GameDetails from '../Services/getDetails'
import { GetDetails } from '../Models/getDetails'
import { useParams } from 'react-router-dom'

export default function GameCard(game:GetDetails) {
  // const [games, setGames] = useState<GetDetails[]>()
  // const search = useParams ().search
  // useEffect(() => {
  //     GameDetails(search!).then(data => {
  //         setGames(data);
  //     });
  // }, []);

  return (
    <div className='Gamecard'>
      
      
    </div>
  )
}
