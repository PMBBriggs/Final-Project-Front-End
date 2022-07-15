// gets details of games

export default interface GetDetails {
  "id": string; //57840,
  "slug": string; //"tekken-1994",
  "name": string; //"Tekken (1994)",
  "name_original": string; //"Tekken (1994)",
  "description":string; // "<p>Tekken is a fighting video game developed and published by Namco. It was released in arcades in December 1994 and on the PlayStation in 1995. It was the first entry in the popular Tekken series, succeeded by Tekken 2 in August 1995. The arcade game features eight playable characters, while the PlayStation version features 17 playable characters in the roster.</p>",
  "metacritic": null,
  "metacritic_platforms": [],
  "released": string; //"1994-12-09",
  "tba": boolean; //false,
  "updated": string; //"2019-09-12T06:37:49",
  "background_image": string; //"https://media.rawg.io/media/screenshots/18f/18f3ef9aa2b8ed7047a1ee46abcb8228.jpg",
  "background_image_additional":string; // "https://media.rawg.io/media/screenshots/e8d/e8d24a97428ae175ca8f218baaa9840d.jpg",
  "website": string; //"",
  "rating": number; //3.81,
  "rating_top": number; //4,
  "ratings": Rating[],
  "reactions": {},
  "added": number; //135,
  "added_by_status": Added_by_status,
  "playtime":number; // 0,
  "screenshots_count": number; //8,
  "movies_count":number; // 0,
  "creators_count": number; //5,
  "achievements_count": number; //0,
  "parent_achievements_count": number; //0,
  "reddit_url": string; //"",
  "reddit_name":string; // "",
  "reddit_description": string; //"",
  "reddit_logo": string; //"",
  "reddit_count": number; //0,
  "twitch_count": number; //0,
  "youtube_count": number; //134094,
  "reviews_text_count":number; // 0,
  "ratings_count": number; //63,
  "suggestions_count": number; //313,
  "alternative_names": [],
  "metacritic_url": string; //"",
  "parents_count": number; //0,
  "additions_count": number; //1,
  "game_series_count": number; //7,
  "user_game": null,
  "reviews_count": number; //63,
  "saturated_color": string; //"0f0f0f",
  "dominant_color": string; //"0f0f0f",
  "parent_platforms": Parent_platform[],
  "platforms": Platform[],
  "stores": [],
  "developers": Developer[],
  "genres": Genre[],
  "tags": Tag[],
  "publishers": Publisher[],
  "esrb_rating": Esrb_rating | null,
  "clip": null,
  "description_raw": string //"Tekken is a fighting video game developed and published by Namco. It was released in arcades in December 1994 and on the PlayStation in 1995. It was the first entry in the popular Tekken series, succeeded by Tekken 2 in August 1995. The arcade game features eight playable characters, while the PlayStation version features 17 playable characters in the roster."
  }

  export interface Rating {
      "id": number; //4,
      "title": string; //"recommended",
      "count": number; //39,
      "percent":number; // 61.9
      }

  export interface Added_by_status {
      "yet": number; //9,
      "owned": number; //25,
      "beaten": number; //67,
      "toplay": number; //6,
      "dropped": number; //28
      }

  export interface Parent_platform {
      "platform": P_Platform[],
  }

  export interface P_Platform {
      "id": number; //2,
      "name": string; //"PlayStation",
      "slug":string; // "playstation"
      }

  export interface Platform {
  "platform": Platform2[],
  "released_at":string; // "1994-12-09",
  "requirements": {}
  }

  export interface Platform2 {
      "id": number; //21,
      "name": string; //"Android",
      "slug": string; //"android",
      "image": null,
      "year_end": null,
      "year_start": null,
      "games_count": number; //48874,
      "image_background":string; // "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
      }

  export interface Developer {
  "id": number; //10055,
  "name": string; //"NAMCO",
  "slug":string; // "namco",
  "games_count": number; //116,
  "image_background": string; //"https://media.rawg.io/media/screenshots/a4c/a4c5dbb5174222efe630df8c30d92689.jpg"
  }

  export interface Genre   {
      "id": number; //6,
      "name": string; //"Fighting",
      "slug": string; //"fighting",
      "games_count": number; //10358,
      "image_background": string; //"https://media.rawg.io/media/games/a32/a32c9c299488ca99afc3fcea605a7718.jpg"
      }

  export interface Tag   {
      "id": number; //31,
      "name": string; //"Singleplayer",
      "slug": string; //"singleplayer",
      "language": string; //"eng",
      "games_count": number; //170743,
      "image_background": string; //"https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
      }

  export interface Publisher    {
      "id": number; //19541,
      "name":string; // "SCEE",
      "slug": string; //"scee",
      "games_count": number; //48,
      "image_background": string; //"https://media.rawg.io/media/screenshots/9d6/9d651de0c068d62ddefb3d33ceb07ed6.jpg"
      }

  export interface Esrb_rating  {
      "id": number; //4,
      "name": string; //"Mature",
      "slug":string; // "mature"
      }
