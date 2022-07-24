import { useEffect, useState } from "react";
import { Result } from "../models/Games";
import getPlatforms from "../services/Platforms";
import getGenres from "../services/getGenres";
import "../styles/HomePage.css";
import GameCard from "./GameCard";
import ImageSlider from "./ImageSlider";
import getMostPopular from "../services/getMostPopular";
import getUpcoming from "../services/getUpcoming";
import Footer from "./Footer";

export default function HomePage() {
  const [show, setShow] = useState(false);
  const [genre, setGenre] = useState<Result[]>([]);
  const [platform, setPlatform] = useState<Result[]>([]);
  const [popular,setPopular] = useState<Result[]>([]);
  const [upcoming,setUpcoming] = useState<Result[]>([]);


  useEffect(() => {
    getGenres("40").then((data) => {
      setGenre(data);
    });

    getPlatforms("4").then((data) => {
      setPlatform(data);
    });

    getMostPopular("2021-01-01,2021-12-31").then((data) => {
      setPopular(data);
    })

    getUpcoming("2022-08-01,2022-12-31").then((data) => {
      setUpcoming(data);
    })
  }, []);

  function genreSelection(id: string) {
    getGenres(id).then((data) => {
      setGenre(data);
    });
  }

  function platformSelection(id: string) {
    getPlatforms(id).then((data) => {
      setPlatform(data);
    });
  }

  return (
    <div className="HomePage">
      <div>
        <h1 id="creatorTitle">Creators Picks!</h1>
        <ImageSlider />
      </div>
      <h2 className="categories">2021 Most Popular</h2>
      <div className="categoryContainer">
        {/* maps out games from selected genre from dropdown */}
        {popular.map((game, index) => (
          <div>
            <GameCard {...game} />
          </div>
        ))}
      </div>
      <div className="dropdown">
        <button
          className="dropbtn categories"
          onClick={() => {
            setShow(!show);
          }}
        >
          Genre
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          className="dropdown-content container"
          style={{ display: show === false ? "none" : "block" }}
        >
          <p
            onClick={() => {
              genreSelection("4");
              setShow(!show);
            }}
          >
            Action
          </p>
          <p
            onClick={() => {
              genreSelection("3");
              setShow(!show);
            }}
          >
            Adventure
          </p>
          <p
            onClick={() => {
              genreSelection("40");
              setShow(!show);
            }}
          >
            Casual
          </p>
          <p
            onClick={() => {
              genreSelection("6");
              setShow(!show);
            }}
          >
            Fighting
          </p>
          <p
            onClick={() => {
              genreSelection("1");
              setShow(!show);
            }}
          >
            Racing
          </p>
          <p
            onClick={() => {
              genreSelection("10");
              setShow(!show);
            }}
          >
            Real-Time Strategy
          </p>
          <p
            onClick={() => {
              genreSelection("5");
              setShow(!show);
            }}
          >
            Role-Playing
          </p>
          <p
            onClick={() => {
              genreSelection("14");
              setShow(!show);
            }}
          >
            Simulation
          </p>
          <p
            onClick={() => {
              genreSelection("15");
              setShow(!show);
            }}
          >
            Sports
          </p>
        </div>
      </div>
      <div className="categoryContainer">
        {/* maps out games from selected genre from dropdown */}
        {genre.map((game, index) => (
          <div>
            <GameCard {...game} />
          </div>
        ))}
      </div>
      <div className="dropdown">
        <button
          className="dropbtn categories"
          onClick={() => {
            setShow(!show);
          }}
        >
          Platforms
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          className="dropdown-content container"
          style={{ display: show === false ? "none" : "block" }}
        >
          <p
            onClick={() => {
              platformSelection("4");
              setShow(!show);
            }}
          >
            PC
          </p>
          <p
            onClick={() => {
              platformSelection("27,15,16,18,187");
              setShow(!show);
            }}
          >
            PlayStation
          </p>
          <p
            onClick={() => {
              platformSelection("7");
              setShow(!show);
            }}
          >
            Nintendo Switch
          </p>
          <p
            onClick={() => {
              platformSelection("14,80,1");
              setShow(!show);
            }}
          >
            Xbox
          </p>
          <p
            onClick={() => {
              platformSelection("83");
              setShow(!show);
            }}
          >
            Nintendo 64
          </p>
          <p
            onClick={() => {
              platformSelection("26,43,24");
              setShow(!show);
            }}
          >
            Gameboy
          </p>
          <p
            onClick={() => {
              platformSelection("49,79");
              setShow(!show);
            }}
          >
            NES
          </p>
        </div>
      </div>
      <div className="categoryContainer">
        {/* maps out games from selected platform from dropdown */}
        {platform?.map((game, index) => (
          <div>
            <GameCard {...game} />
          </div>
        ))}
      </div>
      <h2 className="categories">Upcoming Titles</h2>
      <div className="categoryContainer">
        {/* maps out games from selected genre from dropdown */}
        {upcoming.map((game, index) => (
          <div>
            <GameCard {...game} />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
