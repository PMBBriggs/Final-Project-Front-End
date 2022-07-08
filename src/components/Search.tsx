export default function Search(){
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