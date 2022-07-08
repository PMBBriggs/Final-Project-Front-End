// GETTING LIST OF GAMES 
export interface GetGames {
  count: number;
  next: string;
  previous: string;
  results?: (ResultsEntity)[] | null;
}
export interface ResultsEntity {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: RatingsOrAddedByStatus;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: RatingsOrAddedByStatus;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: PlatformOrEsrbRating;
  platforms?: (PlatformsEntity)[] | null;
}
export interface RatingsOrAddedByStatus {
}
export interface PlatformOrEsrbRating {
  id: number;
  slug: string;
  name: string;
}
export interface PlatformsEntity {
  platform: PlatformOrEsrbRating;
  released_at: string;
  requirements: Requirements;
}
export interface Requirements {
  minimum: string;
  recommended: string;
}
