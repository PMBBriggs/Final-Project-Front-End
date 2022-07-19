// GETTING LIST OF GENRES
export interface GetGenres {
  count: number;
  next: string;
  previous: string;
  results?: (ResultsEntity)[] | null;
}
export interface ResultsEntity {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
