import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import GetGames from "../models/Games";
import { Result } from "../models/Games";
import getGames from "../services/getGames";
import "../styles/Search.css";
import FilterContext from "../context/FilterContext";
import Footer from "./Footer";

export default function Search() {
  const [games, setGames] = useState<Result[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [show, setShow] = useState(false);
  const { filters, updatePlatformFilter, updateGenreFilter, updateTagsFilter } =
    useContext(FilterContext);
  const navigate = useNavigate();

  useEffect(() => {
    getGames(searchParams.get("query") as string, filters).then((data) => {
      setGames(data);
    });
  }, [filters]);
  useEffect(() => {
    getGames(searchParams.get("query") as string).then((data) => {
      setGames(data);
    });
  }, []);
  function goToGameCard(game: Result) {
    navigate(`/infopage/${game.id}`);
  }

  return (
    <div className="SearchPage">
      <div className="advancedSearch">
        <button
          className="dropbtn"
          onClick={() => {
            setShow(!show);
          }}
        >
          Advanced Search
        </button>
        <form
          id="advDropdown"
          style={show === true ? { display: "block" } : { display: "none" }}
        >
          <div className="filterSection">
            <div className="platformFilters">
              <p>Platforms</p>
              <input
                id="PC"
                type="checkbox"
                checked={filters.platform.PC}
                onChange={(e) => {
                  updatePlatformFilter("PC");
                }}
              />
              <label htmlFor="PC">PC</label>

              <input
                id="PlayStation"
                type="checkbox"
                checked={filters.platform.PlayStation}
                onChange={(e) => {
                  updatePlatformFilter("PlayStation");
                }}
              />
              <label htmlFor="PlayStation">PlayStation</label>

              <input
                id="NintendoSwitch"
                type="checkbox"
                checked={filters.platform.NintendoSwitch}
                onChange={(e) => {
                  updatePlatformFilter("NintendoSwitch");
                }}
              />
              <label htmlFor="NintendoSwitch">Nintendo Switch</label>

              <input
                id="Xbox"
                type="checkbox"
                checked={filters.platform.Xbox}
                onChange={(e) => {
                  updatePlatformFilter("Xbox");
                }}
              />
              <label htmlFor="Xbox">Xbox</label>

              <input
                id="Nintendo64"
                type="checkbox"
                checked={filters.platform.Nintendo64}
                onChange={(e) => {
                  updatePlatformFilter("Nintendo64");
                }}
              />
              <label htmlFor="Nintendo64">Nintendo64</label>

              <input
                id="Gameboy"
                type="checkbox"
                checked={filters.platform.Gameboy}
                onChange={(e) => {
                  updatePlatformFilter("Gameboy");
                }}
              />
              <label htmlFor="Gameboy">Gameboy</label>

              <input
                id="NES"
                type="checkbox"
                checked={filters.platform.NES}
                onChange={(e) => {
                  updatePlatformFilter("NES");
                }}
              />
              <label htmlFor="NES">NES</label>
            </div>

            <div className="genreFilters">
              <p>Genres</p>
              <input
                id="Action"
                type="checkbox"
                checked={filters.genre.Action}
                onChange={(e) => {
                  updateGenreFilter("Action");
                }}
              />
              <label htmlFor="Action">Action</label>

              <input
                id="Adventure"
                type="checkbox"
                checked={filters.genre.Adventure}
                onChange={(e) => {
                  updateGenreFilter("Adventure");
                }}
              />
              <label htmlFor="Adventure">Adventure</label>

              <input
                id="Casual"
                type="checkbox"
                checked={filters.genre.Casual}
                onChange={(e) => {
                  updateGenreFilter("Casual");
                }}
              />
              <label htmlFor="Casual">Casual</label>

              <input
                id="fighting"
                type="checkbox"
                checked={filters.genre.fighting}
                onChange={(e) => {
                  updateGenreFilter("fighting");
                }}
              />
              <label htmlFor="fighting">fighting</label>

              <input
                id="Racing"
                type="checkbox"
                checked={filters.genre.Racing}
                onChange={(e) => {
                  updateGenreFilter("Racing");
                }}
              />
              <label htmlFor="Racing">Racing</label>

              <input
                id="RealTimeStrategy"
                type="checkbox"
                checked={filters.genre.RealTimeStrategy}
                onChange={(e) => {
                  updateGenreFilter("RealTimeStrategy");
                }}
              />
              <label htmlFor="RealTimeStrategy">RealTimeStrategy</label>

              <input
                id="RolePlaying"
                type="checkbox"
                checked={filters.genre.RolePlaying}
                onChange={(e) => {
                  updateGenreFilter("RolePlaying");
                }}
              />
              <label htmlFor="RolePlaying">RolePlaying</label>

              <input
                id="Simulation"
                type="checkbox"
                checked={filters.genre.Simulation}
                onChange={(e) => {
                  updateGenreFilter("Simulation");
                }}
              />
              <label htmlFor="Simulation">Simulation</label>

              <input
                id="Sport"
                type="checkbox"
                checked={filters.genre.Sport}
                onChange={(e) => {
                  updateGenreFilter("Sport");
                }}
              />
              <label htmlFor="Sport">Sport</label>
            </div>

            <div className="modeFilters">
              <p>Mode</p>
              <input
                id="Single"
                type="checkbox"
                checked={filters.tags.Single}
                onChange={(e) => {
                  updateTagsFilter("Single");
                }}
              />
              <label htmlFor="Single">Single</label>
              <input
                id="Multi"
                type="checkbox"
                checked={filters.tags.Multi}
                onChange={(e) => {
                  updateTagsFilter("Multi");
                }}
              />
              <label htmlFor="Multi">Multi</label>
            </div>
          </div>
        </form>
      </div>
      <div className="searchResultsContainer">
        {games.map((game, index) => (
          <div
            onClick={(e) => {
              goToGameCard(game);
            }}
          >
            <h1 className="nameOfGame" key={index}>
              {game.name}
            </h1>
            <img
              src={game.background_image}
              alt="poster"
              className="mainPoster"
            />
            <p className="gameRating"> Rating: {game.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
