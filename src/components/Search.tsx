import { useEffect, useState } from "react"
import { GetDetails } from "../Models/getDetails";
import GetGames from "../Services/getGames";

export default function Search(){
    const [name, setName] = useState ('');
    const [game, setGames] = useState <GetDetails[]>([]);
    // const [search, setSearch] = useState ('');

    // useEffect(() => {
    //     GetGames(name).then(data => {
    //       setGames(data);
    //     });
    //   }, [name]);


    return(<div className='SearchPage'>
        <div>
            <label htmlFor="searchBox"></label>
            <input type='text' id="searchBox" placeholder="search game..."></input>
            <p>Advanced Search</p>
            <form>
                <p>Genre</p>
                <p>Platform</p>
                <p>Mode</p>
                {/* tags */}
            </form>
            {/* form for adv search thats hidden - clicking advanced search toggles */}
        </div>
    </div>)
}