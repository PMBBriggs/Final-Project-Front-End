import React, { useEffect, useState } from "react";
import GameDetails from "../services/getDetails";
import GetDetails from "../models/Details";
import { useParams } from "react-router-dom";
// import { PlatformsEntity } from '../Models/getDetails';
// import { Platform } from '../Models/getDetails';
import "../styles/infoPage.css";

export default function InfoPage() {
  const [games, setGames] = useState<GetDetails>();
  const [gamesDetails, setGamesDetails] = useState<GetDetails>();
  const id = useParams().id;

  useEffect(() => {
    // 57797 spyro 57840 tekken
    GameDetails(id!).then((data) => {
      setGames(data);
    });
  }, []);

  // Trying to get the game rating on the info page (esrb rating) is in getGames Models (gameDetails.platform)
  // useEffect(() => {
  //   GameDetails(57840).then((data) => {
  //     setGamesDetails(data);
  //   });
  // }, []);

  //   getDetails(id!).then(data => setGames(data));
  //  }, []);

  return (
    <div className="infoPage">
      {/* <button
        onClick={() => {
          console.log(games);
        }}
      >
        console details
      </button> */}
      {/* button to check json details from API */}

      <h1>Info Page</h1>

      {/* Trying to get the platform to show made edits to the models getDetails interface*/}
      <section>{games?.released}</section>
      <p>{games?.esrb_rating!.name}</p>

      <h3>{games?.name}</h3>
      <section>{games?.description_raw}</section>
      <p>{games?.rating}</p>

      <img src={`${games?.background_image}`} alt="poster" className="poster" />
      <img
        src={`${games?.background_image_additional}`}
        alt="poster"
        className="poster"
      />
    </div>
    // tie to game card by making <a href={`/infopage/${games.id}`}></a> around img
  );
}
