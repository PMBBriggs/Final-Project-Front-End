import React, { useEffect, useState } from "react";
import GameDetails from "../services/getDetails";
import { GetDetails } from "../models/getDetails";
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
    GameDetails(3498).then((data) => {
      setGames(data);
    });
  }, []);

  // Trying to get the game rating on the info page (esrb rating) is in getGames Models (gameDetails.platform)
  useEffect(() => {
    GameDetails(57840).then((data) => {
      setGamesDetails(data);
    });
  }, []);

  //   getDetails(id!).then(data => setGames(data));
  //  }, []);

  return (
    <div className="infoPage">
      <button
        onClick={() => {
          console.log(games);
        }}
      >
        console details
      </button>

      <h1>Info Page</h1>

      {/* Trying to get the platform to show made edits to the models getDetails interface*/}
      <section>{games?.released}</section>
      {/* <section>{games?.platforms?.PlatformsEntity?.platform}</section> */}
      {/* <section>{games?.Platform.name}</section> */}
      {/* <section>{games?.esrb_rating}</section> */}

      <h3>{games?.name}</h3>
      <section>{games?.description}</section>
      <p>{games?.rating}</p>

      <img src={`${games?.background_image}`} alt="poster" className="poster" />
      <img
        src={`${games?.background_image_additional}`}
        alt="poster"
        className="poster"
      />
    </div>
  );
}
