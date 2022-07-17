import GetDetails from "../models/Details";

interface GameCardProps {
  game: GetDetails;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="Gamecard">
      <p>{game.name}</p>
      <p>{game.released}</p>
      <p>{game.description_raw}</p>
      {/* <p>{game?.parent_platform!.platform.name}</p> */}
      <p>{game?.esrb_rating!.name}</p>
    </div>
  );
}
