import React, { useEffect, useState } from "react";
import GameDetails from "../services/getDetails";
import { useParams } from "react-router-dom";
import "../styles/infoPage.css";
import GetDetails from "../models/Details";

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

  return (
    <div className="infoPage">
      <section className="nameOfGame">{games?.name}</section>
      <div className="images">
        <img
          src={`${games?.background_image}`}
          alt="poster"
          className="poster"
        />
        {/* <img
          src={`${games?.background_image_additional}`}
          alt="poster"
          className="poster"
        /> */}
      </div>
      <section className="gameDescription"> {games?.description_raw}</section>

      <div className="ratedTagDiv">
        <p className="ratedTag">Rated: </p>
        <p>{games?.esrb_rating!.name}</p>
      </div>
      <div className="releaseDateDiv">
        <p className="releaseTag">Release Date:</p>
        <p>{games?.released}</p>
      </div>
      <div className="ratingDiv">
        <p className="ratingTag">Rating: </p>
        <p> {games?.rating}</p>
      </div>
    </div>
    // tie to game card by making <a href={`/infopage/${games.id}`}></a> around img
  );
}
