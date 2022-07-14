export interface Platform {
    "id": number; // 21,
    "name": string; // "Android",
    "slug": string; // "android"

}

export interface Rating {
"id": number; // 4,
"title": string; // "recommended",
"count": number; // 39,
"percent": number; // 61.9
}

export interface Added_By_Status {
"yet": number; // 9,
"owned": number; // 25,
"beaten": number; // 67,
"toplay": number; // 6,
"dropped": number; // 28
}

export interface Tag {
"id": number; // 31,
"name": string; // "Singleplayer",
"slug": string; // "singleplayer",
"language": string; // "eng",
"games_count": number; // 166924,
"image_background": string; // "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
}

export interface Short_Screenshot {
"id": number; // -1,
"image": string; // "https://media.rawg.io/media/screenshots/18f/18f3ef9aa2b8ed7047a1ee46abcb8228.jpg"
}

export interface Platform {
"id": number; // 2,
"name": string; // "PlayStation",
"slug": string; // "playstation"
}
export interface Parent_Platform {
"platform": Platform
}

export interface Genre {
"id": number; // 6,
"name": string; // "Fighting",
"slug": string; // "fighting"
}
export interface Result {
"slug": string; // "tekken-1994",
"name": string; // "Tekken (1994)",
"playtime": number; // 0,
"platforms": Platform[],
"stores": null;
"released": string; // "1994-12-09",
"tba": boolean; // false,
"background_image": string; // "https://media.rawg.io/media/screenshots/18f/18f3ef9aa2b8ed7047a1ee46abcb8228.jpg",
"rating": number; // 3.81,
"rating_top": number; // 4,
"ratings": Rating[],
"ratings_count": number; // 63,
"reviews_text_count": number; // 0,
"added": number; // 135,
"added_by_status": Added_By_Status,
"metacritic": null;
"suggestions_count": number; // 313,
"updated": string; // "2019-09-12T06:37:49",
"id": number; // 57840,
"score": string; // "72.787704",
"clip": null;
"tags": Tag[],
"esrb_rating": null,
"user_game": null,
"reviews_count": number; // 63,
"saturated_color": string; // "0f0f0f",
"dominant_color": string; // "0f0f0f",
"short_screenshots": Short_Screenshot[],
"parent_platforms": Parent_Platform[],
"genres": Genre[]
}

export default interface GetGames {
"count": number; //258,
"next": string; 
"previous": null,
"results": Result[],
"user_platforms": false
}