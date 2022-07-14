import { useEffect, useState } from "react"
import { GetGames, ResultsEntity } from "../models/getGames";
import getGames from "../services/getGames";


export default function Search(){
    const [name, setName] = useState ('');
    const [games, setGames] = useState <ResultsEntity[]>([]);
    // const [search, setSearch] = useState ('');

    useEffect(() => {
        getGames('tekken').then((data) => {
          setGames(data);
        });
      }, []);


    return(<div className='SearchPage'>
        <button onClick={() => {
            console.log(games)
        }}>console</button>
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                setName(name);
            }}>
                <label htmlFor="searchBox"></label>
                <input type='text' id="searchBox" placeholder="search game..." defaultValue={name} onChange={(e) => {}}/>
                {/* anytime it changes - e.target.value - call get game on submit - pass in names */}
                <input type='submit'/>search
            </form>
            <p>Advanced Search</p>
            <form>
                <p>Genre</p>
                <p>Platform</p>
                <p>Mode</p>
                {/* tags */}
            </form>
            {/* form for adv search thats hidden - clicking advanced search toggles */}
            <div>
                <p>test</p>
                {/* {games.map((game, index) => <div>
                    <h1 key={index}>{game.name}</h1>
                    <img src={game.background_image} alt="poster"/>
                    <p key={index}> {game.rating}</p>

                </div>)} */}
                
            </div>
        </div>
    </div>)
}