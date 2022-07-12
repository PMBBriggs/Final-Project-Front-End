// GETTING LIST OF DETAILS FOR GAME 
export interface GetDetails {
  GameDetails: any;
  id: number | string;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms?: (MetacriticPlatformsEntity)[] | null;
  released: string;
  tba: boolean;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: PlatformsEntityOrRatingsOrReactionsOrAddedByStatus;
  reactions: PlatformsEntityOrRatingsOrReactionsOrAddedByStatus;
  added: number;
  added_by_status: PlatformsEntityOrRatingsOrReactionsOrAddedByStatus;
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: string;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: string;
  youtube_count: string;
  reviews_text_count: string;
  ratings_count: number;
  suggestions_count: number;
  alternative_names?: (string)[] | null;
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  esrb_rating: EsrbRating;
  platforms?: (PlatformsEntityOrRatingsOrReactionsOrAddedByStatus)[] | null;
}
export interface MetacriticPlatformsEntity {
  metascore: number;
  url: string;
}
export interface PlatformsEntityOrRatingsOrReactionsOrAddedByStatus {
}
export interface EsrbRating {
  id: number;
  slug: string;
  name: string;
}
